import { useState } from "react";

const steps = [
  {
    id: 1,
    label: "DISCUSS",
    color: "#1a3a6b",
    accent: "#f5a623",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <circle cx="12" cy="10" r="3" />
        <path d="M12 13v2" />
        <path d="M9 21H7a2 2 0 01-2-2v-1a5 5 0 0110 0v1a2 2 0 01-2 2h-2" />
        <path d="M12 3a1 1 0 000 2" />
      </svg>
    ),
    iconAlt: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "DESIGN",
    color: "#f5a623",
    accent: "#1a3a6b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M6 7h4M6 10h8" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "DEVELOP",
    color: "#1a3a6b",
    accent: "#f5a623",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "DELIVERY",
    color: "#f5a623",
    accent: "#1a3a6b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M12 2L8 6H5a2 2 0 00-2 2v8a2 2 0 002 2h3l4 4 4-4h3a2 2 0 002-2V8a2 2 0 00-2-2h-3L12 2z" />
        <path d="M12 6v6M9 9l3-3 3 3" />
      </svg>
    ),
    iconAlt: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10">
        <path d="M12 19V5M12 5l-4 4M12 5l4 4" />
        <path d="M5 19h14" />
      </svg>
    ),
  },
];

// Connector SVG for desktop (zigzag S-curve between cards)
function Connector({ flip, color }) {
  return (
    <div className="hidden lg:flex items-center justify-center w-20 xl:w-28 flex-shrink-0 relative" style={{ height: 120 }}>
      <svg viewBox="0 0 80 100" className="w-full h-full" fill="none">
        <path
          d={flip
            ? "M 0 20 Q 20 20 40 50 Q 60 80 80 80"
            : "M 0 80 Q 20 80 40 50 Q 60 20 80 20"}
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

// Mobile vertical connector
function MobileConnector({ flip, color }) {
  return (
    <div className="flex lg:hidden justify-center items-center" style={{ height: 48 }}>
      <svg viewBox="0 0 60 48" className="w-16 h-12" fill="none">
        <path
          d={flip
            ? "M 10 0 Q 10 24 30 24 Q 50 24 50 48"
            : "M 50 0 Q 50 24 30 24 Q 10 24 10 48"}
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const isDark = step.color === "#1a3a6b";

  return (
    <div
      className="flex flex-col items-center"
      style={{
        animation: `fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both`,
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Step number badge */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mb-3 shadow-md transition-all duration-300"
        style={{
          background: step.color,
          color: "white",
          transform: hovered ? "scale(1.2)" : "scale(1)",
          boxShadow: hovered ? `0 4px 16px ${step.color}80` : "0 2px 6px rgba(0,0,0,0.2)",
        }}
      >
        {step.id}
      </div>

      {/* Card */}
      <div
        className="relative cursor-pointer rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-400"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: "clamp(100px, 18vw, 160px)",
          height: "clamp(100px, 18vw, 160px)",
          background: hovered
            ? `linear-gradient(145deg, ${step.color}ee, ${step.color})`
            : `linear-gradient(145deg, ${step.color}dd, ${step.color})`,
          boxShadow: hovered
            ? `0 20px 50px ${step.color}70, 0 8px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)`
            : `0 6px 24px ${step.color}50, 0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)`,
          border: hovered
            ? `2px solid ${isDark ? "#f5a62370" : "rgba(255,255,255,0.4)"}`
            : `2px solid ${isDark ? "#f5a62330" : "rgba(255,255,255,0.2)"}`,
          transform: hovered ? "translateY(-10px) scale(1.06)" : "translateY(0) scale(1)",
          borderRadius: isDark ? "1rem" : "1.25rem",
        }}
      >
        {/* Glow ring on hover */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-400"
          style={{
            boxShadow: hovered ? `inset 0 0 30px ${isDark ? "#f5a62325" : "rgba(255,255,255,0.15)"}` : "none",
          }}
        />

        {/* Icon */}
        <div
          style={{
            transform: hovered ? "scale(1.2) rotate(-5deg)" : "scale(1) rotate(0deg)",
            transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            filter: hovered ? "drop-shadow(0 4px 8px rgba(0,0,0,0.3))" : "none",
          }}
        >
          {step.icon}
        </div>

        {/* Label */}
        <span
          className="font-black tracking-widest text-white text-center leading-none"
          style={{
            fontSize: "clamp(9px, 1.4vw, 13px)",
            textShadow: "0 1px 4px rgba(0,0,0,0.3)",
            letterSpacing: "0.1em",
          }}
        >
          {step.label}
        </span>

        {/* Shine sweep */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <div
            className="absolute"
            style={{
              top: "-50%", left: "-60%",
              width: "60%", height: "200%",
              background: "linear-gradient(105deg, transparent, rgba(255,255,255,0.18), transparent)",
              transform: hovered ? "translateX(300%)" : "translateX(0)",
              transition: "transform 0.6s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function SoftwareProcess() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800;900&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes arrowSlide {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(6px); }
        }
        @keyframes waveDrift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden"
        style={{
          background: "#dff0f8",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {/* Wave lines background */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <path
              key={i}
              d={`M -100 ${80 + i * 60} Q 200 ${60 + i * 60} 500 ${90 + i * 60} Q 800 ${120 + i * 60} 1100 ${80 + i * 60} Q 1400 ${50 + i * 60} 1700 ${85 + i * 60}`}
              fill="none"
              stroke="#90c8e8"
              strokeWidth="1"
            />
          ))}
        </svg>

        {/* Title */}
        <div
          className="text-center mb-10 sm:mb-14 relative z-10"
          style={{ animation: "fadeUp 0.7s ease both" }}
        >
          <h2
            className="font-black leading-tight"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              color: "#0f1f4b",
              letterSpacing: "-0.01em",
            }}
          >
           Our Software<br />Development Process
          </h2>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-center relative z-10 w-full max-w-5xl">
          {/* Left arrow */}
          <div className="flex items-center mr-2" style={{ animation: "arrowSlide 2s ease-in-out infinite" }}>
            <div className="w-8 h-0.5 bg-gray-500" />
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-gray-500" style={{ borderLeftColor: "#555" }} />
          </div>

          {steps.map((step, i) => (
            <div key={step.id} className="flex items-center">
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && (
                <Connector
                  flip={i % 2 === 0}
                  color={i % 2 === 0 ? "#f5a623" : "#1a3a6b"}
                />
              )}
            </div>
          ))}

          {/* Right arrow */}
          <div className="flex items-center ml-2" style={{ animation: "arrowSlide 2s ease-in-out infinite" }}>
            <div className="w-8 h-0.5" style={{ background: "#f5a623" }} />
            <div className="w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent" style={{ borderLeftColor: "#f5a623" }} />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex lg:hidden flex-col items-center relative z-10 w-full max-w-xs">
          {steps.map((step, i) => (
            <div key={step.id} className="flex flex-col items-center w-full">
              <div className={`flex w-full items-center ${i % 2 === 0 ? "justify-start pl-8" : "justify-end pr-8"}`}>
                <StepCard step={step} index={i} />
              </div>
              {i < steps.length - 1 && (
                <MobileConnector
                  flip={i % 2 === 0}
                  color={i % 2 === 0 ? "#f5a623" : "#1a3a6b"}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom tagline */}
        <p
          className="mt-10 text-center text-sm sm:text-base font-medium relative z-10"
          style={{ color: "#4a6fa5", animation: "fadeUp 0.8s 0.6s ease both", opacity: 0 }}
        >
          From idea to launch — we've got every step covered.
        </p>
      </section>
    </>
  );
}