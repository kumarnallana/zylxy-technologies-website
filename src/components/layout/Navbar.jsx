"use client";

import { NAVBAR_DATA } from "@/data/navigationData";
import { navbarStyles } from "@/styles/navbar/navbar.dark";
import { usePathname, useRouter } from "next/navigation";
import MobileMenu from "./MobileMenu";

export default function Navbar({ onScrollToServices }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (item) => {
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
      item.label?.toLowerCase() === "contact" ||
      item.label?.toLowerCase().includes("consultation")
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

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={navbarStyles.navContainer}>
      <div className={navbarStyles.innerWrapper}>
        <div
          className={navbarStyles.logoSection}
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        >
          <div className={navbarStyles.logoBox}>
            <img
              src="/ZylxyLogo.png"
              alt={NAVBAR_DATA.logoAlt || "Zylxy Logo"}
              className={navbarStyles.logoImage}
            />
          </div>
          <div className={navbarStyles.textContainer}>
            <span className={navbarStyles.brandTitle}>
              {NAVBAR_DATA.brandName}
            </span>
            <span className={navbarStyles.brandSubtitle}>
              {NAVBAR_DATA.brandSubtitle}
            </span>
          </div>
        </div>

        <div className={navbarStyles.menuList}>
          {NAVBAR_DATA.menuItems.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleNavigation(item)}
              className={navbarStyles.menuButton}
            >
              {item.label}
              {item.suffix && (
                <span className="text-xs opacity-50 ml-1">{item.suffix}</span>
              )}
            </button>
          ))}
        </div>

        <div className={`${navbarStyles.buttonGroup} hidden md:flex`}>
          {NAVBAR_DATA.buttons?.[0] && (
            <button
              className={navbarStyles.primaryBtn}
              onClick={() => handleNavigation(NAVBAR_DATA.buttons[0])}
            >
              {NAVBAR_DATA.buttons[0].label}
            </button>
          )}
          {NAVBAR_DATA.buttons?.[1] && (
            <button
              className={navbarStyles.outlineBtn}
              onClick={() => handleNavigation(NAVBAR_DATA.buttons[1])}
            >
              {NAVBAR_DATA.buttons[1].label}
            </button>
          )}
        </div>

        <div className="flex md:hidden items-center">
          <MobileMenu onScrollToServices={onScrollToServices} />
        </div>
      </div>
    </nav>
  );
}
