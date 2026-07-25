"use client";

import dynamic from "next/dynamic";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

const FooterSection = dynamic(() => import("@/components/layout/FooterSection"), {
  ssr: true, // Still SSR but chunked separately to improve TTI
});
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { Component, useContext, useEffect, useRef } from "react";

// 1. FrozenRouter Implementation
// Prevents RSC payload mutation during AnimatePresence exit animations.
function FrozenRouter(props) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

// 2. Transition Error Boundary
// Prevents silent blank screens if suspended routing fails during animation.
class TransitionErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Transition rendering failed:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center bg-[#070D1E] text-white">
          <h2 className="text-xl font-bold mb-4">Something went wrong during navigation.</h2>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#60A5FA] text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 3. Static Motion Variants (Hydration Safe & Isolated)
const pageVariants = {
  pageHidden: { opacity: 0, y: 10 },
  pageVisible: { opacity: 1, y: 0 },
  pageExit: { opacity: 0, y: -10 },
};

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const isHubSpotRoute = pathname?.startsWith("/hubspot");

  // Enterprise Scroll Restoration
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      
      // Accessibility Focus Reset
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.focus();
      }
    }
  }, [pathname]);

  return (
    // 'root' prop tells Lenis to take over the native window scroll
    <ReactLenis
      root
      options={{
        lerp: prefersReducedMotion ? 1 : 0.08,
        duration: prefersReducedMotion ? 0 : 1.5,
        smoothWheel: !prefersReducedMotion,
      }}
    >
      {!isHubSpotRoute && <AnnouncementBar />}
      {!isHubSpotRoute && <Navbar />}

      <TransitionErrorBoundary>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.main
            key={pathname}
            id="main-content"
            tabIndex={-1}
            variants={pageVariants}
            initial={false}
            animate="pageVisible"
            exit="pageExit"
            transition={{
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1], // Linear/Vercel standard ease
            }}
            className="flex-grow flex flex-col w-full focus:outline-none"
          >
            <FrozenRouter>
              {children}
            </FrozenRouter>
          </motion.main>
        </AnimatePresence>
      </TransitionErrorBoundary>

      {!isHubSpotRoute && <FooterSection />}
    </ReactLenis>
  );
}
