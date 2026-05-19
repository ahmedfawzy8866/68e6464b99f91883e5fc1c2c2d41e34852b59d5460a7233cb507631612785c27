(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,7140,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},80491,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return E},NormalizeError:function(){return y},PageNotFoundError:function(){return x},SP:function(){return m},ST:function(){return h},WEB_VITALS:function(){return i},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return l},getURL:function(){return u},isAbsoluteUrl:function(){return c},isResSent:function(){return f},loadGetInitialProps:function(){return p},normalizeRepeatedSlashes:function(){return g},stringifyError:function(){return A}};for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:n[o]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let r,t=!1;return(...n)=>(t||(t=!0,r=e(...n)),r)}let a=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,c=e=>a.test(e);function l(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function u(){let{href:e}=window.location,r=l();return e.substring(r.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function g(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function p(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await p(r.Component,r.ctx)}:{};let n=await e.getInitialProps(r);if(t&&f(t))return n;if(!n)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return n}let m="u">typeof performance,h=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class y extends Error{}class x extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class E extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function A(e){return JSON.stringify({message:e.message,stack:e.stack})}},15066,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={assign:function(){return c},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return a}};for(var o in n)Object.defineProperty(t,o,{enumerable:!0,get:n[o]});function i(e){let r={};for(let[t,n]of e.entries()){let e=r[t];void 0===e?r[t]=n:Array.isArray(e)?e.push(n):r[t]=[e,n]}return r}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function a(e){let r=new URLSearchParams;for(let[t,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)r.append(t,s(e));else r.set(t,s(n));return r}function c(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}},8866,e=>{"use strict";var r=e.i(15600),t=e.i(42842);e.s(["default",0,function({error:e,reset:n}){return(0,t.useEffect)(()=>{console.error("Systemic Anomaly Detected:",e)},[e]),(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("title",{children:"Strategic Anomaly | Sierra Blu Realty"}),(0,r.jsx)("style",{dangerouslySetInnerHTML:{__html:`
          body {
            margin: 0;
            background-color: #0A1628;
            color: #F8FAFC;
            font-family: 'Inter', system-ui, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
          }
          .recovery-hub {
            background: rgba(15, 23, 42, 0.4);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(200, 169, 110, 0.2);
            padding: 60px;
            max-width: 700px;
            text-align: center;
            border-radius: 4px; /* Classic luxury sharp edges or slight rounding */
            position: relative;
            box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          }
          .logo {
            font-size: 2rem;
            color: #C8A96E;
            margin-bottom: 2rem;
            border: 1px solid #C8A96E;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #C8A96E;
            letter-spacing: -0.02em;
          }
          .subtitle {
            font-size: 0.8rem;
            text-transform: uppercase;
            letter-spacing: 0.4em;
            color: #94A3B8;
            margin-bottom: 3rem;
            display: block;
          }
          .content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            text-align: left;
            margin-bottom: 4rem;
          }
          .content-ar {
            text-align: right;
            direction: rtl;
          }
          p {
            color: #94A3B8;
            line-height: 1.6;
            font-size: 0.95rem;
          }
          .action-btn {
            background: none;
            border: 1px solid #C8A96E;
            color: #C8A96E;
            padding: 16px 40px;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 0.75rem;
            transition: all 0.3s ease;
          }
          .action-btn:hover {
            background: #C8A96E;
            color: #0A1628;
          }
          .id-badge {
            font-family: monospace;
            font-size: 0.7rem;
            color: #475569;
            margin-top: 2rem;
          }
        `}})]}),(0,r.jsx)("body",{children:(0,r.jsxs)("div",{className:"recovery-hub",children:[(0,r.jsx)("div",{className:"logo",children:"SB"}),(0,r.jsx)("span",{className:"subtitle",children:"Systemic Resilience Hub"}),(0,r.jsx)("h1",{children:"Strategic Anomaly"}),(0,r.jsx)("div",{className:"content-grid",children:(0,r.jsx)("div",{className:"content-en",children:(0,r.jsx)("p",{children:"The intelligence relay has encountered an unexpected interruption. Your session remains secure, but the architectural synchronization requires reinitialization."})})}),(0,r.jsx)("button",{className:"action-btn",onClick:()=>n(),children:"Restore Integration"}),e.digest&&(0,r.jsxs)("div",{className:"id-badge",children:["TRACE_ID: ",e.digest]})]})})]})}])}]);