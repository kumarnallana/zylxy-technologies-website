export const mobileMenuStyles = {
  hamburgerWrapper: "block lg:hidden z-[60]",
  hamburgerBtn:
    "flex flex-col justify-center items-center gap-[5px] w-8 h-8 cursor-pointer relative bg-transparent border-none",
  line: "w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out",
  lineOpen1: "transform rotate-45 translate-y-[7px]",
  lineOpen2: "opacity-0",
  lineOpen3: "transform -rotate-45 -translate-y-[7px]",
  overlay:
    "fixed inset-0 bg-[#050E21] z-[50] flex flex-col pt-[100px] px-8 pb-8 transition-transform duration-300 ease-in-out lg:hidden",
  overlayOpen: "translate-x-0",
  overlayClosed: "translate-x-full",
  navContainer: "flex flex-col gap-6",
  navItem:
    "text-white text-[24px] font-syne font-bold tracking-tight text-left bg-transparent border-none p-0 flex items-center",
  buttonGroup: "mt-auto flex flex-col gap-4 w-full",
  primaryBtn:
    "w-full py-4 bg-[#2563EB] text-white text-[15px] font-semibold font-inter rounded-[8px] text-center border-none",
  outlineBtn:
    "w-full py-4 bg-transparent border border-white/20 text-white text-[15px] font-semibold font-inter rounded-[8px] text-center",
};
