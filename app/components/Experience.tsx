"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, StarSmall } from "./StarDecoration";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Cyepro Solutions",
      role: "QA Automation Engineer",
      period: "April 2025 – March 2026",
      techStack: "Rest Assured, TestNG, Ready API, Jenkins, Selenium, Playwright, Java, Version One",
      responsibilities: [
        "Creating a playwright framework for web automation automation.",
        "Creating a selenium framework for web automation and mobile automation.",
        "Creating a rest assured framework for api automation.",
        "Creating a jenkins framework for ci/cd.",
        "Analyzing requirements in sprint, discussing with PO and team to clarify acceptance criteria.",
        "Writing functional test cases and automation scripts in Ready API and Rest Assured Framework.",
        "Executing Regression test suite from Jenkins and analyzing results for root cause analysis.",
        "Creating and tracking defects in jira tool until resolution.",
        "Using data-driven testing with data source step and external files.",
        "Participating in Agile ceremonies: daily standup, sprint planning, retrospective.",
        "Pushing code from local machine to GitHub Desktop.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative bg-[#0a0a0a]"
      ref={ref}
    >
      {/* Decorative stars */}
      <div className="absolute top-16 right-8 opacity-35 pointer-events-none animate-twinkle">
        <Star size={64} delay={0.2} />
      </div>
      <div className="absolute top-1/3 left-12 opacity-25 pointer-events-none">
        <StarSmall size={28} delay={0.3} />
      </div>
      <div className="absolute bottom-24 left-8 opacity-30 pointer-events-none animate-twinkle" style={{ animationDelay: "0.7s" }}>
        <StarSmall size={48} delay={0.4} />
      </div>
      <div className="absolute bottom-1/4 right-16 opacity-20 pointer-events-none">
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
          <img
            src="/portfolio/expertise.png"
            alt="Expertise"
            className="w-20 h-20 mx-auto mb-4 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Professional Experience
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded bg-white/80"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-8 py-10 md:px-12 md:py-14 border border-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
              }}
              initial={{ opacity: 0, x: -100, rotateY: 20 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-2 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {exp.company}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-gray-400 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                  >
                    {exp.role}
                  </motion.p>
                </div>
                <motion.span
                  className="px-5 py-2 rounded-full text-sm font-medium text-gray-400 border border-white/10 self-start"
                  style={{ background: "rgba(255, 255, 255, 0.03)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  📅 {exp.period}
                </motion.span>
              </div>

              {/* Tech Stack */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.split(", ").map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium text-gray-500 border border-white/10"
                      style={{ background: "rgba(255, 255, 255, 0.03)" }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <div className="space-y-4">
                <p className="text-sm text-gray-500 font-medium">Key Responsibilities:</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3 text-gray-400 text-sm md:text-base"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                    >
                      <span className="text-white/60 mt-1">✦</span>
                      <span>{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
