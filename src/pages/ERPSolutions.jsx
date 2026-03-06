"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaDatabase,
  FaChartLine,
  FaNetworkWired,
  FaShieldAlt,
  FaCubes,
  FaSyncAlt,
} from "react-icons/fa";

/* ─── Google Fonts injection ─────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;400&family=Bebas+Neue&display=swap');

    :root {
      --emerald:  #00D97E;
      --emerald2: #52FFBD;
      --gold:     #FFD166;
      --steel:    #7AB8FF;
      --crimson:  #FF5E7D;
      --bg:       #050A08;
      --surface:  #0A100D;
      --border:   rgba(255,255,255,0.06);
    }

    .font-display { font-family: 'Bebas Neue', sans-serif; }
    .font-body    { font-family: 'Syne', sans-serif; }
    .font-mono    { font-family: 'JetBrains Mono', monospace; }

    .grid-mesh {
      background-image:
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 48px 48px;
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

    .ghost-num-erp {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(120px, 18vw, 220px);
      line-height: 1;
      background: linear-gradient(180deg, rgba(0,217,126,0.10) 0%, transparent 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      user-select: none;
      pointer-events: none;
    }

    @keyframes erp-ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .erp-ticker-inner { animation: erp-ticker 24s linear infinite; }

    @keyframes shimmer-erp {
      from { background-position: -200% center; }
      to   { background-position: 200% center; }
    }
    .shimmer-text-erp {
      background: linear-gradient(90deg, #00D97E, #FFD166, #7AB8FF, #00D97E);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer-erp 5s linear infinite;
    }

    @keyframes float-cube {
      0%, 100% { transform: translateY(0px) rotate(8deg); }
      50%       { transform: translateY(-16px) rotate(-4deg); }
    }
    .float-cube { animation: float-cube 6s ease-in-out infinite; }

    @keyframes pulse-ring {
      0%   { transform: scale(1);   opacity: 0.4; }
      100% { transform: scale(1.6); opacity: 0; }
    }
    .pulse-ring {
      animation: pulse-ring 2.5s ease-out infinite;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #050A08; }
    ::-webkit-scrollbar-thumb { background: #00D97E; border-radius: 2px; }
  `}</style>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const sections = [
  {
    index: "01",
    title: "Core ERP\nModules",
    icon: <FaCubes />,
    tag: "FOUNDATION",
    description:
      "Build your enterprise on a unified platform. Our ERP core integrates Finance, HR, Supply Chain, and Procurement into a single source of truth — eliminating silos and giving leadership real-time visibility across every department.",
    points: [
      "Finance & Accounting Automation",
      "HR & Payroll Management",
      "Procurement & Inventory Control",
      "Multi-Entity & Multi-Currency Support",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    accent: "#00D97E",
  },
  {
    index: "02",
    title: "Business\nIntelligence",
    icon: <FaChartLine />,
    tag: "ANALYTICS",
    description:
      "Transform raw operational data into strategic decisions. Our BI layer delivers live dashboards, predictive forecasting, and drill-down analytics that surface actionable insights for every level of your organization.",
    points: [
      "Real-Time KPI Dashboards",
      "Predictive Revenue Forecasting",
      "Custom Report Builder",
      "AI-Powered Anomaly Detection",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    accent: "#FFD166",
  },
  {
    index: "03",
    title: "Seamless\nIntegrations",
    icon: <FaNetworkWired />,
    tag: "CONNECTIVITY",
    description:
      "Your ERP doesn't live in isolation. We architect robust API ecosystems that connect your ERP to CRMs, e-commerce platforms, logistics providers, payment gateways, and legacy systems — without friction.",
    points: [
      "REST & GraphQL API Gateway",
      "Pre-Built Connector Library",
      "Legacy System Migration",
      "Real-Time Event Streaming",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    accent: "#7AB8FF",
  },
  {
    index: "04",
    title: "Data Security\n& Compliance",
    icon: <FaShieldAlt />,
    tag: "GOVERNANCE",
    description:
      "Enterprise data demands enterprise-grade protection. We implement role-based access controls, end-to-end encryption, full audit trails, and compliance frameworks for GDPR, SOX, ISO 27001, and industry-specific regulations.",
    points: [
      "Role-Based Access Control (RBAC)",
      "End-to-End Data Encryption",
      "SOX / GDPR / ISO 27001 Compliance",
      "Immutable Audit Trails",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    accent: "#FF5E7D",
  },
  {
    index: "05",
    title: "Cloud & On-Prem\nDeployment",
    icon: <FaDatabase />,
    tag: "INFRASTRUCTURE",
    description:
      "Deploy your ERP the way your business demands — fully managed SaaS cloud, on-premise, or hybrid. We deliver containerized, scalable architectures built for zero downtime, disaster recovery, and global performance.",
    points: [
      "AWS / Azure / GCP Deployment",
      "On-Premise & Hybrid Architectures",
      "99.99% Uptime SLA",
      "Auto-Scaling & Disaster Recovery",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    accent: "#00D97E",
  },
  {
    index: "06",
    title: "Continuous\nOptimization",
    icon: <FaSyncAlt />,
    tag: "LIFECYCLE",
    description:
      "ERP is not a one-time project — it's an evolving asset. Our dedicated support teams provide proactive monitoring, version upgrades, performance tuning, and strategic roadmap planning to keep your system ahead of growth.",
    points: [
      "24/7 Proactive Monitoring",
      "Quarterly Performance Reviews",
      "Automated Version Upgrades",
      "Strategic Growth Roadmapping",
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    accent: "#FFD166",
  },
];

const stats = [
  { value: "150+", label: "ERP Deployments" },
  { value: "40%", label: "Avg. Cost Reduction" },
  { value: "3×",  label: "Faster Reporting" },
  { value: "99.99%", label: "Uptime SLA" },
];

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TickerBar = () => (
  <div
    className="relative overflow-hidden py-3 border-y"
    style={{ borderColor: "var(--border)", background: "rgba(0,217,126,0.04)" }}
  >
    <div className="erp-ticker-inner flex whitespace-nowrap" style={{ width: "max-content" }}>
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="font-mono text-xs tracking-widest mx-8"
          style={{ color: "var(--emerald)" }}
        >
          ERP SOLUTIONS &nbsp;◆&nbsp; FINANCE & HR &nbsp;◆&nbsp; SUPPLY CHAIN &nbsp;◆&nbsp; BUSINESS INTELLIGENCE &nbsp;◆&nbsp; CLOUD DEPLOYMENT &nbsp;◆&nbsp; ENTERPRISE SECURITY &nbsp;◆&nbsp;
        </span>
      ))}
    </div>
  </div>
);

/* ─── Stats Bar ──────────────────────────────────────────────────────────── */
const StatsBar = () => (
  <div
    className="relative z-10 grid grid-cols-2 lg:grid-cols-4 grid-mesh"
    style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
  >
    {stats.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="flex flex-col items-center justify-center py-10 px-6 font-body relative"
        style={{ borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none" }}
      >
        {/* Pulse dot */}
        <div className="relative flex items-center justify-center mb-3">
          <div
            className="pulse-ring absolute w-3 h-3 rounded-full"
            style={{ background: "var(--emerald)", opacity: 0.4 }}
          />
          <div className="w-2 h-2 rounded-full" style={{ background: "var(--emerald)" }} />
        </div>
        <span className="font-display text-4xl lg:text-5xl mb-1" style={{ color: "var(--emerald)" }}>
          {s.value}
        </span>
        <span
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
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
        className={`ghost-num-erp absolute top-4 select-none pointer-events-none ${
          isEven ? "right-4 lg:right-16" : "left-4 lg:left-16"
        }`}
        aria-hidden
      >
        {section.index}
      </div>

      <div
        className={`relative z-10 flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-center gap-12 lg:gap-20`}
      >
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
                  ? ci === 0 ? "translate(-4px,-4px)"
                  : ci === 1 ? "translate(4px,-4px)"
                  : ci === 2 ? "translate(-4px,4px)"
                  : "translate(4px,4px)"
                  : "translate(0,0)",
              }}
            />
          ))}

          {/* Tag pill */}
          <div
            className="absolute -top-4 z-20 font-mono text-xs px-4 py-1 rounded-full tracking-widest"
            style={{
              left:       isEven ? "1rem" : "auto",
              right:      isEven ? "auto" : "1rem",
              background: `${section.accent}18`,
              border:     `1px solid ${section.accent}55`,
              color:      section.accent,
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
                filter: hovered
                  ? "brightness(0.9) saturate(1.1)"
                  : "brightness(0.65) saturate(0.7)",
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
            {/* Grid overlay on image */}
            <div
              className="absolute inset-0 grid-mesh opacity-30 pointer-events-none"
              style={{ mixBlendMode: "overlay" }}
            />
          </div>

          {/* Index badge */}
          <div
            className="absolute -bottom-5 font-display text-7xl leading-none select-none"
            style={{
              right:   isEven ? "-1rem" : "auto",
              left:    isEven ? "auto"  : "-1rem",
              color:   section.accent,
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
            style={{
              background: `${section.accent}15`,
              color:      section.accent,
              border:     `1px solid ${section.accent}30`,
            }}
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

          <p
            className="text-sm lg:text-base leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
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
export default function ERPSolutions() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="font-body overflow-x-hidden" style={{ background: "var(--bg)", color: "#fff" }}>
      <FontLoader />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">

        {/* Parallax BG */}
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2000&q=80"
            alt="ERP Solutions Hero"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.22) saturate(0.4)" }}
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A08] via-[#050A08]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050A08]/70 via-transparent to-transparent" />

        {/* Ambient glows */}
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,217,126,0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,209,102,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Grid mesh */}
        <div className="absolute inset-0 grid-mesh opacity-20" />

        {/* Floating icon decoration */}
        <div
          className="float-cube absolute right-[8%] top-[18%] text-[110px] lg:text-[150px] select-none pointer-events-none hidden lg:block"
          style={{ color: "rgba(0,217,126,0.05)", filter: "blur(1px)" }}
          aria-hidden
        >
          ⬡
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
            <span className="w-8 h-px" style={{ background: "var(--emerald)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--emerald)" }}>
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
              ERP
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="font-display text-[clamp(56px,10vw,140px)] leading-none tracking-tight shimmer-text-erp"
            >
              SOLUTIONS
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
              We engineer unified enterprise platforms that streamline Finance,
              HR, Supply Chain, and Operations — giving your business the
              clarity and control to scale with confidence.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 group flex items-center gap-3 px-7 py-3.5 rounded-full font-body font-semibold text-sm text-black transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00D97E, #FFD166)",
                boxShadow: "0 0 40px rgba(0,217,126,0.3)",
              }}
            >
              Book a Demo
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
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "rgba(255,255,255,0.25)", writingMode: "vertical-rl" }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, var(--emerald), transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <TickerBar />

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <div className="relative" style={{ background: "var(--bg)" }}>
        <div className="absolute inset-0 grid-mesh opacity-[0.04] pointer-events-none" />
        {sections.map((section, i) => (
          <ServiceCard key={i} section={section} index={i} />
        ))}
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden py-28 lg:py-40 px-6 lg:px-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {/* BG Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            alt="ERP CTA"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.1) saturate(0.3)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(5,10,8,0.97) 0%, rgba(5,10,8,0.85) 100%)" }}
          />
        </div>

        {/* Ambient orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,217,126,0.07) 0%, transparent 65%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,209,102,0.05) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Grid mesh */}
        <div className="absolute inset-0 grid-mesh opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-8 h-px" style={{ background: "var(--emerald)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--emerald)" }}>
              Transform Your Enterprise
            </span>
            <span className="w-8 h-px" style={{ background: "var(--emerald)" }} />
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
              READY TO UNIFY
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-10 text-center">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
              className="font-display text-[clamp(44px,8vw,110px)] leading-none tracking-tight shimmer-text-erp"
            >
              YOUR OPERATIONS?
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
            We implement enterprise-grade ERP systems that consolidate your
            entire operation into one intelligent platform — driving
            efficiency, reducing costs, and accelerating growth.
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
                background: "linear-gradient(135deg, #00D97E, #FFD166)",
                boxShadow: "0 0 50px rgba(0,217,126,0.35)",
              }}
            >
              Book a Free Demo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-full font-body font-semibold text-sm transition-all duration-300"
              style={{
                border:     "1px solid rgba(255,255,255,0.15)",
                color:      "rgba(255,255,255,0.7)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}