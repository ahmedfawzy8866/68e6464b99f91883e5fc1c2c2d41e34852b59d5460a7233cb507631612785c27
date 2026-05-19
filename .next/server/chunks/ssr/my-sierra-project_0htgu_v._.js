module.exports=[4326,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},73540,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DEFAULT_SEGMENT_KEY:function(){return l},NOT_FOUND_SEGMENT_KEY:function(){return m},PAGE_SEGMENT_KEY:function(){return k},addSearchParamsIfPageSegment:function(){return i},computeSelectedLayoutSegment:function(){return j},getSegmentValue:function(){return f},getSelectedLayoutSegmentPath:function(){return function a(b,c,d=!0,e=[]){let g;if(d)g=b[1][c];else{let a=b[1];g=a.children??Object.values(a)[0]}if(!g)return e;let h=f(g[0]);return!h||h.startsWith(k)?e:(e.push(h),a(g,c,!1,e))}},isGroupSegment:function(){return g},isParallelRouteSegment:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return Array.isArray(a)?a[1]:a}function g(a){return"("===a[0]&&a.endsWith(")")}function h(a){return a.startsWith("@")&&"@children"!==a}function i(a,b){if(a.includes(k)){let a=JSON.stringify(b);return"{}"!==a?k+"?"+a:k}return a}function j(a,b){if(!a||0===a.length)return null;let c="children"===b?a[0]:a[a.length-1];return c===l?null:c}let k="__PAGE__",l="__DEFAULT__",m="/_not-found"},42395,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"InvariantError",{enumerable:!0,get:function(){return d}});class d extends Error{constructor(a,b){super(`Invariant: ${a.endsWith(".")?a:a+"."} This is a bug in Next.js.`,b),this.name="InvariantError"}}},45721,(a,b,c)=>{"use strict";function d(){let a,b,c=new Promise((c,d)=>{a=c,b=d});return{resolve:a,reject:b,promise:c}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createPromiseWithResolvers",{enumerable:!0,get:function(){return d}})},32454,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={BailoutToCSRError:function(){return g},isBailoutToCSRError:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f="BAILOUT_TO_CLIENT_SIDE_RENDERING";class g extends Error{constructor(a){super(`Bail out to client-side rendering: ${a}`),this.reason=a,this.digest=f}}function h(a){return"object"==typeof a&&null!==a&&"digest"in a&&a.digest===f}},17891,a=>{"use strict";var b=a.i(96230);let c=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim(),d=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)};var e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,b.createContext)({}),g=(0,b.forwardRef)(({color:a,size:d,strokeWidth:g,absoluteStrokeWidth:h,className:i="",children:j,iconNode:k,...l},m)=>{let{size:n=24,strokeWidth:o=2,absoluteStrokeWidth:p=!1,color:q="currentColor",className:r=""}=(0,b.useContext)(f)??{},s=h??p?24*Number(g??o)/Number(d??n):g??o;return(0,b.createElement)("svg",{ref:m,...e,width:d??n??e.width,height:d??n??e.height,stroke:a??q,strokeWidth:s,className:c("lucide",r,i),...!j&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0;return!1})(l)&&{"aria-hidden":"true"},...l},[...k.map(([a,c])=>(0,b.createElement)(a,c)),...Array.isArray(j)?j:[j]])});a.s(["default",0,(a,e)=>{let f=(0,b.forwardRef)(({className:f,...h},i)=>(0,b.createElement)(g,{ref:i,iconNode:e,className:c(`lucide-${d(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,f),...h}));return f.displayName=d(a),f}],17891)},18657,a=>{"use strict";a.s(["COLLECTIONS",0,{portfolioAssets:"listings",units:"listings",projects:"projects",developers:"developers",mediaAssets:"mediaAssets",investmentStakeholders:"leads",stakeholders:"leads",strategicPipeline:"deals",sales:"sales",activities:"activities",users:"users",syncQueue:"syncQueue",syncLog:"syncLog",vouchers:"vouchers",proposals:"proposals",brokerListings:"broker_listings",viewings:"viewings",intelligence:"intelligence",conciergeSelections:"concierge_selections"}])},95401,a=>{"use strict";let b=(0,a.i(17891).default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);a.s(["TrendingUp",0,b],95401)},94419,a=>{"use strict";var b=a.i(93161),c=a.i(96230),d=a.i(26274);a.i(34225);var e=a.i(49926),f=a.i(97115),g=a.i(68800),g=g,h=a.i(56614),i=a.i(53845),j=a.i(18657),k=a.i(10971),l=g,m=a.i(23265);let n=(0,a.i(17891).default)("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),o={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},p={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:50}}};function q({proposal:a}){return(0,b.jsxs)("div",{className:"proposal-public-view min-h-screen bg-navy text-white selection:bg-gold selection:text-navy",children:[(0,b.jsx)("div",{className:"fixed inset-0 bg-radial-gradient from-blue-900/20 via-navy to-navy -z-10"}),(0,b.jsx)("div",{className:"mouse-glow opacity-30"}),(0,b.jsxs)(k.motion.div,{variants:o,initial:"hidden",animate:"visible",className:"max-w-6xl mx-auto px-6 py-16 lg:py-24",children:[(0,b.jsxs)(k.motion.header,{variants:p,className:"text-center mb-16",children:[(0,b.jsx)("div",{className:"sb-logo-luxury mb-6 mx-auto",children:"SB"}),(0,b.jsx)("h1",{className:"serif text-4xl lg:text-6xl mb-4 tracking-tight",children:"Strategic Options Package"}),(0,b.jsxs)("div",{className:"text-gold uppercase tracking-[0.2em] text-sm lg:text-base mb-8",children:["Specially Curated for ",a.leadName]}),(0,b.jsx)("p",{className:"max-w-2xl mx-auto text-silver/80 text-lg leading-relaxed",children:a.strategicSummary||"An exclusive selection of premium assets analyzed for their investment potential and lifestyle alignment."})]}),(0,b.jsx)("div",{className:"mb-24",children:(0,b.jsx)(m.default,{portfolio:{id:a.id||"",leadId:a.leadId,leadName:a.leadName||"",createdAt:a.createdAt||l.av.now(),personalNote:a.strategicSummary||"",whatsappLink:"",matchingScore:0,estimatedPortfolioROI:a.financialAnalysis?.projectedROI||0,units:a.units.map(a=>({id:a.id,title:a.title,price:a.price,matchScore:a.matchScore,estimatedYield:a.financialAnalysis?.annualYield||0,estimatedROI:a.financialAnalysis?.projectedROI||0,imageUrl:a.images?.[0],description:"",reason:a.matchReason}))}})}),(0,b.jsxs)(k.motion.footer,{variants:p,className:"mt-24 pt-16 border-t border-white/5 text-center",children:[(0,b.jsxs)("div",{className:"flex items-center justify-center mb-8 text-silver/40",children:[(0,b.jsx)(n,{size:20,className:"me-2"}),(0,b.jsx)("span",{className:"uppercase text-xs tracking-widest",children:"Secured by Sierra Blu Intelligence"})]}),(0,b.jsx)("div",{className:"serif text-xl mb-4 italic text-silver/60",children:'"We do not just find properties; we secure your architectural legacy."'}),(0,b.jsxs)("div",{className:"text-xs text-silver/30 mt-12 pb-8",children:["© ",new Date().getFullYear()," Sierra Blu Realty. All rights reserved. Selective Private Disclosure."]})]})]}),(0,b.jsx)("style",{children:`
        .bg-navy { background-color: #0A1A3A; }
        .text-navy { color: #0A1A3A; }
        .text-silver { color: #E2E8F0; }
        .text-gold { color: #C9A24A; }
        .gold-text { color: #C9A24A; }
        
        .glass-card-luxury {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }

        .badge-luxury {
          background: rgba(10, 26, 58, 0.8);
          backdrop-filter: blur(4px);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(201, 162, 74, 0.3);
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          color: white;
        }

        .btn-luxury-full {
          background: none;
          border: 1px solid #C9A24A;
          color: #C9A24A;
          padding: 12px 24px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.85rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .btn-luxury-full:hover {
          background: #C9A24A;
          color: #0A1A3A;
        }

        .sb-logo-luxury {
          width: 60px;
          height: 60px;
          border: 1px solid #C9A24A;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: #C9A24A;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `})]})}var r=a.i(25490);a.s(["default",0,function(){let a=(0,d.useParams)().id,[l,m]=(0,c.useState)(null),[n,o]=(0,c.useState)(!0),[p,s]=(0,c.useState)(null);return(0,c.useEffect)(()=>{a&&(async()=>{try{let b=(0,e.doc)(i.db,j.COLLECTIONS.proposals,a),c=await (0,f.getDoc)(b);if(c.exists()){let a={id:c.id,...c.data()};m(a),await (0,f.updateDoc)(b,{viewCount:(0,g.b5)(1),lastViewedAt:(0,h.serverTimestamp)()})}else s("This strategic package is no longer available or has been moved.")}catch(a){console.error("Proposal access failure:",a),s("Unable to secure a connection to the Sierra Blu intelligence vault.")}finally{o(!1)}})()},[a]),(0,b.jsxs)("main",{className:"min-h-screen bg-navy overflow-x-hidden",children:[(0,b.jsx)(r.AnimatePresence,{mode:"wait",children:n?(0,b.jsxs)(k.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 flex flex-col items-center justify-center z-50 bg-navy",children:[(0,b.jsx)("div",{className:"sb-loader-luxury mb-4",children:"SB"}),(0,b.jsx)("div",{className:"text-gold tracking-[0.3em] text-xs uppercase animate-pulse",children:"Synchronizing Asset Portfolio..."})]},"loader"):p?(0,b.jsx)(k.motion.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},className:"min-h-screen flex items-center justify-center p-6 text-center",children:(0,b.jsxs)("div",{className:"max-w-md",children:[(0,b.jsx)("div",{className:"text-gold text-4xl mb-6",children:"!"}),(0,b.jsx)("h2",{className:"serif text-2xl text-white mb-4",children:"Access Restricted"}),(0,b.jsx)("p",{className:"text-silver/60 mb-8",children:p}),(0,b.jsx)("button",{onClick:()=>window.location.reload(),className:"px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-navy transition-all uppercase tracking-widest text-xs",children:"Retry Connection"})]})},"error"):l?(0,b.jsx)(q,{proposal:l},"view"):null}),(0,b.jsx)("style",{children:`
        .bg-navy { background-color: #0A1A3A; }
        .text-gold { color: #C9A24A; }
        .sb-loader-luxury {
          width: 40px;
          height: 40px;
          border: 1px solid #C9A24A;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9A24A;
          font-family: var(--font-serif);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: luxury-spin 3s infinite linear;
        }
        @keyframes luxury-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `})]})}],94419)}];

//# sourceMappingURL=my-sierra-project_0htgu_v._.js.map