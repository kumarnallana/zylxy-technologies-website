"use client";

import { NAVBAR_DATA } from "@/data/layout/navigationData";
import { navbarStyles as n } from "@/styles/layout/navbar.dark";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuId) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      // If click is outside the nav, close the dropdown
      if (!e.target.closest('nav')) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileDropdown = (label) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  return (
    <nav 
      className={`w-full sticky top-0 z-50 flex flex-col duration-300 ease-in-out py-3 ${
        scrolled 
          ? "bg-[#050E21]/90 backdrop-blur-md border-b border-white/[0.05] shadow-lg shadow-black/20" 
          : "bg-[#050E21] border-b border-transparent"
      }`}
      style={{ transitionProperty: "background-color, backdrop-filter" }}
    >
      <div className={n.navContainer}>
        <div className={n.innerWrapper}>
          <Link href="/" className={n.logoSection} aria-label="Zylxy Technologies Home">
            <div className={n.logoBox}>
              <Image
                src="/logos/ZylxyLogo.png"
                alt={NAVBAR_DATA.logoAlt}
                width={40}
                height={28}
                className="scale-95 transition-transform duration-300 group-hover/logo:scale-100 object-contain w-auto h-auto"
                priority
              />
            </div>
            <div className={n.textContainer}>
              <span className={n.brandTitle}>{NAVBAR_DATA.brandName}</span>
              <span className={n.brandSubtitle}>
                {NAVBAR_DATA.brandSubtitle}
              </span>
            </div>
          </Link>

          <div className={n.menuList}>
            {NAVBAR_DATA.menuItems.map((item, idx) => {
              if (item.isMegaMenu && item.pillars) {
                const isActive = activeDropdown === item.label;
                return (
                  <div 
                    key={idx} 
                    className={n.menuItemWrapper}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => handleMouseEnter(item.label)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <div className={n.menuButton}>
                      <Link 
                        href={item.href || "#"} 
                        className="hover:text-white transition-colors"
                        aria-haspopup="true"
                        aria-expanded={isActive ? "true" : "false"}
                      >
                        {item.label}
                      </Link>
                      <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    </div>
                    <div className={`${n.megaMenuWrapper} ${
                      isActive 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}>
                      <div className={n.megaMenuLayout}>
                        <div className={n.megaMenuLeft}>
                          <div className={n.servicesGrid}>
                            {item.pillars.map((pillar, pIdx) => (
                              <div key={pIdx} className={n.pillarCol}>
                                <div className={n.pillarHeading}>{pillar.title}</div>
                                {pillar.items.map((subItem, sIdx) => {
                                  const SubIcon = subItem.icon;
                                  return (
                                    <Link
                                      key={sIdx}
                                      href={
                                        subItem.customRoute ||
                                        `/services/${subItem.slug}`
                                      }
                                      className={n.subServiceLink}
                                    >
                                      <div className={n.iconWrapper}>
                                        <SubIcon className="w-5 h-5 stroke-[1.5]" />
                                      </div>
                                      <span className="text-[13.5px] font-semibold tracking-tight">
                                        {subItem.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                        {item.featured && (
                          <div className={n.megaMenuRight}>
                            <div className={n.featuredGlow} />
                            <span className={n.featuredTag}>
                              {item.featured.tag}
                            </span>
                            <div className={n.featuredTitle}>
                              {item.featured.title}
                            </div>
                            <p className={n.featuredDesc}>
                              {item.featured.desc}
                            </p>
                            <Link href={item.featured.ctaHref} className={n.featuredCta}>
                              <span className={n.featuredCtaText}>{item.featured.ctaLabel}</span>
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/cta:bg-white transition-colors duration-300">
                                <ChevronDown className="w-4 h-4 -rotate-90 text-white group-hover/cta:text-[#2563EB]" />
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.isMegaMenu && item.industries) {
                const isActive = activeDropdown === item.label;
                return (
                  <div 
                    key={idx} 
                    className={n.menuItemWrapper}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                    onFocus={() => handleMouseEnter(item.label)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setActiveDropdown(null);
                      }
                    }}
                  >
                    <div className={n.menuButton}>
                      <Link 
                        href={item.href || "#"} 
                        className="hover:text-white transition-colors"
                        aria-haspopup="true"
                        aria-expanded={isActive ? "true" : "false"}
                      >
                        {item.label}
                      </Link>
                      <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${isActive ? "rotate-180" : ""}`} />
                    </div>
                    <div className={`${n.megaMenuWrapper} ${
                      isActive 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 translate-y-2 pointer-events-none"
                    }`}>
                      <div className={n.industriesGrid}>
                        {item.industries.map((ind, iIdx) => {
                          const IndIcon = ind.icon;
                          return (
                            <Link
                              key={iIdx}
                              href="/#LeadGen"
                              className={n.industryCard}
                            >
                              <div className={n.industryIcon}>
                                <IndIcon className="w-4.5 h-4.5 stroke-[1.5]" />
                              </div>
                              <div className={n.industryMeta}>
                                <div className={n.industryTitle}>{ind.name}</div>
                                <p className={n.industryDesc}>{ind.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={idx} href={item.href} className={n.menuButton}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className={n.rightActionsGroup}>
            {NAVBAR_DATA.buttons.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                className={
                  btn.variant === "hubspot" ? n.hubspotPill : n.primaryBtn
                }
              >
                {btn.variant === "hubspot" && (
                  <div className={n.hubspotPulseDot} />
                )}
                <span>{btn.label}</span>
              </Link>
            ))}
          </div>

          <button
            className={n.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={n.mobileMenuOverlay}>
          <div className={n.mobileMenuContainer}>
            {NAVBAR_DATA.menuItems.map((item, idx) => {
              if (item.isMegaMenu) {
                const isDropdownOpen = activeMobileDropdown === item.label;
                return (
                  <div key={idx} className={n.mobileDropdownWrapper}>
                    <div className={n.mobileDropdownBtn}>
                      <Link
                        href={item.href || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 text-left"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown(item.label);
                        }}
                        className="p-2 -mr-2"
                        aria-label="Toggle Submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div className={n.mobileSubList}>
                        {item.pillars &&
                          item.pillars
                            .flatMap((p) => p.items)
                            .map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={
                                  sub.customRoute || `/services/${sub.slug}`
                                }
                                className={n.mobileSubLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                        {item.industries &&
                          item.industries.map((ind, iIdx) => (
                            <Link
                              key={iIdx}
                              href="/#LeadGen"
                              className={n.mobileSubLink}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {ind.name}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={n.mobileLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 mt-4">
              {NAVBAR_DATA.buttons.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className={
                    btn.variant === "hubspot"
                      ? n.hubspotMobilePill
                      : `${n.primaryBtn} text-center py-3 w-full`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{btn.label}</span>
                  {btn.variant === "hubspot" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] shadow-[0_0_6px_#FF7A59]" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
