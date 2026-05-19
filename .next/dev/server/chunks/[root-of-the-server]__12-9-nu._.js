module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/my-sierra-project/lib/stubs/empty.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {

// Sierra Blu Architecture — Turbopack Stub
// This file is used to resolve server-only packages to empty modules in the client/static-analysis bundle.
class NoOpClass {
    constructor(..._args){}
    set() {}
    get() {
        return null;
    }
    remove() {}
    getMap() {
        return {};
    }
    clone() {
        return new NoOpClass();
    }
    start() {}
    shutdown() {
        return Promise.resolve();
    }
    register() {}
    addSpanProcessor() {}
    getTracer() {
        return {
            startSpan: ()=>({
                    end: ()=>{},
                    setAttribute: ()=>{},
                    setStatus: ()=>{}
                })
        };
    }
}
// Named exports covering common usage across grpc-js, opentelemetry, firebase-admin, etc.
module.exports = {
    Metadata: NoOpClass,
    OTLPTraceExporter: NoOpClass,
    NodeSDK: NoOpClass,
    BatchSpanProcessor: NoOpClass,
    SimpleSpanProcessor: NoOpClass,
    Resource: NoOpClass,
    resourceFromAttributes: ()=>({}),
    trace: {
        getTracer: ()=>NoOpClass.prototype.getTracer(),
        getActiveSpan: ()=>null
    },
    SEMRESATTRS_PROJECT_NAME: 'service.name',
    default: {}
};
}),
"[project]/my-sierra-project/lib/server/firebase-admin.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adminApp",
    ()=>adminApp,
    "adminAppCheck",
    ()=>adminAppCheck,
    "adminAuth",
    ()=>adminAuth,
    "adminDb",
    ()=>adminDb,
    "isAdminInitialized",
    ()=>isAdminInitialized
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/lib/stubs/empty.js [app-route] (ecmascript)");
;
/**
 * SIERRA BLU — FIREBASE ADMIN SERVICE (V12.1 Hardened)
 */ // Proxy returned when Admin SDK is unavailable — prevents hard crashes
const makeUnavailable = (name)=>new Proxy({}, {
        get (_target, prop) {
            if (prop === 'then') return undefined;
            return (...args)=>{
                console.warn(`⚠️ [firebase-admin] ${name}.${String(prop)} called but not initialized.`);
                // Return chainable mock objects to prevent "undefined is not a function" errors
                const chainable = {
                    get: ()=>Promise.resolve({
                            size: 0,
                            empty: true,
                            forEach: ()=>{},
                            exists: false,
                            data: ()=>({})
                        }),
                    set: ()=>Promise.resolve(),
                    update: ()=>Promise.resolve(),
                    add: ()=>Promise.resolve({
                            id: 'mock-id'
                        }),
                    limit: ()=>chainable,
                    orderBy: ()=>chainable,
                    where: ()=>chainable,
                    doc: ()=>chainable,
                    collection: ()=>chainable
                };
                return chainable;
            };
        }
    });
let adminApp = makeUnavailable('App');
let adminAuth = makeUnavailable('Auth');
let adminDb = makeUnavailable('Firestore');
let adminAppCheck = makeUnavailable('AppCheck');
let isAdminInitialized = false;
try {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["apps"].length) {
        const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
        const projectId = process.env.FIREBASE_PROJECT_ID || ("TURBOPACK compile-time value", "sierra-blu");
        const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
        const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
        if (serviceAccount) {
            console.log('🔐 [Firebase] Initializing with service account JSON');
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeApp"]({
                credential: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["credential"].cert(JSON.parse(serviceAccount)),
                projectId: projectId,
                storageBucket: ("TURBOPACK compile-time value", "sierra-blu.firebasestorage.app")
            });
        } else if (projectId && clientEmail && privateKey) {
            console.log('🔐 [Firebase] Initializing with individual env variables');
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeApp"]({
                credential: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["credential"].cert({
                    projectId,
                    clientEmail,
                    privateKey
                }),
                projectId: projectId,
                storageBucket: ("TURBOPACK compile-time value", "sierra-blu.firebasestorage.app")
            });
        } else {
            console.log('🔐 [Firebase] Attempting Application Default Credentials');
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initializeApp"]({
                credential: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["credential"].applicationDefault(),
                projectId: projectId || 'sierra-blu',
                storageBucket: ("TURBOPACK compile-time value", "sierra-blu.firebasestorage.app")
            });
        }
    }
    adminApp = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["app"]();
    adminAuth = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"]();
    adminDb = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["firestore"]();
    adminAppCheck = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$stubs$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appCheck"]();
    isAdminInitialized = true;
} catch (error) {
    console.warn('[firebase-admin] Initialization failed — Admin features limited.\n' + 'Reason:', error instanceof Error ? error.message : 'Unknown error');
}
;
}),
"[project]/my-sierra-project/lib/models/schema.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SIERRA BLU — FIRESTORE DATA MODEL
 * Canonical type definitions for all collections.
 * This is the single source of truth for the database schema.
 */ __turbopack_context__.s([
    "COLLECTIONS",
    ()=>COLLECTIONS,
    "MARKETS",
    ()=>MARKETS
]);
const COLLECTIONS = {
    portfolioAssets: 'listings',
    units: 'listings',
    projects: 'projects',
    developers: 'developers',
    mediaAssets: 'mediaAssets',
    investmentStakeholders: 'leads',
    stakeholders: 'leads',
    strategicPipeline: 'deals',
    sales: 'sales',
    activities: 'activities',
    users: 'users',
    syncQueue: 'syncQueue',
    syncLog: 'syncLog',
    vouchers: 'vouchers',
    proposals: 'proposals',
    brokerListings: 'broker_listings',
    viewings: 'viewings',
    intelligence: 'intelligence',
    conciergeSelections: 'concierge_selections'
};
const MARKETS = {
    EGYPT: 'egypt',
    UAE: 'uae'
};
}),
"[project]/my-sierra-project/app/api/listings/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$server$2f$firebase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/lib/server/firebase-admin.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$models$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/lib/models/schema.ts [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (id) {
            const doc = await __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$server$2f$firebase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$models$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COLLECTIONS"].units).doc(id).get();
            if (!doc.exists) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    error: 'Portfolio Asset not found'
                }, {
                    status: 404
                });
            }
            const data = doc.data();
            return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                asset: {
                    id: doc.id,
                    ...data,
                    residences: data.bedrooms || 0,
                    washrooms: data.bathrooms || 0,
                    areaSqM: data.area || 0,
                    assetType: data.propertyType || data.type || 'apartment'
                }
            });
        }
        const limitParam = parseInt(searchParams.get('limit') || '12', 10);
        const type = searchParams.get('type');
        const compound = searchParams.get('compound');
        const beds = searchParams.get('beds');
        const maxPrice = searchParams.get('maxPrice');
        let query = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$server$2f$firebase$2d$admin$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["adminDb"].collection(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$models$2f$schema$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COLLECTIONS"].units).limit(limitParam);
        if (type) query = query.where('propertyType', '==', type);
        if (compound) query = query.where('compound', '==', compound);
        if (beds) query = query.where('bedrooms', '>=', parseInt(beds, 10));
        if (maxPrice) query = query.where('price', '<=', parseInt(maxPrice, 10));
        const snapshot = await query.get();
        const assets = snapshot.docs.map((doc)=>{
            const data = doc.data();
            return {
                id: doc.id,
                ...data,
                residences: data.bedrooms || 0,
                washrooms: data.bathrooms || 0,
                areaSqM: data.area || 0,
                assetType: data.propertyType || data.type || 'apartment'
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            assets,
            count: assets.length
        });
    } catch (error) {
        console.error('[PORTFOLIO_ASSET_ERROR] Failed to fetch assets:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Internal Server Error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12-9-nu._.js.map