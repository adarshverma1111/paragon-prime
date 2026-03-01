import { useEffect, useRef } from "react";

const clients = [
  {
    id: 1,
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-1">
          <svg viewBox="0 0 20 20" className="w-5 h-5" fill="white">
            {[0,1,2,3,4,5,6,7].map(i => (
              <circle key={i} cx={10 + 7*Math.cos(i*Math.PI/4)} cy={10 + 7*Math.sin(i*Math.PI/4)} r="1.2" fill="white"/>
            ))}
            <circle cx="10" cy="10" r="1.5" fill="white"/>
          </svg>
          <div>
            <div className="text-white font-bold text-sm tracking-widest uppercase">oncquest</div>
            <div className="text-white text-[9px] tracking-wider">laboratories</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    logo: (
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center relative">
          <svg viewBox="0 0 60 60" className="w-14 h-14">
            <circle cx="30" cy="30" r="28" fill="black" stroke="white" strokeWidth="2"/>
            <circle cx="30" cy="32" r="12" fill="none" stroke="white" strokeWidth="2"/>
            <rect x="24" y="26" width="12" height="9" rx="2" fill="white"/>
            <circle cx="22" cy="33" r="3" fill="white"/>
            <circle cx="38" cy="33" r="3" fill="white"/>
            <path d="M38 10 Q46 22 44 30" stroke="white" strokeWidth="1.5" fill="none"/>
            <text x="32" y="16" fill="white" fontSize="5" fontWeight="bold">One</text>
            <text x="32" y="22" fill="white" fontSize="5" fontWeight="bold">Way</text>
            <text x="30" y="50" fill="white" fontSize="5" fontWeight="bold" textAnchor="middle">Travel</text>
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    logo: (
      <div className="text-white font-black text-3xl tracking-tight">
        OpsGrid
      </div>
    ),
  },
  {
    id: 4,
    logo: (
      <div className="flex flex-col items-center">
        <div className="text-white text-xs font-semibold tracking-wider">Paliwal</div>
        <div className="flex items-center gap-1 mt-0.5">
          <div className="border border-white px-1 py-0.5">
            <span className="text-white text-[8px] font-bold">Deepnoter</span>
            <span className="text-white text-[8px]"> Pvt Ltd</span>
          </div>
          <span className="text-white text-[8px]">Dr. Lal PathLabs</span>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="black">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div>
          <div className="text-white font-black text-sm tracking-wide">Pathkind<span className="text-white">▶▶</span></div>
          <div className="text-white text-[9px] tracking-wider">Labs</div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <span className="text-black font-black text-xs">+</span>
        </div>
        <div>
          <div className="text-white font-black text-sm">PathVets</div>
          <div className="text-white text-[8px]">A venture of Dr. Lal PathLabs</div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    logo: (
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-1 text-white text-[9px]">
          <span>🚕</span>
          <span className="tracking-widest">Taxi Service</span>
        </div>
        <div className="text-white font-black text-xl leading-tight tracking-wider italic">FARIDWAR DELHI</div>
        <div className="text-white text-[9px] tracking-widest">ALWAYS ON DUTY!</div>
      </div>
    ),
  },
  {
    id: 8,
    logo: (
      <div className="flex flex-col items-center justify-center leading-none">
        <div className="text-white font-black" style={{ fontSize: "3rem", lineHeight: 1 }}>GO</div>
        <div className="text-white font-black text-2xl" style={{ lineHeight: 1 }}>Contest</div>
      </div>
    ),
  },
  {
    id: 9,
    logo: (
      <div className="flex items-center text-white font-bold text-2xl tracking-widest">
        GL
        <div className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center mx-0.5">
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" fill="none"/>
            <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" stroke="white" strokeWidth="1.2" fill="none"/>
            <path d="M8 8 C8 8 10 10 12 8 C14 6 16 8 16 8" stroke="white" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        BE
      </div>
    ),
  },
  {
    id: 10,
    logo: (
      <div className="flex flex-col items-center">
        <div className="text-white font-black text-2xl tracking-tight">
          GetMe<span className="border border-white px-0.5">Cab</span>
        </div>
        <div className="text-white text-[9px] tracking-wider mt-0.5">Making Holidays Memorable</div>
      </div>
    ),
  },
  {
    id: 11,
    logo: (
      <div className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: "serif" }}>
        ≋ Dr Lal PathLabs
      </div>
    ),
  },
  {
    id: 12,
    logo: (
      <div className="flex flex-col items-start">
        <div className="text-white font-black text-xl tracking-widest">
          <span className="text-white">A</span>UTHBRIDGE
        </div>
        <div className="text-white text-[9px] tracking-wider">Building trust through data</div>
      </div>
    ),
  },
];

const row1 = clients.slice(0, 6);
const row2 = clients.slice(6, 12);

function MarqueeRow({ items, reverse = false, speed = 30 }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-6 md:gap-12 items-center`}
        style={{
          width: "max-content",
          animation: `${reverse ? "marqueeReverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex items-center justify-center min-w-[120px] md:min-w-[160px] h-20 px-2 md:px-4 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
          >
            {client.logo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurClients() {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-12 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div>
          <p className="text-blue-500 font-semibold text-base mb-2 tracking-wide">Our Clients</p>
          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
            Loved by Startups, Trusted by<br className="hidden md:block"/> Enterprises
          </h2>
        </div>
        <div className="md:pt-2">
          <p className="text-gray-400 text-sm italic leading-relaxed md:text-right">
            Our clients trust us to turn ideas into impactful digital solutions. From strategy to execution, we deliver results that exceed expectations.
          </p>
        </div>
      </div>

      <div className="mb-6 border-t border-b border-gray-800 py-4">
        <MarqueeRow items={row1} reverse={false} speed={28} />
      </div>

      <div className="border-t border-b border-gray-800 py-4">
        <MarqueeRow items={row2} reverse={true} speed={32} />
      </div>

    </section>
  );
}
