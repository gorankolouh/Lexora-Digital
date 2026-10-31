// Kit detail pages: /<lang>/<templates slug>/<kit slug>/ — one per kit, in the languages that have text in src/i18n/kitpages.mjs
import { esc, fmt, path, abs, icon } from "../lib.mjs";
import { SHOP, SITE_URL } from "../config.mjs";
import { pageHero, head, faq, band, disclaimer } from "../components.mjs";
import { shopPrices } from "./inner.mjs";
import KP from "../i18n/kitpages.mjs";

const sec = (inner, cls = "", id = "") => `<section class="section ${cls}"${id ? ` aria-labelledby="${id}"` : ""}><div class="wrap">${inner}</div></section>`;
const money = (t, n) => new Intl.NumberFormat(t.locale.replace("_", "-"), { style: "currency", currency: "EUR" }).format(n);

export const kitText = (lang, key) => KP[lang]?.kits?.[key] || null;
export const kitHref = (t, key) => { const k = kitText(t.lang, key); return k ? `${path(t, "shop")}${k.slug}/` : null; };
/* kit keys that get a detail page (the bundle stays on the Templates page) */
export const KIT_KEYS = SHOP.filter((x) => x.key !== "bundle").map((x) => x.key);
export const kitLangs = (key) => Object.keys(KP).filter((l) => KP[l].kits[key]);

const editions = (t, x, it) => {
  const p = t.pages.shop;
  return `<div class="eds"><a class="btn btn-lime" href="${x.url}" rel="noopener" aria-label="${esc(`${p.buy}: ${it.t}, ${p.edNotion} (${money(t, x.price)})`)}"><img src="/assets/img/shop/notion-64.png" width="62" height="64" alt="">${esc(p.edNotion)}</a><a class="btn btn-ghost" href="${x.dl}" rel="noopener" aria-label="${esc(`${p.buy}: ${it.t}, ${p.edDl} (${money(t, x.price)})`)}">${icon("download", 16, 2)}${esc(p.edDl)}</a></div>`;
};

export function kitPage(t, key) {
  const k = kitText(t.lang, key), u = KP[t.lang].ui, s = t.pages.shop, vs = shopPrices(t);
  const x = SHOP.find((y) => y.key === key), it = s.items[key], [bundle] = SHOP;
  const crumbs = [[path(t, "home"), t.ui.home], [path(t, "shop"), t.nav.shop], [null, it.t]];
  const cover = `<figure class="kit-cover"><img src="/assets/img/shop/ed/${x.img || x.key}-900.webp" srcset="/assets/img/shop/ed/${x.img || x.key}-900.webp 900w, /assets/img/shop/ed/${x.img || x.key}-1600.webp 1600w" sizes="(max-width:960px) 92vw, 46vw" width="1600" height="893" alt="${esc(it.t)}" fetchpriority="high" decoding="async"></figure>`;
  const facts = `<dl class="kit-facts rise d4">
      <div><dt>${esc(u.price)}</dt><dd><b>${esc(money(t, x.price))}</b></dd></div>
      <div><dt>${esc(u.format)}</dt><dd>${esc(u.formatVal)}</dd></div>
      <div><dt>${esc(u.lang)}</dt><dd>${esc(u.langVal)}</dd></div>
      <div><dt>${esc(u.access)}</dt><dd>${esc(u.accessVal)}</dd></div>
    </dl>`;
  const others = KIT_KEYS.filter((y) => y !== key && kitText(t.lang, y));
  return [
    pageHero({ label: k.label, glyph: "§", h1: k.h1, lead: k.lead, crumbs, aside: cover, extra: `<div class="kit-buy rise d4">${editions(t, x, it)}</div>${facts}` }),
    sec(`${head({ label: it.s, h2: u.insideH, id: "k1" })}
      <ul class="kit-inside reveal">${k.inside.map((l) => `<li>${icon("check", 16, 2)}<span>${fmt(l)}</span></li>`).join("")}</ul>`, "rule", "k1"),
    sec(`${head({ h2: u.rulesH, id: "k2" })}
      <ul class="feat c3 reveal">${k.rules.map((r) => `<li><h3>${esc(r.t)}</h3><p>${fmt(r.p)}</p></li>`).join("")}</ul>`, "trust", "k2"),
    sec(`<div class="split"><div><h2 class="h2 reveal" id="k3">${esc(u.whoH)}</h2></div>
      <ul class="lp-who reveal">${k.who.map((w) => `<li>${icon("check", 16, 2)}${esc(w)}</li>`).join("")}</ul></div>`, "", "k3"),
    sec(`${head({ h2: u.edH, lead: u.edLead, id: "k4" })}<div class="shop-kits">${editions(t, x, it)}</div>`, "rule", "k4"),
    sec(`<div class="split"><div><h2 class="h2 reveal" id="k5">${esc(u.faqH)}</h2></div>${faq(k.faq)}</div>`, "rule", "k5"),
    others.length ? sec(`${head({ label: u.others, h2: t.nav.shop, id: "k6", plain: true })}
      <ul class="kit-others reveal">${others.map((y) => `<li><a class="link" href="${kitHref(t, y)}">${esc(s.items[y].t)} ${icon("arrow", 15, 1.8)}</a><span class="small dim">${esc(s.items[y].s)}</span></li>`).join("")}</ul>`, "rule", "k6") : "",
    band({ h2: u.bundleH, lead: vs(u.bundleLead), actions: [{ href: `${path(t, "shop")}#bundle`, label: u.bundleCta, primary: true }, { href: path(t, "shop"), label: u.back }] }),
    `<div class="wrap fine">${disclaimer(s.disclaimer)}</div>`
  ].join("\n");
}

export function kitLd(t, key) {
  const k = kitText(t.lang, key), s = t.pages.shop, x = SHOP.find((y) => y.key === key), it = s.items[key];
  const url = abs(kitHref(t, key));
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Product", "@id": url + "#product", name: it.t, description: k.meta.desc, url,
        image: `${SITE_URL}/assets/img/shop/ed/${x.img || x.key}-1600.webp`, category: it.s, inLanguage: t.lang,
        brand: { "@type": "Brand", name: "Lexora Digital" }, manufacturer: { "@id": SITE_URL + "/#organization" },
        offers: [[x.url, s.edNotion], [x.dl, s.edDl]].map(([u, n]) => ({ "@type": "Offer", name: n, price: x.price.toFixed(2), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: u, seller: { "@id": SITE_URL + "/#organization" } })) },
      { "@type": "BreadcrumbList", itemListElement: [[path(t, "home"), t.ui.home], [path(t, "shop"), t.nav.shop], [kitHref(t, key), it.t]]
          .map(([h, n], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: abs(h) })) }
    ]
  };
}

/* small box under a journal article pointing to the matching kit (or the Templates page) */
export function kitBox(t, key) {
  const s = t.pages.shop, it = s.items[key], x = SHOP.find((y) => y.key === key);
  if (!it || !x) return "";
  const href = kitHref(t, key) || path(t, "shop");
  return `<a class="checkcard kit-box" href="${href}"><span class="ml">${esc(t.nav.shop)} · ${esc(it.s)}</span><b>${esc(it.t)} · ${esc(money(t, x.price))}</b><span class="small dim">${fmt(it.p)}</span><span class="go" aria-hidden="true">${icon("arrow", 18, 1.8)}</span></a>`;
}
/* UI strings for the Templates page cards (falls back to English) */
export const KIT_PAGES_UI = (t) => (KP[t.lang] || KP.en).ui;
