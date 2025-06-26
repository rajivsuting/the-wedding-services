"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        // On non-home pages, always show the floating CTA
        setIsVisible(true);
        return;
      }

      // On home page, check if we're past the hero section
      const heroSection = document.querySelector('[data-section="hero"]');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        // Show floating CTA when scrolled past hero section
        setIsVisible(scrollPosition > heroBottom);
      } else {
        // Fallback: show after scrolling down 100vh
        setIsVisible(window.scrollY > window.innerHeight);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-50"
        >
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#ee4c59] to-[#ff6b7a] text-white px-4 md:px-6 py-3 md:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center text-sm md:text-base font-medium group hover:scale-105"
          >
            <span className="mr-2">Get Free Quote</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
