"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const tabsRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const tickingRef = useRef(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  // Auto-scroll to active tab
  useEffect(() => {
    const activeTab = tabsRefs.current[activeSection];
    const container = tabsContainerRef.current;
    
    if (activeTab && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      
      const isOutOfView = 
        tabRect.left < containerRect.left || 
        tabRect.right > containerRect.right;
      
      if (isOutOfView) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeSection]);

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (!tickingRef.current) {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        
        const sections = navLinks.map(link => link.href.substring(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
        tickingRef.current = false;
      });
      tickingRef.current = true;
    }
  }, []);

  useEffect(() => {
    setActiveSection("hero");
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center overflow-hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="mx-4 mt-4 px-4 py-3 rounded-full max-w-full"
        style={{
          background: isScrolled 
            ? "rgba(10, 10, 10, 0.9)" 
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
          boxShadow: isScrolled 
            ? "0 8px 32px rgba(0, 0, 0, 0.5)" 
            : "none",
          border: isScrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
        }}
      >
        {/* Scrollable Navigation Tabs */}
        <div 
          ref={tabsContainerRef}
          className="flex items-center gap-1 overflow-x-auto scrollbar-hide max-w-fit"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                ref={(el) => { tabsRefs.current[link.href.substring(1)] = el; }}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium no-underline rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-200"
                style={{
                  color: isActive ? "#fff" : "#a3a3a3",
                }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-full border border-white/20"
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                    }}
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
          
          {/* Hire Me Button */}
          <motion.a
            href="#contact"
            className="px-5 py-2 text-sm font-semibold text-black no-underline rounded-full whitespace-nowrap flex-shrink-0 bg-white"
            style={{
              boxShadow: "0 4px 15px rgba(255, 255, 255, 0.2)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
