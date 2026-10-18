const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];
const [w,h,url,out]=[+process.argv[2],+process.argv[3],process.argv[4],process.argv[5]];
const p=await b.newPage({viewport:{width:w,height:h},deviceScaleFactor:+(process.argv[6]||1)});
p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});p.on('pageerror',e=>errs.push(e.message));
await p.goto(url);await p.waitForTimeout(+(process.argv[7]||3500));
if(process.argv[8]==='full'){let y=0;while(true){const H=await p.evaluate(()=>document.documentElement.scrollHeight);if(y>H)break;await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(150);y+=h*0.5;}await p.waitForTimeout(1200);await p.screenshot({path:out,fullPage:true});}
else await p.screenshot({path:out});
const fps=await p.evaluate(()=>new Promise(r=>{let n=0,t0=performance.now();(function f(){n++;performance.now()-t0<2000?requestAnimationFrame(f):r(n/2)})()}));
console.log('fps',fps,'sw',await p.evaluate(()=>document.documentElement.scrollWidth),'errors',JSON.stringify(errs));await b.close();})();
