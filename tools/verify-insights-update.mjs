import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const insights = path.join(root, "public", "insights");
const expectedImage =
  "https://ensamico.com/insights/ensamico-insights-og.png";

const failures = [];
const articleFiles = fs
  .readdirSync(insights, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "assets")
  .map((entry) => path.join(insights, entry.name, "index.html"))
  .filter((file) => fs.existsSync(file));

for (const file of articleFiles) {
  const html = fs.readFileSync(file, "utf8");
  const relative = path.relative(root, file);
  const checks = [
    [
      html.includes('/insights/assets/article-share.css'),
      "missing article-share.css",
    ],
    [
      html.includes('/insights/assets/article-share.js'),
      "missing article-share.js",
    ],
    [html.includes("data-article-share"), "missing share block"],
    [html.includes(expectedImage), "missing new OG image URL"],
    [html.includes('property="og:image:alt"'), "missing og:image:alt"],
    [html.includes('name="twitter:image:alt"'), "missing twitter:image:alt"],
    [
      !/<head>[\s\S]*data-article-share[\s\S]*<\/head>/i.test(html),
      "share block is incorrectly inside <head>",
    ],
  ];

  for (const [passed, message] of checks) {
    if (!passed) failures.push(`${relative}: ${message}`);
  }
}

for (const asset of ["article-share.css", "article-share.js"]) {
  if (!fs.existsSync(path.join(insights, "assets", asset))) {
    failures.push(`public/insights/assets/${asset}: file is missing`);
  }
}

if (!fs.existsSync(path.join(insights, "ensamico-insights-og.png"))) {
  failures.push(
    "public/insights/ensamico-insights-og.png: approved OG image is missing"
  );
}

if (failures.length) {
  console.error("Verification found these issues:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Verification passed for ${articleFiles.length} article(s), sharing assets, and OG image.`
);
