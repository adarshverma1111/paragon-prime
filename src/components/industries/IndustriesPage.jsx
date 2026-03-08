import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


import {
  FaUniversity, FaHeartbeat, FaShoppingCart, FaGraduationCap,
  FaIndustry, FaHome, FaTruck, FaGavel, FaChartBar,
  FaBullhorn, FaHandHoldingHeart, FaRocket, FaArrowRight,
  FaWrench, FaShieldAlt, FaUsers, FaGlobe,
} from "react-icons/fa";

/* ─── Google Fonts ─────────────────────────────────────────────────────── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

    .ind-root { font-family: 'DM Sans', sans-serif; }
    .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px; }

    /* ── industry card ── */
    .ind-card {
      transition: transform 0.32s ease, border-color 0.32s ease, box-shadow 0.32s ease;
    }
    .ind-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 56px rgba(249,115,22,0.13);
    }
    .ind-card:hover .ind-img { transform: scale(1.07); filter: brightness(0.55) !important; }
    .ind-img { transition: transform 0.52s ease, filter 0.52s ease; }

    /* ── detail section ── */
    .detail-section {
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
    }
    .detail-section:hover {
      box-shadow: 0 0 0 1px rgba(249,115,22,0.25), 0 12px 40px rgba(249,115,22,0.08);
    }

    /* ── talk-btn ── */
    .talk-btn {
      transition: background 0.22s ease, transform 0.2s ease, box-shadow 0.22s ease;
    }
    .talk-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 28px rgba(249,115,22,0.38);
      filter: brightness(1.1);
    }
    .talk-btn:active { transform: scale(0.97); }

    /* ── pill ── */
    .pill-badge { backdrop-filter: blur(10px); }

    /* ── scroll cue ── */
    @keyframes bounce-y {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(9px); }
    }
    .bounce-y { animation: bounce-y 2.2s ease-in-out infinite; }

    /* ── stat glow ── */
    .stat-glow { box-shadow: 0 0 0 1px rgba(255,255,255,0.07) inset; }

    /* ── section-tab active ── */
    .sector-tab { transition: color 0.22s, border-color 0.22s; }
    .sector-tab.active { border-bottom: 2px solid #f97316; color: #f97316; }
    .sector-tab:not(.active) { border-bottom: 2px solid transparent; color: rgba(147,197,253,0.6); }
    .sector-tab:not(.active):hover { color: #e2e8f0; }
  `}</style>
);

/* ─── useInView ─────────────────────────────────────────────────────────── */
function useInView(threshold = 0.13) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, v];
}

/* ─── Data ──────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "12+", label: "Industries Served" },
  { value: "250+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Domain Experts" },
];

const SECTORS = [
  {
    key: "technology",
    label: "Technology",
    accent: "#3B82F6",
    industries: [
      {
        Icon: FaRocket,
        title: "Fintech",
        subtitle: "Finance, Reimagined.",
        img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
        desc: "We build secure, scalable financial platforms — from digital wallets and payment gateways to algorithmic trading tools and lending engines.",
        points: ["Payment Gateway Integration", "KYC / AML Compliance Modules", "Real-Time Analytics Dashboards", "Open Banking API Development"],
        why: "Fintech demands uncompromising security paired with blazing speed. We deliver both.",
      },
      {
        Icon: FaGraduationCap,
        title: "Education Tech",
        subtitle: "Learning Without Limits.",
        img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        desc: "Intelligent LMS platforms, adaptive learning engines, and virtual classrooms that engage students and empower educators at every level.",
        points: ["LMS & Course Authoring Tools", "Live & Async Video Classrooms", "AI-Driven Personalised Paths", "Gamification & Progress Tracking"],
        why: "EdTech thrives on engagement. We design experiences students actually want to return to.",
      },
      {
        Icon: FaHeartbeat,
        title: "Healthcare Tech",
        subtitle: "Technology That Heals.",
        img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
        desc: "HIPAA-compliant telemedicine platforms, patient portals, EHR integrations, and clinical data analytics for modern healthcare providers.",
        points: ["Telemedicine & Patient Portals", "EHR / EMR Integration", "HIPAA-Compliant Infrastructure", "Wearable & IoT Data Pipelines"],
        why: "Every line of code in healthcare carries responsibility. We take that seriously.",
      },
      {
        Icon: FaGlobe,
        title: "Startups",
        subtitle: "Zero to Launch, Fast.",
        img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
        desc: "From MVP to Series-A-ready product, we help startups move fast without breaking things — with scalable architecture baked in from day one.",
        points: ["Rapid MVP Development", "Product-Market Fit Sprints", "Scalable Cloud Architecture", "Investor-Ready Demos & Decks"],
        why: "Speed is a startup's superpower. We protect it while building for tomorrow.",
      },
    ],
  },
  {
    key: "traditional",
    label: "Traditional Sectors",
    accent: "#10B981",
    industries: [
      {
        Icon: FaShoppingCart,
        title: "Retail & E-commerce",
        subtitle: "Sell More. Everywhere.",
        img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
        desc: "Omni-channel commerce solutions with headless storefronts, AI-driven product recommendations, and real-time inventory management.",
        points: ["Headless & PWA Storefronts", "AI Product Recommendations", "Inventory & Order Management", "Multi-Channel Selling (Amazon, Social)"],
        why: "Modern retail blurs online and offline. We make the transition seamless.",
      },
      {
        Icon: FaIndustry,
        title: "Manufacturing",
        subtitle: "Smart Factories, Built Here.",
        img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80",
        desc: "Industrial IoT platforms, MES/ERP integrations, predictive maintenance systems, and supply-chain visibility tools for Industry 4.0.",
        points: ["Industrial IoT & SCADA Integration", "Predictive Maintenance Engines", "ERP / MES Customisation", "Supply Chain Visibility Dashboards"],
        why: "Downtime is expensive. Our platforms keep machines — and margins — running.",
      },
      {
        Icon: FaHome,
        title: "Real Estate",
        subtitle: "Property Tech That Sells.",
        img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
        desc: "Proptech platforms with 3D virtual tours, automated valuations, CRM for brokers, and tenant management portals for property owners.",
        points: ["3D Virtual Tours & AR Staging", "Automated Valuation Models", "Broker CRM & Lead Nurturing", "Tenant & Lease Management Portals"],
        why: "Buyers decide online before they visit. We make your digital impression unforgettable.",
      },
      {
        Icon: FaTruck,
        title: "Logistics",
        subtitle: "Move Fast. Move Smart.",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
        desc: "Fleet management, route optimisation, last-mile delivery tracking, and warehouse automation platforms for modern logistics operators.",
        points: ["Fleet Tracking & Telematics", "AI-Powered Route Optimisation", "Last-Mile Delivery Apps", "Warehouse Automation & WMS"],
        why: "Every second saved in logistics is money earned. We obsess over efficiency.",
      },
    ],
  },
  {
    key: "professional",
    label: "Professional Services",
    accent: "#F43F5E",
    industries: [
      {
        Icon: FaGavel,
        title: "Legal Services",
        subtitle: "Law, Powered by Tech.",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
        desc: "Legal practice management software, document automation, e-signature workflows, and client portals for law firms of all sizes.",
        points: ["Document Drafting Automation", "Case & Matter Management", "e-Signature & Secure Vaults", "Billing & Time-Tracking Portals"],
        why: "Lawyers bill by the hour. We give them their hours back.",
      },
      {
        Icon: FaChartBar,
        title: "Consulting Firms",
        subtitle: "Advice, Amplified.",
        img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        desc: "Client portals, knowledge-management systems, project dashboards, and data visualisation tools that make consulting insights impossible to ignore.",
        points: ["Client Portal & Reporting Suites", "Knowledge Base & IP Management", "Project & Resource Planning", "Interactive Data Visualisations"],
        why: "Great strategy deserves great presentation. We build both.",
      },
      {
        Icon: FaBullhorn,
        title: "Marketing Agencies",
        subtitle: "Creative Meets Code.",
        img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80",
        desc: "Campaign management platforms, white-label analytics dashboards, creative asset libraries, and CRM integrations for high-growth agencies.",
        points: ["White-Label Analytics Dashboards", "Campaign Automation Platforms", "Creative Asset Management", "Multi-Client CRM Integrations"],
        why: "Agencies live and die on results. Our tools make your results undeniable.",
      },
      {
        Icon: FaHandHoldingHeart,
        title: "Non-Profit",
        subtitle: "Mission-Driven Tech.",
        img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=800&q=80",
        desc: "Donor management platforms, volunteer coordination tools, impact-reporting dashboards, and grant management systems for NGOs and charities.",
        points: ["Donor CRM & Fundraising Portals", "Volunteer Management Apps", "Impact & Outcome Reporting", "Grant Lifecycle Management"],
        why: "Your mission is too important for mediocre technology. We make it shine.",
      },
    ],
  },
];

/* ─── Pill ──────────────────────────────────────────────────────────────── */
const Pill = ({ Icon, label }) => (
  <span className="pill-badge flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/90"
    style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.07)" }}>
    <Icon size={12} className="text-blue-400" />
    {label}
  </span>
);

/* ─── Stat Card ─────────────────────────────────────────────────────────── */
const StatCard = ({ value, label, idx }) => {
  const [ref, vis] = useInView();
  return (
    <div ref={ref}
      className="stat-glow text-center p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `all 0.6s ease ${idx * 0.12}s` }}>
      <div className="font-display text-3xl sm:text-4xl md:text-5xl mb-1" style={{ color: "#f97316" }}>{value}</div>
      <div className="text-xs text-blue-200 tracking-widest uppercase font-medium">{label}</div>
    </div>
  );
};

/* ─── Section Header ────────────────────────────────────────────────────── */
const SectionHeader = ({ eyebrow, titleWhite, titleGrad, gradColors, sub }) => {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className="text-center mb-12 sm:mb-16"
      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s ease" }}>
      <p className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-3">{eyebrow}</p>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4 text-white">
        {titleWhite}{" "}
        <span style={{ background: gradColors, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          {titleGrad}
        </span>
      </h2>
      {sub && <p className="text-blue-200 text-sm max-w-lg mx-auto leading-relaxed">{sub}</p>}
    </div>
  );
};

/* ─── Talk Button ───────────────────────────────────────────────────────── */
const TalkBtn = () => (
  <button
    className="talk-btn inline-flex w-fit self-start items-center gap-2 mt-6
  px-4 py-2 text-sm font-semibold text-white
  rounded-full border-none outline-none
  border-b border-blue-900/60
  bg-gradient-to-r from-[#000046] via-[#1CB5E0] to-[#000046]
  bg-[length:200%_auto]
  transition-all duration-500
  hover:bg-right"
  >
    Talk to Expert <FaArrowRight size={11} />
  </button>
);


/* ─── Industry Detail Section ───────────────────────────────────────────── */
const IndustryDetail = ({ ind, accent, idx }) => {
  const [ref, vis] = useInView(0.1);
  const isEven = idx % 2 === 0;

  return (
    <div ref={ref}
      className="detail-section rounded-2xl border border-white/10 overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        backdropFilter: "blur(12px)",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: `all 0.7s ease ${(idx % 4) * 0.1}s`,
      }}
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

        {/* Image */}
        <div className="relative overflow-hidden lg:w-2/5 flex-shrink-0" style={{ minHeight: 260 }}>
          <img src={ind.img} alt={ind.title}
            className="ind-img w-full h-full object-cover absolute inset-0"
            style={{ filter: "brightness(0.45)" }} />
          <div className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${accent}22 0%, transparent 65%)` }} />

          {/* Icon badge */}
          <div className="absolute top-5 left-5 w-12 h-12 rounded-xl flex items-center justify-center text-xl"
            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}>
            <ind.Icon />
          </div>

          {/* Subtitle overlay */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: accent }}>
              {ind.subtitle}
            </p>
            <h3 className="font-display text-3xl text-white" style={{ lineHeight: 1 }}>{ind.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-7 sm:p-9 lg:w-3/5">
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(147,197,253,0.82)" }}>
            {ind.desc}
          </p>

          {/* What we deliver */}
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
            What We Deliver
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-4">
            {ind.points.map((p, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent, flexShrink: 0, marginTop: 6, display: "inline-block" }} />
                {p}
              </li>
            ))}
          </ul>

          {/* Why us */}
          <div className="mt-3 px-4 py-3 rounded-xl text-sm italic"
            style={{ background: `${accent}12`, borderLeft: `3px solid ${accent}66`, color: "rgba(255,255,255,0.55)" }}>
            "{ind.why}"
          </div>

          <TalkBtn accent={accent} />
        </div>
      </div>
    </div>
  );
};

/* ─── Sector Block ──────────────────────────────────────────────────────── */
const SectorBlock = ({ sector }) => {
  const [ref, vis] = useInView(0.07);
  return (
    <section id={sector.key} className="py-14 sm:py-20 px-4 sm:px-6 lg:px-20">
      {/* Sector heading */}
      <div ref={ref} className="mb-10 sm:mb-12"
        style={{ opacity: vis ? 1 : 0, transform: vis ? "translateX(0)" : "translateX(-20px)", transition: "all 0.6s ease" }}>
        <div className="flex items-center gap-4 mb-2">
          <div className="h-0.5 w-8 rounded" style={{ background: sector.accent }} />
          <p className="text-xs font-bold uppercase tracking-widest" style={{ color: sector.accent }}>
            Sector
          </p>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-white">{sector.label}</h2>
      </div>

      {/* Industry cards */}
      <div className="flex flex-col gap-6 sm:gap-8">
        {sector.industries.map((ind, i) => (
          <IndustryDetail key={i} ind={ind} accent={sector.accent} idx={i} />
        ))}
      </div>
    </section>
  );
};

/* ─── CTA ───────────────────────────────────────────────────────────────── */
const CTA = () => {
  const [ref, vis] = useInView();
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-20" style={{ background: "#020917" }}>
      <div ref={ref}
        className="max-w-3xl mx-auto text-center rounded-3xl p-10 sm:p-14 border border-white/10 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e1b4b44)",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(36px)",
          transition: "all 0.8s ease",
        }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #f9731622 0%, transparent 60%)" }} />

        <p className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-4 relative z-10">
          Your Industry. Our Expertise.
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-5 relative z-10">
          Let's Build Your{" "}
          <span style={{ background: "linear-gradient(90deg,#f97316,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Industry Solution
          </span>
        </h2>
        <p className="text-blue-200 text-sm mb-8 relative z-10 max-w-xl mx-auto leading-relaxed">
          Don't see your niche? We've solved complex problems across dozens of verticals.
          Let's talk — no commitment, just clarity.
        </p>
        <div className="flex gap-4 justify-center flex-wrap relative z-10">
          <a
            href="#"
            className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm text-white
                       transition-all hover:scale-105
                       bg-[length:200%_auto]
                       bg-gradient-to-r from-[#fe8c00] via-[#f83600] to-[#fe8c00]
                       shadow-[0_0_20px_#eee]
                       hover:bg-right"
          >
            Talk to an Expert
          </a>
          <a href="#"
            className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all text-blue-200 hover:text-white">
            View Our Work →
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─── Sticky Sector Nav ─────────────────────────────────────────────────── */
const SectorNav = ({ sectors, active, onSelect }) => (
  <div className="sticky top-0 z-30 flex justify-center py-3 px-4"
    style={{ background: "rgba(2,9,23,0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
    <div className="flex gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
      {sectors.map((s) => (
        <button
          key={s.key}
          onClick={() => onSelect(s.key)}
          className={`sector-tab px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap ${active === s.key ? "active" : ""}`}
        >
          {s.label}
        </button>
      ))}
    </div>
  </div>
);

/* ─── Main ──────────────────────────────────────────────────────────────── */
export default function IndustriesPage() {
  const [heroRef, heroVis] = useInView(0.05);
  const [activeTab, setActiveTab] = useState("technology");

  const fade = (delay = 0) => ({
    opacity: heroVis ? 1 : 0,
    transform: heroVis ? "translateY(0)" : "translateY(24px)",
    transition: `all 0.75s ease ${delay}s`,
  });

  const scrollTo = (key) => {
    setActiveTab(key);
    const el = document.getElementById(key);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* Update active tab on scroll */
  useEffect(() => {
    const handler = () => {
      for (const s of SECTORS) {
        const el = document.getElementById(s.key);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveTab(s.key);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="ind-root text-white overflow-x-hidden pt-12"
      style={{ background: "linear-gradient(135deg,#020917 0%,#040d1f 50%,#060a14 100%)" }}>
      <Fonts />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-20 overflow-hidden"
        style={{ minHeight: "88vh", paddingTop: "5rem", paddingBottom: "4rem" }}>

        {/* BG glows */}
        <div className="absolute top-20 left-1/3 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle,#10b981,transparent)" }} />
        <div className="absolute bottom-24 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle,#f97316,transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[80px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle,#6366f1,transparent)" }} />

        <div ref={heroRef} className="relative z-10 w-full max-w-4xl mx-auto">

          {/* Badge */}
          <div style={fade(0)} className="flex justify-center mb-7">
            <span style={{ border: "1px solid #f9731555", color: "#fb923c", background: "#f9731511", padding: "6px 18px", borderRadius: "999px", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              Industries We Serve
            </span>
          </div>

          {/* Headline */}
          <div style={fade(0.1)}>
            <h1 className="font-display text-white leading-none mb-2"
              style={{ fontSize: "clamp(2.8rem,8vw,6rem)" }}>
              Deep Expertise Across
            </h1>
            <h1 className="font-display leading-none mb-8"
              style={{ fontSize: "clamp(2.8rem,8vw,6rem)", background: "linear-gradient(90deg,#10b981,#3b82f6,#f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Every Vertical
            </h1>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8" style={fade(0.2)}>
            <Pill Icon={FaUsers} label="12+ Industries" />
            <Pill Icon={FaShieldAlt} label="Domain-Led Teams" />
            <Pill Icon={FaWrench} label="Proven Frameworks" />
          </div>

          {/* Sub */}
          <p className="text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ ...fade(0.3), fontSize: "clamp(0.95rem,2vw,1.1rem)" }}>
            We don't do one-size-fits-all. Our solutions are shaped by deep
            domain knowledge — built for your industry's unique rules, risks, and opportunities.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4" style={fade(0.4)}>
            <button
              className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", boxShadow: "0 6px 30px #f9731444" }}>
              Talk to an Expert
            </button>
            <a href="#technology"
              className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all text-blue-200 hover:text-white"
              onClick={(e) => { e.preventDefault(); scrollTo("technology"); }}>
              Explore Industries →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 sm:mt-20 w-full max-w-4xl mx-auto">
          {STATS.map((s, i) => <StatCard key={i} {...s} idx={i} />)}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bounce-y opacity-30">
          <div className="w-px h-10 mx-auto" style={{ background: "linear-gradient(to bottom,#3b82f6,transparent)" }} />
        </div>
      </section>

      {/* ── STICKY NAV ───────────────────────────────────────────────── */}
      <SectorNav sectors={SECTORS} active={activeTab} onSelect={scrollTo} />

      {/* ── OVERVIEW SECTION HEADER ──────────────────────────────────── */}
      <div className="pt-16 px-4 sm:px-6 lg:px-20"
        style={{ background: "linear-gradient(180deg,#040d1f,#050d1e)" }}>
        <SectionHeader
          eyebrow="Domain Depth"
          titleWhite="Solutions Built For"
          titleGrad="Your Industry"
          gradColors="linear-gradient(90deg,#10b981,#3b82f6)"
          sub="From regulated finance to fast-moving logistics, our domain experts speak your language — and solve your hardest problems."
        />
      </div>

      {/* ── SECTOR BLOCKS ────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(180deg,#050d1e,#040d1f,#050d1e)" }}>
        {SECTORS.map((s) => (
          <SectorBlock key={s.key} sector={s} />
        ))}
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <CTA />
    </div>
  );
}