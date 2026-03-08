"use client";
import { motion } from "framer-motion";
import { FaBullhorn, FaSearch, FaChartLine, FaRocket } from "react-icons/fa";

const sections = [
    {
        title: "Strategic Digital Marketing",
        icon: <FaBullhorn />,
        description:
            "We craft data-driven digital marketing strategies that amplify your brand presence and generate measurable growth. Our approach combines creativity, analytics, and technology to deliver impactful campaigns.",
        points: [
            "Multi-Channel Marketing Strategy",
            "Brand Positioning & Awareness",
            "Target Audience Research",
            "Campaign Planning & Execution",
        ],
        image:
            "https://highzeal.com/images/posts/digital-marketing.jpg",
    },
    {
        title: "SEO & Search Visibility",
        icon: <FaSearch />,
        description:
            "Visibility is everything. We optimize your digital presence to rank higher in search engines, drive organic traffic, and improve online authority through advanced SEO strategies.",
        points: [
            "Technical SEO Optimization",
            "Keyword Research & Strategy",
            "On-Page & Off-Page SEO",
            "Content Optimization",
        ],
        image:
            "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    },
    {
        title: "Performance Marketing",
        icon: <FaChartLine />,
        description:
            "We run high-converting paid campaigns across platforms to maximize ROI. Our performance marketing strategies are focused on measurable results and continuous optimization.",
        points: [
            "Google Ads & PPC Campaigns",
            "Social Media Advertising",
            "Conversion Rate Optimization",
            "Analytics & Performance Tracking",
        ],
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    },
    {
        title: "Growth & Brand Scaling",
        icon: <FaRocket />,
        description:
            "From campaign launch to long-term scaling, we help your brand grow sustainably. Our data-backed strategies ensure consistent engagement, leads, and revenue growth.",
        points: [
            "Marketing Automation",
            "Lead Generation Funnels",
            "Email Marketing Campaigns",
            "Continuous Strategy Optimization",
        ],
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
];

const whyChoose = [
    {
        title: "Data Driven Strategies",
        desc: "Every campaign we run is backed by deep analytics and performance data to ensure maximum ROI and measurable results.",
        icon: <FaChartLine />,
    },
    {
        title: "Advanced SEO Expertise",
        desc: "Our SEO specialists use advanced optimization techniques to improve search visibility and drive long-term organic growth.",
        icon: <FaSearch />,
    },
    {
        title: "Creative Campaign Execution",
        desc: "We blend creativity with technology to craft marketing campaigns that capture attention and drive engagement.",
        icon: <FaBullhorn />,
    },
    {
        title: "Rapid Business Growth",
        desc: "Our performance marketing strategies focus on scaling brands quickly through targeted campaigns and conversion optimization.",
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

export default function DigitalMarketing() {
    return (
        <div className="bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white overflow-x-hidden">

            {/* HERO */}
            <section className="relative min-h-[50vh] flex items-center justify-center px-6 lg:px-20 text-center overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2000&q=80"
                        alt="Digital Marketing"
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
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
                        Digital Marketing
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl">
                        We accelerate brand growth through powerful digital strategies,
                        targeted campaigns, and data-driven marketing solutions that
                        deliver measurable results.
                    </p>
                </motion.div>
            </section>

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

                {/* Background Glow */}
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
                            Digital Marketing
                        </span>{" "}
                        Works
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        We combine creativity, technology, and analytics to create
                        marketing campaigns that deliver real business impact and
                        sustainable growth.
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

                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
                        alt="Marketing CTA"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative text-center max-w-3xl mx-auto z-10"
                >
                    <p className="text-orange-400 uppercase tracking-[4px] text-xs md:text-sm mb-4">
                        Let’s Grow Together
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Ready to Scale Your
                        <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                            Digital Presence?
                        </span>
                    </h2>

                    <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
                        Partner with us to create powerful digital marketing strategies
                        that increase visibility, engagement, and revenue.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 text-base font-semibold rounded-full 
                       bg-gradient-to-r from-orange-500 to-yellow-500 
                       text-black shadow-[0_0_30px_rgba(255,165,0,0.4)]
                       transition-all duration-300"
                    >
                        Start Your Campaign
                    </motion.button>

                </motion.div>
            </section>

        </div>
    );
}