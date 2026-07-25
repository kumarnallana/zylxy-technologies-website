"use client";

import { navigationMenuLinks as nav } from "@/app/hubspot/data/layout/navigation";
import { navbarStyles as s } from "@/app/hubspot/styles/layout/navbar";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HubSpotNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
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
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
        setActiveDropdown(null);
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setActiveSubmenu(null);
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleSubmenu = (menuId) => {
    setActiveSubmenu(activeSubmenu === menuId ? null : menuId);
  };

  return (
    <nav 
      className={`sticky top-0 z-50 w-full duration-300 ease-in-out h-16 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-xl border-b border-[#F0E8E3] shadow-md" 
          : "bg-white border-b border-transparent"
      }`}
      style={{ transitionProperty: "background-color, backdrop-filter" }}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.container} ref={dropdownRef}>
        <Link href="/" className={s.logoLink}>
          <div className={s.logoIconWrapper}>
            <Image
              src="/logos/ZylxyLogo.png"
              alt="Zylxy Technologies Corporate Logo"
              width={24}
              height={17}
              className="object-contain select-none shrink-0 w-auto h-auto"
              priority
            />
          </div>
          <div className={s.textWrapper}>
            <span className={s.brandTitle}>HubSpot CRM</span>
            <span className={s.brandSubtitle}>CONSULTANT SPECIALIST</span>
          </div>
        </Link>

        <div className={s.menuList}>
          {nav.mainNav.map((link) => (
            <div key={link.name} className={s.menuItemWrapper}>
              <Link href={link.href} className={s.simpleLink}>
                {link.name}
              </Link>
            </div>
          ))}

          {nav.dropdowns.map((dropdown) => {
            const isActive = activeDropdown === dropdown.id;
            return (
              <div
                key={dropdown.id}
                className={s.menuItemWrapper}
                onMouseEnter={() => handleMouseEnter(dropdown.id)}
                onMouseLeave={handleMouseLeave}
                onFocus={() => handleMouseEnter(dropdown.id)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                    setActiveDropdown(null);
                  }
                }}
              >
                <button 
                  className={s.menuButton}
                  aria-haspopup="true"
                  aria-expanded={isActive ? "true" : "false"}
                >
                  {dropdown.label}{" "}
                  <ChevronDown
                    className={`${s.chevron} ${isActive ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`${s.megaMenu} ${
                    isActive
                      ? "opacity-100 pointer-events-auto translate-y-0"
                      : "opacity-0 pointer-events-none translate-y-2"
                  } ${scrolled ? "top-[64px]" : "top-[80px]"}`}
                >
                  <div className={s.megaLeftCol}>
                    <h4 className={s.megaLeftTitle}>
                      {dropdown.label} Solutions
                    </h4>
                    <p className={s.megaLeftDesc}>{dropdown.desc}</p>
                  </div>
                  <div className={s.megaGrid}>
                    {dropdown.items.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link key={idx} href={item.href} className={s.megaCard}>
                          <div className={s.megaCardIcon}>
                            <Icon className={s.megaCardIconInner} />
                          </div>
                          <div className={s.megaCardContent}>
                            <h5 className={s.megaCardTitle}>{item.title}</h5>
                            <p className={s.megaCardDesc}>{item.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={s.desktopActionGroup}>
          <div className={s.actionWrapper}>
            <Link href="/hubspot#consultation" className={s.primaryBtn}>
              Book a Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={s.mobileMenuBtn}
            aria-label="Toggle Mobile Navigation"
          >
            {isOpen ? (
              <X className={s.mobileMenuIcon} />
            ) : (
              <Menu className={s.mobileMenuIcon} />
            )}
          </button>
        </div>

        {isOpen && (
          <div className={s.mobileMenuOverlay}>
            <div className={s.mobileMenuContainer}>
              {nav.mainNav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={s.mobileNavLink}
                >
                  {link.name}
                </Link>
              ))}

              {nav.dropdowns.map((dropdown) => (
                <div key={dropdown.id} className={s.mobileDropdownWrapper}>
                  <button
                    onClick={() => toggleSubmenu(dropdown.id)}
                    className={s.mobileDropdownBtn}
                  >
                    <span>{dropdown.label}</span>
                    <ChevronDown
                      className={`${s.mobileChevron} ${
                        activeSubmenu === dropdown.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeSubmenu === dropdown.id && (
                    <div className={s.mobileSubmenuContainer}>
                      {dropdown.items.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={s.mobileSubLink}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="/hubspot#consultation"
                onClick={() => setIsOpen(false)}
                className={s.mobileCtaBtn}
              >
                Book a Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
