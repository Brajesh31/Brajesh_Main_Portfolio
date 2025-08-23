import * as fs from 'fs';
import * as path from 'path';

// List all your site URLs here
const urls = [
    'https://edtech-community.com/',
    'https://edtech-community.com/about',
    'https://edtech-community.com/contact',
    'https://edtech-community.com/projects'
];

// Generate XML sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
        url => `
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('')}
</urlset>`;

// Ensure public folder exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('✅ Sitemap generated successfully!');
