const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
await p.goto('http://localhost:4321/en/');await p.waitForTimeout(800);
await p.evaluate(()=>document.querySelector('#ab-h').closest('section').scrollIntoView());await p.waitForTimeout(1500);
await p.screenshot({path:'/tmp/ab1.png'});
await p.evaluate(()=>scrollBy(0,800));await p.waitForTimeout(1200);await p.screenshot({path:'/tmp/ab2.png'});
console.log('sw',await p.evaluate(()=>document.documentElement.scrollWidth));await b.close();})();
