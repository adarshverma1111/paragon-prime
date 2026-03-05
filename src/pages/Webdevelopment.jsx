"use client";
import { motion } from "framer-motion";
import { FaCode, FaMobileAlt, FaRocket, FaSearch } from "react-icons/fa";

const sections = [
    {
        title: "Custom Web Engineering",
        icon: <FaCode />,
        description:
            "We architect and develop high-performance web platforms tailored to your business goals. From scalable backend systems to pixel-perfect front-end interfaces, our solutions are engineered for reliability, security, and growth.",
        points: [
            "Modern React / Next.js Architecture",
            "Scalable Backend Integration",
            "Clean Code & Maintainable Structure",
            "API & Third-Party Integrations",
        ],
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
        title: "Responsive & Mobile-First Design",
        icon: <FaMobileAlt />,
        description:
            "Your audience is everywhere. We create fully responsive experiences optimized for every device and screen size, ensuring flawless performance across mobile, tablet, and desktop platforms.",
        points: [
            "Mobile-First UI Strategy",
            "Cross-Browser Compatibility",
            "Optimized Touch Experience",
            "Fast Loading Interfaces",
        ],
        image:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    },
    {
        title: "SEO & Performance Optimization",
        icon: <FaSearch />,
        description:
            "A beautiful website means nothing without visibility. We implement advanced SEO strategies and performance optimizations to boost rankings, reduce load times, and maximize conversions.",
        points: [
            "Technical SEO Implementation",
            "Core Web Vitals Optimization",
            "Structured Data Markup",
            "Speed & Image Optimization",
        ],
        image:
            "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    },
    {
        title: "Launch & Growth Strategy",
        icon: <FaRocket />,
        description:
            "We don't just build websites — we launch digital growth engines. Our deployment, analytics integration, and continuous improvement strategy ensures long-term success.",
        points: [
            "Cloud Deployment",
            "Performance Monitoring",
            "Analytics Integration",
            "Continuous Optimization",
        ],
        image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
];

const imageVariant = {
    hidden: { opacity: 0, x: "20%" },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const textVariant = {
    hidden: { opacity: 0, x: "-20%" },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function WebsDevelopment() {
    return (
        <div className="bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white overflow-x-hidden">

            {/* HERO */}
            <section className="relative min-h-[50vh] flex items-center justify-center px-6 lg:px-20 text-center">

                {/* Glow background */}
                <div className="absolute w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl relative z-10"
                >
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                        Website Development
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl">
                        We craft powerful digital experiences that blend cutting-edge
                        technology with modern design to help brands dominate
                        the digital landscape.
                    </p>
                </motion.div>
            </section>

            {/* SERVICES */}
            {sections.map((section, index) => (
                <section
                    key={index}
                    className="py-20 px-6 lg:px-20 border-t border-white/5"
                >
                    <div
                        className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image */}
                        <motion.div
                            variants={imageVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 blur-xl rounded-3xl" />
                            <img
                                src={`${section.image}?auto=format&fit=crop&w=1200&q=80`}
                                alt={section.title}
                                className="relative rounded-3xl shadow-2xl border border-white/10"
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            variants={textVariant}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
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

            {/* CTA */}
            <section className="py-24 px-6 lg:px-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-[#111827] border border-white/10 rounded-3xl p-12 shadow-2xl"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Build Something Exceptional?
                    </h2>
                    <p className="mb-8 text-gray-400 text-lg">
                        Let’s collaborate and create a digital presence that truly
                        represents your brand.
                    </p>
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg">
                        Start Your Project
                    </button>
                </motion.div>
            </section>

        </div>
    );
}