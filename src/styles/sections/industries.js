export const clientsStyles = {
  section:
    "bg-[#050E21] border-b border-white/5 py-12 overflow-hidden w-full select-none",
  container: "max-w-6xl mx-auto px-8 mb-8 text-center",
  subtitle:
    "font-sans text-xs font-semibold uppercase tracking-widest text-white/40",
  marqueeTrack:
    "relative flex w-full overflow-x-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#050E21] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#050E21] after:to-transparent",
  marqueeContent:
    "animate-marquee flex whitespace-nowrap gap-16 items-center min-w-full shrink-0",
  itemWrapper: "flex items-center gap-3 shrink-0 px-4",
  iconContainer:
    "w-10 h-10 rounded-lg bg-[#0F2251] flex items-center justify-center p-1 border border-white/5 shadow-sm",
  logoImage:
    "w-full h-full object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300",
  clientName:
    "font-sans font-bold text-lg text-white/30 tracking-tight hover:text-white/70 transition-colors duration-300",
};
