// Runs after `npm run build` (postbuild).
// Link-preview crawlers (iMessage, WhatsApp, Instagram, LinkedIn, Facebook) don't run JavaScript,
// so they only ever see the site-wide tags in index.html. This writes a copy of the built index.html
// to build/portraitstudio/index.html with The Portrait Studio's own title, description and share image.
// Vercel serves that file for /portraitstudio; the React app inside it loads exactly as normal.

const fs = require('fs');
const path = require('path');
const seo = require('../src/data/portraitStudioSeo.json');

const buildDir = path.join(__dirname, '..', 'build');
const outputDir = path.join(buildDir, 'portraitstudio');

let html = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');

function escapeAttribute(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function replaceOrFail(pattern, replacement, label) {
    if (!pattern.test(html)) {
        throw new Error(`portraitstudio-meta: could not find ${label} in build/index.html`);
    }
    html = html.replace(pattern, replacement);
}

function setMeta(attribute, key, content) {
    const pattern = new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/?>`);
    replaceOrFail(pattern, `<meta ${attribute}="${key}" content="${escapeAttribute(content)}"/>`, `${attribute}="${key}"`);
}

replaceOrFail(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(seo.title)}</title>`, '<title>');
replaceOrFail(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${seo.url}"/>`, 'canonical link');

setMeta('name', 'description', seo.description);
setMeta('name', 'author', seo.siteName);
setMeta('property', 'og:title', seo.title);
setMeta('property', 'og:description', seo.description);
setMeta('property', 'og:url', seo.url);
setMeta('property', 'og:site_name', seo.siteName);
setMeta('property', 'og:image', seo.image);
setMeta('property', 'og:image:width', seo.imageWidth);
setMeta('property', 'og:image:height', seo.imageHeight);
setMeta('name', 'twitter:title', seo.title);
setMeta('name', 'twitter:description', seo.description);
setMeta('name', 'twitter:image', seo.image);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'index.html'), html);

console.log('portraitstudio-meta: wrote build/portraitstudio/index.html');
