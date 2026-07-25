/**
 * robots.txt for Zylxy Technologies
 * Next.js App Router automatically serves this at /robots.txt
 *
 * Tells search engine crawlers which pages to index and where the sitemap is.
 */

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block internal API routes from being indexed
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://zylxytech.com/sitemap.xml',
    host: 'https://zylxytech.com',
  };
}
