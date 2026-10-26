// Journal article pages + shared article cards
import { esc, fmt, path, abs, icon } from "../lib.mjs";
import { SITE_URL, FOUNDER } from "../config.mjs";
import { pageHero, band, btn, slug as slugify } from "../components.mjs";
import { JART } from "./inner.mjs";

export const articleHref = (t, a) => `${path(t, "journal")}${a.slug}/`;
export const readMins = (a) => Math.max(3, Math.round(JSON.stringify(a.blocks).split(/\s+/).length / 210));

/* card used on the home page and the journal index */
export function articleCard(t, a, i, hTag = "h3") {
  const u = t.pages.journal.article;
  return `<article class="post reveal${i ? ` d${Math.min(i, 2)}` : ""}">
    <a class="post-link" href="${articleHref(t, a)}">
      <div class="art">${JART[i % 3]}<span class="tag">${esc(a.tag)}</span></div>
      <p class="k"><span>${esc(t.home.journal.kind)}</span><span>${esc(readMins(a))} ${esc(u.min)}</span></p>
      <${hTag} class="post-t">${esc(a.t)}</${hTag}>
      <p class="small dim post-d">${esc(a.d)}</p>
      <span class="link post-more">${esc(u.read)} ${icon("arrow", 15, 1.8)}</span>
    </a>
  </article>`;
}

function blocks(list) {
  return list.map(([k, v]) => {
    if (k === "h2") return `<h2 id="${slugify(v)}">${esc(v)}</h2>`;
    if (k === "h3") return `<h3>${esc(v)}</h3>`;
    if (k === "ul") return `<ul>${v.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul>`;
    if (k === "check") return `<ul class="checklist">${v.map((x) => `<li>${icon("check", 16, 2)}<span>${fmt(x)}</span></li>`).join("")}</ul>`;
    if (k === "quote") return `<blockquote class="pull"><p>${fmt(v)}</p></blockquote>`;
    if (k === "note") return `<p class="a-note">${fmt(v)}</p>`;
    return `<p>${fmt(v)}</p>`;
  }).join("\n");
}

export function article(t, a) {
  const u = t.pages.journal.article, all = t.articles;
  const h2s = a.blocks.filter(([k]) => k === "h2").map(([, v]) => v);
  const crumbs = [[path(t, "home"), t.ui.home], [path(t, "journal"), t.nav.journal], [null, a.tag]];
  const cta = a.slug.startsWith("gdpr") ? "check" : "contact";
  const meta = `<p class="a-meta rise d4"><span>${esc(u.by)} <b>Goran Kolouh</b></span><span>${esc(a.date)}</span><span>${readMins(a)} ${esc(u.min)}</span></p>`;
  const others = all.filter((x) => x.slug !== a.slug);
  return [
    pageHero({ label: `${t.nav.journal} · ${a.tag}`, h1: a.t, lead: a.lead, crumbs, extra: meta }),
    `<section class="section rule"><div class="wrap legal article-grid">
      <aside class="toc"><p class="ml plain">${esc(t.ui.contents)}</p><ol>${h2s.map((h) => `<li><a href="#${slugify(h)}">${esc(h)}</a></li>`).join("")}</ol>
        <div class="a-share"><a class="link" href="${path(t, "journal")}">${icon("arrow", 15, 1.8)} ${esc(u.back)}</a></div></aside>
      <article class="prose article-body">
        ${blocks(a.blocks)}
        <div class="a-cta">${btn(`${path(t, cta)}${cta === "contact" ? "#project" : ""}`, cta === "check" ? t.nav.check[0] : u.talk, true)}</div>
        <div class="author">
          <img src="/assets/img/art/founder-640.webp" width="72" height="96" alt="" loading="lazy" decoding="async">
          <div><p class="author-n">Goran Kolouh</p><p class="author-r">${esc(t.pages.about.photoCap.split("—")[1]?.trim() || "")} · Lexora Digital</p><p class="small dim">${esc(u.bio)}</p></div>
        </div>
        <div class="sources"><p class="ml plain">${esc(u.sources)}</p><ol>${a.sources.map(([l, h]) => `<li><a href="${esc(h)}" rel="noopener" target="_blank">${esc(l)} ${icon("arrowUR", 13, 1.8)}</a></li>`).join("")}</ol></div>
        <p class="a-disc">${icon("info", 15, 1.6)}<span>${esc(u.disclaimer)}</span></p>
      </article>
    </div></section>`,
    `<section class="section rule" aria-labelledby="more-h"><div class="wrap">
      <div class="head"><h2 class="h2 reveal" id="more-h">${esc(u.more)}</h2></div>
      <div class="posts posts-2">${others.map((x) => articleCard(t, x, all.indexOf(x))).join("")}</div>
    </div></section>`
  ].join("\n");
}

export function articleLd(t, a) {
  const url = abs(articleHref(t, a));
  return {
    "@context": "https://schema.org", "@type": "Article", headline: a.t, description: a.d, inLanguage: t.lang,
    url, mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: SITE_URL + "/assets/img/og-image.jpg",
    datePublished: a.iso, dateModified: a.updated || a.iso,
    author: { "@type": "Person", "@id": SITE_URL + "/#founder", name: FOUNDER.name, jobTitle: FOUNDER.jobTitle, url: FOUNDER.url, sameAs: FOUNDER.profiles },
    publisher: { "@type": "Organization", "@id": SITE_URL + "/#organization", name: "Lexora Digital", url: SITE_URL + "/",
      logo: { "@type": "ImageObject", url: SITE_URL + "/assets/img/lexora-logo-512.png", width: 512, height: 512 } }
  };
}
