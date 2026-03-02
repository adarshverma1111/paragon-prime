import { motion } from "framer-motion";

export default function OurServices() {
  const services = [
    {
      title: "Website Development",
      description:
        "We create visually stunning, user-friendly websites optimized for performance and conversions. From corporate sites to landing pages, our designs reflect your brand identity.",
      tags: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
    },
    {
      title: "App Development",
      description:
        "Build powerful iOS and Android applications with intuitive interfaces and robust functionality. We specialize in Flutter, React Native, and native development.",
      tags: ["iOS & Android", "Cross-Platform", "Native Apps", "UI/UX Design"],
    },
    {
      title: "Digital Marketing",
      description:
        "Drive measurable growth with data-driven digital marketing strategies. From SEO and PPC to content marketing and social media campaigns.",
      tags: ["SEO", "PPC Campaigns", "Content Marketing", "Analytics"],
    },
  ];

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -120 : 120,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-8 md:px-16 font-sans overflow-hidden">

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-gray-300 font-semibold text-base tracking-wide">
            Our Services
          </span>
          <div className="w-12 h-0.5 bg-blue-500"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
          What We <span className="text-orange-500">Offer</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-center">
          We provide comprehensive technology solutions to help your business thrive in the digital age.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-orange-500 font-black text-xl sm:text-2xl mb-4">
              {service.title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed text-justify mb-6">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="border border-blue-500 text-blue-400 text-xs sm:text-sm px-4 py-1.5 rounded-full bg-transparent hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}