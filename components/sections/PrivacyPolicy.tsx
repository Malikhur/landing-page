"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const policySections = [
  {
    title: "Introduction",
    content:
      'CSouth Technologies ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
  },
  {
    title: "Information We Collect",
    content:
      "We may collect personal information you voluntarily provide, such as your name, email address, company name, role, contact details, and other information you submit via contact forms. We may also automatically collect certain information such as IP address, browser type, device type, usage data and cookies.",
  },
  {
    title: "How We Use Your Information",
    content: "Your information may be used to:",
    list: [
      "Respond to your inquiries",
      "Provide and maintain our services",
      "Improve our website and develop new features",
      "Send you updates, marketing and promotional materials (you may opt out at any time)",
    ],
  },
  {
    title: "Disclosure of Your Information",
    content:
      "We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website or conducting our business, subject to confidentiality obligations.",
  },
  {
    title: "Cookies & Tracking",
    content:
      "We use cookies and similar tracking technologies to track website activity and store certain information. You may disable cookies via your browser settings, but doing so may affect your experience.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable administrative, technical and physical safeguards to protect your personal information. However, no internet transmission is completely secure, so we cannot guarantee absolute security.",
  },
  {
    title: "International Transfers",
    content:
      "If you are located outside the United States and provide information to us, please note this information may be transferred to, stored, and processed in the United States and other jurisdictions.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, delete or restrict the use of your personal information. To exercise these rights, please contact us at info@csouthint.com.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this policy from time to time. We will post the updated date above. Your continued use of the website after changes signifies acceptance of the new policy.",
  },
  {
    title: "Contact Us",
    content:
      "If you have questions or comments about this Privacy Policy, please contact us at:",
    email: "info@csouthint.com",
  },
];

export default function PrivacyPolicy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="privacy"
      ref={ref}
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #081018 0%, #060c14 100%)",
      }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59, 163, 195, 0.15), transparent)",
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
            Privacy Policy
          </h2>
          <p className="text-xs text-slate-500 mb-3">
            Effective Date: January 1st, 2026
          </p>
          <div
            className="w-16 h-0.5"
            style={{ background: "rgba(59, 163, 195, 0.4)" }}
          />
        </motion.div>

        {/* Policy content */}
        <div className="space-y-5">
          {policySections.map((section, index) => (
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
              {section.list && (
                <ul className="mt-2 space-y-1 ml-4">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm text-slate-500 leading-relaxed flex items-start gap-2"
                    >
                      <span
                        className="w-1 h-1 rounded-full mt-2 shrink-0"
                        style={{ background: "rgba(59, 163, 195, 0.5)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
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
