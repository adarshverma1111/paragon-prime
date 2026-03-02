import React from "react";

export default function Contact() {
  return (
    <div
      className="flex flex-col lg:flex-row lg:min-h-screen"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* LEFT DESIGN SECTION (Hidden on Mobile) */}
      <div className="hidden lg:flex flex-1 bg-[#06121c] text-white items-center justify-center p-10">
        <div className="max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4">Paragon Prime</h2>
          <p className="text-gray-300">
            Empowering businesses with innovative technology solutions.
            We transform ideas into reality with cutting-edge development
            and digital excellence.
          </p>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="flex-1 px-6 sm:px-10 lg:px-14 xl:px-20 py-8 bg-[#0f172a] text-white">
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

          <form className="space-y-4">

            {/* First + Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email (Full Width) */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone + Address (Same Row) */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  type="tel"
                  placeholder="+1 555 000 0000"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Address</label>
                <input
                  type="text"
                  placeholder="Your city"
                  className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Leave us a message..."
                className="w-full px-3 py-2 rounded-md bg-[#1e293b] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-2 rounded-md font-medium"
            >
              Send Message
            </button>

          </form>

          <div className="text-center text-xs text-gray-400 mt-8">
            Empowering businesses with innovative technology solutions.
          </div>
        </div>
      </div>
    </div>
  );
}
