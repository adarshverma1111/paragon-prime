import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";


const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "4+", label: "Years Experience" },
    { value: "40+", label: "Expert Team" },
];

const services = [
    {
        icon: "🌐",
        title: "Website Development",
        desc: "We craft blazing-fast, pixel-perfect websites that drive results — from corporate portals to complex web platforms.",
    },
    {
        icon: "📱",
        title: "App Development",
        desc: "Native and cross-platform mobile apps designed to engage users and scale with your business seamlessly.",
    },
    {
        icon: "📈",
        title: "Digital Marketing",
        desc: "Data-driven campaigns across SEO, PPC, social media, and email that convert visitors into loyal customers.",
    },
    {
        icon: "🔍",
        title: "SEO Optimization",
        desc: "Dominate search rankings with technical SEO, content strategy, and authority-building that lasts.",
    },
    {
        icon: "🎨",
        title: "Web Design",
        desc: "UI/UX design that marries aesthetics with function — interfaces users love to interact with.",
    },
    {
        icon: "⚡",
        title: "Performance Tuning",
        desc: "Core Web Vitals optimization, CDN setup, and performance audits that give your site a competitive edge.",
    },
];

const skills = [
    { label: "Web Development", pct: 95 },
    { label: "App Development", pct: 88 },
    { label: "SEO & Digital Marketing", pct: 92 },
    { label: "UI/UX Design", pct: 90 },
];

const partners = ["Google", "Meta", "Shopify", "AWS", "Figma"];

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) setVisible(true); },
            { threshold }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);
    return [ref, visible];
}

function AnimatedBar({ pct, visible }) {
    return (
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div
                className="h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                    width: visible ? `${pct}%` : "0%",
                    background: "linear-gradient(90deg, #f97316, #fb923c)",
                    boxShadow: "0 0 12px #f9731688",
                }}
            />
        </div>
    );
}

function StatCard({ value, label, idx }) {
    const [ref, vis] = useInView();
    return (
        <div
            ref={ref}
            className="text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${idx * 0.12}s`,
            }}
        >
            <div className="text-4xl font-black text-orange-400" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}>
                {value}
            </div>
            <div className="text-sm text-blue-200 mt-1 tracking-widest uppercase">{label}</div>
        </div>
    );
}

export default function AboutUs() {
    const [heroRef, heroVis] = useInView(0.1);
    const [missionRef, missionVis] = useInView();
    const [skillRef, skillVis] = useInView();
    const [teamRef, teamVis] = useInView();

    return (
        <div className="text-white overflow-x-hidden" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        .about-card-hover { transition: all 0.3s ease; }
        .about-card-hover:hover { transform: translateY(-6px); border-color: #f97316 !important; box-shadow: 0 16px 40px #f9731622; }
        .about-team-hover:hover img { transform: scale(1.05); filter: brightness(1.1); }
      `}</style>

            {/* HERO */}
            <section
                className="relative py-25 pb-10 flex flex-col items-center justify-center text-center px-6 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #020917 0%, #040d1f 50%, #060a14 100%)" }}
            >
                <div className="absolute top-16 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />
                <div className="absolute bottom-16 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />

                <div ref={heroRef}>
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                        style={{ border: "1px solid #f9731655", color: "#fb923c", background: "#f9731611", opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(20px)", transition: "all 0.5s ease" }}>
                        About Us
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "3px", opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(30px)", transition: "all 0.7s ease 0.1s" }}>
                        We Build{" "}
                        <span style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Digital</span>
                        <br />
                        <span style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experiences</span>{" "}That Matter
                    </h1>
                    <p className="max-w-xl mx-auto text-blue-200 text-base md:text-lg leading-relaxed mb-10"
                        style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.2s" }}>
                        Paragon Prime empowers businesses with cutting-edge digital solutions, combining creative design, modern technology, and strategic marketing to deliver exceptional online experiences.</p>
                    <div className="flex gap-4 justify-center flex-wrap"
                        style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease 0.3s" }}>
                        <a href="#" className="px-5 sm:px-9 py-3.5 rounded-full font-semibold text-sm text-white
                       transition-all hover:scale-105
                       bg-[length:200%_auto]
                       bg-gradient-to-r from-[#fe8c00] via-[#f83600] to-[#fe8c00]
                       hover:bg-right">
                            Explore Services
                        </a>
                        <a href="#" className="px-5 py-3 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all hover:scale-105 text-blue-200">
                            Meet the Team →
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 w-full max-w-4xl relative z-10">
                    {stats.map((s, i) => <StatCard key={s.label} {...s} idx={i} />)}
                </div>

                <div className="mt-16 w-full max-w-4xl relative z-10">
                    <p className="text-xs text-blue-300 tracking-widest uppercase mb-5">Trusted by teams using</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {partners.map(p => (
                            <span key={p} className="text-white/30 hover:text-white/60 transition-colors text-sm font-semibold tracking-wide">{p}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="py-10 px-6 bg-[#040d1f] overflow-hidden">
                <div
                    ref={missionRef}
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
                >

                    {/* Image */}
                    <div className="relative w-full h-[420px] md:h-[500px]">

                        {/* Glow Background */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-3xl"></div>

                        {/* Main Image */}
                        <div
                            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                            style={{
                                opacity: missionVis ? 1 : 0,
                                transform: missionVis ? "scale(1)" : "scale(0.9)",
                                transition: "all 0.8s ease"
                            }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1400"
                                alt="team work"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Experience Card */}
                        <div
                            className="absolute bottom-6 right-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl px-6 py-4 text-center shadow-2xl"
                            style={{
                                opacity: missionVis ? 1 : 0,
                                transition: "all 0.8s ease 0.3s"
                            }}
                        >
                            <div
                                className="text-4xl font-black text-white"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                4+
                            </div>
                            <div className="text-xs text-white font-semibold leading-tight">
                                Years of <br /> Excellence
                            </div>
                        </div>

                    </div>

                    {/* Content */}
                    <div
                        style={{
                            opacity: missionVis ? 1 : 0,
                            transform: missionVis ? "translateX(0)" : "translateX(40px)",
                            transition: "all 0.8s ease 0.2s"
                        }}
                    >
                        <div className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-3">
                            About Paragon Prime
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-black mb-5 leading-tight"
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                letterSpacing: "2px"
                            }}
                        >
                            Find Your Dream{" "}
                            <span className="bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                                Digital Partner
                            </span>
                        </h2>

                        <p className="text-blue-200 leading-relaxed mb-6 text-sm">
                            We are a passionate team of developers, designers, and marketers who
                            live and breathe digital. Since 2020, we've helped businesses of all
                            sizes build powerful online presences that convert.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                {
                                    icon: "🏆",
                                    title: "Award-Winning Designs",
                                    sub: "Recognized for creative excellence across 20+ industry awards."
                                },
                                {
                                    icon: "🎯",
                                    title: "Results-Driven Strategy",
                                    sub: "Every project is measured by KPIs that align with your business goals."
                                }
                            ].map((item) => (
                                <div key={item.title} className="flex gap-4 items-start">
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-orange-400/30">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <div className="font-semibold text-sm text-white">
                                            {item.title}
                                        </div>
                                        <div className="text-xs text-blue-300 mt-0.5">{item.sub}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                            style={{
                                background: "linear-gradient(135deg, #f97316, #ea580c)",
                                boxShadow: "0 6px 30px #f9731444"
                            }}
                        >
                            Learn More →
                        </a>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section
                className="py-12 px-6"
                style={{ background: "linear-gradient(180deg, #040d1f, #050d1e, #040d1f)" }}
            >
                <div className="max-w-6xl mx-auto">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <div className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-3">
                            What We Do
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-black"
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                letterSpacing: "2px"
                            }}
                        >
                            Explore Our{" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #f97316, #fbbf24)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent"
                                }}
                            >
                                Core Services
                            </span>
                        </h2>

                        <p className="text-blue-200 mt-4 text-sm max-w-md mx-auto">
                            Everything you need to dominate the digital landscape — under one roof.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((s, i) => (
                            <motion.div
                                key={s.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.15,
                                    ease: "easeOut"
                                }}
                                className="about-card-hover p-6 rounded-2xl border border-white/10 cursor-pointer"
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    backdropFilter: "blur(10px)"
                                }}
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                                    style={{
                                        background: "linear-gradient(135deg, #f9731622, #3b82f611)",
                                        border: "1px solid #f9731633"
                                    }}
                                >
                                    {s.icon}
                                </div>

                                <h3 className="font-bold text-base mb-2 text-white">{s.title}</h3>

                                <p className="text-blue-300 text-sm leading-relaxed">{s.desc}</p>

                                <div className="mt-4 text-orange-400 text-xs font-semibold tracking-wide hover:underline cursor-pointer">
                                    Learn More →
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SKILLS */}
            <section className="py-12 px-6" style={{ background: "#020917" }}>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-3">Our Expertise</div>
                        <h2 className="text-4xl md:text-5xl font-black mb-5 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}>
                            We Make More Deals<br />
                            <span style={{ background: "linear-gradient(90deg, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Than Any Agency</span>
                        </h2>
                        <p className="text-blue-200 text-sm leading-relaxed mb-8">
                            Our cross-disciplinary team brings together deep technical expertise and creative vision. We've shipped over 250 projects globally — from indie startups to Fortune 500 brands.
                        </p>
                        <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-white/20 hover:border-orange-400 transition-all text-blue-200 hover:text-white">
                            View Portfolio →
                        </a>
                    </div>
                    <div ref={skillRef} className="space-y-6">
                        {skills.map((s, i) => (
                            <div key={s.label}
                                style={{ opacity: skillVis ? 1 : 0, transform: skillVis ? "translateX(0)" : "translateX(20px)", transition: `all 0.6s ease ${i * 0.1}s` }}>
                                <div className="flex justify-between mb-2 text-sm">
                                    <span className="text-white font-medium">{s.label}</span>
                                    <span className="text-orange-400 font-bold">{s.pct}%</span>
                                </div>
                                <AnimatedBar pct={s.pct} visible={skillVis} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="py-12 px-6" style={{ background: "#020917" }}>
                <div className="max-w-3xl mx-auto text-center rounded-3xl p-12 border border-white/10 relative overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #0f172a, #1e1b4b55)" }}>
                    <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "radial-gradient(ellipse at 50% 0%, #f9731622 0%, transparent 60%)" }} />
                    <div className="text-orange-400 text-xs tracking-widest uppercase font-semibold mb-4 relative z-10">Ready to Start?</div>
                    <h2 className="text-4xl md:text-5xl font-black mb-5 relative z-10" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}>
                        Let's Build Something{" "}
                        <span style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Extraordinary</span>
                    </h2>
                    <p className="text-blue-200 text-sm mb-8 relative z-10">
                        Tell us about your project and we'll get back to you within 24 hours with a free consultation and proposal.
                    </p>
                    <div className="flex gap-4 justify-center flex-wrap relative z-10">
                        <a href="#" className="px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
                            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", boxShadow: "0 6px 30px #f9731444" }}>
                            Start a Project
                        </a>
                        <a href="#" className="px-8 py-3 rounded-full font-semibold text-sm border border-white/20 hover:border-blue-400 transition-all text-blue-200">
                            Schedule a Call
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}