"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaCode, FaMobileAlt, FaBullhorn, FaCubes, FaUsers } from "react-icons/fa";


/* ─── Fonts & CSS ────────────────────────────────────────────────────────── */
const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono:wght@300;400&family=Bebas+Neue&display=swap');

    :root {
      --bg:     #060810;
      --border: rgba(255,255,255,0.06);
    }

    .os-font-display { font-family: 'Bebas Neue', sans-serif; }
    .os-font-body    { font-family: 'Syne', sans-serif; }
    .os-font-mono    { font-family: 'JetBrains Mono', monospace; }

    .os-dot-grid {
      background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
      background-size: 28px 28px;
    }

    .os-scanlines::after {
      content: '';
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        0deg, transparent, transparent 2px,
        rgba(0,0,0,0.13) 2px, rgba(0,0,0,0.13) 4px
      );
      pointer-events: none;
      border-radius: inherit;
    }

    .os-ghost-num {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(100px, 16vw, 200px);
      line-height: 1;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      user-select: none;
      pointer-events: none;
    }

    @keyframes os-ticker {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
    .os-ticker { animation: os-ticker 28s linear infinite; }

    @keyframes os-shimmer {
      from { background-position: -200% center; }
      to   { background-position:  200% center; }
    }
    .os-shimmer-hero {
      background: linear-gradient(90deg, #FF6B1A, #34EFA0, #7EE8FF, #A78BFF, #FF6B1A);
      background-size: 250% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: os-shimmer 6s linear infinite;
    }

    /* per-service shimmer classes */
    .os-shimmer-web   { background: linear-gradient(90deg,#FF6B1A,#FFAC5F,#7EE8FF,#FF6B1A); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:os-shimmer 5s linear infinite; }
    .os-shimmer-app   { background: linear-gradient(90deg,#A78BFF,#7EE8FF,#FF6B1A,#A78BFF); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:os-shimmer 5s linear infinite; }
    .os-shimmer-dm    { background: linear-gradient(90deg,#34EFA0,#7EE8FF,#FF5E8A,#34EFA0); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:os-shimmer 5s linear infinite; }
    .os-shimmer-erp   { background: linear-gradient(90deg,#FBBF24,#F97316,#FB923C,#FBBF24); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:os-shimmer 5s linear infinite; }
    .os-shimmer-crm   { background: linear-gradient(90deg,#38BDF8,#818CF8,#C084FC,#38BDF8); background-size:200% auto; -webkit-background-clip:text; -webkit-text-fill-color:transparent; animation:os-shimmer 5s linear infinite; }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #060810; }
    ::-webkit-scrollbar-thumb { background: #FF6B1A; border-radius: 2px; }
  `}</style>
);

/* ─── Service Data ───────────────────────────────────────────────────────── */
const services = [
  {
    index: "01",
    id: "web",
    title: "Website\nDevelopment",
    shimmer: "os-shimmer-web",
    icon: <FaCode />,
    tag: "WEB DEVELOPMENT",
    accent: "#FF6B1A",
    href: "/web-development",
    description:
      "We architect and develop high-performance web platforms tailored to your business goals. From scalable backend systems to pixel-perfect front-end interfaces, engineered for reliability, security, and growth.",
    points: [
      "Modern React / Next.js Architecture",
      "Scalable Backend Integration",
      "API & Third-Party Integrations",
      "Core Web Vitals Optimization",
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: "02",
    id: "app",
    title: "App\nDevelopment",
    shimmer: "os-shimmer-app",
    icon: <FaMobileAlt />,
    tag: "APP DEVELOPMENT",
    accent: "#A78BFF",
    href: "/app-development",
    description:
      "We design and develop powerful mobile applications tailored to your business vision. From intuitive UI to scalable backend systems, our apps are built for performance, security, and seamless user experiences.",
    points: [
      "iOS & Android Development",
      "React Native / Flutter Solutions",
      "Scalable Backend Architecture",
      "Secure API Integrations",
    ],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: "03",
    id: "dm",
    title: "Digital\nMarketing",
    shimmer: "os-shimmer-dm",
    icon: <FaBullhorn />,
    tag: "DIGITAL MARKETING",
    accent: "#34EFA0",
    href: "/digital-marketing",
    description:
      "We craft data-driven digital marketing strategies that amplify your brand presence and generate measurable growth. Creativity, analytics, and technology combined for impactful campaigns.",
    points: [
      "Multi-Channel Marketing Strategy",
      "Technical SEO & Search Visibility",
      "Google Ads & PPC Campaigns",
      "Lead Generation Funnels",
    ],
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: "04",
    id: "erp",
    title: "ERP\nSolutions",
    shimmer: "os-shimmer-erp",
    icon: <FaCubes />,
    tag: "ERP SOLUTIONS",
    accent: "#FBBF24",
    href: "/ERP-solution",
    description:
      "Streamline every corner of your business with our custom ERP platforms. We build end-to-end enterprise resource planning systems that unify operations, finance, inventory, and HR into one powerful hub.",
    points: [
      "Custom ERP Architecture",
      "Inventory & Supply Chain Management",
      "Finance & Accounting Modules",
      "Real-Time Reporting & Dashboards",
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    index: "05",
    id: "crm",
    title: "CRM / HRM\nSolutions",
    shimmer: "os-shimmer-crm",
    icon: <FaUsers />,
    tag: "CRM/HRM SOLUTIONS",
    accent: "#38BDF8",
    href: "/CRM-solution",
    description:
      "Nurture customer relationships and empower your workforce with intelligent CRM and HRM platforms. We build tailored systems that automate pipelines, track performance, and streamline HR workflows.",
    points: [
      "Custom CRM Pipeline Builder",
      "HR Onboarding & Payroll Automation",
      "Employee Performance Tracking",
      "Customer Analytics & Insights",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ─── Ticker ─────────────────────────────────────────────────────────────── */
const TickerBar = () => (
  <div className="relative overflow-hidden py-3 border-y" style={{ borderColor: "var(--border)", background: "rgba(255,107,26,0.03)" }}>
    <div className="os-ticker flex whitespace-nowrap" style={{ width: "max-content" }}>
      {[...Array(4)].map((_, i) => (
        <span key={i} className="os-font-mono text-xs tracking-widest mx-8" style={{ color: "rgba(255,255,255,0.25)" }}>
          WEBSITE DEVELOPMENT &nbsp;◆&nbsp; APP DEVELOPMENT &nbsp;◆&nbsp; DIGITAL MARKETING &nbsp;◆&nbsp; ERP SOLUTIONS &nbsp;◆&nbsp; CRM / HRM SOLUTIONS &nbsp;◆&nbsp;
        </span>
      ))}
    </div>
  </div>
);

/* ─── Service Section ────────────────────────────────────────────────────── */
const ServiceSection = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;
  const ghostGradient = `linear-gradient(180deg, ${service.accent}14 0%, transparent 70%)`;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="relative py-20 lg:py-28 px-6 lg:px-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      {/* Ghost number */}
      <div
        className={`os-ghost-num absolute top-4 ${isEven ? "right-4 lg:right-16" : "left-4 lg:left-16"}`}
        style={{ backgroundImage: ghostGradient }}
        aria-hidden
      >
        {service.index}
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
            <div key={ci} className={`absolute w-6 h-6 z-20 ${pos}`} style={{
              borderTop:    ci < 2  ? `2px solid ${service.accent}` : "none",
              borderBottom: ci >= 2 ? `2px solid ${service.accent}` : "none",
              borderLeft:   ci % 2 === 0 ? `2px solid ${service.accent}` : "none",
              borderRight:  ci % 2 !== 0 ? `2px solid ${service.accent}` : "none",
              transition: "all 0.35s",
              opacity: hovered ? 1 : 0.35,
              transform: hovered
                ? ci === 0 ? "translate(-5px,-5px)" : ci === 1 ? "translate(5px,-5px)" : ci === 2 ? "translate(-5px,5px)" : "translate(5px,5px)"
                : "translate(0,0)",
            }} />
          ))}

          {/* Tag pill */}
          <div className="absolute -top-4 z-20 os-font-mono text-xs px-4 py-1 rounded-full tracking-widest"
            style={{
              left: isEven ? "1rem" : "auto", right: isEven ? "auto" : "1rem",
              background: `${service.accent}18`, border: `1px solid ${service.accent}55`, color: service.accent,
            }}>
            {service.tag}
          </div>

          <div className="relative overflow-hidden rounded-2xl os-scanlines" style={{ boxShadow: `0 0 60px ${service.accent}20` }}>
            <img
              src={service.image}
              alt={service.title.replace("\n", " ")}
              className="w-full object-cover transition-all duration-500"
              style={{
                height: "440px",
                filter: hovered ? "brightness(0.88) saturate(1.1)" : "brightness(0.68) saturate(0.8)",
              }}
            />
            <div className="absolute inset-0 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${service.accent}18 0%, transparent 60%)`, opacity: hovered ? 1 : 0 }} />
          </div>

          {/* Index badge */}
          <div className="absolute -bottom-5 os-font-display text-7xl leading-none select-none"
            style={{ right: isEven ? "-1rem" : "auto", left: isEven ? "auto" : "-1rem", color: service.accent, opacity: 0.15 }}>
            {service.index}
          </div>
        </motion.div>

        {/* ── Text Panel ── */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:w-[48%] os-font-body"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 text-xl"
            style={{ background: `${service.accent}15`, color: service.accent, border: `1px solid ${service.accent}30` }}>
            {service.icon}
          </div>

          {/* Title */}
          <h2 className={`os-font-display text-5xl lg:text-6xl xl:text-[72px] leading-none mb-6 whitespace-pre-line ${service.shimmer}`}>
            {service.title}
          </h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="h-px mb-6 origin-left"
            style={{ background: `linear-gradient(90deg, ${service.accent}, transparent)` }}
          />

          <p className="text-sm lg:text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.52)" }}>
            {service.description}
          </p>

          {/* Feature list */}
          <ul className="mb-10 space-y-0">
            {service.points.map((point, pi) => (
              <motion.li key={pi}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + pi * 0.08 }}
                className="flex items-center gap-4 py-3 group"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-[2]"
                  style={{ background: service.accent }} />
                <span className="os-font-mono text-xs tracking-wide transition-colors duration-300 group-hover:text-white"
                  style={{ color: "rgba(255,255,255,0.58)" }}>
                  {point}
                </span>
                <span className="ml-auto os-font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: service.accent }}>→</span>
              </motion.li>
            ))}
          </ul>

          {/* Explore Now button */}
          <motion.a
            href={service.href}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full os-font-body font-semibold text-sm text-black transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, ${service.accent}, ${service.accent}cc)`,
              boxShadow: `0 0 36px ${service.accent}35`,
            }}
          >
            Explore Now
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </motion.section>
  );
};

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function OurServices() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <div className="os-font-body overflow-x-hidden" style={{ background: "var(--bg)", color: "#fff" }}>
      <FontLoader />

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden">

        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
            alt="Our Services"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.22) saturate(0.45)" }}
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060810]/60 via-transparent to-transparent" />

        {/* Multi-colour ambient cluster */}
        <div className="absolute top-1/3 left-[20%] w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,107,26,0.09) 0%, transparent 70%)", filter: "blur(55px)" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(167,139,255,0.07) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-1/3 right-[15%] w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(52,239,160,0.07) 0%, transparent 70%)", filter: "blur(50px)" }} />

        <div className="absolute inset-0 os-dot-grid opacity-20" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 px-6 lg:px-20 pb-70 lg:pb-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5 lg:hidden"
          >
            <span className="w-8 h-px" style={{ background: "#FF6B1A" }} />
            <span className="os-font-mono text-xs tracking-[5px] uppercase" style={{ color: "#FF6B1A" }}>
              Digital Forge Studio
            </span>
          </motion.div>

          <div className="overflow-hidden mb-0 ">
            <motion.h1
              initial={{ y: "110%" }} animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="os-font-display text-[clamp(60px,11vw,150px)] leading-none tracking-tight text-white"
            >
              OUR
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-1 ">
            <motion.h1
              initial={{ y: "110%" }} animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
              className="os-font-display text-[clamp(60px,11vw,150px)] leading-none tracking-tight os-shimmer-hero"
            >
              SERVICES
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-12"
          >
            <p className="max-w-lg text-sm lg:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
              End-to-end digital solutions crafted to launch, scale, and evolve your brand —
              from custom web and mobile engineering to enterprise platforms and data-driven marketing.
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 right-8 z-10 flex flex-col items-center gap-2"
        >
          <span className="os-font-mono text-xs tracking-widest" style={{ color: "rgba(255,255,255,0.22)", writingMode: "vertical-rl" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10"
            style={{ background: "linear-gradient(to bottom, #FF6B1A, transparent)" }}
          />
        </motion.div>
      </section>

      {/* ── TICKER ─────────────────────────────────────────────────────────── */}
      <TickerBar />

      {/* ── QUICK NAV ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 px-6 lg:px-20 py-8 os-dot-grid"
        style={{ borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.01)" }}>
        <div className="flex flex-wrap gap-3 items-center">
          <span className="os-font-mono text-xs tracking-widest mr-4" style={{ color: "rgba(255,255,255,0.25)" }}>JUMP TO —</span>
          {services.map((s) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="os-font-mono text-xs px-4 py-2 rounded-full transition-all duration-300"
              style={{
                background: `${s.accent}12`,
                border: `1px solid ${s.accent}40`,
                color: s.accent,
              }}
            >
              {s.index} · {s.tag}
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── SERVICE SECTIONS ───────────────────────────────────────────────── */}
      <div className="relative" style={{ background: "var(--bg)" }}>
        <div className="absolute inset-0 os-dot-grid opacity-[0.04] pointer-events-none" />
        {services.map((service, i) => (
          <div key={service.id} id={service.id}>
            <ServiceSection service={service} index={i} />
          </div>
        ))}
      </div>

      {/* ── CTA STRIP ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 lg:py-36 px-6 lg:px-20"
        style={{ borderTop: "1px solid var(--border)" }}>

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
            alt="CTA"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.1) saturate(0.3)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(6,8,16,0.97) 0%, rgba(6,8,16,0.88) 100%)" }} />
        </div>

        {/* Ambient orbs — all 5 colours */}
        {[
          ["#FF6B1A", "top-1/4 left-1/4"],
          ["#A78BFF", "top-1/3 left-1/2"],
          ["#34EFA0", "bottom-1/3 right-1/3"],
          ["#FBBF24", "top-1/2 right-1/4"],
          ["#38BDF8", "bottom-1/4 left-1/3"],
        ].map(([color, pos], i) => (
          <div key={i} className={`absolute w-64 h-64 rounded-full pointer-events-none ${pos}`}
            style={{ background: `radial-gradient(circle, ${color}08 0%, transparent 70%)`, filter: "blur(35px)" }} />
        ))}

        <div className="absolute inset-0 os-dot-grid opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <span className="w-8 h-px" style={{ background: "#FF6B1A" }} />
            <span className="os-font-mono text-xs tracking-[5px] uppercase" style={{ color: "#FF6B1A" }}>
              Let's Build Together
            </span>
            <span className="w-8 h-px" style={{ background: "#FF6B1A" }} />
          </motion.div>

          <div className="overflow-hidden mb-3">
            <motion.h2
              initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="os-font-display text-[clamp(42px,7.5vw,105px)] leading-none text-white"
            >
              NOT SURE WHERE
            </motion.h2>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
              className="os-font-display text-[clamp(42px,7.5vw,105px)] leading-none os-shimmer-hero"
            >
              TO START?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
            className="text-sm lg:text-base leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Let's have a conversation. We'll listen to your goals and recommend
            the exact mix of services that will drive your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full os-font-body font-bold text-sm text-black transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #FF6B1A, #FFAC5F)", boxShadow: "0 0 50px rgba(255,107,26,0.35)" }}
            >
              Book a Free Consultation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </motion.a>
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full os-font-body font-semibold text-sm transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.13)", color: "rgba(255,255,255,0.68)", background: "rgba(255,255,255,0.03)" }}
            >
              View Our Portfolio
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}