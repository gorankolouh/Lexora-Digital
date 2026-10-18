// Minimal local preview server for ./dist (mimics cleanUrls + trailing slash)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";
const T = { ".html":"text/html; charset=utf-8", ".css":"text/css", ".js":"text/javascript", ".svg":"image/svg+xml", ".png":"image/png", ".jpg":"image/jpeg", ".webp":"image/webp", ".woff":"font/woff", ".xml":"application/xml", ".txt":"text/plain", ".json":"application/json" };
const DIST = join(process.cwd(), "dist"), PORT = process.env.PORT || 4321;
createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let f = join(DIST, p);
  try { if ((await stat(f)).isDirectory()) f = join(f, "index.html"); }
  catch { f = join(DIST, "404.html"); res.statusCode = 404; }
  try { const b = await readFile(f); res.setHeader("Content-Type", T[extname(f)] || "application/octet-stream"); res.end(b); }
  catch { res.statusCode = 404; res.end("Not found"); }
}).listen(PORT, () => console.log(`Preview: http://localhost:${PORT}/en/`));
