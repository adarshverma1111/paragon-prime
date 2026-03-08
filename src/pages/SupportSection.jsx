import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import supportIllustration from "../assets/images/5138226.jpg";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Technical Support",
    desc: "Expert assistance for all your technical challenges and system issues",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "System Maintenance",
    desc: "Proactive monitoring and maintenance to keep your systems running smoothly",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Security Monitoring",
    desc: "Round-the-clock security surveillance and threat detection services",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: "Server Management",
    desc: "Complete server administration and optimization for maximum performance",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Emergency Response",
    desc: "Immediate response for critical system failures and urgent issues",
  },
];

const stats = [
  { value: "24/7", label: "Availability" },
  { value: "< 1h", label: "Response Time" },
  { value: "99.9%", label: "Uptime SLA" },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

const SupportSection = () => {
  const [sectionRef, sectionInView] = useInView();
  const [activeService, setActiveService] = useState(null);

  return (
    <section
      ref={sectionRef}
      className="relative bg-f1f1f1 overflow-hidden py-25 px-4 sm:px-8"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #16a34a 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #15803d 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4"
            style={{ fontFamily: "'Arial', sans-serif" }}
          >
            Always Available
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
            Our <span className="text-orange-500">24/7</span> Support Services
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto" style={{ fontFamily: "'Arial', sans-serif" }}>
            Comprehensive technical support available around the clock
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex flex-col items-center bg-orange-50 border border-orange-100 rounded-2xl px-7 py-3"
              >
                <span className="text-2xl font-bold text-orange-500">{s.value}</span>
                <span className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "'Arial', sans-serif" }}>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4" style={{ fontFamily: "'Arial', sans-serif" }}>
              At Paragon Prime Infotech, we understand that technology challenges don't follow business hours. That's why our dedicated support team is available 24/7, 365 days a year to ensure your systems run smoothly and your business operations never skip a beat. Our comprehensive support services are designed to prevent issues before they occur and resolve them quickly when they do.
            </p>
            {/* <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-10" style={{ fontFamily: "'Arial', sans-serif" }}>
              Whether you're dealing with server downtime, security threats, or routine maintenance needs, our certified professionals bring years of experience and cutting-edge tools to deliver solutions that exceed expectations.
            </p> */}
            <div className="space-y-1">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                  onClick={() => setActiveService(activeService === idx ? null : idx)}
                  className={`group flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border ${activeService === idx ? "bg-orange-50 border-orange-300 shadow-sm" : "border-transparent hover:bg-gray-50 hover:border-gray-200"
                    }`}
                >
                  <div className={` w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${activeService === idx ? "bg-orange-500 text-white shadow-md" : "bg-orange-100 text-orange-500 group-hover:bg-orange-200"
                    }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-sm sm:text-base transition-colors duration-200 ${activeService === idx ? "text-orange-500" : "text-gray-800"}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed" style={{ fontFamily: "'Arial', sans-serif" }}>
                      {service.desc}
                    </p>
                  </div>
                  <div className={` mt-1 transition-transform duration-300 ${activeService === idx ? "rotate-90 text-orange-500" : "text-gray-300 group-hover:text-orange-400"}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col items-center gap-6"
          >
            {/* Illustration Image */}
            <div className="relative w-full max-w-md mx-auto ">
              <div className="absolute inset-8 rounded-full blur-3xl opacity-50 pointer-events-none" />
              <motion.img
                src={supportIllustration}
                alt="24/7 Support Agent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={sectionInView ? { opacity: 1, scale: 1.1 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative w-full h-auto object-contain "
              />
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full max-w-sm mx-auto bg-blue-900 from-blue-900 to-blue-900 rounded-2xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm">Need Immediate Help?</p>
                  <p className="text-white text-xs" style={{ fontFamily: "'Arial', sans-serif" }}>Our team is online right now</p>
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/919555972693"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-blue-900 text-xs font-bold py-2.5 rounded-xl hover:bg-orange-50 transition-all duration-200 shadow text-center block cursor-pointer"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  Start Live Chat
                </a>

                <a
                  href="tel:9555972693"
                  className="flex-1 bg-white/15 border border-white/30 text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-white/25 transition-all duration-200 text-center block cursor-pointer"
                  style={{ fontFamily: "'Arial', sans-serif" }}
                >
                  Call Support
                </a>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SupportSection;