import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Check, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  onOpenProjectModal: () => void;
}

export default function Header({ onNavClick, onOpenProjectModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", id: "featured-projects" },
    { label: "About", id: "about-atelier" },
    { label: "Pinnboard", id: "pinnwand-container" },
    { label: "CV", id: "cv-experience" },
    { label: "Contact", id: "contact-form" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b0a09]/80 backdrop-blur-md py-4 border-b border-white/[0.05]"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <div className="flex items-center">
            <a
              href="#"
              id="brand-logo"
              className="relative inline-flex flex-col items-start select-none py-1 group"
            >
              <span className="text-3xl md:text-4xl text-white font-signature tracking-wider leading-none transition-colors duration-300 group-hover:text-[#e4b76d] select-none" style={{ fontFamily: '"Mr De Haviland", cursive' }}>
                Anna Weinstein
              </span>
              {/* Swooping underline stroke */}
              <svg
                viewBox="0 0 200 20"
                className="w-44 h-4 text-white group-hover:text-[#e4b76d] transition-colors duration-300 absolute -bottom-1 -left-1 pointer-events-none stroke-current fill-none opacity-85"
              >
                <path
                  d="M190,2 C130,12 80,14 10,13 C2,13 -1,11 6,10 C20,8 55,10 90,9"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-sans" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => onNavClick(item.id)}
                className="text-stone-400 hover:text-white hover:tracking-wide transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Get in touch CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              id="start-project-header-btn"
              href="mailto:contact@anna-weinstein.de"
              className="px-5 py-2 rounded-full border border-white bg-white text-black font-sans text-sm font-medium hover:bg-transparent hover:text-white transition-all duration-300 flex items-center space-x-2 group cursor-pointer"
            >
              <span>Send mail</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-stone-300 hover:text-white focus:outline-none p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-45 bg-[#0b0a09] pt-28 px-8 flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col space-y-8">
              <div className="border-b border-stone-800 pb-4">
                <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-2">Navigation</p>
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => onNavClick(item.id), 300);
                    }}
                    className="block text-2xl font-serif text-stone-200 hover:text-[#e4b76d] py-3 cursor-pointer text-left w-full"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <a
                id="mobile-start-project-btn"
                href="mailto:contact@anna-weinstein.de"
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full text-center px-6 py-4 rounded-full bg-white text-black font-semibold text-sm hover:bg-stone-200 transition-all cursor-pointer flex justify-center items-center space-x-2"
              >
                <span>Send mail</span>
                <span>→</span>
              </a>
              <div className="text-center font-mono text-stone-500 text-xs">
                Based in Germany • Ellwangen an der Jagst
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
