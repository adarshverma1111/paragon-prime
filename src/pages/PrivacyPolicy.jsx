import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const sections = [
  {
    id: "collection",
    title: "Information We Collect",
    content: [
      "Personal details such as name, email, phone number and company information.",
      "Technical identifiers including IP address, browser type and device data.",
      "Usage analytics such as interaction behaviour and session insights.",
      "Communication data when you reach out to our team."
    ],
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    content: [
      "To deliver enterprise-grade digital services.",
      "To personalize your experience and improve performance.",
      "To strengthen security and prevent fraud.",
      "To communicate updates with your consent."
    ],
  },
  {
    id: "security",
    title: "Data Protection & Security",
    content: [
      "Enterprise-grade encryption and secure cloud infrastructure.",
      "Restricted and monitored internal access controls.",
      "Continuous vulnerability monitoring and security audits.",
      "Compliance with applicable data protection standards."
    ],
  },
  {
    id: "sharing",
    title: "Data Sharing & Compliance",
    content: [
      "We never sell personal information.",
      "Limited sharing with trusted partners for operational needs.",
      "Disclosure only when legally mandated."
    ],
  }
]

export default function PrivacyPolicy() {

  const [active, setActive] = useState("collection")
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = window.scrollY / totalHeight
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-[#0A1F44] via-[#0D2B5C] to-[#07152F] text-white overflow-hidden">

        {/* Animated Glow Background */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[150px]" />

        {/* Scroll Progress */}
        <div
          className="fixed top-0 left-0 h-1 bg-orange-500 z-50"
          style={{ width: `${scrollProgress * 100}%` }}
        />

        {/* HERO */}
        <section className="relative py-28 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Privacy <span className="text-orange-500">Policy</span>
          </motion.h1>

          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            At <span className="font-semibold">Paragon Prime</span>,
            safeguarding your data is a responsibility we uphold with
            integrity, transparency, and enterprise-level protection.
          </p>
        </section>

        {/* CONTENT */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[250px_1fr] gap-16 px-6 pb-32">

          {/* Sticky Navigation */}
          <div className="hidden lg:block sticky top-32 space-y-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() =>
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth"
                  })
                }
                className={`block text-left transition ${
                  active === section.id
                    ? "text-orange-500 font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-24">

            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                onViewportEnter={() => setActive(section.id)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-12 shadow-2xl hover:shadow-orange-500/20 transition"
              >
                <h2 className="text-3xl font-semibold mb-8 flex items-center gap-4">
                  <span className="text-orange-500 text-xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  {section.title}
                </h2>

                <ul className="space-y-4 text-gray-200 leading-relaxed">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-orange-400 font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <section className="px-6 pb-28">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-12 text-center shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-6">
              Have Questions About Your Data?
            </h3>

            <p className="mb-8">
              Our compliance and security team is ready to assist you with
              transparency and professionalism.
            </p>

            <a
              href="mailto:support@paragonprime.com"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Contact Support
            </a>
          </motion.div>
        </section>

      </div>

    </>
  )
}