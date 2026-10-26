// Lexora Digital — static site build (Node 18+, zero dependencies)
// Usage: node build.mjs   → writes ./dist
import { promises as fs } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_URL, LANGS, DEFAULT_LANG } from "./src/config.mjs";
import { page, globeCanvas } from "./src/layout.mjs";
import { esc, fmt, path, abs, icon } from "./src/lib.mjs";
import home from "./src/pages/home.mjs";
import * as P from "./src/pages/inner.mjs";
import { article, articleHref, articleLd } from "./src/pages/article.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");

// key → renderer. Globe script is loaded only where a planet is drawn.
const PAGES = {
  home: { r: home },
  web: { r: P.web }, compliance: { r: P.compliance }, check: { r: P.check }, language: { r: P.language }, creative: { r: P.creative },
  work: { r: P.work }, journal: { r: P.journal }, about: { r: P.about }, contact: { r: P.contact },
  privacy: { r: (t) => P.legal(t, "privacy") }, cookies: { r: (t) => P.legal(t, "cookies") },
  imprint: { r: (t) => P.legal(t, "imprint") }, accessibility: { r: (t) => P.legal(t, "accessibility") }
};
const NOINDEX = new Set([]);

async function loadDicts() {
  const all = {};
  for (const l of LANGS.filter((x) => x.ready)) all[l.code] = (await import(`./src/i18n/${l.code}.mjs`)).default;
  for (const code in all) { all[code].__all = all; all[code].articles = (await import(`./src/articles/${code}.mjs`)).default; }
  return all;
}
async function write(rel, html) {
  const file = join(DIST, rel);
  await fs.mkdir(dirname(file), { recursive: true });
  await fs.writeFile(file, html);
}
async function copyDir(src, dst) {
  await fs.mkdir(dst, { recursive: true });
  for (const e of await fs.readdir(src, { withFileTypes: true })) {
    const s = join(src, e.name), d = join(dst, e.name);
    if (e.isDirectory()) await copyDir(s, d); else await fs.copyFile(s, d);
  }
}

async function build() {
  await fs.rm(DIST, { recursive: true, force: true });
  await copyDir(join(ROOT, "public"), DIST);
  const all = await loadDicts();
  const ready = LANGS.filter((l) => l.ready);
  const urls = []; // { alt: fn(code) }

  for (const l of ready) {
    const t = all[l.code];
    for (const [key, def] of Object.entries(PAGES)) {
      const m = t.meta[key];
      if (!m) throw new Error(`Missing meta.${key} for ${l.code}`);
      const html = page({ t, key, title: m.title, desc: m.desc, body: def.r(t), globe: !!def.globe, noindex: NOINDEX.has(key) });
      await write(join(path(t, key), "index.html"), html);
      if (l.code === DEFAULT_LANG) urls.push({ alt: (c) => path(all[c], key) });
    }
    // journal articles share their slug across languages
    for (const a of t.articles) {
      const alt = (c) => articleHref(all[c], a);
      const html = page({ t, key: "journal", title: `${a.t} | Lexora Digital`, desc: a.d, body: article(t, a), alt, ld: articleLd(t, a), ogType: "article" });
      await write(join(alt(l.code), "index.html"), html);
      if (l.code === DEFAULT_LANG) urls.push({ alt, lastmod: a.updated || a.iso });
    }
    // case studies share their slug across languages
    for (const item of t.home.work.items) {
      const alt = (c) => `${path(all[c], "work")}${item.slug}/`;
      const c = t.pages.cases[item.slug];
      const html = page({ t, key: "work", title: `${item.title} — ${t.home.work.badge} · ${t.nav.work} · Lexora Digital`, desc: c.lead.replace(/[*~]/g, ""), body: P.caseStudy(t, item.slug), alt,
        ld: { "@context": "https://schema.org", "@type": "CreativeWork", name: item.title, genre: item.cat, inLanguage: t.lang, creator: { "@type": "Organization", name: "Lexora Digital" } } });
      await write(join(alt(l.code), "index.html"), html);
      if (l.code === DEFAULT_LANG) urls.push({ alt });
    }
  }

  // root: stored choice → browser language → default
  const codes = ready.map((l) => l.code), tDef = all[DEFAULT_LANG];
  await write("index.html", `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lexora Digital — Web · Law · Language · Design</title>
<meta name="description" content="${esc(tDef.meta.home.desc)}">
<link rel="canonical" href="${SITE_URL}/">
${ready.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="${SITE_URL}/">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#050605">
<script>(function(){var a=${JSON.stringify(codes)},d=${JSON.stringify(DEFAULT_LANG)},s=null;try{s=localStorage.getItem("lexora-lang")}catch(e){}
if(a.indexOf(s)<0){s=null;var n=navigator.languages||[navigator.language||""];for(var i=0;i<n.length&&!s;i++){var c=String(n[i]).slice(0,2).toLowerCase();if(a.indexOf(c)>=0)s=c}}
location.replace("/"+(s||d)+"/");})();</script>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#050605;color:#F5F7F2;font:16px/1.6 system-ui,sans-serif}a{color:#B7FF00;margin:0 10px}</style>
</head><body><noscript><p>${ready.map((l) => `<a href="/${l.code}/" hreflang="${l.code}" lang="${l.code}">${l.native}</a>`).join("")}</p></noscript></body></html>`);

  // 404 (English, with links to every language)
  const nf = tDef.notFound;
  await write("404.html", page({
    t: tDef, key: "home", title: nf.title, desc: nf.lead, noindex: true, globe: true,
    body: `<section class="solo"><div class="globe-mini">${globeCanvas({ cls: "pl-mini", quiet: true })}</div>
<div class="wrap"><p class="code">404</p><h1 class="h2">${fmt(nf.h1)}</h1><p class="lead">${esc(nf.lead)}</p>
<div class="hero-cta"><a class="btn btn-lime" href="${path(tDef, "home")}">${esc(nf.home)}<span class="arr">${icon("arrow", 14, 2)}</span></a><a class="btn btn-ghost" href="${path(tDef, "contact")}">${esc(nf.contact)}</a></div>
<div class="hero-cta" style="margin-top:28px">${ready.map((l) => `<a class="btn btn-ghost btn-sm" href="/${l.code}/" lang="${l.code}">${l.native}</a>`).join("")}</div></div></section>`
  }));

  // lastmod only where we know the real date (articles); a build-date stamp on every page teaches Google to ignore it
  const sm = urls.flatMap(({ alt, lastmod }) => ready.map((l) => `  <url><loc>${abs(alt(l.code))}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
${ready.map((m) => `    <xhtml:link rel="alternate" hreflang="${m.code}" href="${abs(alt(m.code))}"/>`).join("\n")}
  </url>`)).join("\n");
  await write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sm}\n</urlset>\n`);
  await write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log(`Built ${urls.length * ready.length} pages in ${codes.join(", ")} → dist/`);
}
build().catch((e) => { console.error(e); process.exit(1); });
