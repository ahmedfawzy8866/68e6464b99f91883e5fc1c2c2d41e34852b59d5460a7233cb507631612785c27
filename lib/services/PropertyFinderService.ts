/**
 * Sierra Blu Strategic Pipeline Gateway - Portfolio Asset & Stakeholder Service
 *
 * This client-side service talks to the internal Strategic Pipeline API.
 */

import type { PFListing } from '../property-finder-client';

interface PFSearchResponse {
  data?: PFListing[];
  meta?: Record<string, unknown>;
  error?: string;
}

interface PublishListingResponse {
  success?: boolean;
  result?: PFListing;
  error?: string;
}

export class PropertyFinderService {
  private static instance: PropertyFinderService;
  private apiBase = '/api/property-finder';

  private constructor() {}

  public static getInstance(): PropertyFinderService {
    if (!PropertyFinderService.instance) {
      PropertyFinderService.instance = new PropertyFinderService();
    }
    return PropertyFinderService.instance;
  }

  /**
   * Fetch the latest portfolio assets from the internal gateway.
   */
  public async fetchPortfolioAssets(filters: Record<string, string | number> = { status: 'published' }): Promise<PFListing[]> {
    const params = new URLSearchParams({ action: 'search-portfolio-assets' });
    Object.entries(filters).forEach(([key, value]) => params.set(key, String(value)));

    const response = await fetch(`${this.apiBase}?${params.toString()}`, {
      method: 'GET',
      cache: 'no-store',
    });

    const result = await response.json() as PFSearchResponse;
    if (!response.ok || result.error) {
      throw new Error(result.error || 'Property Finder listing sync failed.');
    }

    return result.data || [];
  }

  /**
   * Trigger an investment stakeholder sync from the Strategic Pipeline.
   */
  public async syncIncomingStakeholders(): Promise<{ created: number; updated: number; skipped: number }> {
    const response = await fetch(`${this.apiBase}?action=sync-stakeholders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    const result = await response.json() as { success?: boolean; summary?: { created: number; updated: number; skipped: number }; error?: string };
    if (!response.ok || !result.success || !result.summary) {
      throw new Error(result.error || 'Property Finder lead sync failed.');
    }

    return result.summary;
  }

  /**
   * Publish a local Portfolio Asset to the Strategic Pipeline.
   */
  public async publishToPF(assetId: string): Promise<{ success: boolean; externalId?: string }> {
    const response = await fetch(`${this.apiBase}?action=publish-asset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: assetId }),
    });

    const result = await response.json() as PublishListingResponse;
    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Property Finder publish failed.');
    }

    return {
      success: true,
      externalId: result.result?.reference,
    };
  }
}

export const pfService = PropertyFinderService.getInstance();
