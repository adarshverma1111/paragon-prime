import { useState } from "react";
import { motion } from "framer-motion";

/* ---------------- THEME COLORS ---------------- */
const THEME = {
  bg: "linear-gradient(155deg, #0B0F19 0%, #0F172A 50%, #111827 100%)",
  blue: "#3B82F6",
  orange: "#F97316",
  text: "#E5E7EB",
  subText: "#9CA3AF",
};

const technologies = [
  {
    name: "JavaScript",
    color: "#F7DF1E",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#F7DF1E" rx="4" />
        <text x="4" y="26" fontSize="22" fontWeight="bold" fill="#000" fontFamily="monospace">JS</text>
      </svg>
    ),
  },
  {
    name: ".NET",
    color: "#512BD4",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#512BD4" rx="4" />
        <text x="3" y="22" fontSize="13" fontWeight="bold" fill="#fff" fontFamily="monospace">.NET</text>
      </svg>
    ),
  },
  {
    name: "Kotlin",
    color: "#7F52FF",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <defs>
          <linearGradient id="kotlinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F52FF" />
            <stop offset="50%" stopColor="#C811E1" />
            <stop offset="100%" stopColor="#E44857" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" fill="url(#kotlinGrad)" rx="4" />
        <polygon points="2,2 18,2 2,18" fill="white" opacity="0.9" />
        <polygon points="2,18 18,2 30,30 2,30" fill="white" opacity="0.9" />
      </svg>
    ),
  },
  {
    name: "Laravel",
    color: "#FF2D20",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#FF2D20" rx="4" />
        <text x="6" y="22" fontSize="18" fontWeight="bold" fill="#fff" fontFamily="serif">L</text>
      </svg>
    ),
  },
  {
    name: "Cloud Services",
    color: "#4A9FE0",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#4A9FE0" rx="4" />
        <path d="M8 22 Q6 22 6 18 Q6 14 10 14 Q10 9 16 9 Q22 9 22 14 Q26 14 26 18 Q26 22 24 22 Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#339933" rx="4" />
        <polygon points="16,4 28,10 28,22 16,28 4,22 4,10" fill="#215732" />
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#20232A" rx="4" />
        <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
        <ellipse cx="16" cy="16" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="11" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(-60 16 16)" />
      </svg>
    ),
  },
  {
    name: "PHP",
    color: "#777BB4",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#777BB4" rx="4" />
        <text x="4" y="21" fontSize="14" fontWeight="bold" fill="#fff" fontFamily="monospace">php</text>
      </svg>
    ),
  },
  {
    name: "Dart",
    color: "#0175C2",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#0175C2" rx="4" />
        <polygon points="8,4 24,4 28,8 16,16" fill="#29B6F6" />
        <polygon points="4,8 8,4 16,16 4,24" fill="#40C4FF" />
        <polygon points="4,24 16,16 28,28 8,28" fill="#01579B" />
        <polygon points="16,16 28,8 28,28" fill="#0288D1" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#0EA5E9" rx="4" />
        <path d="M8 18 Q10 10 16 12 Q18 14 16 18 Q14 22 20 20 Q24 18 24 12" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 22 Q6 14 12 16 Q14 18 12 22 Q10 26 16 24 Q20 22 20 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Java",
    color: "#E76F00",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#E76F00" rx="4" />
        <path d="M16 6 Q20 10 18 14 Q16 17 12 20 Q16 18 20 20 Q22 21 20 23 Q18 24 14 24 Q18 25 22 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 26 Q16 28 22 26" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#3776AB" rx="4" />
        <path d="M16 4 Q10 4 10 10 L10 14 L22 14 L22 16 L8 16 Q4 16 4 22 L4 24 Q4 28 10 28 L16 28 Q22 28 22 22 L22 18 L10 18 L10 16 L22 16 L22 10 Q22 4 16 4 Z" fill="white" opacity="0.9" />
        <circle cx="13" cy="9" r="1.5" fill="#3776AB" />
        <circle cx="19" cy="23" r="1.5" fill="#FFD43B" />
      </svg>
    ),
  },
  {
    name: "Flutter",
    color: "#54C5F8",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#0553B1" rx="4" />
        <polygon points="8,16 20,4 26,4 14,16 26,28 20,28" fill="#54C5F8" />
        <polygon points="14,22 20,28 26,28 20,22" fill="#01579B" />
        <polygon points="14,16 20,22 26,22 20,16" fill="#29B6F6" />
      </svg>
    ),
  },
  {
    name: "HTML",
    color: "#E44D26",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#E44D26" rx="4" />
        <text x="3" y="22" fontSize="11" fontWeight="bold" fill="#fff" fontFamily="monospace">HTML</text>
      </svg>
    ),
  },
  {
    name: "Bootstrap",
    color: "#7952B3",
    svg: (
      <svg viewBox="0 0 32 32" className="w-10 h-10 sm:w-14 sm:h-14">
        <rect width="32" height="32" fill="#7952B3" rx="4" />
        <text x="8" y="23" fontSize="18" fontWeight="bold" fill="#fff" fontFamily="serif">B</text>
      </svg>
    ),
  },
];;

function TechCard({ tech, index }) {
  const [hovered, setHovered] = useState(false);

  const accent = index % 2 === 0 ? THEME.blue : THEME.orange;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        type: "spring",
        stiffness: 90,
      }}
      className="relative cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow bloom behind card */}
      <div
        className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 60%, ${accent}55, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          filter: "blur(16px)",
          transform: "scale(1.15) translateY(4px)",
          transition: "opacity 0.4s ease",
        }}
      />

      <div
        className="relative flex flex-col items-center justify-center gap-2 p-3 sm:p-6 rounded-xl sm:rounded-2xl overflow-hidden"
        style={{
          background: hovered
            ? `linear-gradient(160deg, ${accent}15 0%, ${accent}08 60%, #0F172A 100%)`
            : "linear-gradient(160deg, #111827, #0F172A)",
          boxShadow: hovered
            ? `0 20px 50px ${accent}40, 0 4px 16px rgba(0,0,0,0.6)`
            : "0 2px 10px rgba(0,0,0,0.6)",
          border: `1.5px solid ${hovered ? accent + "66" : "#1F2937"}`,
          transform: hovered ? "translateY(-8px) scale(1.05)" : "translateY(0) scale(1)",
          transition: "all 0.35s cubic-bezier(0.34, 1.4, 0.64, 1)",
        }}
      >
        {/* Shimmer stripe on hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 40%, ${accent}22 50%, transparent 60%)`,
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        />

        {/* Icon */}
        <div
          style={{
            transition:
              "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.3s ease",
            transform: hovered
              ? "rotate(-8deg) scale(1.18)"
              : "rotate(0deg) scale(1)",
            filter: hovered
              ? `drop-shadow(0 6px 18px ${accent})`
              : "drop-shadow(0 2px 6px rgba(0,0,0,0.5))",
          }}
        >
          {tech.svg}
        </div>

        {/* Label */}
        <span
          className="text-xs sm:text-sm font-semibold text-center"
          style={{
            color: hovered ? accent : THEME.text,
            textShadow: hovered ? `0 0 16px ${accent}` : "none",
            transition: "all 0.3s ease",
          }}
        >
          {tech.name}
        </span>

        {/* Glowing bottom bar */}
        <div
          className="absolute bottom-0 left-1/2 rounded-t-full"
          style={{
            height: "3px",
            width: hovered ? "55%" : "0%",
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            transform: "translateX(-50%)",
            boxShadow: hovered ? `0 0 12px 2px ${accent}` : "none",
            transition: "width 0.35s ease, box-shadow 0.35s ease",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
      style={{
        background: THEME.bg,
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12 max-w-2xl relative z-10"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-white">
          Technology{" "}
          <span
            style={{
              background: `linear-gradient(90deg, ${THEME.blue}, ${THEME.orange})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Stack
          </span>{" "}
          We Use
        </h2>

        <p className="text-sm sm:text-lg leading-relaxed" style={{ color: THEME.subText }}>
          We leverage cutting-edge technologies and frameworks to build robust,
          scalable, and innovative solutions that drive your business forward.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-4 md:grid-cols-5 gap-3 sm:gap-5 w-full max-w-6xl relative z-10">
        {technologies.map((tech, i) => (
          <TechCard key={tech.name} tech={tech} index={i} />
        ))}
      </div>
    </section>
  );
}



















