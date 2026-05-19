(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-sierra-project/lib/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getAnalyticsInstance",
    ()=>getAnalyticsInstance,
    "isFirebaseClientConfigured",
    ()=>isFirebaseClientConfigured,
    "storage",
    ()=>storage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * SIERRA BLU — FIREBASE CLIENT SINGLETON
 * Central Firebase initialization for the frontend.
 * Admin SDK (service-account.json) is for server/scripts only.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$568d0403$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/@firebase/auth/dist/esm/index-568d0403.js [app-client] (ecmascript) <export p as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$fe7037b3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aX__as__getFirestore$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/@firebase/firestore/dist/common-fe7037b3.esm.js [app-client] (ecmascript) <export aX as getFirestore>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$firebase$2f$storage$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/firebase/storage/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/@firebase/storage/dist/index.esm.js [app-client] (ecmascript)");
;
;
;
;
const hasFirebaseConfig = Boolean(("TURBOPACK compile-time value", "AIzaSyBZLN2jTTKV34SneGPoWRz1zoRpX5uODjs") && ("TURBOPACK compile-time value", "sierra-blu.firebaseapp.com") && ("TURBOPACK compile-time value", "sierra-blu") && ("TURBOPACK compile-time value", "1:941030513456:web:56209a1495d69f217086f5"));
const canUsePlaceholderConfig = !hasFirebaseConfig && ("TURBOPACK compile-time value", "object") === 'undefined';
if (!hasFirebaseConfig && !canUsePlaceholderConfig) {
    throw new Error('Missing public Firebase configuration.');
}
const firebaseConfig = hasFirebaseConfig ? {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyBZLN2jTTKV34SneGPoWRz1zoRpX5uODjs"),
    authDomain: ("TURBOPACK compile-time value", "sierra-blu.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "sierra-blu"),
    storageBucket: ("TURBOPACK compile-time value", "sierra-blu.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "941030513456"),
    appId: ("TURBOPACK compile-time value", "1:941030513456:web:56209a1495d69f217086f5")
} : {
    apiKey: 'demo-api-key',
    authDomain: 'demo.firebaseapp.com',
    projectId: ("TURBOPACK compile-time value", "sierra-blu") || 'demo-project',
    storageBucket: ("TURBOPACK compile-time value", "sierra-blu.firebasestorage.app") || 'demo.appspot.com',
    messagingSenderId: ("TURBOPACK compile-time value", "941030513456") || '000000000000',
    appId: ("TURBOPACK compile-time value", "1:941030513456:web:56209a1495d69f217086f5") || '1:000000000000:web:demo'
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])()[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
const hasClientApiKey = Boolean(firebaseConfig.apiKey);
const isFirebaseClientConfigured = hasClientApiKey;
const unavailableClientService = (serviceName)=>new Proxy({}, {
        get () {
            throw new Error(`Firebase client ${serviceName} is unavailable because NEXT_PUBLIC_FIREBASE_API_KEY is not configured.`);
        }
    });
const auth = hasClientApiKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$568d0403$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__p__as__getAuth$3e$__["getAuth"])(app) : unavailableClientService('auth');
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$fe7037b3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__aX__as__getFirestore$3e$__["getFirestore"])(app);
const storage = hasClientApiKey ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$storage$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStorage"])(app) : unavailableClientService('storage');
async function getAnalyticsInstance() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const { getAnalytics } = await __turbopack_context__.A("[project]/my-sierra-project/node_modules/firebase/analytics/dist/esm/index.esm.js [app-client] (ecmascript, async loader)");
        return getAnalytics(app);
    } catch  {
        return null;
    }
}
const __TURBOPACK__default__export__ = app;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/lib/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$568d0403$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/@firebase/auth/dist/esm/index-568d0403.js [app-client] (ecmascript) <export z as onAuthStateChanged>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$568d0403$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/@firebase/auth/dist/esm/index-568d0403.js [app-client] (ecmascript) <export D as signOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/lib/firebase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    role: null,
    isAdmin: false,
    isGuest: false,
    loading: true,
    setGuest: ()=>{},
    signOut: async ()=>{}
});
const INACTIVITY_TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes
const ACTIVITY_EVENTS = [
    'pointerdown',
    'keydown',
    'scroll',
    'touchstart'
];
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGuest, setIsGuest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clearTimer = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "AuthProvider.useCallback[clearTimer]": ()=>{
            if (timerRef.current) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        }
    }["AuthProvider.useCallback[clearTimer]"], []);
    const handleSignOut = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "AuthProvider.useCallback[handleSignOut]": async ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseClientConfigured"]) {
                setUser(null);
                setRole(null);
                setIsGuest(false);
                return;
            }
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$568d0403$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__signOut$3e$__["signOut"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"]);
                setUser(null);
                setRole(null);
                setIsGuest(false);
            } catch (error) {
                console.error('Sign-out failed:', error);
            }
        }
    }["AuthProvider.useCallback[handleSignOut]"], []);
    const scheduleAutoSignOut = __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "AuthProvider.useCallback[scheduleAutoSignOut]": ()=>{
            clearTimer();
            if (!isGuest && (!__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseClientConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].currentUser)) {
                return;
            }
            timerRef.current = setTimeout({
                "AuthProvider.useCallback[scheduleAutoSignOut]": ()=>{
                    void handleSignOut();
                }
            }["AuthProvider.useCallback[scheduleAutoSignOut]"], INACTIVITY_TIMEOUT_MS);
        }
    }["AuthProvider.useCallback[scheduleAutoSignOut]"], [
        isGuest,
        handleSignOut,
        clearTimer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirebaseClientConfigured"]) {
                setLoading(false);
                clearTimer();
                return;
            }
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2d$568d0403$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__z__as__onAuthStateChanged$3e$__["onAuthStateChanged"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"], {
                "AuthProvider.useEffect.unsubscribe": async (currentUser)=>{
                    setUser(currentUser);
                    if (currentUser) {
                        setIsGuest(false);
                        // Fetch role from Firestore
                        try {
                            const { db } = await __turbopack_context__.A("[project]/my-sierra-project/lib/firebase.ts [app-client] (ecmascript, async loader)");
                            const { doc, getDoc } = await __turbopack_context__.A("[project]/my-sierra-project/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript, async loader)");
                            const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                            if (userDoc.exists()) {
                                const userData = userDoc.data();
                                setRole(userData.role || 'agent');
                            } else {
                                setRole('agent');
                            }
                        } catch (err) {
                            console.error("Error fetching user role:", err);
                            setRole('agent');
                        }
                    } else {
                        setRole(null);
                    }
                    setLoading(false);
                    if (currentUser) {
                        scheduleAutoSignOut();
                    } else {
                        clearTimer();
                    }
                }
            }["AuthProvider.useEffect.unsubscribe"], {
                "AuthProvider.useEffect.unsubscribe": (error)=>{
                    console.error("Auth error:", error);
                    setLoading(false);
                    clearTimer();
                }
            }["AuthProvider.useEffect.unsubscribe"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    unsubscribe();
                    clearTimer();
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        scheduleAutoSignOut,
        clearTimer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            if (!user && !isGuest) {
                return;
            }
            const handleActivity = {
                "AuthProvider.useEffect.handleActivity": ()=>scheduleAutoSignOut()
            }["AuthProvider.useEffect.handleActivity"];
            ACTIVITY_EVENTS.forEach({
                "AuthProvider.useEffect": (eventName)=>{
                    window.addEventListener(eventName, handleActivity, {
                        passive: eventName !== 'keydown'
                    });
                }
            }["AuthProvider.useEffect"]);
            return ({
                "AuthProvider.useEffect": ()=>{
                    ACTIVITY_EVENTS.forEach({
                        "AuthProvider.useEffect": (eventName)=>{
                            window.removeEventListener(eventName, handleActivity);
                        }
                    }["AuthProvider.useEffect"]);
                }
            })["AuthProvider.useEffect"];
        }
    }["AuthProvider.useEffect"], [
        user,
        isGuest
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            role,
            isAdmin: role === 'admin',
            isGuest,
            loading,
            setGuest: setIsGuest,
            signOut: handleSignOut
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/my-sierra-project/lib/AuthContext.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
_s(AuthProvider, "S5k9OmkCpfv23hIk8bYgGXVPk6A=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/messages/en.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"common\":{\"appName\":\"Sierra Blue Realty\",\"tagline\":\"Luxury Real Estate Excellence\",\"loading\":\"Loading...\",\"save\":\"Save\",\"cancel\":\"Cancel\",\"delete\":\"Delete\",\"edit\":\"Edit\",\"add\":\"Add\",\"search\":\"Search\",\"filter\":\"Filter\",\"export\":\"Export\",\"close\":\"Close\",\"confirm\":\"Confirm\",\"back\":\"Back\",\"next\":\"Next\",\"viewAll\":\"View All\",\"noData\":\"No data available\",\"error\":\"An error occurred\",\"success\":\"Operation successful\",\"welcome\":\"Welcome\",\"signOut\":\"Sign Out\",\"settings\":\"Settings\"},\"auth\":{\"signIn\":\"Sign In\",\"signUp\":\"Sign Up\",\"email\":\"Email Address\",\"password\":\"Password\",\"forgotPassword\":\"Forgot Password?\",\"signInWithGoogle\":\"Sign in with Google\",\"guestMode\":\"Continue as Guest\",\"guestNote\":\"Explore with limited access\",\"signingIn\":\"Signing in...\",\"invalidCredentials\":\"Invalid email or password\",\"sessionExpired\":\"Your session has expired. Please sign in again.\"},\"nav\":{\"dashboard\":\"Intelligence Terminal\",\"listings\":\"Portfolio Assets\",\"flow\":\"Strategic Pipeline\",\"crm\":\"Market Registry\",\"clients\":\"Investment Stakeholders\",\"Live Map\":\"Live Intelligence Map\",\"reports\":\"Market Insights\",\"team\":\"Executive Cabinet\",\"operations\":\"Core Protocols\",\"Media Hub\":\"Asset Visuals\",\"ai\":\"Neural Experiences\",\"commissions\":\"Capital Ledger\",\"sync\":\"Data Synchronization\",\"processing\":\"Neural Synthesis\",\"Intelligence\":\"Global Intelligence\",\"Nexus Hub\":\"Operational Nexus\",\"admin-dashboard\":\"System Command\",\"team-crm\":\"Cabinet Management\",\"database\":\"Registry Core\",\"System Hub\":\"System Architecture\",\"settings\":\"Configurations\",\"nexus\":\"Integration Nexus\",\"media\":\"Media Hub\",\"operations_hub\":\"Operations Hub\"},\"dashboard\":{\"title\":\"Executive Dashboard\",\"totalListings\":\"Total Portfolio Assets\",\"activeLeads\":\"Active Investment Stakeholders\",\"pendingSales\":\"Pending Sales\",\"revenue\":\"Revenue\",\"recentActivity\":\"Recent Activity\",\"marketInsights\":\"Market Insights\",\"performance\":\"Performance Overview\",\"quickActions\":\"Quick Actions\",\"greeting\":\"Welcome back\",\"morning\":\"Good Morning\",\"afternoon\":\"Good Afternoon\",\"evening\":\"Good Evening\",\"statusOptimum\":\"Operational Status: Optimum\",\"incorporateAsset\":\"Incorporate Asset\",\"institutionalIntelligence\":\"Institutional Intelligence\",\"neuralLinkActive\":\"Neural Link Active\",\"marketIntelligence\":\"Market Intelligence\",\"operationalVelocity\":\"Operational Velocity\",\"globalRegistry\":\"Global Registry\",\"securityNodeStatus\":\"Security Node Status\",\"neuralCore\":\"Neural Core\",\"optimal\":\"Optimal\",\"syncGateway\":\"Sync Gateway\",\"stable\":\"Stable\",\"dataPersistence\":\"Data Persistence\",\"precisionMotto\":\"Precision is the architect of excellence.\",\"upcomingMilestone\":\"Upcoming Milestone\",\"quarterlyReview\":\"Quarterly Review\",\"portfolioAssets\":\"Portfolio Assets\",\"liveInventory\":\"Live Inventory\",\"activeStakeholders\":\"Active Stakeholders\",\"priority\":\"Priority\",\"capitalTransacted\":\"Capital Transacted\",\"executivePartners\":\"Executive Partners\",\"secured\":\"Secured\",\"executiveProtocols\":\"EXECUTIVE PROTOCOLS\",\"inventoryIngestion\":\"Inventory Ingestion\",\"stakeholderProtocol\":\"Investment Stakeholder Protocol\",\"lifecycleVelocity\":\"Lifecycle Velocity\",\"strategicIntel\":\"Strategic Intel\"},\"listings\":{\"title\":\"Portfolio Assets\",\"addListing\":\"Add Portfolio Asset\",\"editListing\":\"Edit Portfolio Asset\",\"viewListing\":\"View Asset Details\",\"shareListing\":\"Share Asset\",\"deleteListing\":\"Remove Asset\",\"propertyType\":\"Property Type\",\"location\":\"Location\",\"price\":\"Price\",\"area\":\"Area (sqm)\",\"bedrooms\":\"Bedrooms\",\"bathrooms\":\"Bathrooms\",\"developer\":\"Developer\",\"project\":\"Project\",\"status\":\"Status\",\"available\":\"Available\",\"reserved\":\"Reserved\",\"sold\":\"Sold\",\"gridView\":\"Grid View\",\"tableView\":\"Table View\",\"syncFromPF\":\"Synchronize Assets\"},\"activity\":{\"title\":\"Operational Velocity\",\"liveFeed\":\"Live Feed\",\"noSignals\":\"Zero operational signals detected in the current window.\",\"justNow\":\"Just now\",\"minutesAgo\":\"m ago\",\"hoursAgo\":\"h ago\"},\"flow\":{\"title\":\"Stakeholder Flow Dashboard\",\"subtitle\":\"AI Discovers | We Advise | You Decide\",\"newProspect\":\"New Investment Stakeholder\",\"addLead\":\"Add Investment Stakeholder\",\"callProspect\":\"Contact Investment Stakeholder\",\"saveProspect\":\"Save Investment Stakeholder\",\"engine\":\"Flow Engine\",\"stats\":\"Flow Statistics\",\"noProspects\":\"No investment stakeholders found in the pipeline.\",\"listTitle\":\"Investment Stakeholder Pipeline\",\"strategicPersonnel\":\"Active Advisors\",\"advisingNow\":\"Clients Under Advisory\",\"scripts\":{\"intake\":{\"title\":\"Icebreaker & Intake\",\"text\":\"Good evening, {name}! This is Sierra Blu Realty... I'm calling about your rental inquiry in New Cairo. Our approach is a bit different; our AI monitors the market in real-time to find your perfect match quickly, without wasting your time on properties that don't exist...\",\"tasks\":[\"Verify correct name\",\"Explain AI advantage\",\"Schedule follow-up\"]},\"ai-discovery\":{\"title\":\"AI Discovery Phase\",\"text\":\"To get the most accurate results from our system, I'd like to know: do you prefer an apartment or a villa? Fully furnished or just appliances? Any specific compound in mind, or is location the priority?\",\"tasks\":[\"Unit type\",\"Furnishing level\",\"Preferred location\",\"Move-in date\"]},\"advisory\":{\"title\":\"Professional Advisory\",\"text\":\"I've personally reviewed the 3 recommendations the system selected today; they truly are the best value and location currently available. I'd recommend the first unit if you prioritize quiet, or the second if proximity to services is key. Would you like to view them tomorrow?\",\"tasks\":[\"Manual review of matches\",\"Expert recommendation\",\"Set inspection time\"]},\"presentation\":{\"title\":\"Presentation & Decision\",\"text\":\"As you saw during the inspection, this unit is a rare find and the price is unbeatable for its features. Shall we finalize the contract today to ensure it's not taken off the market?\",\"tasks\":[\"Handle objections\",\"Explain terms\",\"Closing decision\"]},\"closed\":{\"title\":\"Deal Finalization\",\"text\":\"Congratulations on your new home! Sierra Blu is always here if you need anything during your stay.\",\"tasks\":[\"Sign contract\",\"Collect commission\",\"Request review\"]}},\"stages\":{\"intake\":\"Stakeholder Intake\",\"ai-discovery\":\"Neural Discovery\",\"advisory\":\"Executive Advisory\",\"presentation\":\"Asset Presentation\",\"closed\":\"Settlement Finalized\"},\"callsTarget\":\"Strategic Calls\",\"messagesTarget\":\"Nexus Messages\"},\"pipeline\":{\"title\":\"Command Intelligence: Strategic Pipeline\",\"subtitle\":\"Analyzing {visible} of {total} active investment stakeholders within the conversion lifecycle\",\"syncPF\":\"Sync Property Finder\",\"neuralMatch\":\"Neural Match\",\"onboardProspect\":\"Onboard Prospect\",\"syncing\":\"Synchronizing...\",\"matching\":\"Matching...\",\"searchPlaceholder\":\"Search by name, phone, advisor, channel, or interest\",\"filters\":{\"priority\":\"Priority Engagement\",\"allPriority\":\"All priority\",\"hot\":\"Hot only\",\"warm\":\"Warm only\",\"cold\":\"Cold only\",\"allChannels\":\"All channels\",\"allAdvisors\":\"All advisors\"},\"metrics\":{\"visible\":\"Visible Pipeline\",\"visibleSub\":\"Filtered operating view\",\"hot\":\"Hot Prospects\",\"hotSub\":\"Immediate follow-up priority\",\"closeReady\":\"Close Ready\",\"closeReadySub\":\"Structuring + settlement\",\"value\":\"Pipeline Value\",\"valueSub\":\"Estimated deal volume (EGP)\"},\"phases\":{\"acquisition\":{\"title\":\"Strategic Acquisition\",\"description\":\"High-intent market entries and incoming portfolio inquiries\"},\"consultation\":{\"title\":\"Executive Consultation\",\"description\":\"Initial discovery and architectural preference synthesis\"},\"inspection\":{\"title\":\"Asset Inspection\",\"description\":\"Private viewings and physical property experience\"},\"structuring\":{\"title\":\"Deal Structuring\",\"description\":\"Financial reconciliation and contractual architecture\"},\"settlement\":{\"title\":\"Portfolio Settlement\",\"description\":\"Successful asset transition and relationship formalization\"}},\"card\":{\"portfolioFocus\":\"Portfolio Focus\",\"investmentCapacity\":\"Investment Capacity\",\"neuralMatches\":\"Neural Matches\",\"advisor\":\"Advisor\",\"vipReward\":\"VIP VIEWING REWARD ACTIVE\",\"ingestion\":\"Ingestion\",\"activeIntel\":\"Active Operational Intel\",\"proposePackage\":\"Propose Package\",\"structuring\":\"Structuring...\",\"advance\":\"Advance\",\"empty\":\"Reserved for future asset assignments\",\"noMatches\":\"No stakeholders match the active filters\"},\"modal\":{\"title\":\"Prospect Specification\",\"subtitle\":\"Initialize a new strategic relationship within the portfolio ecosystem\",\"identity\":\"Prospect Identity\",\"namePlaceholder\":\"Full Legal Name\",\"contact\":\"Direct Contact (International)\",\"contactPlaceholder\":\"+20 1XX XXX XXXX\",\"interest\":\"Inventory Profile Interest\",\"interestPlaceholder\":\"e.g. Waterfront Mansion\",\"capital\":\"Capital Allocation (EGP)\",\"capitalPlaceholder\":\"e.g. 25M - 40M\",\"velocity\":\"Engagement Velocity\",\"intent\":{\"hot\":\"Critical Intent / Hot\",\"warm\":\"Proactive / Warm\",\"cold\":\"Observational / Cold\"}},\"loader\":\"Synchronizing Opportunity Pipeline...\"},\"crm\":{\"title\":\"Strategic Pipeline\",\"newLead\":\"New Investment Stakeholder\",\"stages\":{\"lead\":\"Investment Stakeholder\",\"contact\":\"Contact Made\",\"qualify\":\"Qualified\",\"present\":\"Presentation\",\"visit\":\"Site Visit\",\"negotiate\":\"Negotiation\",\"reserve\":\"Reserved\",\"contract\":\"Contracting\",\"handover\":\"Handover\",\"closedWon\":\"Closed Won\"},\"leadName\":\"Investment Stakeholder Name\",\"phone\":\"Phone Number\",\"budget\":\"Budget\",\"source\":\"Acquisition Source\",\"assignedTo\":\"Assigned To\",\"notes\":\"Notes\",\"lastActivity\":\"Last Activity\",\"moveToStage\":\"Move to Stage\"},\"financial\":{\"pricePerSqm\":\"Price/sqm\",\"grossYield\":\"Gross Yield\",\"netYield\":\"Net Yield\",\"roi\":\"Return on Investment\",\"capitalAppreciation\":\"Capital Appreciation\",\"monthlyIncome\":\"Monthly Net Income\",\"annualIncome\":\"Annual Net Income\",\"paybackPeriod\":\"Payback Period\",\"years\":\"years\"},\"sync\":{\"title\":\"Sync Wizard\",\"runSync\":\"Run Sync Now\",\"lastSync\":\"Last Sync\",\"pendingReview\":\"Pending Review\",\"matched\":\"Auto-Matched\",\"created\":\"New Created\",\"skipped\":\"Skipped\",\"conflicts\":\"Conflicts\",\"dedupeQueue\":\"Dedup Review Queue\",\"resolve\":\"Resolve\",\"approve\":\"Approve Match\",\"reject\":\"Create as New\",\"skip\":\"Skip\",\"editorialProtected\":\"Manually edited — sync will not overwrite\"},\"landing\":{\"brand\":\"SIERRA BLU\",\"sub\":\"REALTY\",\"tagline\":\"INTELLIGENCE-LED PROPERTY ADVISORY\",\"heroH1\":[\"Refined\",\"Decisions.\"],\"heroItalic\":\"Intelligence-Led.\",\"heroDesc\":\"Exceptional properties, precisely matched. We guide discerning investors toward Egypt's finest addresses — curated by expert advisors, refined by AI.\",\"heroTag\":\"Beyond Brokerage\",\"heroSub\":\"Precision. Property. Purpose.\",\"btnDiscover\":\"Explore Properties\",\"btnView\":\"Meet Sierra AI\",\"featuredTitle\":\"Featured Properties\",\"ctaButton\":\"Explore Properties\",\"contactUs\":\"Contact Us\",\"about\":\"About Sierra Blu\",\"aboutText\":\"Sierra Blu Realty is your gateway to luxury real estate in Egypt. We curate the finest properties across Cairo, the North Coast, and Ain Sokhna.\",\"privacyPolicy\":\"Privacy Policy\",\"termsOfService\":\"Terms of Service\"},\"team\":{\"title\":\"Executive Advisors & Partners\",\"subtitle\":\"Direct management of advisor performance benchmarks, strategic targets, and GCI visibility\",\"enlistPartner\":\"Enlist Partner\",\"strategicPersonnel\":\"Strategic Personnel\",\"yieldBenchmarking\":\"Yield Benchmarking\",\"objectiveFulfillment\":\"Objective Fulfillment\",\"avgPayout\":\"Avg. Payout\",\"terminatePartnership\":\"Terminate Partnership\",\"enlistExecutive\":\"Enlist Executive\",\"authorizeCredentials\":\"Authorize professional credentials\",\"enlistmentModalTitle\":\"Executive Enlistment\",\"enlistmentModalSub\":\"Onboard a strategic partner to the Sierra Blu ecosystem\",\"legalName\":\"Legal Name\",\"strategicRole\":\"Strategic Role\",\"colorTheme\":\"Color Theme\",\"baselineDeals\":\"Baseline Deals\",\"aggregateGci\":\"Aggregate GCI (EGP)\",\"terminateEntry\":\"Terminate Entry\",\"authorizePartnership\":\"Authorize Partnership\",\"ledgerTitle\":\"Commission Ledger\",\"ledgerSub\":\"Executive command center for payout schedules, transaction reconciliation, and strategic financial forecasting.\",\"accessLedger\":\"Access Reconciliation Ledger\",\"adminOnly\":\"RELEVANT TO ADMINISTRATORS ONLY\"},\"easyListing\":{\"title\":\"Smart Data Entry\",\"subtitle\":\"Enter property description (e.g., Apartment in Mivida 3 BR furnished for 75k)...\",\"placeholder\":\"Write property details here...\",\"imageLabel\":\"Primary Property Image\",\"btnProcess\":\"Extract Data & Generate Code\",\"outputTitle\":\"Structured Data (Easy Listing)\",\"internalCode\":\"Smart Internal Code\",\"compound\":\"Compound / Area\",\"price\":\"Extracted Price\",\"statusPassed\":\"Audit Passed (DQE Passed) - No Duplicates\",\"previewLabel\":\"Sierra Blu Ad Preview\",\"btnDownload\":\"Download Advertisement Image\",\"waiting\":\"Waiting for data entry...\",\"unknown\":\"Not Specified\",\"undetermined\":\"To be determined\",\"motto\":\"BEYOND BROKERAGE | AI-DRIVEN REAL ESTATE\",\"btnGenerateSave\":\"Generate & Save\",\"btnExportExcel\":\"Export to Excel\",\"dashboard\":{\"title\":\"Inventory Dashboard\",\"activeUnits\":\"Total Active Portfolio Assets\",\"topViewed\":\"Top 10 Most Viewed Units\",\"byCompound\":\"Properties by Compound\",\"highestSearch\":\"Highest Search in New Cairo\",\"recommendations\":\"Based on your last search, you might like:\"},\"form\":{\"phone\":\"Phone Number\",\"bedrooms\":\"Bedrooms Number\",\"price\":\"Property Price\",\"currency\":\"Currency\",\"furnished\":\"Furnished Status\",\"uploadImages\":\"Upload Images\"},\"validation\":{\"errorCompound\":\"Compound exists in dictionary (show error if missing)\",\"errorBeds\":\"Bedrooms number exists (show error)\",\"errorPrice\":\"Price exists (show error)\",\"errorFurnished\":\"Furnished status exists (show error)\",\"errorPhone\":\"Phone number exists (show error)\"},\"content\":{\"whatsapp\":\"WhatsApp Post Template\",\"facebook\":\"Facebook Post Template\",\"copy\":\"Copy Content\"},\"stages\":{\"acquisition\":\"Stage 1: Data Acquisition\",\"parsing\":\"Stage 2: AI Parsing\",\"branding\":\"Stage 3: Corporate Branding\",\"distribution\":\"Stage 4: Distribution Engine\",\"intelligence\":\"Stage 5: Lead Intelligence\",\"matching\":\"Stage 6: AI Matchmaking\",\"sales\":\"Stage 7: Sales Logic\",\"viewing\":\"Stage 8: Viewing Engine\",\"closing\":\"Stage 9: Closing Protocol\",\"feedback\":\"Stage 10: Feedback Loop\"}},\"spatial\":{\"title\":\"Spatial Inventory Grid\",\"subtitle\":\"Real-time geographic distribution of active resale and rental units in New Cairo.\",\"viewDetails\":\"View Asset Details\",\"startTour\":\"Launch 360° Virtual Tour\",\"noCoords\":\"Location data pending calibration\",\"filters\":{\"all\":\"All Units\",\"resale\":\"Resale Only\",\"rent\":\"Rental Only\"}},\"tour\":{\"loading\":\"Calibrating Neural Vision...\",\"fullscreen\":\"Immersive Mode\",\"exit\":\"Exit Tour\",\"controls\":\"Navigation Controls\"},\"os\":{\"version\":\"Sierra Blue OS V4.0\",\"status\":\"Neural Core Synchronized\",\"orchestration\":\"Operational Orchestration Ledger\",\"analyzer\":\"Market Signal Reconstructor\"},\"admin\":{\"dashboard\":\"Intelligence Command\",\"team\":\"Team Strategic Pipeline\",\"listings\":\"Portfolio Assets\",\"database\":\"Database Explorer\",\"nexus\":\"Integration Nexus\",\"intelligence\":\"Market Intelligence\",\"media\":\"Media Hub\",\"greeting\":\"Welcome to the Sierra Blu Command Center. Total system oversight and tactical intelligence at your fingertips.\",\"systemStatus\":\"System Status\",\"operational\":\"All Systems Operational\",\"deployPatch\":\"Deploy Patch\",\"deploying\":\"Deploying\",\"pipelineActive\":\"Deployment Pipeline Active\",\"backendOrchestration\":\"Backend Orchestration\",\"syncHealth\":\"Real-time sync and processing health across all endpoints.\",\"securityProtocol\":\"Security Protocol\",\"securityNote\":\"Your administrative session is protected by 256-bit encryption. All actions are logged to the immutable Sierra Audit Trail.\",\"networkLatency\":\"Network Latency\",\"firestoreSync\":\"Firestore Sync\",\"viewLogs\":\"View Security Logs\",\"auditTrail\":\"Security Audit Trail\",\"auditNote\":\"Immutable ledger of administrative actions.\",\"initializing\":\"Initializing Intelligence...\",\"noAdvisors\":\"No Advisors Found\",\"addAdvisor\":\"Add Advisor\",\"humanCapital\":\"Human Capital\",\"crmDescription\":\"Advanced oversight of advisor performance and organizational flow.\",\"performance\":\"Performance\",\"portfolio\":\"Portfolio\",\"connect\":\"Connect\",\"intelligenceTab\":\"Intelligence\",\"searchAdvisors\":\"Search members...\",\"status\":\"Status\",\"active\":\"Active\",\"inactive\":\"Inactive\",\"securityAudit\":\"Security Audit Trail\",\"login\":{\"title\":\"Intelligence Command\",\"subtitle\":\"Sierra Blue Administrative Oversight\",\"identifier\":\"Admin Identifier\",\"securityKey\":\"Security Key\",\"initialize\":\"Initialize Override\",\"identifierPlaceholder\":\"admin.access@sierrablurealty.com\",\"keyPlaceholder\":\"••••••••••••\",\"encrypted\":\"Encrypted Tunnel Active\",\"mfa\":\"Hardware MFA Verified\",\"error\":{\"denied\":\"Access Denied: Administrative credentials required.\",\"unauthorized\":\"Unauthorized: Administrative profile not found.\",\"invalid\":\"Invalid administrative credentials.\",\"locked\":\"Too many failed attempts. Access temporarily locked.\",\"failure\":\"System authentication failure. Contact Infrastructure Support.\"}}},\"clients\":{\"title\":\"Global Stakeholder Portfolio\",\"subtitle\":\"Comprehensive record of all active prospects, historical interactions, and asset allocations\",\"searchPlaceholder\":\"Search by name, phone, or portfolio preference...\",\"exportLedger\":\"Export Ledger\",\"phases\":{\"all\":\"All Phases\",\"acquisition\":\"Acquisition\",\"consultation\":\"Consultation\",\"inspection\":\"Inspection\",\"structuring\":\"Structuring\",\"settlement\":\"Settled\"},\"table\":{\"identity\":\"Stakeholder Identity\",\"capital\":\"Capital Allocation\",\"focus\":\"Portfolio Focus\",\"advisor\":\"Assigned Advisor\",\"phase\":\"Operational Phase\",\"date\":\"Ingestion Date\",\"unassigned\":\"Unassigned\",\"historical\":\"Historical\",\"noResults\":\"No stakeholders matching your search criteria were found in the ledger.\"}}}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/messages/ar.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"common\":{\"appName\":\"سييرا بلو العقارية\",\"tagline\":\"التميّز في العقارات الفاخرة\",\"loading\":\"جاري التحميل...\",\"save\":\"حفظ\",\"cancel\":\"إلغاء\",\"delete\":\"حذف\",\"edit\":\"تعديل\",\"add\":\"إضافة\",\"search\":\"بحث\",\"filter\":\"تصفية\",\"export\":\"تصدير\",\"close\":\"إغلاق\",\"confirm\":\"تأكيد\",\"back\":\"رجوع\",\"next\":\"التالي\",\"viewAll\":\"عرض الكل\",\"noData\":\"لا توجد بيانات\",\"error\":\"حدث خطأ\",\"success\":\"تمت العملية بنجاح\",\"welcome\":\"مرحباً\",\"signOut\":\"تسجيل الخروج\",\"settings\":\"الإعدادات\"},\"auth\":{\"signIn\":\"تسجيل الدخول\",\"signUp\":\"إنشاء حساب\",\"email\":\"البريد الإلكتروني\",\"password\":\"كلمة المرور\",\"forgotPassword\":\"هل نسيت كلمة المرور؟\",\"signInWithGoogle\":\"تسجيل الدخول بحساب جوجل\",\"guestMode\":\"الدخول كزائر\",\"guestNote\":\"استكشف بصلاحيات محدودة\",\"signingIn\":\"جاري تسجيل الدخول...\",\"invalidCredentials\":\"البريد الإلكتروني أو كلمة المرور غير صحيحة\",\"sessionExpired\":\"انتهت الجلسة. يرجى تسجيل الدخول مجدداً.\"},\"nav\":{\"dashboard\":\"محطة الاستخبارات\",\"listings\":\"أصول المحفظة\",\"flow\":\"خط الأنابيب الاستراتيجي\",\"crm\":\"سجل السوق\",\"clients\":\"أصحاب المصلحة الاستثماريون\",\"Live Map\":\"خريطة الاستخبارات الحية\",\"reports\":\"رؤى السوق\",\"team\":\"المجلس التنفيذي\",\"operations\":\"البروتوكولات الأساسية\",\"Media Hub\":\"مرئيات الأصول\",\"ai\":\"تجارب عصبية\",\"commissions\":\"دفتر رأس المال\",\"sync\":\"مزامنة البيانات\",\"processing\":\"التركيب العصبي\",\"Intelligence\":\"الاستخبارات العالمية\",\"Nexus Hub\":\"رابطة العمليات\",\"admin-dashboard\":\"قيادة النظام\",\"team-crm\":\"إدارة المجلس\",\"database\":\"جوهر السجل\",\"System Hub\":\"بنية النظام\",\"settings\":\"الإعدادات\",\"nexus\":\"مركز التكامل\",\"media\":\"مركز الوسائط\",\"operations_hub\":\"مركز العمليات\"},\"dashboard\":{\"title\":\"لوحة التحكم الرئيسية\",\"totalListings\":\"إجمالي أصول المحفظة\",\"activeLeads\":\"المستثمرون الاستراتيجيون النشطون\",\"pendingSales\":\"المبيعات المعلقة\",\"revenue\":\"الإيرادات\",\"recentActivity\":\"النشاط الأخير\",\"marketInsights\":\"رؤى السوق\",\"performance\":\"نظرة عامة على الأداء\",\"quickActions\":\"إجراءات سريعة\",\"greeting\":\"مرحباً\",\"morning\":\"صباح الخير\",\"afternoon\":\"طاب مساؤك\",\"evening\":\"مساء الخير\",\"statusOptimum\":\"الحالة التشغيلية: مثالية\",\"incorporateAsset\":\"إضافة أصل\",\"institutionalIntelligence\":\"الاستخبارات المؤسسية\",\"neuralLinkActive\":\"الارتباط العصبي نشط\",\"marketIntelligence\":\"استخبارات السوق\",\"operationalVelocity\":\"السرعة التشغيلية\",\"globalRegistry\":\"السجل العالمي\",\"securityNodeStatus\":\"حالة عقدة الأمان\",\"neuralCore\":\"النواة العصبية\",\"optimal\":\"مثالي\",\"syncGateway\":\"بوابة المزامنة\",\"stable\":\"مستقر\",\"dataPersistence\":\"استمرارية البيانات\",\"precisionMotto\":\"الدقة هي مهندس التميز.\",\"upcomingMilestone\":\"المرحلة القادمة\",\"quarterlyReview\":\"المراجعة الربع سنوية\",\"portfolioAssets\":\"أصول المحفظة\",\"liveInventory\":\"المخزون المباشر\",\"activeStakeholders\":\"أصحاب المصلحة النشطون\",\"priority\":\"أولوية\",\"capitalTransacted\":\"رأس المال المتداول\",\"executivePartners\":\"الشركاء التنفيذيون\",\"secured\":\"مؤمن\",\"executiveProtocols\":\"البروتوكولات التنفيذية\",\"inventoryIngestion\":\"إدخال المحفظة\",\"stakeholderProtocol\":\"بروتوكول المستثمرين الاستراتيجيين\",\"lifecycleVelocity\":\"سرعة دورة الحياة\",\"strategicIntel\":\"التقارير الاستراتيجية\"},\"listings\":{\"title\":\"أصول المحفظة\",\"addListing\":\"إضافة أصل للمحفظة\",\"editListing\":\"تعديل الأصل\",\"viewListing\":\"عرض تفاصيل الأصل\",\"shareListing\":\"مشاركة الأصل\",\"deleteListing\":\"حذف الأصل من المحفظة\",\"propertyType\":\"نوع العقار\",\"location\":\"الموقع\",\"price\":\"السعر\",\"area\":\"المساحة (متر مربع)\",\"bedrooms\":\"غرف النوم\",\"bathrooms\":\"الحمامات\",\"developer\":\"المطور\",\"project\":\"المشروع\",\"status\":\"الحالة\",\"available\":\"متاح\",\"reserved\":\"محجوز\",\"sold\":\"مباع\",\"gridView\":\"عرض شبكي\",\"tableView\":\"عرض جدولي\",\"syncFromPF\":\"مزامنة الأصول الذكية\"},\"activity\":{\"title\":\"السرعة التشغيلية\",\"liveFeed\":\"البث المباشر\",\"noSignals\":\"لم يتم اكتشاف إشارات عمليات في النافذة الحالية.\",\"justNow\":\"الآن\",\"minutesAgo\":\"د\",\"hoursAgo\":\"س\"},\"flow\":{\"title\":\"لوحة تدفق المستثمرين\",\"subtitle\":\"الذكاء يصنف | نحن ننصح | أنت تقرر\",\"newProspect\":\"مستثمر استراتيجي جديد\",\"addLead\":\"إضافة مستثمر استراتيجي\",\"callProspect\":\"تواصل مع المستثمر الآن\",\"saveProspect\":\"حفظ بيانات المستثمر\",\"engine\":\"محرك التدفق\",\"stats\":\"إحصائيات التدفق\",\"noProspects\":\"لا يوجد مستثمرون استراتيجيون في قائمة التدفق حالياً.\",\"listTitle\":\"خط إمداد المستثمرين الاستراتيجيين\",\"strategicPersonnel\":\"المستشارون النشطون\",\"advisingNow\":\"عملاء تحت الاستشارة\",\"scripts\":{\"intake\":{\"title\":\"الافتتاحية وكسر الجليد\",\"text\":\"مساء الخير يا {name}! معاك سييرا بلو العقارية.. بكلمك بخصوص طلب الإيجار في التجمع. إحنا نظامنا مختلف شوية، الـ AI بتاعنا بيعمل مسح للسوق لحظياً عشان نلاقي طلبك بأسرع وقت ومن غير ما نضيع وقت حضرتك في معاينات لصور مش حقيقية..\",\"tasks\":[\"التأكد من الاسم الصحيح\",\"توضيح ميزة الـ AI\",\"تحديد وقت المكالمة القادم\"]},\"ai-discovery\":{\"title\":\"مرحلة الاكتشاف (AI Mapping)\",\"text\":\"عشان السيستم يطلع لنا أدق نتائج، محتاج أعرف حضرتك بتفضل شقة ولا فيلا؟ والفرش محتاجه كامل ولا مجرد أجهزة وتكييفات؟ وهل في كمبوند معين في دماغك ولا المهم اللوكيشن؟\",\"tasks\":[\"نوع الوحدة\",\"مستوى الفرش\",\"الموقع المفضل\",\"تاريخ الانتقال\"]},\"advisory\":{\"title\":\"مرحلة النصيحة (Professional Advisory)\",\"text\":\"أنا راجعت بنفسي الـ 3 ترشيحات اللي السيستم اختارهم النهاردة، وفعلاً دول أفضل سعر وموقع متاحين حالياً. أنا بنصحك بالوحدة الأولى لو بتدور على الهدوء، أو التانية لو يهمك القرب من الخدمات.. تحب نعاين بكرة؟\",\"tasks\":[\"مراجعة الترشيحات يدوياً\",\"تقديم نصيحة مبنية على الخبرة\",\"تحديد موعد معاينة\"]},\"presentation\":{\"title\":\"العرض والقرار النهائي\",\"text\":\"زي ما حضرتك شفت في المعاينة، الوحدة دي لقطة وسعرها ميتعوضش بالنسبة مميزاتها. إيه رأيك نخلص إجراءات التعاقد النهاردة عشان نضمن إنها متتخطفش من السوق؟\",\"tasks\":[\"الإجابة على الاعتراضات\",\"شرح بنود العقد\",\"اتخاذ القرار\"]},\"closed\":{\"title\":\"إتمام الصفقة\",\"text\":\"مبروك على الوحدة الجديدة! إحنا في سييرا بلو موجودين دايماً لو احتجت أي حاجة خلال فترة الإيجار.\",\"tasks\":[\"توقيع العقد\",\"تحصيل العمولة\",\"طلب تقييم الخدمة\"]}},\"stages\":{\"intake\":\"استيعاب أصحاب المصلحة\",\"ai-discovery\":\"الاكتشاف العصبي\",\"advisory\":\"الاستشارة التنفيذية\",\"presentation\":\"عرض الأصول\",\"closed\":\"تمت التسوية النهائية\"},\"callsTarget\":\"المكالمات الاستراتيجية\",\"messagesTarget\":\"رسائل الارتباط (Nexus)\"},\"pipeline\":{\"title\":\"ذكاء القيادة: خط الأنابيب الاستراتيجي\",\"subtitle\":\"تحليل {visible} من أصل {total} من أصحاب المصلحة الاستثماريين النشطين ضمن دورة التحويل\",\"syncPF\":\"مزامنة بروبرتي فايندر\",\"neuralMatch\":\"تطابق عصبي\",\"onboardProspect\":\"إلحاق عميل محتمل\",\"syncing\":\"جاري المزامنة...\",\"matching\":\"جاري التطابق...\",\"searchPlaceholder\":\"بحث بالاسم، الهاتف، المستشار، القناة، أو الاهتمام\",\"filters\":{\"priority\":\"تفاعل ذو أولوية\",\"allPriority\":\"جميع الأولويات\",\"hot\":\"الساخنة فقط\",\"warm\":\"الدافئة فقط\",\"cold\":\"الباردة فقط\",\"allChannels\":\"جميع القنوات\",\"allAdvisors\":\"جميع المستشارين\"},\"metrics\":{\"visible\":\"خط الأنابيب المرئي\",\"visibleSub\":\"عرض تشغيلي مصفى\",\"hot\":\"عملاء محتملون ساخنون\",\"hotSub\":\"أولوية متابعة فورية\",\"closeReady\":\"جاهز للإغلاق\",\"closeReadySub\":\"الهيكلة + التسوية\",\"value\":\"قيمة خط الأنابيب\",\"valueSub\":\"حجم الصفقة المقدر (جنيه)\"},\"phases\":{\"acquisition\":{\"title\":\"الاستحواذ الاستراتيجي\",\"description\":\"دخول السوق بنية عالية واستفسارات المحفظة الواردة\"},\"consultation\":{\"title\":\"الاستشارة التنفيذية\",\"description\":\"الاكتشاف الأولي وتركيب التفضيلات المعمارية\"},\"inspection\":{\"title\":\"معاينة الأصول\",\"description\":\"معاينات خاصة وتجربة الملكية المادية\"},\"structuring\":{\"title\":\"هيكلة الصفقات\",\"description\":\"التسوية المالية والبنية التعاقدية\"},\"settlement\":{\"title\":\"تسوية المحفظة\",\"description\":\"انتقال الأصول الناجح ورسمية العلاقة\"}},\"card\":{\"portfolioFocus\":\"تركيز المحفظة\",\"investmentCapacity\":\"القدرة الاستثمارية\",\"neuralMatches\":\"تطابقات عصبية\",\"advisor\":\"مستشار\",\"vipReward\":\"مكافأة مشاهدة VIP نشطة\",\"ingestion\":\"وقت الإدخال\",\"activeIntel\":\"معلومات تشغيلية نشطة\",\"proposePackage\":\"اقتراح حزمة\",\"structuring\":\"جاري الهيكلة...\",\"advance\":\"تقدم\",\"empty\":\"محجوز لتكليفات الأصول المستقبلية\",\"noMatches\":\"لا يوجد أصحاب مصلحة يطابقون الفلاتر النشطة\"},\"modal\":{\"title\":\"مواصفات العميل المحتمل\",\"subtitle\":\"تهيئة علاقة استراتيجية جديدة ضمن منظومة المحفظة\",\"identity\":\"هوية العميل المحتمل\",\"namePlaceholder\":\"الاسم القانوني الكامل\",\"contact\":\"اتصال مباشر (دولي)\",\"contactPlaceholder\":\"+20 1XX XXX XXXX\",\"interest\":\"ملف الاهتمام بالمخزون\",\"interestPlaceholder\":\"مثل: قصر على الواجهة البحرية\",\"capital\":\"تخصيص رأس المال (جنيه)\",\"capitalPlaceholder\":\"مثل: 25 مليون - 40 مليون\",\"velocity\":\"سرعة المشاركة\",\"intent\":{\"hot\":\"نية حرجة / ساخن\",\"warm\":\"استباقي / دافئ\",\"cold\":\"مراقب / بارد\"}},\"loader\":\"جاري مزامنة خط أنابيب الفرص...\"},\"crm\":{\"title\":\"خط الإمداد الاستراتيجي\",\"newLead\":\"مستثمر استراتيجي جديد\",\"stages\":{\"lead\":\"مستثمر استراتيجي\",\"contact\":\"تم التواصل\",\"qualify\":\"مؤهل\",\"present\":\"عرض تقديمي\",\"visit\":\"زيارة الموقع\",\"negotiate\":\"تفاوض\",\"reserve\":\"محجوز\",\"contract\":\"التعاقد\",\"handover\":\"التسليم\",\"closedWon\":\"تم البيع\"},\"leadName\":\"اسم المستثمر الاستراتيجي\",\"phone\":\"رقم الهاتف\",\"budget\":\"الميزانية\",\"source\":\"مصدر الاستحواذ\",\"assignedTo\":\"مُسند إلى\",\"notes\":\"ملاحظات\",\"lastActivity\":\"آخر نشاط\",\"moveToStage\":\"نقل إلى مرحلة\"},\"financial\":{\"pricePerSqm\":\"السعر/متر مربع\",\"grossYield\":\"العائد الإجمالي\",\"netYield\":\"العائد الصافي\",\"roi\":\"العائد على الاستثمار\",\"capitalAppreciation\":\"ارتفاع رأس المال\",\"monthlyIncome\":\"الدخل الشهري الصافي\",\"annualIncome\":\"الدخل السنوي الصافي\",\"paybackPeriod\":\"فترة الاسترداد\",\"years\":\"سنوات\"},\"sync\":{\"title\":\"معالج المزامنة\",\"runSync\":\"مزامنة الآن\",\"lastSync\":\"آخر مزامنة\",\"pendingReview\":\"بانتظار المراجعة\",\"matched\":\"تطابق تلقائي\",\"created\":\"تم إنشاؤه\",\"skipped\":\"تم تخطيه\",\"conflicts\":\"تعارضات\",\"dedupeQueue\":\"قائمة مراجعة التكرارات\",\"resolve\":\"حلّ\",\"approve\":\"الموافقة على التطابق\",\"reject\":\"إنشاء كعقار جديد\",\"skip\":\"تخطي\",\"editorialProtected\":\"تم تعديله يدوياً — لن تُحدّث المزامنة هذا الحقل\"},\"landing\":{\"brand\":\"سييرا بلو\",\"sub\":\"للعقارات\",\"tagline\":\"استشارات عقارية مدعومة بالذكاء الاستراتيجي\",\"heroH1\":[\"قرارات\",\"أرقى.\"],\"heroItalic\":\"مدعومة بالذكاء.\",\"heroDesc\":\"عقارات استثنائية، مطابقة بدقة. نوجه المستثمرين نحو أفخر العناوين في مصر — منتقاة بخبرة، محسنة بالذكاء الاصطناعي.\",\"heroTag\":\"أبعد من الوساطة\",\"heroSub\":\"دقة. عقار. غاية.\",\"btnDiscover\":\"اكتشف العقارات\",\"btnView\":\"تعرف على سييرا\",\"featuredTitle\":\"عقارات مميزة\",\"ctaButton\":\"استكشف العقارات\",\"contactUs\":\"تواصل معنا\",\"about\":\"عن سييرا بلو\",\"aboutText\":\"سييرا بلو العقارية هي بوابتك إلى العقارات الفاخرة في مصر. نحن نختار أفضل العقارات في القاهرة والساحل الشمالي والعين السخنة.\",\"privacyPolicy\":\"سياسة الخصوصية\",\"termsOfService\":\"شروط الخدمة\"},\"team\":{\"title\":\"المستشارون والشركاء التنفيذيون\",\"subtitle\":\"الإدارة المباشرة لمعايير أداء المستشارين، الأهداف الاستراتيجية، ورؤية العمولات\",\"enlistPartner\":\"تسجيل شريك\",\"strategicPersonnel\":\"الكوادر الاستراتيجية\",\"yieldBenchmarking\":\"معيار العائد\",\"objectiveFulfillment\":\"تحقيق الأهداف\",\"avgPayout\":\"متوسط الدفع\",\"terminatePartnership\":\"إنهاء الشراكة\",\"enlistExecutive\":\"تسجيل تنفيذي\",\"authorizeCredentials\":\"اعتماد المؤهلات المهنية\",\"enlistmentModalTitle\":\"تسجيل تنفيذي جديد\",\"enlistmentModalSub\":\"ضم شريك استراتيجي إلى منظومة سييرا بلو\",\"legalName\":\"الاسم القانوني\",\"strategicRole\":\"الدور الاستراتيجي\",\"colorTheme\":\"نمط اللون\",\"baselineDeals\":\"الصفقات الأساسية\",\"aggregateGci\":\"إجمالي العمولات (جنيه)\",\"terminateEntry\":\"إلغاء الإدخال\",\"authorizePartnership\":\"اعتماد الشراكة\",\"ledgerTitle\":\"سجل العمولات\",\"ledgerSub\":\"مركز القيادة التنفيذي لجداول الدفع، تسوية المعاملات، والتوقعات المالية الاستراتيجية.\",\"accessLedger\":\"الدخول إلى سجل التسوية\",\"adminOnly\":\"خاص بالمديرين فقط\"},\"easyListing\":{\"title\":\"إدخال البيانات الذكي\",\"subtitle\":\"أدخل وصف العقار كما هو (مثل: شقة في ميفيدا 3 غرف مفروش بـ 75 ألف)...\",\"placeholder\":\"اكتب تفاصيل العقار هنا...\",\"imageLabel\":\"صورة العقار الرئيسية\",\"btnProcess\":\"استخراج البيانات وتوليد الكود\",\"outputTitle\":\"البيانات المهيكلة (Easy Listing)\",\"internalCode\":\"الكود الداخلي الذكي\",\"compound\":\"الكمبوند / المنطقة\",\"price\":\"السعر المستخرج\",\"statusPassed\":\"تم الفحص (DQE Passed) - لا يوجد تكرار\",\"previewLabel\":\"معاينة إعلان Sierra Blu\",\"btnDownload\":\"تحميل صورة الإعلان\",\"waiting\":\"في انتظار إدخال البيانات...\",\"unknown\":\"غير محدد\",\"undetermined\":\"يحدد لاحقاً\",\"motto\":\"ما وراء الوساطة | العقارات المدفوعة بالذكاء الاصطناعي\",\"btnGenerateSave\":\"توليد وحفظ\",\"btnExportExcel\":\"تصدير إلى إكسل\",\"dashboard\":{\"title\":\"لوحة بيانات المخزون\",\"activeUnits\":\"إجمالي أصول المحفظة النشطة\",\"topViewed\":\"أعلى 10 وحدات مشاهدة\",\"byCompound\":\"الوحدات حسب الكمبوند\",\"highestSearch\":\"الأكثر بحثاً في القاهرة الجديدة\",\"recommendations\":\"بناءً على بحثك الأخير، قد يعجبك:\"},\"form\":{\"phone\":\"رقم الهاتف\",\"bedrooms\":\"عدد الغرف\",\"price\":\"سعر العقار\",\"currency\":\"العملة\",\"furnished\":\"حالة الفرش\",\"uploadImages\":\"رفع الصور\"},\"validation\":{\"errorCompound\":\"الكمبوند غير موجود في القاموس\",\"errorBeds\":\"يجب إدخال عدد الغرف\",\"errorPrice\":\"يجب إدخال السعر\",\"errorFurnished\":\"يجب إدخال حالة الفرش\",\"errorPhone\":\"يجب إدخال رقم الهاتف\"},\"content\":{\"whatsapp\":\"قالب منشور واتساب\",\"facebook\":\"قالب منشور فيسبوك\",\"copy\":\"نسخ المحتوى\"},\"stages\":{\"acquisition\":\"المرحلة 1: جمع البيانات\",\"parsing\":\"المرحلة 2: معالجة الذكاء الاصطناعي\",\"branding\":\"المرحلة 3: الهوية المؤسسية\",\"distribution\":\"المرحلة 4: محرك النشر\",\"intelligence\":\"المرحلة 5: ذكاء العملاء\",\"matching\":\"المرحلة 6: مطابقة الذكاء الاصطناعي\",\"sales\":\"المرحلة 7: منطق المبيعات\",\"viewing\":\"المرحلة 8: محرك المعاينات\",\"closing\":\"المرحلة 9: بروتوكول التعاقد\",\"feedback\":\"المرحلة 10: حلقة التطوير\"}},\"spatial\":{\"title\":\"شبكة التوزيع المكاني\",\"subtitle\":\"التوزيع الجغرافي اللحظي للوحدات المتاحة (ريسيل / إيجار) في القاهرة الجديدة.\",\"viewDetails\":\"عرض تفاصيل الأصل\",\"startTour\":\"بدأ الجولة الافتراضية 360°\",\"noCoords\":\"بيانات الموقع في انتظار المعايرة\",\"filters\":{\"all\":\"كل الوحدات\",\"resale\":\"ريسيل فقط\",\"rent\":\"إيجار فقط\"}},\"tour\":{\"loading\":\"جاري معايرة الرؤية العصبية...\",\"fullscreen\":\"الوضع الغامر\",\"exit\":\"خروج من الجولة\",\"controls\":\"أدوات التحكم\"},\"os\":{\"version\":\"نظام سييرا بلو V4.0\",\"status\":\"المحرك العصبي متزامن\",\"orchestration\":\"سجل التنسيق التشغيلي\",\"analyzer\":\"معيد بناء إشارات السوق\"},\"admin\":{\"dashboard\":\"قيادة الاستخبارات\",\"team\":\"خط الإمداد الاستراتيجي للفريق\",\"listings\":\"محفظة الأصول\",\"database\":\"مستكشف البيانات\",\"nexus\":\"مركز التكامل\",\"intelligence\":\"ذكاء السوق\",\"media\":\"مركز الوسائط\",\"greeting\":\"مرحباً بكم في مركز قيادة سييرا بلو. الرقابة الكاملة على النظام والذكاء التكتيكي بين يديك.\",\"systemStatus\":\"حالة النظام\",\"operational\":\"جميع الأنظمة تعمل بشكل طبيعي\",\"deployPatch\":\"نشر التحديث\",\"deploying\":\"جاري النشر\",\"pipelineActive\":\"أنبوب النشر نشط\",\"backendOrchestration\":\"تنسيق العمليات الخلفية\",\"syncHealth\":\"حالة المزامنة والمعالجة اللحظية عبر جميع النقاط.\",\"securityProtocol\":\"بروتوكول الأمان\",\"securityNote\":\"جلستك الإدارية محمية بتشفير 256 بت. جميع الإجراءات تُسجل في سجل تدقيق سييرا غير القابل للتعديل.\",\"networkLatency\":\"تأخير الشبكة\",\"firestoreSync\":\"تزامن فايرستور\",\"viewLogs\":\"عرض سجلات الأمان\",\"auditTrail\":\"سجل التدقيق الأمني\",\"auditNote\":\"سجل غير قابل للتعديل للإجراءات الإدارية.\",\"initializing\":\"جاري تهيئة الذكاء...\",\"noAdvisors\":\"لم يتم العثور على مستشارين\",\"addAdvisor\":\"إضافة مستشار\",\"humanCapital\":\"رأس المال البشري\",\"crmDescription\":\"رقابة متقدمة على أداء المستشارين والتدفق التنظيمي.\",\"performance\":\"الأداء\",\"portfolio\":\"المحفظة\",\"connect\":\"اتصال\",\"intelligenceTab\":\"ذكاء\",\"searchAdvisors\":\"بحث عن الأعضاء...\",\"status\":\"الحالة\",\"active\":\"نشط\",\"inactive\":\"غير نشط\",\"securityAudit\":\"سجل التدقيق الأمني\",\"login\":{\"title\":\"قيادة الاستخبارات\",\"subtitle\":\"الرقابة الإدارية لسييرا بلو\",\"identifier\":\"معرف المسؤول\",\"securityKey\":\"مفتاح الأمان\",\"initialize\":\"بدأ التجاوز\",\"identifierPlaceholder\":\"admin.access@sierrablurealty.com\",\"keyPlaceholder\":\"••••••••••••\",\"encrypted\":\"نفق مشفر نشط\",\"mfa\":\"تم التحقق من MFA للأجهزة\",\"error\":{\"denied\":\"تم رفض الوصول: أوراق اعتماد إدارية مطلوبة.\",\"unauthorized\":\"غير مصرح به: لم يتم العثور على ملف تعريف إداري.\",\"invalid\":\"بيانات اعتماد إدارية غير صالحة.\",\"locked\":\"محاولات فاشلة كثيرة جداً. تم قفل الوصول مؤقتاً.\",\"failure\":\"فشل مصادقة النظام. اتصل بدعم البنية التحتية.\"}}},\"clients\":{\"title\":\"محفظة المستثمرين العالمية\",\"subtitle\":\"سجل شامل لجميع التوقعات النشطة، التفاعلات التاريخية، وتخصيصات الأصول\",\"searchPlaceholder\":\"ابحث بالاسم، الهاتف، أو المشروع المفضل...\",\"exportLedger\":\"تصدير السجل\",\"phases\":{\"all\":\"جميع المراحل\",\"acquisition\":\"الاستحواذ\",\"consultation\":\"الاستشارة\",\"inspection\":\"المعاينة\",\"structuring\":\"هيكلة الصفقة\",\"settlement\":\"تمت التسوية\"},\"table\":{\"identity\":\"هوية صاحب المصلحة\",\"capital\":\"تخصيص رأس المال\",\"focus\":\"تركيز المحفظة\",\"advisor\":\"المستشار المسؤول\",\"phase\":\"المرحلة التشغيلية\",\"date\":\"تاريخ الإدخال\",\"unassigned\":\"غير معين\",\"historical\":\"تاريخي\",\"noResults\":\"لم يتم العثور على أصحاب مصلحة يطابقون معايير البحث الخاصة بك في السجل.\"}}}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-sierra-project/lib/I18nContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$messages$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/messages/en.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$messages$2f$ar$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-sierra-project/messages/ar.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const messages = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$messages$2f$en$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    ar: __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$messages$2f$ar$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const LOCALE_STORAGE_KEY = 'sb_locale';
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function I18nProvider({ children }) {
    _s();
    // Persist locale to localStorage so language survives page refresh
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "I18nProvider.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
                if (saved === 'ar' || saved === 'en') return saved;
            }
            return 'en';
        }
    }["I18nProvider.useState"]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[setLocale]": (next)=>{
            setLocaleState(next);
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem(LOCALE_STORAGE_KEY, next);
                document.documentElement.lang = next;
                document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
            }
        }
    }["I18nProvider.useCallback[setLocale]"], []);
    // Apply dir/lang on mount (covers page reload)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            if (typeof document !== 'undefined') {
                document.documentElement.lang = locale;
                document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
            }
        }
    }["I18nProvider.useEffect"], [
        locale
    ]);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "I18nProvider.useCallback[t]": (nsOrCombined, maybeKey)=>{
            let namespace;
            let key;
            if (maybeKey) {
                namespace = nsOrCombined;
                key = maybeKey;
            } else {
                const dotIndex = nsOrCombined.indexOf('.');
                if (dotIndex === -1) return nsOrCombined;
                namespace = nsOrCombined.substring(0, dotIndex);
                key = nsOrCombined.substring(dotIndex + 1);
            }
            const ns = messages[locale]?.[namespace];
            if (!ns) return key;
            const parts = key.split('.');
            let result = ns;
            for (const part of parts){
                if (result && typeof result === 'object' && part in result) {
                    result = result[part];
                } else {
                    return key;
                }
            }
            return typeof result === 'string' ? result : key;
        }
    }["I18nProvider.useCallback[t]"], [
        locale
    ]);
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "I18nProvider.useMemo[value]": ()=>({
                locale,
                setLocale,
                t,
                dir
            })
    }["I18nProvider.useMemo[value]"], [
        locale,
        setLocale,
        t,
        dir
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/my-sierra-project/lib/I18nContext.tsx",
        lineNumber: 90,
        columnNumber: 10
    }, this);
}
_s(I18nProvider, "ZLkIivJ5e4cMAGdmCOUThJanmxY=");
_c = I18nProvider;
function useI18n() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$sierra$2d$project$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (!ctx) throw new Error('useI18n must be used within I18nProvider');
    return ctx;
}
_s1(useI18n, "/dMy7t63NXD4eYACoT93CePwGrg=");
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-sierra-project_11b-_fi._.js.map