import { useEffect, useRef } from "react";

// ── Animated Tech Orb (right side visual) ─────────────────────────────────────
const TechOrb = ({ size = 380 }) => {
  const outerR  = size * 0.447;   // ~170 at 380
  const innerR  = size * 0.289;   // ~110 at 380
  const coreS   = size * 0.342;   // ~130 at 380
  const glowS   = size * 0.526;   // ~200 at 380
  const orbIcons = [
    { icon: "💻", label: "Dev",     deg: 0   },
    { icon: "📱", label: "Mobile",  deg: 45  },
    { icon: "🌐", label: "Web",     deg: 90  },
    { icon: "☁️", label: "Cloud",   deg: 135 },
    { icon: "🔒", label: "Security",deg: 180 },
    { icon: "📊", label: "Analytics",deg:225 },
    { icon: "⚙️", label: "Systems", deg: 270 },
    { icon: "🚀", label: "Launch",  deg: 315 },
  ];

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <style>{`
        @keyframes spinOrbit  { from { transform: rotate(0deg); }   to { transform: rotate(360deg); } }
        @keyframes spinReverse{ from { transform: rotate(0deg); }   to { transform: rotate(-360deg); } }
        @keyframes spinOrbit2 { from { transform: rotate(45deg); }  to { transform: rotate(405deg); } }
        @keyframes pulseGlow  { 0%,100%{box-shadow:0 0 40px 8px #f9731640,0 0 80px 16px #1d4ed820;} 50%{box-shadow:0 0 60px 16px #f9731660,0 0 120px 32px #1d4ed840;} }
        @keyframes floatY     { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
        @keyframes fadeInUp   { from{opacity:0;transform:translateY(24px);} to{opacity:1;transform:translateY(0);} }

        .orbit-ring { animation: spinOrbit 18s linear infinite; }
        .orbit-ring-2 { animation: spinOrbit2 26s linear infinite; }
        .icon-counter { animation: spinReverse 18s linear infinite; }
        .icon-counter-2 { animation: spinReverse 26s linear infinite; }
        .core-glow { animation: pulseGlow 3s ease-in-out infinite; }
        .float-hero { animation: floatY 4s ease-in-out infinite; }
        .fade-up { animation: fadeInUp 0.7s ease both; }

        .orbit-icon {
          position: absolute;
          width: 48px; height: 48px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          background: rgba(10,15,35,0.9);
          border: 1px solid rgba(249,115,22,0.4);
          box-shadow: 0 0 12px rgba(249,115,22,0.2);
          transition: transform 0.3s;
          top: 50%; left: 50%;
          transform-origin: center;
        }
      `}</style>

      {/* Outer orbit ring */}
      <div className="orbit-ring absolute" style={{ width: outerR*2, height: outerR*2, borderRadius: "50%", border: "1px dashed rgba(249,115,22,0.25)" }}>
        {orbIcons.map(({ icon, deg }, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * outerR;
          const y = Math.sin(rad) * outerR;
          return (
            <div key={i} className="icon-counter orbit-icon" style={{
              marginLeft: x - 24, marginTop: y - 24,
            }}>
              {icon}
            </div>
          );
        })}
      </div>

      {/* Inner orbit ring */}
      <div className="orbit-ring-2 absolute" style={{ width: innerR*2, height: innerR*2, borderRadius: "50%", border: "1px solid rgba(59,130,246,0.2)" }}>
        {[0, 90, 180, 270].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = Math.cos(rad) * innerR;
          const y = Math.sin(rad) * innerR;
          return (
            <div key={i} className="icon-counter-2" style={{
              position: "absolute", top: "50%", left: "50%",
              marginLeft: x - 6, marginTop: y - 6,
              width: 12, height: 12, borderRadius: "50%",
              background: i % 2 === 0 ? "#f97316" : "#3b82f6",
              boxShadow: `0 0 8px ${i % 2 === 0 ? "#f97316" : "#3b82f6"}`,
            }}/>
          );
        })}
      </div>

      {/* Core center */}
      <div className="core-glow float-hero absolute" style={{
        width: coreS, height: coreS, borderRadius: "50%",
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        border: "2px solid rgba(249,115,22,0.6)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        zIndex: 10,
      }}>
        <div style={{ fontSize: 36 }}>🏢</div>
        <div style={{ fontSize: 10, color: "#f97316", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
          Paragonprime
        </div>
      </div>

      {/* Glow backdrop */}
      <div className="absolute" style={{
        width: glowS, height: glowS, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
        zIndex: 1,
      }}/>
    </div>
  );
};

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "250+", label: "Projects" },
  { value: "4+",   label: "Years"    },
  { value: "98%",  label: "Clients"  },
];

// ── Highlights ────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  "Custom Software Development",
  "Website Development",
  "Mobile App Development",
  "Web Applications",
];

// ── Hero Section ──────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section style={{
      background: "linear-gradient(135deg, #000000 0%, #050d1a 50%, #000a14 100%)",
      minHeight: "100vh", fontFamily: "system-ui, sans-serif",
      position: "relative", overflow: "hidden",
    }} className="flex items-center">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Outfit', system-ui, sans-serif; }

        .tag-chip {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 12px; border-radius: 99px; font-size: 11px;
          font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
          border: 1px solid rgba(249,115,22,0.3);
          background: rgba(249,115,22,0.07);
          color: #fb923c;
          transition: all 0.25s;
        }
        .tag-chip:hover { background: rgba(249,115,22,0.15); border-color: rgba(249,115,22,0.6); }

        .highlight-item {
          display: flex; align-items: center; gap: 8px;
          color: #94a3b8; font-size: 14px; padding: 4px 0;
          transition: color 0.2s;
        }
        .highlight-item:hover { color: #f97316; }

        .stat-card {
          text-align: center; padding: 16px 24px;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);
          transition: border-color 0.3s, background 0.3s;
        }
        .stat-card:hover { border-color: rgba(249,115,22,0.4); background: rgba(249,115,22,0.05); }

        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: white; border: none; cursor: pointer;
          box-shadow: 0 4px 24px rgba(249,115,22,0.35);
          transition: all 0.3s;
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(249,115,22,0.5); }

        .btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px;
          background: transparent; color: #94a3b8;
          border: 1px solid rgba(255,255,255,0.12); cursor: pointer;
          transition: all 0.3s;
        }
        .btn-secondary:hover { border-color: rgba(59,130,246,0.5); color: #93c5fd; }

        /* Grid lines bg */
        .grid-bg::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        @keyframes fadeInLeft  { from{opacity:0;transform:translateX(-32px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeInRight { from{opacity:0;transform:translateX(32px)}  to{opacity:1;transform:translateX(0)} }
        .anim-left  { animation: fadeInLeft  0.8s ease both; }
        .anim-right { animation: fadeInRight 0.9s ease 0.2s both; }
      `}</style>

      {/* Grid bg overlay */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      {/* Orange radial glow top-left */}
      <div className="absolute" style={{
        top: "-10%", left: "-5%", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>

      {/* Blue radial glow bottom-right */}
      <div className="absolute" style={{
        bottom: "-10%", right: "5%", width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }}/>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left Content ── */}
          <div className="anim-left flex-1 max-w-xl">

            {/* Badge */}
            <div className="tag-chip mb-6" style={{ display: "inline-flex" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#f97316" }} className="animate-pulse" />
              Welcome to Paragon Prime
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 900, lineHeight: 1.08, margin: "0 0 20px", color: "#f1f5f9" }}>
              <span style={{ color: "#f97316" }}>Paragon</span>{" "}
              <span style={{ color: "#ffffff" }}>Prime</span>
              <br />
              <span style={{ color: "#93c5fd", fontSize: "0.65em", fontWeight: 700 }}></span>
            </h1>

            {/* Description */}
            <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.75, margin: "0 0 24px" }}>
              A passionate team of technology experts dedicated to transforming businesses through innovative software solutions.
              Bridging complex technology with simple, effective business outcomes — with <strong style={{ color: "#f97316" }}>250+ projects</strong> delivered since 2020.
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: 28 }}>
              {HIGHLIGHTS.map((item, i) => (
                <div className="highlight-item" key={i}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="7" fill="rgba(249,115,22,0.15)"/>
                    <path d="M4 7l2 2 4-4" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
              {STATS.map(({ value, label }) => (
                <div className="stat-card" key={label}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#f97316", lineHeight: 1 }}>{value}</div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                Our Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* ── Right Visual ── */}
          <div className="anim-right flex-1 flex items-center justify-center">
            {/* Mobile: 380, Desktop: 520 */}
            <div className="block lg:hidden"><TechOrb size={320} /></div>
            <div className="hidden lg:block"><TechOrb size={520} /></div>
          </div>

        </div>
      </div>
    </section>
  );
}