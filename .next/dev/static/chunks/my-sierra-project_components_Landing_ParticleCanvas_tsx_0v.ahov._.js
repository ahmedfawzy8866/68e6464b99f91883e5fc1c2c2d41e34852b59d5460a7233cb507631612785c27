(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-sierra-project/components/Landing/ParticleCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ParticleCanvas() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleCanvas.useEffect": ()=>{
            const c = ref.current;
            if (!c) return;
            const ctx = c.getContext('2d');
            if (!ctx) return;
            let W = c.width = c.offsetWidth;
            let H = c.height = c.offsetHeight;
            const pts = Array.from({
                length: 55
            }, {
                "ParticleCanvas.useEffect.pts": ()=>({
                        x: Math.random() * W,
                        y: H + Math.random() * H,
                        r: Math.random() * 1.5 + 0.3,
                        vx: (Math.random() - 0.5) * 0.3,
                        vy: -Math.random() * 0.6 - 0.2,
                        a: Math.random() * 0.45 + 0.1
                    })
            }["ParticleCanvas.useEffect.pts"]);
            let raf;
            const draw = {
                "ParticleCanvas.useEffect.draw": ()=>{
                    ctx.clearRect(0, 0, W, H);
                    pts.forEach({
                        "ParticleCanvas.useEffect.draw": (p)=>{
                            ctx.beginPath();
                            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(233,193,118,${p.a})`;
                            ctx.fill();
                            p.x += p.vx;
                            p.y += p.vy;
                            if (p.y < -10) {
                                p.y = H + 10;
                                p.x = Math.random() * W;
                            }
                            if (p.x < 0) p.x = W;
                            if (p.x > W) p.x = 0;
                        }
                    }["ParticleCanvas.useEffect.draw"]);
                    raf = requestAnimationFrame(draw);
                }
            }["ParticleCanvas.useEffect.draw"];
            draw();
            const resize = {
                "ParticleCanvas.useEffect.resize": ()=>{
                    W = c.width = c.offsetWidth;
                    H = c.height = c.offsetHeight;
                }
            }["ParticleCanvas.useEffect.resize"];
            window.addEventListener('resize', resize);
            return ({
                "ParticleCanvas.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener('resize', resize);
                }
            })["ParticleCanvas.useEffect"];
        }
    }["ParticleCanvas.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: ref,
        className: "absolute inset-0 w-full h-full pointer-events-none z-[1]"
    }, void 0, false, {
        fileName: "[project]/my-sierra-project/components/Landing/ParticleCanvas.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(ParticleCanvas, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = ParticleCanvas;
var _c;
__turbopack_context__.k.register(_c, "ParticleCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/components/Landing/ParticleCanvas.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/my-sierra-project/components/Landing/ParticleCanvas.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=my-sierra-project_components_Landing_ParticleCanvas_tsx_0v.ahov._.js.map