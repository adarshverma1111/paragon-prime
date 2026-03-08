import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/paragon-prime-logo1.png";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Black strip only for desktop */}
      <div className="hidden md:block fixed top-0 left-0 right-0 h-[58px] bg-black z-40"></div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md md:top-6 md:left-20 md:right-20 md:rounded-[40px] shadow-xl">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-14 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Mobile Toggle */}
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

              <Link to="/" className="text-gray-600 hover:text-black text-sm cursor-pointer">
                Home
              </Link>

              <Link to="/about" className="text-gray-600 hover:text-black text-sm cursor-pointer">
                About
              </Link>

              <Link to="/services" className="text-gray-600 hover:text-black text-sm cursor-pointer">
                Services
              </Link>

              <Link to="/industries" className="text-gray-600 hover:text-black text-sm cursor-pointer">
                Industries
              </Link>

              <Link to="/integrations" className="text-gray-600 hover:text-black text-sm cursor-pointer">
                Integrations
              </Link>

              <Link to="/contact">
                <button className="px-6 py-2 text-sm font-semibold text-white bg-[#FB7118] rounded-full hover:bg-[#023A73] transition shadow-lg">
                  Contact Us
                </button>
              </Link>

              <Link to="/meeting">
                <button className="px-6 py-2 text-sm font-semibold text-white bg-[#023A73] border border-[#023A73] rounded-full transition-all duration-300 hover:bg-[#012a55] hover:border-[#012a55] hover:shadow-[0_0_20px_rgba(2,58,115,0.4)]">
                  Schedule Meeting
                </button>
              </Link>

            </nav>

          </div>

          {/* Mobile Menu */}
          {expanded && (
            <div className="md:hidden pb-6 pt-2">

              <div className="flex flex-col space-y-4">

                <Link to="/" className="text-gray-700 text-sm" onClick={() => setExpanded(false)}>
                  Home
                </Link>

                <Link to="/about" className="text-gray-700 text-sm" onClick={() => setExpanded(false)}>
                  About
                </Link>

                <Link to="/services" className="text-gray-700 text-sm" onClick={() => setExpanded(false)}>
                  Services
                </Link>

                <Link to="/industries" className="text-gray-700 text-sm" onClick={() => setExpanded(false)}>
                  Industries
                </Link>

                <Link to="/integrations" className="text-gray-700 text-sm" onClick={() => setExpanded(false)}>
                  Integrations
                </Link>

                <Link to="/contact" onClick={() => setExpanded(false)}>
                  <button className="mt-2 px-5 py-2 text-sm text-white bg-[#FB7118] rounded-full w-fit hover:bg-[#023A73] transition shadow-lg">
                    Contact Us
                  </button>
                </Link>

                <Link to="/meeting">
                  <button className="px-6 py-2 text-sm font-semibold text-white bg-[#023A73] border border-[#023A73] rounded-full transition-all duration-300 hover:bg-[#012a55] hover:border-[#012a55] hover:shadow-[0_0_20px_rgba(2,58,115,0.4)]">
                    Schedule Meeting
                  </button>
                </Link>

              </div>

            </div>
          )}

        </div>
      </header>
    </>
  );
};

export default Navbar;