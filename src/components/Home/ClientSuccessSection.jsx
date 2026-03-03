import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Darren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 5,
    text: "I began my startup without any team. I soon realised that I need to invest in a technically sound team that can help me because I don't come from a technical background. Jamtech helped me build my entire product.",
  },
  {
    id: 2,
    name: "Peter",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    stars: 5,
    text: "We were having a lot of technical issues with our website. We didn't know where to turn to. Thanks to Paragon Prime, we have now successfully resolved all the issues.",
  },
  {
    id: 3,
    name: "Sarah",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    text: "Paragon prime transformed our entire digital infrastructure. Their team is incredibly knowledgeable and responsive.",
  },
  {
    id: 4,
    name: "Michael",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    stars: 5,
    text: "Working with Paragon Prime has been an absolute pleasure.",
  },
];

export default function ClientSuccessSection() {
  const [page, setPage] = useState(0);
  const cardA = testimonials[page % 4];
  const cardB = testimonials[(page + 1) % 4];

  return (
    <>
      <section
        className="w-full py-14 px-6 sm:px-10 lg:px-16"
        style={{
          background: "#000000",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-30 items-start w-full">

          {/* LEFT: Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 lg:w-64 xl:w-72 flex-shrink-0"
          >
            <h2
              className="font-black leading-tight"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.6rem)", color: "#ffffff" }}
            >
              See how we've helped our clients succeed...
            </h2>

            <p className="font-bold text-sm sm:text-[15px]" style={{ color: "#fa6901" }}>
              More than 1500+ agencies using Paragon Prime Infotech
            </p>

            {/* Arrows */}
            <div className="flex gap-3 mt-2">
              <button
                onClick={() => setPage((p) => (p - 2 + 4) % 4)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                style={{ background: "white", border: "1.5px solid #cbd5e1" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#555" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                onClick={() => setPage((p) => (p + 2) % 4)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                style={{ background: "#023A73" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* CENTER: Cards */}
          <div className="flex flex-col sm:flex-row gap-10 flex-1 min-w-0 justify-center">

            {[cardA, cardB].map((t, index) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex flex-col bg-white rounded-2xl w-full sm:w-[340px] transition-all duration-300"
                style={{
                  border: "1px solid #e2e8f0",
                  boxShadow: `
          0 20px 40px rgba(2, 58, 115, 0.10),
          0 8px 20px rgba(0, 0, 0, 0.06)
        `,
                }}
              >
                {/* Quote bubble */}
                <div
                  className="absolute -top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "#023A73", zIndex: 10 }}
                >
                  <svg viewBox="0 0 20 16" className="w-4 h-3.5" fill="white">
                    <path d="M0 16V9.6C0 4.267 2.667 1.067 8 0l1.067 1.6C6.578 2.489 5.156 4.356 4.8 7.2H8V16H0z" />
                  </svg>
                </div>

                {/* Review */}
                <div
                  className="thin-scroll flex-1 overflow-y-auto px-5 pt-5 pb-3"
                  style={{ maxHeight: 185 }}
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" className="w-5 h-5" fill="#f5a623">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.95 2.678c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    className="text-sm leading-relaxed italic"
                    style={{ color: "#374151" }}
                  >
                    {t.text}
                  </p>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "linear-gradient(to right, transparent, #023A73, transparent)",
                    margin: "0 20px",
                  }}
                />

                <div className="flex items-center gap-3 px-4 py-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    style={{
                      border: "2px solid #023A73",
                      boxShadow: "0 4px 10px rgba(2, 58, 115, 0.25)",
                    }}
                  />
                  <span
                    className="font-semibold text-sm tracking-wide"
                    style={{ color: "#0b1120" }}
                  >
                    {t.name}
                  </span>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}