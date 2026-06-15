import React from "react";
import { X, Scale, Shield, FileText } from "lucide-react";
import { motion } from "motion/react";

interface LegalModalProps {
  type: "privacy" | "terms" | "cookies";
  onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/92 backdrop-blur-md"
      />

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-[#0d0c0b] border border-stone-850 rounded-xl overflow-hidden max-w-2xl w-full max-h-[80vh] overflow-y-auto z-10 text-stone-300 shadow-2xl font-sans"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-legal-modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Header */}
        <div className="p-6 md:p-8 bg-stone-950 border-b border-stone-900 flex items-center space-x-3.5">
          {type === "privacy" && <Shield className="w-5 h-5 text-[#e4b76d]" />}
          {type === "terms" && <Scale className="w-5 h-5 text-[#e4b76d]" />}
          {type === "cookies" && <FileText className="w-5 h-5 text-[#e4b76d]" />}
          
          <div>
            <span className="block text-[9px] font-mono tracking-widest text-stone-500 uppercase">
              Official Legal Norms
            </span>
            <h3 className="text-xl font-serif text-white tracking-tight">
              {type === "privacy" && "Privacy General Policy (GDPR / DSGVO)"}
              {type === "terms" && "Terms of Service & Impressum (§ 5 TMG)"}
              {type === "cookies" && "Cookie Declaration & Consent Tracker"}
            </h3>
          </div>
        </div>

        {/* Legal texts customized to Anna Weinstein based in Ellwangen */}
        <div className="p-6 md:p-8 space-y-6 text-xs md:text-sm leading-relaxed text-stone-400 font-light max-h-[50vh] overflow-y-auto">
          {type === "privacy" && (
            <div className="space-y-4">
              <p>
                <strong>1. Data Protection at a Glance</strong><br />
                The operator of this website takes the protection of your personal details very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations (GDPR / DSGVO) and this Privacy Policy.
              </p>
              <p>
                <strong>2. Data Collection on Our Website</strong><br />
                The processing of data on this website is performed by the website operator:
                <br />
                <span className="block pl-4 mt-1 border-l-2 border-[#e4b76d] text-stone-300 font-mono text-[11px]">
                  Anna Weinstein / Atelier Studio<br />
                  Ellwangen an der Jagst, Baden-Württemberg, Germany<br />
                  Email: contact@anna-weinstein.de
                </span>
              </p>
              <p>
                <strong>3. Contact Form Data Lifecycle</strong><br />
                If you submit queries to us via the contact form or proposal drawer, your information from the request form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in the event of follow-up questions. We do not pass on this data without your explicit consent.
              </p>
              <p>
                <strong>4. Hosting</strong><br />
                This website is hosted by Vercel. When you visit this website, Vercel may automatically collect server log data such as IP address, browser information, operating system, referring URLs, and access times. This processing is necessary to ensure the secure and reliable operation of the website.
              </p>
              <p>
                <strong>5. Contact via Email</strong><br />
                If you contact me via email, the information you provide (such as your name, email address, and message content) will be processed solely for the purpose of handling your inquiry and any follow-up communication.
              </p>
              <p>
                <strong>6. External Links</strong><br />
                This website contains links to external websites, including LinkedIn. Clicking on these links will redirect you to the respective third-party website. Please note that these websites have their own privacy policies and data processing practices, for which I am not responsible.
              </p>
              <p>
                <strong>7. Your Rights (Rights of the Affected Person)</strong><br />
                You have the right at any time and free of charge to get information about the origin, recipient, and purpose of your stored personal data. You also have a right to demand the correction, blocking, or deletion of this data.
              </p>
            </div>
          )}

          {type === "terms" && (
            <div className="space-y-4">
              <p>
                <strong>1. Impressum (§ 5 TMG - German Law Requirement)</strong><br />
                Information legally obliged to disclose on professional corporate presences:
                <br />
                <span className="block pl-4 mt-1 border-l-2 border-[#e4b76d] text-stone-300 font-mono text-[11px]">
                  Atelier / Anna Weinstein<br />
                  Professional Designer & Developer<br />
                  Location: Ellwangen an der Jagst, Germany<br />
                  Contact Email: contact@anna-weinstein.de<br />
                  Tax Identification: Distributed by Local Ellwangen Tax Authorities.
                </span>
              </p>
              <p>
                <strong>2. Scope & Use of Services</strong><br />
                All brand identity, digital prototypes, illustration rendering, and design assets showcased on this web portfolio are intellectual properties of Anna Weinstein & respective active clients. Any unauthorized reproduction, reuse, or publication is strictly forbidden under global copyright laws.
              </p>
              <p>
                <strong>3. Liability for Content</strong><br />
                As service providers, we are liable for our own content on these pages according to regional German laws. However, we are not obligated to monitor transmitted or stored external information or search for circumstances that indicate illegal activity.
              </p>
            </div>
          )}

          {type === "cookies" && (
            <div className="space-y-4">
              <p>
                <strong>1. General Use of Cookies</strong><br />
                Our website utilizes transient and persistent cookies. Cookies do not harm your computer and do not contain viruses. They serve to make our offering more user-friendly, effective, and secure.
              </p>
              <p>
                <strong>2. Type of Cookies Placed</strong><br />
                - <em>Strictly Necessary</em>: Essential for maintaining your screen sizing layout, state management inside the interactive project drawers, and theme rendering configuration.<br />
                - <em>Performance & Analytics</em>: No unsolicited profiling or external spy software is bundled. We strictly prioritize client-side data safety.
              </p>
              <p>
                <strong>3. Revoking and Modifying Consent</strong><br />
                You can configure your browser to inform you about the setting of cookies and only allow cookies in individual cases, refuse cookies for certain scenarios, or automatically delete them when closing the browser.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 md:p-6 bg-stone-950 border-t border-stone-900 flex justify-between items-center text-[11px] font-mono text-stone-500">
          <span>Ellwangen, Germany</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded bg-stone-900 hover:bg-stone-850 hover:text-white border border-stone-800 transition-colors cursor-pointer"
          >
            Agree & Dismiss
          </button>
        </div>
      </motion.div>
    </div>
  );
}
