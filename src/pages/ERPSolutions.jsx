"use client";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaChartLine,
  FaNetworkWired,
  FaShieldAlt,
  FaCubes,
  FaSyncAlt,
} from "react-icons/fa";

const sections = [
  {
    title: "Core ERP Modules",
    icon: <FaCubes />,
    description:
      "Build your enterprise on a unified platform. Our ERP core integrates Finance, HR, Supply Chain, and Procurement into a single source of truth — eliminating silos and giving leadership real-time visibility across every department.",
    points: [
      "Finance & Accounting Automation",
      "HR & Payroll Management",
      "Procurement & Inventory Control",
      "Multi-Entity & Multi-Currency Support",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "Business Intelligence",
    icon: <FaChartLine />,
    description:
      "Transform raw operational data into strategic decisions. Our BI layer delivers live dashboards, predictive forecasting, and drill-down analytics that surface actionable insights for every level of your organization.",
    points: [
      "Real-Time KPI Dashboards",
      "Predictive Revenue Forecasting",
      "Custom Report Builder",
      "AI-Powered Anomaly Detection",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
  {
    title: "Seamless Integrations",
    icon: <FaNetworkWired />,
    description:
      "Your ERP doesn't live in isolation. We architect robust API ecosystems that connect your ERP to CRMs, e-commerce platforms, logistics providers, payment gateways, and legacy systems — without friction.",
    points: [
      "REST & GraphQL API Gateway",
      "Pre-Built Connector Library",
      "Legacy System Migration",
      "Real-Time Event Streaming",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    title: "Data Security & Compliance",
    icon: <FaShieldAlt />,
    description:
      "Enterprise data demands enterprise-grade protection. We implement role-based access controls, end-to-end encryption, full audit trails, and compliance frameworks for GDPR, SOX, ISO 27001, and industry-specific regulations.",
    points: [
      "Role-Based Access Control (RBAC)",
      "End-to-End Data Encryption",
      "SOX / GDPR / ISO 27001 Compliance",
      "Immutable Audit Trails",
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Cloud & On-Prem Deployment",
    icon: <FaDatabase />,
    description:
      "Deploy your ERP the way your business demands — fully managed SaaS cloud, on-premise, or hybrid. We deliver containerized, scalable architectures built for zero downtime, disaster recovery, and global performance.",
    points: [
      "AWS / Azure / GCP Deployment",
      "On-Premise & Hybrid Architectures",
      "99.99% Uptime SLA",
      "Auto-Scaling & Disaster Recovery",
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  },
  {
    title: "Continuous Optimization",
    icon: <FaSyncAlt />,
    description:
      "ERP is not a one-time project — it's an evolving asset. Our dedicated support teams provide proactive monitoring, version upgrades, performance tuning, and strategic roadmap planning to keep your system ahead of growth.",
    points: [
      "24/7 Proactive Monitoring",
      "Quarterly Performance Reviews",
      "Automated Version Upgrades",
      "Strategic Growth Roadmapping",
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
];

const whyChoose = [
  {
    icon: <FaDatabase />,
    title: "Unified Data Architecture",
    desc: "Centralize all enterprise data into a single platform to eliminate silos and provide real-time operational visibility."
  },
  {
    icon: <FaNetworkWired />,
    title: "Seamless System Integrations",
    desc: "Connect ERP with CRMs, payment gateways, logistics systems, and legacy platforms using secure API architectures."
  },
  {
    icon: <FaShieldAlt />,
    title: "Enterprise Grade Security",
    desc: "Protect sensitive business data with advanced encryption, role-based access control, and compliance-ready frameworks."
  },
  {
    icon: <FaChartLine />,
    title: "Advanced Business Intelligence",
    desc: "Gain real-time insights through predictive analytics, automated reporting, and interactive dashboards."
  },
];

const stats = [
  { value: "150+", label: "ERP Deployments" },
  { value: "40%", label: "Avg. Cost Reduction" },
  { value: "3×", label: "Faster Reporting" },
  { value: "99.99%", label: "Uptime SLA" },
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

export default function ERPSolutions() {
  return (
    <div className="bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center px-6 lg:px-20 text-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=2000&q=80"
            alt="ERP Solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Glow orb */}
        <div className="absolute w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full top-20 left-1/2 -translate-x-1/2" />

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl relative z-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight mb-4 md:mb-6 bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
            ERP Solutions
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
            Unified ERP platforms designed to streamline finance, HR, supply chain, and operations
             — giving your business the clarity to scale with confidence.
          </p>
        </motion.div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 border-y border-white/10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`flex flex-col items-center justify-center py-10 px-6 ${i < stats.length - 1 ? "border-r border-white/10" : ""
              }`}
          >
            <span className="text-4xl lg:text-5xl font-bold mb-1 bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              {s.value}
            </span>
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── SERVICES ── */}
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
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-blue-500/20 blur-xl rounded-3xl" />
                <img
                  src={`${section.image}?auto=format&fit=crop&w=1200&q=80`}
                  alt={section.title}
                  className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover"
                  style={{ height: "360px" }}
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

                <h2 className="text-4xl font-bold mb-6">{section.title}</h2>

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

      {/* WHY CHOOSE ERP */}
      <section className="relative py-12 px-6 lg:px-20 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-20 left-1/3 w-[350px] h-[350px] bg-orange-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-[350px] h-[350px] bg-blue-500/10 blur-[120px] rounded-full" />

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
              ERP Solutions
            </span>{" "}
            Stand Out
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Our ERP platforms combine scalability, security, and advanced analytics
            to streamline operations, reduce complexity, and empower smarter
            enterprise decision making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

          {whyChoose.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-orange-400/40 transition duration-300"
            >

              <div className="text-3xl text-orange-400 mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-400 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* ── CTA ── */}
      <section className="relative py-16 md:py-20 px-6 lg:px-20 overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80"
            alt="ERP CTA"
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
            Transform Your Enterprise
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Unify Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              Operations?
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Partner with us to implement enterprise-grade ERP systems that
            consolidate your entire operation into one intelligent platform —
            driving efficiency, reducing costs, and accelerating growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-base font-semibold rounded-full
                         bg-gradient-to-r from-orange-500 to-yellow-500
                         text-black shadow-[0_0_30px_rgba(255,165,0,0.4)]
                         transition-all duration-300"
            >
              Book a Free Demo
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-base font-semibold rounded-full
                         border border-white/20 text-white/70
                         hover:border-orange-400/50 hover:text-white
                         transition-all duration-300"
            >
              View Case Studies
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}