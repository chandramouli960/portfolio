"use client";

import { motion } from "framer-motion";

interface StarProps {
  size?: number;
  delay?: number;
  twinkle?: boolean;
}

export const Star: React.FC<StarProps> = ({ size = 24, delay = 0, twinkle = true }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={twinkle ? "animate-twinkle" : ""}
    style={twinkle ? { animationDelay: `${delay}s` } : undefined}
  >
    <path
      d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
      fill="rgba(255, 255, 255, 0.9)"
    />
  </motion.svg>
);

export const StarSmall: React.FC<StarProps> = ({ size = 16, delay = 0, twinkle = true }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className={twinkle ? "animate-twinkle" : ""}
    style={twinkle ? { animationDelay: `${delay}s` } : undefined}
  >
    <path
      d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
      fill="rgba(255, 255, 255, 0.7)"
    />
  </motion.svg>
);

export const Sparkle: React.FC<{ size?: number; twinkle?: boolean }> = ({ size = 20, twinkle = true }) => (
  <motion.svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={twinkle ? "animate-twinkle" : ""}
  >
    <path
      d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
      fill="rgba(255, 255, 255, 0.8)"
    />
  </motion.svg>
);

/* Scattered small dots - for dense star clusters */
export const StarDot: React.FC<{ size?: number; className?: string }> = ({ size = 3, className = "" }) => (
  <div
    className={`rounded-full bg-white animate-twinkleSoft ${className}`}
    style={{
      width: size,
      height: size,
      opacity: 0.6,
    }}
  />
);
