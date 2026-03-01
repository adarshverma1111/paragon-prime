import React, { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-[80vh] bg-black">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* Make sure this file exists inside public folder */}
        <source src="/vedios.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Navbar */}
      <header
        className="absolute top-0 left-0 right-0 z-20 
        bg-white/95 backdrop-blur-md 
        md:top-6 md:left-20 md:right-20 
        md:rounded-[40px] shadow-xl"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/paragon-prime-logo1.png"
                alt="Logo"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black"
              onClick={() => setExpanded(prev => !prev)}
            >
              {!expanded ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              <a className="text-gray-600 hover:text-black text-sm cursor-pointer">About</a>
              <a className="text-gray-600 hover:text-black text-sm cursor-pointer">Services</a>
              <a className="text-gray-600 hover:text-black text-sm cursor-pointer">Industries</a>

              <button className="px-6 py-2 text-sm text-white bg-[#FB7118] rounded-full hover:bg-[#023A73] transition shadow-lg">
                Contact Us
              </button>
            </nav>
          </div>

          {/* Mobile Nav */}
          {expanded && (
            <div className="md:hidden pb-6">
              <div className="flex flex-col space-y-4">
                <a className="text-gray-600 text-sm cursor-pointer">About</a>
                <a className="text-gray-600 text-sm cursor-pointer">Services</a>
                <a className="text-gray-600 text-sm cursor-pointer">Industries</a>

                <button className="mt-2 px-5 py-2 text-sm text-white bg-[#FB7118] rounded-full w-fit hover:bg-[#023A73] transition shadow-lg">
                  Contact Us
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center min-h-[80vh] md:min-h-screen">
        <div className="lg:w-2/3">

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest text-gray-300 uppercase"
          >
            A Hub for Designers, Developers & Marketers
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-4xl font-bold leading-tight 
            text-white sm:text-5xl lg:text-7xl xl:text-8xl"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
              From Concept to
            </span>{" "}
            Creation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-xl mt-6 text-lg text-gray-200"
          >
            We turn ideas into high-performance digital products. Our team builds smart,
            scalable, and user-focused software that solves real-world problems and drives growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <button className="px-6 py-3 text-sm font-medium text-white rounded-full bg-[#102C4C] hover:opacity-90 transition shadow-xl">
              Learn More
            </button>

            <button className="px-6 py-3 text-sm font-medium text-white border border-white/30 rounded-full backdrop-blur hover:bg-white/10 transition shadow-xl">
              Schedule Meeting
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
