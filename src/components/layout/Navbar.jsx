export default function Navbar({ onScrollToServices }) {
  return (
    <nav className="bg-navy border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8 py-3.5 flex items-center justify-between gap-4">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3.5 cursor-pointer shrink-0"
        >
          <div className="w-13 h-13 rounded-xl overflow-hidden bg-navy-light flex items-center justify-center shadow-[0_0_16px_rgba(37,99,235,0.3)] shrink-0">
            <img
              src="/ZylxyLogo.png"
              alt="Zylxy Technologies logo"
              className="w-full h-full object-contain block scale-105"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-syne font-extrabold text-2xl text-white tracking-tight leading-none">
              Zylxy
            </span>
            <span className="font-inter text-[11px] font-semibold text-white/50 tracking-widest uppercase mt-1">
              Technologies
            </span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-0.5">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-3.5 py-1.5 text-sm font-medium text-white/60 font-inter rounded-md hover:text-blue-light hover:bg-blue-primary/10 transition-all cursor-pointer whitespace-nowrap"
          >
            Home
          </button>
          <button
            type="button"
            className="px-3.5 py-1.5 text-sm font-medium text-white/60 font-inter rounded-md hover:text-blue-light hover:bg-blue-primary/10 transition-all cursor-default whitespace-nowrap"
          >
            About
          </button>
          <button
            type="button"
            onClick={onScrollToServices}
            className="px-3.5 py-1.5 text-sm font-medium text-white/60 font-inter rounded-md hover:text-blue-light hover:bg-blue-primary/10 transition-all cursor-pointer whitespace-nowrap"
          >
            Services
          </button>
          <button
            type="button"
            className="px-3.5 py-1.5 text-sm font-medium text-white/60 font-inter rounded-md hover:text-blue-light hover:bg-blue-primary/10 transition-all cursor-pointer whitespace-nowrap flex items-center gap-1"
          >
            Contact <span className="text-xs opacity-50">☎</span>
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <button className="px-5 py-2 text-xs font-semibold font-inter text-white bg-blue-primary rounded-lg hover:bg-blue-hover transition-colors shadow-sm cursor-pointer whitespace-nowrap">
            Free Consultation
          </button>
          <button className="px-5 py-2 text-xs font-semibold font-inter text-white border border-white/20 rounded-lg hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
