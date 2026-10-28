import { SITE_URL, LANGS } from "./config.mjs";

export const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Inline formatting for dictionary strings: *word* -> serif accent, [[x]] -> editable placeholder
export const fmt = (s) => esc(s)
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/ {2}\n/g, '<br>')
  .replace(/\*([^*]+)\*/g, '<span class="serif accent">$1</span>')
  .replace(/~([^~]+)~/g, '<span class="dim">$1</span>')
  .replace(/\[\[([^\]]+)\]\]/g, '<span class="ph">[$1]</span>');

export function path(dict, key) {
  const slug = dict.slugs[key];
  if (slug === undefined) throw new Error(`Missing slug "${key}" for ${dict.lang}`);
  return `/${dict.lang}/${slug}`;
}
export const abs = (p) => SITE_URL + p;

export const LOGO = (cls = "") => `<svg class="${cls}" viewBox="0 0 572 100" fill="none" aria-hidden="true" focusable="false">
<g stroke="currentColor" stroke-width="8" stroke-linejoin="miter">
<path d="M4 0V96H64"/><path d="M164 4H100V96H164M100 50H156"/><path d="M196 2L264 98M264 2L196 98"/>
<path d="M351.6 90.6A46 46 0 1 1 351.6 9.4"/>
<path d="M404 100V4H440A24 24 0 0 1 440 52H404M434 52L470 100"/><path d="M496 100L530 14L564 100"/>
</g>
<path d="M359.6 14.8A46 46 0 0 1 359.6 85.2" stroke="#B7FF00" stroke-width="8"/>
<path d="M529 100H547L543 78Z" fill="#B7FF00"/>
</svg>`;

const ic = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUR: '<path d="M7 17L17 7M8 7h9v9"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  web: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8"/>',
  law: '<path d="M12 3l7 3v5c0 4.6-2.9 8.3-7 10-4.1-1.7-7-5.4-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  design: '<path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.6-.9 1.2-1.8-.5-1.1.2-2.2 1.4-2.2H17a4 4 0 0 0 4-4c0-5.5-4-10-9-10z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10" cy="7" r="1"/><circle cx="15" cy="7.5" r="1"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>'
};
export const icon = (name, size = 18, sw = 1.6) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ic[name]}</svg>`;

export const readyLangs = () => LANGS.filter((l) => l.ready);
