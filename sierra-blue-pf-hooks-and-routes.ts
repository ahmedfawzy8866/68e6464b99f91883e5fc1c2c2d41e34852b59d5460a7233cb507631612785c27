// ════════════════════════════════════════════════════════════════
// FILE 1: sierra-blue/hooks/useStakeholderPipeline.ts
// React hook — real-time Strategic Pipeline for Investment Stakeholders
// ════════════════════════════════════════════════════════════════

import { useState, useEffect, useMemo } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  serverTimestamp,
  DocumentData,
  QueryConstraint,
} from "firebase/firestore";

export type PipelineStage =
  | "new_inquiry"
  | "contacted"
  | "viewing_scheduled"
  | "viewing_done"
  | "offer_submitted"
  | "closed_won"
  | "closed_lost";

export type StakeholderStatus = "pending_review" | "active" | "warm" | "hot" | "cold";

export interface InvestmentStakeholder extends DocumentData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  message?: string;
  source: "property_finder" | "whatsapp" | "telegram" | "direct";
  sbrCodeInterest: string;
  portfolioAssetId?: string;
  pfLeadId?: string; // Original ID from Property Finder
  status: StakeholderStatus;
  stage: PipelineStage;
  neuralMatchScore?: number;      // 0-100 from Matchmaker
  leilaScore?: number;            // 0-10 from Matchmaker
  advisorAssigned?: string;
  budgetMin?: number;
  budgetMax?: number;
  preferredCompounds?: string[];
  lastEngagement?: Date;
  createdAt: Date;
}

export interface UseStakeholderPipelineReturn {
  stakeholders: InvestmentStakeholder[];
  grouped: Map<PipelineStage, InvestmentStakeholder[]>;
  highNetWorth: InvestmentStakeholder[]; // Formerly 'hot'
  loading: boolean;
  error: string | null;
  updateStage: (stakeholderId: string, stage: PipelineStage) => Promise<void>;
  updateStatus: (stakeholderId: string, status: StakeholderStatus) => Promise<void>;
  assignAdvisor: (stakeholderId: string, advisorId: string) => Promise<void>;
  totalStakeholders: number;
  strategicConversionRate: number;
}

const STAGE_ORDER: PipelineStage[] = [
  "new_inquiry",
  "contacted",
  "viewing_scheduled",
  "viewing_done",
  "offer_submitted",
  "closed_won",
  "closed_lost",
];

export function useStakeholderPipeline(
  options: {
    sourceFilter?: "property_finder" | "all";
    minNeuralScore?: number;
    advisorId?: string;
    maxLimit?: number;
  } = {}
): UseStakeholderPipelineReturn {
  const {
    sourceFilter   = "all",
    minNeuralScore = 0,
    maxLimit       = 100,
  } = options;

  const [stakeholders, setStakeholders] = useState<InvestmentStakeholder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    const db = getFirestore();
    const constraints: QueryConstraint[] = [orderBy("createdAt", "desc")];

    if (sourceFilter === "property_finder") {
      constraints.unshift(where("source", "==", "property_finder"));
    }

    if (options.advisorId) {
      constraints.unshift(where("advisorAssigned", "==", options.advisorId));
    }

    const q = query(collection(db, "stakeholders"), ...constraints);

    const unsub = onSnapshot(
      q,
      (snap) => {
        let docs = snap.docs.map(d => ({ id: d.id, ...d.data() } as InvestmentStakeholder));

        if (minNeuralScore > 0) {
          docs = docs.filter(l => (l.neuralMatchScore ?? 0) >= minNeuralScore);
        }

        setStakeholders(docs.slice(0, maxLimit));
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [sourceFilter, minNeuralScore, options.advisorId, maxLimit]);

  const grouped = useMemo(() => {
    const map = new Map<PipelineStage, InvestmentStakeholder[]>();
    for (const stage of STAGE_ORDER) map.set(stage, []);
    for (const stakeholder of stakeholders) {
      const bucket = map.get(stakeholder.stage) ?? [];
      bucket.push(stakeholder);
      map.set(stakeholder.stage, bucket);
    }
    return map;
  }, [stakeholders]);

  const highNetWorth = useMemo(
    () => stakeholders.filter(l => (l.neuralMatchScore ?? 0) >= 85),
    [stakeholders]
  );

  const strategicConversionRate = useMemo(() => {
    if (!stakeholders.length) return 0;
    const closed = stakeholders.filter(l => l.stage === "closed_won").length;
    return Math.round((closed / stakeholders.length) * 100);
  }, [stakeholders]);

  const db = getFirestore();

  const updateStage = async (stakeholderId: string, stage: PipelineStage) => {
    await updateDoc(doc(db, "stakeholders", stakeholderId), {
      stage,
      lastEngagement: serverTimestamp(),
      updatedAt:      serverTimestamp(),
    });
  };

  const updateStatus = async (stakeholderId: string, status: StakeholderStatus) => {
    await updateDoc(doc(db, "stakeholders", stakeholderId), {
      status,
      updatedAt: serverTimestamp(),
    });
  };

  const assignAdvisor = async (stakeholderId: string, advisorId: string) => {
    await updateDoc(doc(db, "stakeholders", stakeholderId), {
      advisorAssigned: advisorId,
      updatedAt:       serverTimestamp(),
    });
  };

  return {
    stakeholders,
    grouped,
    highNetWorth,
    loading,
    error,
    updateStage,
    updateStatus,
    assignAdvisor,
    totalStakeholders: stakeholders.length,
    strategicConversionRate,
  };
}


// ════════════════════════════════════════════════════════════════
// FILE 2: sierra-blue/hooks/usePortfolioAssets.ts
// React hook — live Property Finder synced Portfolio Assets
// ════════════════════════════════════════════════════════════════

import { useState as _useState, useEffect as _useEffect, useCallback } from "react";
import {
  getFirestore as _getFirestore,
  collection as _collection,
  query as _query,
  where as _where,
  orderBy as _orderBy,
  onSnapshot as _onSnapshot,
} from "firebase/firestore";
import type { SBRPortfolioAsset, PFSyncResult } from "./sierra-blue-portfolio-api";
import { pushAssetToPF, getPFAssetAnalytics } from "./sierra-blue-portfolio-api";

export interface AssetWithAnalytics extends SBRPortfolioAsset {
  pfViews?: number;
  pfStakeholderInterests?: number;
  pfPhoneReveals?: number;
  pfImpressions?: number;
  pfCTR?: number;
  syncedToPF?: boolean;
  investmentTier?: string;
}

export function usePortfolioAssets(options: {
  syncedOnly?: boolean;
  compound?: string;
  maxLimit?: number;
} = {}) {
  const { syncedOnly = false, compound, maxLimit = 50 } = options;

  const [assets, _setAssets] = _useState<AssetWithAnalytics[]>([]);
  const [loading, _setLoading] = _useState(true);
  const [error,   _setError]   = _useState<string | null>(null);

  _useEffect(() => {
    const db = _getFirestore();
    const constraints: any[] = [
      _where("status", "==", "active"),
      _orderBy("strategicScore", "desc"),
    ];

    if (syncedOnly) constraints.unshift(_where("syncedToPF", "==", true));
    if (compound)   constraints.unshift(_where("compound", "==", compound));

    const q = _query(_collection(db, "portfolio_assets"), ...constraints);

    const unsub = _onSnapshot(q, snap => {
      const docs = snap.docs
        .slice(0, maxLimit)
        .map(d => ({ id: d.id, ...d.data() } as AssetWithAnalytics));
      _setAssets(docs);
      _setLoading(false);
    }, err => {
      _setError(err.message);
      _setLoading(false);
    });

    return () => unsub();
  }, [syncedOnly, compound, maxLimit]);

  const syncAsset = useCallback(
    async (asset: SBRPortfolioAsset): Promise<PFSyncResult> => {
      return pushAssetToPF(asset);
    },
    []
  );

  const fetchAnalytics = useCallback(
    async (pfAssetId: string) => {
      return getPFAssetAnalytics(pfAssetId);
    },
    []
  );

  const syncedCount   = assets.filter(l => l.syncedToPF).length;
  const unsyncedCount = assets.filter(l => !l.syncedToPF).length;
  const flagshipAssets = assets.filter(l => l.investmentTier === "Flagship");

  return {
    assets,
    loading,
    error,
    syncAsset,
    fetchAnalytics,
    syncedCount,
    unsyncedCount,
    flagshipAssets,
    totalActive: assets.length,
  };
}

// ════════════════════════════════════════════════════════════════
// FILE 3: app/api/pipeline-webhook/route.ts
// Next.js App Router — Strategic Pipeline Stakeholder Webhook
// ════════════════════════════════════════════════════════════════

/**
 * Endpoint for Property Finder and WhatsApp integrations to push 
 * new Investment Stakeholder inquiries into the Strategic Pipeline.
 */
