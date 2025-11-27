"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { COMPANY_TAGLINE } from "@/lib/constants";
import { smoothScroll } from "@/lib/utils";
import Image from "next/image";

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `rgba(94, 184, 212, ${0.2 + Math.random() * 0.3})`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d2538 0%, #0a1b29 50%, #071620 100%)",
      }}
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 opacity-10"
          style={{
            border: "1px solid #3ba3c3",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 opacity-10"
          style={{
            border: "1px dashed #5eb8d4",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 163, 195, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 163, 195, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Gradient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top center glow - deep blue */}
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(26, 106, 138, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        
        {/* Bottom left accent */}
        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[600px] h-[400px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(59, 163, 195, 0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />

        {/* Right side accent */}
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-0 w-[500px] h-[500px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(94, 184, 212, 0.1) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with glow effect - Large, centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-10"
          >
            <motion.div 
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Soft glow behind logo */}
              <motion.div
                animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(59, 163, 195, 0.4) 0%, rgba(26, 106, 138, 0.2) 40%, transparent 70%)",
                  filter: "blur(30px)",
                  transform: "scale(1.8)",
                }}
              />
              <Image
                src="/logo.png"
                alt="Csouth Technologies Logo"
                fill
                priority
                className="object-contain relative z-10 drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Main heading with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <span 
                className="block"
                style={{
                  background: "linear-gradient(135deg, #5eb8d4 0%, #3ba3c3 50%, #1a6a8a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Csouth
              </span>
              <span 
                className="block text-white mt-1 opacity-90"
              >
                Technologies
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto"
            style={{ color: "#94a3b8" }}
          >
            {COMPANY_TAGLINE}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA - Contact Us */}
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(59, 163, 195, 0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => smoothScroll("contact")}
              className="group relative inline-flex items-center gap-3 text-white px-10 py-4 rounded-2xl text-lg font-semibold overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1a6a8a 0%, #165a75 100%)",
                boxShadow: "0 4px 20px rgba(26, 106, 138, 0.3)",
              }}
            >
              <span className="relative z-10">Contact Us</span>
              <HiArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary link - Learn More */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => smoothScroll("about")}
              className="group inline-flex items-center gap-2 px-6 py-3 text-base font-medium transition-all duration-300"
              style={{ color: "#94a3b8" }}
            >
              <span className="group-hover:text-white transition-colors duration-300">Learn More</span>
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="group-hover:text-white transition-colors duration-300"
              >
                ↓
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {["Automotive Technology", "Digital Solutions", "Innovation"].map((badge, index) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="px-5 py-2.5 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(59, 163, 195, 0.1)",
                  border: "1px solid rgba(59, 163, 195, 0.2)",
                  color: "#5eb8d4",
                }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with cute bounce */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          {/* <span className="text-xs uppercase tracking-wider mb-2" style={{ color: "#64748b" }}>
            Scroll
          </span> */}
          <div 
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: "2px solid rgba(59, 163, 195, 0.4)" }}
          >
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 rounded-full"
              style={{ backgroundColor: "#3ba3c3" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
