// Post-build step: renders every route in a headless browser and writes the
// resulting HTML to dist/<route>/index.html, so crawlers and link previews get
// real content, titles and meta tags without running JavaScript. Also writes
// dist/404.html (used by GitHub Pages for unknown URLs).
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { preview } from "vite";
import { chromium } from "playwright-core";

const DIST = path.resolve("dist");
const PORT = 4399;

const routesFromSitemap = () => {
  const xml = fs.readFileSync(path.resolve("public/sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>https?:\/\/[^/]+(\/[^<]*)<\/loc>/g)].map((m) => m[1]);
};

// Prefer a locally cached Playwright Chromium; otherwise let Playwright resolve its own.
const findChromium = () => {
  const root = path.join(os.homedir(), "Library/Caches/ms-playwright");
  const linuxRoot = path.join(os.homedir(), ".cache/ms-playwright");
  for (const dir of [root, linuxRoot]) {
    if (!fs.existsSync(dir)) continue;
    const found = fs.readdirSync(dir).filter((d) => d.startsWith("chromium-")).sort().pop();
    if (!found) continue;
    const candidates = [
      "chrome-mac/Chromium.app/Contents/MacOS/Chromium",
      "chrome-linux/chrome",
    ].map((p) => path.join(dir, found, p));
    const exe = candidates.find((p) => fs.existsSync(p));
    if (exe) return exe;
  }
  return undefined;
};

const outFile = (route) =>
  route === "/" ? path.join(DIST, "index.html") : path.join(DIST, route.replace(/^\//, ""), "index.html");

const server = await preview({ root: process.cwd(), preview: { port: PORT, strictPort: true, open: false } });
let browser;
try {
  browser = await chromium.launch({ executablePath: findChromium() });
} catch (err) {
  console.warn("[prerender] Chromium not available, skipping prerender:", err.message.split("\n")[0]);
  await new Promise((r) => server.httpServer.close(r));
  process.exit(0);
}

const render = async (route) => {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle" });
  await page.waitForSelector("h1");
  await page.waitForTimeout(400); // let react-helmet flush head tags
  await page.evaluate(() => document.querySelectorAll(".rn-reveal").forEach((el) => el.classList.add("is-in")));
  const html = "<!doctype html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
  await page.close();
  return html;
};

const results = [];
for (const route of routesFromSitemap()) results.push([outFile(route), await render(route), route]);
results.push([path.join(DIST, "404.html"), await render("/this-page-does-not-exist"), "404"]);
results.push([outFile("/thank-you"), await render("/thank-you"), "/thank-you"]);

await browser.close();
await new Promise((r) => server.httpServer.close(r));

for (const [file, html, route] of results) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`[prerender] ${route} -> ${path.relative(process.cwd(), file)}`);
}
