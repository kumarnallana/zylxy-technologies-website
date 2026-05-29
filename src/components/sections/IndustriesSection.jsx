import { industriesData } from "@/data/industriesData";
import { industriesStyles } from "@/styles/sections/industries";

export default function IndustriesSection() {
  return (
    <section id="industries-section" className={industriesStyles.section}>
      <div className={industriesStyles.wrapper}>
        <div className={industriesStyles.headerRow}>
          <div className={industriesStyles.titleArea}>
            <div className={industriesStyles.pillLine}>
              <div className={industriesStyles.pillLineBar} />
              <span className={industriesStyles.pillText}>
                {industriesData.header.pillText}
              </span>
            </div>
            <h2 className={industriesStyles.mainHeading}>
              {industriesData.header.mainHeading}
            </h2>
          </div>
          <p className={industriesStyles.subHeading}>
            {industriesData.header.subHeading}
          </p>
        </div>

        <div className={industriesStyles.grid}>
          {industriesData.sectors.map((sector) => (
            <div key={sector.id} className={industriesStyles.card}>
              <div className={industriesStyles.cardTopRow}>
                <div className={industriesStyles.iconBox}>{sector.icon}</div>
                <h3 className={industriesStyles.cardTitle}>{sector.title}</h3>
              </div>
              <p className={industriesStyles.cardDesc}>{sector.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
