"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@/lib/validations";
import { ContactFormData } from "@/types";
import { CONTACT_EMAILS } from "@/lib/constants";
import { 
  HiMail, 
  HiUser, 
  HiChatAlt2, 
  HiCheckCircle, 
  HiPaperAirplane,
} from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitError("Failed to send message. Please try again or email us directly.");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #081520 0%, #0d2538 40%, #0a1b29 100%)" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 163, 195, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <motion.div 
          animate={{ 
            y: [20, -20, 20],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(26, 106, 138, 0.1) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 163, 195, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 163, 195, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
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
            Reach Out
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
            Contact Us
          </h2>
          
          <p className="text-base md:text-lg max-w-xl mx-auto text-slate-400 mb-8">
            Ready to discuss your project? Send us a message and we will respond shortly.
          </p>

        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Success message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(59, 163, 195, 0.1)",
                border: "1px solid rgba(59, 163, 195, 0.3)",
              }}
            >
              <HiCheckCircle className="w-5 h-5" style={{ color: "#5eb8d4" }} />
              <div>
                <p className="text-white font-medium">Message Sent Successfully!</p>
                <p className="text-slate-400 text-sm">We'll get back to you within 24-48 hours.</p>
              </div>
            </motion.div>
          )}

          {/* Error message */}
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
              }}
            >
              <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-white font-medium">Failed to send message</p>
                <p className="text-slate-400 text-sm">{submitError}</p>
              </div>
            </motion.div>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-6 md:p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(59, 163, 195, 0.1)",
            }}
          >
            {/* Form glow effect */}
            <div 
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, rgba(94, 184, 212, 0.3) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            
            <div className="relative space-y-5">
              {/* Name field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <div className="relative">
                  <HiUser 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200"
                    style={{ color: focusedField === "name" ? "#5eb8d4" : "#64748b" }}
                  />
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    placeholder="Your name"
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-base transition-all duration-300 text-white placeholder-slate-500"
                    style={{
                      background: "rgba(10, 27, 41, 0.8)",
                      border: errors.name 
                        ? "1px solid #ef4444" 
                        : focusedField === "name"
                        ? "1px solid #3ba3c3"
                        : "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: focusedField === "name" ? "0 0 20px rgba(59, 163, 195, 0.15)" : "none",
                    }}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.name.message}</p>
                )}
              </motion.div>

              {/* Email field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <div className="relative">
                  <HiMail 
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-200"
                    style={{ color: focusedField === "email" ? "#5eb8d4" : "#64748b" }}
                  />
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-base transition-all duration-300 text-white placeholder-slate-500"
                    style={{
                      background: "rgba(10, 27, 41, 0.8)",
                      border: errors.email 
                        ? "1px solid #ef4444" 
                        : focusedField === "email"
                        ? "1px solid #3ba3c3"
                        : "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: focusedField === "email" ? "0 0 20px rgba(59, 163, 195, 0.15)" : "none",
                    }}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.email.message}</p>
                )}
              </motion.div>

              {/* Message field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <div className="relative">
                  <HiChatAlt2 
                    className="absolute left-4 top-4 w-5 h-5 transition-colors duration-200"
                    style={{ color: focusedField === "message" ? "#5eb8d4" : "#64748b" }}
                  />
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-base transition-all duration-300 resize-none text-white placeholder-slate-500"
                    style={{
                      background: "rgba(10, 27, 41, 0.8)",
                      border: errors.message 
                        ? "1px solid #ef4444" 
                        : focusedField === "message"
                        ? "1px solid #3ba3c3"
                        : "1px solid rgba(255, 255, 255, 0.05)",
                      boxShadow: focusedField === "message" ? "0 0 20px rgba(59, 163, 195, 0.15)" : "none",
                    }}
                  />
                </div>
                {errors.message && (
                  <p className="mt-1.5 text-sm text-red-400">{errors.message.message}</p>
                )}
              </motion.div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 30px rgba(59, 163, 195, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full py-4 rounded-xl text-base font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #1a6a8a 0%, #165a75 100%)",
                  boxShadow: "0 4px 20px rgba(26, 106, 138, 0.2)",
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <HiPaperAirplane className="w-5 h-5 rotate-90" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
