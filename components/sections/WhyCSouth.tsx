"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiCog,
  HiCode,
  HiGlobe,
  HiViewGrid,
  HiShieldCheck,
} from "react-icons/hi";

const reasons = [
  {
    id: 1,
    icon: HiCog,
    title: "Real Industry Experience",
    description: "Deep expertise in automotive operations, built from hands-on experience in the sector.",
  },
  {
    id: 2,
    icon: HiCode,
    title: "Modern & Scalable Practices",
    description: "Development practices designed for growth, maintainability and long-term reliability.",
  },
  {
    id: 3,
    icon: HiGlobe,
    title: "U.S.-Based, Global Capability",
    description: "U.S.-based management with access to global development talent and resources.",
  },
  {
    id: 4,
    icon: HiViewGrid,
    title: "Clear Product Ecosystem",
    description: "Marketplace + Inspections + Reconditioning + Tokenization — all connected in one platform.",
  },
  {
    id: 5,
    icon: HiShieldCheck,
    title: "Security & Clean Architecture",
    description: "Strong focus on security, transparency and clean architectural principles.",
  },
];

export default function WhyCSouth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="why-csouth"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #081520 0%, #0a1e2e 50%, #081520 100%)",
      }}
    >
      {/* Minimal background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.3), transparent)",
          }}
        />
        
        {/* Very subtle floating element */}
        <motion.div
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(26, 106, 138, 0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
            style={{
              background: "rgba(59, 163, 195, 0.1)",
              border: "1px solid rgba(59, 163, 195, 0.2)",
              color: "#5eb8d4",
            }}
          >
            Why Partner With Us
          </motion.span>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #5eb8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why C-South
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-slate-400"
          >
            What makes C-South stand out as a technology partner.
          </motion.p>
        </motion.div>

        {/* Reasons list - clean, minimal design */}
        <div className="space-y-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex items-start gap-5 p-5 md:p-6 rounded-xl transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.01)",
                border: "1px solid rgba(59, 163, 195, 0.08)",
              }}
            >
              {/* Icon */}
              <div
                className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(26, 106, 138, 0.2) 0%, rgba(59, 163, 195, 0.1) 100%)",
                }}
              >
                <reason.icon
                  className="w-6 h-6 transition-colors duration-300"
                  style={{ color: "#5eb8d4" }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3
                  className="text-lg md:text-xl font-semibold text-white mb-2 group-hover:text-[#5eb8d4] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Subtle accent on hover */}
              <div
                className="hidden md:block shrink-0 w-1 h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(180deg, #3ba3c3, transparent)" }}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{
              background: "rgba(59, 163, 195, 0.05)",
              border: "1px solid rgba(59, 163, 195, 0.1)",
            }}
          >
            <HiShieldCheck className="w-5 h-5" style={{ color: "#5eb8d4" }} />
            <span className="text-sm text-slate-400">
              Built on trust, transparency, and technical excellence
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
