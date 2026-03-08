import { motion } from "framer-motion";
import { ShieldCheck, FileText, Scale, Lock, AlertCircle, Mail } from "lucide-react";

const sections = [
    {
        icon: <FileText size={22} />,
        title: "Acceptance of Terms",
        content:
            "By accessing or using Paragon Prime’s services, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, you may not use our services.",
    },
    {
        icon: <Scale size={22} />,
        title: "Use of Services",
        content:
            "Our services must only be used for lawful purposes. Users agree not to misuse the platform or engage in activities that disrupt or harm our systems or other users.",
    },
    {
        icon: <ShieldCheck size={22} />,
        title: "Intellectual Property",
        content:
            "All content, branding, designs, code, and materials provided on this website are the property of Paragon Prime and are protected by intellectual property laws.",
    },
    {
        icon: <Lock size={22} />,
        title: "User Responsibilities",
        content:
            "Users are responsible for maintaining the confidentiality of their account information and for all activities conducted under their account.",
    },
    {
        icon: <AlertCircle size={22} />,
        title: "Limitation of Liability",
        content:
            "Paragon Prime shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.",
    },
    {
        icon: <Mail size={22} />,
        title: "Contact Information",
        content:
            "If you have any questions about these Terms of Service, please contact us through our official communication channels.",
    },
];

export default function TermsOfServices() {
    return (
        <div className="min-h-screen bg-black text-white">

            {/* Hero */}
            <section className="pt-32 pb-20 px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent"
                >
                    Terms of Service
                </motion.h1>

                <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                    Please read these terms carefully before using the services of
                    Paragon Prime.
                </p>
            </section>

            {/* Terms Sections */}
            <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-orange-400/40 transition"
                    >

                        <div className="text-orange-400 mb-4">
                            {section.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-3">
                            {section.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            {section.content}
                        </p>

                    </motion.div>
                ))}

            </section>

            {/* Sliding Text Banner */}
            <div className="overflow-hidden border-t border-white/10 py-6 bg-black">
                <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 18,
                        ease: "linear",
                    }}
                    className="whitespace-nowrap text-lg md:text-xl font-semibold text-orange-400"
                >
                    Paragon Prime • Innovation Driven Development • Secure Digital Solutions • Modern Web & App Development • Scalable Enterprise Platforms • Data-Driven Growth • Paragon Prime • Innovation Driven Development • Secure Digital Solutions •
                </motion.div>
            </div>

        </div>
    );
}