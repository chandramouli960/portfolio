"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "💼", href: "https://www.linkedin.com/in/chandramouli-b-09b085317/", label: "LinkedIn" },
    { icon: "📧", href: "mailto:chandramouli960@gmail.com", label: "Email" },
    { icon: "📱", href: "tel:9603418243", label: "Phone" },
  ];

  return (
    <footer
      className="w-full py-16 relative bg-[#0a0a0a] border-t border-white/10"
    >
      <div className="w-full px-6 relative z-10">
        <div className="flex flex-col items-center text-center py-8">

          {/* Name */}
          <motion.h3
            className="text-2xl font-bold mb-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Chandramouli Bhandaru
          </motion.h3>

          {/* Tagline */}
          <motion.p
            className="text-gray-500 mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            QA Automation Engineer | Manual & Automation Testing ✦
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-5 mb-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-14 h-14 flex items-center justify-center text-2xl rounded-2xl border border-white/10"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  backdropFilter: "blur(24px)",
                }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px mb-8 bg-white/10"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          {/* Copyright - suppressHydrationWarning for Date which can differ server/client */}
          <motion.p
            className="text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            suppressHydrationWarning
          >
            © {currentYear} Chandramouli Bhandaru. Made with ✦ and passion.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
