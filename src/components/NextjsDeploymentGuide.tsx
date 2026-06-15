import { useState } from "react";
import { 
  Globe, 
  Settings, 
  HelpCircle, 
  Clipboard, 
  Check, 
  Server, 
  ExternalLink,
  ChevronDown,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NextjsDeploymentGuideProps {
  onClose?: () => void;
}

export default function NextjsDeploymentGuide({ onClose }: NextjsDeploymentGuideProps) {
  const [userDomain, setUserDomain] = useState("annaweinstein.com");
  const [provider, setProvider] = useState<"vercel" | "netlify" | "cloudrun">("vercel");
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeTab, setActiveTab] = useState<"domain" | "nextjs" | "export">("domain");

  // Nextjs conversion code template sample
  const nextjsAppPageCode = `// app/page.tsx - Modern Next.js App Router format
"use client";

import React, { useState } from "react";
// You can copy the custom components directly into your Next.js project's components/ directory!
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutSection from "@/components/AboutSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import CVSection from "@/components/CVSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [activeProject, setActiveProject] = useState<any>(null);

  return (
    <main className="bg-[#0b0a09] text-[#f4f1ec] min-h-screen">
      <Header 
        onNavClick={(id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
        onOpenProjectModal={() => { /* ... */ }}
        onOpenNextJsModal={() => { /* ... */ }}
      />
      <Hero onScrollToWork={() => document.getElementById("featured-projects")?.scrollIntoView({ behavior: "smooth" })} />
      <FeaturedProjects onSelectProject={(p) => setActiveProject(p)} />
      <AboutSection />
      <PortfolioGrid onSelectProject={(p) => setActiveProject(p)} />
      <CVSection />
      <ContactForm />
    </main>
  );
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nextjsAppPageCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Dynamic DNS Record Calculator based on selected provider and input domain
  const getDnsRecords = () => {
    switch (provider) {
      case "vercel":
        return [
          {
            type: "A",
            host: "@",
            value: "76.76.21.21",
            ttl: "Automatic (or 300)",
            desc: "Points your apex domain directly to Vercel global edge routing network."
          },
          {
            type: "CNAME",
            host: "www",
            value: "cname.vercel-dns.com.",
            ttl: "Automatic (or 300)",
            desc: "Redirects www subdomain traffic securely to Vercel."
          }
        ];
      case "netlify":
        return [
          {
            type: "A",
            host: "@",
            value: "104.198.14.234",
            ttl: "Automatic",
            desc: "Points your apex domain directly to Netlify's load balancer."
          },
          {
            type: "CNAME",
            host: "www",
            value: "your-site-name.netlify.app.",
            ttl: "Automatic",
            desc: "Matches your Netlify app identifier subdomain."
          }
        ];
      case "cloudrun":
        return [
          {
            type: "A",
            host: "@",
            value: "216.239.32.21 (Google IPs)",
            ttl: "3600",
            desc: "Google Cloud Run domain mapping A records."
          },
          {
            type: "AAAA",
            host: "@",
            value: "2001:4860:4802:32::15",
            ttl: "3600",
            desc: "GCP Cloud Run IPv6 support."
          }
        ];
    }
  };

  return (
    <div className="bg-[#141211] border border-[#e4b76d]/20 rounded-xl p-6 md:p-8 shadow-2xl relative">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="flex items-center space-x-2 text-[#e4b76d] mb-1.5">
            <Globe className="h-5 w-5" />
            <span className="font-mono text-xs uppercase tracking-widest font-semibold">Integrations-Panel</span>
          </div>
          <h3 className="text-2xl font-serif text-white tracking-tight">Namecheap & Next.js Deployment</h3>
        </div>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-stone-500 hover:text-white px-2 py-1 rounded bg-stone-900 border border-stone-800 text-xs"
          >
            ✕ Close
          </button>
        )}
      </div>

      <p className="text-stone-400 text-xs leading-relaxed mb-6 font-light">
        Deploying a high-end creative portfolio onto your domain is straightforward. This interactive panel outlines how to migrate your code onto <strong>Next.js</strong> and configure your <strong>Namecheap DNS settings</strong> to map back to this visual experience.
      </p>

      {/* Tabs list */}
      <div className="flex border-b border-stone-850 mb-6">
        <button
          onClick={() => setActiveTab("domain")}
          className={`flex-1 pb-3 text-center text-xs font-mono tracking-wider transition-all border-b-2 cursor-pointer ${
            activeTab === "domain"
              ? "border-[#e4b76d] text-white"
              : "border-transparent text-stone-500 hover:text-stone-300"
          }`}
        >
          1. DNS Settings (Namecheap)
        </button>
        <button
          onClick={() => setActiveTab("nextjs")}
          className={`flex-1 pb-3 text-center text-xs font-mono tracking-wider transition-all border-b-2 cursor-pointer ${
            activeTab === "nextjs"
              ? "border-[#e4b76d] text-white"
              : "border-transparent text-stone-500 hover:text-stone-300"
          }`}
        >
          2. Next.js Migration Code
        </button>
        <button
          onClick={() => setActiveTab("export")}
          className={`flex-1 pb-3 text-center text-xs font-mono tracking-wider transition-all border-b-2 cursor-pointer ${
            activeTab === "export"
              ? "border-[#e4b76d] text-white"
              : "border-transparent text-stone-500 hover:text-stone-300"
          }`}
        >
          3. Export & Build Steps
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "domain" && (
          <motion.div
            key="domain-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* Input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-stone-950 p-4 rounded-lg border border-stone-900">
              <div>
                <label className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1.5">
                  Your Custom Domain Name
                </label>
                <input
                  type="text"
                  value={userDomain}
                  onChange={(e) => setUserDomain(e.target.value)}
                  placeholder="annaweinstein.com"
                  className="w-full bg-stone-900 border border-stone-800 rounded px-3 py-2 text-xs text-stone-200 font-mono focus:outline-none focus:border-[#e4b76d]"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono text-stone-500 uppercase tracking-widest mb-1.5">
                  Select Hosting Platform
                </label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setProvider("vercel")}
                    className={`flex-1 py-2 text-[10px] font-sans font-semibold rounded cursor-pointer ${
                      provider === "vercel"
                        ? "bg-[#e4b76d] text-black"
                        : "bg-stone-900 text-stone-400 hover:bg-stone-850"
                    }`}
                  >
                    Vercel
                  </button>
                  <button
                    onClick={() => setProvider("netlify")}
                    className={`flex-1 py-2 text-[10px] font-sans font-semibold rounded cursor-pointer ${
                      provider === "netlify"
                        ? "bg-[#e4b76d] text-black"
                        : "bg-stone-900 text-stone-400 hover:bg-stone-850"
                    }`}
                  >
                    Netlify
                  </button>
                  <button
                    onClick={() => setProvider("cloudrun")}
                    className={`flex-1 py-2 text-[10px] font-sans font-semibold rounded cursor-pointer ${
                      provider === "cloudrun"
                        ? "bg-[#e4b76d] text-black"
                        : "bg-stone-900 text-stone-400 hover:bg-stone-850"
                    }`}
                  >
                    Cloud Run
                  </button>
                </div>
              </div>
            </div>

            {/* Instruction summary */}
            <div className="space-y-3">
              <span className="block text-[11px] font-mono text-stone-400 font-semibold uppercase tracking-widest">
                NAMECHEAP INSTRUCTIONS FOR: {userDomain.toUpperCase()}
              </span>
              <ol className="list-decimal list-inside space-y-2 text-stone-400 text-xs font-light">
                <li>Log in to your <strong>Namecheap account panel</strong>.</li>
                <li>Go to your <strong>Domain List</strong> and click <strong>Manage</strong> next to <strong>{userDomain}</strong>.</li>
                <li>Switch to the <strong>Advanced DNS</strong> tab.</li>
                <li>Delete any default parking page host records if present.</li>
                <li>Click <strong>Add New Record</strong> and write these values:</li>
              </ol>
            </div>

            {/* DNS Records Table */}
            <div className="overflow-x-auto rounded-lg border border-stone-850 bg-stone-950">
              <table className="w-full text-left text-xs text-stone-300 font-mono">
                <thead className="bg-stone-900 text-[10px] uppercase font-bold text-stone-500 border-b border-stone-850">
                  <tr>
                    <th className="p-3">Type</th>
                    <th className="p-3">Host / Name</th>
                    <th className="p-3">Value / Address</th>
                    <th className="p-3">TTL</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-900">
                  {getDnsRecords().map((record, i) => (
                    <tr key={i} className="hover:bg-stone-900/40">
                      <td className="p-3 font-semibold text-[#e4b76d]">{record.type}</td>
                      <td className="p-3 text-white">{record.host}</td>
                      <td className="p-3 text-emerald-400 break-all">{record.value}</td>
                      <td className="p-3 text-stone-500">{record.ttl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Warning Note */}
            <div className="p-3 bg-yellow-500/5 rounded-lg border border-yellow-500/10 flex items-start space-x-2.5 text-[11px] leading-relaxed text-yellow-300/80 font-sans">
              <Info className="w-4 h-4 text-[#e4b76d] shrink-0 mt-0.5" />
              <span>
                <strong>TTL Notice:</strong> DNS routing replication can take anywhere from 5 minutes to 48 hours to complete worldwide. You can track propagation via sites like DNSChecker.org.
              </span>
            </div>
          </motion.div>
        )}

        {activeTab === "nextjs" && (
          <motion.div
            key="nextjs-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4"
          >
            <div className="flex justify-between items-center">
              <p className="text-[10px] font-mono text-stone-500 tracking-wider uppercase">Conversion Page Module Code</p>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 rounded bg-stone-900 text-[10px] font-mono text-stone-300 hover:text-white border border-stone-800 hover:border-[#e4b76d] cursor-pointer flex items-center space-x-1"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3 h-3 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Clipboard className="w-3 h-3" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-stone-950 p-4 rounded-lg border border-stone-900 max-h-72 overflow-y-auto font-mono text-[11px] leading-relaxed text-stone-400 select-all">
              <pre>{nextjsAppPageCode}</pre>
            </div>

            <p className="text-stone-500 text-[11px] font-sans font-light">
              This code template adapts the custom header, section grids, and active select cards from standard Vite SPA framework to a fully compliant client-side route inside Next.js.
            </p>
          </motion.div>
        )}

        {activeTab === "export" && (
          <motion.div
            key="export-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-stone-300 text-xs font-light">
              <div className="flex items-start space-x-3 bg-stone-900/50 p-4 rounded-lg border border-stone-850">
                <span className="w-5 h-5 rounded-full bg-[#e4b76d]/10 text-[#e4b76d] border border-[#e4b76d]/30 flex items-center justify-center font-bold text-xs font-mono shrink-0">1</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Export Project</h4>
                  <p className="text-stone-400 text-xs">Download this project bundle using the <strong>Export as ZIP</strong> button in the top right Settings bar of the Google AI Studio UI.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-stone-900/50 p-4 rounded-lg border border-stone-850">
                <span className="w-5 h-5 rounded-full bg-[#e4b76d]/10 text-[#e4b76d] border border-[#e4b76d]/30 flex items-center justify-center font-bold text-xs font-mono shrink-0">2</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Initialize Next.js</h4>
                  <p className="text-stone-400 text-xs">Run <code className="font-mono px-1.5 py-0.5 rounded bg-black border border-stone-850 text-emerald-400 text-[10px]">npx create-next-app@latest</code> in your terminal. Copy the source folders (<code className="font-mono text-white text-[10px]/none">/src/components</code>, data etc.) into your Next.js directory structure.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-stone-900/50 p-4 rounded-lg border border-stone-850">
                <span className="w-5 h-5 rounded-full bg-[#e4b76d]/10 text-[#e4b76d] border border-[#e4b76d]/30 flex items-center justify-center font-bold text-xs font-mono shrink-0">3</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">Deploy to Hosting</h4>
                  <p className="text-stone-400 text-xs">Push your code to GitHub, connect your repository to Vercel, and click <strong>Deploy</strong>. Paste your Namecheap custom domain in the project Vercel settings!</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
