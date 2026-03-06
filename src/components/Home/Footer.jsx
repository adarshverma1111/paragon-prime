import { Link } from "react-router-dom";
import logo from "../../assets/logos/paragon-prime-logo1.png";

export default function ParagonFooter() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] via-[#020617] to-black text-white px-6 sm:px-10 lg:px-12 pt-12 pb-0 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* grid-cols-2 on mobile so Quick Links & Our Services sit side by side;
            Brand and Contact are forced full-width via col-span-2 sm:col-span-1 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">

          {/* Column 1 - Brand (full width on mobile) */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-4 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <img
                src={logo}
                alt="Paragon Logo"
                className="w-36 sm:w-40 lg:w-44"
              />
            </div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses with innovative technology solutions. We
              transform ideas into reality with cutting-edge development and
              digital excellence.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-2">

              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
              </a>

              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" fill="white" />
                </svg>
              </a>

              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
              </a>

            </div>

            <div className="mt-4 flex justify-center sm:justify-start items-baseline">
              <span className="text-3xl sm:text-4xl font-black text-[#FF4400]">Let's</span>
              <span className="text-3xl sm:text-4xl font-black text-[#134E8E] ml-2">Start...</span>
            </div>
          </div>

          {/* Column 2 - Quick Links (col-span-1 on mobile = left half) */}
          <div className="col-span-1 text-left">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <div className="w-10 h-0.5 bg-[#FF4400] mb-5"></div>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Services
                </Link>
              </li>

              <li>
                <Link to="/clients" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Clients
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Terms of Service
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 3 - Services (col-span-1 on mobile = right half) */}
          <div className="col-span-1 text-left">
            <h3 className="text-lg font-bold mb-2">Our Services</h3>
            <div className="w-10 h-0.5 bg-[#FF4400] mb-5"></div>

            <ul className="space-y-3">

              <li>
                <Link to="/web-development" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Web Development
                </Link>
              </li>

              <li>
                <Link to="/app-development" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Mobile Apps
                </Link>
              </li>

              <li>
                <Link to="/ERP-solution" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; ERP solution
                </Link>
              </li>

              <li>
                <Link to="/CRM-solution" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; CRM / HRM
                </Link>
              </li>

              <li>
                <Link to="/digital-marketing" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; Digital Marketing
                </Link>
              </li>

              <li>
                <Link to="/support" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                  &gt; 24/7 Support
                </Link>
              </li>

            </ul>
          </div>

          {/* Column 4 - Contact (full width on mobile) */}
          <div className="col-span-2 sm:col-span-1 text-left">
            <h3 className="text-lg font-bold mb-2">Get In Touch</h3>
            <div className="w-10 h-0.5 bg-[#FF4400] mb-5"></div>

            <div className="space-y-4 text-gray-300 text-sm">
              <p>Phone: +91-95559 72693</p>
              <p>Mail: info@paragonprimeinfo.com</p>
              <p>Address: A-43, A Block, Sector 63, Noida, Uttar Pradesh 201301</p>
            </div>

            <Link to="/contact">
              <button className="mt-6 border border-[#FF4400] bg-[#ff4400a9] text-white px-6 py-3 rounded-full hover:bg-transparent hover:text-[#134E8E] transition w-full sm:w-auto">
                Stay Ahead of the Curve
              </button>
            </Link>

          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center pb-6">
          <div className="bg-[#111] text-gray-300 text-xs sm:text-sm px-6 sm:px-10 py-3 rounded-full text-center">
            Copyright © 2026 Paragon Prime Infotech. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}