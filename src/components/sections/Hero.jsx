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
          <div className={heroStyles.orbContainer}>
            <div className={heroStyles.orbRingOuter} />
            <div className={heroStyles.orbRingMid} />
            <div className={heroStyles.orbRingInner} />
            <div className={heroStyles.orbGlowCore} />

            <div
              className="absolute top-[25%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[radial-gradient(circle,rgba(148,197,253,0.9),rgba(37,99,235,0.6))] shadow-[0_0_18px_rgba(96,165,250,0.5)] animate-[nodeFloat_4s_ease-in-out_infinite]"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="absolute top-[50%] left-[22%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[radial-gradient(circle,rgba(148,197,253,0.9),rgba(37,99,235,0.6))] shadow-[0_0_14px_rgba(96,165,250,0.5)] animate-[nodeFloat_4s_ease-in-out_infinite]"
              style={{ animationDelay: "0.6s" }}
            />
            <div
              className="absolute top-[50%] left-[78%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[radial-gradient(circle,rgba(148,197,253,0.9),rgba(37,99,235,0.6))] shadow-[0_0_20px_rgba(96,165,250,0.5)] animate-[nodeFloat_4s_ease-in-out_infinite]"
              style={{ animationDelay: "1.1s" }}
            />
            <div
              className="absolute top-[75%] left-[38%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[radial-gradient(circle,rgba(148,197,253,0.9),rgba(37,99,235,0.6))] shadow-[0_0_14px_rgba(96,165,250,0.5)] animate-[nodeFloat_4s_ease-in-out_infinite]"
              style={{ animationDelay: "0.4s" }}
            />
            <div
              className="absolute top-[38%] left-[68%] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[radial-gradient(circle,rgba(148,197,253,0.9),rgba(37,99,235,0.6))] shadow-[0_0_12px_rgba(96,165,250,0.5)] animate-[nodeFloat_4s_ease-in-out_infinite]"
              style={{ animationDelay: "1.6s" }}
            />
            <div
              className="absolute top-[62%] left-[60%] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[radial-gradient(circle,rgba(148,197,253,0.9),rgba(37,99,235,0.6))] shadow-[0_0_16px_rgba(96,165,250,0.5)] animate-[nodeFloat_4s_ease-in-out_infinite]"
              style={{ animationDelay: "0.9s" }}
            />

            <div className={heroStyles.orbCenterNode} />

            <svg className={heroStyles.svgCanvas} viewBox="0 0 620 620">
              <line
                x1="310"
                y1="155"
                x2="136"
                y2="310"
                stroke="#60A5FA"
                strokeWidth="0.8"
              />
              <line
                x1="310"
                y1="155"
                x2="484"
                y2="310"
                stroke="#60A5FA"
                strokeWidth="0.8"
              />
              <line
                x1="136"
                y1="310"
                x2="236"
                y2="465"
                stroke="#60A5FA"
                strokeWidth="0.8"
              />
              <line
                x1="484"
                y1="310"
                x2="372"
                y2="372"
                stroke="#60A5FA"
                strokeWidth="0.8"
              />
              <line
                x1="310"
                y1="310"
                x2="422"
                y2="236"
                stroke="#60A5FA"
                strokeWidth="0.8"
              />
              <line
                x1="310"
                y1="310"
                x2="372"
                y2="372"
                stroke="#60A5FA"
                strokeWidth="0.8"
              />
              <line
                x1="310"
                y1="310"
                x2="310"
                y2="155"
                stroke="#06B6D4"
                strokeWidth="0.6"
                opacity="0.6"
              />
              <line
                x1="310"
                y1="310"
                x2="136"
                y2="310"
                stroke="#06B6D4"
                strokeWidth="0.6"
                opacity="0.6"
              />
            </svg>
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
