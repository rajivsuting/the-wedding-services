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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

        {/* Animated floating elements */}
        <div className="absolute top-32 left-32 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse hidden sm:block"></div>
        <div
          className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse hidden sm:block"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-16 w-32 h-32 bg-white/8 rounded-full blur-xl animate-pulse hidden sm:block"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-24 w-28 h-28 bg-white/6 rounded-full blur-xl animate-pulse hidden sm:block"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Additional decorative elements */}
        <div
          className="absolute top-20 right-1/4 w-16 h-16 bg-[#ef4c57]/20 rounded-full blur-lg animate-bounce hidden sm:block"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-20 h-20 bg-[#fbf3f0]/10 rounded-full blur-lg animate-bounce hidden sm:block"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl sm:max-w-4xl lg:max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center mt-10 sm:mt-14">
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-6 lg:mb-8 leading-tight animate-fade-in-up px-1 sm:px-2"
            style={{ animationDelay: "0.2s" }}
          >
            Your Dream Wedding Awaits.
          </h1>

          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm sm:text-lg font-semibold mb-10 sm:mb-14 lg:mb-8 border border-white/30 shadow-lg animate-fade-in-up">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 mr-2 animate-pulse"
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
            <span className="mx-2 w-px h-5 bg-white/40 rounded-full hidden sm:inline-block"></span>
            <span className="ml-0 sm:ml-2">
              Dream Weddings
              <span className="mx-2 w-px h-5 bg-white/40 rounded-full inline-block align-middle"></span>
              Smart Budgets
              <span className="mx-2 w-px h-5 bg-white/40 rounded-full inline-block align-middle"></span>
              Expert Planning
            </span>
          </div>

          {/* Subtitle */}
          {/* <p
            className="text-xs sm:text-base md:text-lg lg:text-xl text-white/95 mb-4 sm:mb-8 lg:mb-12 max-w-xs sm:max-w-xl mx-auto leading-relaxed font-light animate-fade-in-up line-clamp-3 px-2 sm:px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Discover beautiful destinations and expert packages to make your
            dream wedding a reality, affordably.
          </p> */}

          {/* CTA Button (in-flow) */}
          <div
            ref={ctaRef}
            className="flex justify-center items-center mb-6 sm:mb-12 lg:mb-16 animate-fade-in-up px-2 sm:px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={handleCTAClick}
              className="group bg-[#ef4c57] text-white w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#d13a44] transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#ef4c57]/25 flex items-center relative overflow-hidden"
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
            className="flex flex-row justify-center items-end gap-4 sm:gap-6 lg:gap-8 text-white/90 animate-fade-in-up px-2 sm:px-4"
            style={{ animationDelay: "0.8s" }}
          >
            {/* Happy Couples */}
            <div className="flex flex-col items-center mx-2 sm:mx-4">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 mb-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="text-base sm:text-2xl font-extrabold text-white tracking-wide flex items-baseline">
                  500
                  <span className="text-sm sm:text-lg font-bold align-super ml-1 animate-bounce">
                    +
                  </span>
                </div>
                <div className="w-5 h-0.5 sm:w-6 sm:h-1 bg-white/20 rounded-full mt-1 mb-1"></div>
              </div>
              <div className="text-[10px] sm:text-xs text-white/80 font-semibold tracking-widest uppercase text-center drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]">
                Happy Couples
              </div>
            </div>
            {/* Divider */}
            <div className="h-8 w-px sm:h-10 bg-white/20 mx-1 sm:mx-2" />
            {/* Destinations */}
            <div className="flex flex-col items-center mx-2 sm:mx-4">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 mb-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21c-4.418 0-8-5.373-8-10A8 8 0 0112 3a8 8 0 018 8c0 4.627-3.582 10-8 10z"
                  />
                  <circle cx="12" cy="11" r="3" />
                </svg>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="text-base sm:text-2xl font-extrabold text-white tracking-wide flex items-baseline">
                  50
                  <span className="text-sm sm:text-lg font-bold align-super ml-1 animate-bounce">
                    +
                  </span>
                </div>
                <div className="w-5 h-0.5 sm:w-6 sm:h-1 bg-white/20 rounded-full mt-1 mb-1"></div>
              </div>
              <div className="text-[10px] sm:text-xs text-white/80 font-semibold tracking-widest uppercase text-center drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]">
                Destinations
              </div>
            </div>
            {/* Divider */}
            <div className="h-8 w-px sm:h-10 bg-white/20 mx-1 sm:mx-2" />
            {/* Support */}
            <div className="flex flex-col items-center mx-2 sm:mx-4">
              <div className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/40 mb-2">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white z-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3a9 9 0 00-9 9v4a4 4 0 004 4h1m8-8a9 9 0 00-9-9m9 9v4a4 4 0 01-4 4h-1"
                  />
                </svg>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="text-base sm:text-2xl font-extrabold text-white tracking-wide flex items-baseline">
                  24/7
                </div>
                <div className="w-5 h-0.5 sm:w-6 sm:h-1 bg-white/20 rounded-full mt-1 mb-1"></div>
              </div>
              <div className="text-[10px] sm:text-xs text-white/80 font-semibold tracking-widest uppercase text-center drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]">
                Support
              </div>
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
