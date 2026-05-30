"use client";

import { caseStudiesData } from "@/data/caseStudiesData";
import { caseStudiesStyles } from "@/styles/sections/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies-section" className={caseStudiesStyles.section}>
      <div className={caseStudiesStyles.wrapper}>
        <div className={caseStudiesStyles.headerRow}>
          <div className={caseStudiesStyles.titleArea}>
            <div className={caseStudiesStyles.pillLine}>
              <div className={caseStudiesStyles.pillLineBar} />
              <span className={caseStudiesStyles.pillText}>
                {caseStudiesData.header.pillText}
              </span>
            </div>
            <h2 className={caseStudiesStyles.mainHeading}>
              {caseStudiesData.header.mainHeading}
            </h2>
          </div>
          <p className={caseStudiesStyles.subHeading}>
            {caseStudiesData.header.subHeading}
          </p>
        </div>

        <div className={caseStudiesStyles.grid}>
          {caseStudiesData.projects.map((project) => (
            <div key={project.id} className={caseStudiesStyles.card}>
              <div className={caseStudiesStyles.serviceText}>
                {project.service}
              </div>
              <div className={caseStudiesStyles.metricText}>
                {project.metric}
              </div>
              <div className={caseStudiesStyles.metricLabelText}>
                {project.metricLabel}
              </div>
              <div className={caseStudiesStyles.divider} />
              <div className={caseStudiesStyles.clientText}>
                {project.client}
              </div>
              <p className={caseStudiesStyles.projectDesc}>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
