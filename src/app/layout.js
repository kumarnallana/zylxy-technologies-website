import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import "@/styles/animations.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "optional", // Eliminates CLS: no fallback font swap, no layout shift
  weight: ["400", "500", "600", "700"],
  preload: true,
  adjustFontFallback: false, // Prevents extra style recalculation
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "optional", // Eliminates CLS: no fallback font swap, no layout shift
  weight: ["600", "700", "800"], // Removed 500 weight - not used in hero
  preload: true,
  adjustFontFallback: false,
});

// Full Enterprise SEO Metadata Architecture
export const metadata = {
  metadataBase: new URL('https://zylxytech.com'),
  title: {
    default: "Zylxy Technologies | Engineered for Digital Scale",
    template: "%s | Zylxy Technologies",
  },
  authors: [
    {
      name: "SasiKumar Nallana",
      url: "https://sasi-kumar-nallana-portfolio.vercel.app",
    },
  ],
  description: "Enterprise software, AI solutions, and modern digital platforms built for scale.",
  openGraph: {
    title: "Zylxy Technologies | Engineered for Digital Scale",
    description: "Enterprise software, AI solutions, and modern digital platforms built for scale.",
    url: "https://zylxytech.com",
    siteName: "Zylxy Technologies",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zylxy Technologies",
    description: "Enterprise software, AI solutions, and modern digital platforms built for scale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Critical: prevents white flash before CSS loads on slow connections
  other: {
    'color-scheme': 'dark',
  },
  // Google Search Console ownership verification
  verification: {
    google: '80237705829b33b2',
  },
};

import { DevDiagnostics } from "@/lib/diagnostics/devDiagnostics";

export default function RootLayout({ children }) {
  // Organization JSON-LD Schema — tells Google this site IS "Zylxy Technologies"
  // Critical for brand name searches to rank the official website first
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zylxy Technologies',
    alternateName: 'Zylxy Tech',
    url: 'https://zylxytech.com',
    logo: 'https://zylxytech.com/logos/zylxy-logo.png',
    description: 'Enterprise software development, AI automation, HubSpot CRM implementation, and digital transformation solutions.',
    foundingDate: '2019',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/zylxy',
      'https://github.com/ZylxyTechnology',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      // Critical: prevents white flash before CSS hydrates
      style={{ backgroundColor: '#020617', colorScheme: 'dark' }}
    >
      <head>
        {/* Organization Schema — connects brand name to this domain in Google's knowledge graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* DNS prefetch for Google Fonts to save RTT on first font request */}
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {/* All client logic, animations, and conditional routing is handled securely inside the wrapper */}
        <DevDiagnostics />
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
