"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaMobileAlt, FaRocket, FaCogs, FaLayerGroup } from "react-icons/fa";

/* ─── Google Fonts injection ─────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;400&family=Bebas+Neue&display=swap');

    :root {
      --amber:   #FF6B1A;
      --amber2:  #FFAC5F;
      --ice:     #7EE8FF;
      --violet:  #A78BFF;
      --bg:      #060810;
      --surface: #0D1117;
      --border:  rgba(255,255,255,0.06);
    }

    .font-display { font-family: 'Bebas Neue', sans-serif; }
    .font-body    { font-family: 'Syne', sans-serif; }
    .font-mono    { font-family: 'JetBrains Mono', monospace; }

    .dot-grid {
      background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
      background-size: 28px 28px;
    }

    .scanlines::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.12) 2px,
        rgba(0,0,0,0.12) 4px
      );
      pointer-events: none;
      border-radius: inherit;
    }

    .ghost-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(120px, 18vw, 220px);
      line-height: 1;
      background: linear-gradient(180deg, rgba(167,139,255,0.12) 0%, transparent 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      user-select: none;
      pointer-events: none;
    }

    @keyframes ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .ticker-inner { animation: ticker 22s linear infinite; }

    @keyframes shimmer-app {
      from { background-position: -200% center; }
      to   { background-position: 200% center; }
    }
    .shimmer-text-app {
      background: linear-gradient(90deg, #FF6B1A, #A78BFF, #7EE8FF, #FF6B1A);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer-app 5s linear infinite;
    }

    @keyframes float-phone {
      0%, 100% { transform: translateY(0px) rotate(-2deg); }
      50%       { transform: translateY(-12px) rotate(2deg); }
    }
    .float-phone { animation: float-phone 5s ease-in-out infinite; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #060810; }
    ::-webkit-scrollbar-thumb { background: #FF6B1A; border-radius: 2px; }
  `}</style>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const sections = [
  {
    index: "01",
    title: "Custom Mobile\nApp Dev",
    icon: <FaMobileAlt />,
    tag: "ENGINEERING",
    description:
      "We design and develop powerful mobile applications tailored to your business vision. From intuitive UI to scalable backend systems, our apps are built for performance, security, and seamless user experiences.",
    points: [
      "iOS & Android Development",
      "React Native / Flutter Solutions",
      "Scalable Backend Architecture",
      "Secure API Integrations",
    ],
    image: "https://static.habilelabs.io/big_data_03_449e4dfa3c.jpg",
    accent: "#FF6B1A",
  },
  {
    index: "02",
    title: "UI/UX Focused\nApp Design",
    icon: <FaLayerGroup />,
    tag: "DESIGN SYSTEMS",
    description:
      "We craft visually stunning and user-centric app interfaces that drive engagement and retention. Every interaction is thoughtfully designed to ensure simplicity, clarity, and delight.",
    points: [
      "User-Centered Design",
      "Interactive Prototypes",
      "Smooth Animations",
      "Modern Design Systems",
    ],
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
    accent: "#A78BFF",
  },
  {
    index: "03",
    title: "Performance &\nOptimization",
    icon: <FaCogs />,
    tag: "SPEED & RELIABILITY",
    description:
      "Speed and reliability are critical for mobile success. We optimize application performance, reduce load times, and ensure smooth functionality across devices and operating systems.",
    points: [
      "App Performance Optimization",
      "Low Latency Architecture",
      "Battery Efficient Code",
      "Crash & Bug Monitoring",
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    accent: "#7EE8FF",
  },
  {
    index: "04",
    title: "Launch, Deploy\n& Growth",
    icon: <FaRocket />,
    tag: "DEPLOYMENT",
    description:
      "From app store submission to post-launch scaling, we help you launch confidently. Our growth strategy ensures continuous updates, analytics tracking, and long-term success.",
    points: [
      "App Store & Play Store Deployment",
      "Analytics & User Insights",
      "Version Updates & Maintenance",
      "Continuous Feature Enhancement",
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    accent: "#FFAC5F",
  },
];

const stats = [
  { value: "200+", label: "Apps Shipped" },
  { value: "4.9★", label: "Avg Store Rating" },
  { value: "60ms", label: "Avg Response Time" },
  { value: "99.9%", label: "Uptime SLA" },
];

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TickerBar = () => (
  <div className="relative overflow-hidden py-3 border-y" style={{ borderColor: "var(--border)", background: "rgba(167,139,255,0.04)" }}>
    <div className="ticker-inner flex whitespace-nowrap" style={{ width: "max-content" }}>
      {[...Array(6)].map((_, i) => (
        <span key={i} className="font-mono text-xs tracking-widest mx-8" style={{ color: "var(--violet)" }}>
          APP DEVELOPMENT &nbsp;◆&nbsp; IOS & ANDROID &nbsp;◆&nbsp; REACT NATIVE &nbsp;◆&nbsp; UI/UX DESIGN &nbsp;◆&nbsp; PERFORMANCE &nbsp;◆&nbsp; APP STORE LAUNCH &nbsp;◆&nbsp;
        </span>
      ))}
    </div>
  </div>
);

/* ─── Stats Bar ──────────────────────────────────────────────────────────── */
const StatsBar = () => (
  <div
    className="relative z-10 grid grid-cols-2 lg:grid-cols-4 dot-grid"
    style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
  >
    {stats.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="flex flex-col items-center justify-center py-10 px-6 font-body"
        style={{ borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none" }}
      >
        <span className="font-display text-4xl lg:text-5xl mb-1" style={{ color: "var(--violet)" }}>
          {s.value}
        </span>
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
          {s.label}
        </span>
      </motion.div>
    ))}
  </div>
);

/* ─── Service Card ───────────────────────────────────────────────────────── */
const ServiceCard = ({ section, index }) => {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="relative py-20 lg:py-28 px-6 lg:px-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Ghost number */}
      <div
        className={`ghost-num absolute top-4 select-none pointer-events-none ${isEven ? "right-4 lg:right-16" : "left-4 lg:left-16"}`}
        aria-hidden
      >
        {section.index}
      </div>

      <div className={`relative z-10 flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>

        {/* ── Image Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-[52%] relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Corner brackets */}
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, ci) => (
            <div
              key={ci}
              className={`absolute w-6 h-6 z-20 ${pos}`}
              style={{
                borderTop:    ci < 2  ? `2px solid ${section.accent}` : "none",
                borderBottom: ci >= 2 ? `2px solid ${section.accent}` : "none",
                borderLeft:   ci % 2 === 0 ? `2px solid ${section.accent}` : "none",
                borderRight:  ci % 2 !== 0 ? `2px solid ${section.accent}` : "none",
                transition: "all 0.35s",
                opacity: hovered ? 1 : 0.4,
                transform: hovered
                  ? ci === 0 ? "translate(-4px,-4px)" : ci === 1 ? "translate(4px,-4px)" : ci === 2 ? "translate(-4px,4px)" : "translate(4px,4px)"
                  : "translate(0,0)",
              }}
            />
          ))}

          {/* Tag pill */}
          <div
            className="absolute -top-4 z-20 font-mono text-xs px-4 py-1 rounded-full tracking-widest"
            style={{
              left: isEven ? "1rem" : "auto",
              right: isEven ? "auto" : "1rem",
              background: `${section.accent}18`,
              border: `1px solid ${section.accent}55`,
              color: section.accent,
            }}
          >
            {section.tag}
          </div>

          <div
            className="relative overflow-hidden rounded-2xl scanlines"
            style={{ boxShadow: `0 0 60px ${section.accent}22` }}
          >
            <motion.img
              src={`${section.image}?auto=format&fit=crop&w=1200&q=80`}
              alt={section.title}
              className="w-full object-cover"
              style={{
                height: "420px",
                filter: hovered ? "brightness(0.9) saturate(1.1)" : "brightness(0.75) saturate(0.85)",
                transition: "filter 0.4s",
              }}
            />
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background: `linear-gradient(135deg, ${section.accent}18 0%, transparent 60%)`,
                opacity: hovered ? 1 : 0,
              }}
            />
          </div>

          {/* Index badge */}
          <div
            className="absolute -bottom-5 font-display text-7xl leading-none select-none"
            style={{
              right: isEven ? "-1rem" : "auto",
              left: isEven ? "auto" : "-1rem",
              color: section.accent,
              opacity: 0.18,
            }}
          >
            {section.index}
          </div>
        </motion.div>

        {/* ── Text Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:w-[48%] font-body"
        >
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 text-xl"
            style={{ background: `${section.accent}15`, color: section.accent, border: `1px solid ${section.accent}30` }}
          >
            {section.icon}
          </div>

          {/* Title */}
          <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none mb-6 text-white whitespace-pre-line">
            {section.title}
          </h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-px mb-6 origin-left"
            style={{ background: `linear-gradient(90deg, ${section.accent}, transparent)` }}
          />

          <p className="text-sm lg:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            {section.description}
          </p>

          {/* Points */}
          <ul className="space-y-0">
            {section.points.map((point, pi) => (
              <motion.li
                key={pi}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + pi * 0.08 }}
                className="flex items-center gap-4 py-3 group"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                  style={{ background: section.accent }}
                />
                <span
                  className="font-mono text-xs tracking-wide transition-colors duration-300 group-hover:text-white"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {point}
                </span>
                <span
                  className="ml-auto font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: section.accent }}
                >
                  →
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </motion.section>
  );
};

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function AppDevelopment() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="font-body overflow-x-hidden" style={{ background: "var(--bg)", color: "#fff" }}>
      <FontLoader />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">

        {/* Parallax BG */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=2000&q=80"
            alt="App Development Hero"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.28) saturate(0.5)" }}
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060810]/60 via-transparent to-transparent" />

        {/* Ambient glows */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(167,139,255,0.13) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,107,26,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />

<<<<<<< HEAD
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-20" />
=======
            {/* SERVICES */}
            {/* SERVICES */}
            <div className="relative">

                {sections.map((section, index) => (
                    <section
                        key={index}
                        className="relative z-10 py-12 px-6 lg:px-20 border-t border-white/5"
                    >
                        <div
                            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <motion.div
                                variants={imageVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="lg:w-1/2 relative"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl rounded-3xl" />

                                <img
                                    src={`${section.image}?auto=format&fit=crop&w=1200&q=80`}
                                    alt={section.title}
                                    className="relative rounded-3xl shadow-2xl border border-white/10"
                                />
                            </motion.div>

                            {/* Text */}
                            <motion.div
                                variants={textVariant}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="lg:w-1/2"
                            >
                                <div className="text-orange-400 text-3xl mb-4">
                                    {section.icon}
                                </div>

                                <h2 className="text-4xl font-bold mb-6">
                                    {section.title}
                                </h2>

                                <p className="text-gray-400 mb-8 leading-relaxed">
                                    {section.description}
                                </p>

                                <ul className="space-y-3">
                                    {section.points.map((point, i) => (
                                        <li
                                            key={i}
                                            className="text-gray-300 border-b border-white/10 pb-2"
                                        >
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </section>
                ))}

            </div>
            {/* CTA */}
            <section className="relative py-16 md:py-20 px-6 lg:px-20 overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
                        alt="CTA Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
                </div>

                {/* Glow Layers */}
                <div className="absolute top-10 left-1/3 w-[350px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-yellow-500/10 blur-[110px] rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative text-center max-w-3xl mx-auto z-10"
                >

                    <p className="text-orange-400 uppercase tracking-[4px] text-xs md:text-sm mb-4">
                        Let’s Build The Future
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Ready to Create a{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            High-Impact Digital Experience?
                        </span>
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
                        We design and engineer powerful websites that not only look stunning
                        but drive measurable growth and long-term business success.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 text-base font-semibold rounded-full 
                       bg-gradient-to-r from-orange-500 to-yellow-500 
                       text-black shadow-[0_0_30px_rgba(255,165,0,0.4)]
                       transition-all duration-300"
                    >
                        Start Your Project
                    </motion.button>

                </motion.div>
            </section>
>>>>>>> 51e3753105b9b351e4e05c2b5b1d5d3a1487f596

        {/* Floating phone icon decoration */}
        <div
          className="float-phone absolute right-[8%] top-[20%] text-[120px] lg:text-[160px] select-none pointer-events-none hidden lg:block"
          style={{ color: "rgba(167,139,255,0.06)", filter: "blur(1px)" }}
          aria-hidden
        >
          📱
        </div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 px-6 lg:px-20 pb-20 lg:pb-28"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: "var(--violet)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--violet)" }}>
              Digital Forge Studio
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(56px,10vw,140px)] leading-none tracking-tight text-white"
            >
              APP
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="font-display text-[clamp(56px,10vw,140px)] leading-none tracking-tight shimmer-text-app"
            >
              DEVELOPMENT
            </motion.h1>
          </div>

          {/* Sub-row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-12"
          >
            <p className="max-w-md text-sm lg:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              We build next-generation mobile applications that combine
              cutting-edge technology with exceptional user experiences
              to accelerate digital growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 group flex items-center gap-3 px-7 py-3.5 rounded-full font-body font-semibold text-sm text-black transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #A78BFF, #7EE8FF)",
                boxShadow: "0 0 40px rgba(167,139,255,0.3)",
              }}
            >
              Start Your Project
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.25)", writingMode: "vertical-rl" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, var(--violet), transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────────────────────── */}
      <TickerBar />

      {/* ── STATS ──────────────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── SERVICES ───────────────────────────────────────────────────────── */}
      <div className="relative" style={{ background: "var(--bg)" }}>
        <div className="absolute inset-0 dot-grid opacity-[0.04] pointer-events-none" />
        {sections.map((section, i) => (
          <ServiceCard key={i} section={section} index={i} />
        ))}
      </div>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-28 lg:py-40 px-6 lg:px-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* BG Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
            alt="CTA"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.12) saturate(0.3)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,8,16,0.97) 0%, rgba(6,8,16,0.85) 100%)" }} />
        </div>

        {/* Ambient orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(167,139,255,0.07) 0%, transparent 65%)", filter: "blur(20px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,107,26,0.05) 0%, transparent 70%)", filter: "blur(30px)" }}
        />

        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-8 h-px" style={{ background: "var(--violet)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--violet)" }}>
              Let's Build Together
            </span>
            <span className="w-8 h-px" style={{ background: "var(--violet)" }} />
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden mb-4 text-center">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(44px,8vw,110px)] leading-none tracking-tight text-white"
            >
              READY TO LAUNCH
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-10 text-center">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
              className="font-display text-[clamp(44px,8vw,110px)] leading-none tracking-tight shimmer-text-app"
            >
              YOUR APP?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center text-sm lg:text-base leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            We design and engineer powerful mobile apps that not only look stunning
            but drive measurable growth and long-term business success.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-10 py-4 rounded-full font-body font-bold text-sm text-black transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #A78BFF, #7EE8FF)",
                boxShadow: "0 0 50px rgba(167,139,255,0.35)",
              }}
            >
              Start Your Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full font-body font-semibold text-sm transition-all duration-300"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.7)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              View Our Work
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}