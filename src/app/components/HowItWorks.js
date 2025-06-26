"use client";

import { motion } from "framer-motion";
import BrushTitle from "./BrushTitle";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Budget & Vision",
    description:
      "Share your dream wedding and how much you'd like to spend. We'll show you what's possible—without pressure.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Your Custom Plan & Quote",
    description:
      "We create a tailored wedding blueprint, complete with destination options, cost breakdown, and vendor suggestions.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Relax While We Bring It to Life",
    description:
      "From booking to 'I do', we handle the details. You show up, get married, and make unforgettable memories—stress-free and budget-happy.",
    icon: (
      <svg
        className="w-12 h-12"
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

const HowItWorks = () => {
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

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <BrushTitle className="mb-4" style={{ color: "var(--dark)" }}>
            How It Works
          </BrushTitle>
          <p className="section-subtitle">
            Your journey to a perfect wedding starts here
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 transform -translate-y-1/2 translate-x-1/2"
                  style={{ backgroundColor: "var(--primary)", opacity: 0.2 }}
                />
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{
                      backgroundColor: "var(--primary)",
                      color: "white",
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-4xl font-bold mb-4"
                    style={{ color: "var(--primary)", opacity: 0.2 }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "var(--dark)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Wedding Rings */}
        <div className="absolute -bottom-10 left-1/4 transform -translate-x-1/2 opacity-10">
          <svg
            className="w-32 h-32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>
        <div className="absolute -top-10 right-1/4 transform translate-x-1/2 opacity-10">
          <svg
            className="w-32 h-32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
