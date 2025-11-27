"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiLightningBolt, HiShieldCheck, HiCode, HiGlobe } from "react-icons/hi";

const features = [
  {
    icon: HiLightningBolt,
    title: "Automotive Solutions",
    description: "Modern software solutions designed specifically for the automotive sector and inspection systems",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    icon: HiShieldCheck,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with secure cloud applications protecting your digital infrastructure",
    gradient: "from-cyan-400 to-teal-400",
  },
  {
    icon: HiCode,
    title: "AI-Assisted Tools",
    description: "Intelligent automation and AI-powered tools to streamline workflows and boost efficiency",
    gradient: "from-teal-400 to-blue-400",
  },
  {
    icon: HiGlobe,
    title: "Scalable Platforms",
    description: "Future-ready workflow platforms designed to grow seamlessly with your business needs",
    gradient: "from-blue-500 to-cyan-400",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d2538 0%, #112d45 50%, #0d2538 100%)" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs - softer blue tones */}
        <motion.div 
          animate={{ y: [-20, 20, -20], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(26, 106, 138, 0.2) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <motion.div 
          animate={{ y: [20, -20, 20], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(22, 90, 117, 0.15) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        
        {/* Dot pattern - different from ecosystem grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(rgba(59, 163, 195, 0.15) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Who We Are
          </motion.span>
          
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
            style={{ 
              fontFamily: "var(--font-heading)",
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #5eb8d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            About Csouth Technologies
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-slate-300"
          >
            Csouth Technologies is a U.S.-based digital innovation company specializing in modern software solutions for the automotive sector, inspection systems, workflow platforms, AI-assisted tools and secure cloud applications. We combine real industry experience with modern technology to deliver scalable, reliable and future-ready solutions.
          </motion.p>
        </motion.div>

        {/* Feature grid with stagger animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.15 + index * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(59, 163, 195, 0.1)",
              }}
            >
              {/* Hover gradient overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, rgba(59, 163, 195, 0.05) 0%, transparent 100%)",
                }}
              />
              
              {/* Icon with animated glow */}
              <motion.div 
                className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                whileHover={{ scale: 1.05 }}
                style={{
                  background: "linear-gradient(135deg, rgba(26, 106, 138, 0.3) 0%, rgba(59, 163, 195, 0.2) 100%)",
                  boxShadow: "0 4px 20px rgba(59, 163, 195, 0.1)",
                }}
              >
                <feature.icon className="w-7 h-7" style={{ color: "#5eb8d4" }} />
                
                {/* Pulsing ring on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: "0 0 20px rgba(94, 184, 212, 0.3)",
                  }}
                />
              </motion.div>
              
              <h4 
                className="relative text-lg font-semibold text-white mb-3" 
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {feature.title}
              </h4>
              
              <p className="relative text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.5), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional info with animated border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center relative"
        >
          <div 
            className="inline-block px-8 py-6 rounded-2xl"
            style={{
              background: "rgba(59, 163, 195, 0.03)",
              border: "1px solid rgba(59, 163, 195, 0.1)",
            }}
          >
            <p className="text-slate-400 max-w-2xl mx-auto">
              Real industry experience meets modern technology. We deliver solutions that are built to last, 
              designed to scale, and ready for the future.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
