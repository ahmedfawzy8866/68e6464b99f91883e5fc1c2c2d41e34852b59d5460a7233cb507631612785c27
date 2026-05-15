import { NextRequest, NextResponse } from 'next/server';
import { pfClient } from '@/lib/property-finder-client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  try {
    switch (action) {
      case 'search-portfolio-assets': {
        const params = Object.fromEntries(searchParams.entries());
        delete params.action;
        console.log('[PF API] Searching portfolio assets with params:', params);
        const result = await pfClient.searchPortfolioAssets(params);
        console.log('[PF API] Found assets count:', result.data?.length || 0);
        return NextResponse.json(result);
      }
      case 'search-locations': {
        const q = searchParams.get('q') || '';
        const locations = await pfClient.searchLocations(q);
        return NextResponse.json(locations);
      }
      case 'fetch-stakeholder-protocols': {
        const params = Object.fromEntries(searchParams.entries());
        delete params.action;
        const leads = await pfClient.fetchInvestmentStakeholderRegistry(params);
        return NextResponse.json(leads);
      }
      case 'users': {
        const params = Object.fromEntries(searchParams.entries());
        delete params.action;
        const users = await pfClient.getUsers(params);
        return NextResponse.json(users);
      }
      case 'credit-balance': {
        const balance = await pfClient.getCreditBalance();
        return NextResponse.json(balance);
      }
      case 'webhooks': {
        const hooks = await pfClient.listWebhooks();
        return NextResponse.json(hooks);
      }
      default:
        return NextResponse.json({ error: 'Unknown action. Use: search-portfolio-assets, search-locations, fetch-stakeholder-protocols, users, credit-balance, webhooks' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('[PF API GET]', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const action = new URL(request.url).searchParams.get('action');

    switch (action) {
      case 'create-portfolio-asset': {
        const result = await pfClient.createPortfolioAsset(body);
        return NextResponse.json(result, { status: 201 });
      }
      case 'publish-asset': {
        if (!body.id) return NextResponse.json({ error: 'id required' }, { status: 400 });
        await pfClient.publishPortfolioAsset(body.id);
        return NextResponse.json({ success: true, message: `Portfolio Asset ${body.id} publish requested` });
      }
      case 'sync-stakeholders': {
        const { PFIntegrationService } = await import('@/lib/services/PFIntegrationService');
        const result = await PFIntegrationService.syncIncomingStakeholders();
        return NextResponse.json({ success: true, summary: result });
      }
      case 'sync-portfolio-assets': {
        const { PFIntegrationService } = await import('@/lib/services/PFIntegrationService');
        const result = await PFIntegrationService.syncIncomingPortfolioAssets();
        return NextResponse.json({ success: true, summary: result });
      }
      case 'unpublish': {
        if (!body.id) return NextResponse.json({ error: 'id required' }, { status: 400 });
        await pfClient.unpublishPortfolioAsset(body.id);
        return NextResponse.json({ success: true, message: `Listing ${body.id} unpublished` });
      }
      case 'subscribe-webhook': {
        if (!body.eventId || !body.url) return NextResponse.json({ error: 'eventId and url required' }, { status: 400 });
        const result = await pfClient.subscribeWebhook(body.eventId, body.url, body.secret);
        return NextResponse.json(result, { status: 201 });
      }
      default:
        return NextResponse.json({ error: 'Unknown action. Use: create-portfolio-asset, publish-asset, sync-stakeholders, sync-portfolio-assets, unpublish, subscribe-webhook' }, { status: 400 });
    }
  } catch (error: any) {
    console.error('[PF API POST]', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'id required as query param' }, { status: 400 });

    const body = await request.json();
    const result = await pfClient.updatePortfolioAsset(id, body);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('[PF API PUT]', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = new URL(request.url).searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'id required as query param' }, { status: 400 });

    await pfClient.deletePortfolioAsset(id);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('[PF API DELETE]', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
