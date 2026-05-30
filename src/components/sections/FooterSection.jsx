"use client";

import { footerData } from "@/data/footerData";
import { footerStyles } from "@/styles/sections/footer";

export default function FooterSection() {
  return (
    <footer id="footer-section" className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        {/* Top Section: Logo & Description */}
        <div className={footerStyles.topSection}>
          <div className={footerStyles.logoContainer}>
            <div className={footerStyles.logoText}>
              {footerData.company.name}
            </div>
            <div className={footerStyles.legalText}>
              {footerData.company.legal}
            </div>
          </div>
          <p className={footerStyles.descText}>{footerData.company.desc}</p>
        </div>

        {/* Middle Section: Links & Contact Grid */}
        <div className={footerStyles.grid}>
          {footerData.columns.map((col) => (
            <div key={col.title} className={footerStyles.colContainer}>
              <div className={footerStyles.colTitle}>{col.title}</div>
              {col.items.map((item) => (
                <div key={item} className={footerStyles.linkItem}>
                  {item}
                </div>
              ))}
            </div>
          ))}

          <div className={footerStyles.colContainer}>
            <div className={footerStyles.colTitle}>
              {footerData.contact.title}
            </div>
            {footerData.contact.items.map((item) => (
              <div key={item} className={footerStyles.contactItem}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Copyright & Legal Links */}
        <div className={footerStyles.bottomSection}>
          <div className={footerStyles.copyright}>
            {footerData.bottom.copyright}
          </div>
          <div className={footerStyles.bottomLinks}>
            {footerData.bottom.links.map((link) => (
              <span key={link} className={footerStyles.bottomLinkItem}>
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
