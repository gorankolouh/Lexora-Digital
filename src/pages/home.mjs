import { articleCard } from "./article.mjs";
import { esc, fmt, path, icon } from "../lib.mjs";
import { globeCanvas } from "../layout.mjs";

const ml = (s, cls = "") => `<p class="ml ${cls}">${esc(s)}</p>`;

// original journal artwork — quiet, monochrome line studies (no external assets)
function art(i) {
  const g = [
    `<g stroke="rgba(245,247,242,.18)"><circle cx="420" cy="150" r="150"/><circle cx="420" cy="150" r="104"/><circle cx="420" cy="150" r="58"/></g><circle cx="570" cy="150" r="3.5" fill="#B7FF00"/><path d="M0 330H600" stroke="rgba(245,247,242,.1)"/>`,
    `<g stroke="rgba(245,247,242,.16)">${Array.from({ length: 12 }, (_, k) => `<path d="M${-60 + k * 56} 450L${180 + k * 40} 0"/>`).join("")}</g><circle cx="452" cy="96" r="3.5" fill="#B7FF00"/>`,
    `<g fill="rgba(245,247,242,.22)">${Array.from({ length: 7 }, (_, r) => Array.from({ length: 12 }, (_, c) => `<circle cx="${40 + c * 48}" cy="${40 + r * 48}" r="1.3"/>`).join("")).join("")}</g><circle cx="424" cy="136" r="3.5" fill="#B7FF00"/><path d="M40 136H424" stroke="rgba(183,255,0,.35)"/>`
  ][i % 3];
  return `<svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice" fill="none" stroke-width="1" aria-hidden="true">${g}</svg>`;
}

function venn(t) {
  const d = t.home.disc;
  return `<figure class="venn reveal">
  <img src="/assets/img/art/disciplines-1254.webp" srcset="/assets/img/art/disciplines-720.webp 720w, /assets/img/art/disciplines-1254.webp 1254w" sizes="(max-width:1180px) 90vw, 40vw" width="1254" height="1254" alt="${esc(d.caption)}" loading="lazy" decoding="async">
  <figcaption>${esc(d.caption)}</figcaption>
</figure>`;
}

export default function home(t) {
  const h = t.home;

  const hero = `<section class="hero" aria-labelledby="hero-h">
  <div class="hero-globe">${globeCanvas({ cls: "pl-hero" })}</div>
  <div class="wrap hero-in">
    <div class="hero-txt">
      <p class="ml rise d1"><span>${h.hero.eyebrow.split(" · ").map((x, i) => i ? `<span class="hide-s"> · ${esc(x)}</span>` : esc(x)).join("")}</span></p>
      <h1 class="display" id="hero-h"><span class="ln"><span class="lni d2">${fmt(h.hero.h1[0])}</span></span><span class="ln"><span class="lni d3">${fmt(h.hero.h1[1])}</span></span></h1>
      <p class="lead rise d4">${esc(h.hero.lead)}</p>
      <div class="hero-cta rise d5">
        <a class="btn btn-lime" href="#work">${esc(h.hero.cta1)}<span class="arr">${icon("arrow", 14, 2)}</span></a>
        <a class="btn btn-ghost" href="${path(t, "contact")}">${esc(h.hero.cta2)}</a>
      </div>
    </div>
  </div>
  <div class="hero-foot rise d6"><div class="wrap">
    <p class="sig" aria-label="Web, Law, Language, Design">WEB <i></i> LAW <i></i> LANGUAGE <i></i> DESIGN</p>
    <p class="langs-mini">${esc(h.hero.langs)} <b>EN · DE · NL · ES · HR</b></p>
  </div></div>
</section>`;

  const intro = `<section class="section intro" aria-label="Introduction">
  <div class="wrap">
    <h2 class="statement reveal">${fmt(h.intro.statement)}</h2>
    <div class="intro-grid">
      <span></span>
      <div class="cols reveal">${h.intro.p.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
    </div>
    <ul class="facts reveal">${h.intro.facts.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("")}</ul>
  </div>
</section>`;

  const disc = `<section class="section rule" aria-labelledby="disc-h">
  <div class="wrap">
    <div class="head">
      ${ml(h.disc.label)}
      <h2 class="h2 reveal" id="disc-h">${fmt(h.disc.h2)}</h2>
      <p class="lead reveal d1">${esc(h.disc.lead)}</p>
    </div>
    <div class="disc">
      ${venn(t)}
      <ul class="dlist">${h.disc.cards.map((c) => `
        <li class="drow reveal" data-d="${c.key}">
          <span class="g" aria-hidden="true">${esc(c.g)}</span>
          <h3>${esc(c.word)}</h3>
          <p class="k">${esc(c.title)}</p>
          <p class="body">${esc(c.p)}</p>
          <p class="svc">${c.tags.map((x) => `<span>${esc(x)}</span>`).join("")}</p>
          ${c.note ? `<p class="note">${icon("info", 15, 1.6)}<span>${esc(c.note)}</span></p>` : ""}
          <a class="link" href="${path(t, c.route || c.key)}">${esc(c.link)} ${icon("arrow", 15, 1.8)}</a>
        </li>`).join("")}
      </ul>
    </div>
  </div>
</section>`;

  const fc = h.focus;
  const tile = (key, img, cls) => `<a class="ftile ${cls} reveal" href="${path(t, key)}">
      <div class="media"><img src="/assets/img/art/${img}-900.webp" srcset="/assets/img/art/${img}-900.webp 900w, /assets/img/art/${img}-1536.webp 1536w" sizes="(max-width:960px) 100vw, ${cls === "big" ? "60vw" : "40vw"}" width="1536" height="1024" alt="" loading="lazy" decoding="async"></div>
      <div class="fmeta"><span class="glyph" aria-hidden="true">${esc(t.nav[key][2])}</span><div><h3>${esc(t.nav[key][0])}</h3><p>${esc(t.nav[key][1])}</p></div><span class="go" aria-hidden="true">${icon("arrowUR", 18, 1.8)}</span></div>
    </a>`;
  const focus = `<section class="section rule" aria-labelledby="fc-h">
  <div class="wrap">
    <div class="head">
      ${ml(fc.label)}
      <h2 class="h2 reveal" id="fc-h">${fmt(fc.h2)}</h2>
      <p class="lead reveal d1">${esc(fc.lead)}</p>
    </div>
    <div class="bento">${tile("web", "web", "big")}${tile("check", "compliance", "s1")}${tile("language", "translation", "s2")}</div>
  </div>
</section>`;

  const [f, ...rest] = h.work.items;
  const img = (w, kind, sizes, alt) => `<div class="media"><span class="tag">${esc(h.work.badge)}</span><img src="/assets/img/work/${w.img}-${kind}-900.webp" srcset="/assets/img/work/${w.img}-${kind}-900.webp 900w, /assets/img/work/${w.img}-${kind}-1600.webp 1600w" sizes="${sizes}" width="1600" height="${kind === "feat" ? 1000 : 1200}" alt="${esc(alt)}" loading="lazy" decoding="async"></div>`;
  const work = `<section class="section rule" id="work" aria-labelledby="work-h">
  <div class="wrap">
    <div class="head">
      ${ml(h.work.label)}
      <h2 class="h2 reveal" id="work-h">${fmt(h.work.h2)}</h2>
      <p class="lead reveal d1">${esc(h.work.p)}</p>
    </div>
    <div class="work">
      <article class="proj feat reveal">
        ${img(f, "feat", "(max-width:960px) 100vw, 64vw", f.alt)}
        <div class="side">
          <p class="num">01 / ${String(h.work.items.length).padStart(2, "0")}</p>
          <p class="cat" style="margin-top:18px">${esc(f.cat)}</p>
          <h3 class="h3">${esc(f.title)}</h3>
          <p class="body">${esc(f.p)}</p>
          <p class="svc">${f.svc.map(esc).join(" / ")}</p>
          <span class="go" aria-hidden="true">${icon("arrowUR", 18, 1.8)}</span>
        </div>
        <a href="${path(t, "work")}${f.slug}/" aria-label="${esc(h.work.cta)}: ${esc(f.title)} (${esc(h.work.badge)})"></a>
      </article>
      ${rest.map((w, i) => `
      <article class="proj s reveal${i ? " d1" : ""}">
        ${img(w, "card", "(max-width:760px) 100vw, 48vw", w.alt)}
        <div class="meta"><div><p class="cat">${esc(w.cat)}</p><h3 class="h3">${esc(w.title)}</h3></div><span class="go" aria-hidden="true">${icon("arrowUR", 18, 1.8)}</span></div>
        <a href="${path(t, "work")}${w.slug}/" aria-label="${esc(h.work.cta)}: ${esc(w.title)} (${esc(h.work.badge)})"></a>
      </article>`).join("")}
    </div>
    <div class="work-foot"><p class="mono dim">${esc(h.work.count)}</p><a class="link" href="${path(t, "work")}">${esc(h.work.all)} ${icon("arrow", 15, 1.8)}</a></div>
  </div>
</section>`;

  const groups = ["req", "ctx", "gp"].map((s) => ({ s, items: h.trust.topics.filter((x) => x.s === s) }));
  const trust = `<section class="section trust" aria-labelledby="trust-h">
  <div class="wrap">
    <div class="head">
      ${ml(h.trust.label)}
      <h2 class="h2 reveal" id="trust-h">${fmt(h.trust.h2)}</h2>
      <p class="lead reveal d1">${esc(h.trust.lead)}</p>
      <div class="actions reveal">
        <a class="btn btn-ghost" href="${path(t, "compliance")}">${esc(h.trust.cta)}<span class="arr">${icon("arrow", 14, 2)}</span></a>
        <p class="disclaimer">${icon("info", 15, 1.6)}<span>${esc(h.trust.disclaimer)}</span></p>
      </div>
    </div>
    <div class="matrix reveal">${groups.map((g) => `
      <div class="mcol">
        <header><h3><span class="mk ${g.s}" aria-hidden="true"></span>${esc(h.trust.cols[g.s])}</h3><span class="cnt">${String(g.items.length).padStart(2, "0")}</span></header>
        ${g.items.map((x) => `<div class="mitem"><h4>${esc(x.t)}</h4><p>${esc(x.p)}</p><span class="ref">${esc(x.ref)}</span></div>`).join("")}
      </div>`).join("")}
    </div>
    <p class="reviewed">${esc(h.trust.reviewed)}</p>
  </div>
</section>`;

  const cb = h.checkBand;
  const checkBand = `<section class="cband" aria-labelledby="cb-h">
  <div class="wrap cband-in reveal">
    <div><p class="ml">${esc(cb.label)}</p><h2 class="h2" id="cb-h">${fmt(cb.h2)}</h2><p class="lead">${fmt(cb.lead)}</p></div>
    <div class="cband-r">
      <p class="price"><b>${esc(cb.priceFree)}</b><span>${esc(cb.free)}</span></p>
      <p class="price hl"><b>${esc(cb.priceFix)}</b><span>${esc(cb.fix)}</span></p>
      <a class="btn btn-lime" href="${path(t, "check")}">${esc(cb.cta)}<span class="arr">${icon("arrow", 14, 2)}</span></a>
    </div>
  </div>
</section>`;

  const process = `<section class="section" aria-labelledby="proc-h">
  <div class="wrap">
    <div class="head">
      ${ml(h.process.label)}
      <h2 class="h2 reveal" id="proc-h">${fmt(h.process.h2)}</h2>
      <p class="lead reveal d1">${esc(h.process.lead)}</p>
    </div>
    <ol class="steps">${h.process.steps.map(([a, b], i) => `
      <li class="step${i ? ` d${Math.min(i, 3)}` : ""}"><span class="n" aria-hidden="true"></span><p class="k">${String(i + 1).padStart(2, "0")}</p><h3>${esc(a)}</h3><p>${esc(b)}</p></li>`).join("")}
    </ol>
  </div>
</section>`;

  const langs = `<section class="section rule" aria-labelledby="lang-h">
  <div class="wrap">
    <div class="head">
      ${ml(h.langs.label, "plain")}
      <h2 class="h2 reveal" id="lang-h">${fmt(h.langs.h2)}</h2>
      <p class="lead reveal d1">${esc(h.langs.lead)}</p>
    </div>
    <ul class="say reveal">${h.langs.list.map(([c, p, n]) => `
      <li><span class="c">${c}</span><span class="p" lang="${c.toLowerCase()}">${esc(p)}</span><span class="n">${esc(n)}</span></li>`).join("")}
    </ul>
    <div class="work-foot"><p class="mono dim">${esc(h.langs.note)}</p><a class="link" href="${path(t, "language")}">${esc(h.langs.link)} ${icon("arrow", 15, 1.8)}</a></div>
  </div>
</section>`;

  const journal = `<section class="section rule" aria-labelledby="jr-h">
  <div class="wrap">
    <div class="head">
      ${ml(h.journal.label)}
      <h2 class="h2 reveal" id="jr-h">${fmt(h.journal.h2)}</h2>
      <p class="lead reveal d1">${esc(h.journal.lead)}</p>
      <a class="link reveal d2" href="${path(t, "journal")}">${esc(t.pages.journal.article.all)} ${icon("arrow", 15, 1.8)}</a>
    </div>
    <div class="posts">${t.articles.map((a, i) => articleCard(t, a, i)).join("")}
    </div>
  </div>
</section>`;

  const about = `<section class="section rule" aria-labelledby="ab-h">
  <div class="wrap">
    <div class="about-grid">
      <figure class="founder reveal"><img src="/assets/img/art/founder-640.webp" srcset="/assets/img/art/founder-640.webp 640w, /assets/img/art/founder-1086.webp 1086w" sizes="(max-width:960px) 90vw, 40vw" width="1086" height="1448" alt="${esc(t.pages.about.photoAlt)}" loading="lazy" decoding="async"><figcaption><b>${esc(t.pages.about.photoCap)}</b><span>${esc(t.pages.about.photoLine)}</span></figcaption></figure>
      <div class="r">${ml(h.about.label, "plain")}<h2 class="h2 reveal" id="ab-h" style="margin-top:28px">${fmt(h.about.h2)}</h2>
        <div class="reveal d1" style="margin-top:28px">${h.about.p.map((p) => `<p class="body">${esc(p)}</p>`).join("")}<a class="link" href="${path(t, "about")}">${esc(h.about.link)} ${icon("arrow", 15, 1.8)}</a></div></div>
    </div>
    <ul class="values reveal">${h.about.values.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("")}</ul>
  </div>
</section>`;

  const final = `<section class="final" aria-labelledby="fin-h">
  <div class="final-globe">${globeCanvas({ cls: "pl-horizon", lazy: true, quiet: true })}</div>
  <div class="wrap">
    <p class="ml reveal">${esc(h.final.label)}</p>
    <h2 class="reveal" id="fin-h">${fmt(h.final.h2)}</h2>
    <p class="lead reveal">${esc(h.final.lead)}</p>
    <div class="hero-cta reveal">
      <a class="btn btn-lime" href="${path(t, "contact")}#project">${esc(h.final.cta1)}<span class="arr">${icon("arrow", 14, 2)}</span></a>
      <a class="btn btn-ghost" href="${path(t, "contact")}">${esc(h.final.cta2)}</a>
    </div>
  </div>
</section>`;

  return [hero, intro, disc, focus, work, trust, checkBand, process, langs, journal, about, final].join("\n");
}
