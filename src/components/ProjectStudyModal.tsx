import { useState, useEffect } from "react";
import { Project, ProjectPhoto } from "../data";
import {
  X,
  Calendar,
  Map,
  Globe,
  User,
  Award,
  ArrowRight,
  CornerDownRight,
} from "lucide-react";
import { motion } from "motion/react";

interface ProjectStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

const getToolsAndTechnology = (num: string): string[] => {
  switch (num) {
    case "01":
      return [
        "Adobe Illustrator",
        "Next.js",
        "Visual Studio Code",
        "3D Printing",
        "3D Modeling",
      ];
    case "02":
      return ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Blender"];
    case "03":
      return [
        "Figma",
        "Adobe Creative Cloud",
        "Arduino",
        "Next.js",
        "Visual Studio Code",
      ];
    default:
      return ["Figma", "Prototyping", "UX/UI Design", "Tailwind CSS"];
  }
};

const getProjectDeliverables = (num: string): string[] => {
  switch (num) {
    case "01":
      return [
        "Concept and development of the Kine-Syms web platform",
        "UX/UI design of the design workspace and simulation environment",
        "Frontend development of the application (Next.js)",
        "Implementation of interactive design and simulation logic",
      ];
    case "02":
      return [
        "User Research",
        "User Interviews",
        "Anforderungsanalyse",
        "UX-Konzeption",
        "UI Design",
        "Interaktiver Figma-Prototyp",
        "Usability Evaluation",
      ];
    case "03":
      return [
        "Clothing Digital Product Passport Conceptual Study",
        "Functional Next.js Jeans Lifecycle Tracking Platform",
        "Interactive Materials & Care Transparency Interfaces",
        "Circular Economy Repair & Ownership Logging Flows",
      ];
    default:
      return [
        "Design System Components & Interaction Blueprints",
        "Interactive Visual Dashboards & Responsive Layouts",
        "Development Handoff Assets & Technical Handoff Specs",
      ];
  }
};

const getProjectChallenge = (num: string, title: string) => {
  switch (num) {
    case "01":
      return {
        challenge:
          "Kine-Syms is an interactive web platform for creating, simulating, and sharing kinematic systems. It enables engineers and designers to digitally design mechanical structures, simulate their motion in real time, and validate their functionality.",
        execution:
          "Within the integrated design workspace, users can create, customize, and iteratively refine complex mechanisms. Real-time simulation enables immediate validation of dynamic behavior directly in the browser. The platform also supports exporting prototypes for digital fabrication methods such as laser cutting.\n\nBy combining digital design, simulation, and physical fabrication, Kine-Syms provides a seamless end-to-end workflow.",
      };
    case "02":
      return {
        challenge:
          "ZEISS Measure is a digital dashboard and process management system for metrology that centralizes and visualizes measurement jobs, machine status, and measurement data. With advanced features for part inspection and measurement process control, it streamlines workflows and improves efficiency in the inspection lab.",
        execution:
          "Flexible job prioritization allows measurement tasks to be reordered dynamically, while real-time data integration continuously captures, analyzes, and visualizes measurement data. Interactive queue management supports efficient task handling and improves resource utilization. A role-based workspace provides tailored access rights and user interfaces for different user groups. Together, these features enhance efficiency, transparency, and process reliability in metrology workflows.",
      };
    case "03":
      return {
        challenge:
          "How can digital product passports make the lifecycle of clothing transparent and create ecological and economic value for users and second-hand platforms?",
        execution:
          "For my university project, the research question was investigated through a self-developed second-hand platform for jeans. The application demonstrates how digital product passports can create transparency throughout the entire lifecycle of a garment. Users gain access to information about materials, origin, care instructions, repairs, and previous ownership, enabling more informed purchasing decisions and encouraging longer product use. At the same time, digital product passports provide added value for second-hand platforms through traceable product data, increased trust, and new opportunities for sustainable and economically viable business models.",
      };
    default:
      return {
        challenge: `For the ${title} initiative, we were tasked with constructing a unified visual expression that translates digital performance indicators directly into human-focused customer design systems.`,
        execution:
          "Through recursive feedback loops and prototyping, we managed to secure a responsive design system that fits modern standards.",
      };
  }
};

const getGalleryLabel1 = (num: string): { title: string; subtitle: string } => {
  switch (num) {
    case "01":
      return {
        title: "01. Exploring the Community",
        subtitle: "(Templates & More)",
      };
    case "02":
      return {
        title: "01. Get in touch",
        subtitle: "(Functions)",
      };
    case "03":
      return {
        title: "01. Jeans and Sustainability",
        subtitle: "(Global popularity and production impact)",
      };
    default:
      return { title: "01. Process", subtitle: "(Exploration & Concept)" };
  }
};

const getGalleryLabel2 = (num: string): { title: string; subtitle: string } => {
  switch (num) {
    case "01":
      return {
        title: "02. Prototyping Mode",
        subtitle: "(Working Interactive Prototype)",
      };

    case "03":
      return {
        title: "02. Circular Fashion Features",
        subtitle:
          "((Secondhand resale and digital product passport integration))",
      };
    default:
      return {
        title: "",
        subtitle: "",
      };
  }
};

export default function ProjectStudyModal({
  project,
  onClose,
}: ProjectStudyModalProps) {
  if (!project) return null;

  const [galleryItems, setGalleryItems] = useState<ProjectPhoto[]>([]);
  const isMoreWork = [
    "rejeans-campaign",
    "stratum-web",
    "vesper",
    "grow-guardian-app",
  ].includes(project.id);

  useEffect(() => {
    if (project) {
      setGalleryItems(project.gallery || getDefaultGallery());
    }
  }, [project]);

  const getDefaultGallery = (): ProjectPhoto[] => {
    return [
      {
        url: "/src/assets/images/meridian_project_1780328058581.png",
        title: "Initial Concept",
        description:
          "Description of first key project photo showing initial research, brainstorming, or sketching process.",
      },
      {
        url: "/src/assets/images/ui_mockup_1780328076406.png",
        title: "Core Wireframes",
        description:
          "Description of second key project photo showing user flows, layout structures, or preliminary designs.",
      },
      {
        url: "/src/assets/images/tech_stage_presentation_1781015744662.png",
        title: "High Fidelity Design",
        description:
          "Description of third key project photo showcasing typography, final branding assets, or styled interfaces.",
      },
      {
        url: "/src/assets/images/award_trophy_design_1781015762435.png",
        title: "Launch & Implementation",
        description:
          "Description of fourth key project photo demonstrating live responsive interfaces, devices, or system architecture.",
      },
    ];
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Dimmed backdrop background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm"
      />

      {/* Main Drawer Modal Content Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        className="relative bg-[#0d0c0b] border border-stone-850 rounded-xl overflow-hidden max-w-4xl w-full max-h-[85vh] overflow-y-auto z-10 text-stone-300 shadow-2xl"
      >
        {/* Floating closure button */}
        <button
          onClick={onClose}
          id="close-study-modal-btn"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>
        {/* Hero Banner inside active project */}
        <div className="aspect-[16/9] w-full bg-stone-950 relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover brightness-[0.7]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0b] via-[#0d0c0b]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 md:left-10 text-left">
            <span className="px-3 py-1 bg-[#e4b76d]/10 border border-[#e4b76d]/30 text-[10px] font-mono tracking-widest text-[#e4b76d] rounded-full">
              {project.num === "03" ? "University Project" : project.category}
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif text-white tracking-tight mt-3">
              {project.title}
            </h3>
          </div>
        </div>{" "}
        {/* Overview section */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Key study summary grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-6 border-b border-stone-900 font-mono text-[11px]">
            <div>
              <span className="block text-stone-500 uppercase tracking-wider mb-1">
                BACKGROUND
              </span>
              <span className="text-white font-medium">
                {project.num === "03" && !isMoreWork
                  ? "University Project"
                  : project.category}
              </span>
            </div>
            <div>
              <span className="block text-stone-500 uppercase tracking-wider mb-1">
                YEAR
              </span>
              <span className="text-white font-medium">
                {project.year || "2025"}
              </span>
            </div>
            <div>
              <span className="block text-stone-500 uppercase tracking-wider mb-1">
                TIMELINE
              </span>
              <span className="text-white font-medium">
                {project.timeline ||
                  (isMoreWork
                    ? project.id === "rejeans-campaign"
                      ? "5 months"
                      : "Completed"
                    : project.num === "01" || project.num === "02"
                      ? "4 months"
                      : "5 months")}
              </span>
            </div>
            <div>
              <span className="block text-stone-500 uppercase tracking-wider mb-1">
                PROJECT STATUS
              </span>
              <span className="text-white font-medium flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full inline-block bg-emerald-500" />
                <span>Completed</span>
              </span>
            </div>
          </div>

          {/* Expanded case study content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-4">
              {isMoreWork ? (
                <div className="space-y-4">
                  <h4 className="text-lg font-sans font-semibold text-white">
                    Project Overview
                  </h4>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-light whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              ) : (
                <>
                  <h4 className="text-lg font-sans font-semibold text-white">
                    Project Challenge & Execution
                  </h4>
                  <p className="text-stone-300 text-xs md:text-sm leading-relaxed font-light">
                    {getProjectChallenge(project.num, project.title).challenge}
                  </p>
                  <p className="text-stone-400 text-xs leading-relaxed font-light whitespace-pre-line">
                    {getProjectChallenge(project.num, project.title).execution}
                  </p>

                  {!["01", "02", "03"].includes(project.num) && (
                    <div className="bg-stone-950 p-4 border border-stone-900 rounded-lg space-y-3">
                      <span className="block text-[10px] font-mono tracking-wider text-stone-500">
                        SYSTEM ARCHITECTURE SUMMARY
                      </span>
                      <ul className="space-y-2 text-xs font-mono text-stone-300 list-inside">
                        <li className="flex items-center space-x-2">
                          <CornerDownRight className="w-3 h-3 text-[#e4b76d]" />
                          <span>
                            Highly optimized Next.js App routing format
                            compatibility
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CornerDownRight className="w-3 h-3 text-[#e4b76d]" />
                          <span>
                            Responsive SVG layout matrices and high-resolution
                            visuals
                          </span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CornerDownRight className="w-3 h-3 text-[#e4b76d]" />
                          <span>
                            Optimized for ultra-fast performance score (Core Web
                            Vitals)
                          </span>
                        </li>
                      </ul>
                    </div>
                  )}

                  {/* Project Deliverables Block */}
                  <div className="bg-stone-950 p-4 border border-stone-900 rounded-lg space-y-3">
                    <span className="block text-[10px] font-mono tracking-wider text-stone-500 uppercase">
                      PROJECT DELIVERABLES
                    </span>
                    <ul className="space-y-2 text-xs font-mono text-stone-300 list-inside">
                      {getProjectDeliverables(project.num).map(
                        (deliverable, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <CornerDownRight className="w-3.5 h-3.5 text-[#e4b76d] mt-0.5 shrink-0" />
                            <span className="leading-snug">{deliverable}</span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </>
              )}
            </div>

            <div className="md:col-span-4 space-y-6">
              <div>
                <span className="block text-[10px] font-mono tracking-wider text-stone-500 uppercase mb-2">
                  TAGS
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#e4b76d]/10 hover:bg-[#e4b76d]/20 rounded-full border border-[#e4b76d]/30 text-[10px] font-mono tracking-wider text-[#e4b76d] transition-all hover:scale-[1.03] duration-300 select-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {!isMoreWork && (
                <div>
                  <span className="block text-[10px] font-mono tracking-wider text-stone-500 uppercase mb-2">
                    TOOLS & TECHNOLOGY
                  </span>
                  <ul className="text-xs space-y-1.5 text-stone-400 font-sans font-light">
                    {getToolsAndTechnology(project.num).map((tech, idx) => (
                      <li key={idx}>• {tech}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-4 border-t border-stone-900">
                <button
                  id="modal-start-project-cta"
                  onClick={onClose}
                  className="w-full text-center py-3 bg-[#e4b76d] text-[#0b0a09] font-sans font-semibold text-xs tracking-wider uppercase rounded hover:bg-white transition-all cursor-pointer flex justify-center items-center space-x-2"
                >
                  <span>Close Case Study</span>
                </button>
              </div>
            </div>
          </div>

          {/* Project Gallery Section */}
          {!isMoreWork && (
            <div className="mt-12 pt-10 border-t border-stone-900/60 space-y-8 text-left">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#e4b76d] uppercase block mb-1">
                  [02 / DESIGN MATERIAL]
                </span>
                <h4 className="text-xl font-serif text-white tracking-tight">
                  Project Gallery & Design Process
                </h4>
                <p className="text-stone-400 text-xs font-light mt-1">
                  A visual overview of the project, highlighting insights,
                  functions, process, and outcomes.
                </p>
              </div>{" "}
              {/* Section 1: Process */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 border-b border-stone-900 pb-2">
                  <span className="text-stone-400 text-xs font-mono uppercase tracking-widest">
                    {getGalleryLabel1(project.num).title}
                  </span>
                  <span className="text-[10px] text-stone-600 font-mono">
                    {getGalleryLabel1(project.num).subtitle}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {galleryItems.slice(0, 2).map((item, index) => {
                    const globalIndex = index;
                    return (
                      <div
                        key={globalIndex}
                        className="group bg-stone-950 border border-stone-900 hover:border-stone-850 rounded-lg p-5 md:p-6 space-y-4 hover:shadow-lg transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          {/* Image block container */}
                          <div className="w-full rounded overflow-hidden bg-stone-950/40 border border-stone-900 p-2 md:p-3 flex items-center justify-center min-h-[220px] md:min-h-[340px] relative">
                            <img
                              src={item.url}
                              alt={item.title}
                              className="max-w-full max-h-[480px] w-auto h-auto object-contain group-hover:scale-[1.01] transition-transform duration-505 rounded-sm"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <h5 className="text-white text-xs font-mono tracking-wide">
                              {item.title}
                            </h5>
                            <p className="text-stone-400 text-xs font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Section 2: Result */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-2 border-b border-stone-900 pb-2">
                  <span className="text-[#e4b76d] text-xs font-mono uppercase tracking-widest">
                    {getGalleryLabel2(project.num).title}
                  </span>
                  <span className="text-[10px] text-[#e4b76d]/50 font-mono">
                    {getGalleryLabel2(project.num).subtitle}
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  {galleryItems.slice(2, 4).map((item, index) => {
                    const globalIndex = index + 2;
                    return (
                      <div
                        key={globalIndex}
                        className="group bg-stone-950 border border-stone-900 hover:border-stone-850 rounded-lg p-5 md:p-6 space-y-4 hover:shadow-lg transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          {/* Image block container */}
                          <div className="w-full rounded overflow-hidden bg-stone-950/40 border border-stone-900 p-2 md:p-3 flex items-center justify-center min-h-[220px] md:min-h-[340px] relative">
                            <img
                              src={item.url}
                              alt={item.title}
                              className="max-w-full max-h-[480px] w-auto h-auto object-contain group-hover:scale-[1.01] transition-transform duration-505 rounded-sm"
                              referrerPolicy="no-referrer"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <h5 className="text-white text-xs font-mono tracking-wide">
                              {item.title}
                            </h5>
                            <p className="text-stone-400 text-xs font-light leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
