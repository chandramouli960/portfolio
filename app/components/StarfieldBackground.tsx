"use client";

import { useMemo, useState, useEffect } from "react";

// Client-only render to avoid hydration mismatch (floating-point style precision can differ)
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

const generateStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      left: seededRandom(i) * 100,
      top: seededRandom(i + 1000) * 100,
      size: 1 + seededRandom(i + 2000) * 2,
      opacity: 0.3 + seededRandom(i + 3000) * 0.7,
      delay: seededRandom(i + 4000) * 3,
      duration: 2 + seededRandom(i + 5000) * 3,
    });
  }
  return stars;
};

const StarfieldBackground = () => {
  const [mounted, setMounted] = useState(false);
  const layer1 = useMemo(() => generateStars(60), []);
  const layer2 = useMemo(() => generateStars(35), []);
  const layer3 = useMemo(() => generateStars(15), []);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#0a0a0a]" />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Nebula glow - subtle cosmic atmosphere */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse 60% 80% at 80% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255, 255, 255, 0.01) 0%, transparent 70%)
          `,
        }}
      />

      {/* Layer 1 - Small distant stars (GPU-optimized) */}
      <div className="absolute inset-0" style={{ contain: "layout style" }}>
        {layer1.map((star) => (
          <div
            key={`l1-${star.id}`}
            className="star-layer-1 absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * 0.6,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              transform: "translateZ(0)",
            }}
          />
        ))}
      </div>

      {/* Layer 2 - Medium stars (no box-shadow for perf) */}
      <div className="absolute inset-0" style={{ contain: "layout style" }}>
        {layer2.map((star) => (
          <div
            key={`l2-${star.id}`}
            className="star-layer-2 absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size + 0.5}px`,
              height: `${star.size + 0.5}px`,
              opacity: star.opacity * 0.8,
              animation: `twinkle ${star.duration + 1}s ease-in-out ${star.delay}s infinite`,
              transform: "translateZ(0)",
            }}
          />
        ))}
      </div>

      {/* Layer 3 - Large bright stars */}
      <div className="absolute inset-0" style={{ contain: "layout style" }}>
        {layer3.map((star) => (
          <div
            key={`l3-${star.id}`}
            className="star-layer-3 absolute"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animation: `twinkle ${star.duration + 2}s ease-in-out ${star.delay}s infinite`,
              transform: "translateZ(0)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
              <path
                d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
                fill="rgba(255, 255, 255, 0.95)"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarfieldBackground;
