import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    tag: "CRM SOFTWARE",
    title: "CUSTOMER RELATIONSHIP MANAGEMENT",
    description: "Manage leads, customers, and sales efficiently with our smart CRM system.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80",
  },
  {
    tag: "HRM SOFTWARE",
    title: "HUMAN RESOURCE MANAGEMENT",
    description: "Streamline employee records, payroll, and performance tracking.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80",
  },
  {
    tag: "HMS SOFTWARE",
    title: "HOSPITAL MANAGEMENT SYSTEM",
    description: "Digitally manage appointments, billing, and patient records.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
  },
  {
    tag: "SMS SOFTWARE",
    title: "SCHOOL MANAGEMENT SYSTEM",
    description: "Simplify administration, attendance, and academic records.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80",
  },
  {
    tag: "ERP SOLUTIONS",
    title: "ERP BUSINESS SOLUTIONS",
    description: "Integrate all your business operations into one powerful system.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
  },
];

export default function SoftwareSolutions() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(interval);
  }, [total]);

  return (
    <section
      className="relative py-16 px-4 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Software <span className="text-orange-500">Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive software solutions designed to streamline your business operations and drive growth
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: `-${current * (100 / (window.innerWidth >= 768 ? 3 : 1))}%`,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            {slides.concat(slides.slice(0, 3)).map((card, index) => (
              <motion.div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-3 flex justify-center"
              >
                <div className="w-full max-w-[300px] rounded-xl overflow-hidden border border-gray-800 bg-gray-900/90 backdrop-blur shadow-md hover:shadow-xl transition">

                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-52 object-cover"
                    />

                    <div className="absolute bottom-0 left-0">
                      <div
                        className="bg-orange-500 text-white text-xs font-bold px-4 py-2 tracking-wider"
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 92% 100%, 0 100%)",
                        }}
                      >
                        {card.tag}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-white font-bold text-sm mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-3 bg-orange-500"
                  : "w-3 h-3 bg-gray-600"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}