export default function ParagonFooter() {
  return (
    <footer className="bg-[#2b2b2b] text-white px-6 sm:px-10 lg:px-12 pt-12 pb-0 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <img
                src="paragon-prime-logo1.png"
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
              {/* Your SVG icons remain exactly same */}
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M17 2h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>

              {/* X */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" fill="white" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="white" />
                </svg>
              </a>

              {/* Pinterest */}
              <a href="#" className="w-9 h-9 rounded-full border border-gray-500 flex items-center justify-center hover:border-[#134E8E] transition">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>

            <div className="mt-4 flex justify-center sm:justify-start items-baseline">
              <span className="text-3xl sm:text-4xl font-black text-[#FF4400]">Let's</span>
              <span className="text-3xl sm:text-4xl font-black text-[#134E8E] ml-2">Start...</span>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <div className="w-10 h-0.5 bg-[#FF4400] mb-5"></div>
            <ul className="space-y-3">
              {["> Services","> About Us","> Projects","> Clients","> Privacy Policy","> Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-2">Our Services</h3>
            <div className="w-10 h-0.5 bg-[#FF4400] mb-5"></div>
            <ul className="space-y-3">
              {["> Web Development","> Mobile Apps","> Website Design","> CRM/HRM","> Digital Marketing","> 24/7 Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 text-sm hover:text-[#134E8E] transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-2">Get In Touch</h3>
            <div className="w-10 h-0.5 bg-[#FF4400] mb-5"></div>

            <div className="space-y-4 text-gray-300 text-sm">
              <p>Phone: +91-95559 72693</p>
              <p>Mail: info@paragonprimeinfo.com</p>
              <p>Address: A-43, A Block, Sector 63, Noida, Uttar Pradesh 201301</p>
            </div>

            <button className="mt-6 border-1 border-[#FF4400] bg-[#ff4400a9] text-white  px-6 py-3 rounded-full hover:bg-transparent hover:text-[#134E8E] transition w-full sm:w-auto">
              Stay Ahead of the Curve
            </button>
          </div>
        </div>

        <div className="flex justify-center pb-6">
          <div className="bg-[#111] text-gray-300 text-xs sm:text-sm px-6 sm:px-10 py-3 rounded-full text-center">
            Copyright © 2026 Paragon Prime Infotech. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
