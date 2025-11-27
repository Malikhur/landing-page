"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const legalSections = [
  {
    title: "General Information",
    content:
      "Csouth Technologies is a U.S.-based technology development company focused on software engineering, inspection systems, workflow platforms, digital tools, cloud solutions, and high-level blockchain integrations. All information presented on this website is for general, informational purposes only and may change without notice.",
  },
  {
    title: "No Financial or Investment Services",
    content:
      "Csouth Technologies does not provide financial, investment, brokerage, trading, or advisory services. No part of this website should be interpreted as an offer to buy, sell, trade, or invest in any digital asset, token, cryptocurrency, or blockchain-related instrument.",
  },
  {
    title: "Blockchain & Tokenization",
    content:
      "References to blockchain or tokenization describe technical implementations only, used strictly as part of our technology services. These references do not represent financial products, investment opportunities, securities, or guarantees of any kind.",
  },
  {
    title: "Third-Party Platforms",
    content:
      "Any third-party technologies mentioned are the property of their respective owners. Csouth Technologies does not endorse or represent any external platform unless explicitly stated.",
  },
  {
    title: "No Guarantees or Warranties",
    content:
      'All services and content provided by Csouth Technologies are offered "as-is," without any warranties, express or implied. No outcomes, results, revenues or performance guarantees are expressed or implied.',
  },
  {
    title: "Accuracy of Information",
    content:
      "Although reasonable efforts are made to maintain accurate and updated content, Csouth Technologies is not responsible for errors, outdated information, or omissions. Website content should not be considered professional, financial, legal or technical advice.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Csouth Technologies is not responsible for any damages, losses, or liabilities—direct or indirect—resulting from the use of this website or any services developed by third-party providers.",
  },
  {
    title: "Contact Information",
    content:
      "For questions regarding this website or to request clarifications, please contact:",
    email: "info@csouthint.com",
  },
];

export default function Legal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="legal"
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a1b29 0%, #081018 100%)",
      }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.2), transparent)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2
            className="text-xl md:text-2xl font-semibold text-white mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Legal Disclaimer
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            Effective Date: January 1st, 2026
          </p>
          <div
            className="w-16 h-0.5"
            style={{ background: "rgba(59, 163, 195, 0.4)" }}
          />
        </motion.div>

        {/* Legal content */}
        <div className="space-y-6">
          {legalSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
            >
              <h3
                className="text-sm font-semibold text-slate-300 mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                {section.content}
                {section.email && (
                  <>
                    <br />
                    <a
                      href={`mailto:${section.email}`}
                      className="text-slate-400 hover:text-[#5eb8d4] transition-colors duration-200"
                    >
                      {section.email}
                    </a>
                  </>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
