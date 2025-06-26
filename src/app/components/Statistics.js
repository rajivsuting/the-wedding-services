import { FaHeart, FaStar, FaHotel } from "react-icons/fa";
import BrushTitle from "./BrushTitle";

const stats = [
  {
    icon: <FaHeart className="text-[#ef4c57] w-8 h-8" />,
    value: "1,043+",
    label: "weddings done",
  },
  {
    icon: <FaStar className="text-yellow-400 w-8 h-8" />,
    value: "4.8/5",
    label: "google rating",
  },
  {
    icon: <FaHotel className="text-[#ef4c57] w-8 h-8" />,
    value: "28,363+",
    label: "venue partners",
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements (match Features.js) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-[#ee4c59]/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#ee4c59]/10 to-transparent blur-3xl" />
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2 w-[40vw] h-[80vh] bg-[#ee4c59]/5 rounded-full blur-2xl z-0" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <BrushTitle className="mb-4 font-ebgaramond">Our Impact</BrushTitle>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto font-ebgaramond">
            Trusted by thousands of couples and venues across India
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#2d2b2c] font-ebgaramond">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl text-[#6b7280] font-medium mt-1 font-ebgaramond">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
