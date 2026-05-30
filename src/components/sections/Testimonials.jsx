import { testimonialsData } from "@/data/testimonialsData";
import { testimonialsStyles } from "@/styles/sections/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials-section" className={testimonialsStyles.section}>
      <div className={testimonialsStyles.wrapper}>
        <div className={testimonialsStyles.headerRow}>
          <div className={testimonialsStyles.titleArea}>
            <div className={testimonialsStyles.pillLine}>
              <div className={testimonialsStyles.pillLineBar} />
              <span className={testimonialsStyles.pillText}>
                {testimonialsData.header.pillText}
              </span>
            </div>
            <h2 className={testimonialsStyles.mainHeading}>
              {testimonialsData.header.mainHeading}
            </h2>
          </div>
          <p className={testimonialsStyles.subHeading}>
            {testimonialsData.header.subHeading}
          </p>
        </div>

        <div className={testimonialsStyles.grid}>
          {testimonialsData.testimonials.map((t, idx) => (
            <div key={idx} className={testimonialsStyles.card}>
              <div className={testimonialsStyles.quoteIcon}>"</div>
              <p className={testimonialsStyles.quoteText}>{t.text}</p>
              <div className={testimonialsStyles.metaRow}>
                <div>
                  <h4 className={testimonialsStyles.clientName}>{t.name}</h4>
                  <div className={testimonialsStyles.clientRole}>{t.role}</div>
                </div>
                <span className={testimonialsStyles.serviceBadge}>
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
