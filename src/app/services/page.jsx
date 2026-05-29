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
          <div className={servicesStyles.titleArea}>
            <div className={servicesStyles.pillLine}>
              <div className={servicesStyles.pillLineBar} />
              <span className={servicesStyles.pillText}>WHAT WE DO</span>
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
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`${servicesStyles.tabBtn} ${isActive ? servicesStyles.tabBtnActive : servicesStyles.tabBtnInactive}`}
                >
                  {tab.label}
                  <span
                    className={`${servicesStyles.tabCounter} ${isActive ? servicesStyles.tabCounterActive : servicesStyles.tabCounterInactive}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={servicesStyles.grid}>
          {filteredServices.map((service) => (
            <div
              key={service.id || service.title}
              onClick={() => handleSelectService(service)}
              className={servicesStyles.card}
            >
              <div>
                <div className={servicesStyles.cardTopRow}>
                  <div
                    className={servicesStyles.iconBox}
                    style={{
                      color: service.accent,
                      backgroundColor: service.accentBg,
                      borderColor: `${service.accent}15`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div className={servicesStyles.cardIndicatorOuter}>
                    <div className={servicesStyles.cardIndicatorInner} />
                  </div>
                </div>
                <div>
                  <h3 className={servicesStyles.cardTitle}>{service.title}</h3>
                  <p className={servicesStyles.cardDesc}>{service.desc}</p>
                </div>
              </div>

              <div className={servicesStyles.tagBox}>
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className={servicesStyles.tagItem}
                    style={{
                      color: service.accent,
                      backgroundColor: service.accentBg,
                      borderColor: `${service.accent}20`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
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
