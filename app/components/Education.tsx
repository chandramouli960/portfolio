"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, StarSmall } from "./StarDecoration";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = {
    degree: "Master of Computer Applications (MCA)",
    institution: "Loyla Academy, Hyderabad",
    period: "2023",
    cgpa: "CGPA: 8/10",
  };

  return (
    <section
      id="education"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative bg-[#0a0a0a]"
      ref={ref}
    >
      {/* Decorative stars */}
      <div className="absolute top-8 right-8 opacity-40 pointer-events-none animate-twinkle">
        <Star size={52} delay={0.2} />
      </div>
      <div className="absolute top-1/3 left-12 opacity-25 pointer-events-none">
        <StarSmall size={24} delay={0.3} />
      </div>
      <div className="absolute bottom-12 left-8 opacity-35 pointer-events-none animate-twinkle" style={{ animationDelay: "0.5s" }}>
        <StarSmall size={40} delay={0.4} />
      </div>
      <div className="absolute bottom-1/3 right-12 opacity-20 pointer-events-none">
        <StarSmall size={20} delay={0.5} />
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
            Education
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded bg-white/80"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Education Card - Centered */}
        <motion.div
          className="w-full max-w-xl mx-auto rounded-3xl px-8 py-10 md:px-12 md:py-14 text-center border border-white/10"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px)",
          }}
          initial={{ opacity: 0, y: 100, scale: 0.8, rotateY: 15 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 100, scale: 0.8, rotateY: 15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          {/* Graduation Icon */}
          <motion.div
            className="text-6xl mb-6"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            🎓
          </motion.div>

          {/* Degree */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {education.degree}
          </motion.h3>

          {/* Institution */}
          <motion.p
            className="text-gray-400 text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            📍 {education.institution}
          </motion.p>

          {/* Period & CGPA Badge */}
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.span
              className="inline-block px-6 py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10"
              style={{ background: "rgba(255, 255, 255, 0.03)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", bounce: 0.5 }}
            >
              📅 {education.period}
            </motion.span>
            <motion.span
              className="inline-block px-6 py-3 rounded-full text-sm font-medium text-gray-400 border border-white/10"
              style={{ background: "rgba(255, 255, 255, 0.03)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.5, delay: 0.65, type: "spring", bounce: 0.5 }}
            >
              📊 {education.cgpa}
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
