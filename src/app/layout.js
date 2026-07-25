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
};

import { DevDiagnostics } from "@/lib/diagnostics/devDiagnostics";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
      // Critical: prevents white flash before CSS hydrates
      style={{ backgroundColor: '#020617', colorScheme: 'dark' }}
    >
      <head>
        {/*
         * Critical Performance: Eliminate document latency by preconnecting
         * to external origins before the browser discovers them from CSS.
         * This saves 1-3 RTTs on slow mobile connections.
         */}
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
