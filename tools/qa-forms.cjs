const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900}});
const errs=[];p.on('pageerror',e=>errs.push(e.message));
// check form: empty submit
await p.goto('http://localhost:4321/en/gdpr-cookie-check/');await p.waitForTimeout(2200);
await p.click('form[data-form=check] button[type=submit]');await p.waitForTimeout(200);
console.log('empty:',await p.$eval('form[data-form=check] .lform-status',e=>e.textContent), '| focused:',await p.evaluate(()=>document.activeElement.id));
await p.fill('#check-website','mycompany.de');await p.fill('#check-email','test@example.com');await p.selectOption('#check-country','DE');await p.check('#check-consent');
await p.click('form[data-form=check] button[type=submit]');await p.waitForTimeout(200);
console.log('valid, no endpoint:',await p.$eval('form[data-form=check] .lform-status',e=>e.textContent),'| url normalised:',await p.inputValue('#check-website'));
// simulate connected endpoint with mocked Formspree
await p.route('https://formspree.io/**',r=>r.fulfill({status:200,contentType:'application/json',body:'{"ok":true}'}));
await p.evaluate(()=>{window.LEXORA_FORMS.check='test123'});
await p.click('form[data-form=check] button[type=submit]');await p.waitForTimeout(500);
console.log('mock success visible:',await p.$eval('form[data-form=check] .lform-ok',e=>!e.hidden));
await p.screenshot({path:'/tmp/form-ok.png',clip:{x:640,y:80,width:640,height:600}});
// contact form prefill via ?service
await p.goto('http://localhost:4321/de/kontakt/?service=translation');await p.waitForTimeout(300);
console.log('prefill service:',await p.inputValue('#contact-service'));
await p.fill('#contact-email','bad@');await p.click('form[data-form=contact] button[type=submit]');await p.waitForTimeout(200);
console.log('de email err:',await p.$eval('#contact-email-err',e=>e.textContent));
// work filter
await p.goto('http://localhost:4321/en/work/');await p.click('[data-filter="Automotive & repair"]');await p.waitForTimeout(200);
console.log('visible projects after filter:',await p.$$eval('[data-grid] .proj',a=>a.filter(x=>!x.hidden).length));
console.log('errors',errs);await b.close();})();
