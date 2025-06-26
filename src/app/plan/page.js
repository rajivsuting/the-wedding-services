"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const destinations = ["Udaipur", "Goa", "Shimla", "Kerala", "Jaipur"];
const priceRanges = [
  "Budget (Under 5L)",
  "Standard (5L-10L)",
  "Luxury (10L-15L)",
  "Premium (15L+)",
];

const priceSlider = [
  { label: "Budget (Under 5L)", value: 0 },
  { label: "Standard (5L-10L)", value: 1 },
  { label: "Luxury (10L-15L)", value: 2 },
  { label: "Premium (15L+)", value: 3 },
];

const steps = [
  {
    label: "What shall we call you?",
    field: {
      name: "name",
      type: "text",
      placeholder: "Your Name",
      required: true,
    },
  },
  {
    label: "Please share your number to view it.",
    field: {
      name: "phone",
      type: "tel",
      placeholder: "Your Number",
      required: true,
    },
  },
  {
    label: "Select your destination",
    field: {
      name: "destination",
      type: "select",
      options: destinations,
      required: true,
    },
  },
  {
    label: "Select your price range",
    field: {
      name: "price",
      type: "range",
      min: 0,
      max: 3,
      step: 1,
      required: true,
    },
  },
];

export default function PlanPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ price: 0 });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert("Thank you! We will contact you soon.");
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center"
      >
        {/* Background image and floating elements (cover whole page) */}
        <Image
          src="/weddingcouple.jpg"
          alt="Hero Background"
          fill
          priority
          className="w-full h-full object-cover object-center bg-fixed z-0"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10"></div>
        {/* Floating elements (same as Hero) */}
        <div className="absolute top-32 left-32 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse z-20"></div>
        <div
          className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse z-20"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-16 w-32 h-32 bg-white/8 rounded-full blur-xl animate-pulse z-20"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/3 right-24 w-28 h-28 bg-white/6 rounded-full blur-xl animate-pulse z-20"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-20 right-1/4 w-16 h-16 bg-[#ef4c57]/20 rounded-full blur-lg animate-bounce z-20"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-20 h-20 bg-[#fbf3f0]/10 rounded-full blur-lg animate-bounce z-20"
          style={{ animationDelay: "2.5s" }}
        ></div>
        {/* Centered floating form (no panel, no bg) */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <AnimatePresence mode="wait">
            <motion.form
              key={step}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 20 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 items-center w-full max-w-lg"
            >
              <label className="text-2xl md:text-3xl font-extrabold text-white mb-4 whitespace-pre-line text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {steps[step].label}
              </label>
              {steps[step].field.type === "select" ? (
                <select
                  name={steps[step].field.name}
                  value={form[steps[step].field.name] || ""}
                  onChange={handleChange}
                  required={steps[step].field.required}
                  className="w-full bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-5 py-3 text-lg text-white shadow-lg placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-[#ef4c57]/60 transition-all duration-200 appearance-none"
                  style={{ colorScheme: "dark" }}
                >
                  <option value="" disabled style={{ color: "#222" }}>
                    {steps[step].field.placeholder || "Select..."}
                  </option>
                  {steps[step].field.options.map((opt) => (
                    <option key={opt} value={opt} style={{ color: "#222" }}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : steps[step].field.type === "range" ? (
                <div className="w-full flex flex-col items-center gap-2">
                  <span className="text-lg font-semibold text-white drop-shadow-sm mb-1">
                    {priceSlider[form.price]?.label}
                  </span>
                  <input
                    type="range"
                    name="price"
                    min="0"
                    max="3"
                    step="1"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full accent-[#ef4c57] h-2 bg-white/30 rounded-full outline-none focus:ring-4 focus:ring-[#ef4c57]/60 transition-all duration-200"
                  />
                </div>
              ) : (
                <input
                  type={steps[step].field.type}
                  name={steps[step].field.name}
                  value={form[steps[step].field.name] || ""}
                  onChange={handleChange}
                  placeholder={steps[step].field.placeholder}
                  required={steps[step].field.required}
                  className="w-full bg-white/20 backdrop-blur-md border border-white/40 rounded-full px-5 py-3 text-lg text-white shadow-lg placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-[#ef4c57]/60 transition-all duration-200"
                />
              )}
              <button
                type="submit"
                className="mt-4 px-8 py-3 rounded-full bg-[#ef4c57]/90 text-white text-lg font-bold shadow-xl hover:bg-[#ef4c57] hover:scale-105 transition-all duration-200 backdrop-blur-md border border-white/30 focus:outline-none focus:ring-4 focus:ring-[#ef4c57]/60 w-full"
              >
                {step < steps.length - 1 ? "Next" : "Submit"}
              </button>
            </motion.form>
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
