"use client";

import { heroData } from "@/data/heroData";
import { heroStyles } from "@/styles/sections/hero";

export default function Hero() {
  return (
    <section className={heroStyles.section}>
      <div className={heroStyles.atmosphereGlow} />
      <div className={heroStyles.gridOverlay} />

      <div className={heroStyles.wrapper}>
        <div className={heroStyles.leftColumn}>
          <div className={heroStyles.badgeContainer}>
            <div className={heroStyles.badgeDot} />
            <span className={heroStyles.badgeText}>{heroData.badge}</span>
          </div>

          <h1 className={heroStyles.heading}>
            {heroData.heading.textBefore}
            <span className={heroStyles.headingGradient}>
              {heroData.heading.gradientText}
            </span>
            {heroData.heading.textAfter}
          </h1>

          <p className={heroStyles.descPrimary}>
            {heroData.descriptionPrimary}
          </p>
          <p className={heroStyles.descSecondary}>
            {heroData.descriptionSecondary}
          </p>

          <div className={heroStyles.btnGroup}>
            <button className={heroStyles.primaryBtn}>
              {heroData.buttons.primary}
            </button>
            <button className={heroStyles.secondaryBtn}>
              {heroData.buttons.secondary}
            </button>
          </div>

          <div className={heroStyles.statsGrid}>
            {heroData.stats.map((item, idx) => (
              <div key={idx} className={heroStyles.statsCard}>
                <div className={heroStyles.statsValue}>{item.value}</div>
                <div className={heroStyles.statsLabel}>{item.label}</div>
                <div className={heroStyles.statsNote}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={heroStyles.rightColumn}>
          <div className={heroStyles.orbContainerWrapper}>
            <div className={heroStyles.orbContainer}>
              <div
                className={heroStyles.orbRingOuter}
                style={{ animationDelay: "0s" }}
              />
              <div
                className={heroStyles.orbRingMid}
                style={{ animationDelay: "-2.5s" }}
              />
              <div
                className={heroStyles.orbRingInner}
                style={{ animationDelay: "-5s" }}
              />
              <div className={heroStyles.orbGlowCore} />

              <svg
                className={heroStyles.svgCanvas}
                viewBox="0 0 600 600"
                style={{ width: "100%", height: "100%" }}
              >
                <defs>
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
                    <stop offset="30%" stopColor="#0284C7" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#0369A1" stopOpacity="0" />
                  </radialGradient>

                  <filter
                    id="glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>

                  <style>{`
                    @keyframes perfectCentricSpin {
                      from { transform: rotate(0deg); }
                      to { transform: rotate(360deg); }
                    }
                    .stabilized-mesh-group {
                      animation: perfectCentricSpin 500s linear infinite;
                    }
                  `}</style>
                </defs>

                <circle
                  cx="300"
                  cy="300"
                  r="180"
                  fill="none"
                  stroke="#1E40AF"
                  strokeWidth="1"
                  strokeDasharray="6 8"
                  opacity="0.4"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="100"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="0.8"
                  strokeDasharray="4 4"
                  opacity="0.5"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="40"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="1"
                  opacity="0.3"
                />

                <g
                  className="stabilized-mesh-group"
                  style={{ transformOrigin: "300px 300px" }}
                >
                  <line
                    x1="300"
                    y1="120"
                    x2="456"
                    y2="210"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <line
                    x1="456"
                    y1="210"
                    x2="456"
                    y2="390"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <line
                    x1="456"
                    y1="390"
                    x2="300"
                    y2="480"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <line
                    x1="300"
                    y1="480"
                    x2="144"
                    y2="390"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <line
                    x1="144"
                    y1="390"
                    x2="144"
                    y2="210"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />
                  <line
                    x1="144"
                    y1="210"
                    x2="300"
                    y2="120"
                    stroke="#60A5FA"
                    strokeWidth="1.5"
                    opacity="0.8"
                  />

                  <line
                    x1="300"
                    y1="120"
                    x2="456"
                    y2="390"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                  <line
                    x1="456"
                    y1="210"
                    x2="144"
                    y2="390"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                  <line
                    x1="456"
                    y1="390"
                    x2="144"
                    y2="210"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                  <line
                    x1="300"
                    y1="480"
                    x2="144"
                    y2="210"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                  <line
                    x1="144"
                    y1="390"
                    x2="300"
                    y2="120"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="3 3"
                    opacity="0.5"
                  />
                  <line
                    x1="300"
                    y1="120"
                    x2="300"
                    y2="480"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="5 5"
                    opacity="0.4"
                  />

                  <line
                    x1="300"
                    y1="300"
                    x2="300"
                    y2="120"
                    stroke="#06B6D4"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                  <line
                    x1="300"
                    y1="300"
                    x2="456"
                    y2="210"
                    stroke="#06B6D4"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                  <line
                    x1="300"
                    y1="300"
                    x2="456"
                    y2="390"
                    stroke="#06B6D4"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                  <line
                    x1="300"
                    y1="300"
                    x2="300"
                    y2="480"
                    stroke="#06B6D4"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                  <line
                    x1="300"
                    y1="300"
                    x2="144"
                    y2="390"
                    stroke="#06B6D4"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />
                  <line
                    x1="300"
                    y1="300"
                    x2="144"
                    y2="210"
                    stroke="#06B6D4"
                    strokeWidth="1.2"
                    opacity="0.7"
                  />

                  <circle
                    cx="300"
                    cy="120"
                    r="6"
                    fill="#60A5FA"
                    filter="url(#glow)"
                  />
                  <circle cx="300" cy="120" r="2.5" fill="#FFFFFF" />

                  <circle
                    cx="456"
                    cy="210"
                    r="5"
                    fill="#38BDF8"
                    filter="url(#glow)"
                  />
                  <circle cx="456" cy="210" r="2" fill="#FFFFFF" />

                  <circle
                    cx="456"
                    cy="390"
                    r="7"
                    fill="#60A5FA"
                    filter="url(#glow)"
                  />
                  <circle cx="456" cy="390" r="3" fill="#FFFFFF" />

                  <circle
                    cx="300"
                    cy="480"
                    r="5"
                    fill="#38BDF8"
                    filter="url(#glow)"
                  />
                  <circle cx="300" cy="480" r="2" fill="#FFFFFF" />

                  <circle
                    cx="144"
                    cy="390"
                    r="6"
                    fill="#60A5FA"
                    filter="url(#glow)"
                  />
                  <circle cx="144" cy="390" r="2.5" fill="#FFFFFF" />

                  <circle
                    cx="144"
                    cy="210"
                    r="4"
                    fill="#38BDF8"
                    filter="url(#glow)"
                  />
                  <circle cx="144" cy="210" r="1.5" fill="#FFFFFF" />

                  <circle
                    cx="378"
                    cy="255"
                    r="3"
                    fill="#06B6D4"
                    opacity="0.9"
                  />
                  <circle
                    cx="378"
                    cy="345"
                    r="3"
                    fill="#06B6D4"
                    opacity="0.9"
                  />
                  <circle
                    cx="222"
                    cy="345"
                    r="3"
                    fill="#06B6D4"
                    opacity="0.9"
                  />
                  <circle
                    cx="222"
                    cy="255"
                    r="3"
                    fill="#06B6D4"
                    opacity="0.9"
                  />
                </g>

                <circle cx="300" cy="300" r="24" fill="url(#coreGlow)" />
                <circle
                  cx="300"
                  cy="300"
                  r="6"
                  fill="#38BDF8"
                  filter="url(#glow)"
                />
                <circle cx="300" cy="300" r="2" fill="#FFFFFF" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className={heroStyles.scrollIndicator}>
        <span className={heroStyles.scrollText}>SCROLL</span>
        <div className={heroStyles.scrollBar} />
      </div>
    </section>
  );
}
