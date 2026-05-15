/**
 * Property Finder Integration Service
 * Syncs Investment Stakeholders and Portfolio Assets between Sierra Blu Strategic Pipeline and PF Enterprise API (atlas.propertyfinder.com/v1)
 */

import { pfClient, PFListingRequest, PFLead } from '../property-finder-client';
import { adminDb } from '../server/firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';
import { Unit, Lead, COLLECTIONS, UserProfile } from '../models/schema';
import { PFListing, PFPropertyType } from '../property-finder/types';

export interface PFStakeholderSyncSummary {
  created: number;
  updated: number;
  skipped: number;
}

export class PFIntegrationService {

  static async syncIncomingStakeholders(): Promise<PFStakeholderSyncSummary> {
    const summary: PFStakeholderSyncSummary = { created: 0, updated: 0, skipped: 0 };
    const pfLeads = await pfClient.fetchInvestmentStakeholderRegistry({ perPage: '50' });

    for (const lead of pfLeads.data) {
      const existing = await adminDb.collection(COLLECTIONS.investmentStakeholders)
        .where('pfLeadId', '==', lead.id)
        .get();

      const phone = lead.sender?.contacts?.find(c => c.type === 'phone')?.value || '';
      const email = lead.sender?.contacts?.find(c => c.type === 'email')?.value || '';

      if (!phone && existing.empty) {
        summary.skipped++;
        continue;
      }

      const payload: Partial<Lead> & Record<string, unknown> = {
        name: lead.sender?.name || 'Property Finder Lead',
        phone,
        email,
        source: 'property-finder',
        stage: 'inbound',
        phase: lead.status === 'replied' ? 'consultation' : 'acquisition',
        originChannel: `Property Finder (${lead.channel})`,
        pfLeadId: lead.id,
        pfListingReferenceNumber: lead.listing?.reference || '',
        updatedAt: Timestamp.now(),
      };

      if (existing.empty) {
        await adminDb.collection(COLLECTIONS.investmentStakeholders).add({
          ...payload,
          automation: { botInitiated: false, scoringCompleted: false, whatsappFollowupSent: false, viewingReminderSent: false },
          createdAt: Timestamp.now(),
        });
        summary.created++;
      } else {
        await existing.docs[0].ref.update(payload);
        summary.updated++;
      }
    }

    return summary;
  }

  static async syncIncomingPortfolioAssets() {
    let imported = 0;
    let updated = 0;

    const pfResult = await pfClient.searchPortfolioAssets({ perPage: '100' });
    console.log('[PF API] Found listings count:', pfResult.data?.length || 0);

    const listings = pfResult.data || [];

    for (const listing of listings) {
      const ref = listing.reference || String(listing.id);
      const existing = await adminDb.collection(COLLECTIONS.portfolioAssets)
        .where('pfReferenceNumber', '==', ref)
        .get();

      const priceVal = listing.price?.amounts?.sale || listing.price?.amounts?.yearly || listing.price?.amounts?.monthly || 0;

      let beds = 0;
      if (listing.bedrooms === 'studio') {
        beds = 0;
      } else if (listing.bedrooms) {
        beds = parseInt(listing.bedrooms as string) || 0;
      }

      let baths = 0;
      if (listing.bathrooms && listing.bathrooms !== 'none') {
        baths = parseInt(listing.bathrooms as string) || 0;
      }

      const payload: Partial<Unit> = {
        title: listing.title?.en || '',
        description: listing.description?.en || '',
        price: priceVal,
        propertyType: listing.type as any,
        status: listing.offeringType === 'rent' ? 'rented' : 'available',
        category: listing.category || 'residential',
        bedrooms: beds,
        bathrooms: baths,
        area: listing.size || 0,
        pfReferenceNumber: ref,
        updatedAt: Timestamp.now(),
        images: listing.media?.images?.map(i => i.original.url) || [],
      };

      if (existing.empty) {
        await adminDb.collection(COLLECTIONS.portfolioAssets).add({ ...payload, createdAt: Timestamp.now() });
        imported++;
      } else {
        await existing.docs[0].ref.update(payload);
        updated++;
      }
    }

    return { imported, updated };
  }

  static async publishListing(unitId: string) {
    const unitSnap = await adminDb.collection(COLLECTIONS.portfolioAssets).doc(unitId).get();
    if (!unitSnap.exists) throw new Error('Unit not found');

    const unit = { id: unitSnap.id, ...unitSnap.data() } as Unit;
    const locationId = await this.resolveLocationId(unit);
    const publicProfileId = await this.resolvePublicProfileId();

    const isRent = unit.status === 'rented';

    const pfListing: PFListingRequest = {
      reference: unit.pfReferenceNumber || `SB-${unitId.slice(0, 8)}`,
      title: { en: unit.title },
      description: { en: unit.description || unit.title },
      price: { 
        type: isRent ? 'yearly' : 'sale',
        amounts: isRent ? { yearly: unit.price } : { sale: unit.price }
      },
      type: this.mapPropertyType(unit.propertyType),
      category: 'residential',
      offeringType: isRent ? 'rent' : 'sale',
      bedrooms: String(unit.bedrooms || 0),
      bathrooms: String(unit.bathrooms || 1),
      size: Math.max(unit.area || 0, 1),
      location: { id: locationId },
      media: {
        images: (unit.images || []).map(url => ({ original: { url } })),
      },
    };

    const result = await pfClient.createPortfolioAsset(pfListing);

    await adminDb.collection(COLLECTIONS.portfolioAssets).doc(unitId).update({
      'automation.isPublishedToPF': true,
      pfReferenceNumber: result.reference || String(result.id),
      lastSyncAt: Timestamp.now(),
      syncSource: 'property-finder',
    });

    if (result.id) {
      await pfClient.publishPortfolioAsset(result.id);
    }

    return result;
  }

  private static async resolveLocationId(unit: Unit): Promise<number> {
    const lookup = unit.compound || unit.location || unit.city || 'New Cairo';
    try {
      const result = await pfClient.searchLocations(lookup);
      return result.data[0]?.id || 1;
    } catch {
      return 1;
    }
  }

  private static async resolvePublicProfileId(): Promise<number> {
    try {
      const users = await pfClient.getUsers({ perPage: '1' });
      return users.data[0]?.publicProfile?.id || 1;
    } catch {
      return 1;
    }
  }

  private static mapPropertyType(type: string): PFPropertyType {
    const mapping: Record<string, PFPropertyType> = {
      apartment: 'apartment', villa: 'villa', townhouse: 'townhouse',
      penthouse: 'penthouse', duplex: 'duplex', chalet: 'chalet',
      'twin-house': 'twin-house', palace: 'palace', land: 'land',
    };
    return mapping[type?.toLowerCase()] || 'apartment';
  }
}

