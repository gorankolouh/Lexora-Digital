const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];
for (const [w,h,n] of [[1440,900,'d'],[390,844,'m']]){
 const p=await b.newPage({viewport:{width:w,height:h}});
 p.on('console',m=>{if(m.type()==='error')errs.push(n+': '+m.text())}); p.on('pageerror',e=>errs.push(n+' pageerror: '+e.message));
 await p.goto('http://localhost:4321/en/');await p.waitForTimeout(2600);
 await p.screenshot({path:`/tmp/lx-${n}-hero.png`});
 // scroll through to trigger reveals
 const H=await p.evaluate(()=>document.body.scrollHeight);
 for(let y=0;y<H;y+=h*0.7){await p.evaluate(y=>window.scrollTo(0,y),y);await p.waitForTimeout(140);}
 await p.waitForTimeout(1200);
 await p.screenshot({path:`/tmp/lx-${n}-full.png`,fullPage:true});
 console.log(n,'scrollWidth',await p.evaluate(()=>document.documentElement.scrollWidth),'height',H);
 await p.close();}
console.log('errors',errs);await b.close();})();
