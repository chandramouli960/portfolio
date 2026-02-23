"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, StarSmall } from "./StarDecoration";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "chandramouli960@gmail.com",
      href: "mailto:chandramouli960@gmail.com",
    },
    {
      icon: "📱",
      label: "Phone",
      value: "9603418243",
      href: "tel:9603418243",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/chandramouli-b",
      href: "https://www.linkedin.com/in/chandramouli-b-09b085317/",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative bg-[#0a0a0a]"
      ref={ref}
    >
      {/* Decorative stars */}
      <div className="absolute top-8 left-8 opacity-40 pointer-events-none animate-twinkle">
        <Star size={56} delay={0.2} />
      </div>
      <div className="absolute top-24 right-12 opacity-30 pointer-events-none">
        <StarSmall size={36} delay={0.4} />
      </div>
      <div className="absolute top-1/2 left-16 opacity-25 pointer-events-none animate-twinkle" style={{ animationDelay: "0.4s" }}>
        <StarSmall size={24} delay={0.3} />
      </div>
      <div className="absolute bottom-12 left-1/4 opacity-35 pointer-events-none">
        <StarSmall size={28} delay={0.3} />
      </div>
      <div className="absolute bottom-1/3 right-16 opacity-20 pointer-events-none animate-twinkle" style={{ animationDelay: "0.6s" }}>
        <StarSmall size={22} delay={0.5} />
      </div>

      {/* Content Container - Centered */}
      <div className="w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded bg-white/80"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p
            className="text-gray-400 mt-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Feel free to reach out for opportunities or just a friendly hello! ✦
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.href}
              target={info.href.startsWith("http") ? "_blank" : undefined}
              rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-3xl px-8 py-10 text-center no-underline border border-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
              }}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateY: index % 2 === 0 ? -15 : 15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 80, scale: 0.8, rotateY: index % 2 === 0 ? -15 : 15 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.span
                className="text-5xl mb-6 block"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -45 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: "spring", bounce: 0.5 }}
              >
                {info.icon}
              </motion.span>
              <p className="text-sm text-gray-500 mb-2">{info.label}</p>
              <p className="text-base md:text-lg font-medium text-white">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
