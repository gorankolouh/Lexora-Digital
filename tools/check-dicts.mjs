// Verifies every language dictionary has exactly the same structure as en.mjs
const langs = ["de", "nl", "es", "hr"];
const en = (await import("../src/i18n/en.mjs")).default;
function shape(o, p = "", out = new Map()) {
  if (Array.isArray(o)) { out.set(p, `array:${o.length}`); o.forEach((v, i) => shape(v, `${p}[${i}]`, out)); }
  else if (o && typeof o === "object") { for (const k of Object.keys(o)) shape(o[k], p ? `${p}.${k}` : k, out); }
  else out.set(p, typeof o);
  return out;
}
const base = shape(en); let bad = 0;
for (const l of langs) {
  const d = shape((await import(`../src/i18n/${l}.mjs`)).default);
  for (const [k, v] of base) if (!d.has(k)) { console.log(l, "missing", k); bad++; } else if (d.get(k) !== v) { console.log(l, "differs", k, v, d.get(k)); bad++; }
  for (const k of d.keys()) if (!base.has(k)) { console.log(l, "extra", k); bad++; }
}
console.log(bad ? `${bad} problems` : "all dictionaries match en.mjs");
