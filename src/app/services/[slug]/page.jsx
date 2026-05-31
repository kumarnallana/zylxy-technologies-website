import PageTransition from "@/components/ui/PageTransition";
import { servicesData } from "@/data/servicesData";
import { servicesStyles } from "@/styles/sections/services";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return servicesData.services.map((s) => ({
    slug: s.id || s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const service = servicesData.services.find(
    (s) => (s.id || s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === slug,
  );

  if (!service) {
    notFound();
  }

  return (
    <PageTransition>
      <main className={servicesStyles.detailPageWrapper}>
        <div className="max-w-7xl mx-auto w-full">
          <div className={servicesStyles.detailTopNav}>
            <div className={servicesStyles.pillLine}>
              <div className={servicesStyles.pillLineBar} />
              <span className={servicesStyles.pillText}>Service Details</span>
            </div>
            <Link href="/#services-section" className={servicesStyles.backBtn}>
              ← Back to services
            </Link>
          </div>

          <div className={servicesStyles.detailShell}>
            <div className={servicesStyles.detailGrid}>
              <div className={servicesStyles.detailMedia}>
                <img
                  src={service.image || "/api/placeholder/800/600"}
                  alt={service.title}
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
                  <h1 className={servicesStyles.detailMainTitle}>
                    {service.title}
                  </h1>
                </div>
              </div>

              <div className={servicesStyles.detailContent}>
                <div className={servicesStyles.detailTopControl}>
                  <div className={servicesStyles.detailTagWrapper}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={servicesStyles.detailMiniTag}
                        style={{
                          color: service.accent,
                          backgroundColor: service.accentBg,
                          borderColor: `${service.accent}22`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className={servicesStyles.detailParagraph}>
                  {service.detailDesc || service.desc}
                </p>

                <div className="mb-8">
                  <div className={servicesStyles.detailBlockHeader}>
                    <div className={servicesStyles.detailBlockDash} />
                    <span className={servicesStyles.detailBlockTitle}>
                      What is included
                    </span>
                  </div>
                  <div className={servicesStyles.inclusionGrid}>
                    {service.features?.map((feature) => (
                      <div
                        key={feature}
                        className={servicesStyles.inclusionCard}
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className={servicesStyles.detailBlockHeader}>
                    <div className={servicesStyles.detailBlockDash} />
                    <span className={servicesStyles.detailBlockTitle}>
                      How we work
                    </span>
                  </div>
                  <div className={servicesStyles.processStack}>
                    {service.process?.map((step, idx) => (
                      <div key={step} className={servicesStyles.processItem}>
                        <div
                          className={servicesStyles.processBadge}
                          style={{
                            color: service.accent,
                            backgroundColor: service.accentBg,
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
                  <Link
                    href="/#leadgen-section"
                    className={servicesStyles.consultBtn}
                    style={{ display: "inline-block", textAlign: "center" }}
                  >
                    Book a Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
