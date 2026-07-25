export const announcementStyles = {
  barWrapper:
    "hidden md:flex bg-gradient-to-r from-[#0D1B3E] to-[#1D4ED8] py-[9px] px-8 justify-between items-center flex-wrap gap-2 w-full",
  locationGroup: "flex items-center gap-[10px]",
  statusDot: "w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_7px_#06B6D4]",
  locationText: "text-xs text-white/90 tracking-wider font-sans",
  contactGroup: "flex gap-7",
  contactLink:
    "text-[11px] text-white/90 cursor-pointer tracking-wide font-sans hover:text-white/50 transition-colors",
};

export const navbarStyles = {
  navContainer:
    "px-8 h-full flex items-center justify-between w-full",
  innerWrapper:
    "max-w-7xl mx-auto w-full flex items-center justify-between relative h-full",
  logoSection:
    "flex items-center gap-3 cursor-pointer shrink-0 no-underline group/logo",
  logoBox:
    "w-10 h-10 rounded-xl overflow-hidden bg-gradient-to-br from-[#0F2251] to-[#050E21] flex items-center justify-center border border-white/10 shadow-[0_4px_20px_rgba(37,99,235,0.15)] shrink-0 transition-all duration-300 group-hover/logo:border-blue-500/30 group-hover/logo:shadow-[0_4px_25px_rgba(37,99,235,0.3)]",
  logoImage:
    "w-full h-full object-contain block scale-95 transition-transform duration-300 group-hover/logo:scale-100",
  textContainer: "flex flex-col justify-center gap-0.5",
  brandTitle:
    "font-sans font-extrabold text-xl text-white tracking-tight leading-none transition-colors duration-200 group-hover/logo:text-[#60A5FA]",
  brandSubtitle:
    "font-sans text-[10px] font-bold text-white/65 tracking-[0.12em] uppercase leading-none transition-colors duration-200 group-hover/logo:text-white/80 max-w-[150px] truncate",
  menuList: "hidden md:flex items-center gap-1.5 h-full static",
  menuItemWrapper: "h-full flex items-center group/nav static",
  menuButton:
    "px-4 py-2 text-sm font-medium text-white/60 font-sans hover:text-white hover:bg-white/5 transition-all rounded-md flex items-center gap-1 cursor-pointer no-underline select-none",
  rightActionsGroup: "hidden md:flex items-center gap-4.5",
  hubspotPill:
    "px-4 py-1.5 text-xs font-bold text-[#FF7A59] bg-[#FF7A59]/10 border border-[#FF7A59]/20 hover:border-[#FF7A59]/40 hover:bg-[#FF7A59]/20 transition-all rounded-full flex items-center gap-2 font-sans shadow-[0_0_15px_rgba(255,122,89,0.05)] select-none shrink-0 no-underline",
  hubspotPulseDot:
    "w-1.5 h-1.5 rounded-full bg-[#FF7A59] shadow-[0_0_8px_#FF7A59] animate-pulse",
  hubspotMobilePill:
    "text-sm font-bold text-[#FF7A59] bg-[#FF7A59]/10 border border-[#FF7A59]/20 px-3 py-2 rounded-lg flex items-center justify-between w-full mt-1",
  primaryBtn:
    "px-5 py-2 text-xs bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-sans font-semibold tracking-wide transition-all rounded-lg shrink-0 shadow-[0_2px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_28px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 no-underline",
  megaMenuWrapper:
    "absolute top-full left-0 right-0 w-full bg-[#071330]/95 backdrop-blur-xl border border-white/10 rounded-b-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-300 ease-enterprise z-50 before:content-[''] before:absolute before:top-[-20px] before:left-0 before:right-0 before:h-[20px] before:bg-transparent",
  megaMenuLayout: "flex w-full",
  megaMenuLeft: "w-[75%] p-8 border-r border-white/5",
  megaMenuRight: "w-[25%] p-8 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden flex flex-col rounded-br-2xl",
  servicesGrid: "grid grid-cols-4 gap-8",
  industriesGrid: "grid grid-cols-4 gap-6 p-8",
  pillarCol: "flex flex-col gap-3",
  pillarHeading:
    "text-[11px] font-bold text-[#2563EB] uppercase tracking-wider font-inter border-b border-white/5 pb-2 mb-1.5",
  subServiceLink:
    "flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 hover:-translate-y-0.5 transition-all duration-300 no-underline group/link w-full",
  iconWrapper:
    "w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover/link:bg-[#2563EB] group-hover/link:text-white group-hover/link:border-[#2563EB] group-hover/link:scale-110 transition-all duration-300 shrink-0 shadow-sm",
  industryCard:
    "flex gap-3.5 p-3 rounded-lg bg-transparent border border-transparent hover:bg-white/[0.02] hover:border-white/5 hover:-translate-y-0.5 transition-all duration-300 no-underline group/ind",
  industryIcon:
    "w-8.5 h-8.5 rounded-lg bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] shrink-0 group-hover/ind:bg-[#2563EB] group-hover/ind:text-white group-hover/ind:scale-110 transition-all duration-300",
  industryMeta: "flex flex-col gap-0.5",
  industryTitle:
    "text-[13px] font-bold text-white/80 font-sans tracking-tight group-hover/ind:text-[#2563EB] transition-colors duration-200",
  industryDesc: "text-[11.5px] text-white/40 font-inter leading-relaxed",
  
  // Featured Block Styles
  featuredTag: "text-[10px] font-bold tracking-widest text-[#60A5FA] uppercase border border-[#60A5FA]/30 px-2.5 py-1 rounded-full self-start mb-6 bg-[#60A5FA]/10",
  featuredTitle: "text-lg font-bold text-white mb-2 font-sans tracking-tight leading-snug",
  featuredDesc: "text-[13px] text-white/50 font-inter leading-relaxed mb-8",
  featuredCta: "mt-auto inline-flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-[#2563EB] border border-white/10 hover:border-[#2563EB] transition-all duration-500 ease-enterprise group/cta cursor-pointer no-underline hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)]",
  featuredCtaText: "text-sm font-semibold text-white",
  featuredGlow: "absolute top-0 right-0 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none",
  
  mobileMenuBtn:
    "md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none z-20 hover:scale-105 transition-transform",
  mobileMenuOverlay:
    "absolute top-full left-0 right-0 bg-[#050E21] border-b border-white/10 shadow-xl p-6 z-50 flex flex-col gap-4 max-h-[calc(100vh-4rem)] overflow-y-auto md:hidden",
  mobileMenuContainer: "flex flex-col gap-4",
  mobileLink:
    "text-sm font-bold text-white hover:text-[#2563EB] py-2.5 border-b border-white/5 no-underline font-sans tracking-wide block w-full text-left bg-transparent border-none outline-none cursor-pointer",
  mobileDropdownWrapper: "flex flex-col border-b border-white/5",
  mobileDropdownBtn:
    "w-full flex items-center justify-between text-sm font-bold text-white hover:text-[#2563EB] py-2.5 bg-transparent border-none text-left font-sans tracking-wide cursor-pointer outline-none",
  mobileSubList: "flex flex-col gap-2 pl-4 pb-3 pt-1",
  mobileSubLink:
    "text-xs text-white/50 hover:text-white py-1.5 no-underline font-medium block font-sans",
};
