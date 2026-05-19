module.exports = [
"[project]/my-sierra-project/lib/firebase.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/my-sierra-project/lib/firebase.ts [app-ssr] (ecmascript)");
    });
});
}),
"[project]/my-sierra-project/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/10sd_09n50i_._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/my-sierra-project/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript)");
    });
});
}),
];