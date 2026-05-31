export const servicesStyles = {
  section: "bg-[#F0F4FF] py-[96px]",
  wrapper: "max-w-[1200px] mx-auto px-8",
  headerRow: "flex items-end justify-between mb-[52px] flex-wrap gap-5",
  titleArea: "",
  pillLine: "flex items-center gap-2.5 mb-3",
  pillLineBar: "w-5.5 h-0.5 bg-[#2563EB] rounded-sm",
  pillWrapper:
    "px-[12px] py-[4px] bg-[#EFF6FF] border border-[#DBEAFE] rounded-[100px]",
  pillText:
    "text-[11px] font-bold font-inter text-[#2563EB] tracking-[0.08em] uppercase",
  mainHeading:
    "font-syne font-extrabold text-[clamp(26px,3vw,44px)] text-[#050E21] tracking-[-0.04em] leading-[1.05]",
  subHeading:
    "text-[14px] text-[#475569] font-inter leading-[1.7] mt-[10px] max-w-[380px]",

  tabContainer:
    "flex p-[5px] gap-[4px] shrink-0 bg-white border border-[#E2E8F0] rounded-[10px] shadow-[0_1px_6px_rgba(15,23,42,0.05)]",
  tabBtn:
    "px-[18px] py-[8px] rounded-[7px] text-[13px] font-semibold font-inter cursor-pointer border-none transition-all duration-200 flex items-center gap-[7px] whitespace-nowrap outline-none",
  tabBtnActive:
    "bg-[#2563EB] text-white shadow-[0_2px_10px_rgba(37,99,235,0.35)]",
  tabBtnInactive:
    "bg-transparent text-[#475569] hover:bg-[#EFF6FF] hover:text-[#2563EB]",
  tabCounter:
    "text-[10px] font-bold px-[6px] py-[1px] rounded-[4px] transition-all duration-200",
  tabCounterActive: "bg-white/20 text-white",
  tabCounterInactive:
    "bg-[#F1F5F9] text-[#94A3B8] group-hover:bg-[#DBEAFE] group-hover:text-[#2563EB]",

  grid: "grid grid-cols-[repeat(auto-fill,minmax(265px,1fr))] gap-[16px]",

  card: "group bg-white rounded-[14px] p-[24px] cursor-pointer transition-all duration-300 flex flex-col gap-[14px] border border-[#E2E8F0] shadow-[0_1px_4px_rgba(15,23,42,0.05)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#2563EB]/30",
  cardTopRow: "flex items-start justify-between",
  iconBox:
    "w-[46px] h-[46px] rounded-[12px] flex items-center justify-center text-[20px] border transition-colors duration-300",
  cardArrow:
    "text-[15px] opacity-0 transition-all duration-300 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
  cardTitle:
    "font-syne font-bold text-[15px] text-[#050E21] mb-[8px] leading-[1.25] tracking-[-0.02em]",
  cardDesc: "text-[13px] text-[#475569] font-inter leading-[1.7]",
  tagBox: "flex gap-[6px] flex-wrap mt-auto",
  tagItem:
    "text-[11px] font-semibold font-inter px-[9px] py-[3px] rounded-[100px] border tracking-[0.01em]",

  btnRow: "mt-[44px] flex justify-center",
  consultBtn:
    "px-[26px] py-[12px] bg-[#2563EB] text-white text-[14px] font-semibold font-inter rounded-[6px] shadow-[0_4px_14px_rgba(37,99,235,0.3)] transition-all hover:bg-[#1D4ED8] hover:-translate-y-[1px] cursor-pointer border-none",

  detailPageWrapper: "min-h-screen bg-[#F0F4FF] pt-28 pb-24 px-8",
  detailTopNav:
    "flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4",
  detailShell:
    "bg-white rounded-[16px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-200 overflow-hidden",
  detailGrid: "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]",

  detailMedia: "relative h-[400px] lg:h-auto w-full bg-slate-100",
  detailImg: "absolute inset-0 w-full h-full object-cover",
  detailOverlay:
    "absolute inset-0 bg-gradient-to-t from-[#050E21] via-[#050E21]/50 to-transparent",
  detailMetaBox: "absolute bottom-0 left-0 p-8 lg:p-12 w-full",
  detailMetaBadge:
    "inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4",
  detailMetaDot: "w-1.5 h-1.5 rounded-full bg-[#60A5FA]",
  detailMetaText:
    "text-[10px] font-bold font-inter text-white tracking-[0.1em] uppercase",
  detailMainTitle:
    "font-syne font-extrabold text-4xl lg:text-[44px] text-white tracking-[-0.03em] leading-[1.1]",

  detailContent: "p-8 lg:p-12 flex flex-col h-full bg-white relative",
  detailTopControl: "flex flex-wrap items-center justify-between gap-4 mb-8",
  detailTagWrapper: "flex flex-wrap gap-2.5",
  detailMiniTag:
    "text-[11px] font-bold font-inter px-3 py-1 rounded-[4px] border tracking-[0.05em] uppercase",
  backBtn:
    "px-4 py-2 bg-white text-slate-600 text-[13px] font-semibold font-inter rounded-[6px] border border-slate-200 hover:bg-slate-50 hover:text-[#2563EB] hover:border-[#BFDBFE] transition-all",

  detailParagraph: "text-[14px] font-inter text-slate-600 leading-[1.8] mb-10",

  detailBlockHeader: "flex items-center gap-2.5 mb-5",
  detailBlockDash: "w-5.5 h-0.5 bg-[#2563EB] rounded-sm",
  detailBlockTitle:
    "text-[11px] font-bold font-inter text-[#2563EB] tracking-[0.12em] uppercase",

  inclusionGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
  inclusionCard:
    "bg-[#F8FAFC] border border-slate-200 rounded-[6px] p-4 text-[13px] font-inter text-slate-700 font-medium transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(37,99,235,0.12)] hover:border-[#BFDBFE] cursor-pointer",

  processStack: "flex flex-col border-t border-slate-100",
  processItem: "flex items-center gap-4 py-4 border-b border-slate-100",
  processBadge:
    "w-6 h-6 shrink-0 flex items-center justify-center rounded-[4px] text-[11px] font-bold font-inter",
  processText: "text-[13px] font-inter text-slate-600 font-medium",

  detailFooterActions:
    "mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-4",
};
