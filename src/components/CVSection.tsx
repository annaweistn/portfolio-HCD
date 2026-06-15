import { EXPERIENCE as EXPERIENCES, EDUCATION as EDUCATIONS, SKILLS } from "../data";
import { Building2, GraduationCap, Server, Wrench } from "lucide-react";

export default function CVSection() {
  return (
    <section id="cv-experience" className="py-24 md:py-36 bg-[#0b0a09] relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-stone-900" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[10px] font-mono tracking-[0.25em] text-[#e4b76d] uppercase mb-3">CURRICULUM VITAE</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight">Background & Experience</h2>
          </div>
        </div>

        {/* Major split column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          
          {/* Left: EXPERIENCE Column */}
          <div className="space-y-12">
            <div className="flex items-center space-x-3 border-b border-stone-900 pb-4 mb-2">
              <Building2 className="w-4 h-4 text-[#e4b76d]" />
              <h3 className="font-mono text-xs text-stone-400 uppercase tracking-[0.2em]">PROFESSIONAL EXPERIENCE</h3>
            </div>

            <div className="space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <div
                  key={idx}
                  className="group relative pl-6 border-l border-stone-850 hover:border-[#e4b76d] transition-colors duration-500"
                >
                  {/* Floating timeline dot */}
                  <div className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-700 group-hover:bg-[#e4b76d] group-hover:border-[#e4b76d] transition-colors" />

                  <div className="mb-2">
                    <h4 className="text-lg font-sans font-semibold text-white group-hover:text-[#e4b76d] transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <div className="text-xs font-mono text-stone-500 mt-1">{exp.period}</div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-[#e4b76d] mb-4">
                    <span>{exp.company}</span>
                    <span className="text-stone-700">•</span>
                    <span className="text-stone-400">{exp.location}</span>
                    {exp.type && (
                      <>
                        <span className="text-stone-700">•</span>
                        <span className="px-1.5 py-0.5 rounded border border-stone-800 bg-stone-900 text-[9px] text-stone-400 uppercase tracking-widest">
                          {exp.type}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-stone-400 text-xs leading-relaxed font-light mb-6">
                    {exp.description}
                  </p>

                  {/* Badges */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-stone-900/40 border border-stone-850 text-[10px] font-mono tracking-wider text-stone-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: EDUCATION Column */}
          <div className="space-y-12">
            <div className="flex items-center space-x-3 border-b border-stone-900 pb-4 mb-2">
              <GraduationCap className="w-4 h-4 text-[#e4b76d]" />
              <h3 className="font-mono text-xs text-stone-400 uppercase tracking-[0.2em]">ACADEMIC EDUCATION</h3>
            </div>

            <div className="space-y-12">
              {EDUCATIONS.map((edu, idx) => (
                <div
                  key={idx}
                  className="group relative pl-6 border-l border-stone-850 hover:border-[#e4b76d] transition-colors duration-500"
                >
                  {/* Floating dot */}
                  <div className="absolute -left-[5px] top-[6px] w-2.5 h-2.5 rounded-full bg-stone-900 border border-stone-700 group-hover:bg-[#e4b76d] group-hover:border-[#e4b76d] transition-colors" />

                  <div className="mb-2">
                    <h4 className="text-lg font-sans font-semibold text-white group-hover:text-[#e4b76d] transition-colors duration-300">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-mono text-stone-500 mt-1">{edu.period}</div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-[#e4b76d] mb-4">
                    <span>{edu.school}</span>
                    {edu.status && (
                      <>
                        <span className="text-stone-700">•</span>
                        <span className={`px-1.5 py-0.5 rounded text-[8px] tracking-widest font-bold uppercase ${
                          edu.status === "IN PROGRESS" 
                            ? "bg-amber-500/10 text-amber-500 border border-amber-500/20"
                            : "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                        }`}>
                          {edu.status}
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
        </div>

        {/* Bottom Section: Skills Checklist */}
        <div className="border-t border-stone-900 pt-16">
          <p className="text-[10px] font-mono tracking-[0.2em] text-stone-500 uppercase mb-8">SKILLS & TOOLS MATRIX</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Design Skills */}
            <div className="bg-[#0d0c0b] p-6 rounded-lg border border-stone-900 space-y-4">
              <span className="text-xs font-mono text-[#e4b76d] tracking-widest uppercase">Design Skills</span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.design.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-stone-950 rounded border border-stone-850 text-xs font-mono text-stone-300 hover:border-[#e4b76d]/55 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Research & Methods */}
            <div className="bg-[#0d0c0b] p-6 rounded-lg border border-stone-900 space-y-4">
              <span className="text-xs font-mono text-[#e4b76d] tracking-widest uppercase">Research & Methods</span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.research.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-stone-950 rounded border border-stone-850 text-xs font-mono text-stone-300 hover:border-[#e4b76d]/55 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Development & Physical Computing */}
            <div className="bg-[#0d0c0b] p-6 rounded-lg border border-stone-900 space-y-4">
              <span className="text-xs font-mono text-[#e4b76d] tracking-widest uppercase">Development & Physical Computing</span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.development.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-stone-950 rounded border border-stone-850 text-xs font-mono text-stone-300 hover:border-[#e4b76d]/55 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Software */}
            <div className="bg-[#0d0c0b] p-6 rounded-lg border border-stone-900 space-y-4">
              <span className="text-xs font-mono text-[#e4b76d] tracking-widest uppercase">Tools & Software</span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-stone-950 rounded border border-stone-850 text-xs font-mono text-stone-300 hover:border-[#e4b76d]/55 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Management & Collaboration */}
            <div className="bg-[#0d0c0b] p-6 rounded-lg border border-stone-900 space-y-4 text-left">
              <span className="text-xs font-mono text-[#e4b76d] tracking-widest uppercase">Management & Collaboration</span>
              <div className="flex flex-wrap gap-2">
                {SKILLS.management.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-stone-950 rounded border border-stone-850 text-xs font-mono text-stone-300 hover:border-[#e4b76d]/55 transition-colors cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
