"use client";

import { motion } from "framer-motion";
import { Star, StarSmall } from "./StarDecoration";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center px-6 py-20 relative bg-[#0a0a0a]"
    >
      {/* Decorative stars - constellation feel */}
      <div className="absolute top-16 left-8 opacity-50 pointer-events-none animate-twinkle" style={{ animationDelay: "0s" }}>
        <Star size={48} delay={0.2} />
      </div>
      <div className="absolute top-32 right-16 opacity-40 pointer-events-none animate-twinkle" style={{ animationDelay: "0.5s" }}>
        <StarSmall size={32} delay={0.4} />
      </div>
      <div className="absolute top-1/4 right-1/4 opacity-30 pointer-events-none">
        <StarSmall size={20} delay={0.2} />
      </div>
      <div className="absolute bottom-1/3 left-12 opacity-45 pointer-events-none animate-twinkle" style={{ animationDelay: "1s" }}>
        <Star size={40} delay={0.6} />
      </div>
      <div className="absolute bottom-20 right-1/3 opacity-35 pointer-events-none">
        <StarSmall size={24} delay={0.3} />
      </div>
      <div className="absolute top-1/2 left-4 opacity-25 pointer-events-none">
        <StarSmall size={16} delay={0.5} />
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center text-center z-10 w-full">
        {/* Logo Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="mb-10"
        >
          <div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border border-white/20"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src="/profile.png"
              alt="Chandramouli Bhandaru"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="text-white">
            Chandramouli Bhandaru
          </span>
        </motion.h1>

        {/* Title Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <span
            className="px-6 py-3 rounded-full text-base md:text-lg font-medium inline-block border border-white/30 text-white/90"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            QA Automation Engineer
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Detail-oriented Software Test Engineer with 1 year of experience
          in Manual and Automation Testing
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-black text-center inline-block transition-transform bg-white"
            style={{
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)",
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 rounded-full font-semibold text-center inline-block transition-transform border-2 border-white/50 text-white"
            style={{
              background: "transparent",
            }}
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
