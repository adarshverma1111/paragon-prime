import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCode, FaMobileAlt, FaBullhorn, FaCubes,
  FaUsers, FaWrench, FaShieldAlt, FaRocket,
  FaPencilRuler, FaArrowRight,
} from "react-icons/fa";

/* ─── Google Fonts ───────────────────────────────────────────────────────── */
const Fonts = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');

    .svc-root { font-family: 'DM Sans', sans-serif; }
    .font-display { font-family: 'Bebas Neue', sans-serif; letter-spacing: 2px; }

    .svc-card {
      transition: transform 0.32s ease, border-color 0.32s ease, box-shadow 0.32s ease;
    }
    .svc-card:hover {
      transform: translateY(-7px);
      border-color: #f97316 !important;
      box-shadow: 0 18px 48px rgba(249,115,22,0.14);
    }
    .svc-card:hover .svc-img { transform: scale(1.06); filter: brightness(0.62) !important; }
    .svc-img { transition: transform 0.5s ease, filter 0.5s ease; }

    .pill-badge { backdrop-filter: blur(10px); }

    .explore-btn {
      transition: background 0.25s ease, transform 0.2s ease;
    }
    .explore-btn:hover { transform: translateX(3px); filter: brightness(1.15); }

    .partner-card {
      transition: transform 0.28s ease, box-shadow 0.28s ease;
    }
    .partner-card:hover { transform: translateY(-5px); box-shadow: 0 10px 28px rgba(0,0,0,0.12); }

    @keyframes bounce-y {
      0%,100% { transform: translateY(0); }
      50%      { transform: translateY(8px); }
    }
    .bounce-y { animation: bounce-y 2s ease-in-out infinite; }

    .stat-glow { box-shadow: 0 0 0 1px rgba(255,255,255,0.07) inset; }
  `}</style>
);



/* ─── useInView ──────────────────────────────────────────────────────────── */
function useInView(threshold = 0.14) {
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

/* ─── Data ───────────────────────────────────────────────────────────────── */
const STATS = [
  { value: "250+", label: "Projects Delivered" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "4+",   label: "Years Experience" },
  { value: "40+",  label: "Expert Team" },
];

const SERVICES = [
  {
    Icon: FaCode, title: "Website Development", subtitle: "Fast. Scalable. Pixel-Perfect.",
    desc: "From landing pages to enterprise portals, we build blazing-fast, SEO-optimized websites using modern technologies that convert visitors into customers.",
    highlights: ["Custom UI/UX Design", "CMS Integration", "SEO & Performance Optimization", "Fully Responsive"],
    href: "/web-development", accent: "#3B82F6",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: FaMobileAlt, title: "App Development", subtitle: "Native. Cross-Platform. Powerful.",
    desc: "We craft intuitive iOS and Android apps with React Native and Flutter — delivering smooth experiences that keep users coming back.",
    highlights: ["iOS & Android Development", "React Native / Flutter", "Push Notifications", "App Store Deployment"],
    href: "/app-development", accent: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: FaBullhorn, title: "Digital Marketing", subtitle: "Reach. Engage. Convert.",
    desc: "We accelerate brand growth through data-driven SEO, performance ads, and content strategies that generate measurable leads and authority.",
    highlights: ["SEO & Search Visibility", "Google & Social Ads", "Content Strategy", "Analytics & Reporting"],
    href: "/digital-marketing", accent: "#F97316",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: FaCubes, title: "ERP Solutions", subtitle: "Unified. Intelligent. Scalable.",
    desc: "End-to-end ERP systems that consolidate Finance, HR, Supply Chain, and Operations into one intelligent platform eliminating silos.",
    highlights: ["Finance & HR Automation", "Supply Chain Management", "Cloud & On-Prem Deployment", "Custom Module Development"],
    href: "/ERP-solution", accent: "#10B981",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: FaUsers, title: "CRM / HRM Solutions", subtitle: "Relationships. Revenue. Retention.",
    desc: "Unified CRM and HRM platforms for sales pipelines, marketing automation, and HR workflows — close deals faster, manage people smarter.",
    highlights: ["Pipeline & Contact Management", "Marketing Automation", "HR & Payroll Integration", "AI-Powered Insights"],
    href: "/CRM-solution", accent: "#F43F5E",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
  {
    Icon: FaPencilRuler, title: "UI / UX Design", subtitle: "Design. Experience. Delight.",
    desc: "User-centered digital experiences that are visually stunning and easy to use — maximizing engagement and conversions at every touchpoint.",
    highlights: ["User Research & Wireframing", "UI Design & Prototyping", "Interactive Design Systems", "Usability Testing"],
    href: "#", accent: "#6366F1",
    img: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&w=800&q=80",
  },
];

const PARTNERS = [
  { name: "AWS",          logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Azure",        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg" },
  { name: "Salesforce",   logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
  { name: "Google Cloud", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" },
  { name: "Microsoft",    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "IBM",          logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
];

/* ─── Pill ───────────────────────────────────────────────────────────────── */
const Pill = ({ Icon, label }) => (
  <span className="pill-badge flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white/90"
    style={{ border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.07)" }}>
    <Icon size={12} className="text-blue-400" />
    {label}
  </span>
);

/* ─── Stat Card ──────────────────────────────────────────────────────────── */
const StatCard = ({ value, label, idx }) => {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className="stat-glow text-center p-5 sm:p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
      style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `all 0.6s ease ${idx * 0.12}s` }}>
      <div className="font-display text-3xl sm:text-4xl md:text-5xl mb-1" style={{ color: "#f97316" }}>{value}</div>
      <div className="text-xs text-blue-200 tracking-widest uppercase font-medium">{label}</div>
    </div>
  );
};

/* ─── Service Card ───────────────────────────────────────────────────────── */
const ServiceCard = ({ svc, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 56 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay: index * 0.1, ease: "easeOut" }}
    className="svc-card flex flex-col rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
    style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)" }}
  >
    {/* Cover image */}
    <div className="relative overflow-hidden" style={{ height: 200 }}>
      <img src={svc.img} alt={svc.title}
        className="svc-img w-full h-full object-cover"
        style={{ filter: "brightness(0.42)" }} />
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${svc.accent}22 0%, transparent 65%)` }} />
      <div className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-base"
        style={{ background: `${svc.accent}22`, color: svc.accent, border: `1px solid ${svc.accent}44` }}>
        <svc.Icon />
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6">
      <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: svc.accent }}>{svc.subtitle}</p>
      <h3 className="text-lg font-bold text-white mb-3">{svc.title}</h3>
      <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "rgba(147,197,253,0.75)" }}>{svc.desc}</p>

      <ul className="mb-6 space-y-2">
        {svc.highlights.map((h, i) => (
          <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: svc.accent, flexShrink: 0, display: "inline-block" }} />
            {h}
          </li>
        ))}
      </ul>

      <Link to={svc.href}
        className="explore-btn inline-flex items-center gap-2 self-start rounded-full px-5 py-2.5 text-sm font-semibold"
        style={{ background: `${svc.accent}22`, color: svc.accent, border: `1px solid ${svc.accent}40` }}>
        Explore More <FaArrowRight size={11} />
      </Link>
    </div>
  </motion.div>
);

/* ─── Section Header ─────────────────────────────────────────────────────── */
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
      {sub && <p className="text-blue-200 text-sm max-w-md mx-auto leading-relaxed">{sub}</p>}
    </div>
  );
};



/* ─── CTA ────────────────────────────────────────────────────────────────── */
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
        {/* Top radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #f9731622 0%, transparent 60%)" }} />

        <p className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-4 relative z-10">
          Ready to Start?
        </p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-5 relative z-10">
          Let's Build Something{" "}
          <span style={{ background: "linear-gradient(90deg,#f97316,#fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Extraordinary
          </span>
        </h2>
        <p className="text-blue-200 text-sm mb-8 relative z-10 max-w-xl mx-auto leading-relaxed">
          Tell us about your project and we'll get back to you within 24 hours with a free consultation and proposal.
        </p>
        <div className="flex gap-4 justify-center flex-wrap relative z-10">
          <a href="#"
            className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", boxShadow: "0 6px 30px #f9731444" }}>
            Start a Project
          </a>
          <a href="#"
            className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all text-blue-200 hover:text-white">
            Schedule a Call 
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function ServicesPage() {
  const [heroRef, heroVis] = useInView(0.05);

  const fade = (delay = 0) => ({
    opacity: heroVis ? 1 : 0,
    transform: heroVis ? "translateY(0)" : "translateY(24px)",
    transition: `all 0.75s ease ${delay}s`,
  });

  return (
    <div className="svc-root text-white overflow-x-hidden"
      style={{ background: "linear-gradient(135deg,#020917 0%,#040d1f 50%,#060a14 100%)" }}>
      <Fonts />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-20 lg:mt-6 overflow-hidden"
        style={{ minHeight: "90vh", paddingTop: "5rem", paddingBottom: "5rem" }}>

        {/* BG glows */}
        <div className="absolute top-16 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle,#3b82f6,transparent)" }} />
        <div className="absolute bottom-16 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: "radial-gradient(circle,#f97316,transparent)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[80px] opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle,#6366f1,transparent)" }} />

        

        {/* Content */}
        <div ref={heroRef} className="relative z-10 w-full max-w-4xl mx-auto">

          {/* Tag */}
          <div style={fade(0)} className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-7"
            style2={{ border: "1px solid #f9731555", color: "#fb923c", background: "#f9731511" }}>
            <span style={{ border: "1px solid #f9731555", color: "#fb923c", background: "#f9731511", padding: "6px 16px", borderRadius: "999px", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              Our Services
            </span>
          </div>

          {/* Headline */}
          <div style={fade(0.1)}>
            <h1 className="font-display text-white leading-none mb-2"
              style={{ fontSize: "clamp(2.8rem,8vw,6rem)" }}>
              Services That Makes Your
            </h1>
            <h1 className="font-display leading-none mb-8"
              style={{ fontSize: "clamp(2.8rem,8vw,6rem)", background: "linear-gradient(90deg,#f97316,#fbbf24,#3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Idea To Scale
            </h1>
          </div>

          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8" style={fade(0.2)}>
            <Pill Icon={FaWrench}    label="Services" />
            <Pill Icon={FaShieldAlt} label="Quality First" />
            <Pill Icon={FaRocket}    label="On-time Delivery" />
          </div>

          {/* Subtext */}
          <p className="text-blue-200 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ ...fade(0.3), fontSize: "clamp(0.95rem,2vw,1.1rem)" }}>
            Choose a track or mix and match. We design, build, deploy, and operate
            secure software across web, mobile, and cloud — from idea to scale.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4" style={fade(0.4)}>
            <a href="#"
              className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg,#f97316,#ea580c)", boxShadow: "0 6px 30px #f9731444" }}>
              Consult Our Experts
            </a>
            <a href="#"
              className="px-7 sm:px-9 py-3.5 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all text-blue-200 hover:text-white">
              View Portfolio →
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-16 sm:mt-20 w-full max-w-4xl mx-auto px-0">
          {STATS.map((s, i) => <StatCard key={i} {...s} idx={i} />)}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bounce-y opacity-30">
          <div className="w-px h-10 mx-auto" style={{ background: "linear-gradient(to bottom,#3b82f6,transparent)" }} />
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-20"
        style={{ background: "linear-gradient(180deg,#040d1f,#050d1e,#040d1f)" }}>

        <SectionHeader
          eyebrow="What We Do"
          titleWhite="Explore Our"
          titleGrad="Core Services"
          gradColors="linear-gradient(90deg,#f97316,#fbbf24)"
          sub="Everything you need to dominate the digital landscape — under one roof."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={i} svc={svc} index={i} />
          ))}
        </div>
      </section>

      

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <CTA />
    </div>
  );
}