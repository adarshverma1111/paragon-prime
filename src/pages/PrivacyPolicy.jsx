import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Footer from "@/components/Home/Footer"

const sections = [
    {
        id: "collection",
        number: "01",
        title: "Information We Collect",
        content: [
            { subtitle: "Personal Identifiers", text: "We collect information you provide including name, email, phone and billing details." },
            { subtitle: "Usage Data", text: "We log interaction data like pages visited, session time and device information." },
            { subtitle: "Third-Party Integrations", text: "Connecting third-party services may share profile data and authentication tokens." }
        ]
    },
    {
        id: "usage",
        number: "02",
        title: "How We Use Your Data",
        content: [
            { subtitle: "Service Delivery", text: "Your data powers account access, transactions and recommendations." },
            { subtitle: "Security", text: "We analyze signals to prevent unauthorized access and fraud." },
            { subtitle: "Product Improvement", text: "Aggregated usage helps us refine the platform." }
        ]
    },
    {
        id: "sharing",
        number: "03",
        title: "Data Sharing",
        content: [
            { subtitle: "No Selling", text: "We never sell your personal data." },
            { subtitle: "Trusted Vendors", text: "Limited data shared with payment and cloud providers." },
            { subtitle: "Legal Compliance", text: "We disclose data when legally required." }
        ]
    }
]

export default function PrivacyPolicy() {

    const [active, setActive] = useState("collection")

    return (
        <div className="min-h-screen bg-[#09080A] text-white">

            {/* HERO */}

            <section className="max-w-6xl mx-auto px-6 py-32">
                <p className="text-xs tracking-widest text-[#C9A84C] mb-4">LEGAL · PRIVACY</p>

                <h1 className="text-7xl font-serif leading-none">
                    Privacy <span className="text-[#C9A84C] italic font-light">Policy</span>
                </h1>

                <p className="mt-6 text-gray-400 max-w-xl">
                    At <span className="text-[#C9A84C]">Paragon Prime</span> privacy is a
                    foundational commitment. This policy explains how we collect,
                    use and protect your data.
                </p>
            </section>

            {/* CONTENT */}

            <div className="max-w-6xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16 px-6 pb-32">

                {/* TABLE OF CONTENT */}

                <div className="sticky top-24 hidden lg:block space-y-3 text-sm">
                    {sections.map(s => (
                        <button
                            key={s.id}
                            onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
                            className={`block text-left ${active === s.id ? "text-[#C9A84C]" : "text-gray-500"}`}
                        >
                            {s.title}
                        </button>
                    ))}
                </div>

                {/* SECTIONS */}

                <div className="space-y-20">

                    {sections.map((section, i) => {

                        const { ref, inView } = useInView({ triggerOnce: true })

                        return (

                            <motion.div
                                ref={ref}
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >

                                <div className="flex items-center gap-4 mb-6">

                                    <span className="text-[#C9A84C] text-xs tracking-widest">
                                        {section.number}
                                    </span>

                                    <h2 className="text-3xl font-serif">
                                        {section.title}
                                    </h2>

                                </div>

                                <Accordion type="single" collapsible className="space-y-2">

                                    {section.content.map((item, i) => (

                                        <AccordionItem key={i} value={String(i)} className="border border-white/10 rounded-lg">

                                            <AccordionTrigger className="px-4 py-3 text-xs uppercase tracking-wider text-gray-400">
                                                {item.subtitle}
                                            </AccordionTrigger>

                                            <AccordionContent className="px-4 pb-4 text-sm text-gray-400">
                                                {item.text}
                                            </AccordionContent>

                                        </AccordionItem>

                                    ))}

                                </Accordion>

                            </motion.div>

                        )

                    })}

                </div>

            </div>

            {/* FOOTER */}

            <Footer />

        </div>
    )
}