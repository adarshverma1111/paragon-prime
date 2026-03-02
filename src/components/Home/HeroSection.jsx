import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import vedio from "../../assets/vedios/vedios.mp4";
import logo from "../../assets/logos/paragon-prime-logo1.png";

const HeroSection = () => {

  const [expanded, setExpanded] = useState(false);

  // counting states
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {

    let project = 0;
    let client = 0;
    let exp = 0;

    const interval = setInterval(() => {

      if (project < 250) {
        project += 5;
        setProjects(project);
      }

      if (client < 100) {
        client += 2;
        setClients(client);
      }

      if (exp < 4) {
        exp += 1;
        setExperience(exp);
      }

      if (project >= 250 && client >= 100 && exp >= 4) {
        clearInterval(interval);
      }

    }, 100);

    return () => clearInterval(interval);

  }, []);

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
        <source src={vedio} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md md:top-6 md:left-20 md:right-20 md:rounded-[40px] shadow-xl">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-14 md:h-14 w-auto object-contain"
              />
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-black"
              onClick={() => setExpanded(prev => !prev)}
            >
              {!expanded ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-10">
              <a className="text-gray-600 hover:text-black text-sm cursor-pointer">Home</a>
              <a className="text-gray-600 hover:text-black text-sm cursor-pointer">About</a>
              <a className="text-gray-600 hover:text-black text-sm cursor-pointer">Services</a>
              <a className="text-gray-600 hover:text-black text-sm cursor-pointer">Industries</a>

              <button className="px-6 py-2 text-sm text-white bg-[#FB7118] rounded-full hover:bg-[#023A73] transition shadow-lg">
                Contact Us
              </button>
            </nav>

          </div>

          {/* Mobile Menu */}
          {expanded && (
            <div className="md:hidden pb-6 pt-2">
              <div className="flex flex-col space-y-4">

                <a className="text-gray-700 text-sm cursor-pointer">Home</a>
                <a className="text-gray-700 text-sm cursor-pointer">About</a>
                <a className="text-gray-700 text-sm cursor-pointer">Services</a>
                <a className="text-gray-700 text-sm cursor-pointer">Industries</a>

                <button className="mt-2 px-5 py-2 text-sm text-white bg-[#FB7118] rounded-full w-fit hover:bg-[#023A73] transition shadow-lg">
                  Contact Us
                </button>

              </div>
            </div>
          )}

        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 flex items-center min-h-[85vh] md:min-h-screen">

        <div className="lg:w-2/3 mt-32">

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
            className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl xl:text-8xl"
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
            We turn ideas into high-performance digital products. Our team builds
            smart, scalable, and user-focused software that solves real-world
            problems and drives growth.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-5 mt-12"
          >

            <button className="px-8 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-orange-500 hover:scale-105 transition-all duration-300">
              Learn More
            </button>

            <button className="px-8 py-3 text-sm font-semibold text-white rounded-full border border-white/30 hover:bg-white hover:text-black transition">
              Schedule Meeting
            </button>

          </motion.div>

          {/* Stats Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center gap-10 mt-10 text-gray-300 text-sm"
          >

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{projects}+</span>
              <span>Projects Delivered</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{clients}%</span>
              <span>Happy Clients</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{experience}+</span>
              <span>Years Experience</span>
            </div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;