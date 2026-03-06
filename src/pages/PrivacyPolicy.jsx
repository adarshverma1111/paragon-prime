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

  const [scrollProgress, setScrollProgress] = useState(0)

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

        {/* Glow Background */}
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
        <div className="max-w-5xl mx-auto px-6 pb-32 space-y-20">

          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
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

        {/* CTA */}
        <section className="px-6 pb-28 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >

            {/* divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-10"></div>

            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Have Questions About Your <span className="text-orange-500">Data?</span>
            </h3>

            <p className="text-gray-300 leading-relaxed mb-10">
              Our compliance and security team is ready to assist you with full
              transparency and enterprise-grade professionalism.
            </p>

            <a
              href="mailto:support@paragonprime.com"
              className="inline-flex items-center gap-2 px-8 py-3 border border-orange-500 text-orange-400 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Contact Support
            </a>

          </motion.div>

        </section>

      </div>
    </>
  )
}