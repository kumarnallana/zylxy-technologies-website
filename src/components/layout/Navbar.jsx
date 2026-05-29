"use client";

import { NAVBAR_DATA } from "@/data/navigationData";
import { navbarStyles } from "@/styles/navbar/navbar.dark";

export default function Navbar({ onScrollToServices }) {
  const handleNavigation = (item) => {
    if (item.actionType === "scrollToTop") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item.actionType === "scrollToServices" && onScrollToServices) {
      onScrollToServices();
    }
  };

  return (
    <nav className={navbarStyles.navContainer}>
      <div className={navbarStyles.innerWrapper}>
        <div
          className={navbarStyles.logoSection}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className={navbarStyles.logoBox}>
            <img
              src="/ZylxyLogo.png"
              alt={NAVBAR_DATA.logoAlt}
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

        <div className={navbarStyles.buttonGroup}>
          <button className={navbarStyles.primaryBtn}>
            {NAVBAR_DATA.buttons[0].label}
          </button>
          <button className={navbarStyles.outlineBtn}>
            {NAVBAR_DATA.buttons[1].label}
          </button>
        </div>
      </div>
    </nav>
  );
}
