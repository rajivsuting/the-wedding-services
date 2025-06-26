"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const ctaRef = useRef(null);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      // If the bottom of the button is below the viewport, it's visible; otherwise, show floating CTA
      setShowFloatingCTA(rect.bottom < 0 || rect.top > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTAClick = () => {
    router.push("/plan");
  };

  return (
    <section
      id="home"
      data-section="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Background with Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          priority
          className="w-full h-full object-cover object-center bg-fixed"
          sizes="100vw"
        />

        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

        {/* Animated floating elements */}
        <div className="absolute top-32 left-32 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-16 w-32 h-32 bg-white/8 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-24 w-28 h-28 bg-white/6 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Additional decorative elements */}
        <div
          className="absolute top-20 right-1/4 w-16 h-16 bg-[#ef4c57]/20 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-20 h-20 bg-[#fbf3f0]/10 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 lg:mb-8 border border-white/30 shadow-lg animate-fade-in-up">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Dream Weddings, Smart Budgets
          </div>

          {/* Main Heading */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight animate-fade-in-up px-2"
            style={{ animationDelay: "0.2s" }}
          >
            Your Perfect Wedding Starts Here
          </h1>

          {/* Subtitle */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-6 sm:mb-8 lg:mb-12 max-w-xl mx-auto leading-relaxed font-light animate-fade-in-up line-clamp-2 px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Discover stunning destinations, curated packages, and expert
            planning that make your dream wedding a reality without breaking the
            bank.
          </p>

          {/* CTA Button (in-flow) */}
          <div
            ref={ctaRef}
            className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-16 animate-fade-in-up px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={handleCTAClick}
              className="group bg-[#ef4c57] text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#d13a44] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#ef4c57]/25 flex items-center relative overflow-hidden"
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative">
                Start Planning Your Dream Wedding
              </span>
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ml-1.5 sm:ml-2 md:ml-3 group-hover:translate-x-1 transition-transform duration-300 relative"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-white/90 animate-fade-in-up px-4"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full group hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-1.5 lg:mr-2 text-[#ef4c57] group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-xs sm:text-sm font-medium">
                500+ Happy Couples
              </span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full group hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-1.5 lg:mr-2 text-[#ef4c57] group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-xs sm:text-sm font-medium">
                50+ Destinations
              </span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full group hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1 sm:mr-1.5 lg:mr-2 text-[#ef4c57] group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-xs sm:text-sm font-medium">
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Floating CTA (fixed) */}
      {showFloatingCTA && (
        <div className="fixed bottom-4 left-0 w-full flex justify-center z-50 pointer-events-none">
          <button
            onClick={handleCTAClick}
            className="pointer-events-auto group bg-[#ef4c57] text-white px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-[#d13a44] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#ef4c57]/25 flex items-center relative overflow-hidden transition-opacity transition-transform duration-500 ease-out opacity-100 translate-y-0"
            style={{ transitionProperty: "opacity, transform" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <span className="relative">Start Planning Your Dream Wedding</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
