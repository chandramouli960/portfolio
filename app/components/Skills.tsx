"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, StarSmall } from "./StarDecoration";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Testing",
      icon: "🧪",
      skills: ["Automation Testing", "Manual Testing", "Performance Testing", "Agile & Scrum"],
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["Java", "C", "C++", "JavaScript", "MySQL"],
    },
    {
      title: "Automation & Tools",
      icon: "⚙️",
      skills: ["Rest Assured", "TestNG", "Selenium", "Playwright", "Ready API", "SOAP UI", "Jenkins", "Maven", "Jmeter", "Appium"],
    },
    {
      title: "Version Control & Databases",
      icon: "🗄️",
      skills: ["Git", "GitHub Desktop", "MySQL Workbench"],
    },
    {
      title: "AI Tools",
      icon: "🤖",
      skills: ["GitHub Copilot", "Cursor", "Windsurf", "Playwright MCP"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative bg-[#0a0a0a]"
      ref={ref}
    >
      {/* Decorative stars */}
      <div className="absolute top-16 left-8 opacity-35 pointer-events-none animate-twinkle">
        <Star size={56} delay={0.3} />
      </div>
      <div className="absolute top-1/3 right-12 opacity-25 pointer-events-none">
        <StarSmall size={24} delay={0.2} />
      </div>
      <div className="absolute bottom-24 right-8 opacity-30 pointer-events-none animate-twinkle" style={{ animationDelay: "0.6s" }}>
        <StarSmall size={28} delay={0.3} />
      </div>
      <div className="absolute bottom-1/4 left-16 opacity-20 pointer-events-none">
        <StarSmall size={20} delay={0.4} />
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
            Technical Skills
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded bg-white/80"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Skills Grid - Centered */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-8 py-10 border border-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
              }}
              initial={{ opacity: 0, y: 80, scale: 0.8, rotateY: 15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateY: 0 } : { opacity: 0, y: 80, scale: 0.8, rotateY: 15 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.12, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">
                  {category.icon}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-white/10"
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
