// generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const hostname = 'https://edtech-community.com';

const links = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'daily', priority: 0.8 },
    { url: '/education', changefreq: 'daily', priority: 0.8 },
    { url: '/experience', changefreq: 'daily', priority: 0.8 },
    { url: '/profiles', changefreq: 'daily', priority: 0.8 },
    { url: '/projects', changefreq: 'daily', priority: 0.8 },
    { url: '/certificates', changefreq: 'daily', priority: 0.8 },
    { url: '/skills', changefreq: 'daily', priority: 0.8 },
    { url: '/services', changefreq: 'daily', priority: 0.8 },
    { url: '/blogs', changefreq: 'daily', priority: 0.8 },
    { url: '/contact', changefreq: 'daily', priority: 0.8 },
    { url: '/milestones', changefreq: 'daily', priority: 0.8 },
];

const stream = new SitemapStream({ hostname });
streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    createWriteStream('./dist/sitemap.xml').write(data.toString());
    console.log('✅ Sitemap generated at dist/sitemap.xml');
});
