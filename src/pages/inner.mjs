// Inner pages — all built from the shared components so every page follows one system.
import { esc, fmt, path, icon } from "../lib.mjs";
import { SHOP, SITE_URL, CONTACT } from "../config.mjs";
import { articleCard } from "./article.mjs";
import { kitHref, KIT_PAGES_UI } from "./kit.mjs";
import { pageHero, head, features, steps, faq, band, matrix, disclaimer, table, prose, form, ml, btn, art } from "../components.mjs";

const sec = (inner, cls = "", id = "") => `<section class="section ${cls}"${id ? ` aria-labelledby="${id}"` : ""}><div class="wrap">${inner}</div></section>`;
const crumbsFor = (t, label) => [[path(t, "home"), t.ui.home], [null, label]];

/* ---------------- forms ---------------- */
export function contactForm(t) {
  const c = t.form.contact;
  return form(t, {
    id: "contact", title: c.title, intro: c.intro, submit: c.submit, consent: c.consent, success: c.success, subject: c.subject,
    fields: [
      { name: "name", label: c.f.name, required: true, autocomplete: "name" },
      { name: "email", label: c.f.email, type: "email", required: true, autocomplete: "email", validate: "email" },
      { name: "company", label: c.f.company, autocomplete: "organization" },
      { name: "language", label: c.f.language, type: "select", options: [["en", "English"], ["de", "Deutsch"], ["nl", "Nederlands"], ["es", "Español"], ["hr", "Hrvatski"]] },
      { name: "service", label: c.f.service, type: "select", required: true, placeholder: c.f.choose, options: c.services, wide: true },
      { name: "budget", label: c.f.budget, type: "select", placeholder: c.f.choose, options: c.budgets, wide: true },
      { name: "message", label: c.f.message, type: "textarea", required: true, rows: 6, placeholder: c.f.messagePh, wide: true }
    ]
  });
}
export function checkForm(t) {
  const c = t.form.check;
  return form(t, {
    id: "check", title: c.title, intro: c.intro, submit: c.submit, consent: c.consent, success: c.success, subject: c.subject,
    fields: [
      { name: "website", label: c.f.website, required: true, inputmode: "url", autocomplete: "url", placeholder: "example.com", validate: "url", wide: true },
      { name: "email", label: c.f.email, type: "email", required: true, autocomplete: "email", validate: "email", wide: true },
      { name: "country", label: c.f.country, type: "select", required: true, placeholder: c.f.choose, options: c.countries },
      { name: "platform", label: c.f.platform, type: "select", placeholder: c.f.choose, options: c.platforms },
      { name: "message", label: c.f.message, type: "textarea", rows: 3, wide: true }
    ]
  });
}

/* ---------------- Web ---------------- */
export function web(t) {
  const p = t.pages.web;
  const plan = (x, hl) => `<article class="plan${hl ? " hl" : ""} reveal">
      <header><p class="ml plain">${esc(x.name)}</p><p class="price"><b>${esc(x.price)}</b><span>${esc(x.unit)}</span></p><p class="pdesc">${fmt(x.p)}</p></header>
      <div class="pcols"><div><h4>${esc(p.pricing.incl)}</h4><ul class="tick">${x.incl.map((l) => `<li>${fmt(l)}</li>`).join("")}</ul></div>
      ${x.extra ? `<div><h4>${esc(p.pricing.extra)}</h4><ul class="tick minus">${x.extra.map((l) => `<li>${fmt(l)}</li>`).join("")}</ul></div>` : ""}</div>
      <footer>${btn(`${path(t, "contact")}?service=${x.svc}`, x.cta, hl)}</footer>
    </article>`;
  return [
    pageHero({ label: p.hero.label, glyph: "</>", h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.web[0]), artName: "web",
      actions: [{ href: `${path(t, "contact")}?service=web`, label: p.hero.cta1, primary: true }, { href: path(t, "work"), label: p.hero.cta2 }] }),
    sec(`${head({ label: p.what.label, h2: p.what.h2, lead: p.what.lead, id: "w1" })}${features(p.what.items, 3)}`, "rule", "w1"),
    sec(`${head({ label: p.pricing.label, h2: p.pricing.h2, lead: p.pricing.lead, id: "w2" })}<div class="plans">${plan(p.pricing.starter, true)}${plan(p.pricing.custom, false)}</div>${disclaimer(p.pricing.note)}`, "trust", "w2"),
    sec(`${head({ label: t.home.process.label, h2: t.home.process.h2, lead: t.home.process.lead, id: "w3" })}${steps(t.home.process.steps)}`, "", "w3"),
    sec(`${head({ label: p.after.label, h2: p.after.h2, lead: p.after.lead, id: "w4" })}${features(p.after.items, 3)}`, "rule", "w4"),
    workStrip(t, p.work),
    band({ h2: p.band.h2, lead: p.band.lead, actions: [{ href: `${path(t, "contact")}?service=web`, label: t.ui.startProject, primary: true }, { href: path(t, "check"), label: t.nav.check[0] }] })
  ].join("\n");
}

function workStrip(t, w) {
  const items = t.home.work.items;
  return sec(`${head({ label: w.label, h2: w.h2, id: "ws" })}
    <div class="strip">${items.map((x, i) => `<article class="proj s reveal${i ? ` d${Math.min(i, 2)}` : ""}">
      <div class="media"><span class="tag">${esc(t.home.work.badge)}</span><img src="/assets/img/work/${x.img}-card-900.webp" width="900" height="675" alt="${esc(x.alt)}" loading="lazy" decoding="async"></div>
      <div class="meta"><div><p class="cat">${esc(x.cat)}</p><h3 class="h3">${esc(x.title)}</h3></div><span class="go" aria-hidden="true">${icon("arrowUR", 18, 1.8)}</span></div>
      <a href="${path(t, "work")}${x.slug}/" aria-label="${esc(t.home.work.cta)}: ${esc(x.title)}"></a></article>`).join("")}</div>`, "rule", "ws");
}

/* ---------------- Digital compliance (Law) ---------------- */
export function compliance(t) {
  const p = t.pages.compliance;
  return [
    pageHero({ label: p.hero.label, glyph: "§", h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.compliance[0]), artName: "compliance",
      actions: [{ href: path(t, "check"), label: p.hero.cta1, primary: true }, { href: `${path(t, "contact")}?service=compliance`, label: p.hero.cta2 }] }),
    sec(`${head({ label: p.help.label, h2: p.help.h2, lead: p.help.lead, id: "c1" })}${features(p.help.items, 3)}`, "rule", "c1"),
    sec(`${head({ label: t.home.trust.label, h2: p.overview.h2, lead: p.overview.lead, id: "c2" })}${matrix(t.home.trust)}`, "trust", "c2"),
    sec(`${head({ label: p.national.label, h2: p.national.h2, lead: p.national.lead, id: "c3" })}${table(p.national.head, p.national.rows, p.national.h2)}${disclaimer(p.national.note)}`, "", "c3"),
    sec(`${head({ label: p.bounds.label, h2: p.bounds.h2, id: "c4" })}
      <div class="bounds reveal"><div><h3>${icon("check", 18, 2)} ${esc(p.bounds.doT)}</h3><ul class="tick">${p.bounds.do.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div>
      <div><h3 class="no">${esc(p.bounds.dontT)}</h3><ul class="tick minus">${p.bounds.dont.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div></div>`, "rule", "c4"),
    band({ label: t.nav.check[0], h2: p.band.h2, lead: p.band.lead, actions: [{ href: path(t, "check"), label: p.band.cta, primary: true }, { href: path(t, "journal"), label: t.nav.journal }] })
  ].join("\n");
}

/* ---------------- GDPR, Cookies & Co. check ---------------- */
export function check(t) {
  const p = t.pages.check;
  const aside = `<div class="formcard" id="check-form">${checkForm(t)}</div>`;
  const ex = p.example;
  return [
    pageHero({ label: p.hero.label, glyph: "✓", h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.check[0]), id: "check-h",
      aside, extra: `<ul class="points rise d4">${p.hero.points.map((x) => `<li>${icon("check", 16, 2)}${esc(x)}</li>`).join("")}</ul>` }),
    sec(`<div class="split art-split"><div>${ml(p.areas.label)}<h2 class="h2 reveal" id="k1" style="margin-top:24px">${fmt(p.areas.h2)}</h2><p class="lead reveal d1" style="margin-top:24px">${fmt(p.areas.lead)}</p></div>${art("compliance", "reveal")}</div>${features(p.areas.items, 4)}`, "rule", "k1"),
    sec(`${head({ label: p.how.label, h2: p.how.h2, lead: p.how.lead, id: "k2" })}${steps(p.how.steps)}`, "", "k2"),
    sec(`<div class="split">
      <div>${ml(ex.label)}<h2 class="h2 reveal" id="k3" style="margin-top:24px">${fmt(ex.h2)}</h2><p class="lead reveal d1" style="margin-top:24px">${fmt(ex.lead)}</p></div>
      <figure class="report reveal" aria-labelledby="k3">
        <div class="rhead"><span class="mono">${esc(ex.site)}</span><span class="rtag">${esc(ex.tag)}</span></div>
        <ul>${ex.items.map((x) => `<li class="${x.s}"><span class="dot" aria-hidden="true"></span><div><b>${esc(x.t)}</b><p>${esc(x.p)}</p></div><span class="st">${esc(ex.status[x.s])}</span></li>`).join("")}</ul>
        <figcaption>${esc(ex.note)}</figcaption>
      </figure></div>`, "trust", "k3"),
    sec(`${head({ label: p.pricing.label, h2: p.pricing.h2, lead: p.pricing.lead, id: "k4" })}
      <div class="plans">${p.pricing.plans.map((x, i) => `<article class="plan${i ? " hl" : ""} reveal">
        <header><p class="ml plain">${esc(x.name)}</p><p class="price"><b>${esc(x.price)}</b><span>${esc(x.unit)}</span></p><p class="pdesc">${fmt(x.p)}</p></header>
        <div class="pcols one"><ul class="tick">${x.incl.map((l) => `<li>${fmt(l)}</li>`).join("")}</ul></div>
        <footer>${i ? btn("#check-form", x.cta, true) : btn("#check-form", x.cta, false)}</footer></article>`).join("")}</div>
      ${disclaimer(p.pricing.scope)}`, "rule", "k4"),
    sec(`${head({ label: p.countries.label, h2: p.countries.h2, lead: p.countries.lead, id: "k5" })}${table(t.pages.compliance.national.head, t.pages.compliance.national.rows, p.countries.h2)}`, "", "k5"),
    sec(`<div class="split">
      <div>${ml(p.faq.label)}<h2 class="h2 reveal" id="k6" style="margin-top:24px">${fmt(p.faq.h2)}</h2></div>
      ${faq(p.faq.items)}</div>`, "rule", "k6"),
    band({ h2: p.band.h2, lead: p.band.lead, actions: [{ href: "#check-form", label: p.band.cta, primary: true }, { href: path(t, "compliance"), label: t.nav.compliance[0] }] }),
    `<div class="wrap fine">${disclaimer(p.disclaimer)}</div>`
  ].join("\n");
}

/* ---------------- Translation (Language) ---------------- */
export function language(t) {
  const p = t.pages.language;
  const L = p.pairs.langs;
  const grid = `<div class="pairs reveal" role="img" aria-label="${esc(p.pairs.aria)}">
    <div class="pg" style="--n:${L.length}">
      <span></span>${L.map(([c]) => `<span class="ph-h">${c}</span>`).join("")}
      ${L.map(([c]) => `<span class="ph-v">${c}</span>${L.map(([d]) => `<span class="cell${c === d ? " self" : ""}"></span>`).join("")}`).join("")}
    </div>
    <ul class="pl">${L.map(([c, n, d]) => `<li><span class="mono">${c}</span><b>${esc(n)}</b><span>${esc(d)}</span></li>`).join("")}</ul>
  </div>`;
  return [
    pageHero({ label: p.hero.label, glyph: "⇄", h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.language[0]), artName: "translation",
      actions: [{ href: `${path(t, "contact")}?service=translation`, label: p.hero.cta1, primary: true }, { href: "#pairs", label: p.hero.cta2 }] }),
    `<section class="section rule" id="pairs" aria-labelledby="l1"><div class="wrap"><div class="split">
      <div>${ml(p.pairs.label)}<h2 class="h2 reveal" id="l1" style="margin-top:24px">${fmt(p.pairs.h2)}</h2><p class="lead reveal d1" style="margin-top:24px">${fmt(p.pairs.lead)}</p></div>
      ${grid}</div></div></section>`,
    sec(`${head({ label: p.services.label, h2: p.services.h2, lead: p.services.lead, id: "l2" })}${features(p.services.items, 3)}`, "trust", "l2"),
    sec(`<div class="split">
      <div>${ml(p.focus.label)}<h2 class="h2 reveal" id="l3" style="margin-top:24px">${fmt(p.focus.h2)}</h2></div>
      <div class="reveal">${p.focus.p.map((x) => `<p class="body" style="margin-bottom:18px">${fmt(x)}</p>`).join("")}</div></div>`, "", "l3"),
    sec(`${head({ label: p.how.label, h2: p.how.h2, lead: p.how.lead, id: "l4" })}${steps(p.how.steps)}`, "rule", "l4"),
    sec(`<div class="split">
      <div>${ml(p.faq.label)}<h2 class="h2 reveal" id="l5" style="margin-top:24px">${fmt(p.faq.h2)}</h2></div>
      ${faq(p.faq.items)}</div>`, "rule", "l5"),
    band({ h2: p.band.h2, lead: p.band.lead, actions: [{ href: `${path(t, "contact")}?service=translation`, label: p.band.cta, primary: true }, { href: path(t, "web"), label: t.nav.web[0] }] })
  ].join("\n");
}

/* ---------------- Creative ---------------- */
export function creative(t) {
  const p = t.pages.creative;
  return [
    pageHero({ label: p.hero.label, glyph: "Aa", h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.creative[0]),
      actions: [{ href: `${path(t, "contact")}?service=design`, label: p.hero.cta1, primary: true }, { href: path(t, "work"), label: p.hero.cta2 }] }),
    sec(`${head({ label: p.services.label, h2: p.services.h2, lead: p.services.lead, id: "d1" })}${features(p.services.items, 3)}`, "rule", "d1"),
    sec(`<div class="split">
      <div>${ml(p.approach.label)}<h2 class="h2 reveal" id="d2" style="margin-top:24px">${fmt(p.approach.h2)}</h2></div>
      <ul class="values col reveal">${p.approach.items.map(([a, b]) => `<li><b>${esc(a)}</b><span>${fmt(b)}</span></li>`).join("")}</ul></div>`, "trust", "d2"),
    workStrip(t, p.work),
    band({ h2: p.band.h2, lead: p.band.lead, actions: [{ href: `${path(t, "contact")}?service=design`, label: t.ui.startProject, primary: true }] })
  ].join("\n");
}

/* ---------------- Work (portfolio) ---------------- */
export function work(t) {
  const p = t.pages.work, w = t.home.work;
  const cats = [...new Set(w.items.map((x) => x.cat))];
  return [
    pageHero({ label: p.hero.label, h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.work) }),
    `<section class="section rule" aria-label="${esc(p.hero.label)}"><div class="wrap">
      <div class="filters" role="group" aria-label="${esc(p.filter)}">
        <button type="button" aria-pressed="true" data-filter="*">${esc(p.all)} <span>${w.items.length}</span></button>
        ${cats.map((c) => `<button type="button" aria-pressed="false" data-filter="${esc(c)}">${esc(c)} <span>${w.items.filter((x) => x.cat === c).length}</span></button>`).join("")}
      </div>
      <div class="work wgrid" data-grid>${w.items.map((x, i) => `
        <article class="proj ${i === 0 ? "feat" : "s"}" data-cat="${esc(x.cat)}">
          <div class="media"><span class="tag">${esc(w.badge)}</span><img src="/assets/img/work/${x.img}-${i === 0 ? "feat" : "card"}-900.webp" srcset="/assets/img/work/${x.img}-${i === 0 ? "feat" : "card"}-900.webp 900w, /assets/img/work/${x.img}-${i === 0 ? "feat" : "card"}-1600.webp 1600w" sizes="(max-width:960px) 100vw, ${i === 0 ? "64vw" : "48vw"}" width="1600" height="${i === 0 ? 1000 : 1200}" alt="${esc(x.alt)}" loading="${i === 0 ? "eager" : "lazy"}" decoding="async"></div>
          ${i === 0 ? `<div class="side"><p class="num">01 / ${String(w.items.length).padStart(2, "0")}</p><p class="cat" style="margin-top:18px">${esc(x.cat)}</p><h2 class="h3">${esc(x.title)}</h2><p class="body">${esc(x.p)}</p><p class="svc">${x.svc.map(esc).join(" / ")}</p><span class="go" aria-hidden="true">${icon("arrowUR", 18, 1.8)}</span></div>`
            : `<div class="meta"><div><p class="cat">${esc(x.cat)}</p><h2 class="h3">${esc(x.title)}</h2><p class="small dim" style="margin-top:8px;max-width:46ch">${esc(x.p)}</p></div><span class="go" aria-hidden="true">${icon("arrowUR", 18, 1.8)}</span></div>`}
          <a href="${path(t, "work")}${x.slug}/" aria-label="${esc(w.cta)}: ${esc(x.title)} (${esc(w.badge)})"></a>
        </article>`).join("")}
      </div>
      <p class="empty" hidden>${esc(p.empty)}</p>
      <div class="soon reveal"><p class="ml plain">${esc(p.soon.label)}</p><ul>${p.soon.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul><p class="small dim">${esc(p.soon.p)}</p></div>
    </div></section>`,
    band({ h2: p.band.h2, lead: p.band.lead, actions: [{ href: path(t, "contact"), label: t.ui.startProject, primary: true }] })
  ].join("\n");
}

/* ---------------- Case study ---------------- */
export function caseStudy(t, slug) {
  const w = t.home.work, items = w.items, i = items.findIndex((x) => x.slug === slug), x = items[i], c = t.pages.cases[slug], cs = t.pages.caseUi;
  const next = items[(i + 1) % items.length];
  const data = CASES[slug];
  return [
    pageHero({ label: `${w.badge} · ${x.cat}`, h1: x.title, lead: c.lead, crumbs: [[path(t, "home"), t.ui.home], [path(t, "work"), t.nav.work], [null, x.title]],
      actions: [{ href: `${path(t, "contact")}?service=web`, label: cs.cta, primary: true }] }),
    `<section class="section rule cs" aria-label="${esc(cs.overview)}"><div class="wrap">
      <div class="media cs-hero reveal"><img src="/assets/img/work/${x.img}-feat-1600.webp" srcset="/assets/img/work/${x.img}-feat-900.webp 900w, /assets/img/work/${x.img}-feat-1600.webp 1600w" sizes="(max-width:1320px) 100vw, 1220px" width="1600" height="1000" alt="${esc(x.alt)}" decoding="async"></div>
      <dl class="cs-facts reveal">
        <div><dt>${esc(cs.type)}</dt><dd>${esc(w.badge)}</dd></div>
        <div><dt>${esc(cs.sector)}</dt><dd>${esc(x.cat)}</dd></div>
        <div><dt>${esc(cs.services)}</dt><dd>${c.svc.map(esc).join(", ")}</dd></div>
        <div><dt>${esc(cs.lang)}</dt><dd>${esc(c.lang)}</dd></div>
      </dl>
      <div class="cs-body">
        <div class="cs-text reveal">
          <h2 class="h3">${esc(cs.overview)}</h2><p class="body">${fmt(c.overview)}</p>
          <h2 class="h3">${esc(cs.goals)}</h2><ul class="tick">${c.goals.map((g) => `<li>${fmt(g)}</li>`).join("")}</ul>
          <h2 class="h3">${esc(cs.approach)}</h2>${c.approach.map((a) => `<p class="body">${fmt(a)}</p>`).join("")}
        </div>
        <aside class="cs-sys reveal" aria-label="${esc(cs.system)}">
          <p class="ml plain">${esc(cs.palette)}</p>
          <ul class="sw">${data.palette.map((h) => `<li><span style="background:${h}"></span><code>${h}</code></li>`).join("")}</ul>
          <p class="ml plain" style="margin-top:28px">${esc(cs.type2)}</p>
          <ul class="tf">${data.fonts.map(([f, r]) => `<li><b>${esc(f)}</b><span>${esc(cs.roles[r])}</span></li>`).join("")}</ul>
        </aside>
      </div>
      <div class="cs-shots">
        <figure class="media desk reveal"><img src="/assets/img/work/${x.img}-page-1200.webp" width="1200" height="${data.pageH}" alt="${esc(cs.deskAlt.replace("%s", x.title))}" loading="lazy" decoding="async"><figcaption>${esc(cs.desk)}</figcaption></figure>
        <div class="mobs">${[1, 2].map((n) => `<figure class="media mob reveal${n === 2 ? " d1" : ""}"><img src="/assets/img/work/${x.img}-mob${n}.webp" width="600" height="1300" alt="${esc(cs.mobAlt.replace("%s", x.title))}" loading="lazy" decoding="async"></figure>`).join("")}<p class="small dim">${esc(cs.mob)}</p></div>
      </div>
      <p class="cs-note reveal">${esc(cs.note)}</p>
      <a class="cs-next reveal" href="${path(t, "work")}${next.slug}/"><span class="ml plain">${esc(cs.next)}</span><b>${esc(next.title)}</b><span class="go" aria-hidden="true">${icon("arrow", 18, 1.8)}</span></a>
    </div></section>`,
    band({ h2: cs.band.h2, lead: cs.band.lead, actions: [{ href: `${path(t, "contact")}?service=web`, label: t.ui.startProject, primary: true }, { href: path(t, "web"), label: t.nav.web[0] }] })
  ].join("\n");
}
export const CASES = {
  "studio-rosalie": { palette: ["#FFF7F5", "#E8C9C8", "#B66D78", "#702F43", "#351D29"], fonts: [["Playfair Display", "display"], ["Manrope", "body"]], pageH: 2600 },
  "mustermann-sanitaer": { palette: ["#0F2A44", "#42566B", "#F4F7FA", "#E8F2FC", "#F28C28"], fonts: [["Plus Jakarta Sans", "both"]], pageH: 2600 },
  "kfz-werkstatt": { palette: ["#101B2D", "#202833", "#F47B20", "#F1F3F5", "#9BA5B1"], fonts: [["Barlow Condensed", "display"], ["Barlow", "body"]], pageH: 2600 }
};

/* ---------------- Journal ---------------- */
export function journal(t) {
  const p = t.pages.journal, j = t.home.journal;
  return [
    pageHero({ label: p.hero.label, h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.journal) }),
    `<section class="section rule" aria-label="${esc(p.hero.label)}"><div class="wrap">
      <div class="posts">${t.articles.map((a, i) => articleCard(t, a, i, "h2")).join("")}</div>
      <div class="soon reveal"><p class="ml plain">${esc(p.note.label)}</p><p class="body">${fmt(p.note.p)}</p></div>
    </div></section>`,
    band({ h2: p.band.h2, lead: p.band.lead, actions: [{ href: path(t, "check"), label: t.nav.check[0], primary: true }, { href: path(t, "compliance"), label: t.nav.compliance[0] }] })
  ].join("\n");
}
export const JART = [
  `<svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" fill="none" stroke-width="1" aria-hidden="true"><g stroke="rgba(245,247,242,.18)"><circle cx="420" cy="150" r="150"/><circle cx="420" cy="150" r="104"/><circle cx="420" cy="150" r="58"/></g><circle cx="570" cy="150" r="3.5" fill="#B7FF00"/><path d="M0 330H600" stroke="rgba(245,247,242,.1)"/></svg>`,
  `<svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" fill="none" stroke-width="1" aria-hidden="true"><g stroke="rgba(245,247,242,.16)">${Array.from({ length: 12 }, (_, k) => `<path d="M${-60 + k * 56} 450L${180 + k * 40} 0"/>`).join("")}</g><circle cx="452" cy="96" r="3.5" fill="#B7FF00"/></svg>`,
  `<svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" fill="none" stroke-width="1" aria-hidden="true"><g fill="rgba(245,247,242,.22)">${Array.from({ length: 7 }, (_, r) => Array.from({ length: 12 }, (_, c) => `<circle cx="${40 + c * 48}" cy="${40 + r * 48}" r="1.3"/>`).join("")).join("")}</g><circle cx="424" cy="136" r="3.5" fill="#B7FF00"/><path d="M40 136H424" stroke="rgba(183,255,0,.35)"/></svg>`
];

/* ---------------- Templates (Notion kits sold on Gumroad) ----------------
   Buy links are plain links to Gumroad: no Gumroad script, overlay or cookie on this site. */
const money = (t, n) => new Intl.NumberFormat(t.locale.replace("_", "-"), { style: "currency", currency: "EUR" }).format(n);
const shopCover = (x, title, sizes, eager = false) => `<img src="/assets/img/shop/ed/${x.img || x.key}-900.webp" srcset="/assets/img/shop/ed/${x.img || x.key}-900.webp 900w, /assets/img/shop/ed/${x.img || x.key}-1600.webp 1600w" sizes="${sizes}" width="1600" height="893" alt="${esc(title)}"${eager ? "" : ' loading="lazy"'} decoding="async">`;
export function shopPrices(t) {
  const [bundle, ...kits] = SHOP;
  const full = kits.reduce((s, k) => s + k.price, 0);
  return (s) => s.replace("{bundle}", money(t, bundle.price)).replace("{full}", money(t, full));
}
/* Kit cards (bundle feature + five kits), each with its two edition buttons. Used on the Templates page and the landing page. */
export function kitCards(t) {
  const p = t.pages.shop, vs = shopPrices(t);
  const [bundle, ...kits] = SHOP, b = p.items.bundle;
  const buyLabel = (x, it, ed) => `${p.buy}: ${it.t}, ${ed} (${money(t, x.price)})`;
  // two editions per kit: Notion template and Word, Excel & PDF download
  const editions = (x, it) => `<div class="eds"><a class="btn btn-lime btn-sm" href="${x.url}" rel="noopener" aria-label="${esc(buyLabel(x, it, p.edNotion))}"><img src="/assets/img/shop/notion-64.png" width="62" height="64" alt="">${esc(p.edNotion)}</a><a class="btn btn-ghost btn-sm" href="${x.dl}" rel="noopener" aria-label="${esc(buyLabel(x, it, p.edDl))}">${icon("download", 16, 2)}${esc(p.edDl)}</a></div>`;
  const feat = `<article class="proj feat reveal" id="bundle">
        <div class="media">${shopCover(bundle, b.t, "(max-width:960px) 100vw, 64vw", true)}</div>
        <div class="side"><p class="num">${esc(p.num)}</p><p class="cat" style="margin-top:18px">${esc(p.bundleCat)}</p><h3 class="h3">${esc(b.t)}</h3><p class="body">${fmt(b.p)}</p><p class="svc">${esc(vs(p.vs))}</p>${editions(bundle, b)}</div>
      </article>`;
  const cards = kits.map((x, i) => {
    const it = p.items[x.key];
    return `<article class="proj s reveal${i % 3 ? ` d${i % 3}` : ""}">
        <div class="media">${shopCover(x, it.t, "(max-width:960px) 100vw, 33vw")}</div>
        <div class="meta"><div><p class="cat">${esc(it.s)}</p><h3 class="h3">${esc(it.t)}</h3><p class="small dim" style="margin-top:8px;max-width:46ch">${fmt(it.p)}</p><p class="price-line"><b>${esc(money(t, x.price))}</b> · ${esc(p.buy)}</p>${editions(x, it)}${kitHref(t, x.key) ? `<a class="link kit-more" href="${kitHref(t, x.key)}">${esc(KIT_PAGES_UI(t).details)}<span class="sr">: ${esc(it.t)}</span> ${icon("arrow", 15, 1.8)}</a>` : ""}</div></div>
      </article>`;
  }).join("");
  return `${feat}
      <div class="strip">${cards}</div>`;
}
export function shop(t) {
  const p = t.pages.shop, vs = shopPrices(t);
  const [bundle] = SHOP;
  return [
    pageHero({ label: p.hero.label, glyph: "§", h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.shop),
      actions: [{ href: "#bundle", label: `${p.hero.cta1} · ${money(t, bundle.price)}`, primary: true }, { href: "#kits", label: p.hero.cta2 }],
      extra: `<p class="notion-badge rise d4"><img src="/assets/img/shop/notion-128.png" width="123" height="128" alt="">${esc(p.notion)}</p><ul class="points rise d4">${p.hero.points.map((x) => `<li>${icon("check", 16, 2)}${esc(x)}</li>`).join("")}</ul>` }),
    `<section class="section rule shop-kits" id="kits" aria-labelledby="s1"><div class="wrap">
      ${head({ label: p.kits.label, h2: p.kits.h2, lead: p.kits.lead, id: "s1" })}
      ${kitCards(t)}
    </div></section>`,
    sec(`${head({ label: p.how.label, h2: p.how.h2, lead: p.how.lead, id: "s2" })}${steps(p.how.steps)}`, "trust", "s2"),
    sec(`${head({ label: p.bounds.label, h2: p.bounds.h2, id: "s3" })}
      <div class="bounds reveal"><div><h3>${icon("check", 18, 2)} ${esc(p.bounds.doT)}</h3><ul class="tick">${p.bounds.do.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div>
      <div><h3 class="no">${esc(p.bounds.dontT)}</h3><ul class="tick minus">${p.bounds.dont.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div></div>`, "", "s3"),
    sec(`<div class="split">
      <div>${ml(p.faq.label)}<h2 class="h2 reveal" id="s4" style="margin-top:24px">${fmt(p.faq.h2)}</h2></div>
      ${faq(p.faq.items)}</div>`, "rule", "s4"),
    band({ h2: p.band.h2, lead: vs(p.band.lead), actions: [{ href: "#bundle", label: p.band.cta, primary: true }, { href: path(t, "check"), label: t.nav.check[0] }] }),
    `<div class="wrap fine">${disclaimer(p.disclaimer)}</div>`
  ].join("\n");
}
/* schema.org: the products on the Templates page, with their offers */
export function shopLd(t) {
  const p = t.pages.shop;
  return {
    "@context": "https://schema.org", "@type": "ItemList", name: p.hero.label,
    itemListElement: SHOP.map((x, i) => ({
      "@type": "ListItem", position: i + 1,
      item: {
        "@type": "Product", name: p.items[x.key].t, description: p.items[x.key].p.replace(/[*~]/g, ""),
        image: `${SITE_URL}/assets/img/shop/ed/${x.img || x.key}-1600.webp`,
        brand: { "@type": "Brand", name: "Lexora Digital" },
        offers: [x.url, x.dl].map((u) => ({ "@type": "Offer", price: x.price.toFixed(2), priceCurrency: "EUR", availability: "https://schema.org/InStock", url: u }))
      }
    }))
  };
}

/* ---------------- About ---------------- */
export function about(t) {
  const p = t.pages.about;
  return [
    pageHero({ label: p.hero.label, h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.about) }),
    sec(`<div class="split founder-split"><figure class="founder big reveal"><img src="/assets/img/art/founder-1086.webp" srcset="/assets/img/art/founder-640.webp 640w, /assets/img/art/founder-1086.webp 1086w" sizes="(max-width:960px) 92vw, 42vw" width="1086" height="1448" alt="${esc(p.photoAlt)}" decoding="async"><figcaption><b>${esc(p.photoCap)}</b><span>${esc(p.photoLine)}</span></figcaption></figure>
      <div>${ml(p.story.label)}<h2 class="h2 reveal" id="a1" style="margin-top:24px">${fmt(p.story.h2)}</h2><div class="reveal" style="margin-top:28px">${p.story.p.map((x) => `<p class="body" style="margin-bottom:18px">${fmt(x)}</p>`).join("")}</div></div></div>`, "rule", "a1"),
    sec(`${head({ label: p.four.label, h2: p.four.h2, lead: p.four.lead, id: "a2" })}${features(p.four.items, 4)}`, "trust", "a2"),
    sec(`${head({ label: t.home.about.label, h2: p.values.h2, id: "a3", plain: true })}<ul class="values reveal">${t.home.about.values.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("")}</ul>`, "", "a3"),
    sec(`<div class="bounds reveal"><div><h3>${icon("check", 18, 2)} ${esc(p.bounds.doT)}</h3><ul class="tick">${p.bounds.do.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div>
      <div><h3 class="no">${esc(p.bounds.dontT)}</h3><ul class="tick minus">${p.bounds.dont.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul></div></div>`, "rule"),
    band({ h2: t.home.final.h2, lead: t.home.final.lead, actions: [{ href: path(t, "contact"), label: t.ui.startProject, primary: true }] })
  ].join("\n");
}

/* ---------------- Contact ---------------- */
export function contact(t) {
  const p = t.pages.contact;
  const left = `<div class="contact-l">
      <div class="reveal"><p class="ml plain">${esc(p.direct.label)}</p><p class="cline">${icon("mail", 18, 1.6)} <a href="mailto:info@lexoradigital.com">info@lexoradigital.com</a></p><p class="cline">${icon("phone", 18, 1.6)} <a href="tel:${CONTACT.tel}">${CONTACT.phone}</a></p><p class="small dim mails">GDPR: <a href="mailto:gdpr@lexoradigital.com">gdpr@lexoradigital.com</a><br>Goran Kolouh: <a href="mailto:kolouh@lexoradigital.com">kolouh@lexoradigital.com</a></p><p class="small dim">${fmt(p.direct.p)}</p></div>
      <div class="reveal"><p class="ml plain">${esc(p.next.label)}</p><ol class="mini-steps">${p.next.steps.map(([a, b], i) => `<li><span class="mono">${String(i + 1).padStart(2, "0")}</span><div><b>${esc(a)}</b> <p>${fmt(b)}</p></div></li>`).join("")}</ol></div>
      <a class="checkcard reveal" href="${path(t, "check")}"><span class="ml">${esc(t.nav.check[0])}</span><b>${esc(p.check.t)}</b><span class="small dim">${esc(p.check.p)}</span><span class="go" aria-hidden="true">${icon("arrow", 18, 1.8)}</span></a>
    </div>`;
  return [
    pageHero({ label: p.hero.label, h1: p.hero.h1, lead: p.hero.lead, crumbs: crumbsFor(t, t.nav.contact) }),
    `<section class="section rule" id="project" aria-label="${esc(t.form.contact.title)}"><div class="wrap contact-grid">${left}<div class="formcard reveal">${contactForm(t)}</div></div></section>`
  ].join("\n");
}

/* ---------------- Legal pages ---------------- */
export function legal(t, key) {
  const p = t.pages[key];
  const h2s = p.blocks.filter(([k]) => k === "h2").map(([, v]) => v);
  return [
    pageHero({ label: p.label, h1: p.h1, lead: p.lead, crumbs: crumbsFor(t, p.h1) }),
    `<section class="section rule"><div class="wrap legal">
      <aside class="toc"><p class="ml plain">${esc(t.ui.contents)}</p><ol>${h2s.map((h) => `<li><a href="#${slugify(h)}">${esc(h)}</a></li>`).join("")}</ol><p class="mono dim" style="margin-top:24px">${esc(p.updated)}</p></aside>
      <article class="prose">${p.draft ? `<p class="draft">${icon("info", 16, 1.6)}<span>${fmt(p.draft)}</span></p>` : ""}${prose(p.blocks)}</article>
    </div></section>`
  ].join("\n");
}
const slugify = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
