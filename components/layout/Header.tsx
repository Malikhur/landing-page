"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_ITEMS } from "@/lib/constants";
import { smoothScroll } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Track active section - improved detection
      const sections = ["hero", "about", "ecosystem", "technologies", "why-csouth",  "contact"];
      let currentSection = "hero";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight * 0.4; // 40% of viewport
          
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    smoothScroll(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? "rgba(10, 27, 41, 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(59, 163, 195, 0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => smoothScroll("hero")}
          >
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Csouth Technologies"
                fill
                className="object-contain"
              />
            </div>
            <span 
              className="hidden sm:block text-lg md:text-xl font-semibold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Csouth Technologies
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => handleNavClick(item.href)}
                className="relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:text-white cursor-pointer"
                style={{ 
                  color: activeSection === item.href ? "#5eb8d4" : "#94a3b8",
                }}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full cursor-pointer"
                    style={{ backgroundColor: "#3ba3c3" }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(59, 163, 195, 0.3)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-5 py-2 rounded-lg font-medium text-sm text-white transition-all duration-200 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1a6a8a 0%, #165a75 100%)",
              }}
            >
              Contact Us
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 rounded-lg transition-all duration-200 cursor-pointer"
            style={{ 
              color: "#fff",
              background: "rgba(59, 163, 195, 0.1)",
              border: "1px solid rgba(59, 163, 195, 0.2)",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{ 
              background: "rgba(10, 27, 41, 0.98)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid rgba(59, 163, 195, 0.1)",
            }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_ITEMS.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left font-medium text-base py-3 px-4 rounded-lg transition-all duration-200"
                  style={{ 
                    color: activeSection === item.href ? "#5eb8d4" : "#94a3b8",
                    background: activeSection === item.href ? "rgba(59, 163, 195, 0.1)" : "transparent",
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile CTA */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => handleNavClick("contact")}
                className="mt-3 py-3 px-4 rounded-lg font-medium text-base text-white text-center transition-all duration-200"
                style={{
                  background: "linear-gradient(135deg, #1a6a8a 0%, #165a75 100%)",
                }}
              >
                Contact Us
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
