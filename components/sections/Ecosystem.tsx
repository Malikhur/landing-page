"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const products = [
  {
    id: "ridesellers",
    name: "RideSellers",
    color: "#f97316", // Orange
    colorLight: "rgba(249, 115, 22, 0.15)",
    colorBorder: "rgba(249, 115, 22, 0.3)",
    logo: "/logos/ridesellers.png",
    hasLogo: false, // No logo yet
    description:
      "Digital automotive marketplace designed to connect independent inspections, dealer inventory and reconditioning data inside one ecosystem.",
  },
  {
    id: "ridecheck",
    name: "RideCheck",
    color: "#3b82f6", // Blue
    colorLight: "rgba(59, 130, 246, 0.15)",
    colorBorder: "rgba(59, 130, 246, 0.3)",
    logo: "/logos/ridecheck.png",
    hasLogo: true,
    description:
      "Independent, neutral inspection system for cosmetic, structural and mechanical evaluations.",
  },
  {
    id: "trt",
    name: "TRT – Total Recondition Tracking",
    color: "#22c55e", // Green
    colorLight: "rgba(34, 197, 94, 0.15)",
    colorBorder: "rgba(34, 197, 94, 0.3)",
    logo: "/logos/trt.png",
    hasLogo: true,
    description:
      "Professional workflow platform for body shops and reconditioning operations. Tracks flag hours, technician progress, supplements and real-time updates.",
  },
  {
    id: "ridetoken",
    name: "RideToken",
    color: "#eab308", // Yellow
    colorLight: "rgba(234, 179, 8, 0.15)",
    colorBorder: "rgba(234, 179, 8, 0.3)",
    logo: "/logos/ridetoken.png",
    hasLogo: true,
    description:
      "Digital reward and reputation token that supports participation and engagement across the ecosystem.",
  },
];

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="ecosystem"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a1b29 0%, #081520 50%, #0a1b29 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating orbs - product colors */}
        <motion.div
          animate={{ y: [-30, 30, -30], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/5 right-1/5 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(249, 115, 22, 0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <motion.div
          animate={{ y: [30, -30, 30], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/5 left-1/5 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{ x: [-20, 20, -20], opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Hexagon pattern - unique to ecosystem */}
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25 2 L45 14 L45 36 L25 48 L5 36 L5 14 Z' fill='none' stroke='%23f97316' stroke-width='0.3' opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundSize: "50px 50px",
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
            Core Products
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
            Our Ecosystem
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-slate-300 mb-4"
          >
            A connected suite of solutions built for the automotive industry.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base max-w-3xl mx-auto leading-relaxed text-slate-400"
          >
            Csouth operates a unified technology ecosystem that connects inspections, reconditioning
            workflows, marketplaces and digital incentives.
          </motion.p>
        </motion.div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="group relative p-6 md:p-8 rounded-2xl transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: `1px solid ${product.colorBorder}`,
              }}
            >
              {/* Colored glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at top left, ${product.colorLight} 0%, transparent 60%)`,
                }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
                }}
              />

              <div className="relative flex flex-col sm:flex-row gap-6 items-start">
                {/* Logo Container - Larger and more prominent */}
                <div
                  className="shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${product.colorLight} 0%, rgba(255,255,255,0.05) 100%)`,
                    border: `2px solid ${product.colorBorder}`,
                    boxShadow: `0 8px 32px ${product.colorLight}`,
                  }}
                >
                  {product.hasLogo ? (
                    <div className="relative w-14 h-14 md:w-16 md:h-16 p-1">
                      <Image
                        src={product.logo}
                        alt={`${product.name} logo`}
                        fill
                        className="object-contain drop-shadow-lg"
                        style={{ filter: "brightness(1.1)" }}
                      />
                    </div>
                  ) : (
                    <div
                      className="flex items-center justify-center text-3xl md:text-4xl font-bold"
                      style={{ 
                        color: product.color,
                        textShadow: `0 2px 10px ${product.colorLight}`,
                      }}
                    >
                      {product.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 transition-colors duration-300"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: product.color,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Bottom shimmer on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

</div>
    </section>
  );
}
