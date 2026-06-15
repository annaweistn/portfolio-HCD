import React from "react";
import { motion } from "motion/react";
import { 
  Users, 
  Cpu, 
  Workflow, 
  Sparkles, 
  Heart,
  Target,
  Smile,
  Compass,
  Search,
  Lightbulb,
  Layers,
  CheckCircle2,
  Database,
  Network,
  Zap,
  Activity
} from "lucide-react";

export default function HMIIntersection() {
  return (
    <div id="hmi-intersection-section" className="mt-24 border-t border-stone-900 pt-20">
      
      {/* Short, elegant section header */}
      <div className="space-y-4 mb-16 text-left">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono tracking-[0.25em] text-[#e4b76d] uppercase bg-[#e4b76d]/5 px-3 py-1 rounded border border-[#e4b76d]/10">
          <Workflow className="w-3.5 h-3.5" /> Systems Thinking
        </span>
        <h3 className="text-2xl md:text-3xl font-serif text-white tracking-tight leading-none">
          Human <span className="text-[#e4b76d] italic-display">&amp;</span> Machine
        </h3>
        <p className="text-stone-400 text-xs font-light max-w-md">
          The structural synergy of human dimensions and technical systems, mediated by design.
        </p>
      </div>

      {/* Structured Minimalist Diagram Blueprint Box */}
      <div className="w-full bg-[#0d0c0b] border border-stone-900 rounded-xl p-8 relative overflow-hidden">
        {/* Fine background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1c1917_1.2px,transparent_1.2px)] [background-size:20px_20px] opacity-25 pointer-events-none" />

        {/* THREE LAYER ARCHITECTURE LAYOUT */}
        <div className="relative z-10 space-y-4">

          {/* 1. HUMAN LAYER (Top Plate) */}
          <div className="bg-stone-950/60 border border-stone-900/80 rounded-lg p-5 hover:border-[#e4b76d]/30 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-stone-900 text-[#e4b76d] rounded border border-stone-800">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#e4b76d] uppercase tracking-widest leading-none mb-1">
                  LAYER 01
                </div>
                <h4 className="text-sm font-sans font-semibold text-white">
                  Human
                </h4>
                <p className="text-stone-400 text-xs font-light leading-relaxed mt-1">
                  Defining user expectations, cognitive models, sensory bounds, and emotional drivers.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-3 border-t border-stone-900/60">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Compass className="w-3.5 h-3.5 text-stone-500" /> Needs
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Target className="w-3.5 h-3.5 text-stone-500" /> Goals
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Heart className="w-3.5 h-3.5 text-stone-500" /> Emotions
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Smile className="w-3.5 h-3.5 text-stone-500" /> Experiences
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CONNECTOR & ANIMATION LINE 1 */}
          <div className="h-12 relative flex justify-center items-center">
            {/* Visual dashed connector string representing signal translation */}
            <div className="absolute top-0 bottom-0 w-[1px] border-l border-dashed border-stone-800" />
            
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-[#e4b76d] shadow-[0_0_8px_rgba(228,183,109,0.8)]"
              animate={{
                y: [-24, 24],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* 2. DESIGN LAYER / MEDIATOR (Center Plate) */}
          <div className="bg-gradient-to-r from-stone-950/80 to-[#e4b76d]/5 border border-[#e4b76d]/20 rounded-lg p-5 shadow-lg shadow-black/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-2 py-0.5 bg-[#e4b76d]/10 text-[#e4b76d] text-[8px] font-mono rounded-bl border-l border-b border-[#e4b76d]/10">
              MEDIATOR
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#e4b76d]/10 text-[#e4b76d] rounded border border-[#e4b76d]/30">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-[#e4b76d] uppercase tracking-widest leading-none mb-1">
                  LAYER 02
                </div>
                <h4 className="text-sm font-sans font-bold text-white flex items-center gap-1.5">
                  Design <span className="text-[#e4b76d] font-normal font-serif italic-display">(My Role)</span>
                </h4>
                <p className="text-stone-300 text-xs font-light leading-relaxed mt-1">
                  Creating meaningful connections between humans and technology.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-3 border-t border-[#e4b76d]/10">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-white bg-[#e4b76d]/10 px-2 py-1 rounded border border-[#e4b76d]/20 font-medium">
                    <Search className="w-3.5 h-3.5 text-[#e4b76d]/80" /> Research
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-800">
                    <Lightbulb className="w-3.5 h-3.5 text-stone-400" /> Ideation
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-800">
                    <Layers className="w-3.5 h-3.5 text-stone-400" /> Prototyping
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-stone-400" /> Validation
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CONNECTOR & ANIMATION LINE 2 */}
          <div className="h-12 relative flex justify-center items-center">
            {/* Visual dashed connector string representing signal translation */}
            <div className="absolute top-0 bottom-0 w-[1px] border-l border-dashed border-stone-800" />
            
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"
              animate={{
                y: [-24, 24],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: 1.2, // Offset sequence
                ease: "easeInOut"
              }}
            />
          </div>

          {/* 3. TECHNOLOGY LAYER (Bottom Plate) */}
          <div className="bg-stone-950/60 border border-stone-900/80 rounded-lg p-5 hover:border-stone-800 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-stone-900 text-stone-400 rounded border border-stone-800">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5 text-[8.5px] font-mono text-stone-500 uppercase tracking-widest leading-none mb-1">
                  LAYER 03
                </div>
                <h4 className="text-sm font-sans font-semibold text-white">
                  Technology
                </h4>
                <p className="text-stone-400 text-xs font-light leading-relaxed mt-1">
                  System architecture, processing logic, physical components, and connection frameworks.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 pt-3 border-t border-stone-900/60">
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Activity className="w-3.5 h-3.5 text-stone-500" /> Systems
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Database className="w-3.5 h-3.5 text-stone-500" /> Data
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Network className="w-3.5 h-3.5 text-stone-500" /> Connectivity
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-stone-300 bg-stone-900/50 px-2 py-1 rounded border border-stone-900">
                    <Zap className="w-3.5 h-3.5 text-stone-500" /> Innovation
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>



      </div>

    </div>
  );
}

