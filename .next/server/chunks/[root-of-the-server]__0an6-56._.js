module.exports=[45577,(e,t,a)=>{class r{constructor(...e){}set(){}get(){return null}remove(){}getMap(){return{}}clone(){return new r}start(){}shutdown(){return Promise.resolve()}register(){}addSpanProcessor(){}getTracer(){return{startSpan:()=>({end:()=>{},setAttribute:()=>{},setStatus:()=>{}})}}}t.exports={Metadata:r,OTLPTraceExporter:r,NodeSDK:r,BatchSpanProcessor:r,SimpleSpanProcessor:r,Resource:r,resourceFromAttributes:()=>({}),trace:{getTracer:()=>r.prototype.getTracer(),getActiveSpan:()=>null},SEMRESATTRS_PROJECT_NAME:"service.name",default:{}}},18622,(e,t,a)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,a)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},93695,(e,t,a)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},96002,e=>{"use strict";var t=e.i(45577);let a=e=>new Proxy({},{get(t,a){if("then"!==a)return(...t)=>{console.warn(`⚠️ [firebase-admin] ${e}.${String(a)} called but not initialized.`);let r={get:()=>Promise.resolve({size:0,empty:!0,forEach:()=>{},exists:!1,data:()=>({})}),set:()=>Promise.resolve(),update:()=>Promise.resolve(),add:()=>Promise.resolve({id:"mock-id"}),limit:()=>r,orderBy:()=>r,where:()=>r,doc:()=>r,collection:()=>r};return r}}}),r=a("App"),i=a("Auth"),s=a("Firestore"),n=a("AppCheck"),o=!1;try{if(!t.apps.length){let e=process.env.FIREBASE_SERVICE_ACCOUNT_JSON,a=process.env.FIREBASE_PROJECT_ID||"sierra-blu",r=process.env.FIREBASE_CLIENT_EMAIL,i=process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g,"\n");e?(console.log("🔐 [Firebase] Initializing with service account JSON"),t.initializeApp({credential:t.credential.cert(JSON.parse(e)),projectId:a,storageBucket:"sierra-blu.firebasestorage.app"})):a&&r&&i?(console.log("🔐 [Firebase] Initializing with individual env variables"),t.initializeApp({credential:t.credential.cert({projectId:a,clientEmail:r,privateKey:i}),projectId:a,storageBucket:"sierra-blu.firebasestorage.app"})):(console.log("🔐 [Firebase] Attempting Application Default Credentials"),t.initializeApp({credential:t.credential.applicationDefault(),projectId:a||"sierra-blu",storageBucket:"sierra-blu.firebasestorage.app"}))}r=t.app(),i=t.auth(),s=t.firestore(),n=t.appCheck(),o=!0}catch(e){console.warn("[firebase-admin] Initialization failed — Admin features limited.\nReason:",e instanceof Error?e.message:"Unknown error")}e.s(["adminApp",0,r,"adminAppCheck",0,n,"adminAuth",0,i,"adminDb",0,s,"isAdminInitialized",0,o])},35571,e=>{"use strict";var t=e.i(72760),a=e.i(78019),r=e.i(2949),i=e.i(53753),s=e.i(8817),n=e.i(67626),o=e.i(6600),l=e.i(87834),d=e.i(2353),c=e.i(45019),p=e.i(44422),u=e.i(4921),h=e.i(22282),b=e.i(91168),g=e.i(69656),m=e.i(93695);e.i(86484);var v=e.i(77373),w=e.i(85817),f=e.i(96002);async function E(t){try{let{message:a}=await t.json();if(!a||!a.text)return w.NextResponse.json({ok:!0});let r=a.chat.id,i=a.text.toLowerCase(),s=process.env.TELEGRAM_BOT_TOKEN,n=async e=>{try{await fetch(`https://api.telegram.org/bot${s}/sendMessage`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:r,text:e,parse_mode:"HTML"})})}catch(e){console.error("Failed to send Telegram message:",e)}},o=!f.isAdminInitialized;if(o&&"/diag"===i||o&&("/stats"===i||"/leads"===i||"/listings"===i)&&await n("💡 <b>System Notice:</b> Operating in <b>MOCK MODE</b> (Firebase Admin not initialized). Showing high-fidelity demonstration data."),"/start"===i)await n(`
<b>Welcome to Sierra Blu Realty Bot</b>

Your Chat ID is: <code>${r}</code>
Please add this to your <code>.env.local</code> as <code>TELEGRAM_CHAT_ID</code> to enable operational notifications.

Commands:
/stats - View executive performance
/leads - View latest 5 leads
/listings - View market inventory
/diag - System diagnostics
/ag [order] - Give orders to Antigravity Intelligence
      `);else if("/diag"===i)await n(`
<b>🛠 SYSTEM DIAGNOSTICS</b>
<b>Firebase Ready:</b> ${f.isAdminInitialized?"✅":"❌"}
<b>Bot Token:</b> ${s?"✅":"❌"}
<b>Collection Units:</b> <code>listings</code>
<b>Collection Leads:</b> <code>leads</code>
<b>Timestamp:</b> ${new Date().toISOString()}
      `);else if("/stats"===i){if(o)return await n(`
<b>📊 Sierra Blu - Portfolio Stats (MOCK)</b>
<b>Total Inventory:</b> 124 units
<b>Total Leads:</b> 89 profiles
<b>Operational Status:</b> OPTIMUM
        `),w.NextResponse.json({ok:!0});try{let e=(await f.adminDb.collection("listings").limit(100).get()).size,t=(await f.adminDb.collection("leads").get()).size;await n(`
<b>📊 Sierra Blu - Portfolio Stats</b>
<b>Total Inventory:</b> ${e} units
<b>Total Leads:</b> ${t} profiles
<b>Operational Status:</b> OPTIMUM
        `)}catch(e){await n(`❌ <b>Database Error:</b> ${e.message}`)}}else if("/leads"===i){if(o)return await n(`
<b>Latest 5 Leads (MOCK):</b>

👤 Ahmed Mansour (+20 102 334 5567)
📅 4/28/2026
---
👤 Sarah Jenkins (+44 778 990 1234)
📅 4/27/2026
---
👤 Khalid Al-Sayed (+971 50 123 4567)
📅 4/27/2026
---
👤 Maria Garcia (+1 415 555 0199)
📅 4/26/2026
---
👤 John Doe (+20 111 222 3333)
📅 4/25/2026
---
        `),w.NextResponse.json({ok:!0});try{let e=await f.adminDb.collection("leads").orderBy("createdAt","desc").limit(5).get();if(e.empty)return await n("<b>PIPELINE STATUS</b>\n\nNo recent leads found."),w.NextResponse.json({ok:!0});let t="<b>Latest 5 Leads:</b>\n\n";e.forEach(e=>{let a=e.data(),r=a.createdAt?.toDate?a.createdAt.toDate().toLocaleDateString():"N/A";t+=`👤 ${a.name||"Unknown"} (${a.phone||"No Phone"})
📅 ${r}
---
`}),await n(t)}catch(e){await n(`❌ <b>Database Error:</b> ${e.message}`)}}else if("/listings"===i){if(o)return await n(`
<b>Latest 5 Listings (MOCK):</b>

🏢 <b>Marassi Marina Penthouse</b> - EGP 45,000,000
📍 North Coast, Egypt
---
🏢 <b>Burj Khalifa Sky Villa</b> - AED 12,500,000
📍 Downtown Dubai
---
🏢 <b>New Giza Modern Mansion</b> - EGP 28,000,000
📍 6th of October City
---
🏢 <b>ZED Towers Apartment</b> - EGP 8,500,000
📍 Sheikh Zayed
---
🏢 <b>Palm Hills Extension Villa</b> - EGP 15,000,000
📍 October City
---
        `),w.NextResponse.json({ok:!0});try{let e=await f.adminDb.collection("listings").orderBy("createdAt","desc").limit(5).get();if(e.empty)return await n("<b>INVENTORY STATUS</b>\n\nNo listings found."),w.NextResponse.json({ok:!0});let t="<b>Latest 5 Listings:</b>\n\n";e.forEach(e=>{let a=e.data();t+=`🏢 ${a.title||"Untitled"} - EGP ${a.price||0}
📍 ${a.location||"Unknown"}
---
`}),await n(t)}catch(e){await n(`❌ <b>Database Error:</b> ${e.message}`)}}else if(i.startsWith("/ag")||i.includes("antigravity")){let t=i.replace("/ag","").trim();await fetch(`https://api.telegram.org/bot${s}/sendChatAction`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:r,action:"typing"})});let{processAgentCommand:a}=await e.A(58635),o=await a(r,t||"Hello! I am Antigravity. How can I assist your operations today?");await n(o.message)}return w.NextResponse.json({ok:!0})}catch(e){return console.error("Telegram webhook error:",e),w.NextResponse.json({ok:!0,error:e.message})}}e.s(["POST",0,E],49124);var R=e.i(49124);let y=new t.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/telegram/webhook/route",pathname:"/api/telegram/webhook",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/my-sierra-project/app/api/telegram/webhook/route.ts",nextConfigOutput:"",userland:R,...{}}),{workAsyncStorage:x,workUnitAsyncStorage:A,serverHooks:S}=y;async function _(e,t,r){r.requestMeta&&(0,i.setRequestMeta)(e,r.requestMeta),y.isDev&&(0,i.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let w="/api/telegram/webhook/route";w=w.replace(/\/index$/,"")||"/";let f=await y.prepare(e,t,{srcPage:w,multiZoneDraftMode:!1});if(!f)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:E,params:R,nextConfig:x,parsedUrl:A,isDraftMode:S,prerenderManifest:_,routerServerContext:T,isOnDemandRevalidate:C,revalidateOnlyGenerated:k,resolvedPathname:P,clientReferenceManifest:N,serverActionsManifest:O}=f,I=(0,o.normalizeAppPath)(w),j=!!(_.dynamicRoutes[I]||_.routes[P]),M=async()=>((null==T?void 0:T.render404)?await T.render404(e,t,A,!1):t.end("This page could not be found"),null);if(j&&!S){let e=!!_.routes[P],t=_.dynamicRoutes[I];if(t&&!1===t.fallback&&!e){if(x.adapterPath)return await M();throw new m.NoFallbackError}}let D=null;!j||y.isDev||S||(D="/index"===(D=P)?"/":D);let $=!0===y.isDev||!j,U=j&&!$;O&&N&&(0,n.setManifestsSingleton)({page:w,clientReferenceManifest:N,serverActionsManifest:O});let L=e.method||"GET",q=(0,s.getTracer)(),B=q.getActiveScopeSpan(),H=!!(null==T?void 0:T.isWrappedByNextServer),F=!!(0,i.getRequestMeta)(e,"minimalMode"),z=(0,i.getRequestMeta)(e,"incrementalCache")||await y.getIncrementalCache(e,x,_,F);null==z||z.resetRequestCache(),globalThis.__incrementalCache=z;let K={params:R,previewProps:_.preview,renderOpts:{experimental:{authInterrupts:!!x.experimental.authInterrupts},cacheComponents:!!x.cacheComponents,supportsDynamicResponse:$,incrementalCache:z,cacheLifeProfiles:x.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,a,r,i)=>y.onRequestError(e,t,r,i,T)},sharedContext:{buildId:E}},G=new l.NodeNextRequest(e),V=new l.NodeNextResponse(t),J=d.NextRequestAdapter.fromNodeNextRequest(G,(0,d.signalFromNodeResponse)(t));try{let i,n=async e=>y.handle(J,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let a=q.getRootSpanAttributes();if(!a)return;if(a.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${a.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=a.get("next.route");if(r){let t=`${L} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t),i&&i!==e&&(i.setAttribute("http.route",r),i.updateName(t))}else e.updateName(`${L} ${w}`)}),o=async i=>{var s,o;let l=async({previousCacheEntry:a})=>{try{if(!F&&C&&k&&!a)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await n(i);e.fetchMetrics=K.renderOpts.fetchMetrics;let o=K.renderOpts.pendingWaitUntil;o&&r.waitUntil&&(r.waitUntil(o),o=void 0);let l=K.renderOpts.collectedTags;if(!j)return await (0,u.sendResponse)(G,V,s,K.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,h.toNodeOutgoingHttpHeaders)(s.headers);l&&(t[g.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let a=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,r=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:v.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:a,expire:r}}}}catch(t){throw(null==a?void 0:a.isStale)&&await y.onRequestError(e,t,{routerKind:"App Router",routePath:w,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:C})},!1,T),t}},d=await y.handleResponse({req:e,nextConfig:x,cacheKey:D,routeKind:a.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:_,isRoutePPREnabled:!1,isOnDemandRevalidate:C,revalidateOnlyGenerated:k,responseGenerator:l,waitUntil:r.waitUntil,isMinimalMode:F});if(!j)return null;if((null==d||null==(s=d.value)?void 0:s.kind)!==v.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(o=d.value)?void 0:o.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});F||t.setHeader("x-nextjs-cache",C?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),S&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(d.value.headers);return F&&j||c.delete(g.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,b.getCacheControlHeader)(d.cacheControl)),await (0,u.sendResponse)(G,V,new Response(d.value.body,{headers:c,status:d.value.status||200})),null};H&&B?await o(B):(i=q.getActiveScopeSpan(),await q.withPropagatedContext(e.headers,()=>q.trace(c.BaseServerSpan.handleRequest,{spanName:`${L} ${w}`,kind:s.SpanKind.SERVER,attributes:{"http.method":L,"http.target":e.url}},o),void 0,!H))}catch(t){if(t instanceof m.NoFallbackError||await y.onRequestError(e,t,{routerKind:"App Router",routePath:I,routeType:"route",revalidateReason:(0,p.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:C})},!1,T),j)throw t;return await (0,u.sendResponse)(G,V,new Response(null,{status:500})),null}}e.s(["handler",0,_,"patchFetch",0,function(){return(0,r.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:A})},"routeModule",0,y,"serverHooks",0,S,"workAsyncStorage",0,x,"workUnitAsyncStorage",0,A],35571)},58635,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__11tcwk2._.js","server/chunks/10sd_@google_generative-ai_dist_index_mjs_0_3vzi-._.js","server/chunks/my-sierra-project_lib_0qrl87k._.js","server/chunks/10sd_0yvz8h9._.js","server/chunks/my-sierra-project_lib_firebase_ts_0ps6n54._.js","server/chunks/[root-of-the-server]__11jho6b._.js","server/chunks/[root-of-the-server]__0oe2g4u._.js"].map(t=>e.l(t))).then(()=>t(84451)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0an6-56._.js.map