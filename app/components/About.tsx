"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, StarSmall } from "./StarDecoration";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: "🧪", title: "1+ Year", subtitle: "QA Experience" },
    { icon: "🚀", title: "Rest Assured", subtitle: "API Testing" },
    { icon: "✅", title: "Jenkins", subtitle: "CI/CD" },
    { icon: "🏆", title: "Agile", subtitle: "Scrum" },
  ];

  return (
    <section
      id="about"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative bg-[#0a0a0a]"
      ref={ref}
    >
      {/* Decorative stars */}
      <div className="absolute top-8 right-8 opacity-40 pointer-events-none animate-twinkle">
        <Star size={64} delay={0.2} />
      </div>
      <div className="absolute top-24 left-12 opacity-25 pointer-events-none">
        <StarSmall size={28} delay={0.3} />
      </div>
      <div className="absolute bottom-12 left-8 opacity-35 pointer-events-none animate-twinkle" style={{ animationDelay: "0.8s" }}>
        <StarSmall size={44} delay={0.4} />
      </div>
      <div className="absolute bottom-1/3 right-16 opacity-20 pointer-events-none">
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
            About Me
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded bg-white/80"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Main Content Card - Centered */}
        <motion.div
          className="w-full rounded-3xl mb-16 px-8 py-10 md:px-16 md:py-14 border border-white/10"
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(24px)",
          }}
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 100, rotateX: 10 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              QA Automation Engineer at <span className="text-white font-semibold">Cyepro Solutions</span> (April 2025 – Present) 
              with a passion for building robust test automation frameworks. I hold an MCA from Loyla Academy, Hyderabad (CGPA: 8/10), 
              and specialize in Automation & Manual Testing, Performance Testing, and Agile & Scrum methodology.
            </motion.p>
            <motion.p
              className="text-gray-400 text-base md:text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I work on insurance and data services projects—writing functional test cases, automation scripts with 
              <span className="text-white font-semibold"> Rest Assured and Ready API</span>, and executing regression suites via Jenkins.
            </motion.p>
            <motion.p
              className="text-gray-400 text-base md:text-lg leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I leverage AI tools like <span className="text-white font-semibold">GitHub Copilot, Cursor, Windsurf, and Playwright MCP</span> 
              for enhanced automation and code generation.
            </motion.p>
          </div>
        </motion.div>

        {/* Highlight Cards Grid - Centered */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-6 py-8 text-center border border-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
              }}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-4xl md:text-5xl mb-4 block">
                {item.icon}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
