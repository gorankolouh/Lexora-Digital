// QA: visit every sitemap URL (+404), check console errors, horizontal overflow, broken internal links; screenshot.
const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const base = 'http://localhost:4321';
  const sm = fs.readFileSync('dist/sitemap.xml', 'utf8');
  const urls = [...new Set([...sm.matchAll(/<loc>https:\/\/lexoradigital\.com([^<]+)<\/loc>/g)].map(m => m[1]))];
  const only = process.argv[2]; const shots = process.argv[3] === 'shots';
  const list = only ? urls.filter(u => u.startsWith(only)) : urls;
  const b = await chromium.launch(); const links = new Set(); const problems = [];
  for (const [w, h, tag] of [[1440, 900, 'd'], [390, 844, 'm']]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, reducedMotion: 'reduce' });
    for (const u of list) {
      const p = await ctx.newPage(); const errs = [];
      p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); }); p.on('pageerror', e => errs.push(e.message));
      await p.goto(base + u, { waitUntil: 'load' }); await p.waitForTimeout(300);
      const sw = await p.evaluate(() => document.documentElement.scrollWidth);
      if (sw > w) problems.push(`${tag} overflow ${sw} ${u}`);
      if (errs.length) problems.push(`${tag} errors ${u}: ${errs.join(' | ')}`);
      (await p.$$eval('a[href^="/"]', as => as.map(a => a.getAttribute('href')))).forEach(x => links.add(x.split('#')[0].split('?')[0]));
      if (shots) { await p.screenshot({ path: `/tmp/qa/${tag}${u.replace(/\//g, '_')}.png`, fullPage: true }); }
      await p.close();
    }
    await ctx.close();
  }
  const ctx = await b.newContext(); const p = await ctx.newPage(); let bad = [];
  for (const l of links) { const r = await p.request.get(base + l); if (r.status() !== 200) bad.push(`${r.status()} ${l}`); }
  console.log('pages', list.length, 'links', links.size); console.log('broken', JSON.stringify(bad)); console.log('problems', JSON.stringify(problems, null, 1));
  await b.close();
})();
