"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const termsSections = [
  {
    title: "Agreement to Terms",
    content:
      'By accessing or using the website of CSouth Technologies ("we", "us", "our"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree, you must cease use immediately.',
  },
  {
    title: "Use of the Website",
    content:
      "You agree to use the website only for lawful purposes. You must not use it in any way that violates any applicable law or which may damage or interfere with the website's functionality or third-party security.",
  },
  {
    title: "Intellectual Property Rights",
    content:
      "All content, logos, trademarks and design elements on this website are the property of Csouth Technologies or its licensors. You may not reproduce, modify, distribute or exploit such content without our prior written consent.",
  },
  {
    title: "Third-Party Links",
    content:
      "The website may include links to third-party websites. These links are provided for your convenience only. We do not endorse, guarantee or monitor third-party sites; we are not responsible for their content or practices.",
  },
  {
    title: "Disclaimer of Warranties",
    content:
      'The website and all information, products and services are provided "as-is" and "as available" without warranties of any kind, express or implied. We disclaim all warranties to the maximum extent permitted by law.',
  },
  {
    title: "Limitation of Liability",
    content:
      "In no event shall Csouth Technologies or its affiliates be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of the website or any linked service, even if we have been advised of the possibility of such damages.",
  },
  {
    title: "Changes to Terms",
    content:
      'We reserve the right to modify or replace these Terms at any time. The "Effective Date" at top will be updated. Your continued access or use after modifications signifies acceptance of the new terms.',
  },
  {
    title: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United States. You agree to submit to the exclusive jurisdiction of the courts of that state for any dispute arising out of your use of the website.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions about these Terms, please contact us at:",
    email: "info@csouthint.com",
  },
];

export default function TermsOfUse() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="terms"
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #060c14 0%, #050a10 100%)",
      }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.12), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h2
            className="text-xl md:text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Terms of Use
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            Effective Date: January 1st, 2026
          </p>
          <div
            className="w-16 h-0.5"
            style={{ background: "rgba(59, 163, 195, 0.4)" }}
          />
        </motion.div>

        {/* Terms content */}
        <div className="space-y-5">
          {termsSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
            >
              <h3
                className="text-sm font-semibold text-slate-300 mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {section.content}
              </p>
              {section.email && (
                <a
                  href={`mailto:${section.email}`}
                  className="inline-block mt-1 text-xs md:text-sm text-slate-400 hover:text-[#5eb8d4] transition-colors duration-200"
                >
                  {section.email}
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
