module.exports=[24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},59421,e=>{"use strict";var t=e.i(56983);async function r(e){let r=`
    Analyze the following real estate chat history between an agent and a stakeholder.
    Extract the following fields in JSON format:
    - nationality (e.g., "Egyptian", "British")
    - moveInDate (e.g., "Immediate", "May 2026")
    - familySize (number of people)
    - budget (numeric value in EGP or USD)
    - location (preferred area)
    - isQualified (boolean: true if we have budget and move-in date)
    - summary (1-sentence luxury brief of their requirements)

    Chat History:
    """
    ${e}
    """

    Return ONLY the JSON object.
  `;try{var i;let e,a=(await t.GoogleAIService.chatCompletions("scribe","profiling",[{role:"system",content:"You are an institutional data extractor for Sierra Blu."},{role:"user",content:r}],{model:"gemini-1.5-flash",temperature:0})).choices[0].message.content.match(/\{[\s\S]*\}/);if(!a)throw Error("Could not parse profile data");let o=JSON.parse(a[0]);return i=o,e=0,i.budget&&i.budget>=1e7?e+=5:i.budget&&i.budget>=5e6?e+=3:i.budget&&i.budget>=6e4&&(e+=1),i.nationality&&["Kuwaiti","Saudi","Emirati","Qatari","American","British","French","German","Russian"].includes(i.nationality)?e+=3:i.nationality&&(e+=1),i.location&&["Mivida","Villette","Cairo Festival","Marakez","Sodic","Palm Hills","Mountain View","ZED"].some(e=>i.location?.toLowerCase().includes(e.toLowerCase()))&&(e+=2),o.score=Math.min(e,10),o.isQualified=o.score>=8,o}catch(e){return console.error("Profiling Error:",e),{isQualified:!1,summary:"Manual profiling required due to analysis error."}}}async function i(e){let r=`
    Analyze this real estate interaction and extract specific stakeholder feedback.
    Identify any "Negative Signals" (things they specifically dislike) and general objections.
    
    Fields to extract (JSON):
    - signals: Array of { category: "price"|"location"|"finishing"|"layout"|"view", description: string, importance: 0-1 }
    - objections: Array of { reason: string, category: string, sentiment: "positive"|"neutral"|"aggressive"|"desperate" }
    - matrix: { lossAversion: 0-1, premiumTolerance: 0-1 }
    
    Transcript:
    """
    ${e}
    """
    
    Return ONLY JSON.
  `;try{let e=(await t.GoogleAIService.chatCompletions("closer","feedback-analysis",[{role:"system",content:"Analyze stakeholder sentiment and feedback."},{role:"user",content:r}],{model:"gemini-1.5-flash",temperature:0})).choices[0].message.content.match(/\{[\s\S]*\}/);if(!e)return null;return JSON.parse(e[0])}catch(e){return console.error("Feedback Extraction Error:",e),null}}async function a(t,i){let a=await r(i),{db:o}=await e.A(8100),{doc:n,updateDoc:s,serverTimestamp:l}=await e.A(52257),{COLLECTIONS:c}=await e.A(5071),u=n(o,c.stakeholders,t);return await s(u,{"intelligence.profile":{nationality:a.nationality,familySize:a.familySize,moveInDate:a.moveInDate,budget:a.budget,location:a.location,score:a.score},"aiProfiling.summary":a.summary,"aiProfiling.isQualified":a.isQualified,"orchestrationState.stage":a.score&&a.score>=8?"S8":"S7","orchestrationState.status":"completed",updatedAt:l()}),a.score&&a.score>=8&&console.log(`🔥 HIGH VALUE LEAD DETECTED: ${t} (Score: ${a.score}). Triggering S8 Concierge.`),a}e.s(["conductPrecisionInterview",0,a,"extractFeedbackAndSentiment",0,i,"extractProfileFromChat",0,r])},8100,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__034~r9m._.js","server/chunks/10sd_0yvz8h9._.js","server/chunks/my-sierra-project_lib_firebase_ts_0ps6n54._.js"].map(t=>e.l(t))).then(()=>t(54745)))},52257,e=>{e.v(t=>Promise.all(["server/chunks/[root-of-the-server]__0p-sdii._.js","server/chunks/10sd_0yvz8h9._.js"].map(t=>e.l(t))).then(()=>t(41878)))},5071,e=>{e.v(t=>Promise.all(["server/chunks/my-sierra-project_lib_models_schema_ts_01h~d0g._.js"].map(t=>e.l(t))).then(()=>t(82413)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__12e6k5_._.js.map