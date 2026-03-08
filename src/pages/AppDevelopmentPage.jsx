"use client";
import { motion } from "framer-motion";
import { FaMobileAlt, FaRocket, FaCogs, FaLayerGroup } from "react-icons/fa";

const sections = [
    {
        title: "Custom Mobile App Development",
        icon: <FaMobileAlt />,
        description:
            "We design and develop powerful mobile applications tailored to your business vision. From intuitive UI to scalable backend systems, our apps are built for performance, security, and seamless user experiences.",
        points: [
            "iOS & Android Development",
            "React Native / Flutter Solutions",
            "Scalable Backend Architecture",
            "Secure API Integrations",
        ],
        image:
            "https://static.habilelabs.io/big_data_03_449e4dfa3c.jpg",
    },
    {
        title: "UI/UX Focused App Design",
        icon: <FaLayerGroup />,
        description:
            "We craft visually stunning and user-centric app interfaces that drive engagement and retention. Every interaction is thoughtfully designed to ensure simplicity, clarity, and delight.",
        points: [
            "User-Centered Design",
            "Interactive Prototypes",
            "Smooth Animations",
            "Modern Design Systems",
        ],
        image:
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
    },
    {
        title: "Performance & Optimization",
        icon: <FaCogs />,
        description:
            "Speed and reliability are critical for mobile success. We optimize application performance, reduce load times, and ensure smooth functionality across devices and operating systems.",
        points: [
            "App Performance Optimization",
            "Low Latency Architecture",
            "Battery Efficient Code",
            "Crash & Bug Monitoring",
        ],
        image:
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
        title: "Launch, Deployment & Growth",
        icon: <FaRocket />,
        description:
            "From app store submission to post-launch scaling, we help you launch confidently. Our growth strategy ensures continuous updates, analytics tracking, and long-term success.",
        points: [
            "App Store & Play Store Deployment",
            "Analytics & User Insights",
            "Version Updates & Maintenance",
            "Continuous Feature Enhancement",
        ],
        image:
            "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
];

const whyChoose = [
    {
        title: "Expert Mobile Engineers",
        desc: "Our experienced developers build high-performance mobile applications using modern frameworks and best coding practices.",
        icon: <FaMobileAlt />,
    },
    {
        title: "Scalable Architecture",
        desc: "We design applications that scale effortlessly with your business growth and user demand.",
        icon: <FaLayerGroup />,
    },
    {
        title: "High Performance Apps",
        desc: "Optimized code and architecture ensure lightning-fast performance and smooth user experience.",
        icon: <FaCogs />,
    },
    {
        title: "Faster Time to Market",
        desc: "Agile development methodology allows us to deliver your mobile app faster without compromising quality.",
        icon: <FaRocket />,
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

export default function AppDevelopment() {
    return (
        <div className="bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white overflow-x-hidden">

            {/* HERO */}
            <section className="relative min-h-[50vh] flex items-center justify-center px-6 lg:px-20 text-center overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=2000&q=80"
                        alt="App Development"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80" />
                </div>

                <div className="absolute w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl relative z-10"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                        App Development
                    </h1>

                    <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
                       We build next-generation mobile apps that deliver powerful performance and exceptional user experiences.
                    </p>
                </motion.div>
            </section>

            {/* SERVICES */}
            {/* SERVICES */}
            <div className="relative">

                {sections.map((section, index) => (
                    <section
                        key={index}
                        className="relative z-10 py-12 px-6 lg:px-20 border-t border-white/5"
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

            </div>

            {/* WHY CHOOSE US */}
            <section className="relative py-12 px-6 lg:px-20 overflow-hidden">

                {/* Glow Background */}
                <div className="absolute top-20 left-1/3 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 relative z-10"
                >
                    <p className="text-orange-400 uppercase tracking-[4px] text-sm mb-4">
                        Why Choose Us
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Why Our{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                            App Development
                        </span>{" "}
                        Stands Out
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        We combine innovation, technology, and strategy to build powerful mobile
                        applications that deliver real business impact.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

                    {whyChoose.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-400/40 transition-all duration-300 group"
                        >

                            <div className="text-3xl text-orange-400 mb-4 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                        </motion.div>
                    ))}

                </div>

            </section>
            {/* CTA */}
            <section className="relative py-16 md:py-20 px-6 lg:px-20 overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2000&q=80"
                        alt="CTA Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
                </div>

                {/* Glow Layers */}
                <div className="absolute top-10 left-1/3 w-[350px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-yellow-500/10 blur-[110px] rounded-full" />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
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
                        We design and engineer powerful websites that not only look stunning
                        but drive measurable growth and long-term business success.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 text-base font-semibold rounded-full 
                       bg-gradient-to-r from-orange-500 to-yellow-500 
                       text-black shadow-[0_0_30px_rgba(255,165,0,0.4)]
                       transition-all duration-300"
                    >
                        Start Your Project
                    </motion.button>

                </motion.div>
            </section>

        </div>
    );
}