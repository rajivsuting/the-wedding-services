"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";
import {
  FaRupeeSign,
  FaUserCheck,
  FaGlobeAsia,
  FaRegLightbulb,
} from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Founder & Lead Planner",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    description:
      "10+ years of experience in creating dream weddings within budget",
  },
  {
    name: "Rahul Mehta",
    role: "Vendor Relations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    description: "Expert in negotiating the best deals with local vendors",
  },
  {
    name: "Ananya Patel",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    description: "Specializes in creating stunning decor on a budget",
  },
];

const differentiators = [
  {
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
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Budget Masters",
    description:
      "Deep understanding of cost-saving strategies and value optimization",
  },
  {
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
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Local Connections",
    description: "Exclusive access to vetted, affordable vendors across India",
  },
  {
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
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Transparency",
    description:
      "No hidden fees, clear pricing models, and honest communication",
  },
  {
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
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: "Stress-Free Process",
    description: "We manage the complexities, you enjoy the journey",
  },
];

const AboutUs = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: "var(--primary)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Left: Heading, intro, and features */}
          <div className="flex-1 flex flex-col gap-8 text-center md:text-left relative">
            {/* Animated Heart */}
            <motion.div
              className="absolute -top-10 -left-10 text-[#ee4c59] opacity-20 z-10"
              animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-20 h-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
            <BrushTitle className="mb-2">
              Destination Wedding Services
            </BrushTitle>
            <p className="text-lg text-[var(--gray)] max-w-xl mx-auto md:mx-0 mb-4">
              We can help you create an unforgettable destination wedding that
              seamlessly blends your vision, budget, and values.
            </p>
            {/* Features row as vertical stepper */}
            <div className="flex flex-col items-center md:items-start w-full max-w-xl mx-auto md:mx-0 mt-8">
              {/* Vertical Stepper */}
              <div className="relative flex flex-col gap-12">
                {/* Step 1 */}
                <div className="flex items-start gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#ee4c59]/10 text-[#ee4c59] flex items-center justify-center text-3xl mb-2 border-2 border-[#ee4c59]">
                      <FaRupeeSign />
                    </div>
                    <div className="flex-1 w-1 bg-[#ee4c59]/30 h-16 mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--dark)] mb-1">
                      Tailored to Your Budget
                    </h4>
                    <p className="text-[var(--gray)] text-base max-w-md">
                      We'll work with you to find solutions that fit your
                      financial plan without compromising on the magic of your
                      special day.
                    </p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="flex items-start gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#ee4c59]/10 text-[#ee4c59] flex items-center justify-center text-3xl mb-2 border-2 border-[#ee4c59]">
                      <FaUserCheck />
                    </div>
                    <div className="flex-1 w-1 bg-[#ee4c59]/30 h-16 mx-auto" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--dark)] mb-1">
                      Personalized Celebration
                    </h4>
                    <p className="text-[var(--gray)] text-base max-w-md">
                      We ensure a joyful event that truly reflects your unique
                      style and preferences.
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="flex items-start gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#ee4c59]/10 text-[#ee4c59] flex items-center justify-center text-3xl mb-2 border-2 border-[#ee4c59]">
                      <FaGlobeAsia />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[var(--dark)] mb-1">
                      Culturally Immersive Experience
                    </h4>
                    <p className="text-[var(--gray)] text-base max-w-md">
                      We infuse local charm, heritage, and a sense of adventure
                      into every detail, making your wedding truly unique and
                      memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Optional Offering Callout */}
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border-l-4 border-[#ee4c59] rounded-xl shadow-lg px-6 py-4 w-full max-w-2xl mt-4 mx-auto">
              <FaRegLightbulb className="text-[#ee4c59] text-xl" />
              <span className="italic text-[var(--gray)] text-base">
                We can also assist you in creating a culturally rich and
                responsible destination wedding, an experience you and your
                family will cherish forever.
              </span>
            </div>
          </div>
          {/* Right: Celebration image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[400px] h-[300px] md:w-[550px] md:h-[400px] rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/about.png"
                alt="Celebration with confetti and balloons"
                fill
                priority
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
