export const announcementStyles = {
  barWrapper:
    "hidden md:flex bg-gradient-to-r from-[#0D1B3E] to-[#1D4ED8] py-[9px] px-8 justify-between items-center flex-wrap gap-2",
  locationGroup: "flex items-center gap-[10px]",
  statusDot: "w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_7px_#06B6D4]",
  locationText: "text-xs text-white/60 tracking-wider font-sans",
  contactGroup: "flex gap-7",
  contactLink:
    "text-[11px] text-white/30 cursor-pointer tracking-wide font-sans hover:text-white/50 transition-colors",
};

export const navbarStyles = {
  navContainer:
    "bg-[#050E21] border-b border-white/5 px-8 h-15 flex items-center justify-between gap-4 sticky top-0 z-50",
  innerWrapper: "max-w-7xl mx-auto w-full flex items-center justify-between",
  logoSection: "flex items-center gap-2.5 cursor-pointer shrink-0",
  logoBox:
    "w-8.5 h-8.5 rounded-lg overflow-hidden bg-[#0F2251] flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.25)] shrink-0",
  logoImage: "w-full h-full object-contain block",
  textContainer: "flex flex-col line-height-1",
  brandTitle: "font-sans font-extrabold text-lg text-white tracking-tight",
  brandSubtitle:
    "font-sans text-[10px] font-medium text-white/40 tracking-wider",
  menuList: "hidden md:flex items-center gap-0.5",
  menuButton:
    "px-3.5 py-1.5 text-sm font-medium text-white/60 font-sans hover:text-[#60A5FA] hover:bg-blue-600/12 transition-all rounded-md",
  buttonGroup: "flex items-center gap-2.5",
  primaryBtn:
    "px-5 py-2 text-xs md:text-sm bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-sans font-semibold tracking-wide transition-all rounded-lg shrink-0 shadow-[0_2px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.5)] hover:-translate-y-0.5",
  outlineBtn:
    "px-5 py-2 text-xs md:text-sm bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/10 text-white font-sans font-semibold tracking-wide transition-all rounded-lg shrink-0",
};
