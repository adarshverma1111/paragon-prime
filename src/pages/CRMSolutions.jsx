"use client";
import { motion } from "framer-motion";
import {
  FaUserFriends,
  FaBullhorn,
  FaHandshake,
  FaChartPie,
  FaRobot,
  FaLifeRing,
} from "react-icons/fa";

const sections = [
  {
    title: "Contact & Pipeline Mgmt",
    icon: <FaUserFriends />,
    description:
      "Your customer relationships are your most valuable asset. Our CRM gives every rep a 360° view of contacts, accounts, and deal history — with smart pipeline stages, activity tracking, and automated follow-ups that keep opportunities moving forward.",
    points: [
      "Unified Contact & Account Profiles",
      "Drag-and-Drop Pipeline Builder",
      "Activity Timeline & Notes",
      "Smart Follow-Up Reminders",
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    title: "Marketing Automation",
    icon: <FaBullhorn />,
    description:
      "Launch multi-channel campaigns that convert. Segment audiences with precision, orchestrate automated email and SMS journeys, run A/B tests, and track every touchpoint from first click to closed deal — all inside one platform.",
    points: [
      "Multi-Channel Campaign Orchestration",
      "Behavioral Audience Segmentation",
      "A/B Testing & Conversion Tracking",
      "Email, SMS & Push Automation",
    ],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
  },
  {
    title: "Sales Force Enablement",
    icon: <FaHandshake />,
    description:
      "Equip your sales team to close faster. Our CRM surfaces the right leads at the right time with AI-driven scoring, provides playbooks and scripts inside deal views, and gives managers live coaching dashboards to drive team performance.",
    points: [
      "AI Lead Scoring & Prioritization",
      "In-App Sales Playbooks",
      "Quote & Proposal Automation",
      "Manager Coaching Dashboards",
    ],
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
  },
  {
    title: "Revenue Analytics",
    icon: <FaChartPie />,
    description:
      "Stop guessing — start knowing. Real-time revenue dashboards, funnel conversion reports, win/loss analysis, and AI-generated forecasts give leadership the data clarity needed to allocate resources and hit quota with confidence.",
    points: [
      "Live Revenue & Funnel Dashboards",
      "Win / Loss Attribution Reports",
      "AI-Powered Sales Forecasting",
      "Custom Report Studio",
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    title: "AI-Powered CRM Engine",
    icon: <FaRobot />,
    description:
      "Our CRM learns as your business grows. Natural language search, predictive churn alerts, auto-drafted emails, meeting summaries, and deal health scores — all powered by embedded AI that works silently in the background.",
    points: [
      "Natural Language Deal Search",
      "Churn Prediction & Risk Alerts",
      "AI Email & Proposal Drafting",
      "Meeting Transcription & Summaries",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Customer Success Hub",
    icon: <FaLifeRing />,
    description:
      "Winning customers is just the start. Our Customer Success module tracks health scores, onboarding milestones, support tickets, and renewal timelines — giving your CS team the tools to reduce churn and grow accounts.",
    points: [
      "Customer Health Score Tracking",
      "Onboarding Journey Automation",
      "Support Ticket Integration",
      "Renewal & Upsell Playbooks",
    ],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  },
];

const whyChoose = [
  {
    icon: <FaUserFriends />,
    title: "360° Customer View",
    desc: "Unified customer profiles that give your sales, marketing, and support teams complete visibility across every interaction."
  },
  {
    icon: <FaRobot />,
    title: "AI Powered Automation",
    desc: "Automate repetitive workflows with AI-driven insights, predictive alerts, and smart recommendations."
  },
  {
    icon: <FaChartPie />,
    title: "Real-Time Revenue Insights",
    desc: "Advanced analytics dashboards provide real-time visibility into pipeline performance and revenue growth."
  },
  {
    icon: <FaHandshake />,
    title: "Sales & Marketing Alignment",
    desc: "Align your teams around one unified platform to improve collaboration, conversions, and customer engagement."
  },
];

const stats = [
  { value: "320+", label: "CRM Deployments" },
  { value: "2.8×", label: "Pipeline Growth" },
  { value: "68%", label: "Faster Lead Response" },
  { value: "94%", label: "Customer Retention" },
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

export default function CRMSolutions() {
  return (
    <div className="bg-gradient-to-b from-[#0a0f1c] via-[#0f172a] to-[#0a0f1c] text-white overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[55vh] flex items-center justify-center px-6 lg:px-20 text-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
            alt="CRM Solutions"
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
            CRM Solutions
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
            Intelligent CRM platforms that unify sales, marketing, and customer success — helping teams build stronger customer relationships.
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

      {/* WHY CHOOSE CRM */}
      <section className="relative py-12 px-6 lg:px-20 overflow-hidden">

        {/* Glow Background */}
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
              CRM Solutions
            </span>{" "}
            Stand Out
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            We build powerful CRM systems that unify teams, automate workflows,
            and provide deep insights to help businesses build stronger
            customer relationships and scale revenue.
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
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="CRM CTA"
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
            Grow Every Relationship
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Close{" "}
            <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">
              More Deals?
            </span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
            We design and implement intelligent CRM systems that align your
            sales, marketing, and support teams around a single customer
            truth — turning prospects into loyal, lifetime advocates.
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
              Start Free Trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 text-base font-semibold rounded-full
                         border border-white/20 text-white/70
                         hover:border-orange-400/50 hover:text-white
                         transition-all duration-300"
            >
              Explore Features
            </motion.button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}