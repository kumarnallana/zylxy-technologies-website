export default function AnnouncementBar() {
  return (
    <div className="hidden md:flex bg-gradient-to-r from-navy-medium to-blue-hover py-2 px-8 justify-between items-center flex-wrap gap-2">
      <div className="flex items-center gap-2.5">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-primary shadow-[0_0_7px_var(--color-cyan-primary)]" />
        <span className="text-xs font-inter text-white/60 tracking-wider">
          Zylxy Technologies · HSR Layout, Bangalore 560102
        </span>
      </div>
      <div className="flex gap-7">
        {["info@zylxy.com", "+91 9108 703 123", "www.zylxy.com"].map(
          (contact) => (
            <span
              key={contact}
              className="text-[11px] font-inter text-white/30 cursor-pointer tracking-wide hover:text-white/60 transition-colors"
            >
              {contact}
            </span>
          ),
        )}
      </div>
    </div>
  );
}
