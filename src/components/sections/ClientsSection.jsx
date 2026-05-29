"use client";

import { clientsData } from "@/data/clientsData";
import { clientsStyles } from "@/styles/sections/clients";

export default function ClientsSection() {
  const scrollItems = [
    ...clientsData.items,
    ...clientsData.items,
    ...clientsData.items,
  ];

  return (
    <section className={clientsStyles.section}>
      <div className={clientsStyles.container}>
        <div className={clientsStyles.pillWrapper}>
          <div className={clientsStyles.pillLine} />
          <span className={clientsStyles.pill}>{clientsData.pillText}</span>
        </div>
      </div>

      <div className={clientsStyles.marqueeWrapper}>
        <div className={clientsStyles.marqueeTrack}>
          {scrollItems.map((client, idx) => (
            <div key={idx} className={clientsStyles.itemWrapper}>
              <span className={clientsStyles.clientText}>{client}</span>
              <div className={clientsStyles.separatorDot} />
            </div>
          ))}
        </div>
        <div className={clientsStyles.marqueeTrack} aria-hidden="true">
          {scrollItems.map((client, idx) => (
            <div key={`dup-${idx}`} className={clientsStyles.itemWrapper}>
              <span className={clientsStyles.clientText}>{client}</span>
              <div className={clientsStyles.separatorDot} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
