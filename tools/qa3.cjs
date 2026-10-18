const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const errs=[];
const p=await b.newPage({viewport:{width:1440,height:900}});p.on('pageerror',e=>errs.push(e.message));
await p.goto('http://localhost:4321/en/');await p.waitForTimeout(3000);
const ms=[];for(let i=0;i<10;i++){await p.waitForTimeout(100);ms.push(await p.evaluate(()=>window.__lexoraPlanets.map(x=>x.ms&&x.ms.toFixed(1)+'ms S='+x.S)))}
console.log('sphere render',JSON.stringify(ms.slice(-3)));
// long German stress test at 360px
const m=await b.newPage({viewport:{width:360,height:740}});
await m.goto('http://localhost:4321/en/');await m.waitForTimeout(800);
await m.evaluate(()=>{document.documentElement.lang='de';
 const L=['Datenschutzkonforme Webentwicklung für kleine und mittelständische Unternehmen.','Barrierefreiheitsanforderungen und Einwilligungsverwaltungsplattformen verständlich erklärt.'];
 document.querySelectorAll('h1 .ln')[1].textContent='Gestaltet mit Verantwortungsbewusstsein.';
 document.querySelectorAll('h2').forEach((h,i)=>h.textContent=L[i%2]);
 document.querySelectorAll('.drow h3').forEach(h=>h.textContent='Gestaltung');});
await m.waitForTimeout(300);
console.log('de 360 scrollWidth',await m.evaluate(()=>document.documentElement.scrollWidth));
await m.screenshot({path:'/tmp/de.png'});
const over=await m.evaluate(()=>[...document.querySelectorAll('h1,h2,h3,p,a,li')].filter(e=>e.getBoundingClientRect().right>window.innerWidth+1).map(e=>e.tagName+':'+e.textContent.slice(0,30)).slice(0,8));
console.log('overflowing',JSON.stringify(over));
// menu + keyboard
await m.evaluate(()=>scrollTo(0,0));await m.click('.burger');await m.waitForTimeout(700);await m.screenshot({path:'/tmp/menu.png'});
await m.keyboard.press('Escape');
// reduced motion
const rm=await b.newContext({reducedMotion:'reduce',viewport:{width:1440,height:900}});const r=await rm.newPage();r.on('pageerror',e=>errs.push('rm '+e.message));
await r.goto('http://localhost:4321/en/');await r.waitForTimeout(1500);await r.screenshot({path:'/tmp/rm.png'});
// tablet
const tb=await b.newPage({viewport:{width:820,height:1180}});await tb.goto('http://localhost:4321/en/');await tb.waitForTimeout(2500);await tb.screenshot({path:'/tmp/tab.png'});
console.log('tablet sw',await tb.evaluate(()=>document.documentElement.scrollWidth));
const xl=await b.newPage({viewport:{width:1920,height:1080}});await xl.goto('http://localhost:4321/en/');await xl.waitForTimeout(2500);await xl.screenshot({path:'/tmp/xl.png'});
console.log('errors',errs);await b.close();})();
