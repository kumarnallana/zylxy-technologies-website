export const leadGenStyles = {
  section: "bg-[#050E21] py-[100px] relative overflow-hidden",
  backgroundEffects:
    "absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_60%_at_10%_50%,rgba(37,99,235,0.15)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_90%_80%,rgba(6,182,212,0.08)_0%,transparent_60%)]",
  wrapper: "max-w-[800px] mx-auto px-8 relative",
  headerContainer: "text-center mb-14 flex flex-col items-center",
  pillLine: "flex items-center justify-center gap-2.5 mb-4",
  pillLineBar: "w-5.5 h-0.5 bg-[#2563EB] rounded-sm",
  pillText:
    "text-[14px] font-bold font-inter text-[#60A5FA] tracking-[0.12em] uppercase",
  mainHeading:
    "font-syne font-extrabold text-[clamp(28px,3.5vw,50px)] text-white tracking-[-0.04em] leading-none mb-4.5",
  subHeading:
    "text-[15px] text-white/40 font-inter leading-[1.8] max-w-[420px] mx-auto",

  formCard:
    "bg-white/[0.06] border border-white/[0.12] rounded-[20px] p-[40px_40px_36px] backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-5",
  fullWidthField: "mt-5",
  label:
    "block text-[11px] font-bold font-inter text-[#94A3B8] tracking-[0.06em] uppercase mb-2 transition-colors duration-200",
  labelFocused:
    "block text-[11px] font-bold font-inter text-[#2563EB] tracking-[0.06em] uppercase mb-2 transition-colors duration-200",

  input:
    "w-full p-[12px_14px] border border-white/[0.15] rounded-[6px] text-[14px] font-inter text-white bg-transparent outline-none transition-colors duration-200 focus:border-[#2563EB] placeholder:text-white/30",
  select:
    "w-full p-[12px_14px] border border-white/[0.15] rounded-[6px] text-[14px] font-inter text-white bg-transparent outline-none transition-colors duration-200 focus:border-[#2563EB] appearance-none cursor-pointer bg-no-repeat bg-[position:right_14px_center] pr-10",
  textarea:
    "w-full p-[12px_14px] border border-white/[0.15] rounded-[6px] text-[14px] font-inter text-white bg-transparent outline-none transition-colors duration-200 focus:border-[#2563EB] placeholder:text-white/30 resize-y min-h-[120px]",

  footerRow:
    "mt-8 flex flex-col sm:flex-row items-center justify-between gap-6",
  checkmarksRow: "flex gap-5 flex-wrap",
  checkItem: "flex items-center gap-2",
  checkIcon: "text-[#06B6D4] text-[12px] font-bold",
  checkText: "text-[12px] font-inter text-white/40",
  submitBtn:
    "px-[26px] py-[13px] bg-[#2563EB] text-white text-[14px] font-semibold font-inter rounded-[6px] transition-all hover:bg-[#1D4ED8] hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(37,99,235,0.3)] cursor-pointer border-none",

  successCard:
    "bg-white/[0.06] border border-white/[0.12] rounded-[20px] p-[60px_40px] text-center backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
  successIcon: "text-[44px] mb-5",
  successTitle:
    "font-syne font-extrabold text-[24px] text-white tracking-[-0.03em] mb-3",
  successText: "text-[14px] font-inter text-white/60 leading-[1.7]",

  contactRow: "mt-12 flex justify-center gap-10 flex-wrap",
  contactItem: "flex items-center gap-3",
  contactIcon: "text-[16px]",
  contactLabel:
    "text-[10px] font-inter text-white/30 tracking-[0.08em] uppercase mb-0.5",
  contactValue: "text-[13px] font-inter font-semibold text-white/60",
};
