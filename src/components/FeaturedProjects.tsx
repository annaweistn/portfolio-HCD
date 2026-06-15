import { useState } from "react";
import { FEATURED_PROJECTS, Project } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Calendar, Tag, Layers } from "lucide-react";

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedProjects({
  onSelectProject,
}: FeaturedProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProj = FEATURED_PROJECTS[activeIndex];

  return (
    <section
      id="featured-projects"
      className="py-24 md:py-36 border-t border-stone-900 bg-[#0d0c0b] relative"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#e4b76d] uppercase mb-3">
              WORK
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-100 tracking-tight">
              Selected Projects
            </h2>
          </div>

          {/* Project selector indicators: 01 02 03 04 as clickable tabs */}
          <div className="flex items-center space-x-6 border-b border-stone-800 pb-2 md:pb-4 self-start md:self-auto font-mono text-xs">
            {FEATURED_PROJECTS.map((proj, idx) => (
              <button
                key={proj.id}
                id={`featured-tab-${proj.num}`}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 pb-2 border-b-2 cursor-pointer ${
                  activeIndex === idx
                    ? "border-[#e4b76d] text-white font-medium scale-110"
                    : "border-transparent text-stone-500 hover:text-stone-300"
                }`}
              >
                {proj.num}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Content */}
        <div
          id="featured-carousel-viewport"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
        >
          {/* Active Project Image */}
          <div className="lg:col-span-7 overflow-hidden rounded-xl bg-stone-950 aspect-[16/10] relative group shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProj.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full h-full cursor-pointer overflow-hidden"
                onClick={() => onSelectProject(activeProj)}
              >
                <img
                  src={activeProj.image}
                  alt={activeProj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                {/* Visual hover layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <div className="flex items-center space-x-3 text-white font-sans text-xs font-semibold bg-stone-900/90 py-2.5 px-5 rounded-full border border-white/10 shadow-lg">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#e4b76d]" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Tags overlay for quick visual information */}
            <div className="absolute top-6 left-6 flex flex-wrap gap-2 pointer-events-none">
              {activeProj.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-[#0b0a09]/80 backdrop-blur-md rounded-full border border-white/5 text-[10px] font-mono tracking-wider text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Active Project Info */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProj.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Meta details */}
                <div className="flex items-center space-x-3 text-[11px] font-mono tracking-widest text-[#e4b76d]">
                  <span>{activeProj.num}</span>
                  <span className="text-stone-700">—</span>
                  <span>
                    {activeProj.num === "03"
                      ? "University Project"
                      : activeProj.category}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-serif text-white hover:text-[#e4b76d] cursor-pointer transition-colors leading-tight"
                    onClick={() => onSelectProject(activeProj)}
                  >
                    {activeProj.title}
                  </h3>
                  {activeProj.subtitle && (
                    <p className="mt-2 text-stone-400 font-mono text-xs tracking-wider uppercase text-[#e4b76d]/80">
                      {activeProj.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-stone-400 text-sm leading-relaxed font-light whitespace-pre-line">
                  {activeProj.description}
                </p>

                {/* Meta list */}
                <div className="pt-4 border-t border-stone-850 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[9px] font-mono tracking-[0.2em] text-stone-500 uppercase mb-1">
                      YEAR
                    </span>
                    <span className="text-stone-300 text-xs font-mono">
                      {activeProj.year}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono tracking-[0.2em] text-stone-500 uppercase mb-1">
                      {["01", "02", "03"].includes(activeProj.num)
                        ? "TIME"
                        : "OFFERING"}
                    </span>
                    <span className="text-stone-300 text-xs font-mono">
                      {activeProj.num === "01" || activeProj.num === "02"
                        ? "4 months"
                        : activeProj.num === "03"
                          ? "5 months"
                          : activeProj.category.split(" / ")[0]}
                    </span>
                  </div>
                </div>

                {/* CTA Link to Study */}
                <div className="pt-8">
                  <button
                    id={`featured-case-study-btn-${activeProj.id}`}
                    onClick={() => onSelectProject(activeProj)}
                    className="group py-2.5 border-b border-stone-700 hover:border-[#e4b76d] text-white hover:text-[#e4b76d] font-sans text-xs font-medium tracking-widest uppercase transition-all duration-300 flex items-center space-x-3 cursor-pointer"
                  >
                    <span>View more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#e4b76d] group-hover:translate-x-1.5 transition-all" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
