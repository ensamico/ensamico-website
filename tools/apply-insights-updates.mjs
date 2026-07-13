import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(scriptDir, "..");
const projectRoot = process.cwd();
const insightsDir = path.join(projectRoot, "public", "insights");
const packagedAssets = path.join(packageRoot, "public", "insights", "assets");
const destinationAssets = path.join(insightsDir, "assets");

const OG_URL = "https://ensamico.com/insights/ensamico-insights-og.png";
const OG_ALT =
  "Ensamico Insights — practical insights for doing business with China";

if (!fs.existsSync(insightsDir)) {
  console.error(
    "Could not find public/insights. Run this command from the repository root."
  );
  process.exit(1);
}

fs.mkdirSync(destinationAssets, { recursive: true });
for (const filename of ["article-share.css", "article-share.js"]) {
  fs.copyFileSync(
    path.join(packagedAssets, filename),
    path.join(destinationAssets, filename)
  );
}

const shareBlock = `
      <div
        class="article-share"
        data-article-share
        aria-label="Article sharing options"
      ></div>`;

const shareCss =
  '<link rel="stylesheet" href="/insights/assets/article-share.css">';
const shareScript =
  '<script src="/insights/assets/article-share.js" defer></script>';

const removeMeta = (html, keyType, key) => {
  const expression = new RegExp(
    `<meta\\s+[^>]*${keyType}=["']${key.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    )}["'][^>]*>\\s*`,
    "gi"
  );
  return html.replace(expression, "");
};

const insertBeforeFirst = (html, markerRegex, content) => {
  const match = html.match(markerRegex);
  if (!match || match.index === undefined) return html;
  return `${html.slice(0, match.index)}${content}\n${html.slice(match.index)}`;
};

const updateJsonLdImages = (html, isArticle) =>
  html.replace(
    /<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi,
    (full, jsonText) => {
      try {
        const data = JSON.parse(jsonText.trim());
        const updateObject = (object) => {
          if (!object || typeof object !== "object") return;
          if (Array.isArray(object)) {
            object.forEach(updateObject);
            return;
          }

          const type = object["@type"];
          const types = Array.isArray(type) ? type : [type];
          if (isArticle && types.includes("Article")) object.image = OG_URL;
          if (!isArticle && types.includes("CollectionPage")) {
            object.primaryImageOfPage = {
              "@type": "ImageObject",
              url: OG_URL,
              width: 1200,
              height: 630,
            };
          }

          Object.values(object).forEach(updateObject);
        };

        updateObject(data);
        return `<script type="application/ld+json">${JSON.stringify(
          data
        )}</script>`;
      } catch {
        return full.replace(
          /"image"\s*:\s*"https:\/\/ensamico\.com\/og-image\.png"/g,
          `"image":"${OG_URL}"`
        );
      }
    }
  );

const updateSocialMetadata = (html, isArticle) => {
  for (const property of [
    "og:image",
    "og:image:width",
    "og:image:height",
    "og:image:alt",
  ]) {
    html = removeMeta(html, "property", property);
  }

  for (const name of ["twitter:image", "twitter:image:alt"]) {
    html = removeMeta(html, "name", name);
  }

  if (!isArticle) {
    html = html.replace(
      /<meta\s+property=["']og:type["']\s+content=["'][^"']*["']\s*>/i,
      '<meta property="og:type" content="website">'
    );
  }

  const ogBlock = `<meta property="og:image" content="${OG_URL}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${OG_ALT}">
`;

  html = insertBeforeFirst(
    html,
    /<meta\s+name=["']twitter:card["'][^>]*>/i,
    ogBlock.trimEnd()
  );

  const twitterBlock = `<meta name="twitter:image" content="${OG_URL}">
<meta name="twitter:image:alt" content="${OG_ALT}">
`;

  html = insertBeforeFirst(
    html,
    /<script\s+async\s+src=["']https:\/\/pagead2\.googlesyndication\.com/i,
    twitterBlock.trimEnd()
  );

  html = updateJsonLdImages(html, isArticle);
  return html;
};

const removeShareBlocks = (html) =>
  html.replace(
    /<div\b(?=[^>]*\bclass=["'][^"']*\barticle-share\b[^"']*["'])(?=[^>]*\bdata-article-share\b)[^>]*>\s*<\/div>\s*/gi,
    ""
  );

const updateArticle = (html, file) => {
  html = removeShareBlocks(html);

  html = html.replace(/<head>([\s\S]*?)<\/head>/i, (full, inner) => {
    let head = inner.replace(
      /<link\s+[^>]*href=["']\/insights\/assets\/article-share\.css["'][^>]*>\s*/gi,
      ""
    );

    if (/<link\s+[^>]*href=["']\/insights\/assets\/insights\.css["'][^>]*>/i.test(head)) {
      head = head.replace(
        /(<link\s+[^>]*href=["']\/insights\/assets\/insights\.css["'][^>]*>)/i,
        `$1\n${shareCss}`
      );
    } else {
      head += `\n${shareCss}\n`;
    }

    return `<head>${head}</head>`;
  });

  html = updateSocialMetadata(html, true);

  const metaPattern =
    /<div\s+class=["']article-meta["'][^>]*>[\s\S]*?<\/div>/i;
  if (!metaPattern.test(html)) {
    throw new Error(`No article-meta block found in ${file}`);
  }
  html = html.replace(metaPattern, (match) => `${match}${shareBlock}`);

  html = html.replace(
    /<script\s+[^>]*src=["']\/insights\/assets\/article-share\.js["'][^>]*><\/script>\s*/gi,
    ""
  );
  html = html.replace(/<\/body>/i, `${shareScript}\n</body>`);

/*
 * Ensure both article CTA buttons always open the homepage
 * contact section for current and future Insights articles.
 */
html = html.replace(
  /<a class="nav-cta" href="[^"]*">Contact<\/a>/i,
  '<a class="nav-cta" href="/#contact">Contact</a>'
);

html = html.replace(
  /<a class="btn" href="[^"]*">Start a conversation<\/a>/i,
  '<a class="btn" href="/#contact">Start a conversation</a>'
);

return html;
};

const rootIndex = path.join(insightsDir, "index.html");
if (fs.existsSync(rootIndex)) {
  const current = fs.readFileSync(rootIndex, "utf8");
  const updated = updateSocialMetadata(current, false);
  fs.writeFileSync(rootIndex, updated, "utf8");
  console.log("Updated public/insights/index.html social metadata");
}

const articleFiles = fs
  .readdirSync(insightsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && entry.name !== "assets")
  .map((entry) => path.join(insightsDir, entry.name, "index.html"))
  .filter((file) => fs.existsSync(file));

let updatedCount = 0;
for (const file of articleFiles) {
  try {
    const current = fs.readFileSync(file, "utf8");
    const updated = updateArticle(current, file);
    fs.writeFileSync(file, updated, "utf8");
    updatedCount += 1;
    console.log(`Updated ${path.relative(projectRoot, file)}`);
  } catch (error) {
    console.error(`Failed to update ${path.relative(projectRoot, file)}:`);
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
}

const ogImagePath = path.join(insightsDir, "ensamico-insights-og.png");
console.log(`\nUpdated ${updatedCount} article file(s).`);
console.log("Created/updated both article sharing asset files.");

if (!fs.existsSync(ogImagePath)) {
  console.warn(
    "\nOG image missing: add your approved image as public/insights/ensamico-insights-og.png"
  );
}

if (!process.exitCode) {
  console.log("\nRun: node tools/verify-insights-update.mjs");
}
