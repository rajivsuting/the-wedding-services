"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";
import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "Venue Selection",
    description:
      "Explore curated venues that fit your vision, guest list, and budget. We help you find the perfect setting.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Featured Hotels",
    description:
      "Enjoy exclusive rates and seamless stays at top hotels. We ensure comfort and convenience for your wedding.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Featured Destination",
    description:
      "Choose breathtaking destinations, from mountains to palaces. We handle every detail for a flawless celebration.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

// Add a floral SVG for Indian wedding vibe (now in theme red)
const FloralSVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute -top-6 -left-6 z-20 rotate-[-15deg]"
  >
    <circle
      cx="40"
      cy="40"
      r="36"
      stroke="#ee4c59"
      strokeWidth="4"
      fill="#fbf3f0"
    />
    <path
      d="M40 10 Q45 25 60 20 Q55 35 70 40 Q55 45 60 60 Q45 55 40 70 Q35 55 20 60 Q25 45 10 40 Q25 35 20 20 Q35 25 40 10 Z"
      fill="#ee4c59"
      fillOpacity="0.18"
    />
  </svg>
);

const Features = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  return (
    <section className="py-20 bg-white relative overflow-hidden overflow-x-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 text-[#ee4c59] opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#ee4c59]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ee4c59]/10 to-transparent blur-3xl" />
        {/* Soft background shape behind timeline */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2 w-[40vw] h-[80vh] bg-[#ee4c59]/5 rounded-full blur-2xl z-0" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <BrushTitle className="mb-4">Why Choose Us</BrushTitle>
          <motion.p
            className="text-lg text-[#6b7280] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We make your dream wedding a reality with our comprehensive services
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center">
          {/* Right: Large Vertical Video with Indian wedding vibe (now on right, clean style) */}
          <div className="w-full lg:w-2/5 flex-shrink-0 mb-8 lg:mb-0 flex justify-center relative order-2 lg:order-2">
            <div className="relative z-10 w-full">
              {/* Video Player */}
              <div className="relative w-full aspect-[16/9] max-w-2xl rounded-2xl overflow-hidden shadow-xl bg-black flex items-center justify-center">
                {videoPlaying ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/LPAmn4mDT78?autoplay=1&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full object-cover"
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/LPAmn4mDT78/hqdefault.jpg`}
                      alt="Video thumbnail"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-200"
                      aria-label="Play video"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 48 48"
                        className="w-20 h-20 drop-shadow-lg"
                      >
                        <circle
                          cx="24"
                          cy="24"
                          r="24"
                          fill="#ef4c57"
                          fillOpacity="0.85"
                        />
                        <polygon points="20,16 36,24 20,32" fill="white" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Left: Vertical Timeline/Stepper (now on left) */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center relative z-10 order-1 lg:order-1 mb-10 lg:mb-0">
            {/* Animated gradient timeline line */}
            <motion.div
              className="absolute left-8 top-0 bottom-0 w-1 hidden lg:block"
              initial={{
                background:
                  "linear-gradient(to bottom, #ee4c59 0%, #fbf3f0 100%)",
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              style={{
                background:
                  "linear-gradient(to bottom, #ee4c59 0%, #fbf3f0 100%)",
              }}
            />
            <div className="flex flex-col gap-7">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="flex items-start relative group"
                >
                  {/* Timeline line for mobile */}
                  {idx !== features.length - 1 && (
                    <div className="absolute left-7 top-12 h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-[#ee4c59] to-[#fbf3f0] opacity-60 block lg:hidden" />
                  )}
                  {/* Icon in circle with animation */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, 8, -8, 0] }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-[#ee4c59] text-white text-3xl shadow-lg mr-6 shrink-0 border-4 border-white group-hover:shadow-2xl group-hover:bg-[#d13a44] transition-all duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-[#2d2b2c] group-hover:text-[#ee4c59] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[#6b7280] text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
