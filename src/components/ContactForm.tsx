import React, { useState } from "react";
import { ArrowRight, Linkedin, MapPin, Mail, Copy, Check } from "lucide-react";

export default function ContactForm() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@anna-weinstein.de");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-form" className="py-24 md:py-36 bg-[#0b0a09] relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-radial-[circle_at_bottom_right_rgba(228, 183, 109,0.08)_0%,_transparent_70%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top small label */}
        <p className="text-[10px] font-mono tracking-[0.25em] text-[#e4b76d] uppercase mb-16">GET IN TOUCH</p>

        {/* Master layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block: Bold Header */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-none">
              Ready to create <br className="hidden md:inline" />
              <span className="italic-display text-[#e4b76d]">something new?</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light max-w-lg">
              Feel free to reach out. I would love to hear about your ideas, questions, or upcoming projects. Let’s start a conversation directly via email.
            </p>
            
            <div className="pt-2 max-w-xs">
              <a
                href="https://www.linkedin.com/in/anna-sophie-w-540939311?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-4 py-3.5 bg-[#141211] border border-[#e4b76d]/20 hover:border-[#e4b76d] hover:bg-stone-900/60 rounded-xl text-stone-200 hover:text-[#e4b76d] transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center space-x-2.5">
                  <Linkedin className="w-4 h-4 text-[#e4b76d] group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-sans font-medium text-stone-200 group-hover:text-white transition-colors">LinkedIn Profile</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-[#e4b76d] group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Right Block: Dynamic Email Link */}
          <div className="lg:col-span-6">
            <div className="bg-[#141211]/60 border border-stone-800/60 p-8 md:p-10 rounded-2xl space-y-8 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#e4b76d]" />
              
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#e4b76d] uppercase block">DIRECT MAIL</span>
                <h3 className="text-2xl font-serif text-white">Let’s connect</h3>
                <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
                  Click below to open your mail client, or copy the email address to write custom inquiry details.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:contact@anna-weinstein.de?subject=Project Inquiry"
                  className="flex w-full justify-between items-center px-6 py-5 bg-white text-black hover:bg-[#e4b76d] hover:text-black font-sans font-semibold text-xs tracking-wider uppercase transition-all rounded-xl group cursor-pointer animate-fade-in"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-black" />
                    <span>Send an Email</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="font-mono text-[10px] lowercase text-black/60 group-hover:text-black/80 hidden sm:inline mr-2">contact@anna-weinstein.de</span>
                    <ArrowRight className="w-3.5 h-3.5 text-black group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex w-full justify-between items-center px-6 py-4 bg-stone-950 hover:bg-stone-900 border border-stone-800/80 hover:border-stone-700 text-stone-300 font-sans text-xs tracking-wider uppercase transition-all rounded-xl group cursor-pointer"
                >
                  <span className="font-mono text-[11px] lowercase text-stone-400 select-all">contact@anna-weinstein.de</span>
                  <div className="flex items-center space-x-1.5 text-stone-400 group-hover:text-white">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px]">Copy Address</span>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>

            {/* Quick social & base details matching bottom footer screenshot lines */}
            <div className="grid grid-cols-2 gap-8 pt-12 md:pt-16 border-t border-stone-900 mt-12">
              <div>
                <span className="block text-[9px] font-mono tracking-[0.2em] text-stone-500 uppercase mb-2">
                  SOCIAL
                </span>
                <a
                  href="https://www.linkedin.com/in/anna-sophie-w-540939311?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-stone-400 hover:text-[#e4b76d] text-xs font-sans transition-colors py-1"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div>
                <span className="block text-[9px] font-mono tracking-[0.2em] text-stone-500 uppercase mb-2">
                  BASED IN
                </span>
                <div className="flex items-center space-x-1.5 text-stone-300">
                  <MapPin className="w-4 h-4 text-stone-500" />
                  <span className="text-xs font-sans">Ellwangen an der Jagst</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
