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
import { landing, landingLd } from "./src/pages/landing.mjs";
import LANDING from "./src/i18n/landing.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const DIST = join(ROOT, "dist");

// key → renderer. Globe script is loaded only where a planet is drawn.
const PAGES = {
  home: { r: home },
  web: { r: P.web }, compliance: { r: P.compliance }, check: { r: P.check }, language: { r: P.language }, creative: { r: P.creative },
  work: { r: P.work }, shop: { r: P.shop, ld: P.shopLd }, journal: { r: P.journal }, about: { r: P.about }, contact: { r: P.contact },
  privacy: { r: (t) => P.legal(t, "privacy") }, cookies: { r: (t) => P.legal(t, "cookies") },
  imprint: { r: (t) => P.legal(t, "imprint") }, accessibility: { r: (t) => P.legal(t, "accessibility") },
  // landing page for ads and social links
  kits: { r: landing, ld: landingLd, og: { src: "/assets/img/og-kits.jpg", w: 1200, h: 630 } }
};
const NOINDEX = new Set([]);

async function loadDicts() {
  const all = {};
  for (const l of LANGS.filter((x) => x.ready)) all[l.code] = (await import(`./src/i18n/${l.code}.mjs`)).default;
  for (const code in all) { all[code].__all = all; all[code].articles = (await import(`./src/articles/${code}.mjs`)).default.slice().sort((a, b) => (b.iso > a.iso) - (b.iso < a.iso)); }
  // landing page texts live in src/i18n/landing.mjs; same address in every language
  for (const code in all) { all[code].pages.kits = LANDING[code]; all[code].meta.kits = LANDING[code].meta; all[code].slugs.kits = "eu-compliance-kits/"; }
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
      const html = page({ t, key, title: m.title, desc: m.desc, body: def.r(t), globe: !!def.globe, noindex: NOINDEX.has(key), ld: def.ld ? def.ld(t) : null, og: def.og });
      await write(join(path(t, key), "index.html"), html);
      if (l.code === DEFAULT_LANG) urls.push({ alt: (c) => path(all[c], key) });
    }
    // journal articles share their slug across languages; an article may exist in only some languages
    // (hreflang + sitemap list only those; the language switcher falls back to that language's journal)
    for (const a of t.articles) {
      const langs = ready.map((x) => x.code).filter((c) => all[c].articles.some((y) => y.slug === a.slug));
      const alt = (c) => langs.includes(c) ? articleHref(all[c], a) : path(all[c], "journal");
      const html = page({ t, key: "journal", title: `${a.t} | Lexora Digital`, desc: a.d, body: article(t, a), alt, langs, ld: articleLd(t, a), ogType: "article" });
      await write(join(alt(l.code), "index.html"), html);
      if (l.code === langs[0]) urls.push({ alt, langs, lastmod: a.updated || a.iso });
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
<link rel="canonical" href="${SITE_URL}/${DEFAULT_LANG}/">
${ready.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/">`).join("\n")}
<link rel="alternate" hreflang="x-default" href="${SITE_URL}/${DEFAULT_LANG}/">
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
  const inL = (langs) => ready.filter((l) => !langs || langs.includes(l.code));
  const sm = urls.flatMap(({ alt, langs, lastmod }) => inL(langs).map((l) => `  <url><loc>${abs(alt(l.code))}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
${inL(langs).map((m) => `    <xhtml:link rel="alternate" hreflang="${m.code}" href="${abs(alt(m.code))}"/>`).join("\n")}
  </url>`)).join("\n");
  await write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sm}\n</urlset>\n`);
  await write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  await pingIndexNow(urls.flatMap(({ alt, langs }) => inL(langs).map((l) => abs(alt(l.code)))));
  console.log(`Built ${(sm.match(/<loc>/g) || []).length} pages in ${codes.join(", ")} → dist/`);
}
// IndexNow: tells Bing (and other IndexNow engines) about the site's URLs after each production deploy,
// so new pages and articles are picked up within hours. Runs only on Vercel production builds; never fails the build.
const INDEXNOW_KEY = "cdfb9ca7dff0cc5f47308fd2895efa9d"; // public by design — the same key is served at /cdfb9ca7dff0cc5f47308fd2895efa9d.txt
async function pingIndexNow(urlList) {
  if (process.env.VERCEL_ENV !== "production") return;
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST", headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: new URL(SITE_URL).host, key: INDEXNOW_KEY, keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`, urlList }),
      signal: AbortSignal.timeout(15000)
    });
    console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);
  } catch (e) { console.log("IndexNow: skipped (" + e.message + ")"); }
}
build().catch((e) => { console.error(e); process.exit(1); });
