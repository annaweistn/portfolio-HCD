import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import AboutSection from "./components/AboutSection";
import PortfolioGrid from "./components/PortfolioGrid";
import CVSection from "./components/CVSection";
import ContactForm from "./components/ContactForm";
import ProjectStudyModal from "./components/ProjectStudyModal";
import NextjsDeploymentGuide from "./components/NextjsDeploymentGuide";
import LegalModal from "./components/LegalModal";
import { Project } from "./data";
import { Calendar, CheckCircle2, ChevronRight, Globe, Layers, Sparkles, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isNextJsGuideOpen, setIsNextJsGuideOpen] = useState(false);
  const [isStartProjectOpen, setIsStartProjectOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<"privacy" | "terms" | "cookies" | null>(null);
  const [projectName, setProjectName] = useState("");
  const [projectBrief, setProjectBrief] = useState("");
  const [projectBudget, setProjectBudget] = useState("medium");
  const [startProjectSuccess, setStartProjectSuccess] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleStartProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectName) return;
    setStartProjectSuccess(true);
    setTimeout(() => {
      setStartProjectSuccess(false);
      setIsStartProjectOpen(false);
      setProjectName("");
      setProjectBrief("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0b0a09] text-[#f4f1ec] relative font-sans selection:bg-[#e4b76d]/30 selection:text-[#e4b76d]">
      
      {/* Decorative vertical guiding lines matching design aesthetic */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none z-0" />
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-px bg-white/[0.02] pointer-events-none z-0" />

      {/* Header bar */}
      <Header
        onNavClick={handleNavClick}
        onOpenProjectModal={() => setIsStartProjectOpen(true)}
      />

      {/* Hero landing section */}
      <Hero onScrollToWork={() => handleNavClick("featured-projects")} />

      {/* Main presentation elements */}
      <main className="relative z-10">
        
        {/* Selected works */}
        <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Dynamic 2x2 project collection */}
        <PortfolioGrid onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* Detailed profile & design guidelines */}
        <AboutSection />

        {/* CV Work history */}
        <CVSection />

        {/* Contact panel */}
        <ContactForm />
      </main>

      {/* Styled luxury footer */}
      <footer className="py-12 bg-[#0b0a09] border-t border-stone-900 text-stone-500 text-xs font-sans font-light relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="text-stone-400 font-sans font-medium hover:text-white transition-colors cursor-pointer">
              by Anna Weinstein
            </span>
            <span>•</span>
            <span>© 2026 Creative Studio. All rights reserved.</span>
          </div>
          
          <div className="flex space-x-6 text-stone-500 text-xs font-mono">
            <button
              onClick={() => setLegalModalType("privacy")}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Privacy
            </button>
            <button
              onClick={() => setLegalModalType("terms")}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Terms & Impressum
            </button>
            <button
              onClick={() => setLegalModalType("cookies")}
              className="hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              Cookies
            </button>
          </div>
        </div>
      </footer>

      {/* Legal documents modals */}
      <AnimatePresence>
        {legalModalType && (
          <LegalModal
            type={legalModalType}
            onClose={() => setLegalModalType(null)}
          />
        )}
      </AnimatePresence>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Interactive Namecheap & Next.js Deployment Guide Modal */}
      <AnimatePresence>
        {isNextJsGuideOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsNextJsGuideOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="max-w-3xl w-full z-10"
            >
              <NextjsDeploymentGuide onClose={() => setIsNextJsGuideOpen(false)} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Start Project CTA Interactive Drawer */}
      <AnimatePresence>
        {isStartProjectOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStartProjectOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative bg-[#0d0c0b] border border-stone-850 p-6 md:p-10 rounded-xl max-w-lg w-full z-10 text-stone-300 shadow-2xl"
            >
              <button
                onClick={() => setIsStartProjectOpen(false)}
                id="close-start-proj-modal"
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>

              <div className="space-y-1.5 mb-6">
                <div className="text-xs font-mono text-[#e4b76d] font-semibold tracking-widest uppercase">
                  ATELIER CREATIVE PARTNERSHIP
                </div>
                <h3 className="text-2xl font-serif text-white tracking-tight">Launch a Campaign</h3>
              </div>

              {startProjectSuccess ? (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#e4b76d] mx-auto animate-bounce" />
                  <h4 className="text-lg font-sans font-semibold text-white">Project Request Filed Successfully</h4>
                  <p className="text-stone-400 text-xs font-light">
                    Your initial vision has been cataloged! Anna Weinstein will get in touch directly to set up our discovery call.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleStartProjectSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[9.5px] font-mono tracking-wider text-stone-500 uppercase mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sebastian"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e4b76d] font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-mono tracking-wider text-stone-500 uppercase mb-1.5">
                      Project Goals & Vision
                    </label>
                    <textarea
                      rows={3}
                      placeholder="..."
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#e4b76d] font-sans resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[9.5px] font-mono tracking-wider text-stone-500 uppercase mb-1.5">
                      Estimated Project Tier
                    </label>
                    <select
                      value={projectBudget}
                      onChange={(e) => setProjectBudget(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2.5 text-xs text-stone-300 focus:outline-none focus:border-[#e4b76d]"
                    >
                      <option value="startup">Aesthetic Strategy Only (€2k — €5k)</option>
                      <option value="medium">Complete Brand Overhaul (€5k — €15k)</option>
                      <option value="enterprise">Full Stack & Design System Integration (€15k+)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="submit-start-project-form"
                    className="w-full py-3 bg-white hover:bg-[#e4b76d] text-black font-sans font-semibold text-xs tracking-wider uppercase rounded transition-colors duration-300 cursor-pointer text-center"
                  >
                    Send Project Proposal
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
