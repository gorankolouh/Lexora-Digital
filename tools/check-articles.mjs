// Verifies every language has the same articles with the same block structure as English.
const langs = ["en", "de", "nl", "es", "hr"];
const A = {}; for (const l of langs) A[l] = (await import(`../src/articles/${l}.mjs`)).default;
const shape = (a) => a.slug + "|" + a.blocks.map(([k, v]) => k + (Array.isArray(v) ? v.length : "")).join(",") + "|" + a.sources.length;
let ok = true;
for (const l of langs.slice(1)) A.en.forEach((a, i) => { if (!A[l][i] || shape(A[l][i]) !== shape(a)) { ok = false; console.log("mismatch", l, a.slug); } });
console.log(ok ? "all article translations match en" : "article mismatches found"); if (!ok) process.exit(1);
