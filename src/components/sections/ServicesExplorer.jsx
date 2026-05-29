"use client";

import { servicesData } from "@/data/servicesData";
import { servicesStyles } from "@/styles/sections/services";
import { useRef, useState } from "react";

export default function ServicesExplorer() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedService, setSelectedService] = useState(null);
  const sectionRef = useRef(null);

  const filteredServices =
    activeTab === "all"
      ? servicesData.services
      : servicesData.services.filter((s) => s.cat === activeTab);

  const handleSelectService = (service) => {
    setSelectedService(service);
    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleBack = () => {
    setSelectedService(null);
    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <section
      id="services-section"
      ref={sectionRef}
      className={servicesStyles.section}
    >
      <div className={servicesStyles.wrapper}>
        <div className={servicesStyles.headerRow}>
          <div className={servicesStyles.titleArea}>
            <div className={servicesStyles.pillLine}>
              <div className={servicesStyles.pillLineBar} />
              <span className={servicesStyles.pillText}>
                {selectedService ? "Service detail" : "What we do"}
              </span>
            </div>
            <h2 className={servicesStyles.mainHeading}>
              {selectedService
                ? selectedService.title
                : "End-to-end digital solutions"}
            </h2>
            <p className={servicesStyles.subHeading}>
              {selectedService
                ? selectedService.detailDesc
                : "From building your product to growing your audience and training your team."}
            </p>
          </div>

          {selectedService ? (
            <div className={servicesStyles.backBtnBox}>
              <button onClick={handleBack} className={servicesStyles.backBtn}>
                ← Back to services
              </button>
            </div>
          ) : (
            <div className={servicesStyles.tabContainer}>
              {servicesData.tabs.map((tab) => {
                const count =
                  tab.id === "all"
                    ? servicesData.services.length
                    : servicesData.services.filter((s) => s.cat === tab.id)
                        .length;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
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
          )}
        </div>

        {selectedService ? (
          <div className={servicesStyles.detailShell}>
            <div className={servicesStyles.detailGrid}>
              <div className={servicesStyles.detailMedia}>
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className={servicesStyles.detailImg}
                />
                <div className={servicesStyles.detailOverlay} />
                <div className={servicesStyles.detailMetaBox}>
                  <div className={servicesStyles.detailMetaBadge}>
                    <div className={servicesStyles.detailMetaDot} />
                    <span className={servicesStyles.detailMetaText}>
                      Dedicated service view
                    </span>
                  </div>
                  <h3 className={servicesStyles.detailMainTitle}>
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className={servicesStyles.detailContent}>
                <div className={servicesStyles.detailTopControl}>
                  <div className={servicesStyles.detailTagWrapper}>
                    {selectedService.tags.map((tag) => (
                      <span
                        key={tag}
                        className={servicesStyles.detailMiniTag}
                        style={{
                          color: selectedService.accent,
                          backgroundColor: selectedService.accentBg,
                          borderColor: `${selectedService.accent}22`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={handleBack}
                    className={servicesStyles.detailInlineBack}
                  >
                    Back
                  </button>
                </div>

                <p className={servicesStyles.detailParagraph}>
                  {selectedService.detailDesc}
                </p>

                <div>
                  <div className={servicesStyles.detailBlockHeader}>
                    What is included
                  </div>
                  <div className={servicesStyles.inclusionGrid}>
                    {selectedService.features.map((feature) => (
                      <div
                        key={feature}
                        className={servicesStyles.inclusionCard}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className={servicesStyles.detailBlockHeader}>
                    How we work
                  </div>
                  <div className={servicesStyles.processStack}>
                    {selectedService.process.map((step, idx) => (
                      <div key={step} className={servicesStyles.processItem}>
                        <div
                          className={servicesStyles.processBadge}
                          style={{
                            color: selectedService.accent,
                            backgroundColor: selectedService.accentBg,
                          }}
                        >
                          {idx + 1}
                        </div>
                        <div className={servicesStyles.processText}>{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={servicesStyles.detailFooterActions}>
                  <button className={servicesStyles.consultBtn}>
                    Book a Free Consultation
                  </button>
                  <button
                    onClick={handleBack}
                    className={servicesStyles.backBtn}
                  >
                    Back to services
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={servicesStyles.grid}>
            {filteredServices.map((service) => (
              <button
                key={service.title}
                onClick={() => handleSelectService(service)}
                className={servicesStyles.card}
                style={{ borderLeft: `3px solid ${service.accent}` }}
              >
                <div className={servicesStyles.cardTopRow}>
                  <div
                    className={servicesStyles.iconBox}
                    style={{
                      color: service.accent,
                      backgroundColor: service.accentBg,
                      borderColor: `${service.accent}22`,
                    }}
                  >
                    {service.icon}
                  </div>
                  <span
                    className={servicesStyles.cardArrow}
                    style={{ color: service.accent }}
                  >
                    →
                  </span>
                </div>
                <div>
                  <h3 className={servicesStyles.cardTitle}>{service.title}</h3>
                  <p className={servicesStyles.cardDesc}>{service.desc}</p>
                </div>
                <div className={servicesStyles.tagBox}>
                  {service.tags.map((t) => (
                    <span
                      key={t}
                      className={servicesStyles.tagItem}
                      style={{
                        color: service.accent,
                        backgroundColor: service.accentBg,
                        borderColor: `${service.accent}28`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        )}

        {!selectedService && (
          <div className={servicesStyles.btnRow}>
            <button className={servicesStyles.consultBtn}>
              Book a Free Consultation
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
