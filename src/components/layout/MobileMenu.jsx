"use client";

import { NAVBAR_DATA } from "@/data/navigationData";
import { mobileMenuStyles } from "@/styles/navbar/navbar.mobile";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu({ onScrollToServices }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigation = (item) => {
    setIsOpen(false);

    if (item.actionType === "scrollToTop") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (
      item.actionType === "scrollToServices" ||
      item.label?.toLowerCase() === "services"
    ) {
      if (pathname !== "/") {
        router.push("/#services-section");
      } else {
        if (onScrollToServices) onScrollToServices();
        else {
          const elem = document.getElementById("services-section");
          if (elem)
            window.scrollTo({ top: elem.offsetTop - 85, behavior: "smooth" });
        }
      }
      return;
    }

    if (
      item.actionType === "scrollToOutcomes" ||
      item.label?.toLowerCase() === "outcomes" ||
      item.label?.toLowerCase() === "case studies"
    ) {
      if (pathname !== "/") {
        router.push("/#case-studies-section");
      } else {
        const elem =
          document.getElementById("case-studies-section") ||
          document.getElementById("outcomes-section");
        if (elem) {
          window.scrollTo({ top: elem.offsetTop - 85, behavior: "smooth" });
        } else if (item.href) {
          router.push(item.href);
        }
      }
      return;
    }

    if (
      item.actionType === "scrollToContact" ||
      item.label?.toLowerCase() === "contact"
    ) {
      if (pathname !== "/") {
        router.push("/#leadgen-section");
      } else {
        const elem = document.getElementById("leadgen-section");
        if (elem)
          window.scrollTo({ top: elem.offsetTop - 85, behavior: "smooth" });
      }
      return;
    }

    if (item.href) {
      if (item.href.startsWith("/#") || item.href.startsWith("#")) {
        const targetId = item.href.replace(/.*#/, "");

        if (pathname !== "/") {
          router.push(item.href);
        } else {
          const elem = document.getElementById(targetId);
          if (elem) {
            window.scrollTo({
              top: elem.offsetTop - 85,
              behavior: "smooth",
            });
            window.history.pushState(null, "", `#${targetId}`);
          }
        }
      } else {
        router.push(item.href);
      }
    }
  };

  return (
    <div className={mobileMenuStyles.hamburgerWrapper}>
      <button
        className={mobileMenuStyles.hamburgerBtn}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <div
          className={`${mobileMenuStyles.line} ${isOpen ? mobileMenuStyles.lineOpen1 : ""}`}
        />
        <div
          className={`${mobileMenuStyles.line} ${isOpen ? mobileMenuStyles.lineOpen2 : ""}`}
        />
        <div
          className={`${mobileMenuStyles.line} ${isOpen ? mobileMenuStyles.lineOpen3 : ""}`}
        />
      </button>

      <div
        className={`${mobileMenuStyles.overlay} ${isOpen ? mobileMenuStyles.overlayOpen : mobileMenuStyles.overlayClosed}`}
      >
        <div className={mobileMenuStyles.navContainer}>
          {NAVBAR_DATA.menuItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleNavigation(item)}
              className={mobileMenuStyles.navItem}
            >
              {item.label}
              {item.suffix && (
                <span className="text-[12px] opacity-50 ml-2">
                  {item.suffix}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className={mobileMenuStyles.buttonGroup}>
          {NAVBAR_DATA.buttons?.[0] && (
            <button
              className={mobileMenuStyles.primaryBtn}
              onClick={() => handleNavigation(NAVBAR_DATA.buttons[0])}
            >
              {NAVBAR_DATA.buttons[0].label}
            </button>
          )}
          {NAVBAR_DATA.buttons?.[1] && (
            <button
              className={mobileMenuStyles.outlineBtn}
              onClick={() => handleNavigation(NAVBAR_DATA.buttons[1])}
            >
              {NAVBAR_DATA.buttons[1].label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
