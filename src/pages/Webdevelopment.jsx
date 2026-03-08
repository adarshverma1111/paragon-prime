"use client";
import { motion, useReducedMotion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRocket, FaSearch } from "react-icons/fa";

/* ---------------- SERVICES ---------------- */

const sections = [
    {
        title: "Custom Web Engineering",
        icon: <FaCode />,
        description:
            "We architect and develop high-performance web platforms tailored to your business goals.",
        points: [
            "Modern React / Next.js Architecture",
            "Scalable Backend Integration",
            "Clean Code & Maintainable Structure",
            "API & Third-Party Integrations",
        ],
        image: "https://wallpaperaccess.com/full/4635743.jpg",
    },
    {
        title: "Responsive & Mobile-First Design",
        icon: <FaMobileAlt />,
        description:
            "Your audience is everywhere. We create fully responsive experiences optimized for every device.",
        points: [
            "Mobile-First UI Strategy",
            "Cross-Browser Compatibility",
            "Optimized Touch Experience",
            "Fast Loading Interfaces",
        ],
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
    {
        title: "SEO & Performance Optimization",
        icon: <FaSearch />,
        description:
            "We implement advanced SEO strategies and performance optimizations to boost rankings.",
        points: [
            "Technical SEO Implementation",
            "Core Web Vitals Optimization",
            "Structured Data Markup",
            "Speed & Image Optimization",
        ],
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    },
    {
        title: "Launch & Growth Strategy",
        icon: <FaRocket />,
        description:
            "We don't just build websites — we launch digital growth engines.",
        points: [
            "Cloud Deployment",
            "Performance Monitoring",
            "Analytics Integration",
            "Continuous Optimization",
        ],
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
];

/* ---------------- FEATURES ---------------- */

const features = [
    {
        icon: "⚡",
        title: "Lightning Fast Performance",
        desc: "Optimized architecture ensures blazing fast page speed.",
    },
    {
        icon: "🔒",
        title: "Enterprise Security",
        desc: "Secure authentication and best security practices.",
    },
    {
        icon: "🌍",
        title: "Global Scalability",
        desc: "Infrastructure built for traffic growth.",
    },
    {
        icon: "📈",
        title: "Data Driven Insights",
        desc: "Analytics to track engagement and performance.",
    },
    {
        icon: "⚙️",
        title: "Automation & Integrations",
        desc: "Third-party APIs and automation workflows.",
    },
    {
        icon: "🚀",
        title: "Future Ready Technology",
        desc: "Built using modern frameworks and cloud systems.",
    },
];

const techStack = [
    "React",
    "Vue.js",
    "Angular",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "GraphQL",
    "Firebase",
    "Vercel",
];

/* ---------------- ANIMATION ---------------- */

const imageVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const textVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

export default function WebsDevelopment() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white overflow-x-hidden">

            {/* HERO */}

            <section className="relative min-h-[50vh] flex items-center justify-center px-6 lg:px-20 text-center">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl relative z-10"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                        Website Development
                    </h1>

                    <p className="text-gray-300 text-xl">
                        We craft powerful digital experiences that blend technology with modern design.
                    </p>
                </motion.div>
            </section>

            {/* SERVICES */}

            {sections.map((section, index) => (
                <section
                    key={index}
                    className="relative py-16 px-6 lg:px-20 border-t border-white/5"
                >

                    <div
                        className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                    >

                        {/* IMAGE */}

                        <motion.div
                            variants={imageVariant}
                            initial={shouldReduceMotion ? false : "hidden"}
                            whileInView={shouldReduceMotion ? {} : "show"}
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:w-1/2 relative"
                        >

                            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-2xl rounded-3xl" />

                            <img
                                src={`${section.image}?auto=format&fit=crop&w=1200`}
                                className="relative rounded-3xl shadow-2xl border border-white/10"
                            />

                        </motion.div>

                        {/* TEXT */}

                        <motion.div
                            variants={textVariant}
                            initial={shouldReduceMotion ? false : "hidden"}
                            whileInView={shouldReduceMotion ? {} : "show"}
                            viewport={{ once: true, margin: "-100px" }}
                            className="lg:w-1/2"
                        >

                            <div className="text-orange-400 text-3xl mb-4">
                                {section.icon}
                            </div>

                            <h2 className="text-4xl font-bold mb-6">
                                {section.title}
                            </h2>

                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {section.description}
                            </p>

                            <ul className="space-y-3">
                                {section.points.map((point, i) => (
                                    <li
                                        key={i}
                                        className="text-gray-300 border-b border-white/10 pb-2"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>

                        </motion.div>

                    </div>
                </section>
            ))}

            {/* FEATURES */}

            <section className="py-24 px-6 lg:px-20 border-t border-white/5">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">
                        Why Choose Our Development
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto">
                        We combine cutting-edge technology and scalable architecture
                        to build high-performance digital platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((feature, i) => (

                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            whileHover={{ y: -6 }}
                            className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orange-400/40 transition"
                        >

                            <div className="text-4xl mb-4">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>

                        </motion.div>

                    ))}

                </div>
            </section>

            {/* TECH STACK */}

            <section className="py-20 px-6 lg:px-20 border-t border-white/5 overflow-hidden">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold mb-4">
                        Our Technology Stack
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto">
                        Modern technologies to build scalable products.
                    </p>

                </div>

                <div className="relative w-full overflow-hidden">

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 35,
                            ease: "linear",
                        }}
                        className="flex gap-8 w-max"
                    >

                        {[...techStack, ...techStack].map((tech, i) => (

                            <div
                                key={i}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-300 backdrop-blur-md hover:border-orange-400 hover:text-white transition whitespace-nowrap"
                            >
                                {tech}
                            </div>

                        ))}

                    </motion.div>

                </div>
            </section>

            {/* CTA */}

            <section className="relative py-16 md:py-20 px-6 lg:px-20 overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/90" />
                </div>

                {/* Reduced blur for mobile performance */}

                <div className="absolute top-10 left-1/3 w-[350px] h-[350px] bg-orange-500/10 blur-[80px] rounded-full" />
                <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-yellow-500/10 blur-[70px] rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative text-center max-w-3xl mx-auto z-10"
                >

                    <p className="text-orange-400 uppercase tracking-[4px] text-xs md:text-sm mb-4">
                        Let’s Build The Future
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Ready to Create a{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            High-Impact Digital Experience?
                        </span>
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
                        We design and engineer powerful websites that drive measurable growth.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 text-base font-semibold rounded-full 
            bg-gradient-to-r from-orange-500 to-yellow-500 
            text-black shadow-[0_0_25px_rgba(255,165,0,0.4)]"
                    >
                        Start Your Project
                    </motion.button>

                </motion.div>
            </section>

        </div>
    );
}