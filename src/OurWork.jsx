import { useState, useEffect, useRef } from "react";

// ─── Data Configuration ───────────────────────────────────────────────────────
const STATS = [
  { value: 100, suffix: "%", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Website Designs" },
  { value: 500, suffix: "+", label: "Mobile Apps" },
  { value: 2500, suffix: "+", label: "Digital Campaigns" },
];

// ─── Animated Counter Hook ────────────────────────────────────────────────────
function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

// ─── Single Stat Card ─────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, animate }) {
  const count = useCountUp(value, 1800, animate);

  return (
    <div className="flex flex-col items-center md:items-start gap-2 px-6 py-5">
      <span
        className="text-4xl sm:text-5xl font-extrabold leading-none tracking-wide"
        style={{ color: "#e8500a" }}
      >
        {count}
        {suffix}
      </span>

      <span className="text-sm sm:text-base text-gray-300 font-medium uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function OurWork() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[420px] flex items-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col lg:flex-row items-start lg:items-center gap-14">

        {/* Left Content */}
        <div
          className="flex-1 max-w-2xl"
          style={{
            animation: visible ? "fadeSlideUp 0.7s ease both" : "none",
          }}
        >
          <p
            className="text-gray-400 text-base sm:text-lg mb-4 font-light tracking-wide"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Driving Digital Success
          </p>

          <h1
            className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white leading-[1.2] tracking-wide mb-8"
            style={{
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Innovative <span style={{ color: "#023A73" }}>Web</span> & Digital
            Solutions
          </h1>

          <p
            className="text-gray-400 text-base leading-8 max-w-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <strong className="text-white font-semibold">
              Paragon Prime
            </strong>{" "}
            empowers businesses with cutting-edge web development, mobile
            applications, and result-driven digital strategies. Our team
            focuses on building scalable, high-performance solutions that
            enhance your online presence and deliver measurable growth.
          </p>
        </div>

        {/* Stats Section */}
        <div
          className="w-full lg:w-auto lg:ml-auto"
          style={{
            animation: visible ? "fadeSlideUp 0.7s 0.2s ease both" : "none",
          }}
        >
          <div
            className="grid grid-cols-2 divide-x divide-y divide-gray-800 border border-gray-800 rounded-sm overflow-hidden"
            style={{ backgroundColor: "rgba(255,255,255,0.02)" }}
          >
            {STATS.map((stat, i) => (
              <StatCard key={i} {...stat} animate={visible} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}