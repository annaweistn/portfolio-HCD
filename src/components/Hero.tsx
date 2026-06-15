import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

interface HeroProps {
  onScrollToWork: () => void;
}

export default function Hero({ onScrollToWork }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 overflow-hidden px-6 md:px-12 bg-radial-[circle_at_center_rgba(20,18,17,1)_0%,_rgba(11,10,9,1)_100%]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full ambient-glow-1 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full ambient-glow-2 pointer-events-none" />

      {/* Decorative vertical lines / margin details from reference */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/[0.04] hidden xl:block" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white/[0.04] hidden xl:block" />

      {/* Margin labels */}
      <div className="absolute left-12 top-1/3 origin-left -rotate-90 text-[10px] uppercase font-mono tracking-[0.25em] text-stone-600 hidden xl:flex items-center space-x-2">
        <span>EST. 2021</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#e4b76d]/50" />
        <span>GERMANY</span>
      </div>
      <div className="absolute right-12 top-1/3 origin-right rotate-90 text-[10px] uppercase font-mono tracking-[0.25em] text-stone-600 hidden xl:flex items-center space-x-2 translate-x-[40%]">
        <span>CREATIVE STUDIO</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#e4b76d]/50" />
        <span>ATELIER</span>
      </div>

      <div className="relative max-w-5xl w-full text-center py-16 z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center space-x-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm rounded-full mb-8 hover:bg-white/[0.06] transition-colors duration-300 cursor-default"
        >
          <span className="w-2 h-2 rounded-full bg-[#e4b76d] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-[#e4b76d] uppercase font-medium">
            Seeking a Master's thesis opportunity
          </span>
        </motion.div>

        {/* Major Animated Title */}
        <div className="space-y-2 mb-10 overflow-hidden">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.85] text-white font-serif font-light tracking-tight"
          >
            Designing the
          </motion.h1>

          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.85] text-[#e4b76d] italic font-serif font-normal"
          >
            Future of
          </motion.h1>

          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] leading-[0.9] text-white font-serif font-light tracking-tight"
          >
            Digital Products
          </motion.h1>
        </div>

        {/* Animated Subtitle and View Work CTA */}
        <div className="max-w-xl mx-auto space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-stone-400 text-sm sm:text-base md:text-md font-sans font-light leading-relaxed tracking-wide"
          >
            Combining human-centered design, emerging technologies, and research to shape innovative experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onScrollToWork}
              id="hero-view-work-btn"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0b0a09] font-sans font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#e4b76d] hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_25px_rgba(255,255,255,0.05)] flex items-center justify-center space-x-3 group cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#0b0a09] group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact-form");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              id="hero-let-talk-btn"
              className="w-full sm:w-auto px-8 py-3.5 border border-stone-800 bg-stone-900/40 text-stone-300 font-sans font-semibold text-xs uppercase tracking-wider rounded-full hover:border-[#e4b76d] hover:text-white hover:scale-[1.03] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-500" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
