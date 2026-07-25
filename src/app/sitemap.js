/**
 * Dynamic sitemap for Zylxy Technologies
 * Next.js App Router automatically serves this at /sitemap.xml
 * 
 * Submit this URL to Google Search Console:
 * https://zylxytech.com/sitemap.xml
 */

export default function sitemap() {
  const baseUrl = 'https://zylxytech.com';
  const now = new Date();

  return [
    // ── Core pages ──────────────────────────────────────────────────
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hubspot`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/trust`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── HubSpot Packages ────────────────────────────────────────────
    {
      url: `${baseUrl}/hubspot/packages/starter`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hubspot/packages/growth`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hubspot/packages/custom`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hubspot/packages/flexible`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ── Careers ─────────────────────────────────────────────────────
    {
      url: `${baseUrl}/careers/recruitment-services/talent-acquisition`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers/recruitment-services/campus-recruitment`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── Legal ───────────────────────────────────────────────────────
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/acceptable-use`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
