"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path) => {
    const isActiveLink = isActive(path);
    console.log("getLinkClasses", { path, pathname, isActive: isActiveLink });
    return [
      "text-lg font-medium transition-colors text-gray-800 hover:text-[#ee4c59]",
      isActiveLink &&
        "!text-[#ee4c59] font-semibold underline underline-offset-4",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const getMobileLinkClasses = (path) => {
    const isActiveLink = isActive(path);
    console.log("getMobileLinkClasses", {
      path,
      pathname,
      isActive: isActiveLink,
    });
    return [
      "text-lg font-medium transition-colors text-gray-800 hover:text-[#ee4c59]",
      isActiveLink &&
        "!text-[#ee4c59] font-semibold underline underline-offset-4",
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Wedding Services Logo"
              width={200}
              height={100}
              className="mr-3"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={getLinkClasses("/")}>
              Home
            </Link>

            <Link href="/services" className={getLinkClasses("/services")}>
              Services
            </Link>
            <Link href="/packages" className={getLinkClasses("/packages")}>
              Pricing
            </Link>
            <Link href="/gallery" className={getLinkClasses("/gallery")}>
              Gallery
            </Link>
            <Link href="/about" className={getLinkClasses("/about")}>
              About
            </Link>
            <Link href="/contact" className={getLinkClasses("/contact")}>
              Contact Us
            </Link>
            <button
              className="ml-4 bg-[#ef4c57] text-white px-5 py-2 rounded-full font-semibold shadow text-base"
              onClick={() => router.push("/plan")}
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={getMobileLinkClasses("/")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/venues"
                  className={getMobileLinkClasses("/venues")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Venues
                </Link>
                <Link
                  href="/destinations"
                  className={getMobileLinkClasses("/destinations")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Destinations
                </Link>
                <Link
                  href="/services"
                  className={getMobileLinkClasses("/services")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/packages"
                  className={getMobileLinkClasses("/packages")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Packages
                </Link>
                <Link
                  href="/gallery"
                  className={getMobileLinkClasses("/gallery")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className={getMobileLinkClasses("/about")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={getMobileLinkClasses("/contact")}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
