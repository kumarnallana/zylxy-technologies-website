export const ServiceCard = ({ service, headingLevel = 3 }) => {
  const Icon = service.icon;
  const Heading = `h${headingLevel}`;

  return (
    <div
      className="group relative flex flex-col bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/50 overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full w-full">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transition-transform duration-300 group-hover:scale-110 shadow-sm shrink-0">
            <Icon
              className="w-6 h-6 stroke-[1.5]"
              style={{ color: service.accent || "#60A5FA" }}
            />
          </div>

          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/50 opacity-0 transform -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shrink-0">
            →
          </div>
        </div>

        <Heading className="font-syne font-bold text-xl text-foreground mb-2 leading-snug tracking-tight group-hover:text-primary transition-colors duration-300">
          {service.title}
        </Heading>
        
        <p className="text-sm text-muted-foreground font-inter leading-relaxed mb-6 line-clamp-3">
          {service.desc}
        </p>

        <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-white/10">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold font-inter px-3 py-1 rounded-full border bg-white/5 text-muted-foreground border-white/10 uppercase tracking-wider transition-colors duration-300 group-hover:border-primary/30 group-hover:text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
