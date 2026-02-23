"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface IntroAnimationProps {
  isLoading: boolean;
  onComplete: () => void;
}

const IntroAnimation = ({ isLoading, onComplete }: IntroAnimationProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const timer1 = setTimeout(() => setPhase(1), 1500);
      const timer2 = setTimeout(() => setPhase(2), 3000);
      const timer3 = setTimeout(() => onComplete(), 4000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, [isLoading, onComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]"
          variants={containerVariants}
          exit="exit"
        >
          {/* Floating stars - CSS animation (lighter than Framer Motion) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-twinkle"
                style={{
                  left: `${(i * 12) % 90 + 5}%`,
                  top: `${(i * 13) % 85 + 5}%`,
                  animationDelay: `${(i * 0.4) % 2}s`,
                }}
              >
                <svg
                  width={8 + (i % 2) * 4}
                  height={8 + (i % 2) * 4}
                  viewBox="0 0 24 24"
                  className="opacity-70"
                >
                  <path
                    d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
                    fill="rgba(255, 255, 255, 0.7)"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-white/20"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            }}
          >
            <img
              src="/portfolio/profile.png"
              alt="Chandramouli Bhandaru"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <motion.h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
              Chandramouli Bhandaru
            </motion.h1>
            <motion.p
              className="text-lg text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.5 }}
            >
              ✦ QA Automation Engineer ✦
            </motion.p>
          </motion.div>

          {/* Loading dots */}
          <motion.div
            className="mt-8 flex gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-white/80"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>

          {/* Welcome text */}
          <motion.p
            className="mt-6 text-gray-400 text-sm"
            variants={textVariants}
            initial="hidden"
            animate={phase >= 2 ? "visible" : "hidden"}
          >
            ✦ Welcome to my portfolio ✦
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
