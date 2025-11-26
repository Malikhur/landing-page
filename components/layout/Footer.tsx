"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

const socialIcons = [
  { Icon: FaTwitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
  { Icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { Icon: FaGithub, href: SOCIAL_LINKS.github, label: "GitHub" },
];

const legalLinks = [
  { label: "Legal Disclaimer", href: "legal" },
  { label: "Privacy Policy", href: "privacy" },
  { label: "Terms of Use", href: "terms" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050a10 0%, #030508 100%)" }}
    >
      {/* Top decorative line with shimmer effect */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px overflow-hidden"
      >
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.5), rgba(94, 184, 212, 0.8), rgba(59, 163, 195, 0.5), transparent)",
            width: "50%",
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.2), transparent)",
          }}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand section with hover effect */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={scrollToTop}
          >
            <motion.div 
              className="relative w-10 h-10"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.png"
                alt="C-South Technologies"
                fill
                className="object-contain"
              />
            </motion.div>
            <span 
              className="text-lg font-semibold text-white group-hover:text-[#5eb8d4] transition-colors duration-300"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              C-South Technologies
            </span>
          </motion.div>

          {/* Social media links with enhanced hover */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialIcons.map(({ Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  boxShadow: "0 8px 20px rgba(59, 163, 195, 0.25)",
                }}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{ 
                  background: "rgba(59, 163, 195, 0.1)",
                  border: "1px solid rgba(59, 163, 195, 0.15)",
                  color: "#94a3b8",
                }}
              >
                <Icon className="w-5 h-5 hover:text-[#5eb8d4] transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div 
          className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(59, 163, 195, 0.1)" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm"
          >
            © 2025 CSouth Technologies. All rights reserved.
          </motion.p>

          {/* Legal links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 text-xs text-slate-500"
          >
            {legalLinks.map((link, index) => (
              <span key={link.label} className="flex items-center">
                <button
                  onClick={() => scrollToSection(link.href)}
                  className="hover:text-[#5eb8d4] transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
                {index < legalLinks.length - 1 && (
                  <span className="mx-2 text-slate-600">|</span>
                )}
              </span>
            ))}
          </motion.div>

          {/* Back to top button with enhanced animation */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ 
              y: -3,
              boxShadow: "0 4px 15px rgba(59, 163, 195, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
            style={{
              background: "rgba(59, 163, 195, 0.1)",
              border: "1px solid rgba(59, 163, 195, 0.15)",
              color: "#94a3b8",
            }}
          >
            <span>Back to top</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <HiArrowUp className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
