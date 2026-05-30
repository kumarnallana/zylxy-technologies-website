"use client";

import { servicesData } from "@/data/servicesData";
import { servicesStyles } from "@/styles/sections/services";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();

  const filteredServices =
    activeTab.toLowerCase().trim() === "all"
      ? servicesData.services
      : servicesData.services.filter(
          (s) => s.cat.toLowerCase().trim() === activeTab.toLowerCase().trim(),
        );

  const handleSelectService = (service) => {
    const serviceSlug =
      service.id || service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    router.push(`/services/${serviceSlug}`);
  };

  return (
    <section id="services-section" className={servicesStyles.section}>
      <div className={servicesStyles.wrapper}>
        <div className={servicesStyles.headerRow}>
          <div>
            {/* Exactly matches the solid bar layout config */}
            <div className={servicesStyles.pillLine}>
              <div className={servicesStyles.pillLineBar} />
              <span className={servicesStyles.pillText}>What we do</span>
            </div>

            <h2 className={servicesStyles.mainHeading}>
              End-to-end digital solutions
            </h2>
            <p className={servicesStyles.subHeading}>
              From building your product to growing your audience and training
              your team.
            </p>
          </div>

          <div className={servicesStyles.tabContainer}>
            {servicesData.tabs.map((tab) => {
              const count =
                tab.id.toLowerCase().trim() === "all"
                  ? servicesData.services.length
                  : servicesData.services.filter(
                      (s) =>
                        s.cat.toLowerCase().trim() ===
                        tab.id.toLowerCase().trim(),
                    ).length;

              const isActive =
                activeTab.toLowerCase().trim() === tab.id.toLowerCase().trim();

              return (
                <TabBtn
                  key={tab.id}
                  label={tab.label}
                  count={count}
                  active={isActive}
                  onClick={() => setActiveTab(tab.id)}
                />
              );
            })}
          </div>
        </div>

        <div className={servicesStyles.grid}>
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id || service.title}
              s={service}
              onClick={() => handleSelectService(service)}
            />
          ))}
        </div>

        <div className={servicesStyles.btnRow}>
          <button type="button" className={servicesStyles.consultBtn}>
            Book a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

// React hover state removed completely; handled natively by Tailwind CSS modifiers
function TabBtn({ label, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${servicesStyles.tabBtn} ${
        active ? servicesStyles.tabBtnActive : servicesStyles.tabBtnInactive
      }`}
    >
      {label}
      <span
        className={`${servicesStyles.tabCounter} ${
          active
            ? servicesStyles.tabCounterActive
            : servicesStyles.tabCounterInactive
        }`}
      >
        {count}
      </span>
    </button>
  );
}

function ServiceCard({ s, onClick }) {
  const [h, setH] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      className={servicesStyles.card}
      style={h ? { borderColor: `${s.accent}55` } : undefined}
    >
      <div className={servicesStyles.cardTopRow}>
        {/* Dynamic theme mappings remain inline seamlessly */}
        <div
          className={servicesStyles.iconBox}
          style={{
            background: s.accentBg,
            borderColor: `${s.accent}22`,
            color: s.accent,
          }}
        >
          {s.icon}
        </div>

        {/* Arrow visibility transition handled strictly through parent group hover configurations */}
        <span className={servicesStyles.cardArrow} style={{ color: s.accent }}>
          →
        </span>
      </div>

      <div>
        <h3 className={servicesStyles.cardTitle}>{s.title}</h3>
        <p className={servicesStyles.cardDesc}>{s.desc}</p>
      </div>

      <div className={servicesStyles.tagBox}>
        {s.tags.map((t) => (
          <span
            key={t}
            className={servicesStyles.tagItem}
            style={{
              background: s.accentBg,
              color: s.accent,
              borderColor: `${s.accent}28`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
