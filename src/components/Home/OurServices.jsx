import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function OurServices() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Website Development",
      description:
        "We create visually stunning, user-friendly websites optimized for performance.",
      backText:
        "Get a high-performing website tailored to your brand and business goals.",
      tags: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom CMS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      route: "/web-development",
    },
    {
      title: "App Development",
      description:
        "Build powerful iOS and Android applications with intuitive interfaces.",
      backText:
        "Launch scalable mobile apps with seamless user experiences.",
      tags: ["iOS & Android", "Cross-Platform", "Native Apps", "UI/UX Design"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
      route: "/app-development",
    },
    {
      title: "Digital Marketing",
      description:
        "Drive measurable growth with data-driven digital marketing strategies.",
      backText:
        "Boost your brand visibility and generate quality leads.",
      tags: ["SEO", "PPC Campaigns", "Content Marketing", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      route: "/digital-marketing",
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
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-black py-16 px-4 sm:px-8 md:px-16 font-sans overflow-hidden">

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
          What We <span className="text-orange-500">Offer</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
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
            className="group perspective"
          >
            {/* Flip Container */}
            <div className="relative w-full h-[420px] transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">

              {/* FRONT SIDE */}
              <div className="absolute w-full h-full backface-hidden bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden shadow-md">

                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={`${service.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-orange-500 font-black text-xl mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="border border-blue-500 text-blue-400 text-xs px-4 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div
                className="absolute w-full h-full rotate-y-180 backface-hidden rounded-2xl flex flex-col items-center justify-center text-center p-8 shadow-2xl border border-white/10"
                style={{
                  background: "linear-gradient(145deg, #0F1C2E 0%, #132A4A 60%, #1A3A6B 100%)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <h3 className="text-white font-bold text-2xl mb-4 tracking-wide">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-xs">
                  {service.backText}
                </p>

                <button
                  onClick={() => navigate(service.route)}
                  className="px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 border border-[#f5a623]/40 text-[#f5a623] hover:bg-[#f5a623] hover:text-black hover:shadow-[0_0_20px_rgba(245,166,35,0.4)]"
                >
                  Explore Service
                </button>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Required Custom CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>

    </section>
  );
}