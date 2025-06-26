"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    number: "01",
    title: "BUDGET PLANNING",
    description:
      "Plan your wedding within your budget with transparent pricing and smart solutions—no compromises on your dreams.",
    cta: "Book Us for Budget Planning",
    images: ["/food1.jpg", "/food2.jpg"],
  },
  {
    number: "02",
    title: "WEDDING VENUES",
    description:
      "Choose from stunning venues—villas, banquet halls, hotels, and resorts—tailored to your style and needs, anywhere in India.",
    cta: "Book Us for Wedding Venue",
    images: ["/venue1.jpg", "/venue2.jpg"],
  },
  {
    number: "03",
    title: "DECORATIONS",
    description:
      "From floral arrangements to themed decor, we create a magical ambiance that reflects your style and vision.",
    cta: "Book Us for Decor Management",
    images: ["/photoshoot1.jpg", "/photoshoot2.jpg", "/photoshoot3.jpg"],
  },
  {
    number: "04",
    title: "FOOD AND BEVERAGES",
    description:
      "Enjoy delicious cuisine from top caterers, ensuring your guests have a memorable dining experience.",
    cta: "Book Us for Food and Beverages",
    images: ["/food1.jpg", "/food2.jpg", "/food3.jpg"],
  },
  {
    number: "05",
    title: "PHOTOGRAPHY",
    description:
      "Capture every precious moment with our expert photographers and cinematographers at affordable rates.",
    cta: "Book Us for Photography",
    images: ["/photoshoot1.jpg", "/photoshoot2.jpg", "/photoshoot3.jpg"],
  },
  {
    number: "06",
    title: "MAKEUP AND GROOMING",
    description:
      "Look and feel your best with top makeup artists and groomers, offering personalized styling for your big day.",
    cta: "Book Us for Makeup and Grooming",
    images: ["/makeup1.jpg", "/makeup2.jpg", "/makeup3.jpg", "/makeup4.jpg"],
  },
];

const Services = () => {
  // Track selected image index for each service
  const [selectedImages, setSelectedImages] = useState(services.map(() => 0));
  // Track pause state for each service
  const [paused, setPaused] = useState(services.map(() => false));
  const intervalRefs = useRef([]);

  // Auto-advance images
  useEffect(() => {
    services.forEach((service, idx) => {
      if (intervalRefs.current[idx]) clearInterval(intervalRefs.current[idx]);
      if (!paused[idx] && service.images.length > 1) {
        intervalRefs.current[idx] = setInterval(() => {
          setSelectedImages((prev) =>
            prev.map((val, i) =>
              i === idx ? (val + 1) % service.images.length : val
            )
          );
        }, 2500);
      }
    });
    return () => {
      intervalRefs.current.forEach((intv) => clearInterval(intv));
    };
  }, [paused]);

  const handleThumbnailClick = (serviceIdx, imgIdx) => {
    setSelectedImages((prev) =>
      prev.map((val, idx) => (idx === serviceIdx ? imgIdx : val))
    );
  };

  const handlePause = (serviceIdx, value) => {
    setPaused((prev) => prev.map((p, idx) => (idx === serviceIdx ? value : p)));
  };

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full opacity-10"
          style={{ backgroundColor: "var(--primary)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: "var(--primary)" }}
        />
      </div>

      <div className="container mx-auto px-0 sm:px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <BrushTitle className="mb-4">End to End Wedding Services</BrushTitle>
          <motion.p
            className="text-lg text-[#6b7280] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our comprehensive range of wedding services tailored to
            make your special day perfect
          </motion.p>
        </motion.div>

        {/* Two-column Portfolio Layout */}
        <div className="flex flex-col gap-20">
          {Array.from({ length: Math.ceil(services.length / 2) }).map(
            (_, rowIdx) => {
              const leftIdx = rowIdx * 2;
              const rightIdx = rowIdx * 2 + 1;
              const left = services[leftIdx];
              const right = services[rightIdx];
              return (
                <div key={rowIdx} className="flex flex-col md:flex-row gap-12">
                  {/* Left Service */}
                  {left && (
                    <div className="flex-1 flex flex-col items-stretch">
                      <div className="relative min-h-[180px] md:min-h-[260px] lg:min-h-[320px] flex flex-col justify-end items-stretch">
                        <Image
                          src={left.images[selectedImages[leftIdx]]}
                          alt={left.title + " main image"}
                          fill
                          className="absolute inset-0 w-full h-full object-cover object-center z-0 rounded-xl"
                          style={{ filter: "brightness(0.93) contrast(1.03)" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={leftIdx === 0}
                        />
                        {/* Only subtle dark gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10 rounded-xl" />
                        <div
                          className={`relative z-20 flex flex-col justify-center h-full w-full px-4 md:px-6 py-4 ${
                            leftIdx % 2 === 0
                              ? "items-start text-left"
                              : "items-end text-right"
                          }`}
                        >
                          <div className="flex flex-col gap-2 max-w-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-8 h-8 rounded-full bg-[#ee4c59] text-white flex items-center justify-center text-base font-bold shadow">
                                {left.number}
                              </div>
                              <div className="w-8 h-0.5 bg-[#ee4c59] rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                              {left.title}
                            </h3>
                            <p className="text-white text-sm md:text-base leading-relaxed drop-shadow bg-transparent px-0 py-0">
                              {left.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Thumbnails below image */}
                      {left.images.length > 1 && (
                        <div
                          className="flex gap-3 mt-4 px-2 md:px-0"
                          onMouseEnter={() => handlePause(leftIdx, true)}
                          onMouseLeave={() => handlePause(leftIdx, false)}
                        >
                          {left.images.slice(0, 3).map((img, i) => (
                            <Image
                              key={i}
                              src={img}
                              alt={left.title + " gallery image " + (i + 1)}
                              width={96}
                              height={64}
                              className={`w-24 h-16 object-cover rounded shadow border border-[#ee4c59]/15 bg-white transition-all duration-300 cursor-pointer ${
                                selectedImages[leftIdx] === i
                                  ? "border-[#ee4c59] scale-105 shadow-md"
                                  : "hover:scale-105 hover:shadow"
                              }`}
                              onClick={() => handleThumbnailClick(leftIdx, i)}
                              onMouseEnter={() =>
                                handleThumbnailClick(leftIdx, i)
                              }
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {/* Right Service */}
                  {right && (
                    <div className="flex-1 flex flex-col items-stretch">
                      <div className="relative min-h-[180px] md:min-h-[260px] lg:min-h-[320px] flex flex-col justify-end items-stretch">
                        <Image
                          src={right.images[selectedImages[rightIdx]]}
                          alt={right.title + " main image"}
                          fill
                          className="absolute inset-0 w-full h-full object-cover object-center z-0 rounded-xl"
                          style={{ filter: "brightness(0.93) contrast(1.03)" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={rightIdx === 0}
                        />
                        {/* Only subtle dark gradient for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-10 rounded-xl" />
                        <div
                          className={`relative z-20 flex flex-col justify-center h-full w-full px-4 md:px-6 py-4 ${
                            rightIdx % 2 === 0
                              ? "items-start text-left"
                              : "items-end text-right"
                          }`}
                        >
                          <div className="flex flex-col gap-2 max-w-lg ml-auto">
                            <div className="flex items-center gap-2 mb-2 justify-end">
                              <div className="w-8 h-8 rounded-full bg-[#ee4c59] text-white flex items-center justify-center text-base font-bold shadow">
                                {right.number}
                              </div>
                              <div className="w-8 h-0.5 bg-[#ee4c59] rounded-full" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg">
                              {right.title}
                            </h3>
                            <p className="text-white text-sm md:text-base leading-relaxed drop-shadow bg-transparent px-0 py-0">
                              {right.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Thumbnails below image */}
                      {right.images.length > 1 && (
                        <div
                          className="flex gap-3 mt-4 px-2 md:px-0"
                          onMouseEnter={() => handlePause(rightIdx, true)}
                          onMouseLeave={() => handlePause(rightIdx, false)}
                        >
                          {right.images.slice(0, 3).map((img, i) => (
                            <Image
                              key={i}
                              src={img}
                              alt={right.title + " gallery image " + (i + 1)}
                              width={96}
                              height={64}
                              className={`w-24 h-16 object-cover rounded shadow border border-[#ee4c59]/15 bg-white transition-all duration-300 cursor-pointer ${
                                selectedImages[rightIdx] === i
                                  ? "border-[#ee4c59] scale-105 shadow-md"
                                  : "hover:scale-105 hover:shadow"
                              }`}
                              onClick={() => handleThumbnailClick(rightIdx, i)}
                              onMouseEnter={() =>
                                handleThumbnailClick(rightIdx, i)
                              }
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
