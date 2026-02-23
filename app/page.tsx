"use client";

import { useState, useEffect } from "react";
import IntroAnimation from "./components/IntroAnimation";
import StarfieldBackground from "./components/StarfieldBackground";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const timer = setTimeout(() => {
      setShowIntro(false);
      setContentVisible(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen w-full flex flex-col items-center relative bg-[#0a0a0a]">
      {/* Starfield background - layered stars with twinkle */}
      <StarfieldBackground />
      
      {/* Intro Animation */}
      {mounted && showIntro && (
        <IntroAnimation isLoading={showIntro} onComplete={() => {
          setShowIntro(false);
          setContentVisible(true);
        }} />
      )}
      
      {/* Main Content - only renders when visible so animations play fresh */}
      {contentVisible && (
        <div className="animate-fadeIn">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      )}
    </main>
  );
}
