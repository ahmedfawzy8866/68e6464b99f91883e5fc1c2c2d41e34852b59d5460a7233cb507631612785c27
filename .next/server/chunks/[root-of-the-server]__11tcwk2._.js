module.exports=[82413,e=>{"use strict";e.s(["COLLECTIONS",0,{portfolioAssets:"listings",units:"listings",projects:"projects",developers:"developers",mediaAssets:"mediaAssets",investmentStakeholders:"leads",stakeholders:"leads",strategicPipeline:"deals",sales:"sales",activities:"activities",users:"users",syncQueue:"syncQueue",syncLog:"syncLog",vouchers:"vouchers",proposals:"proposals",brokerListings:"broker_listings",viewings:"viewings",intelligence:"intelligence",conciergeSelections:"concierge_selections"}])},37071,e=>e.a(async(t,i)=>{try{let t=await e.y("firebase-admin-217b7d717faeb09b/firestore");e.n(t),i()}catch(e){i(e)}},!0),92245,e=>{"use strict";e.s(["assessLegalRisk",0,function(e){let t=[],i=[],s=0;"owner"===e.ownerType&&(t.push("homestead_potential"),i.push("Verify if this is the owners primary residence (Lei 8.009/90)"),s+=20),e.ownerContact?.toLowerCase().includes("married")&&(t.push("spousal_consent_required"),i.push("Ensure spousal notification is signed and notarized (Art. 842 CPC)"),s+=15),e.annualServiceCharge&&e.annualServiceCharge>.05*e.price&&(t.push("high_maintenance_exposure"),i.push("Verify pending maintenance fees (Propter Rem debt risk)"),s+=10),"core-shell"===e.finishingType&&(t.push("unregistered_renovations_risk"),i.push("Verify if structural permits are cleared with local municipality"),s+=10);let a="low";return s>40?a="high":s>15&&(a="medium"),{riskLevel:a,flags:t,recommendations:i,isApprovedForProposal:"high"!==a}},"generateLegalSummary",0,function(e,t){return"ar"===t?"low"===e.riskLevel?"الوضعية القانونية سليمة وجاهزة للتعاقد الفوري.":"medium"===e.riskLevel?"توجد ملاحظات قانونية طفيفة تتطلب مراجعة المستندات الأصلية.":"تنبيه: توجد مخاطر قانونية محتملة تتطلب فحصاً دقيقاً قبل المضي قدماً.":"low"===e.riskLevel?"Legal status is verified and ready for immediate contract.":"medium"===e.riskLevel?"Minor legal observations noted; document verification recommended.":"Warning: Potential legal risks detected. Due diligence required before proceeding."}])},84451,e=>e.a(async(t,i)=>{try{var s=e.i(56983),a=e.i(54745);e.i(29058);var r=e.i(8624),n=e.i(72436),o=e.i(82413),l=e.i(17556),c=e.i(39807),u=e.i(92245),d=e.i(59421),m=e.i(59753),g=e.i(32732),h=e.i(30099),p=t([c]);async function y(e,t){let i=process.env.TELEGRAM_CHAT_ID?parseInt(process.env.TELEGRAM_CHAT_ID):null;if(e===i){let e=await f(t);if(!e||"unknown"===e.type)return await k(t);try{switch(e.type){case"analyze_lead":return await b(e.params.name);case"generate_proposal":return await v(e.params.name,t);case"check_listing":return await _(e.params.identifier);case"general_query":return await k(t);default:return{message:"Intent recognized but not yet implemented.",success:!1}}}catch(e){return console.error("Agent execution failed:",e),{message:`Operational Failure: ${e.message}`,success:!1}}}return await w(e,t)}async function f(e){let t=`You are the Sierra Blu Intent Dispatcher.
Analyze the user's message and determine their intent.
Available Intents:
- analyze_lead: User wants to see a summary of a lead's profile/preferences. (Params: name)
- generate_proposal: User wants to create a new proposal/options package for a lead. (Params: name)
- check_listing: User wants status/legal info for a property/listing. (Params: identifier)
- general_query: User is asking a general question about the project or real estate.

Format: JSON only: {"type": "intent_name", "params": {}}`;try{let i=(await s.GoogleAIService.chatCompletions("antigravity","detect-intent",[{role:"system",content:t},{role:"user",content:e}],{model:"gemini-1.5-flash",temperature:0})).choices[0].message.content.match(/\{[\s\S]*\}/);return i?JSON.parse(i[0]):{type:"unknown"}}catch(e){return console.error("[Antigravity] Intent detection failed:",e),{type:"unknown"}}}async function b(e){let t=(0,n.query)((0,r.collection)(a.db,o.COLLECTIONS.stakeholders),(0,n.where)("name",">=",e),(0,n.limit)(1)),i=await (0,n.getDocs)(t);if(i.empty)return{message:`Stakeholder "${e}" not found.`,success:!1};let s={id:i.docs[0].id,...i.docs[0].data()};await (0,c.runMatchingForLead)(s.id);let l=(await (0,n.getDocs)((0,n.query)((0,r.collection)(a.db,o.COLLECTIONS.stakeholders),(0,n.where)("name","==",s.name)))).docs[0].data();return{message:`
<b>👤 Stakeholder Profile: ${l.name}</b>
<b>Budget:</b> ${l.budget} - ${l.budgetMax}
<b>Interests:</b> ${l.aiProfiling?.interests?.join(", ")||"N/A"}
<b>Top Strategic Matches:</b> ${l.aiProfiling?.topMatches?.length||0} assets.

<i>"Engagement velocity is high. Recommend immediate proposal deployment."</i>
  `,success:!0,actionTaken:"analyze_lead"}}async function v(t,i){let s=(0,n.query)((0,r.collection)(a.db,o.COLLECTIONS.stakeholders),(0,n.where)("name",">=",t),(0,n.limit)(1)),c=await (0,n.getDocs)(s);if(c.empty)return{message:`Stakeholder "${t}" not found.`,success:!1};if(i.includes("analyze")){let e=i.match(/[a-zA-Z0-9]{20,}/)?.[0];if(e)return{message:`<b>✦ ANALYZING STAKEHOLDER: ${e} ✦</b>

Intelligence status: <b>Qualified</b>.
Neural Matching: <b>Synchronized</b>.
Selection Gallery: <b>Deployed</b>.

Recommended Action: 📱 <i>Call stakeholder to finalize portfolio preference.</i>`,success:!0}}if(i.includes("handover")){let t=i.match(/[a-zA-Z0-9]{20,}/)?.[0];if(t){let{generateCloserHandoff:i}=await e.A(28136),s=await i(t);return{message:`<b>🏆 STAGE 9: CLOSER HANDOFF COMPLETE</b>

<b>Stakeholder:</b> ${s.leadName}
<b>Phone:</b> ${s.phone}

<b>Intelligence Profile:</b>
${s.intelligenceProfile}

<b>Strategic Intent:</b>
${s.strategicIntent}

<b>High Interest Assets:</b>
${s.highInterestAssets.map(e=>`• ${e.code} (Match: ${e.matchScore}%)`).join("\n")}

<b>Next Steps:</b>
${s.nextSteps}`,success:!0}}}let u=c.docs[0].id,d=await (0,l.generateOptionsPackage)(u);return{message:`
<b>✅ Proposal Deployed</b>
Strategic portfolio for <b>${t}</b> has been generated.
<b>Proposal ID:</b> <code>${d}</code>
<b>Action:</b> Assets curated and incentives triggered.
    `,success:!0,actionTaken:"generate_proposal"}}async function _(e){let t=(0,n.query)((0,r.collection)(a.db,o.COLLECTIONS.units),(0,n.limit)(1)),i=await (0,n.getDocs)(t);if(i.empty)return{message:`Listing "${e}" not found.`,success:!1};let s=i.docs[0].data(),l=(0,u.assessLegalRisk)(s),c=(0,u.generateLegalSummary)(l,"en");return{message:`
<b>🏢 Asset Intel: ${s.title}</b>
<b>Price:</b> ${s.price} EGP
<b>Status:</b> ${s.status.toUpperCase()}
<b>Legal Status:</b> ${c}
<b>Risk Level:</b> ${l.riskLevel.toUpperCase()}
    `,success:!0,actionTaken:"check_listing"}}async function k(e){try{return{message:(await s.GoogleAIService.chatCompletions("antigravity","general-query",[{role:"system",content:`ROLE: You are "Sierra," the Lead Concierge for Sierra Blu Realty.
CORE COMPETENCIES:
1. The Subtle Interviewer: You extract key data points (Nationality, Family Size, Budget, Move-in Date) with professional warmth.
2. Tone: Use "Editorial Luxury" tone — warm, refined, and authoritative. Speak exclusively in professional English with courtesy and quiet confidence.
3. The Qualifier: Your goal is to qualify leads for the high-end Cairo market (21 compounds).

Answer every query with authority, blending professional warmth with the precision of a data scientist.`},{role:"user",content:e}],{model:"gemini-1.5-pro"})).choices[0].message.content,success:!0}}catch(e){return console.error("[Antigravity] General query failed:",e),{message:"Intelligence temporarily offline. Strategic reconnection in progress.",success:!1}}}async function w(t,i){let l,c=(0,n.query)((0,r.collection)(a.db,o.COLLECTIONS.stakeholders),(0,n.where)("automation.telegramId","==",t),(0,n.limit)(1)),u=await (0,n.getDocs)(c),p="";u.empty?(p=(0,m.doc)((0,r.collection)(a.db,o.COLLECTIONS.stakeholders)).id,l={name:`Stakeholder-${t}`,phone:`TELEGRAM:${t}`,stage:"lead",source:"whatsapp",orchestrationState:{stage:"S2",status:"pending"},automation:{telegramId:t,botInitiated:!0}}):l={id:p=u.docs[0].id,...u.docs[0].data()};let y=await (0,d.extractProfileFromChat)(i),{extractFeedbackAndSentiment:f}=await e.A(27198),b=await f(i),v=(0,m.doc)(a.db,o.COLLECTIONS.stakeholders,p),_={"intelligence.profile":{...l.intelligence?.profile||{},nationality:y.nationality||l.intelligence?.profile?.nationality,familySize:y.familySize||l.intelligence?.profile?.familySize,budget:y.budget||l.intelligence?.profile?.budget,location:y.location||l.intelligence?.profile?.location,moveInDate:y.moveInDate||l.intelligence?.profile?.moveInDate},"orchestrationState.stage":y.isQualified?"S7":"S6",updatedAt:(0,h.serverTimestamp)()};return b&&(b.signals?.length>0||b.objections?.length>0)&&(b.signals?.length>0&&(_["intelligence.memory.negativeSignals"]=(0,g.arrayUnion)(...b.signals)),b.objections?.length>0&&(_["intelligence.objections"]=(0,g.arrayUnion)(...b.objections.map(e=>({...e,timestamp:new Date})))),b.matrix&&(_["intelligence.matrix"]={...l.intelligence?.matrix||{},...b.matrix})),await (0,n.updateDoc)(v,_),y.summary,[!y.nationality&&"Nationality",!y.budget&&"Budget",!y.familySize&&"Family Size",!y.moveInDate&&"Move-in Date"].filter(Boolean).join(", "),{message:(await s.GoogleAIService.chatCompletions("sierra","concierge-interview",[{role:"system",content:`You are Sierra from Sierra Blu — Lead Concierge for an elite Cairo property platform.
        Focus on qualifying the lead: Nationality, Family Size, Budget, Move-in Date.
        Be warm, professional, and precise. Speak exclusively in refined English with quiet confidence.`},{role:"user",content:`Previous context: ${i}
Generate the next Sierra-style question.`}],{model:"gemini-1.5-flash"})).choices[0].message.content,success:!0,actionTaken:"stakeholder_profiling"}}[c]=p.then?(await p)():p,e.s(["processAgentCommand",0,y]),i()}catch(e){i(e)}},!1),8100,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__034~r9m._.js","server/chunks/10sd_0yvz8h9._.js","server/chunks/my-sierra-project_lib_firebase_ts_0ps6n54._.js"].map(t=>e.l(t))).then(()=>t(54745)))},52257,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__0p-sdii._.js","server/chunks/10sd_0yvz8h9._.js"].map(t=>e.l(t))).then(()=>t(41878)))},5071,e=>{e.v(t=>Promise.all(["server/chunks/my-sierra-project_lib_models_schema_ts_01h~d0g._.js"].map(t=>e.l(t))).then(()=>t(82413)))},28136,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__07-nsud._.js","server/chunks/my-sierra-project_lib_0qrl87k._.js","server/chunks/10sd_0yvz8h9._.js","server/chunks/my-sierra-project_lib_firebase_ts_0ps6n54._.js","server/chunks/10sd_@google_generative-ai_dist_index_mjs_0_3vzi-._.js"].map(t=>e.l(t))).then(()=>t(20730)))},27198,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__12e6k5_._.js","server/chunks/10sd_@google_generative-ai_dist_index_mjs_0_3vzi-._.js","server/chunks/my-sierra-project_lib_0qrl87k._.js"].map(t=>e.l(t))).then(()=>t(59421)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__11tcwk2._.js.map