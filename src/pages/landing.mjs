// Landing page for ads and social posts: one focused page per language at /<lang>/eu-compliance-kits/
import { esc, fmt, icon } from "../lib.mjs";
import { SHOP, SITE_URL } from "../config.mjs";
import { pageHero, head, features, steps, faq, band, disclaimer } from "../components.mjs";
import { kitCards, shopPrices } from "./inner.mjs";

const sec = (inner, cls = "", id = "") => `<section class="section ${cls}"${id ? ` aria-labelledby="${id}"` : ""}><div class="wrap">${inner}</div></section>`;

export function landing(t) {
  const p = t.pages.kits, s = t.pages.shop, vs = shopPrices(t);
  const [bundle] = SHOP;
  const price = new Intl.NumberFormat(t.locale.replace("_", "-"), { style: "currency", currency: "EUR" }).format(bundle.price);
  const shot = `<figure class="lp-shot"><img src="/assets/img/shop/lp-preview-900.webp" srcset="/assets/img/shop/lp-preview-900.webp 900w, /assets/img/shop/lp-preview-1600.webp 1600w" sizes="(max-width:960px) 92vw, 46vw" width="1600" height="1000" alt="${esc(p.hero.alt)}" fetchpriority="high" decoding="async"></figure>`;
  const list = (items) => `<ul class="tick">${items.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul>`;
  return [
    pageHero({ label: p.hero.label, glyph: "§", h1: p.hero.h1, lead: p.hero.lead, aside: shot,
      actions: [{ href: "#bundle", label: `${p.hero.cta1} · ${price}`, primary: true }, { href: "#kits", label: p.hero.cta2 }],
      extra: `<ul class="points rise d4">${p.hero.points.map((x) => `<li>${icon("check", 16, 2)}${esc(x)}</li>`).join("")}</ul>` }),
    sec(`${head({ label: p.why.label, h2: p.why.h2, id: "l1" })}${features(p.why.items, 3)}`, "rule", "l1"),
    `<section class="section rule shop-kits" id="kits" aria-labelledby="l2"><div class="wrap">
      ${head({ label: p.kits.label, h2: p.kits.h2, lead: vs(p.kits.lead), id: "l2" })}
      ${kitCards(t)}
    </div></section>`,
    sec(`${head({ label: p.inside.label, h2: p.inside.h2, id: "l3" })}${features(p.inside.items, 4)}`, "trust", "l3"),
    sec(`${head({ label: p.eds.label, h2: p.eds.h2, lead: p.eds.lead, id: "l4" })}
      <div class="bounds lp-eds reveal"><div><h3><img src="/assets/img/shop/notion-64.png" width="62" height="64" alt="">${esc(p.eds.notion.t)}</h3>${list(p.eds.notion.list)}</div>
      <div><h3>${icon("download", 18, 2)} ${esc(p.eds.dl.t)}</h3>${list(p.eds.dl.list)}</div></div>`, "", "l4"),
    sec(`${head({ label: s.how.label, h2: s.how.h2, lead: s.how.lead, id: "l5" })}${steps(s.how.steps)}`, "rule", "l5"),
    sec(`${head({ label: p.who.label, h2: p.who.h2, id: "l6" })}<ul class="lp-who reveal">${p.who.items.map((x) => `<li>${icon("check", 16, 2)}${esc(x)}</li>`).join("")}</ul>`, "", "l6"),
    band({ h2: vs(p.offer.h2), lead: vs(p.offer.lead), actions: [{ href: bundle.url, label: p.offer.ctaNotion, primary: true }, { href: bundle.dl, label: p.offer.ctaDl }] }),
    sec(`<div class="split">
      <div><h2 class="h2 reveal" id="l7">${fmt(p.faqH2)}</h2></div>
      ${faq(s.faq.items)}</div>`, "rule", "l7"),
    `<div class="wrap fine">${disclaimer(s.disclaimer)}</div>`
  ].join("\n");
}

/* schema.org: the six products with both editions as offers */
export function landingLd(t) {
  const s = t.pages.shop;
  return {
    "@context": "https://schema.org", "@type": "ItemList", name: t.pages.kits.meta.title,
    itemListElement: SHOP.map((x, i) => ({
      "@type": "ListItem", position: i + 1,
      item: {
        "@type": "Product", name: s.items[x.key].t, description: s.items[x.key].p.replace(/[*~]/g, ""),
        image: `${SITE_URL}/assets/img/shop/${x.img || x.key}-1600.webp`, brand: { "@type": "Brand", name: "Lexora Digital" },
        offers: [x.url, x.dl].map((u) => ({ "@type": "Offer", price: x.price.toFixed(2), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: u }))
      }
    }))
  };
}
