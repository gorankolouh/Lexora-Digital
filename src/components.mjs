// Shared building blocks used by every page — one visual system.
import { esc, fmt, path, icon } from "./lib.mjs";

export const ml = (s, plain = false) => `<p class="ml${plain ? " plain" : ""}">${esc(s)}</p>`;

export const btn = (href, label, primary = false) =>
  `<a class="btn ${primary ? "btn-lime" : "btn-ghost"}" href="${href}">${esc(label)}${primary ? `<span class="arr">${icon("arrow", 14, 2)}</span>` : ""}</a>`;

/* Inner-page hero: micro-label, headline, lead, actions; optional aside (e.g. a form or facts). */
export const art = (name, cls = "", eager = false) => `<figure class="art ${cls}" aria-hidden="true"><img src="/assets/img/art/${name}-900.webp" srcset="/assets/img/art/${name}-900.webp 900w, /assets/img/art/${name}-1536.webp 1536w" sizes="(max-width:960px) 100vw, 55vw" width="1536" height="1024" alt="" decoding="async"${eager ? ' fetchpriority="high"' : ' loading="lazy"'}></figure>`;

export function pageHero({ label, h1, lead, glyph, actions = [], aside = "", crumbs = [], id = "page-h", extra = "", artName = "" }) {
  if (artName) aside = art(artName, "hero-art", true);
  return `<section class="phero${aside ? " has-aside" : ""}${artName ? " has-art" : ""}" aria-labelledby="${id}">
  <div class="phero-horizon" aria-hidden="true"></div>
  <div class="wrap phero-in">
    <div class="phero-main">
      ${crumbs.length ? `<nav class="crumbs" aria-label="Breadcrumb"><ol>${crumbs.map(([h, l]) => h ? `<li><a href="${h}">${esc(l)}</a></li>` : `<li aria-current="page">${esc(l)}</li>`).join("")}</ol></nav>` : ""}
      <div class="phero-label">${glyph ? `<span class="glyph" aria-hidden="true">${esc(glyph)}</span>` : ""}${ml(label)}</div>
      <h1 class="ptitle rise d2" id="${id}">${fmt(h1)}</h1>
      ${lead ? `<p class="lead rise d3">${fmt(lead)}</p>` : ""}
      ${actions.length ? `<div class="hero-cta rise d4">${actions.map((a) => btn(a.href, a.label, a.primary)).join("")}</div>` : ""}
      ${extra}
    </div>
    ${aside ? `<div class="phero-aside${artName ? "" : " rise d4"}">${aside}</div>` : ""}
  </div>
</section>`;
}

export function head({ label, h2, lead, id, plain = false }) {
  return `<div class="head">
      ${label ? ml(label, plain) : ""}
      <h2 class="h2 reveal" id="${id}">${fmt(h2)}</h2>
      ${lead ? `<p class="lead reveal d1">${fmt(lead)}</p>` : ""}
    </div>`;
}

/* Feature grid — items {t, p, g?, list?} */
export function features(items, cols = 3) {
  return `<ul class="feat c${cols} reveal">${items.map((x) => `
    <li>${x.g ? `<span class="fg" aria-hidden="true">${esc(x.g)}</span>` : ""}<h3>${esc(x.t)}</h3><p>${fmt(x.p)}</p>${x.list ? `<ul class="tick">${x.list.map((l) => `<li>${fmt(l)}</li>`).join("")}</ul>` : ""}</li>`).join("")}
  </ul>`;
}

export function steps(list) {
  return `<ol class="steps">${list.map(([a, b], i) => `
      <li class="step${i ? ` d${Math.min(i, 3)}` : ""}"><span class="n" aria-hidden="true"></span><p class="k">${String(i + 1).padStart(2, "0")}</p><h3>${esc(a)}</h3><p>${fmt(b)}</p></li>`).join("")}
    </ol>`;
}

export function faq(items, id = "faq") {
  return `<div class="faq reveal">${items.map(([q, a], i) => `
    <details${i === 0 ? " open" : ""}><summary><span>${esc(q)}</span><i aria-hidden="true"></i></summary><div class="ans">${fmt(a)}</div></details>`).join("")}
  </div>`;
}

export function band({ label, h2, lead, actions = [], id = "band-h" }) {
  return `<section class="band" aria-labelledby="${id}">
  <div class="band-horizon" aria-hidden="true"></div>
  <div class="wrap">
    ${label ? `<p class="ml reveal">${esc(label)}</p>` : ""}
    <h2 class="reveal" id="${id}">${fmt(h2)}</h2>
    ${lead ? `<p class="lead reveal">${fmt(lead)}</p>` : ""}
    <div class="hero-cta reveal">${actions.map((a) => btn(a.href, a.label, a.primary)).join("")}</div>
  </div>
</section>`;
}

/* Compliance matrix (status columns with legal references) */
export function matrix(m) {
  const groups = ["req", "ctx", "gp"].map((s) => ({ s, items: m.topics.filter((x) => x.s === s) }));
  return `<div class="matrix reveal">${groups.map((g) => `
      <div class="mcol">
        <header><h3><span class="mk ${g.s}" aria-hidden="true"></span>${esc(m.cols[g.s])}</h3><span class="cnt">${String(g.items.length).padStart(2, "0")}</span></header>
        ${g.items.map((x) => `<div class="mitem"><h4>${esc(x.t)}</h4><p>${esc(x.p)}</p><span class="ref">${esc(x.ref)}</span></div>`).join("")}
      </div>`).join("")}
    </div>
    <p class="reviewed">${esc(m.reviewed)}</p>`;
}

export const disclaimer = (s) => `<p class="disclaimer">${icon("info", 15, 1.6)}<span>${fmt(s)}</span></p>`;

/* Simple table (header row + rows), each cell may contain *x* formatting */
export function table(headRow, rows, caption) {
  return `<div class="tbl reveal" role="region" aria-label="${esc(caption)}" tabindex="0"><table>
    <caption class="sr">${esc(caption)}</caption>
    <thead><tr>${headRow.map((h) => `<th scope="col">${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c, i) => i ? `<td>${fmt(c)}</td>` : `<th scope="row">${fmt(c)}</th>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

/* Long-form text: array of blocks ["h2", text] | ["p", text] | ["ul", [..]] | ["note", text] */
export function prose(blocks) {
  return blocks.map(([k, v]) => {
    if (k === "h2") return `<h2 id="${slug(v)}">${esc(v)}</h2>`;
    if (k === "h3") return `<h3>${esc(v)}</h3>`;
    if (k === "ul") return `<ul>${v.map((x) => `<li>${fmt(x)}</li>`).join("")}</ul>`;
    if (k === "note") return `<p class="note">${fmt(v)}</p>`;
    return `<p>${fmt(v)}</p>`;
  }).join("\n");
}
export const slug = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/* ---------- forms ---------- */
const fid = (form, name) => `${form}-${name}`;
function field(form, f) {
  const id = fid(form, f.name), req = f.required ? " required" : "", aria = ` aria-describedby="${id}-err${f.hint ? ` ${id}-hint` : ""}"`;
  const label = `<label for="${id}">${esc(f.label)}${f.required ? "" : ` <span class="opt">${esc(f.optional)}</span>`}</label>`;
  let control;
  if (f.type === "select") control = `<select id="${id}" name="${f.name}"${req}${aria}>${f.placeholder ? `<option value="">${esc(f.placeholder)}</option>` : ""}${f.options.map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`).join("")}</select>`;
  else if (f.type === "textarea") control = `<textarea id="${id}" name="${f.name}" rows="${f.rows || 5}"${req}${aria}${f.placeholder ? ` placeholder="${esc(f.placeholder)}"` : ""}></textarea>`;
  else control = `<input id="${id}" name="${f.name}" type="${f.type || "text"}"${f.inputmode ? ` inputmode="${f.inputmode}"` : ""}${f.autocomplete ? ` autocomplete="${f.autocomplete}"` : ""}${f.placeholder ? ` placeholder="${esc(f.placeholder)}"` : ""}${f.validate ? ` data-validate="${f.validate}"` : ""}${req}${aria}>`;
  return `<div class="fld${f.wide ? " wide" : ""}">${label}${control}${f.hint ? `<p class="hint" id="${id}-hint">${esc(f.hint)}</p>` : ""}<p class="err" id="${id}-err" aria-live="polite"></p></div>`;
}
export function form(t, { id, fields, submit, consent, title, intro, success, subject }) {
  const fm = t.form;
  return `<form class="lform" data-form="${id}" novalidate>
  ${title ? `<h2 class="lform-t">${esc(title)}</h2>` : ""}${intro ? `<p class="lform-i">${fmt(intro)}</p>` : ""}
  <div class="lform-grid">
    ${fields.map((f) => field(id, { optional: fm.optional, ...f })).join("\n    ")}
  </div>
  <div class="fld check">
    <input type="checkbox" id="${id}-consent" name="consent" value="yes" required aria-describedby="${id}-consent-err">
    <label for="${id}-consent">${esc(consent).replace("{privacy}", `<a href="${path(t, "privacy")}">${esc(fm.privacyLink)}</a>`)}</label>
    <p class="err" id="${id}-consent-err" aria-live="polite"></p>
  </div>
  <div class="hp" aria-hidden="true"><label for="${id}-gotcha">Leave empty</label><input type="text" id="${id}-gotcha" name="_gotcha" tabindex="-1" autocomplete="off"></div>
  <input type="hidden" name="_subject" value="${esc(subject)}">
  <input type="hidden" name="page_language" value="${t.lang}">
  <div class="lform-act">
    <button type="submit" class="btn btn-lime"><span class="lbl">${esc(submit)}</span><span class="arr">${icon("arrow", 14, 2)}</span><span class="spin" aria-hidden="true"></span></button>
    <p class="lform-note">${esc(fm.note)}</p>
  </div>
  <p class="lform-status" role="status" aria-live="polite"></p>
  <div class="lform-ok" hidden tabindex="-1"><span class="okmark" aria-hidden="true">${icon("check", 22, 2)}</span><h3>${esc(success[0])}</h3><p>${fmt(success[1])}</p></div>
</form>`;
}
