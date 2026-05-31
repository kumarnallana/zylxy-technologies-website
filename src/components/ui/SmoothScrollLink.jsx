"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SmoothScrollLink({
  href,
  children,
  className,
  ...props
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (e) => {
    // Check if the link contains an anchor ID
    if (href.includes("#")) {
      e.preventDefault();
      const targetId = href.replace(/.*#/, "");
      const elem = document.getElementById(targetId);

      // If the user is on a different page (e.g., service detail) and clicks a home anchor
      if (pathname !== "/" && href.startsWith("/#")) {
        router.push(href);
        return;
      }

      // If the element exists on the current page, scroll smoothly
      if (elem) {
        window.scrollTo({
          top: elem.offsetTop - 85, // Offset for fixed navbar height
          behavior: "smooth",
        });

        // Optionally push state to URL without jumping
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  return (
    <Link href={href} onClick={handleScroll} className={className} {...props}>
      {children}
    </Link>
  );
}
