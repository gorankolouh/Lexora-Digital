const { chromium } = require('playwright');
const sites={rosalie:'/home/claude/studio-rosalie.html',mustermann:'/home/claude/mustermann-sanitaer.html',kfz:'/home/claude/kfz-werkstatt.html'};
(async()=>{const b=await chromium.launch();
for(const [k,f] of Object.entries(sites)){
 for(const [w,h,n] of [[1440,900,'desk'],[390,844,'mob']]){
  const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:n=='mob'?2:1});
  await p.goto('file://'+f);await p.waitForTimeout(700);
  await p.addStyleTag({content:'.callbar{display:none!important}'});
  await p.screenshot({path:`shots/${k}-${n}.png`});
  await p.screenshot({path:`shots/${k}-${n}-full.png`,fullPage:true});
  await p.close();}}
await b.close();})();
