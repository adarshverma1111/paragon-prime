import React from "react";

export default function ContactHero() {
  return (
    <div
      className="w-full"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* HERO SECTION */}
      <section
        className="relative w-full py-24 px-6 sm:px-10 lg:px-20 text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#06121c]/80"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            We'd love to hear from you. Whether you have a question about
            services, pricing, or anything else, our team is ready to help.
          </p>

        </div>
      </section>
    </div>
  );
}