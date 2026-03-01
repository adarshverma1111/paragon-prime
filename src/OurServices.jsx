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

  return (
    <section className="bg-[#f0efea] py-16 px-4 sm:px-8 md:px-16 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-gray-600 font-semibold text-base tracking-wide">Our Services</span>
          <div className="w-12 h-0.5 bg-green-700"></div>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-5">
          What We <span className="text-green-700">Offer</span>
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed text-center">
          We provide comprehensive technology solutions to help your business thrive in the digital age. From mobile App and web development to digital marketing, our expert team delivers results-driven solutions tailored to your unique business needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-green-700 font-black text-xl sm:text-2xl mb-4">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-justify mb-6">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag, i) => (
                <span
                  key={i}
                  className="border border-green-600 text-green-700 text-xs sm:text-sm px-4 py-1.5 rounded-full bg-transparent hover:bg-green-50 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}