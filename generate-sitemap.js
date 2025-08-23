// generate-sitemap.js
const fs = require('fs');
const path = require('path');

// Example URLs, replace with your routes or dynamic generation
const urls = [
    'https://edtech-community.com/',
    'https://edtech-community.com/about',
    'https://edtech-community.com/contact',
    'https://edtech-community.com/projects'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');
