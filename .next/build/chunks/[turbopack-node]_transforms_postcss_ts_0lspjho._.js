module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-sierra-project/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/10sd_05d5xv.._.js",
  "chunks/[root-of-the-server]__0wgfvy~._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-sierra-project/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];