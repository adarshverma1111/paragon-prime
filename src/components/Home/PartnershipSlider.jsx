"use client";
import awslogo from "../../assets/logos/aws.png";
import azurelogo from "../../assets/logos/azure.png";
import gcloudlogo from "../../assets/logos/gcloud.png";
import salesforcelogo from "../../assets/logos/salesforce.png";
import ibmlogo from "../../assets/logos/ibm.png";
import copilotlogo from "../../assets/logos/copilot.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const partners = [
  { name: "AWS", logo:awslogo },
  { name: "Azure", logo: azurelogo },
  { name: "Google Cloud", logo: gcloudlogo },
  { name: "Salesforce", logo: salesforcelogo },
  { name: "IBM", logo: ibmlogo },
  { name: "Copilot", logo: copilotlogo },
];

export default function PartnershipSlider() {
  return (
    <section className="bg-black py-16 md:py-20 px-11 md:px-8 text-center">

      {/* Heading Animation */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3"
      >
        Partnership & <span className="text-orange-500">Collaborations</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 text-sm md:text-base mb-10"
      >
        Building the future through global technology alliances
      </motion.p>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        loop
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#0a0f1c] border border-blue-500/20 rounded-xl p-8 md:p-10 flex flex-col items-center justify-center shadow-lg hover:shadow-blue-500/20"
            >

              <motion.img
                src={partner.logo}
                alt={partner.name}
                className="h-14 md:h-14 mb-4 object-contain"
                whileHover={{ rotate: 3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />

              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                {partner.name}
              </p>

            </motion.div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}