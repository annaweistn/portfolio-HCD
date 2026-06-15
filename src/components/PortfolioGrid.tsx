import { OTHER_PROJECTS, Project } from "../data";
import { ArrowUpRight } from "lucide-react";

interface PortfolioGridProps {
  onSelectProject: (proj: Project) => void;
}

export default function PortfolioGrid({ onSelectProject }: PortfolioGridProps) {
  return (
    <section id="portfolio-more-work" className="py-24 bg-[#0d0c0b] relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Row header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#e4b76d] uppercase mb-3">PORTFOLIO</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">More Work</h2>
          </div>
        </div>

        {/* Dynamic 2x2 Layout Staggered on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24">
          {OTHER_PROJECTS.map((proj, idx) => {
            // Apply a slight y-offset to even cards on large screens for a curated editorial staggered grid feel
            const isEven = idx % 2 === 1;
            
            return (
              <div
                key={proj.id}
                id={`more-work-card-${proj.id}`}
                onClick={() => onSelectProject(proj)}
                className={`group cursor-pointer transition-transform duration-500 hover:-translate-y-2 ${
                  isEven ? "md:translate-y-12" : ""
                }`}
              >
                {/* Image Container */}
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-stone-950 border border-stone-900/50 relative mb-6 shadow-xl">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle index tag top-left */}
                  <div className="absolute top-5 left-5 px-2.5 py-1 rounded bg-[#0b0a09]/70 backdrop-blur-md border border-white/5 text-[9px] font-mono tracking-widest text-[#e4b76d]">
                    {proj.num}
                  </div>
                  
                  {/* Active study hover button */}
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Info block */}
                <div className="flex justify-between items-baseline">
                  <div>
                    <h3 className="text-xl font-sans font-semibold text-stone-100 group-hover:text-[#e4b76d] transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-[#e4b76d]/80 tracking-wider mt-1">{proj.category}</p>
                  </div>
                  <span className="text-xs font-mono text-stone-500">{proj.year}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clear spacer offset for staggered grids */}
        <div className="h-12 md:h-24" />

      </div>
    </section>
  );
}
