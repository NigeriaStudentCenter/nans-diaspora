// GitHub Pages serves files, not routes: give every route its own index.html
// so deep links return 200, and use the same shell as 404.html for the rest.
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = "dist/client";
const shell = join(out, "index.html");
const routes = readFileSync("src/routes.tsx", "utf-8")
  .match(/path: '([^']+)'/g)
  .map((m) => m.slice(7, -1))
  .filter((p) => p !== "/" && p !== "*");

for (const route of routes) {
  const dir = join(out, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(shell, join(dir, "index.html"));
}
copyFileSync(shell, join(out, "404.html"));
writeFileSync(join(out, "CNAME"), "nansdiasporia.org\n");
writeFileSync(join(out, ".nojekyll"), "");
console.log(`static pages: ${routes.length} routes + 404.html`);
