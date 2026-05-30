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
    "inline-flex items-center gap-2 bg-[#2563EB]/15 border border-[#2563EB]/30 rounded-full px-4 py-1.5 mb-8",
  badgeDot: "w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06b6d4]",
  badgeText:
    "text-[11px] font-semibold font-inter text-white/70 tracking-widest uppercase",
  heading:
    "font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-[1.0] mb-7 max-w-2xl",
  headingGradient:
    "bg-gradient-to-r from-[#60A5FA] to-[#06B6D4] bg-clip-text text-transparent inline-block",
  descPrimary:
    "text-[17px] text-white/60 font-inter leading-relaxed max-w-lg mb-3.5",
  descSecondary: "text-[13px] text-white/30 font-inter tracking-wide mb-11",
  btnGroup:
    "flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-18",
  primaryBtn:
    "w-full sm:w-auto px-7 py-3.5 bg-[#2563EB] text-white text-sm font-semibold font-inter rounded-lg shadow-[0_2px_14px_rgba(37,99,235,0.35)] transition-all duration-200 hover:bg-[#1D4ED8] hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(37,99,235,0.5)] cursor-pointer pointer-events-auto",
  secondaryBtn:
    "w-full sm:w-auto px-7 py-3.5 bg-transparent border border-white/20 text-white text-sm font-semibold font-inter rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer pointer-events-auto",
  statsGrid:
    "grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden max-w-2xl w-full backdrop-blur-md",
  statsCard: "bg-white/[0.04] p-5.5 text-center flex flex-col justify-center",
  statsValue:
    "font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tighter leading-none mb-1.5",
  statsLabel: "text-[12px] font-medium font-inter text-white/50 mb-1",
  statsNote:
    "text-[10px] font-semibold font-inter text-[#06B6D4] tracking-wider",
  scrollIndicator:
    "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5",
  scrollText: "text-[10px] font-inter text-white/20 tracking-widest",
  scrollBar: "w-px h-9 bg-gradient-to-b from-[#2563EB]/50 to-transparent",

  orbContainerWrapper:
    "absolute right-[-60px] w-[620px] h-[620px] pointer-events-none z-1 animate-orb-float",
  orbContainer: "w-full h-full animate-orbit-spin",
  orbRingOuter:
    "absolute inset-0 rounded-full border border-[#2563EB]/15 animate-ring-pulse",
  orbRingMid:
    "absolute inset-[70px] rounded-full border border-[#2563EB]/25 animate-ring-pulse",
  orbRingInner:
    "absolute inset-[150px] rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 animate-ring-pulse",
  orbGlowCore:
    "absolute inset-[220px] rounded-full border border-[#60A5FA]/30 bg-[radial-gradient(circle,rgba(37,99,235,0.2)_0%,rgba(37,99,235,0.05)_60%,transparent_100%)] shadow-[0_0_12px_rgba(37,99,235,0.3),inset_0_0_40px_rgba(37,99,235,0.2)]",
  orbCenterNode:
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5.5 h-5.5 rounded-full bg-[radial-gradient(circle,#60A5FA,#2563EB)] shadow-[0_0_24px_rgba(96,165,250,0.8),0_0_8px_rgba(37,99,235,0.9)]",
  svgCanvas:
    "absolute inset-0 w-full h-full opacity-35 drop-shadow-[0_0_6px_rgba(96,165,250,0.4)]",
  nodeBase:
    "absolute rounded-full bg-[radial-gradient(circle,rgba(148,197,253,1),rgba(37,99,235,0.8))] shadow-[0_0_16px_rgba(96,165,250,0.7)] animate-star-glow",
};
