"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaUserFriends,
  FaBullhorn,
  FaHandshake,
  FaChartPie,
  FaRobot,
  FaLifeRing,
} from "react-icons/fa";

/* ─── Google Fonts injection ─────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;400&family=Bebas+Neue&display=swap');

    :root {
      --cyan:     #00C8FF;
      --cyan2:    #7FDFFF;
      --rose:     #FF4D8D;
      --amber:    #FFAA00;
      --lime:     #A3FF5E;
      --bg:       #04080F;
      --surface:  #080E1A;
      --border:   rgba(255,255,255,0.06);
    }

    .font-display { font-family: 'Bebas Neue', sans-serif; }
    .font-body    { font-family: 'Syne', sans-serif; }
    .font-mono    { font-family: 'JetBrains Mono', monospace; }

    .circuit-grid {
      background-image:
        radial-gradient(circle, rgba(0,200,255,0.06) 1px, transparent 1px),
        linear-gradient(rgba(0,200,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,200,255,0.025) 1px, transparent 1px);
      background-size: 32px 32px, 64px 64px, 64px 64px;
    }

    .scanlines::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.10) 2px,
        rgba(0,0,0,0.10) 4px
      );
      pointer-events: none;
      border-radius: inherit;
    }

    .ghost-num-crm {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(120px, 18vw, 220px);
      line-height: 1;
      background: linear-gradient(180deg, rgba(0,200,255,0.09) 0%, transparent 70%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      user-select: none;
      pointer-events: none;
    }

    @keyframes crm-ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .crm-ticker-inner { animation: crm-ticker 26s linear infinite; }

    @keyframes shimmer-crm {
      from { background-position: -200% center; }
      to   { background-position: 200% center; }
    }
    .shimmer-text-crm {
      background: linear-gradient(90deg, #00C8FF, #FF4D8D, #FFAA00, #00C8FF);
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: shimmer-crm 5s linear infinite;
    }

    @keyframes float-signal {
      0%, 100% { transform: translateY(0px) rotate(-3deg) scale(1); }
      50%       { transform: translateY(-14px) rotate(3deg) scale(1.03); }
    }
    .float-signal { animation: float-signal 5.5s ease-in-out infinite; }

    @keyframes orbit {
      from { transform: rotate(0deg) translateX(28px) rotate(0deg); }
      to   { transform: rotate(360deg) translateX(28px) rotate(-360deg); }
    }
    .orbit-dot {
      animation: orbit 3s linear infinite;
    }

    @keyframes blink-caret {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0; }
    }
    .caret { animation: blink-caret 1s step-end infinite; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #04080F; }
    ::-webkit-scrollbar-thumb { background: #00C8FF; border-radius: 2px; }
  `}</style>
);

/* ─── Data ───────────────────────────────────────────────────────────────── */
const sections = [
  {
    index: "01",
    title: "Contact &\nPipeline Mgmt",
    icon: <FaUserFriends />,
    tag: "RELATIONSHIPS",
    description:
      "Your customer relationships are your most valuable asset. Our CRM gives every rep a 360° view of contacts, accounts, and deal history — with smart pipeline stages, activity tracking, and automated follow-ups that keep opportunities moving forward.",
    points: [
      "Unified Contact & Account Profiles",
      "Drag-and-Drop Pipeline Builder",
      "Activity Timeline & Notes",
      "Smart Follow-Up Reminders",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    accent: "#00C8FF",
  },
  {
    index: "02",
    title: "Marketing\nAutomation",
    icon: <FaBullhorn />,
    tag: "CAMPAIGNS",
    description:
      "Launch multi-channel campaigns that convert. Segment audiences with precision, orchestrate automated email and SMS journeys, run A/B tests, and track every touchpoint from first click to closed deal — all inside one platform.",
    points: [
      "Multi-Channel Campaign Orchestration",
      "Behavioral Audience Segmentation",
      "A/B Testing & Conversion Tracking",
      "Email, SMS & Push Automation",
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    accent: "#FF4D8D",
  },
  {
    index: "03",
    title: "Sales Force\nEnablement",
    icon: <FaHandshake />,
    tag: "REVENUE",
    description:
      "Equip your sales team to close faster. Our CRM surfaces the right leads at the right time with AI-driven scoring, provides playbooks and scripts inside deal views, and gives managers live coaching dashboards to drive team performance.",
    points: [
      "AI Lead Scoring & Prioritization",
      "In-App Sales Playbooks",
      "Quote & Proposal Automation",
      "Manager Coaching Dashboards",
    ],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    accent: "#FFAA00",
  },
  {
    index: "04",
    title: "Revenue\nAnalytics",
    icon: <FaChartPie />,
    tag: "INSIGHTS",
    description:
      "Stop guessing — start knowing. Real-time revenue dashboards, funnel conversion reports, win/loss analysis, and AI-generated forecasts give leadership the data clarity needed to allocate resources and hit quota with confidence.",
    points: [
      "Live Revenue & Funnel Dashboards",
      "Win / Loss Attribution Reports",
      "AI-Powered Sales Forecasting",
      "Custom Report Studio",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    accent: "#A3FF5E",
  },
  {
    index: "05",
    title: "AI-Powered\nCRM Engine",
    icon: <FaRobot />,
    tag: "INTELLIGENCE",
    description:
      "Our CRM learns as your business grows. Natural language search, predictive churn alerts, auto-drafted emails, meeting summaries, and deal health scores — all powered by embedded AI that works silently in the background.",
    points: [
      "Natural Language Deal Search",
      "Churn Prediction & Risk Alerts",
      "AI Email & Proposal Drafting",
      "Meeting Transcription & Summaries",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    accent: "#00C8FF",
  },
  {
    index: "06",
    title: "Customer\nSuccess Hub",
    icon: <FaLifeRing />,
    tag: "RETENTION",
    description:
      "Winning customers is just the start. Our Customer Success module tracks health scores, onboarding milestones, support tickets, and renewal timelines — giving your CS team the tools to reduce churn and grow accounts.",
    points: [
      "Customer Health Score Tracking",
      "Onboarding Journey Automation",
      "Support Ticket Integration",
      "Renewal & Upsell Playbooks",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    accent: "#FF4D8D",
  },
];

const stats = [
  { value: "320+", label: "CRM Deployments" },
  { value: "2.8×",  label: "Pipeline Growth" },
  { value: "68%",  label: "Faster Lead Response" },
  { value: "94%",  label: "Customer Retention" },
];

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TickerBar = () => (
  <div
    className="relative overflow-hidden py-3 border-y"
    style={{ borderColor: "var(--border)", background: "rgba(0,200,255,0.04)" }}
  >
    <div className="crm-ticker-inner flex whitespace-nowrap" style={{ width: "max-content" }}>
      {[...Array(6)].map((_, i) => (
        <span key={i} className="font-mono text-xs tracking-widest mx-8" style={{ color: "var(--cyan)" }}>
          CRM SOLUTIONS &nbsp;◆&nbsp; PIPELINE MANAGEMENT &nbsp;◆&nbsp; MARKETING AUTOMATION &nbsp;◆&nbsp; AI-POWERED INSIGHTS &nbsp;◆&nbsp; SALES ENABLEMENT &nbsp;◆&nbsp; CUSTOMER RETENTION &nbsp;◆&nbsp;
        </span>
      ))}
    </div>
  </div>
);

/* ─── Stats Bar ──────────────────────────────────────────────────────────── */
const StatsBar = () => (
  <div
    className="relative z-10 grid grid-cols-2 lg:grid-cols-4 circuit-grid"
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
        {/* Orbit dot decoration */}
        <div className="relative flex items-center justify-center mb-3 w-6 h-6">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--cyan)" }} />
          <div
            className="orbit-dot absolute w-1 h-1 rounded-full"
            style={{ background: "var(--rose)", animationDelay: `${i * 0.4}s` }}
          />
        </div>
        <span className="font-display text-4xl lg:text-5xl mb-1" style={{ color: "var(--cyan)" }}>
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
        className={`ghost-num-crm absolute top-4 select-none pointer-events-none ${
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
                  : "brightness(0.6) saturate(0.65)",
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
            {/* Circuit grid overlay */}
            <div
              className="absolute inset-0 circuit-grid opacity-20 pointer-events-none"
              style={{ mixBlendMode: "screen" }}
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
export default function CRMSolutions() {
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
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
            alt="CRM Solutions Hero"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.2) saturate(0.35)" }}
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#04080F] via-[#04080F]/65 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#04080F]/70 via-transparent to-transparent" />

        {/* Ambient glows */}
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,200,255,0.11) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,77,141,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,170,0,0.06) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Circuit grid */}
        <div className="absolute inset-0 circuit-grid opacity-20" />

        {/* Floating decoration */}
        <div
          className="float-signal absolute right-[7%] top-[16%] text-[100px] lg:text-[140px] select-none pointer-events-none hidden lg:block"
          style={{ color: "rgba(0,200,255,0.05)", filter: "blur(1px)" }}
          aria-hidden
        >
          ◎
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
            <span className="w-8 h-px" style={{ background: "var(--cyan)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--cyan)" }}>
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
              CRM
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="font-display text-[clamp(56px,10vw,140px)] leading-none tracking-tight shimmer-text-crm"
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
              We build intelligent CRM platforms that unify your sales,
              marketing, and customer success teams — driving revenue growth,
              deeper relationships, and lasting loyalty at every stage.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 group flex items-center gap-3 px-7 py-3.5 rounded-full font-body font-semibold text-sm text-black transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #00C8FF, #FF4D8D)",
                boxShadow: "0 0 40px rgba(0,200,255,0.3)",
              }}
            >
              See It in Action
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
            style={{ background: "linear-gradient(to bottom, var(--cyan), transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── TICKER ───────────────────────────────────────────────────────── */}
      <TickerBar />

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <div className="relative" style={{ background: "var(--bg)" }}>
        <div className="absolute inset-0 circuit-grid opacity-[0.03] pointer-events-none" />
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="CRM CTA"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.09) saturate(0.25)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, rgba(4,8,15,0.97) 0%, rgba(4,8,15,0.85) 100%)" }}
          />
        </div>

        {/* Ambient orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 65%)",
            filter: "blur(20px)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,77,141,0.05) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(255,170,0,0.04) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Circuit grid */}
        <div className="absolute inset-0 circuit-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-8 h-px" style={{ background: "var(--cyan)" }} />
            <span className="font-mono text-xs tracking-[5px] uppercase" style={{ color: "var(--cyan)" }}>
              Grow Every Relationship
            </span>
            <span className="w-8 h-px" style={{ background: "var(--cyan)" }} />
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
              READY TO CLOSE
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-10 text-center">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
              className="font-display text-[clamp(44px,8vw,110px)] leading-none tracking-tight shimmer-text-crm"
            >
              MORE DEALS?
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
            We design and implement intelligent CRM systems that align your
            sales, marketing, and support teams around a single customer
            truth — turning prospects into loyal, lifetime advocates.
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
                background: "linear-gradient(135deg, #00C8FF, #FF4D8D)",
                boxShadow: "0 0 50px rgba(0,200,255,0.35)",
              }}
            >
              Start Free Trial
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
              Explore Features
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}