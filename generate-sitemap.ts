import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

async function generateSitemap() {
    const sitemapStream = new SitemapStream({ hostname: 'https://edtech-community.com' });
    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

    sitemapStream.pipe(writeStream);

    // Add your React Router paths here
    const routes = [
        '/',
        '/about',
        '/education',
        '/experience',
        '/profiles',
        '/projects',
        '/certificates',
        '/skills',
        '/services',
        '/blogs',
        '/contact',
        '/milestones',
    ];

    routes.forEach((route) =>
        sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.7 })
    );

    sitemapStream.end();

    await streamToPromise(sitemapStream);
    console.log('✅ Sitemap generated at ./public/sitemap.xml');
}

generateSitemap().catch((error) => {
    console.error('Failed to generate sitemap:', error);
    process.exit(1);
});
