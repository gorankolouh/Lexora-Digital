import { LANGS, SITE_URL, BRAND, TAGLINE, SERVICES, FORMS, PLANET_VIDEO, ORG_PROFILES, FOUNDER, DEFAULT_LANG } from "./config.mjs";
import { esc, fmt, path, abs, LOGO, icon, readyLangs } from "./lib.mjs";

const V = Date.now().toString(36); // cache-busting for assets

// alt(code) → path of the current page in another language
function langLinks(t, alt) {
  return LANGS.map((l) => ({
    l, cur: l.code === t.lang,
    href: l.ready ? alt(l.code) : "#",
    dis: l.ready ? "" : ' aria-disabled="true" tabindex="-1"'
  }));
}

function header(t, key, alt) {
  const n = t.nav;
  const svc = SERVICES.map((k) =>
    `<a href="${path(t, k)}"${k === key ? ' aria-current="page"' : ""}><span class="g" aria-hidden="true">${esc(n[k][2])}</span><b>${esc(n[k][0])}</b><span>${esc(n[k][1])}</span></a>`).join("");
  const links = langLinks(t, alt);
  const langs = links.map(({ l, cur, href, dis }) =>
    `<a href="${href}" lang="${l.code}" hreflang="${l.code}" data-lang="${l.code}"${cur ? ' aria-current="true"' : ""}${dis}><b>${esc(l.native)}</b><span>${l.ready ? l.code : esc(t.ui.soon)}</span></a>`).join("");
  const mlangs = links.map(({ l, cur, href, dis }) =>
    `<a href="${href}" lang="${l.code}" hreflang="${l.code}" data-lang="${l.code}"${cur ? ' aria-current="true"' : ""}${dis}>${l.code.toUpperCase()}</a>`).join("");
  const cur = (k) => (k === key || (k === "work" && String(key).startsWith("case:")) ? ' aria-current="page"' : "");
  const svcActive = SERVICES.includes(key) ? " is-active" : "";
  const mItems = [["work", n.work, ""], ...SERVICES.map((k) => [k, n[k][0], n[k][2]]), ["shop", n.shop, ""], ["journal", n.journal, ""], ["about", n.about, ""], ["contact", n.contact, ""]];
  return `<a class="skip" href="#main">${esc(t.ui.skip)}</a>
<header class="hdr">
  <div class="wrap">
    <a class="brand" href="${path(t, "home")}" aria-label="${BRAND} — ${esc(t.ui.home)}">${LOGO()}<span class="sub" aria-hidden="true">DIGITAL</span></a>
    <nav class="nav" aria-label="${esc(t.ui.mainNav)}">
      <a href="${path(t, "work")}"${cur("work")}>${esc(n.work)}</a>
      <div class="dd${svcActive}" data-dd>
        <button type="button" aria-expanded="false" aria-haspopup="true">${esc(t.ui.services)} <span class="chev">${icon("chev", 14, 2)}</span></button>
        <div class="dd-menu">${svc}</div>
      </div>
      <a href="${path(t, "shop")}"${cur("shop")}>${esc(n.shop)}</a>
      <a href="${path(t, "journal")}"${cur("journal")}>${esc(n.journal)}</a>
      <a href="${path(t, "about")}"${cur("about")}>${esc(n.about)}</a>
      <a href="${path(t, "contact")}"${cur("contact")}>${esc(n.contact)}</a>
    </nav>
    <div class="hdr-r">
      <div class="dd" data-dd>
        <button type="button" class="lang-btn" aria-expanded="false" aria-haspopup="true" aria-label="${esc(t.ui.language)}: ${esc(LANGS.find((l) => l.code === t.lang).native)}"><i aria-hidden="true"></i>${t.lang.toUpperCase()}<span class="chev">${icon("chev", 13, 2)}</span></button>
        <div class="dd-menu r lang-menu">${langs}</div>
      </div>
      <a class="btn btn-lime btn-sm" href="${path(t, "contact")}">${esc(t.ui.startProject)}</a>
      <button type="button" class="burger" aria-expanded="false" aria-controls="mnav" aria-label="${esc(t.ui.menu)}"><span></span></button>
    </div>
  </div>
</header>
<div class="mnav" id="mnav" aria-hidden="true">
  <ul>${mItems.map(([k, label, g], i) => `<li style="--i:${i}"><a href="${path(t, k)}">${esc(label)}<small>${esc(g)}</small></a></li>`).join("")}</ul>
  <div class="mfoot" style="--i:${mItems.length}">
    <div class="mlangs" role="group" aria-label="${esc(t.ui.language)}">${mlangs}</div>
    <a class="btn btn-lime" href="${path(t, "contact")}">${esc(t.ui.startProject)}<span class="arr">${icon("arrow", 14, 2)}</span></a>
  </div>
</div>`;
}

function footer(t, alt) {
  const f = t.footer, n = t.nav;
  const flangs = langLinks(t, alt).map(({ l, cur, href, dis }) =>
    `<a href="${href}" lang="${l.code}" hreflang="${l.code}" data-lang="${l.code}"${cur ? ' aria-current="true"' : ""}${dis}>${l.code.toUpperCase()}</a>`).join("");
  return `<footer class="ftr">
  <div class="wrap top">
    <div class="ftr-brand">
      <a class="brand" href="${path(t, "home")}" aria-label="${BRAND} — ${esc(t.ui.home)}">${LOGO()}<span class="sub" aria-hidden="true">DIGITAL</span></a>
      <p class="tagline">${esc(TAGLINE)}</p>
      <p class="pos">${esc(f.pos)}</p>
      <p class="contact small">${esc(f.email)}: <a href="mailto:info@lexoradigital.com">info@lexoradigital.com</a></p>
    </div>
    <div><h4>${esc(f.studio)}</h4><ul>
      <li><a href="${path(t, "work")}">${esc(n.work)}</a></li>
      <li><a href="${path(t, "shop")}">${esc(n.shop)}</a></li>
      <li><a href="${path(t, "journal")}">${esc(n.journal)}</a></li>
      <li><a href="${path(t, "about")}">${esc(n.about)}</a></li>
      <li><a href="${path(t, "contact")}">${esc(n.contact)}</a></li></ul></div>
    <div><h4>${esc(f.services)}</h4><ul>${SERVICES.map((k) => `<li><a href="${path(t, k)}">${esc(n[k][0])}</a></li>`).join("")}</ul></div>
    <div><h4>${esc(f.legal)}</h4><ul>
      <li><a href="${path(t, "privacy")}">${esc(f.privacy)}</a></li>
      <li><a href="${path(t, "cookies")}">${esc(f.cookies)}</a></li>
      <li><a href="${path(t, "imprint")}">${esc(f.imprint)}</a></li>
      <li><a href="${path(t, "accessibility")}">${esc(f.accessibility)}</a></li>
      <li><button type="button" data-privacy-open>${esc(f.settings)}</button></li></ul></div>
  </div>
  <div class="wrap bot">
    <span>© <span data-year>${new Date().getFullYear()}</span> ${BRAND}</span>
    <span class="hide-s">${esc(TAGLINE)}</span>
    <div class="flangs" role="group" aria-label="${esc(f.langs)}">${flangs}</div>
  </div>
</footer>
${privacyDialog(t)}`;
}

function privacyDialog(t) {
  const d = t.privacyDialog;
  return `<dialog class="pdlg" id="privacy-dialog" aria-labelledby="pdlg-t">
  <div class="in">
    <h2 id="pdlg-t">${esc(d.title)}</h2>
    <p>${esc(d.p)}</p>
    <div class="rows">${d.rows.map(([a, b]) => `<div class="row"><b>${esc(a)}</b><span>${esc(b)}</span></div>`).join("")}</div>
    <p>${esc(d.pref)}</p>
    <p class="small" data-pref-state data-set="${esc(d.prefSet)}" data-none="${esc(d.prefNone)}">${esc(d.prefNone)}</p>
    <div class="act">
      <button type="button" class="btn btn-ghost btn-sm" data-clear>${esc(d.clear)}</button>
      <a class="btn btn-ghost btn-sm" href="${path(t, "cookies")}">${esc(d.more)}</a>
      <button type="button" class="btn btn-lime btn-sm" data-close>${esc(d.close)}</button>
    </div>
  </div>
</dialog>`;
}

// Alt texts for images that used alt="" (search engines report empty alts as missing)
const ALTS = {
  web: { en: "Illustration: website layout, design tools and pen", de: "Illustration: Website-Layout, Designwerkzeuge und Stift", nl: "Illustratie: websitelay-out, ontwerptools en pen", es: "Ilustración: diseño de una web, herramientas de diseño y pluma", hr: "Ilustracija: izgled web stranice, alati za dizajn i olovka" },
  compliance: { en: "Illustration: globe with EU shield, scales of justice, privacy lock and cookie settings", de: "Illustration: Globus mit EU-Schild, Waage, Datenschutz-Schloss und Cookie-Einstellungen", nl: "Illustratie: wereldbol met EU-schild, weegschaal, privacyslot en cookie-instellingen", es: "Ilustración: globo con escudo de la UE, balanza, candado de privacidad y ajustes de cookies", hr: "Ilustracija: globus sa štitom EU-a, vagom, lokotom privatnosti i postavkama kolačića" },
  translation: { en: "Illustration: globe with British, German, Dutch, Croatian and Spanish flags and translation icons", de: "Illustration: Globus mit britischer, deutscher, niederländischer, kroatischer und spanischer Flagge und Übersetzungssymbolen", nl: "Illustratie: wereldbol met Britse, Duitse, Nederlandse, Kroatische en Spaanse vlag en vertaalpictogrammen", es: "Ilustración: globo con banderas británica, alemana, neerlandesa, croata y española e iconos de traducción", hr: "Ilustracija: globus s britanskom, njemačkom, nizozemskom, hrvatskom i španjolskom zastavom te ikonama prijevoda" },
  planet: { en: "Glowing green globe", de: "Leuchtender grüner Globus", nl: "Gloeiende groene wereldbol", es: "Globo verde luminoso", hr: "Svjetleći zeleni globus" },
  founder: "Goran Kolouh", notion: "Notion"
};
function fillAlts(html, lang) {
  return html.replace(/<img\b[^>]*>/g, (tag) => {
    if (!/\salt=""/.test(tag)) return tag;
    const m = tag.match(/\/assets\/img\/(?:art|shop)\/([a-z]+)/); const a = m && ALTS[m[1]];
    const txt = a ? (typeof a === "string" ? a : a[lang] || a.en) : null;
    return txt ? tag.replace(/\salt=""/, ` alt="${esc(txt)}"`) : tag;
  });
}
export function page(o) { return fillAlts(pageRaw(o), o.t.lang); }

function pageRaw({ t, key, title, desc, body, globe = false, noindex = false, alt, langs = null, ld = null, ogType = "website", og = null }) {
  const altFn = alt || ((code) => `/${code}/${t.__all[code].slugs[key] ?? ""}`);
  const selfPath = altFn(t.lang);
  const alts = readyLangs().filter((l) => !langs || langs.includes(l.code)).map((l) => `<link rel="alternate" hreflang="${l.code}" href="${abs(altFn(l.code))}">`).join("\n");
  const xdef = key === "home" ? `\n<link rel="alternate" hreflang="x-default" href="${SITE_URL}/${DEFAULT_LANG}/">` : "";
  const org = key === "home" ? {
    "@context": "https://schema.org", "@type": "Organization", "@id": SITE_URL + "/#organization",
    name: BRAND, url: SITE_URL + "/", logo: SITE_URL + "/assets/img/lexora-logo-512.png", image: SITE_URL + "/assets/img/og-image.jpg",
    slogan: TAGLINE, description: desc, email: "info@lexoradigital.com",
    disambiguatingDescription: "Independent European digital studio at lexoradigital.com for websites, GDPR and cookie compliance, legal and business translation (EN, DE, NL, ES, HR) and design. Not affiliated with any other company or product named Lexora.",
    foundingDate: "2026-10",
    knowsAbout: ["Web design", "Web development", "GDPR", "Cookie consent", "EU AI Act", "Digital Services Act", "Pay transparency", "Legal translation", "Business translation"],
    areaServed: { "@type": "Place", name: "Europe" },
    knowsLanguage: readyLangs().map((l) => l.code),
    sameAs: ORG_PROFILES,
    founder: { "@type": "Person", "@id": SITE_URL + "/#founder", name: FOUNDER.name, jobTitle: FOUNDER.jobTitle, url: FOUNDER.url, sameAs: FOUNDER.profiles }
  } : null;
  const site = key === "home" ? {
    "@context": "https://schema.org", "@type": "WebSite", "@id": SITE_URL + "/#website", name: BRAND, url: SITE_URL + "/",
    inLanguage: readyLangs().map((l) => l.code), publisher: { "@id": SITE_URL + "/#organization" }
  } : null;
  const jsonld = [org, site, ld].filter(Boolean).map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n");
  const formCfg = `<script>window.LEXORA_FORMS=${JSON.stringify(FORMS)};window.LEXORA_I18N=${JSON.stringify(t.form.js)};</script>`;
  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="color-scheme" content="dark">
<style>html,body{background:#050605}</style>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${abs(selfPath)}">\n${alts}${xdef}`}
<meta name="theme-color" content="#050605">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${BRAND}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${abs(selfPath)}">
<meta property="og:image" content="${SITE_URL}${og ? og.src : "/assets/img/og-image.jpg"}">
<meta property="og:image:width" content="${og ? og.w : 1200}">
<meta property="og:image:height" content="${og ? og.h : 630}">
<meta property="og:locale" content="${t.locale}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preload" href="/assets/fonts/sora-var.woff" as="font" type="font/woff" crossorigin>
<link rel="preload" href="/assets/fonts/inter-400.woff" as="font" type="font/woff" crossorigin>
<script>document.documentElement.classList.add("js")</script>
<link rel="stylesheet" href="/assets/css/site.css?v=${V}">
${jsonld}
</head>
<body>
${header(t, key, altFn)}
<main id="main">
${body}
</main>
${footer(t, altFn)}
${formCfg}
<script src="/assets/js/site.js?v=${V}" defer></script>
</body>
</html>`;
}

/* The Lexora planet: video when one is configured (public/assets/video), otherwise the still image
   animated with GPU-friendly CSS/SVG (transform, opacity) — smooth on every device. */
export function globeCanvas(opts = {}) {
  const v = PLANET_VIDEO;
  if (v.mp4) {
    // Video planet: 1000×720 seamless loop; the globe is cropped top/bottom in the source, so edges fade out.
    return `<div class="planet has-video${opts.cls ? " " + opts.cls : ""}" aria-hidden="true">
  <span class="pl-glow"></span>
  <video class="pl-vid" muted loop playsinline ${opts.lazy ? 'preload="none" data-lazy' : 'autoplay preload="auto"'} poster="/assets/img/art/planet-poster${opts.lazy ? "-640" : ""}.webp" width="1000" height="720" data-planet-video>
    ${v.mobileWebm ? `<source src="${v.mobileWebm}" type="video/webm" media="(max-width: 760px)">` : ""}${v.mobile ? `<source src="${v.mobile}" type="video/mp4" media="(max-width: 760px)">` : ""}${v.webm ? `<source src="${v.webm}" type="video/webm">` : ""}<source src="${v.mp4}" type="video/mp4">
  </video>
</div>`;
  }
  const media = `<img class="pl-media pl-img" src="/assets/img/art/planet-1254.webp" srcset="/assets/img/art/planet-720.webp 720w, /assets/img/art/planet-1254.webp 1254w" sizes="(max-width:760px) 130vw, 70vw" width="1254" height="1254" alt="" decoding="async"${opts.lazy ? ' loading="lazy"' : ' fetchpriority="high"'}>`;
  const pulses = opts.quiet ? "" : [[58.6, 24], [60.8, 22.6], [63.8, 23], [57.8, 29.5], [65, 26.2]]
    .map(([x, y], i) => `<span class="pl-pulse" style="left:${x}%;top:${y}%;--d:${i * 1.3}s"></span>`).join("");
  const orbit = (rx, ry, rot, dur, delay) => `<g transform="rotate(${rot})"><ellipse rx="${rx}" ry="${ry}" class="pl-orb"/><circle r="1.1" class="pl-dot"><animateMotion dur="${dur}s" begin="${delay}s" repeatCount="indefinite" path="M${rx},0 A${rx},${ry} 0 1,1 ${-rx},0 A${rx},${ry} 0 1,1 ${rx},0"/></circle></g>`;
  return `<div class="planet${opts.cls ? " " + opts.cls : ""}" aria-hidden="true">
  <span class="pl-glow"></span>
  <div class="pl-body">${media}<span class="pl-sweep"></span>${pulses}</div>
  ${opts.quiet ? "" : `<svg class="pl-orbits" viewBox="-100 -100 200 200" fill="none">${orbit(62, 18, -16, 22, 0)}${orbit(56, 26, 24, 31, -9)}</svg>`}
</div>`;
}
