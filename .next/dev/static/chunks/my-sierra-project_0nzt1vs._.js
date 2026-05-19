(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-sierra-project/lib/services/InventoryService.client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SIERRA BLU — CLIENT INVENTORY SERVICE (SAFE)
 * This file is a safe wrapper that calls the API instead of the DB directly.
 */ __turbopack_context__.s([
    "InventoryService",
    ()=>InventoryService
]);
const InventoryService = {
    async getProperty (id) {
        try {
            const res = await fetch(`/api/listings?id=${id}`);
            const data = await res.json();
            if (data.success && data.listing) {
                return data.listing;
            }
            return null;
        } catch (err) {
            console.error('Client Inventory Error:', err);
            return null;
        }
    },
    async getFeaturedAssets (count = 3) {
        try {
            const res = await fetch(`/api/listings?limit=${count}`);
            const data = await res.json();
            if (data.success && data.listings) {
                return data.listings;
            }
            return [];
        } catch (err) {
            console.error('Client Inventory Error:', err);
            return [];
        }
    },
    async filterAssets (filters) {
        try {
            const queryParams = new URLSearchParams();
            if (filters.type) queryParams.append('type', filters.type);
            if (filters.compound) queryParams.append('compound', filters.compound);
            if (filters.beds) queryParams.append('beds', filters.beds.toString());
            if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice.toString());
            const res = await fetch(`/api/listings?${queryParams.toString()}`);
            const data = await res.json();
            if (data.success && data.listings) {
                return data.listings;
            }
            return [];
        } catch (err) {
            console.error('Client Inventory Error:', err);
            return [];
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/components/Landing/ShieldLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShieldLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ShieldLogo({ size = 44 }) {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isDark = theme !== 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: size,
            height: size * 1.15,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: size > 100 ? '8%' : 0,
            flexShrink: 0
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/media__1776833126426.png",
            alt: "Sierra Blu",
            width: size,
            height: size * 1.4,
            style: {
                objectFit: 'cover',
                objectPosition: 'center 8%',
                mixBlendMode: isDark ? 'screen' : 'multiply',
                filter: isDark ? 'brightness(1.3) contrast(1.2)' : 'contrast(1.1)'
            },
            priority: true
        }, void 0, false, {
            fileName: "[project]/my-sierra-project/components/Landing/ShieldLogo.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-sierra-project/components/Landing/ShieldLogo.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(ShieldLogo, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ShieldLogo;
var _c;
__turbopack_context__.k.register(_c, "ShieldLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/components/Landing/PropCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PropCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ICON_ATTRS = {
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
};
function Spec({ icon, children, isAr }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1.5 text-[12px] font-medium tracking-tight text-on-surface-variant ${isAr ? 'flex-row-reverse' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-secondary/60",
                children: icon
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = Spec;
function PropCard({ id, title, location, price, beds, baths, sqft, badge, badgeColor, img, videoUrl, dealDelay = 0, dealt = false, isAr = false }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/listings/${id}`,
        className: `deal-card${dealt ? ' dealt' : ''} block group no-underline h-full`,
        style: {
            animationDelay: `${dealDelay}s`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lux-card card-lift rounded-2xl overflow-hidden border border-outline-variant bg-surface-container-lowest h-full flex flex-col shadow-ambient",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[260px] overflow-hidden bg-primary",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img,
                            alt: title,
                            className: "w-full h-full object-cover transition-transform duration-1000 cubic-bezier(0.16,1,0.3,1) group-hover:scale-110"
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute top-4 ${isAr ? 'right-4' : 'left-4'} lux-glass !bg-secondary/90 !text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase shadow-xl border-none`,
                            children: badge
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this),
                        videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute bottom-4 ${isAr ? 'left-4' : 'right-4'} flex items-center gap-2 lux-glass !bg-black/40 px-3 py-1.5 rounded-full text-[9px] font-bold tracking-widest text-white uppercase backdrop-blur-sm border border-white/10`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-secondary animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                    lineNumber: 72,
                                    columnNumber: 15
                                }, this),
                                isAr ? 'عرض سينمائي' : 'Cinematic View'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this),
                        videoUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full lux-glass flex items-center justify-center text-white shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8 5v14l11-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-6 flex flex-col flex-grow ${isAr ? 'text-right items-end' : 'text-left items-start'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[10px] font-bold tracking-[0.25em] uppercase text-secondary mb-3 font-body",
                            children: location.split('·')[0]?.trim()
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-serif text-2xl font-medium text-on-surface mb-4 leading-tight line-clamp-2 h-[3.5rem] group-hover:text-secondary transition-colors duration-300",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lux-gold-text text-xl font-semibold mb-6 tracking-tight font-mono",
                            children: price
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-[1px] bg-outline-variant/30 mb-6"
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full flex items-center justify-between gap-4 ${isAr ? 'flex-row-reverse' : ''}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spec, {
                                    isAr: isAr,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        ...ICON_ATTRS,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 7v11a2 2 0 002 2h14a2 2 0 002-2V7"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 10H3"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M7 7V4a1 1 0 011-1h3v4"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17 7V4a1 1 0 00-1-1h-3v4"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    children: [
                                        beds,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-60",
                                            children: isAr ? 'غرف' : 'Beds'
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                            lineNumber: 119,
                                            columnNumber: 22
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spec, {
                                    isAr: isAr,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        ...ICON_ATTRS,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 12h16a1 1 0 011 1v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a1 1 0 011-1z"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 12V5a2 2 0 012-2h8a2 2 0 012 2v7"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this),
                                    children: [
                                        baths,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "opacity-60",
                                            children: isAr ? 'حمامات' : 'Baths'
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                            lineNumber: 128,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Spec, {
                                    isAr: isAr,
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        ...ICON_ATTRS,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: "3",
                                                y: "3",
                                                width: "18",
                                                height: "18",
                                                rx: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 133,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 9h18"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M9 3v18"
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    children: sqft
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-sierra-project/components/Landing/PropCard.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(PropCard, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c1 = PropCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Spec");
__turbopack_context__.k.register(_c1, "PropCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/components/UI/BrandLogo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrandLogo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function BrandLogo({ size = 'md', themeOverride, variant = 'shield' }) {
    _s();
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BrandLogo.useEffect": ()=>{
            if (themeOverride) {
                setCurrentTheme(themeOverride);
                return;
            }
            const updateTheme = {
                "BrandLogo.useEffect.updateTheme": ()=>{
                    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
                    setCurrentTheme(theme);
                }
            }["BrandLogo.useEffect.updateTheme"];
            updateTheme();
            const observer = new MutationObserver(updateTheme);
            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    'data-theme'
                ]
            });
            return ({
                "BrandLogo.useEffect": ()=>observer.disconnect()
            })["BrandLogo.useEffect"];
        }
    }["BrandLogo.useEffect"], [
        themeOverride
    ]);
    // ── Wordmark sizes (horizontal banner) ──────────────────────────────────
    const wordmarkSizes = {
        sm: {
            width: 120,
            height: 48
        },
        md: {
            width: 160,
            height: 64
        },
        lg: {
            width: 300,
            height: 120
        },
        xl: {
            width: 440,
            height: 176
        }
    };
    // ── Emblem sizes (square shield) ────────────────────────────────────────
    const emblemSizes = {
        sm: {
            width: 40,
            height: 44
        },
        md: {
            width: 56,
            height: 62
        },
        lg: {
            width: 96,
            height: 106
        },
        xl: {
            width: 160,
            height: 176
        }
    };
    const isLight = currentTheme === 'light';
    // ── SHIELD VARIANT (official PNG logo — navy/gold crest) ────────────────
    if (variant === 'shield') {
        const { width, height } = emblemSizes[size];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/sierra-blu-logo.png",
            alt: "Sierra Blu Realty",
            draggable: false,
            width: width,
            height: height,
            style: {
                width: `${width}px`,
                height: `${height}px`,
                objectFit: 'contain',
                userSelect: 'none',
                filter: isLight ? 'drop-shadow(0 1px 3px rgba(212,175,55,0.4))' : 'drop-shadow(0 2px 8px rgba(212,175,55,0.35))',
                transition: 'filter 0.4s ease'
            }
        }, void 0, false, {
            fileName: "[project]/my-sierra-project/components/UI/BrandLogo.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    // ── EMBLEM VARIANT (SVG) ─────────────────────────────────────────────────
    if (variant === 'emblem') {
        const { width, height } = emblemSizes[size];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/sierra-blu-emblem.svg",
            alt: "Sierra Blu Realty Shield",
            draggable: false,
            width: width,
            height: height,
            style: {
                width: `${width}px`,
                height: `${height}px`,
                userSelect: 'none',
                filter: isLight ? 'drop-shadow(0 1px 3px rgba(212,175,55,0.4))' : 'drop-shadow(0 2px 8px rgba(212,175,55,0.35))',
                transition: 'filter 0.4s ease'
            }
        }, void 0, false, {
            fileName: "[project]/my-sierra-project/components/UI/BrandLogo.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    // ── WORDMARK VARIANT (default) ───────────────────────────────────────────
    const { width, height } = wordmarkSizes[size];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "brand-logo-container",
        style: {
            width: `${width}px`,
            height: `${height}px`,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
            userSelect: 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: "/sierra-blu-logo.jpg",
            alt: "Sierra Blu Realty",
            draggable: false,
            style: {
                position: 'absolute',
                width: '200%',
                height: '100%',
                maxWidth: 'none',
                minWidth: '200%',
                left: isLight ? '-100%' : '0%',
                top: '0',
                objectFit: 'fill',
                transition: 'left 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
            }
        }, void 0, false, {
            fileName: "[project]/my-sierra-project/components/UI/BrandLogo.tsx",
            lineNumber: 127,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-sierra-project/components/UI/BrandLogo.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(BrandLogo, "UIDXTeZYsCkL87tbZtO14O561uE=");
_c = BrandLogo;
var _c;
__turbopack_context__.k.register(_c, "BrandLogo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/components/UI/CinematicHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$UI$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/components/UI/BrandLogo.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CinematicHero({ T, onPortfolioClick, onAdvisorClick }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isAr = T.dir === 'rtl';
    // Motion values for mouse coordinates
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    // Smooth springs for the parallax effect
    const springConfig = {
        damping: 50,
        stiffness: 400
    };
    const smoothX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, springConfig);
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, springConfig);
    // Parallax shifts:
    // Video moves slightly in the counter-direction of the mouse (simulating depth)
    const videoX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        -0.5,
        0.5
    ], [
        '1%',
        '-1%'
    ]);
    const videoY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        -0.5,
        0.5
    ], [
        '1%',
        '-1%'
    ]);
    // Text moves slightly in the same direction of the mouse (foreground pop)
    const textX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothX, [
        -0.5,
        0.5
    ], [
        '-10px',
        '10px'
    ]);
    const textY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, [
        -0.5,
        0.5
    ], [
        '-10px',
        '10px'
    ]);
    // Mouse move handler
    const handleMouseMove = (e)=>{
        if (!containerRef.current) return;
        const { clientX, clientY, currentTarget } = e;
        const { width, height, left, top } = currentTarget.getBoundingClientRect();
        // Normalize mouse position between -0.5 and 0.5
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };
    const handleMouseLeave = ()=>{
        // Reset to center smoothly
        mouseX.set(0);
        mouseY.set(0);
    };
    // SVG "Build from nothing" path variants
    const pathVariants = {
        hidden: {
            pathLength: 0,
            opacity: 0
        },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut",
                delay: 0.5
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        className: "relative w-full h-[100vh] overflow-hidden bg-[#030712] flex items-center justify-center text-[#F4F0E8]",
        style: {
            perspective: 1000
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-0 scale-[1.05]",
                style: {
                    x: videoX,
                    y: videoY
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "object-cover w-full h-full opacity-40 mix-blend-screen grayscale-[0.3]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "https://images-assets.nasa.gov/video/Earth%20Observations%20from%20the%20ISS/Earth%20Observations%20from%20the%20ISS~orig.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                src: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
                                type: "video/mp4"
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60 z-10"
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)] z-10"
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `absolute top-24 ${isAr ? 'left-12' : 'right-12'} z-20 opacity-20 pointer-events-none`,
                initial: {
                    opacity: 0,
                    x: isAr ? -20 : 20
                },
                animate: {
                    opacity: 0.2,
                    x: 0
                },
                transition: {
                    delay: 2,
                    duration: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$UI$2f$BrandLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "md",
                    variant: "shield"
                }, void 0, false, {
                    fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-30 flex flex-col items-center text-center px-4 max-w-5xl",
                style: {
                    x: textX,
                    y: textY
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mb-8",
                        initial: {
                            scale: 0.8,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        transition: {
                            duration: 1.5,
                            ease: "easeOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "80",
                            height: "80",
                            viewBox: "0 0 100 100",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                    d: "M50 5 L95 50 L50 95 L5 50 Z",
                                    stroke: "#C9A24D",
                                    strokeWidth: "0.75",
                                    variants: pathVariants,
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "drop-shadow-[0_0_15px_rgba(201,162,77,0.8)]"
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                    cx: "50",
                                    cy: "50",
                                    r: "10",
                                    fill: "#C9A24D",
                                    initial: {
                                        scale: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    transition: {
                                        delay: 1.8,
                                        duration: 1.2,
                                        ease: "easeOut"
                                    },
                                    className: "shadow-gold"
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: `text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-[0.85] ${isAr ? "font-['Cairo',sans-serif]" : "font-serif"}`,
                        initial: {
                            opacity: 0,
                            y: 50,
                            filter: "blur(25px)"
                        },
                        animate: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)"
                        },
                        transition: {
                            duration: 2,
                            ease: [
                                0.16,
                                1,
                                0.3,
                                1
                            ],
                            delay: 0.6
                        },
                        children: [
                            isAr ? 'ذكاء' : 'Disciplined',
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 152,
                                columnNumber: 43
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-clip-text text-transparent bg-gradient-to-r from-[#F4F0E8] via-[#C9A24D] to-[#F4F0E8] bg-[length:200%_auto] animate-goldShimmer",
                                children: isAr ? 'منضبط.' : 'Intelligence.'
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: `text-lg md:text-xl font-sans tracking-[0.25em] text-[#F4F0E8]/70 uppercase mb-12 font-light max-w-2xl ${isAr ? "font-['Cairo',sans-serif] tracking-normal" : ""}`,
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 2.5,
                            delay: 1.6
                        },
                        children: [
                            T.heroSub,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 164,
                                columnNumber: 23
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs opacity-50 block mt-2 tracking-[0.4em]",
                                children: T.tagline
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 158,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex flex-col sm:flex-row items-center gap-6 font-sans",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1.5,
                            delay: 2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onPortfolioClick,
                                className: "group px-10 py-4 bg-transparent border border-[#C9A24D] text-[#C9A24D] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#C9A24D] hover:text-[#030712] transition-all duration-700 rounded-sm shadow-[0_0_20px_rgba(201,162,77,0.1)] hover:shadow-[0_0_50px_rgba(201,162,77,0.4)]",
                                children: T.btnDiscover
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAdvisorClick,
                                className: "px-10 py-4 bg-[#F4F0E8] text-[#030712] text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-transparent hover:text-[#F4F0E8] hover:border-[#F4F0E8] border border-transparent transition-all duration-700 rounded-sm relative overflow-hidden group",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative z-10 flex items-center justify-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "w-2 h-2 rounded-full bg-[#C9A24D] group-hover:bg-[#F4F0E8] transition-colors animate-pulse"
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        T.btnView
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 border-t border-white/5 pt-10",
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 0.4
                        },
                        transition: {
                            delay: 2.5,
                            duration: 2
                        },
                        children: T.stats.map(([val, lbl], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-serif text-2xl text-[#C9A24D]",
                                        children: val
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                        lineNumber: 202,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[8px] uppercase tracking-widest",
                                        children: lbl
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 cursor-pointer",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 3,
                    duration: 1.5
                },
                onClick: onPortfolioClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[9px] tracking-[0.5em] text-[#C9A24D] uppercase opacity-60 hover:opacity-100 transition-opacity",
                        children: isAr ? 'النزول' : 'Descent'
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[1px] h-16 bg-gradient-to-b from-[#C9A24D] to-transparent animate-shimmerLine"
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-sierra-project/components/UI/CinematicHero.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(CinematicHero, "tnYN2q25pMwCggDeQdbbMCRYrL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = CinematicHero;
var _c;
__turbopack_context__.k.register(_c, "CinematicHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/components/Landing/RefinedSearchBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "filterOption": "RefinedSearchBar-module__ZCj3cG__filterOption",
  "filterSelect": "RefinedSearchBar-module__ZCj3cG__filterSelect",
});
}),
"[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RefinedSearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$RefinedSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/my-sierra-project/components/Landing/RefinedSearchBar.module.css [app-client] (css module)");
'use client';
;
;
function RefinedSearchBar({ segments, onSearch, searchBtnText, isAr = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-0 rounded-xl overflow-hidden mb-12 lux-glass !border-white/5 shadow-2xl ${isAr ? 'flex-row-reverse' : ''}`,
        children: [
            segments.map((seg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-6 py-4 border-r border-white/5 ${isAr ? 'text-right' : 'text-left'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[9px] font-medium tracking-[0.2em] uppercase text-white/40 mb-1.5 font-body",
                            children: seg.label
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            value: seg.val,
                            onChange: (e)=>seg.set(e.target.value),
                            title: seg.label,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$RefinedSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterSelect,
                            children: seg.opts.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: o.v,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$RefinedSearchBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filterOption,
                                    children: o.l
                                }, o.v, false, {
                                    fileName: "[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onSearch,
                className: "lux-button-primary !rounded-none !px-8 border-none !text-[11px] font-bold tracking-widest",
                children: searchBtnText
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = RefinedSearchBar;
var _c;
__turbopack_context__.k.register(_c, "RefinedSearchBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/app/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "badgeLux": "page-module__c2sU8G__badgeLux" + " " + "lux-glass",
  "chatAvatar": "page-module__c2sU8G__chatAvatar",
  "chatAvatarPing": "page-module__c2sU8G__chatAvatarPing",
  "chatMessage": "page-module__c2sU8G__chatMessage",
  "chatMessageBot": "page-module__c2sU8G__chatMessageBot",
  "chatMessageUser": "page-module__c2sU8G__chatMessageUser",
  "filterOption": "page-module__c2sU8G__filterOption",
  "filterSelect": "page-module__c2sU8G__filterSelect",
  "heroCardStack": "page-module__c2sU8G__heroCardStack",
  "heroCardStackItem": "page-module__c2sU8G__heroCardStackItem",
  "heroCardStackItemBase": "page-module__c2sU8G__heroCardStackItemBase",
  "heroCardStackItemSecondary": "page-module__c2sU8G__heroCardStackItemSecondary",
  "heroCardStackItemTertiary": "page-module__c2sU8G__heroCardStackItemTertiary",
  "heroStatLabel": "page-module__c2sU8G__heroStatLabel",
  "heroStatValue": "page-module__c2sU8G__heroStatValue" + " " + "lux-gold-text",
  "ping": "page-module__c2sU8G__ping",
  "pulse": "page-module__c2sU8G__pulse",
  "zoneIndicator": "page-module__c2sU8G__zoneIndicator",
});
}),
"[project]/my-sierra-project/app/data/landing-page.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COPY",
    ()=>COPY,
    "G",
    ()=>G,
    "G2",
    ()=>G2,
    "STATIC_PORTFOLIO_ASSETS",
    ()=>STATIC_PORTFOLIO_ASSETS,
    "THEMES",
    ()=>THEMES
]);
const G = 'var(--gold-prime)';
const G2 = 'var(--sierra-blue)';
const THEMES = {
    dark: {
        bg: 'var(--night-navy)',
        bgAlt: 'var(--deep-navy)',
        bg2: 'var(--mid-navy)',
        surface: 'var(--surface)',
        surfaceHover: 'var(--surface-hover)',
        card: 'var(--bg-card)',
        cardBorder: 'var(--border-card)',
        border: 'var(--border)',
        borderHover: 'var(--gold-prime)',
        text: 'var(--text)',
        textSub: 'var(--text-sub)',
        textMuted: 'var(--text-muted)',
        navBg: 'var(--bg-nav)',
        footerBg: 'var(--night-navy)',
        heroBg: 'var(--night-navy)'
    },
    light: {
        bg: 'var(--bg)',
        bgAlt: 'var(--bg-surface)',
        bg2: 'var(--bg-surface)',
        surface: 'var(--surface)',
        surfaceHover: 'var(--surface-hover)',
        card: 'var(--bg-card)',
        cardBorder: 'var(--border-card)',
        border: 'var(--border)',
        borderHover: 'var(--gold-prime)',
        text: 'var(--text)',
        textSub: 'var(--text-sub)',
        textMuted: 'var(--text-muted)',
        navBg: 'var(--bg-nav)',
        footerBg: 'var(--deep-navy)',
        heroBg: 'var(--bg)'
    }
};
const COPY = {
    en: {
        dir: 'ltr',
        brand: 'SIERRA BLU',
        sub: 'REALTY',
        tagline: 'AI‑POWERED REAL ESTATE INTELLIGENCE',
        nav: [
            'Portfolio',
            'Intelligence',
            'About',
            'Contact'
        ],
        cta: 'Explore Portfolio',
        heroTag: 'Beyond Brokerage',
        heroH1: [
            'Smarter',
            'Real Estate.'
        ],
        heroItalic: 'Powered by AI intelligence.',
        heroSub: 'New Cairo\'s Premier Rent & Resale Platform',
        heroDesc: 'We combine advanced AI with an exclusive network of 1,500+ elite brokers across New Cairo, Madinaty, and El Shorouk to deliver unmatched value tailored to your needs.',
        btnDiscover: 'Explore Portfolio',
        btnView: 'Talk to Sierra AI',
        stats: [
            [
                '1,200+',
                'Portfolio Assets'
            ],
            [
                '98%',
                'Match Rate'
            ],
            [
                '8+',
                'Compounds'
            ],
            [
                '4s',
                'Response Time'
            ]
        ],
        scroll: 'Scroll',
        secListings: 'Strategic Pipeline',
        h2Listings: 'Portfolio Assets.',
        viewAll: 'Explore All →',
        searchType: 'Asset Type',
        searchCompound: 'Zone',
        searchBudget: 'Capital',
        searchBtn: 'Search Now',
        beds: 'beds',
        baths: 'baths',
        secWhy: 'The Sierra Blu Distinction',
        h2Why: 'Why stakeholders choose us.',
        whyDesc: 'We don\'t just search the market — we analyze it. Powered by AI and 1,500+ trusted brokers, we scan every corner of New Cairo to bring you only the highest-value portfolio assets that meet your exact needs.',
        why: [
            {
                icon: '◆',
                title: 'Curated Selection',
                stat: '1,200+',
                statLabel: 'vetted assets',
                desc: 'Every asset is hand-checked by our investment stakeholders. We reject overpriced inventory so you only see what\'s worth your time and capital.'
            },
            {
                icon: '◈',
                title: 'AI-Powered Matching',
                stat: '98%',
                statLabel: 'match accuracy',
                desc: 'Our AI cross-references your criteria against live market data, price history, and ROI projections to surface the best deals first.'
            },
            {
                icon: '◉',
                title: 'Dedicated Advisor',
                stat: '4s',
                statLabel: 'avg response',
                desc: 'One advisor from first call to final signature. They know your budget, your preferences, and the market — no handoffs, no repeating yourself.'
            }
        ],
        bannerH: 'Exceptional Assets, Intelligent Matching',
        bannerSub: 'أصول استثنائية، مطابقة ذكية',
        bannerBtn: 'View Portfolio',
        secMap: 'Market Intelligence',
        mapH1: 'New Cairo',
        mapH2: 'Strategic Pipeline',
        mapDesc: 'Real-time data across New Cairo\'s premium zones. Track growth corridors, rental yields, and exclusive off-market signals.',
        zones: [
            {
                area: 'Fifth Settlement',
                short: '5th Set.',
                stat: 'Growth +12.4%',
                color: '#4ECDC4',
                coords: [
                    30.0071,
                    31.4345
                ]
            },
            {
                area: 'Madinaty',
                short: 'Madinaty',
                stat: 'High Demand',
                color: 'var(--gold-prime)',
                coords: [
                    30.0972,
                    31.6314
                ]
            },
            {
                area: 'Mountain View',
                short: 'MV iCity',
                stat: '8.2% Yield',
                color: '#7EA8B4',
                coords: [
                    30.0320,
                    31.4720
                ]
            },
            {
                area: 'Mostakbal City',
                short: 'Mostakbal',
                stat: 'Off‑Market',
                color: '#C084FC',
                coords: [
                    30.1400,
                    31.7400
                ]
            },
            {
                area: 'Hyde Park',
                short: 'Hyde Pk',
                stat: 'Premium',
                color: '#F97316',
                coords: [
                    30.0580,
                    31.4100
                ]
            },
            {
                area: 'Mivida',
                short: 'Mivida',
                stat: 'Yield 7.5%',
                color: '#22D3EE',
                coords: [
                    30.0200,
                    31.5200
                ]
            }
        ],
        mapBtn: 'Explore AI Insights →',
        secAI: 'Meet Sierra',
        aiH: 'Your AI Investment Consultant',
        aiSub: 'First Official AI Real Estate Bot Consultant in Egypt',
        aiDesc: 'Sierra is always on — analyzing market data, answering your questions, and matching you with portfolio assets that fit your exact criteria. Start a conversation and see the difference intelligence makes.',
        aiCTA: 'Start on Telegram →',
        aiFeatures: [
            'Instant asset matching',
            'Market analytics & ROI',
            'Arabic & English support',
            '24/7 availability'
        ],
        aiChat: [
            {
                from: 'user',
                text: 'Looking for a 4‑bed villa under 15M EGP in Fifth Settlement'
            },
            {
                from: 'bot',
                text: 'Found 7 matching portfolio assets. Top pick: Villa Lumière — 5 beds, 480 m², EGP 14.2M. ROI: 8.3% annual yield. Shall I send the full report?'
            }
        ],
        secTesti: 'Investment Success Stories',
        h2Testi: 'What our stakeholders say',
        testimonials: [
            {
                q: 'I used to spend weeks searching the New Cairo market. Sierra Blu changed everything. Their AI matched me with the exact villa I wanted at the best price available. One platform, zero wasted time.',
                name: 'Omar T.',
                role: 'Investment Stakeholder',
                i: 'OT'
            },
            {
                q: 'Finding the right home in New Cairo seemed impossible until Sierra Blu. Their system understood our exact needs and filtered out the noise to deliver the perfect portfolio asset. Smartest decision we made.',
                name: 'Sarah & Michael V.',
                role: 'Strategic Partners',
                i: 'SMV'
            },
            {
                q: 'Sierra Blu found me a portfolio asset that wasn\'t even on my radar. The AI scans the entire market and delivers the best value. Exact match, zero guesswork.',
                name: 'Karim H.',
                role: 'CEO, Apex Holdings',
                i: 'KH'
            }
        ],
        ctaTag: 'Secure Your Asset',
        ctaH: 'Secure Your Position in New Cairo',
        ctaSub: 'Leave your details — a Sierra advisor reaches out within 4 seconds.',
        formName: 'Full Name',
        formPhone: 'Mobile number',
        formSubmit: 'Get Exclusive Access',
        formSuccess: 'We\'re on it. A Sierra advisor will reach out within 4 seconds.',
        footDesc: 'Beyond Brokerage. AI-powered real estate intelligence for discerning investment stakeholders in New Cairo and beyond.',
        footNav: 'Strategic Navigation',
        footNavLinks: [
            'Portfolio Assets',
            'Intelligence',
            'About Us',
            'Careers',
            'Contact'
        ],
        footMarkets: 'Strategic Zones',
        footMarketLinks: [
            'New Cairo',
            'Fifth Settlement',
            'Madinaty',
            'Mostakbal City',
            'Mountain View'
        ],
        footContact: 'Contact',
        copyright: '© 2026 Sierra Blu Realty. All rights reserved.',
        legal: [
            'Privacy Policy',
            'Terms of Service',
            'Cookies'
        ]
    },
    ar: {
        dir: 'rtl',
        brand: 'سييرا بلو',
        sub: 'للعقارات',
        tagline: 'ذكاء عقاري مدعوم بالذكاء الاصطناعي',
        nav: [
            'المحفظة الاستثمارية',
            'الذكاء العقاري',
            'عنّا',
            'اتصل'
        ],
        cta: 'استكشف المحفظة',
        heroTag: 'أبعد من الوساطة',
        heroH1: [
            'عقارات',
            'أذكى.'
        ],
        heroItalic: 'مدعومة بالذكاء الاصطناعي.',
        heroSub: 'منصة القاهرة الجديدة للبيع والإيجار',
        heroDesc: 'نجمع بين الذكاء الاصطناعي وشبكة حصرية من ١٥٠٠+ وسيط عقاري في القاهرة الجديدة ومدينتي والشروق لنوفر لك أفضل قيمة تلبي احتياجاتك بالضبط.',
        btnDiscover: 'تصفح العقارات',
        btnView: 'تحدّث مع سييرا',
        stats: [
            [
                '١٢٠٠+',
                'أصول المحفظة'
            ],
            [
                '٩٨٪',
                'نسبة المطابقة'
            ],
            [
                '٨+',
                'كمباوند'
            ],
            [
                '٤ث',
                'زمن الرد'
            ]
        ],
        scroll: 'اسحب',
        secListings: 'محفظة استراتيجية',
        h2Listings: 'أصول استثنائية.',
        viewAll: '← استكشاف الكل',
        searchType: 'نوع الأصل',
        searchCompound: 'المنطقة',
        searchBudget: 'رأس المال',
        searchBtn: 'ابحث الآن',
        beds: 'غرف',
        baths: 'حمامات',
        secWhy: 'تميّز سييرا بلو',
        h2Why: 'لماذا يختارنا عملاؤنا.',
        why: [
            {
                icon: '◆',
                title: 'اختيار منتقى',
                stat: '١٢٠٠+',
                statLabel: 'عقار موثق',
                desc: 'كل عقار يتم فحصه يدوياً. نرفض المبالغ في سعره لتشاهد فقط ما يستحق وقتك ومالك.'
            },
            {
                icon: '◈',
                title: 'مطابقة بالذكاء الاصطناعي',
                stat: '٩٨٪',
                statLabel: 'دقة المطابقة',
                desc: 'ذكاؤنا الاصطناعي يقارن معاييرك ببيانات السوق الحية وتاريخ الأسعار وتوقعات العائد ليظهر لك أفضل الصفقات أولاً.'
            },
            {
                icon: '◉',
                title: 'مستشار مخصص',
                stat: '٤ث',
                statLabel: 'متوسط الرد',
                desc: 'مستشار واحد من أول اتصال لآخر توقيع. يعرف ميزانيتك وتفضيلاتك والسوق — بدون تحويلات أو تكرار.'
            }
        ],
        bannerH: 'أصول استثنائية، مطابقة ذكية',
        bannerSub: 'Exceptional Assets, Intelligent Matching',
        bannerBtn: 'عرض المحفظة',
        secMap: 'ذكاء السوق',
        mapH1: 'القاهرة الجديدة',
        mapH2: 'خريطة الاستثمار',
        mapDesc: 'بيانات فورية عبر مناطق الاستثمار المميزة في القاهرة الجديدة. تتبع ممرات النمو وعوائد الإيجار والإشارات الحصرية خارج السوق.',
        zones: [
            {
                area: 'التجمع الخامس',
                short: 'التجمع',
                stat: 'نمو +١٢.٤٪',
                color: '#4ECDC4',
                coords: [
                    30.0071,
                    31.4345
                ]
            },
            {
                area: 'مدينتي',
                short: 'مدينتي',
                stat: 'طلب مرتفع',
                color: G,
                coords: [
                    30.0972,
                    31.6314
                ]
            },
            {
                area: 'ماونتن فيو',
                short: 'ماونتن فيو',
                stat: 'عائد ٨.٢٪',
                color: '#7EA8B4',
                coords: [
                    30.0320,
                    31.4720
                ]
            },
            {
                area: 'مستقبل سيتي',
                short: 'المستقبل',
                stat: 'خارج السوق',
                color: '#C084FC',
                coords: [
                    30.1400,
                    31.7400
                ]
            },
            {
                area: 'هايد بارك',
                short: 'هايد بارك',
                stat: 'بريميوم',
                color: '#F97316',
                coords: [
                    30.0580,
                    31.4100
                ]
            },
            {
                area: 'ميفيدا',
                short: 'ميفيدا',
                stat: 'عائد ٧.٥٪',
                color: '#22D3EE',
                coords: [
                    30.0200,
                    31.5200
                ]
            }
        ],
        mapBtn: '← استكشف رؤى الذكاء الاصطناعي',
        secAI: 'تعرّف على سييرا',
        aiH: 'مستشارتك العقارية الذكية',
        aiSub: 'أول بوت استشاري عقاري رسمي بالذكاء الاصطناعي في مصر',
        aiDesc: 'سييرا تعمل على مدار الساعة — تحلل بيانات السوق، تجيب أسئلتك، وتطابقك مع عقارات تناسب معاييرك بالضبط. ابدأ محادثة واشعر بالفرق.',
        aiCTA: 'ابدأ على تيليجرام ←',
        aiFeatures: [
            'مطابقة فورية للعقارات',
            'تحليلات السوق وعائد الاستثمار',
            'دعم عربي وإنجليزي',
            'متاح ٢٤/٧'
        ],
        aiChat: [
            {
                from: 'user',
                text: 'بدور على فيلا ٤ غرف أقل من ١٥م في التجمع الخامس'
            },
            {
                from: 'bot',
                text: 'وجدت ٧ عقارات تطابق معاييرك. أفضل خيار: فيلا لوميير — ٥ غرف، ٤٨٠م²، ١٤.٢م ج.م. عائد: ٨.٣٪ سنوياً. أرسل لك التقرير الكامل؟'
            }
        ],
        secTesti: 'قصص عملائنا',
        h2Testi: 'ماذا يقول عملاؤنا',
        testimonials: [
            {
                q: 'كنت أقضي أسابيع في البحث. سييرا بلو غيّرت كل شيء. ذكاؤهم الاصطناعي طابقني مع الفيلا المثالية بأفضل سعر متاح. منصة واحدة، صفر وقت ضائع.',
                name: 'عمر ت.',
                role: 'مستثمر عقاري',
                i: 'OT'
            },
            {
                q: 'إيجاد منزل مناسب في القاهرة الجديدة بدا مستحيل حتى سييرا بلو. نظامهم فهم احتياجاتنا بالضبط وأزال الضوضاء ليوصلنا للعقار المثالي. أذكى قرار اتخذناه.',
                name: 'سارة وميشيل ف.',
                role: 'عائلة ناقلة',
                i: 'SMV'
            },
            {
                q: 'سييرا بلو وجدت لي عقار لم يكن حتى على بالي. الذكاء الاصطناعي يفحص السوق بالكامل ويقدم أفضل قيمة. مطابقة مثالية، صفر تخمين.',
                name: 'كريم ح.',
                role: 'الرئيس التنفيذي، أبكس هولدينغز',
                i: 'KH'
            }
        ],
        ctaTag: 'ابحث عن مكانك',
        ctaH: 'ابحث عن مكانك في القاهرة الجديدة',
        ctaSub: 'اترك بياناتك — مستشار سييرا سيتواصل معك خلال ٤ ثوانٍ.',
        formName: 'الاسم بالكامل',
        formPhone: 'رقم الجوال',
        formSubmit: 'احصل على وصول حصري',
        formSuccess: 'نحن على الموضوع. مستشار سييرا سيتواصل معك خلال ٤ ثوانٍ.',
        footDesc: 'أبعد من الوساطة. ذكاء عقاري مدعوم بالذكاء الاصطناعي للمستثمرين في القاهرة الجديدة.',
        footNav: 'روابط التنقل',
        footNavLinks: [
            'أصول المحفظة',
            'الذكاء العقاري',
            'عنّا',
            'الوظائف',
            'اتصل'
        ],
        footMarkets: 'الأسواق',
        footMarketLinks: [
            'القاهرة الجديدة',
            'التجمع الخامس',
            'مدينتي',
            'مستقبل سيتي',
            'ماونتن فيو'
        ],
        footContact: 'تواصل معنا',
        copyright: '© ٢٠٢٦ سييرا بلو للعقارات. جميع الحقوق محفوظة.',
        legal: [
            'سياسة الخصوصية',
            'شروط الخدمة',
            'ملفات الارتباط'
        ]
    }
};
const STATIC_PORTFOLIO_ASSETS = [
    {
        id: 1,
        title: 'Aurora Penthouse',
        titleAr: 'بنتهاوس أورورا',
        location: 'Madinaty · New Cairo',
        locationAr: 'مدينتي · القاهرة الجديدة',
        price: 8500000,
        beds: 4,
        baths: 3,
        sqft: '320 m²',
        badge: 'Hidden Gem',
        badgeColor: '#7C3AED',
        img: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=80'
    },
    {
        id: 2,
        title: 'Villa Lumière',
        titleAr: 'فيلا لوميير',
        location: 'Mountain View · 5th Settlement',
        locationAr: 'ماونتن فيو · التجمع الخامس',
        price: 14200000,
        beds: 5,
        baths: 4,
        sqft: '480 m²',
        badge: 'Featured',
        badgeColor: '#C8961A',
        img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=700&q=80'
    },
    {
        id: 3,
        title: 'The Boulevard',
        titleAr: 'ذا بوليفار',
        location: 'Mostakbal City · Future',
        locationAr: 'مستقبل سيتي · المستقبل',
        price: 3800000,
        beds: 3,
        baths: 2,
        sqft: '185 m²',
        badge: 'New',
        badgeColor: '#1B6CA8',
        img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80'
    },
    {
        id: 4,
        title: 'Emirates Crown',
        titleAr: 'إيمارتس كراون',
        location: 'Fifth Settlement · Cairo',
        locationAr: 'التجمع الخامس · القاهرة',
        price: 22000000,
        beds: 6,
        baths: 5,
        sqft: '650 m²',
        badge: 'Off Market',
        badgeColor: '#059669',
        img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80'
    },
    {
        id: 5,
        title: 'Palm Residences',
        titleAr: 'بالم ريزيدنسز',
        location: 'Madinaty · Block 7',
        locationAr: 'مدينتي · بلوك ٧',
        price: 5900000,
        beds: 3,
        baths: 3,
        sqft: '240 m²',
        badge: 'High ROI',
        badgeColor: '#DC2626',
        img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=700&q=80'
    },
    {
        id: 6,
        title: 'Sky Tower Penthouse',
        titleAr: 'بنتهاوس سكاي تاور',
        location: 'Downtown New Cairo',
        locationAr: 'وسط القاهرة الجديدة',
        price: 11500000,
        beds: 4,
        baths: 4,
        sqft: '380 m²',
        badge: 'Price Reduced',
        badgeColor: '#D97706',
        img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=700&q=80'
    }
]; // Removed ZONE_COORDS in favor of inline zone coordinates in COPY
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/lib/I18nContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$services$2f$InventoryService$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/lib/services/InventoryService.client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$ShieldLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/components/Landing/ShieldLogo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$PropCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/components/Landing/PropCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$UI$2f$CinematicHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/components/UI/CinematicHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$RefinedSearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/components/Landing/RefinedSearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/my-sierra-project/app/page.module.css [app-client] (css module)");
// ══════════════════════════════════════════════════════════
//  DESIGN TOKENS & CONSTANTS
// ══════════════════════════════════════════════════════════
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$data$2f$landing$2d$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/app/data/landing-page.ts [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
const ParticleCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.A("[project]/my-sierra-project/components/Landing/ParticleCanvas.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/my-sierra-project/components/Landing/ParticleCanvas.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = ParticleCanvas;
const LiveMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/my-sierra-project/components/Maps/LiveMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/my-sierra-project/components/Maps/LiveMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-slate-900/50 animate-pulse flex items-center justify-center text-slate-500 font-serif",
            children: "Initializing Intelligence Map..."
        }, void 0, false, {
            fileName: "[project]/my-sierra-project/app/page.tsx",
            lineNumber: 19,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c2 = LiveMap;
;
function LandingPage() {
    _s();
    const { locale, setLocale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        phone: ''
    });
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeZone, setActiveZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [portfolioAssetsDealt, setPortfolioAssetsDealt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [portfolioAssets, setPortfolioAssets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$data$2f$landing$2d$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_PORTFOLIO_ASSETS"]);
    const [featured, setFeatured] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [filterType, setFilterType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterCompound, setFilterCompound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterBedrooms, setFilterBedrooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterPrice, setFilterPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formSubmitting, setFormSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const portfolioSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LandingPage.useCallback[scrollTo]": (id)=>{
            document.getElementById(id)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            setMobileMenuOpen(false);
        }
    }["LandingPage.useCallback[scrollTo]"], []);
    const lang = locale === 'ar' ? 'ar' : 'en';
    const mode = theme === 'light' ? 'light' : 'dark';
    const th = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$data$2f$landing$2d$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEMES"][mode];
    const T = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$data$2f$landing$2d$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COPY"][lang];
    const isAr = lang === 'ar';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            setMounted(true);
            setTimeout({
                "LandingPage.useEffect": ()=>setLoaded(true)
            }["LandingPage.useEffect"], 80);
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$services$2f$InventoryService$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InventoryService"].getFeaturedAssets(6).then({
                "LandingPage.useEffect": (assets)=>{
                    if (assets && Array.isArray(assets)) {
                        setFeatured(assets);
                    }
                }
            }["LandingPage.useEffect"]).catch({
                "LandingPage.useEffect": ()=>{}
            }["LandingPage.useEffect"]);
            const onScroll = {
                "LandingPage.useEffect.onScroll": ()=>setScrolled(window.scrollY > 55)
            }["LandingPage.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "LandingPage.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            if (!mounted) return;
            const obs = new IntersectionObserver({
                "LandingPage.useEffect": (entries)=>entries.forEach({
                        "LandingPage.useEffect": (e)=>{
                            if (e.isIntersecting) e.target.classList.add('visible');
                        }
                    }["LandingPage.useEffect"])
            }["LandingPage.useEffect"], {
                threshold: 0.08
            });
            document.querySelectorAll('.reveal').forEach({
                "LandingPage.useEffect": (el)=>obs.observe(el)
            }["LandingPage.useEffect"]);
            return ({
                "LandingPage.useEffect": ()=>obs.disconnect()
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], [
        mounted,
        lang,
        mode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            if (!portfolioSectionRef.current || portfolioAssetsDealt) return;
            const obs = new IntersectionObserver({
                "LandingPage.useEffect": (entries)=>{
                    if (entries[0].isIntersecting) {
                        setPortfolioAssetsDealt(true);
                    }
                }
            }["LandingPage.useEffect"], {
                threshold: 0.1
            });
            obs.observe(portfolioSectionRef.current);
            return ({
                "LandingPage.useEffect": ()=>obs.disconnect()
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], [
        portfolioAssetsDealt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            setPortfolioAssetsDealt(false);
            setTimeout({
                "LandingPage.useEffect": ()=>setPortfolioAssetsDealt(true)
            }["LandingPage.useEffect"], 100);
        }
    }["LandingPage.useEffect"], [
        lang,
        mode
    ]);
    if (!mounted) return null;
    const handleSearch = async ()=>{
        try {
            const results = await __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$services$2f$InventoryService$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InventoryService"].filterAssets({
                type: filterType,
                compound: filterCompound,
                beds: filterBedrooms ? parseInt(filterBedrooms, 10) : undefined,
                maxPrice: filterPrice ? parseInt(filterPrice, 10) : undefined
            });
            if (results && results.length > 0) {
                setFeatured(results);
                portfolioSectionRef.current?.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.log("No matching portfolio assets found.");
            }
        } catch (err) {
            console.error("Search protocol failed:", err);
        }
    };
    const displayAssets = featured.length > 0 ? featured : portfolioAssets;
    const displayPortfolioAssets = displayAssets.map((p, idx)=>{
        // Determine the image: fetched featuredImage or fallback to static asset image
        const fallbackImg = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$data$2f$landing$2d$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_PORTFOLIO_ASSETS"][Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$data$2f$landing$2d$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATIC_PORTFOLIO_ASSETS"].length - 1, idx)].img;
        const img = p.featuredImage || fallbackImg;
        return {
            id: p.id,
            title: isAr && p.titleAr ? p.titleAr : p.title,
            location: isAr && p.locationAr ? p.locationAr : `${p.compound} · ${p.location || p.city}`,
            price: `${isAr ? 'جنيه' : 'EGP'} ${p.price.toLocaleString(isAr ? 'ar-EG' : 'en-US')}`,
            beds: p.bedrooms || 3,
            baths: p.bathrooms || 2,
            sqft: `${p.area || 200} m²`,
            badge: p.badge || (isAr ? 'متاح' : 'Available'),
            badgeColor: p.badgeColor || __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$data$2f$landing$2d$page$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["G2"],
            img: img,
            videoUrl: p.videoUrl
        };
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[var(--surface)] text-[var(--on-surface)] transition-colors duration-500",
        dir: T.dir,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `fixed top-0 left-0 right-0 z-[300] h-[68px] flex items-center justify-between px-12 transition-all duration-700 cubic-bezier(0.16,1,0.3,1) ${scrolled ? 'lux-glass border-b border-white/10' : 'bg-transparent border-b border-transparent'}`,
                dir: T.dir,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 cursor-pointer group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$ShieldLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                size: 38
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lux-gold-text text-lg leading-tight tracking-[0.2em] font-serif uppercase",
                                        children: T.brand
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[8px] tracking-[0.38em] text-white/40 uppercase font-body mt-0.5",
                                        children: T.sub
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex gap-8 items-center",
                        children: T.nav.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                onClick: ()=>scrollTo([
                                        'portfolio',
                                        'intelligence',
                                        'about',
                                        'contact'
                                    ][i]),
                                className: `text-[11px] font-medium tracking-[0.13em] uppercase transition-all duration-300 cursor-pointer text-[var(--text-sub)] hover:text-[var(--gold-prime)] ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                children: n
                            }, n, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setLocale(locale === 'ar' ? 'en' : 'ar'),
                                className: "lux-button-outline !px-3 !py-1.5 !text-[10px]",
                                children: lang === 'en' ? 'AR' : 'EN'
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTheme(mode === 'dark' ? 'light' : 'dark'),
                                className: "w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/5 border border-white/10 text-white/60 hover:text-white",
                                children: mode === 'dark' ? '☀' : '🌙'
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollTo('portfolio'),
                                className: "hidden sm:lux-button-outline !px-4 !py-2 !text-[10px]",
                                children: T.cta
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$UI$2f$CinematicHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                T: T,
                onPortfolioClick: ()=>scrollTo('portfolio'),
                onAdvisorClick: ()=>window.open('https://t.me/SierraBluBot', '_blank')
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `py-16 ${mode === 'dark' ? 'bg-[#040E1C]' : 'bg-[var(--bg-alt)]'} border-y border-white/5`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lux-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                        children: T.stats.map(([val, lbl], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-serif text-3xl font-medium lux-gold-text mb-2",
                                        children: val
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 210,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] tracking-widest uppercase opacity-40 font-body",
                                        children: lbl
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 209,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 207,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-sierra-project/app/page.tsx",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "portfolio",
                ref: portfolioSectionRef,
                className: `lux-section-padding ${mode === 'dark' ? 'bg-[#0A1520]' : 'bg-[var(--bg-alt)]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lux-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `reveal flex justify-between items-end mb-12 flex-wrap gap-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: isAr ? 'text-right' : 'text-left',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lux-section-subtitle",
                                            children: T.secListings
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "lux-section-title",
                                            children: T.h2Listings
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    className: "lux-button lux-button-outline !px-5 !py-2.5 !text-[10px]",
                                    children: T.viewAll
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$RefinedSearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            isAr: isAr,
                            searchBtnText: T.searchBtn,
                            onSearch: handleSearch,
                            segments: [
                                {
                                    val: filterType,
                                    set: setFilterType,
                                    label: T.searchType,
                                    opts: [
                                        {
                                            v: '',
                                            l: T.searchType
                                        },
                                        {
                                            v: 'villa',
                                            l: 'Villa'
                                        },
                                        {
                                            v: 'apartment',
                                            l: 'Apartment'
                                        },
                                        {
                                            v: 'penthouse',
                                            l: 'Penthouse'
                                        },
                                        {
                                            v: 'townhouse',
                                            l: 'Townhouse'
                                        }
                                    ]
                                },
                                {
                                    val: filterCompound,
                                    set: setFilterCompound,
                                    label: T.searchCompound,
                                    opts: [
                                        {
                                            v: '',
                                            l: T.searchCompound
                                        },
                                        {
                                            v: 'Fifth Settlement',
                                            l: 'Fifth Settlement'
                                        },
                                        {
                                            v: 'New Cairo',
                                            l: 'New Cairo'
                                        },
                                        {
                                            v: 'Madinaty',
                                            l: 'Madinaty'
                                        },
                                        {
                                            v: 'Sheikh Zayed',
                                            l: 'Sheikh Zayed'
                                        }
                                    ]
                                },
                                {
                                    val: filterBedrooms,
                                    set: setFilterBedrooms,
                                    label: isAr ? 'غرف' : 'Rooms',
                                    opts: [
                                        {
                                            v: '',
                                            l: isAr ? 'غرف' : 'Rooms'
                                        },
                                        {
                                            v: '1',
                                            l: `1 ${T.beds}`
                                        },
                                        {
                                            v: '2',
                                            l: `2 ${T.beds}`
                                        },
                                        {
                                            v: '3',
                                            l: `3 ${T.beds}`
                                        },
                                        {
                                            v: '4',
                                            l: `4 ${T.beds}`
                                        },
                                        {
                                            v: '5',
                                            l: `5+ ${T.beds}`
                                        }
                                    ]
                                },
                                {
                                    val: filterPrice,
                                    set: setFilterPrice,
                                    label: T.searchBudget,
                                    opts: [
                                        {
                                            v: '',
                                            l: T.searchBudget
                                        },
                                        {
                                            v: '2000000',
                                            l: 'Under 2M'
                                        },
                                        {
                                            v: '5000000',
                                            l: 'Under 5M'
                                        },
                                        {
                                            v: '10000000',
                                            l: 'Under 10M'
                                        },
                                        {
                                            v: '15000000',
                                            l: 'Under 15M'
                                        }
                                    ]
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: displayPortfolioAssets.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$PropCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    id: p.id,
                                    title: isAr ? p.titleAr : p.title,
                                    location: isAr ? p.locationAr : p.location,
                                    price: p.price,
                                    beds: p.beds,
                                    baths: p.baths,
                                    sqft: p.sqft,
                                    badge: p.badge,
                                    badgeColor: p.badgeColor,
                                    img: p.img,
                                    videoUrl: p.videoUrl,
                                    dealDelay: i * 0.09,
                                    dealt: portfolioAssetsDealt,
                                    isAr: isAr
                                }, p.id, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 245,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-sierra-project/app/page.tsx",
                    lineNumber: 220,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "relative py-24 overflow-hidden bg-[var(--bg)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] dark:opacity-[0.025]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$ShieldLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: 600
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 269,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 mx-auto px-6 md:px-12 max-w-7xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "reveal text-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lux-section-subtitle mx-auto",
                                        children: T.secWhy
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "lux-section-title",
                                        children: T.h2Why
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    'whyDesc' in T && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm font-light leading-relaxed max-w-xl mx-auto opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                        children: T.whyDesc
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 276,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-6",
                                children: T.why.map((w, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `reveal lux-glass p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 group ${isAr ? 'text-right' : 'text-left'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center justify-between mb-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-3xl lux-gold-text opacity-50 group-hover:opacity-100 transition-opacity font-serif",
                                                        children: w.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 19
                                                    }, this),
                                                    w.stat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-mono text-2xl font-medium lux-gold-text leading-none",
                                                                children: w.stat
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[8px] tracking-widest uppercase opacity-40 font-body mt-1",
                                                                children: w.statLabel
                                                            }, void 0, false, {
                                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-serif text-xl font-medium mb-3 text-white",
                                                children: w.title
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-0.5 w-10 lux-gold-gradient rounded-full mb-4 ${isAr ? 'ml-auto' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 292,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs font-light leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                                children: w.desc
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 293,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal mt-16 p-8 rounded-2xl lux-glass border border-[var(--gold-prime)]/20 flex items-center justify-between flex-wrap gap-8 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-[300px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-serif text-2xl font-light text-white mb-2",
                                                children: T.bannerH
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs lux-gold-text tracking-widest uppercase opacity-70 font-body",
                                                children: T.bannerSub
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/portfolio",
                                        className: "lux-button lux-button-primary !py-3 !px-8",
                                        children: T.viewAll
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 272,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "intelligence",
                className: `lux-section-padding ${mode === 'dark' ? 'bg-[#091828]' : 'bg-[var(--bg-alt)]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lux-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col md:flex-row gap-16 items-center ${isAr ? 'md:flex-row-reverse' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: isAr ? 'text-right' : 'text-left',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lux-section-subtitle",
                                                children: T.secMap
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "lux-section-title",
                                                children: [
                                                    T.mapH1,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 28
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                        className: "lux-gold-text italic",
                                                        children: T.mapH2
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-0.5 w-12 lux-gold-gradient rounded-full my-6 ${isAr ? 'ml-auto' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-sm font-light leading-relaxed opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                                children: T.mapDesc
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-3",
                                        children: T.zones.map((z, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `reveal flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 lux-glass border border-white/5 hover:border-[var(--gold-prime)]/30 ${activeZone === i ? 'border-[var(--gold-prime)]/50 bg-white/5' : ''} ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`,
                                                onClick: ()=>setActiveZone(activeZone === i ? null : i),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full flex-shrink-0 animate-pulse",
                                                        style: {
                                                            background: z.color,
                                                            boxShadow: `0 0 10px ${z.color}`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 332,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex-1 text-sm font-medium text-white opacity-80 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                                        children: z.area
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 333,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-[10px] font-bold py-1 px-3 rounded-full",
                                                        style: {
                                                            color: z.color,
                                                            background: `${z.color}15`,
                                                            border: `1px solid ${z.color}30`
                                                        },
                                                        children: z.stat
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 334,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 315,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal h-[520px] relative ${isAr ? 'order-1' : 'order-2'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-2xl overflow-hidden lux-glass border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveMap, {
                                            mode: mode,
                                            activeZoneIndex: activeZone,
                                            zones: T.zones
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 left-1/2 -translate-x-1/2 z-[1000] text-[8px] tracking-[0.4em] lux-gold-text opacity-40 font-body pointer-events-none",
                                            children: "SIERRA BLU INTELLIGENCE"
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 343,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 341,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-sierra-project/app/page.tsx",
                    lineNumber: 313,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `lux-section-padding border-y border-white/5 ${mode === 'dark' ? 'bg-gradient-to-br from-[#0A1520] via-[#0D2035] to-[#122A47]' : 'bg-gradient-to-br from-[var(--bg-alt)] via-[var(--bg)] to-[var(--bg-2)]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto px-6 md:px-12 max-w-7xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-24 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal ${isAr ? 'order-2 text-right' : 'order-1 text-left'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "lux-section-subtitle",
                                        children: T.secAI
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "lux-section-title",
                                        children: T.aiH
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[10px] font-bold tracking-widest text-[#1B6CA8] uppercase mb-6 font-body",
                                        children: T.aiSub
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `h-0.5 w-12 lux-gold-gradient rounded-full mb-8 ${isAr ? 'ml-auto' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm font-light leading-relaxed opacity-70 mb-10 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                        children: T.aiDesc
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 mb-10",
                                        children: T.aiFeatures.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex items-center gap-3 text-sm opacity-80 ${isAr ? "flex-row-reverse font-['Cairo',sans-serif]" : "flex-row font-['Jost',sans-serif]"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 rounded-full lux-gold-gradient"
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 21
                                                    }, this),
                                                    f
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://t.me/SierraBluBot",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "lux-button lux-button-primary inline-flex",
                                        children: T.aiCTA
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `reveal ${isAr ? 'order-1' : 'order-2'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lux-glass border border-white/10 rounded-2xl p-8 shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatAvatar,
                                                    children: [
                                                        "◈",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatAvatarPing
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                                    lineNumber: 379,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-serif text-lg text-white",
                                                            children: "Sierra Intelligence"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                                            lineNumber: 384,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-mono text-[9px] text-[#4ADE80] uppercase tracking-wider",
                                                            children: "● Online · 4s response"
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                                            lineNumber: 385,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 378,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4 mb-8",
                                            children: T.aiChat.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatMessage} ${msg.from === 'user' ? __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatMessageUser : __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chatMessageBot} ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                                        children: msg.text
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 23
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center text-[9px] tracking-widest uppercase opacity-30 font-body",
                                            children: "AI-Powered Pipeline · 24/7 Availability"
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 376,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-sierra-project/app/page.tsx",
                        lineNumber: 353,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/my-sierra-project/app/page.tsx",
                    lineNumber: 352,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 351,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: `lux-section-padding ${mode === 'dark' ? 'bg-[#0A1628]' : 'bg-[var(--bg-2)]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto px-6 md:px-12 max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reveal text-center mb-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lux-section-subtitle mx-auto",
                                    children: T.secTesti
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "lux-section-title",
                                    children: T.h2Testi
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 411,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-6",
                            children: T.testimonials.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reveal lux-glass p-8 rounded-2xl border border-white/5 transition-all duration-500 hover:-translate-y-2 group shadow-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-serif text-5xl lux-gold-text opacity-30 leading-none mb-4",
                                            children: "“"
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-sm font-light leading-relaxed opacity-70 italic mb-8 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                            children: t.q
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-4 ${isAr ? 'flex-row-reverse text-right' : 'flex-row text-left'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 rounded-full lux-gold-gradient flex items-center justify-center font-mono text-[10px] font-bold text-[#071422]",
                                                    children: t.i
                                                }, void 0, false, {
                                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `text-sm font-medium text-white ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                                            children: t.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] tracking-widest uppercase opacity-40 font-body",
                                                            children: t.role
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 416,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-sierra-project/app/page.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: `lux-section-padding border-t border-white/5 ${mode === 'dark' ? 'bg-gradient-to-br from-[#0A1520] to-[#0D2035]' : 'bg-gradient-to-br from-[var(--bg)] to-[var(--bg-alt)]'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto px-6 max-w-xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reveal text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lux-section-subtitle mx-auto",
                                    children: T.ctaTag
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "lux-section-title",
                                    children: T.ctaH
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 439,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm font-light opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                    children: T.ctaSub
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 440,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "reveal",
                            children: submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lux-glass p-12 rounded-2xl border border-[var(--gold-prime)]/30 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-4xl mb-6",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 446,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-serif text-2xl lux-gold-text mb-2",
                                        children: lang === 'en' ? 'Request Received.' : 'تم استلام طلبك.'
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm font-light opacity-70 ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                        children: T.formSuccess
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 445,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: async (e)=>{
                                    e.preventDefault();
                                    setFormSubmitting(true);
                                    setFormError(null);
                                    try {
                                        const res = await fetch('/api/leads', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            },
                                            body: JSON.stringify({
                                                ...formData,
                                                locale
                                            })
                                        });
                                        if (!res.ok) {
                                            const data = await res.json().catch(()=>({}));
                                            throw new Error(data.error || 'Submission failed. Please try again.');
                                        }
                                        setSubmitted(true);
                                    } catch (err) {
                                        setFormError(err.message || (lang === 'en' ? 'Submission failed. Please try again.' : 'فشل الإرسال. يرجى المحاولة مرة أخرى.'));
                                    } finally{
                                        setFormSubmitting(false);
                                    }
                                },
                                className: "space-y-4",
                                children: [
                                    [
                                        {
                                            key: 'name',
                                            label: T.formName,
                                            type: 'text'
                                        },
                                        {
                                            key: 'phone',
                                            label: T.formPhone,
                                            type: 'tel'
                                        }
                                    ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: f.type,
                                            required: true,
                                            placeholder: f.label,
                                            value: formData[f.key],
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    [f.key]: e.target.value
                                                }),
                                            className: `w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-sm font-light text-white outline-none focus:border-[var(--gold-prime)]/50 transition-all ${isAr ? 'text-right font-[\'Cairo\',sans-serif]' : 'text-left font-[\'Jost\',sans-serif]'}`
                                        }, f.key, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: formSubmitting,
                                        className: "lux-button lux-button-primary w-full !py-4 disabled:opacity-60 disabled:cursor-not-allowed",
                                        children: formSubmitting ? lang === 'en' ? 'Submitting...' : 'جارٍ الإرسال...' : T.formSubmit
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 17
                                    }, this),
                                    formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm text-red-400 text-center ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                        children: formError
                                    }, void 0, false, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 490,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                lineNumber: 451,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-sierra-project/app/page.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "bg-[#040E1C] text-[#EFF8F7] py-20 border-t border-white/5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto px-6 md:px-12 max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-[2fr_1fr_1fr] gap-16 mb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: isAr ? 'text-right' : 'text-left',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-4 mb-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$components$2f$Landing$2f$ShieldLogo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    size: 42
                                                }, void 0, false, {
                                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                                    lineNumber: 506,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-serif text-xl lux-gold-text tracking-widest uppercase",
                                                            children: T.brand
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                                            lineNumber: 508,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[9px] tracking-[0.4em] opacity-40 font-body",
                                                            children: T.sub
                                                        }, void 0, false, {
                                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                                            lineNumber: 509,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 505,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `text-xs font-light leading-relaxed opacity-40 max-w-xs ${isAr ? 'ml-auto font-["Cairo",sans-serif]' : 'font-["Jost",sans-serif]'}`,
                                            children: T.footDesc
                                        }, void 0, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, this),
                                [
                                    {
                                        title: T.footNav,
                                        links: T.footNavLinks,
                                        ids: [
                                            'portfolio',
                                            'intelligence',
                                            'about',
                                            '',
                                            'contact'
                                        ]
                                    },
                                    {
                                        title: T.footMarkets,
                                        links: T.footMarketLinks,
                                        ids: [
                                            'intelligence',
                                            'intelligence',
                                            'intelligence',
                                            'intelligence',
                                            'intelligence'
                                        ]
                                    }
                                ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: isAr ? 'text-right' : 'text-left',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold tracking-widest lux-gold-text uppercase mb-8 font-body",
                                                children: col.title
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: col.links.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        onClick: ()=>col.ids[i] && scrollTo(col.ids[i]),
                                                        className: `text-xs font-light opacity-40 hover:opacity-100 hover:lux-gold-text cursor-pointer transition-all ${isAr ? "font-['Cairo',sans-serif]" : "font-['Jost',sans-serif]"}`,
                                                        children: l
                                                    }, l, false, {
                                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/my-sierra-project/app/page.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, col.title, true, {
                                        fileName: "[project]/my-sierra-project/app/page.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `pt-10 border-t border-white/5 flex justify-between items-center flex-wrap gap-6 ${isAr ? 'flex-row-reverse' : 'flex-row'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[10px] font-light opacity-30 font-body",
                                    children: T.copyright
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 537,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-8",
                                    children: T.legal.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-light opacity-30 hover:opacity-100 cursor-pointer transition-all font-body",
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/my-sierra-project/app/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/my-sierra-project/app/page.tsx",
                                    lineNumber: 538,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-sierra-project/app/page.tsx",
                            lineNumber: 536,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-sierra-project/app/page.tsx",
                    lineNumber: 502,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/app/page.tsx",
                lineNumber: 501,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-sierra-project/app/page.tsx",
        lineNumber: 148,
        columnNumber: 5
    }, this);
}
_s(LandingPage, "51F4J5dRplgB/gQKW42tFxhSYvo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$I18nContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = LandingPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ParticleCanvas$dynamic");
__turbopack_context__.k.register(_c1, "ParticleCanvas");
__turbopack_context__.k.register(_c2, "LiveMap");
__turbopack_context__.k.register(_c3, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-sierra-project_0nzt1vs._.js.map