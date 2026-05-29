export const heroStyles = {
  section:
    "relative min-h-screen bg-[#050E21] flex items-center pt-28 pb-20 px-8 overflow-hidden",
  atmosphereGlow:
    "absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_65%_at_72%_50%,rgba(37,99,235,0.18)_0%,transparent_65%),radial-gradient(ellipse_40%_40%_at_88%_78%,rgba(6,182,212,0.09)_0%,transparent_55%)]",
  gridOverlay:
    "absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(37,99,235,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.055)_1px,transparent_1px)] bg-[size:52px_52px]",
  wrapper:
    "max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10",
  leftColumn: "lg:col-span-7 flex flex-col items-start text-left",
  rightColumn:
    "lg:col-span-5 relative flex justify-center items-center h-[500px] w-full pointer-events-none",
  badgeContainer:
    "inline-flex items-center gap-2 bg-blue-primary/13 border border-blue-primary/28 rounded-full px-4 py-1.5 mb-8",
  badgeDot: "w-1.5 h-1.5 rounded-full bg-cyan-primary shadow-[0_0_8px_#06b6d4]",
  badgeText:
    "text-[11px] font-semibold font-inter text-white/62 tracking-widest uppercase",
  heading:
    "font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-[1.0] mb-7 max-w-2xl",
  headingGradient:
    "bg-gradient-to-r from-blue-light to-cyan-primary bg-clip-text text-transparent inline-block",
  descPrimary:
    "text-[17px] text-white/50 font-inter leading-relaxed max-w-lg mb-3.5",
  descSecondary: "text-[13px] text-white/22 font-inter tracking-wide mb-11",
  btnGroup:
    "flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-18",
  primaryBtn:
    "w-full sm:w-auto px-7 py-3.5 bg-blue-primary text-white text-sm font-semibold font-inter rounded-lg shadow-[0_2px_14px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-blue-hover hover:translate-y-[-1px] hover:shadow-[0_8px_28px_rgba(37,99,235,0.5)] cursor-pointer",
  secondaryBtn:
    "w-full sm:w-auto px-7 py-3.5 bg-transparent border border-white/22 text-white text-sm font-semibold font-inter rounded-lg transition-all duration-180 hover:bg-white/8 hover:border-white/50 cursor-pointer",
  statsGrid:
    "grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden max-w-2xl w-full backdrop-blur-md",
  statsCard: "bg-white/[0.03] p-5.5 text-center flex flex-col justify-center",
  statsValue:
    "font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tighter leading-none mb-1.5",
  statsLabel: "text-[12px] font-medium font-inter text-white/38 mb-1",
  statsNote:
    "text-[10px] font-semibold font-inter text-cyan-primary tracking-wider",
  scrollIndicator:
    "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5",
  scrollText: "text-[10px] font-inter text-white/15 tracking-widest",
  scrollBar: "w-px h-9 bg-gradient-to-b from-blue-primary/40 to-transparent",
  orbContainer:
    "absolute right-[-60px] w-[620px] h-[620px] pointer-events-none z-1 animate-[constellationSpin_60s_linear_infinite]",
  orbRingOuter:
    "absolute inset-0 rounded-full border border-blue-primary/12 animate-[orbPulse_6s_ease-in-out_infinite]",
  orbRingMid:
    "absolute inset-[70px] rounded-full border border-blue-primary/18 animate-[orbPulse_6s_ease-in-out_infinite_0.8s]",
  orbRingInner:
    "absolute inset-[150px] rounded-full border border-blue-primary/22 bg-blue-primary/4 animate-[orbPulse_6s_ease-in-out_infinite_1.4s]",
  orbGlowCore:
    "absolute inset-[220px] rounded-full border border-blue-light/30 bg-[radial-gradient(circle,rgba(37,99,235,0.18)_0%,rgba(37,99,235,0.06)_60%,transparent_100%)] shadow-[0_0_8px_rgba(37,99,235,0.25),inset_0_0_40px_rgba(37,99,235,0.15)] animate-[orbFloat_5s_ease-in-out_infinite]",
  orbCenterNode:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5.5 h-5.5 rounded-full bg-[radial-gradient(circle,var(--color-blue-light),var(--color-blue-primary))] shadow-[0_0_24px_rgba(96,165,250,0.7),0_0_8px_rgba(37,99,235,0.9)] animate-[orbFloat_4s_ease-in-out_infinite]",
  svgCanvas: "absolute inset-0 w-full h-full opacity-18",
};
