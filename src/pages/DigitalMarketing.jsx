"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaBullhorn, FaSearch, FaChartLine, FaRocket } from "react-icons/fa";

/* ─── Fonts & CSS Variables ──────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;400&family=Bebas+Neue&display=swap');

    :root {
      --amber:   #FF6B1A;
      --amber2:  #FFAC5F;
      --ice:     #7EE8FF;
      --emerald: #34EFA0;
      --rose:    #FF5E8A;
      --bg:      #060810;
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
        0deg, transparent, transparent 2px,
        rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px
      );
      pointer-events: none;
      border-radius: inherit;
    }

    .ghost-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(120px, 18vw, 220px);
      line-height: 1;
      background: linear-gradient(180deg, rgba(52,239,160,0.11) 0%, transparent 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      user-select: none;
      pointer-events: none;
    }

    @keyframes ticker-dm {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .ticker-dm { animation: ticker-dm 22s linear infinite; }

    @keyframes shimmer-dm {
      from { background-position: -200% center; }
      to   { background-position: 200% center; }
    }
    .shimmer-dm {
      background: linear-gradient(90deg, #34EFA0, #7EE8FF, #FF5E8A, #34EFA0);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer-dm 5s linear infinite;
    }

    /* Pulse ring on hero stat */
    @keyframes pulse-ring {
      0%   { transform: scale(1);   opacity: 0.4; }
      100% { transform: scale(1.8); opacity: 0; }
    }
    .pulse-ring::before {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 1px solid var(--emerald);
      animation: pulse-ring 2s ease-out infinite;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #060810; }
    ::-webkit-scrollbar-thumb { background: #34EFA0; border-radius: 2px; }
  `}</style>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const sections = [
  {
    index: "01",
    title: "Strategic\nDigital Marketing",
    icon: <FaBullhorn />,
    tag: "STRATEGY",
    description:
      "We craft data-driven digital marketing strategies that amplify your brand presence and generate measurable growth. Our approach combines creativity, analytics, and technology to deliver impactful campaigns.",
    points: [
      "Multi-Channel Marketing Strategy",
      "Brand Positioning & Awareness",
      "Target Audience Research",
      "Campaign Planning & Execution",
    ],
    image: "https://highzeal.com/images/posts/digital-marketing.jpg",
    accent: "#34EFA0",
  },
  {
    index: "02",
    title: "SEO &\nSearch Visibility",
    icon: <FaSearch />,
    tag: "SEARCH ENGINE",
    description:
      "Visibility is everything. We optimize your digital presence to rank higher in search engines, drive organic traffic, and improve online authority through advanced SEO strategies.",
    points: [
      "Technical SEO Optimization",
      "Keyword Research & Strategy",
      "On-Page & Off-Page SEO",
      "Content Optimization",
    ],
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    accent: "#7EE8FF",
  },
  {
    index: "03",
    title: "Performance\nMarketing",
    icon: <FaChartLine />,
    tag: "PAID GROWTH",
    description:
      "We run high-converting paid campaigns across platforms to maximize ROI. Our performance marketing strategies are focused on measurable results and continuous optimization.",
    points: [
      "Google Ads & PPC Campaigns",
      "Social Media Advertising",
      "Conversion Rate Optimization",
      "Analytics & Performance Tracking",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    accent: "#FF5E8A",
  },
  {
    index: "04",
    title: "Growth &\nBrand Scaling",
    icon: <FaRocket />,
    tag: "SCALE",
    description:
      "From campaign launch to long-term scaling, we help your brand grow sustainably. Our data-backed strategies ensure consistent engagement, leads, and revenue growth.",
    points: [
      "Marketing Automation",
      "Lead Generation Funnels",
      "Email Marketing Campaigns",
      "Continuous Strategy Optimization",
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    accent: "#FFAC5F",
  },
];

const stats = [
  { value: "3.8×", label: "Avg. ROI Delivered" },
  { value: "500M+", label: "Ad Impressions Run" },
  { value: "120+", label: "Brands Grown" },
  { value: "92%", label: "Retention Rate" },
];

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TickerBar = () => (
  <div className="relative overflow-hidden py-3 border-y" style={{ borderColor: "var(--border)", background: "rgba(52,239,160,0.04)" }}>
    <div className="ticker-dm flex whitespace-nowrap" style={{ width: "max-content" }}>
      {[...Array(6)].map((_, i) => (
        <span key={i} className="font-mono text-xs tracking-widest mx-8" style={{ color: "var(--emerald)" }}>
          DIGITAL MARKETING &nbsp;◆&nbsp; SEO & SEM &nbsp;◆&nbsp; PAID CAMPAIGNS &nbsp;◆&nbsp; BRAND STRATEGY &nbsp;◆&nbsp; LEAD GENERATION &nbsp;◆&nbsp; PERFORMANCE ADS &nbsp;◆&nbsp;
        </span>
      ))}
    </div>
  </div>
);

/* ─── Stats Bar ──────────────────────────────────────────────────────────── */
const StatsBar = () => (
  <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 dot-grid"
    style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
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
        <span className="font-display text-4xl lg:text-5xl mb-1" style={{ color: "var(--emerald)" }}>
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
      <div className={`ghost-num absolute top-4 select-none pointer-events-none ${isEven ? "right-4 lg:right-16" : "left-4 lg:left-16"}`} aria-hidden>
        {section.index}
      </div>

      <div className={`relative z-10 flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>

        {/* Image */}
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
            <div key={ci} className={`absolute w-6 h-6 z-20 ${pos}`} style={{
              borderTop:    ci < 2  ? `2px solid ${section.accent}` : "none",
              borderBottom: ci >= 2 ? `2px solid ${section.accent}` : "none",
              borderLeft:   ci % 2 === 0 ? `2px solid ${section.accent}` : "none",
              borderRight:  ci % 2 !== 0 ? `2px solid ${section.accent}` : "none",
              transition: "all 0.35s",
              opacity: hovered ? 1 : 0.4,
              transform: hovered
                ? ci === 0 ? "translate(-4px,-4px)" : ci === 1 ? "translate(4px,-4px)" : ci === 2 ? "translate(-4px,4px)" : "translate(4px,4px)"
                : "translate(0,0)",
            }} />
          ))}

          {/* Tag pill */}
          <div className="absolute -top-4 z-20 font-mono text-xs px-4 py-1 rounded-full tracking-widest"
            style={{
              left: isEven ? "1rem" : "auto", right: isEven ? "auto" : "1rem",
              background: `${section.accent}18`, border: `1px solid ${section.accent}55`, color: section.accent,
            }}>
            {section.tag}
          </div>

          <div className="relative overflow-hidden rounded-2xl scanlines" style={{ boxShadow: `0 0 60px ${section.accent}22` }}>
            <motion.img
              src={`${section.image}?auto=format&fit=crop&w=1200&q=80`}
              alt={section.title}
              className="w-full object-cover"
              style={{ height: "420px", filter: hovered ? "brightness(0.9) saturate(1.1)" : "brightness(0.72) saturate(0.8)", transition: "filter 0.4s" }}
            />
            <div className="absolute inset-0 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${section.accent}18 0%, transparent 60%)`, opacity: hovered ? 1 : 0 }} />
          </div>

          <div className="absolute -bottom-5 font-display text-7xl leading-none select-none"
            style={{ right: isEven ? "-1rem" : "auto", left: isEven ? "auto" : "-1rem", color: section.accent, opacity: 0.18 }}>
            {section.index}
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:w-[48%] font-body"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 text-xl"
            style={{ background: `${section.accent}15`, color: section.accent, border: `1px solid ${section.accent}30` }}>
            {section.icon}
          </div>

          <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none mb-6 text-white whitespace-pre-line">
            {section.title}
          </h2>

          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-px mb-6 origin-left"
            style={{ background: `linear-gradient(90deg, ${section.accent}, transparent)` }}
          />

          <p className="text-sm lg:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            {section.description}
          </p>

          <ul className="space-y-0">
            {section.points.map((point, pi) => (
              <motion.li key={pi}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + pi * 0.08 }}
                className="flex items-center gap-4 py-3 group"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
                  style={{ background: section.accent }} />
                <span className="font-mono text-xs tracking-wide transition-colors duration-300 group-hover:text-white"
                  style={{ color: "rgba(255,255,255,0.6)" }}>
                  {point}
                </span>
                <span className="ml-auto font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: section.accent }}>
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

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function DigitalMarketing() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="font-body overflow-x-hidden" style={{ background: "var(--bg)", color: "#fff" }}>
      <FontLoader />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">

        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2000&q=80"
            alt="Digital Marketing Hero"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.25) saturate(0.5)" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060810]/60 via-transparent to-transparent" />

        {/* Ambient glows — emerald + rose */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(52,239,160,0.10) 0%, transparent 70%)", filter: "blur(50px)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,94,138,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />

        <div className="absolute inset-0 dot-grid opacity-20" />

<<<<<<< HEAD
        {/* Decorative graph bars — subtle background art */}
        <div className="absolute bottom-0 right-0 flex items-end gap-2 pr-8 pb-8 pointer-events-none hidden lg:flex" aria-hidden>
          {[40, 65, 50, 80, 55, 95, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="w-6 rounded-t-sm origin-bottom"
              style={{ height: `${h}px`, background: `rgba(52,239,160,${0.04 + i * 0.02})`, border: "1px solid rgba(52,239,160,0.12)" }}
            />
          ))}
        </div>
=======
>>>>>>> 51e3753105b9b351e4e05c2b5b1d5d3a1487f596

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 px-6 lg:px-20 pb-20 lg:pb-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px" style={{ background: "var(--emerald)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--emerald)" }}>
              Digital Forge Studio
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }} animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(56px,10vw,140px)] leading-none tracking-tight text-white"
            >
              DIGITAL
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }} animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="font-display text-[clamp(56px,10vw,140px)] leading-none tracking-tight shimmer-dm"
            >
              MARKETING
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-12"
          >
            <p className="max-w-md text-sm lg:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              We accelerate brand growth through powerful digital strategies,
              targeted campaigns, and data-driven marketing solutions that
              deliver measurable results.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 group flex items-center gap-3 px-7 py-3.5 rounded-full font-body font-semibold text-sm text-black transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #34EFA0, #7EE8FF)", boxShadow: "0 0 40px rgba(52,239,160,0.3)" }}
            >
              Start Your Campaign
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.25)", writingMode: "vertical-rl" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, var(--emerald), transparent)" }}
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
      <section className="relative overflow-hidden py-28 lg:py-40 px-6 lg:px-20" style={{ borderTop: "1px solid var(--border)" }}>

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            alt="CTA"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.12) saturate(0.3)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,8,16,0.97) 0%, rgba(6,8,16,0.85) 100%)" }} />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(52,239,160,0.06) 0%, transparent 65%)", filter: "blur(20px)" }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,94,138,0.05) 0%, transparent 70%)", filter: "blur(30px)" }} />

        <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-8 h-px" style={{ background: "var(--emerald)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--emerald)" }}>
              Let's Grow Together
            </span>
            <span className="w-8 h-px" style={{ background: "var(--emerald)" }} />
          </motion.div>

          <div className="overflow-hidden mb-4 text-center">
            <motion.h2
              initial={{ y: "100%" }} whileInView={{ y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(44px,8vw,110px)] leading-none tracking-tight text-white"
            >
              READY TO SCALE
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-10 text-center">
            <motion.h2
              initial={{ y: "100%" }} whileInView={{ y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
              className="font-display text-[clamp(44px,8vw,110px)] leading-none tracking-tight shimmer-dm"
            >
              YOUR BRAND?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center text-sm lg:text-base leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Partner with us to create powerful digital marketing strategies
            that increase visibility, engagement, and revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-3 px-10 py-4 rounded-full font-body font-bold text-sm text-black transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #34EFA0, #7EE8FF)", boxShadow: "0 0 50px rgba(52,239,160,0.35)" }}
            >
              Start Your Campaign
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full font-body font-semibold text-sm transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.03)" }}
            >
              View Our Work
            </motion.button>
          </motion.div>

        </div>
      </section>

    </div>
  );
}