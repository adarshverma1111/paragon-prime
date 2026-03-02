import { motion } from "framer-motion";

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
        </div>
      </div>
    ),
  },
  {
    id: 5,
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
          <span className="text-black font-bold text-xs">+</span>
        </div>
        <div>
          <div className="text-white font-black text-sm">PathVets</div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    logo: (
      <div className="flex flex-col items-start">
        <div className="text-white font-black text-xl tracking-wider italic">
          FARIDWAR DELHI
        </div>
        <div className="text-white text-[9px] tracking-widest">
          ALWAYS ON DUTY!
        </div>
      </div>
    ),
  },
  {
    id: 7,
    logo: (
      <div className="flex flex-col items-center justify-center">
        <div className="text-white font-black text-3xl">GO</div>
        <div className="text-white font-black text-2xl">Contest</div>
      </div>
    ),
  },
  {
    id: 8,
    logo: (
      <div className="text-white font-bold text-2xl tracking-widest">
        GLOBE
      </div>
    ),
  },
  {
    id: 9,
    logo: (
      <div className="text-white font-black text-2xl">
        GetMeCab
      </div>
    ),
  },
  {
    id: 10,
    logo: (
      <div className="text-white font-bold text-lg">
        Dr Lal PathLabs
      </div>
    ),
  },
  {
    id: 11,
    logo: (
      <div className="text-white font-black text-xl">
        AUTHBRIDGE
      </div>
    ),
  },
  {
    id: 12,
    logo: (
      <div className="text-white font-bold">
        Trusted Partner
      </div>
    ),
  },
];

const row1 = clients.slice(0, 6);
const row2 = clients.slice(6, 12);

function MarqueeRow({ items, reverse = false, speed = 30 }) {
  const doubled = [...items, ...items];

  return (
    <motion.div
      className="overflow-hidden w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div
        className="flex gap-6 md:gap-12 items-center"
        style={{
          width: "max-content",
          animation: `${reverse ? "marqueeReverse" : "marquee"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((client, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center min-w-[120px] md:min-w-[160px] h-20 px-2 md:px-4 opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
          >
            {client.logo}
          </motion.div>
        ))}
      </div>
    </motion.div>
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

      <motion.div
        className="max-w-7xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div>
          <p className="text-blue-500 font-semibold text-base mb-2 tracking-wide">
            Our Clients
          </p>

          <h2 className="text-white font-bold text-3xl md:text-4xl leading-tight">
            Loved by Startups, Trusted by
            <br className="hidden md:block"/>
            Enterprises
          </h2>
        </div>

        <div className="md:pt-2">
          <p className="text-gray-400 text-sm italic leading-relaxed md:text-right">
            Our clients trust us to turn ideas into impactful digital solutions.
            From strategy to execution, we deliver results that exceed expectations.
          </p>
        </div>
      </motion.div>

      <div className="mb-6 border-t border-b border-gray-800 py-4">
        <MarqueeRow items={row1} reverse={false} speed={28} />
      </div>

      <div className="border-t border-b border-gray-800 py-4">
        <MarqueeRow items={row2} reverse={true} speed={32} />
      </div>

    </section>
  );
}