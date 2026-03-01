'use client';
import { useRef, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

gsap.registerPlugin(InertiaPlugin);

// ── DotGrid ───────────────────────────────────────────────────────────────────

const throttle = (fn, limit) => {
  let last = 0;
  return (...args) => {
    const now = performance.now();
    if (now - last >= limit) { last = now; fn(...args); }
  };
};

const hexToRgb = hex => {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  return m ? { r: parseInt(m[1],16), g: parseInt(m[2],16), b: parseInt(m[3],16) } : { r:0,g:0,b:0 };
};

const DotGrid = ({
  dotSize=5, gap=15, baseColor='#271E37', activeColor='#5227FF',
  proximity=120, speedTrigger=100, shockRadius=250, shockStrength=5,
  maxSpeed=5000, resistance=750, returnDuration=1.5,
}) => {
  const wrapperRef = useRef(null);
  const canvasRef  = useRef(null);
  const dotsRef    = useRef([]);
  const pointerRef = useRef({ x:0,y:0,vx:0,vy:0,speed:0,lastTime:0,lastX:0,lastY:0 });

  const baseRgb   = useMemo(() => hexToRgb(baseColor),   [baseColor]);
  const activeRgb = useMemo(() => hexToRgb(activeColor), [activeColor]);

  const circlePath = useMemo(() => {
    if (typeof window === 'undefined' || !window.Path2D) return null;
    const p = new Path2D();
    p.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    return p;
  }, [dotSize]);

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current, canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const { width, height } = wrap.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = width  * dpr;
    canvas.height = height * dpr;
    canvas.style.width  = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(dpr, dpr);
    const cell = dotSize + gap;
    const cols = Math.floor((width  + gap) / cell);
    const rows = Math.floor((height + gap) / cell);
    const startX = (width  - (cell * cols - gap)) / 2 + dotSize / 2;
    const startY = (height - (cell * rows - gap)) / 2 + dotSize / 2;
    const dots = [];
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < cols; x++)
        dots.push({ cx: startX + x*cell, cy: startY + y*cell, xOffset:0, yOffset:0, _inertiaApplied:false });
    dotsRef.current = dots;
  }, [dotSize, gap]);

  // Draw loop
  useEffect(() => {
    if (!circlePath) return;
    let rafId;
    const proxSq = proximity * proximity;
    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x:px, y:py } = pointerRef.current;
      for (const dot of dotsRef.current) {
        const dx = dot.cx - px, dy = dot.cy - py;
        const dsq = dx*dx + dy*dy;
        let fill = baseColor;
        if (dsq <= proxSq) {
          const t = 1 - Math.sqrt(dsq) / proximity;
          fill = `rgb(${Math.round(baseRgb.r+(activeRgb.r-baseRgb.r)*t)},${Math.round(baseRgb.g+(activeRgb.g-baseRgb.g)*t)},${Math.round(baseRgb.b+(activeRgb.b-baseRgb.b)*t)})`;
        }
        ctx.save();
        ctx.translate(dot.cx + dot.xOffset, dot.cy + dot.yOffset);
        ctx.fillStyle = fill;
        ctx.fill(circlePath);
        ctx.restore();
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(rafId);
  }, [proximity, baseColor, activeRgb, baseRgb, circlePath]);

  // Resize
  useEffect(() => {
    buildGrid();
    const ro = new ResizeObserver(buildGrid);
    wrapperRef.current && ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [buildGrid]);

  // Mouse events
  useEffect(() => {
    const onMove = e => {
      const now = performance.now(), pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      let vx = ((e.clientX - pr.lastX) / dt) * 1000;
      let vy = ((e.clientY - pr.lastY) / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) { const s = maxSpeed/speed; vx*=s; vy*=s; speed=maxSpeed; }
      Object.assign(pr, { lastTime:now, lastX:e.clientX, lastY:e.clientY, vx, vy, speed });
      const rect = canvasRef.current.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < proximity && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          gsap.to(dot, {
            inertia: { xOffset: dot.cx - pr.x + vx*0.005, yOffset: dot.cy - pr.y + vy*0.005, resistance },
            onComplete: () => {
              gsap.to(dot, { xOffset:0, yOffset:0, duration:returnDuration, ease:'elastic.out(1,0.75)' });
              dot._inertiaApplied = false;
            }
          });
        }
      }
    };
    const onClick = e => {
      const rect = canvasRef.current.getBoundingClientRect();
      const cx = e.clientX - rect.left, cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist/shockRadius);
          gsap.to(dot, {
            inertia: { xOffset:(dot.cx-cx)*shockStrength*falloff, yOffset:(dot.cy-cy)*shockStrength*falloff, resistance },
            onComplete: () => {
              gsap.to(dot, { xOffset:0, yOffset:0, duration:returnDuration, ease:'elastic.out(1,0.75)' });
              dot._inertiaApplied = false;
            }
          });
        }
      }
    };
    const throttledMove = throttle(onMove, 50);
    window.addEventListener('mousemove', throttledMove, { passive:true });
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('mousemove', throttledMove);
      window.removeEventListener('click', onClick);
    };
  }, [maxSpeed, speedTrigger, proximity, resistance, returnDuration, shockRadius, shockStrength]);

  return (
    <div ref={wrapperRef} className="absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};

// ── Logos ─────────────────────────────────────────────────────────────────────

const AWSLogo = () => (
  <svg viewBox="0 0 90 50" width="90" height="50">
    <text x="5" y="34" fontSize="28" fontWeight="900" fill="#232F3E" fontFamily="Arial Black,Arial">aws</text>
    <path d="M5 40 Q30 52 65 40" stroke="#FF9900" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    <polygon points="62,36 68,40 62,44" fill="#FF9900"/>
  </svg>
);

const AzureLogo = () => (
  <svg viewBox="0 0 56 52" width="56" height="52">
    <defs>
      <linearGradient id="az1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#50E6FF"/><stop offset="100%" stopColor="#0078D4"/>
      </linearGradient>
      <linearGradient id="az2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0078D4"/><stop offset="100%" stopColor="#003A8C"/>
      </linearGradient>
    </defs>
    <polygon points="4,46 22,5 34,26 20,46" fill="url(#az1)"/>
    <polygon points="20,46 44,46 30,18" fill="url(#az2)"/>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 120 60" width="120" height="60">
    <defs>
      <linearGradient id="sf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1AB9FF"/><stop offset="100%" stopColor="#009EE3"/>
      </linearGradient>
    </defs>
    <circle cx="32" cy="36" r="16" fill="url(#sf)"/>
    <circle cx="55" cy="26" r="22" fill="url(#sf)"/>
    <circle cx="80" cy="34" r="14" fill="url(#sf)"/>
    <rect x="18" y="34" width="76" height="20" fill="url(#sf)"/>
    <text x="58" y="48" fontSize="12.5" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Arial">salesforce</text>
  </svg>
);

const GoogleCloudLogo = () => (
  <svg viewBox="0 0 150 36" width="150" height="36">
    <path d="M22,18 L14,18 L14,21.5 L19,21.5 C18.3,23.8 16.2,25.2 14,25.2 C11.1,25.2 8.8,22.9 8.8,18 C8.8,13.1 11.1,10.8 14,10.8 C15.4,10.8 16.7,11.4 17.6,12.4L20,10 C18.5,8.6 16.4,7.8 14,7.8 C9.4,7.8 5.8,11.5 5.8,18 C5.8,24.5 9.4,28.2 14,28.2 C18.9,28.2 22.2,24.5 22.2,18.2Z" fill="#4285F4"/>
    <path d="M14,10.8 C15.4,10.8 16.7,11.4 17.6,12.4L20,10 C18.5,8.6 16.4,7.8 14,7.8 C11.2,7.8 8.8,9.3 7.4,11.6L10,13.7 C10.8,12 12.3,10.8 14,10.8Z" fill="#EA4335"/>
    <path d="M7.4,11.6 C6.3,13.2 5.8,15.1 5.8,18 C5.8,20.9 6.3,22.8 7.4,24.4L10,22.3 C9.4,21.2 9,19.7 9,18 C9,16.3 9.4,14.8 10,13.7Z" fill="#FBBC05"/>
    <path d="M14,28.2 C16.4,28.2 18.5,27.4 20,26L17.6,23.7 C16.7,24.5 15.5,25.2 14,25.2 C12.3,25.2 10.8,24 10,22.3L7.4,24.4 C8.8,26.7 11.2,28.2 14,28.2Z" fill="#34A853"/>
    <circle cx="40" cy="16" r="5" fill="#4285F4"/>
    <circle cx="47" cy="12" r="7" fill="#4285F4"/>
    <circle cx="56" cy="16" r="5" fill="#4285F4"/>
    <rect x="36" y="16" width="24" height="7" fill="#4285F4"/>
    <text x="70" y="24" fontSize="13.5" fontWeight="500" fill="#9ca3af" fontFamily="Arial">Google Cloud</text>
  </svg>
);

const CopilotLogo = () => (
  <svg viewBox="0 0 52 52" width="52" height="52">
    <defs>
      <linearGradient id="co1" x1="10%" y1="0%" x2="90%" y2="100%">
        <stop offset="0%" stopColor="#C068F0"/>
        <stop offset="40%" stopColor="#9B6BF5"/>
        <stop offset="100%" stopColor="#4B8DEA"/>
      </linearGradient>
      <linearGradient id="co2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6B9FEE"/><stop offset="100%" stopColor="#9B6BF5"/>
      </linearGradient>
    </defs>
    <path d="M26,3 L44,13.5 L44,34.5 L26,45 L8,34.5 L8,13.5Z" fill="url(#co1)"/>
    <path d="M26,11 L38,17.5 L38,30.5 L26,37 L14,30.5 L14,17.5Z" fill="#000"/>
    <path d="M26,15 L35,20.5 L35,31.5 L26,37 L17,31.5 L17,20.5Z" fill="url(#co2)" opacity="0.85"/>
    <circle cx="26" cy="26" r="5" fill="#000"/>
    <circle cx="26" cy="26" r="3" fill="url(#co1)"/>
  </svg>
);

const IBMLogo = () => (
  <svg viewBox="0 0 80 26" width="80" height="26">
    {[0,5,10,15].map(y => <rect key={`i${y}`} x="1"  y={y} width="11" height="3.5" fill="#1F70C1" rx="0.8"/>)}
    {[3.5,8.5,13.5].map(y => <rect key={`ig${y}`} x="1" y={y} width="11" height="1.5" fill="#000"/>)}
    {[0,5,10,15].map(y => <rect key={`b${y}`} x="16" y={y} width="14" height="3.5" fill="#1F70C1" rx="0.8"/>)}
    <rect x="30" y="0" width="3" height="9"  fill="#1F70C1"/>
    <rect x="30" y="12" width="3" height="7" fill="#1F70C1"/>
    {[3.5,13.5].map(y => <rect key={`bg${y}`} x="16" y={y} width="17" height="1.5" fill="#000"/>)}
    {[0,5,10,15].map(y => <rect key={`m${y}`}  x="38" y={y} width="11" height="3.5" fill="#1F70C1" rx="0.8"/>)}
    {[0,5,10,15].map(y => <rect key={`m2${y}`} x="57" y={y} width="11" height="3.5" fill="#1F70C1" rx="0.8"/>)}
    <rect x="49" y="0" width="8" height="3.5" fill="#1F70C1"/>
    {[3.5,8.5,13.5].map(y => <rect key={`mg${y}`}  x="38" y={y} width="11" height="1.5" fill="#000"/>)}
    {[3.5,8.5,13.5].map(y => <rect key={`m2g${y}`} x="57" y={y} width="11" height="1.5" fill="#000"/>)}
  </svg>
);

// ── Partners data ─────────────────────────────────────────────────────────────

const PARTNERS = [
  { name: 'Amazon Web Services', logo: <AWSLogo />,         accent: '#FF9900' },
  { name: 'Microsoft Azure',     logo: <AzureLogo />,       accent: '#0078D4' },
  { name: 'Salesforce',          logo: <SalesforceLogo />,  accent: '#00A1E0' },
  { name: 'Google Cloud',        logo: <GoogleCloudLogo />, accent: '#4285F4' },
  { name: 'Microsoft Copilot',   logo: <CopilotLogo />,     accent: '#9B6BF5' },
  { name: 'IBM',                 logo: <IBMLogo />,          accent: '#1F70C1' },
];

// ── Main Component ────────────────────────────────────────────────────────────

export default function PartnershipSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div style={{ background: '#000', minHeight: '60vh', position: 'relative', overflow: 'hidden', fontFamily: 'system-ui,sans-serif' }}
      className="flex items-center justify-center p-6">

      {/* ── DotGrid Background ── */}
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />

      {/* ── Content (above DotGrid) ── */}
      <div className="relative z-10 w-full max-w-5xl">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&display=swap');

          .embla { overflow: hidden; }
          .embla__container { display: flex; }
          .embla__slide {
            flex: 0 0 100%;
            min-width: 0;
            padding: 0 12px;
          }
          @media (min-width: 640px) {
            .embla__slide { flex: 0 0 33.333%; }
          }

          .pcard {
            transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s;
            cursor: pointer;
          }
          .pcard:hover { transform: translateY(-8px) scale(1.03); }
          .pcard:hover .logo-wrap { transform: scale(1.08); filter: brightness(1.15); }
          .logo-wrap { transition: transform 0.3s, filter 0.3s; }

          .navbtn { transition: all 0.25s; }
          .navbtn:hover {
            border-color: #f97316 !important;
            color: #f97316 !important;
            box-shadow: 0 0 18px rgba(249,115,22,0.4);
          }
        `}</style>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full"
            style={{ border: '1px solid rgba(249,115,22,0.35)', background: 'rgba(249,115,22,0.07)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            <span style={{ fontFamily: 'Outfit,sans-serif', fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', color: '#fb923c', textTransform: 'uppercase' }}>
              Trusted Worldwide
            </span>
          </div>

          <h2 style={{ fontFamily: 'Outfit,sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem,5vw,3rem)', color: '#f1f5f9', margin: '0 0 8px' }}>
            Partnership &amp; <span style={{ color: '#f97316' }}>Collaborations</span>
          </h2>

          <p style={{ color: '#64748b', fontSize: 14, margin: 0, fontFamily: 'Outfit,sans-serif' }}>
            Building the future through world-class technology alliances
          </p>
        </div>

        {/* Slider */}
        <div className="relative px-6 sm:px-8">

          <button className="navbtn absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(59,130,246,0.3)', color: '#94a3b8', backdropFilter: 'blur(8px)' }}
            onClick={scrollPrev}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {PARTNERS.map((p, i) => (
                <div className="embla__slide" key={i}>
                  <div className="pcard" style={{
                    borderRadius: 18,
                    border: '1px solid rgba(255,255,255,0.07)',
                    background: 'rgba(10,10,20,0.75)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    justifyContent: 'center', gap: 18, padding: '36px 24px',
                    minHeight: 180, position: 'relative', overflow: 'hidden',
                  }}>
                    {/* Top accent */}
                    <div style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                      background: `linear-gradient(90deg,transparent,${p.accent},transparent)`,
                      borderRadius: '18px 18px 0 0',
                    }}/>

                    <div className="logo-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 64 }}>
                      {p.logo}
                    </div>

                    <p style={{
                      fontFamily: 'Outfit,sans-serif', fontWeight: 600, fontSize: 10,
                      color: '#64748b', letterSpacing: '0.12em', textTransform: 'uppercase',
                      textAlign: 'center', margin: 0,
                    }}>
                      {p.name}
                    </p>

                    {/* Bottom glow */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0, height: 50,
                      background: `linear-gradient(to top,${p.accent}18,transparent)`,
                      borderRadius: '0 0 18px 18px', pointerEvents: 'none',
                    }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="navbtn absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.7)', border: '1px solid rgba(59,130,246,0.3)', color: '#94a3b8', backdropFilter: 'blur(8px)' }}
            onClick={scrollNext}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Footer */}
        <p style={{ textAlign: 'center', marginTop: 28, fontFamily: 'Outfit,sans-serif', fontSize: 11, color: '#334155', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          <span style={{ color: '#f97316', fontWeight: 700 }}>{PARTNERS.length}</span> Global Technology Partners
        </p>
      </div>
    </div>
  );
}