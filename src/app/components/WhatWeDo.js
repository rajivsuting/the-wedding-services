"use client";

import BrushTitle from "./BrushTitle";
import { motion } from "framer-motion";

const points = [
  {
    title: "End-to-End Planning",
    description:
      "From the first idea to the final farewell, we handle every detail so you can focus on your celebration.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ee4c59"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6v6l4 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <circle cx="12" cy="12" r="10" stroke="#ee4c59" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Cultural Expertise",
    description:
      "We honor traditions and blend them with modern trends, creating weddings that are both meaningful and memorable.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ee4c59"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20M2 12h20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.2,
          }}
        />
      </svg>
    ),
  },
  {
    title: "Stress-Free Experience",
    description:
      "Our team anticipates challenges and solves them before you even notice, ensuring a smooth journey to your big day.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ee4c59"
      >
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="#ee4c59"
          strokeWidth="1.5"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: [0.5, 1, 0.8, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.4,
          }}
        />
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 14s1.5 2 4 2 4-2 4-2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.6,
          }}
        />
      </svg>
    ),
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fbf3f0] via-[#fff6f6] to-[#ffeaea] relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          width="100%"
          height="100%"
          className="absolute top-0 left-0 opacity-10"
          viewBox="0 0 400 100"
          fill="none"
        >
          <circle cx="60" cy="60" r="40" fill="#ee4c59" fillOpacity="0.08" />
          <circle cx="340" cy="40" r="30" fill="#ee4c59" fillOpacity="0.08" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <BrushTitle className="mb-4">End to End Services</BrushTitle>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
            We craft unforgettable weddings by blending creativity, tradition,
            and seamless execution—making your vision a reality, your way.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border-t-4 border-[#ee4c59] hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold text-[#ee4c59] mb-2">
                {point.title}
              </h3>
              <p className="text-[#2d2b2c] text-base">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
