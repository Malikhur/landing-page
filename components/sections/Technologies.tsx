"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiDeviceMobile,
  HiGlobeAlt,
  HiLightningBolt,
  HiCube,
  HiCloud,
  HiCog,
} from "react-icons/hi";

const services = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Custom Android & iOS applications built with modern, scalable architectures.",
    icon: HiDeviceMobile,
  },
  {
    id: 2,
    title: "Web App Development",
    description: "Responsive and modular platforms built with secure frameworks and clean code practices.",
    icon: HiGlobeAlt,
  },
  {
    id: 3,
    title: "AI-Assisted Tools",
    description: "Smart features that support automation, inspections, data quality control and operational workflows.",
    icon: HiLightningBolt,
  },
  {
    id: 4,
    title: "Blockchain Solutions & Digital Asset Tokenization",
    description: "High-level integrations using blockchain technologies for secure record-keeping, transparency and the tokenization of digital assets and real-world elements.",
    icon: HiCube,
  },
  {
    id: 5,
    title: "Cloud & DevOps Systems",
    description: "Cloud deployment, system monitoring, secure hosting environments and scalable backend architectures.",
    icon: HiCloud,
  },
  {
    id: 6,
    title: "System Integration",
    description: "Connecting third-party services and tools into unified, efficient ecosystems.",
    icon: HiCog,
  },
];

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="technologies"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #081520 0%, #0a1e2e 50%, #081520 100%)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient orbs */}
        <motion.div
          animate={{ 
            y: [-30, 30, -30],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(26, 106, 138, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ 
            y: [30, -30, 30],
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 163, 195, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Hexagon pattern overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L50 17.5 L50 42.5 L30 55 L10 42.5 L10 17.5 Z' fill='none' stroke='%235eb8d4' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
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
            What We Develop
          </motion.span>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            style={{ 
              fontFamily: "var(--font-heading)",
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #5eb8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Technologies & Services
          </h2>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-400">
            We build secure, scalable solutions that help businesses operate more efficiently.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 + index * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(59, 163, 195, 0.1)",
              }}
            >
              {/* Hover gradient background */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, rgba(26, 106, 138, 0.1) 0%, rgba(59, 163, 195, 0.05) 100%)",
                }}
              />

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "radial-gradient(circle at top right, rgba(94, 184, 212, 0.15) 0%, transparent 70%)",
                }}
              />

              {/* Icon with pulse animation on hover */}
              <motion.div 
                className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                whileHover={{ scale: 1.1 }}
                style={{
                  background: "linear-gradient(135deg, rgba(26, 106, 138, 0.3) 0%, rgba(59, 163, 195, 0.15) 100%)",
                }}
              >
                <service.icon className="w-7 h-7 transition-colors duration-300" style={{ color: "#5eb8d4" }} />
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: "0 0 25px rgba(94, 184, 212, 0.4)" }}
                />
              </motion.div>

              {/* Title */}
              <h3 
                className="relative text-lg font-semibold mb-3 text-white group-hover:text-[#5eb8d4] transition-colors duration-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative text-sm text-slate-400 leading-relaxed">
                {service.description}
              </p>

              {/* Bottom shimmer line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.5), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
