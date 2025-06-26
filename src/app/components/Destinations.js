"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";
import Link from "next/link";
import { destinations } from "@/app/data/data";
import {
  FaUmbrellaBeach,
  FaMountain,
  FaWater,
  FaLandmark,
  FaMapMarkerAlt,
  FaMonument,
} from "react-icons/fa";
import {
  GiIndianPalace,
  GiLotus,
  GiStoneTower,
  GiBoatFishing,
} from "react-icons/gi";

const monumentIcons = {
  goa: <FaUmbrellaBeach className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  udaipur: <GiIndianPalace className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  shimla: <FaMountain className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  // kerala: <FaWater className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  agra: <FaLandmark className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  jaipur: <GiIndianPalace className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  hyderabad: <GiStoneTower className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  mumbai: <FaMonument className="w-16 h-16 text-[#ee4c59] mx-auto" />,
  delhi: <GiLotus className="w-16 h-16 text-[#ee4c59] mx-auto" />,
};

const Destinations = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hearts */}
        <motion.div
          className="absolute top-10 left-10 text-[#ee4c59] opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#ee4c59]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ee4c59]/10 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <BrushTitle className="mb-4">We Are Present In</BrushTitle>
          <motion.p
            className="text-lg text-[#6b7280] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore the beautiful locations where we make dream weddings happen
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="flex flex-col items-center justify-center gap-4"
            >
              {monumentIcons[destination.id] || (
                <FaMapMarkerAlt className="w-16 h-16 text-[#ee4c59] mx-auto" />
              )}
              <span className="text-xl font-semibold text-[#2d2b2c] mt-2 text-center">
                {destination.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
