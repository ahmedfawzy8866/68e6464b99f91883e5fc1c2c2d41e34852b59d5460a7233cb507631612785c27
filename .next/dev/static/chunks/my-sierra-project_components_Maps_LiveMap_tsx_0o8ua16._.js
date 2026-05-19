(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-sierra-project/components/Maps/LiveMap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LiveMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LiveMap({ mode = 'dark', activeZoneIndex = null, zones = [] }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leafletInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMap.useEffect": ()=>{
            if (!mapRef.current) return;
            if (leafletInstance.current) {
                leafletInstance.current.remove();
            }
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map(mapRef.current, {
                center: [
                    30.055,
                    31.530
                ],
                zoom: 11,
                zoomControl: false,
                scrollWheelZoom: false,
                attributionControl: false
            });
            const tileUrl = mode === 'dark' ? 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png' : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
            __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer(tileUrl, {
                maxZoom: 18
            }).addTo(map);
            const createZoneMarker = {
                "LiveMap.useEffect.createZoneMarker": (z)=>__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                        className: 'zone-marker',
                        html: `
        <div style="display:flex;flex-direction:column;align-items:center;gap:2px;pointer-events:auto;">
          <div style="width:12px;height:12px;background:${z.color};border:2px solid rgba(255,255,255,0.9);border-radius:50%;box-shadow:0 0 10px ${z.color}99,0 0 20px ${z.color}44;"></div>
          <div style="background:${mode === 'dark' ? 'rgba(10,21,40,0.88)' : 'rgba(255,255,255,0.92)'};backdrop-filter:blur(6px);padding:2px 7px;border-radius:4px;border:1px solid ${z.color}44;white-space:nowrap;">
            <span style="font-family:'Jost',sans-serif;font-size:9px;font-weight:600;color:${z.color};letter-spacing:.06em;text-transform:uppercase;">${z.short}</span>
          </div>
        </div>
      `,
                        iconSize: [
                            80,
                            38
                        ],
                        iconAnchor: [
                            40,
                            8
                        ]
                    })
            }["LiveMap.useEffect.createZoneMarker"];
            markersRef.current = [];
            zones.forEach({
                "LiveMap.useEffect": (z, i)=>{
                    const marker = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker(z.coords, {
                        icon: createZoneMarker(z)
                    }).addTo(map);
                    markersRef.current[i] = marker;
                    const popupContent = `
        <div style="font-family:'Jost',sans-serif;padding:6px 4px;text-align:center;">
          <div style="font-size:13px;font-weight:600;color:#071422;margin-bottom:3px;">${z.area}</div>
          <div style="font-size:10px;color:${z.color};font-weight:700;letter-spacing:.06em;text-transform:uppercase;">${z.stat}</div>
        </div>
      `;
                    marker.bindPopup(popupContent, {
                        closeButton: false,
                        className: 'sierra-popup-custom',
                        offset: [
                            0,
                            8
                        ]
                    });
                    marker.on('mouseover', {
                        "LiveMap.useEffect": function() {
                            this.openPopup();
                        }
                    }["LiveMap.useEffect"]);
                }
            }["LiveMap.useEffect"]);
            leafletInstance.current = map;
            return ({
                "LiveMap.useEffect": ()=>{
                    if (leafletInstance.current) {
                        leafletInstance.current.remove();
                        leafletInstance.current = null;
                    }
                }
            })["LiveMap.useEffect"];
        }
    }["LiveMap.useEffect"], [
        mode,
        zones
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMap.useEffect": ()=>{
            if (leafletInstance.current && activeZoneIndex !== null && zones[activeZoneIndex]) {
                const z = zones[activeZoneIndex];
                leafletInstance.current.flyTo(z.coords, 13, {
                    duration: 1.5
                });
                markersRef.current[activeZoneIndex]?.openPopup();
            } else if (leafletInstance.current && activeZoneIndex === null) {
                leafletInstance.current.flyTo([
                    30.055,
                    31.530
                ], 11, {
                    duration: 1.5
                });
            }
        }
    }["LiveMap.useEffect"], [
        activeZoneIndex,
        zones
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-a431c2c2c951cb39" + " " + "w-full h-full relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a431c2c2c951cb39",
                children: ".sierra-popup-custom .leaflet-popup-content-wrapper{-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);background:#fffffff2;border:1px solid #e9c17666;border-radius:8px;box-shadow:0 10px 30px #0003}.sierra-popup-custom .leaflet-popup-tip{display:none}.leaflet-container{background:0 0!important}.dark-map-tiles .leaflet-tile-pane{filter:brightness(.55)contrast(1.2)saturate(.3)hue-rotate(180deg)}.zone-marker{background:0 0!important;border:none!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "jsx-a431c2c2c951cb39" + " " + `w-full h-full ${mode === 'dark' ? 'dark-map-tiles' : ''}`
            }, void 0, false, {
                fileName: "[project]/my-sierra-project/components/Maps/LiveMap.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-sierra-project/components/Maps/LiveMap.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(LiveMap, "as8frxxez2mcQtrWlyiMq0LC8s0=");
_c = LiveMap;
var _c;
__turbopack_context__.k.register(_c, "LiveMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/components/Maps/LiveMap.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-sierra-project/components/Maps/LiveMap.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=my-sierra-project_components_Maps_LiveMap_tsx_0o8ua16._.js.map