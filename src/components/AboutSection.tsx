import { motion } from "motion/react";
import { Check, ZoomIn, Eye, Sparkles } from "lucide-react";
import Pinboard from "./Pinboard";
import HMIIntersection from "./HMIIntersection";

export default function AboutSection() {
  const processes = [
    {
      num: "01",
      title: "Discover",
      desc: "Researching people, systems, and contexts to uncover needs, behaviors, and opportunities.",
    },
    {
      num: "02",
      title: "Define",
      desc: "Framing problems and translating insights into meaningful design directions and requirements.",
    },
    {
      num: "03",
      title: "Prototype & Design",
      desc: "Developing concepts, interfaces, and connected experiences through iterative design and prototyping.",
    },
    {
      num: "04",
      title: "Test & Deliver",
      desc: "Validating solutions with users and refining experiences for implementation and real-world impact.",
    },
  ];

  const studioTags = [
    "Design",
    "Web Design",
    "UX",
    "Prototyping",
    "AI",
    "IoT",
    "MedTech",
    "Digital Health",
    "Innovation",
    "Technology",
    "Research",
    "Product Development",
  ];

  return (
    <section
      id="about-atelier"
      className="py-24 md:py-36 bg-[#0b0a09] relative overflow-hidden"
    >
      {/* Horizontal gridlines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-900" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top small label */}
        <p className="text-[10px] font-mono tracking-[0.25em] text-[#e4b76d] uppercase mb-16">
          ABOUT ME
        </p>

        {/* Master Row Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column: Avatar & Headline */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative inline-block">
              {/* Animated outer ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#e4b76d] to-stone-800 opacity-30 blur-sm animate-pulse" />

              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-stone-800 hover:border-[#e4b76d] transition-colors duration-500 shadow-xl">
                <img
                  src="/assets/images/anni.png"
                  alt="Anna Weinstein Avatar"
                  className="w-full h-full object-cover scale-105 hover:scale-115 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-[42px] leading-tight font-serif text-white tracking-tight">
              Hi, my name
              <br />
              is <span className="italic-display text-[#e4b76d]">Anna.</span>
            </h3>
          </div>

          {/* Right Column: Bio texts & studio values */}
          <div className="lg:col-span-7 space-y-8 font-sans">
            <p className="text-stone-300 text-base md:text-lg leading-relaxed font-light">
              I'm a curious person who enjoys exploring new ideas and trying
              things outside of my comfort zone. I’m interested in the
              relationship between people and technology and how design can
              shape more meaningful and intuitive experiences. I enjoy
              experimenting, learning through making, and approaching challenges
              with an open mind.
            </p>

            {/* Tags row */}
            <div className="pt-6">
              <span className="block text-[10px] font-mono tracking-[0.2em] text-stone-500 uppercase mb-4">
                INTERESTS FIELD
              </span>
              <div className="flex flex-wrap gap-2.5">
                {studioTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-stone-900/50 hover:bg-stone-900 hover:border-[#e4b76d]/50 transition-colors duration-300 rounded-full border border-stone-800/80 text-[11px] font-mono tracking-wider text-stone-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Roadmap Items */}
        <div className="border-t border-stone-900 pt-16">
          <span className="block text-[10px] font-mono tracking-[0.2em] text-stone-500 uppercase mb-12">
            HUMAN-CENTERED DESIGN PROCESS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {processes.map((proc, idx) => (
              <motion.div
                key={proc.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative bg-[#0d0c0b] p-6.5 rounded-xl border border-stone-900 hover:border-stone-800 hover:shadow-xl transition-all duration-300"
              >
                {/* Accent vertical line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-[#e4b76d] transition-all rounded-l-xl" />

                <div className="text-xs font-mono text-[#e4b76d] mb-4 bg-[#e4b76d]/5 w-8 h-8 rounded-full flex items-center justify-center font-semibold">
                  {proc.num}
                </div>
                <h4 className="text-lg font-sans font-semibold text-white tracking-tight mb-2 group-hover:text-[#e4b76d] transition-colors">
                  {proc.title}
                </h4>
                <p className="text-stone-400 text-xs leading-relaxed font-light">
                  {proc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dynamic Human-Machine Interface interactive visualizer */}
        <HMIIntersection />

        {/* Pinboard component for sharing/adding moments & events */}
        <Pinboard />
      </div>
    </section>
  );
}
