export const faqStyles = {
  section: "bg-[#F0F4FF] py-24 scroll-mt-28 border-t border-[#E5DFD7]",
  wrapper: "max-w-[760px] mx-auto px-8",
  headerContainer: "text-center mb-14 flex flex-col items-center",
  pillWrapper: "inline-flex items-center gap-2.5 mb-3.5",
  pillLineBar: "w-5.5 h-0.5 bg-[#2563EB] rounded-sm",
  pillText:
    "text-[18px] font-bold font-inter text-blue-600 tracking-widest uppercase",
  mainHeading:
    "font-syne font-extrabold text-3xl sm:text-4xl md:text-[44px] text-[#131110] tracking-[-0.04em] leading-[1.05] mb-3.5",
  subHeading: "text-[15px] text-[#6B6460] font-inter leading-[1.7]",

  // Added a small vertical gap between items to let the dark "box" expand cleanly
  listContainer: "flex flex-col gap-2.5 border-t border-[#E5DFD7] pt-4",

  itemContainer:
    "group rounded-xl border border-transparent transition-all duration-500 ease-in-out",
  itemContainerOpen: "bg-[#131110] shadow-xl",
  itemContainerClosed:
    "bg-transparent border-b border-[#E5DFD7]/70 hover:bg-white/40",

  questionBtn:
    "w-full py-[22px] px-6 flex items-center justify-between gap-5 bg-transparent border-none cursor-pointer text-left focus:outline-none",

  questionText:
    "font-syne font-bold text-[16px] tracking-[-0.02em] leading-[1.3] transition-colors duration-500",
  questionTextOpen: "text-white",
  questionTextClosed: "text-[#131110] group-hover:text-[#2563EB]",

  iconBox:
    "w-6 h-6 rounded-full flex items-center justify-center text-[16px] shrink-0 transition-all duration-500 font-medium",
  iconBoxOpen: "bg-white text-[#131110] rotate-45",
  iconBoxClosed: "bg-[#2563EB] text-white rotate-0 group-hover:scale-110",

  answerContainer: "overflow-hidden transition-all duration-500 ease-in-out",
  answerText:
    "text-[14px] font-inter leading-[1.75] pb-[22px] px-6 transition-colors duration-500",
  answerTextOpen: "text-[#E5DFD7]",
  answerTextClosed: "text-[#6B6460]",
};
