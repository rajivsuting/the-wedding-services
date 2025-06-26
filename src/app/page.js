import Hero from "./components/Hero";
import Features from "./components/Features";
import WhatWeDo from "./components/WhatWeDo";
import HowItWorks from "./components/HowItWorks";
import Destinations from "./components/Destinations";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      {/* <WhatWeDo /> */}
      <Destinations />
      <HowItWorks />
      <AboutUs />
      <Testimonials />
      <CTA />
    </>
  );
}
