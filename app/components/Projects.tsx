"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, StarSmall } from "./StarDecoration";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Playwright E2E Web Automation Architecture",
      domain: "Web Test Automation Framework",
      description: [
        "End-to-end automation framework using Page Object Model (POM) for maintainability and scalability.",
        "Cross-browser testing across Chromium, Firefox, and WebKit with a single API.",
        "Custom fixtures for auth, global setup, and reusable test configuration.",
        "HTML and Allure reporting, CI/CD-ready with parallel execution support.",
      ],
      techStack: ["Playwright", "TypeScript", "Node.js", "POM", "Allure"],
    },
    {
      title: "Selenium E2E Web Automation Architecture",
      domain: "Web Test Automation Framework",
      description: [
        "Scalable Selenium framework with Page Object Model and data-driven testing.",
        "Selenium Grid integration for distributed parallel execution across browsers.",
        "Modular structure: pages, tests, utilities, and config management.",
        "Jenkins CI/CD integration with test reporting and defect tracking.",
      ],
      techStack: ["Selenium WebDriver", "Java", "TestNG", "Selenium Grid", "Jenkins"],
    },
    {
      title: "Appium Mobile Automation Architecture",
      domain: "Cross-Platform Mobile Test Framework",
      description: [
        "End-to-end mobile automation for iOS and Android using Appium.",
        "Page Object Model pattern with reusable components for native and hybrid apps.",
        "Real device and emulator testing with config-driven environment setup.",
        "CI/CD integration with test reporting and cross-platform validation.",
      ],
      techStack: ["Appium", "Java", "TestNG", "iOS", "Android"],
    },
    {
      title: "Rest Assured API Automation Framework",
      domain: "REST API Test Automation",
      description: [
        "End-to-end REST API testing framework using Rest Assured Java DSL.",
        "Positive and negative test cases for CRUD operations, status codes, and response validation.",
        "Request/response logging, JSON schema validation, and authentication handling.",
        "TestNG integration with Jenkins CI/CD for regression and smoke test execution.",
      ],
      techStack: ["Rest Assured", "Java", "TestNG", "Maven", "Jenkins"],
    },
    {
      title: "Chrome Form AutoFill Extension",
      domain: "Test Automation Tool",
      description: [
        "Chrome extension that auto-fills web forms with Faker.js-generated data.",
        "Supports PrimeNG calendar, custom dropdowns, file uploads, Angular number-only directives.",
        "Multi-pass execution for dynamically loaded fields with validation handling.",
      ],
      techStack: ["JavaScript", "Chrome Extension API", "Faker.js", "PrimeNG"],
    },
    {
      title: "Chrome XPath Picker Extension",
      domain: "Test Automation Tool",
      description: [
        "Chrome extension for capturing stable XPaths from web pages.",
        "Visual picker with hover overlay, attribute-priority selectors, bulk capture for PrimeNG components.",
        "Persists XPaths in storage and copies to clipboard for test automation.",
      ],
      techStack: ["JavaScript", "Chrome Extension API", "XPath", "PrimeNG"],
    },
    
  ];

  return (
    <section
      id="projects"
      className="w-full flex justify-center py-20 md:py-32 px-6 relative bg-[#0a0a0a]"
      ref={ref}
    >
      {/* Decorative stars */}
      <div className="absolute top-8 left-8 opacity-35 pointer-events-none animate-twinkle">
        <Star size={60} delay={0.2} />
      </div>
      <div className="absolute top-1/4 right-16 opacity-25 pointer-events-none">
        <StarSmall size={28} delay={0.3} />
      </div>
      <div className="absolute bottom-24 right-8 opacity-30 pointer-events-none animate-twinkle" style={{ animationDelay: "0.5s" }}>
        <StarSmall size={26} delay={0.3} />
      </div>
      <div className="absolute bottom-1/3 left-12 opacity-20 pointer-events-none">
        <StarSmall size={22} delay={0.4} />
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
            Projects
          </h2>
          <motion.div
            className="w-20 h-1 mx-auto rounded bg-white/80"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-3xl px-8 py-10 md:px-12 md:py-14 border border-white/10"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(24px)",
              }}
              initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1, rotateX: 0 } : { opacity: 0, y: 100, scale: 0.9, rotateX: 15 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.01, y: -5 }}
            >
              {/* Header */}
              <div className="mb-6">
                <motion.h3
                  className="text-xl md:text-2xl font-bold mb-2 text-white"
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                <motion.span
                  className="inline-block px-4 py-1 rounded-full text-xs font-medium text-gray-400 border border-white/10"
                  style={{ background: "rgba(255, 255, 255, 0.03)" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 + index * 0.1 }}
                >
                  🏢 {project.domain}
                </motion.span>
              </div>

              {/* Description List */}
              <ul className="space-y-3 mb-6">
                {project.description.map((desc, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 text-gray-400 text-sm md:text-base"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.08 + index * 0.1 }}
                  >
                    <span className="text-white/60 mt-1">✦</span>
                    <span>{desc}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-white/10"
                    style={{ background: "rgba(255, 255, 255, 0.03)" }}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tech}
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

export default Projects;
