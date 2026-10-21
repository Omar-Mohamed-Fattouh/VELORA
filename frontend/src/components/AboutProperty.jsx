import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Waves, Wifi, Utensils } from "lucide-react";
import heroHouse from "../assets/room.jpg";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function AboutProperty() {
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar";

  const features = [
    { 
      id: 1, 
      title: t("PARKING SPACE"), 
      desc: t("Secure parking for your vehicle with 24/7 surveillance, ensuring convenience and peace of mind."), 
      icon: <Car className="w-8 h-8" /> 
    },
    { 
      id: 2, 
      title: t("SWIMMING POOL"), 
      desc: t("Relax in our modern pool with crystal-clear water, perfect for a refreshing swim or lounging under the sun."), 
      icon: <Waves className="w-8 h-8" /> 
    },
    { 
      id: 3, 
      title: t("FAST FREE WI-FI"), 
      desc: t("Enjoy unlimited high-speed internet access across the property, ideal for work, streaming, and staying connected."), 
      icon: <Wifi className="w-8 h-8" /> 
    },
    { 
      id: 4, 
      title: t("FOOD VEGETABLE"), 
      desc: t("Fresh, organic, and healthy meals prepared daily with seasonal vegetables sourced from trusted farms."), 
      icon: <Utensils className="w-8 h-8" /> 
    },
  ];

  const [activeFeature, setActiveFeature] = useState(1);
  const feature = features.find((f) => f.id === activeFeature);

  return (
    <section className="py-16 lg:py-20" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-center items-center flex-col">

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`text-orange-500 font-medium tracking-wide uppercase flex items-center gap-2 justify-center`}
          >
            <span className="w-10 h-[2px] bg-orange-500 inline-block" />
            {t("Our About Property")}
            <span className="w-10 h-[2px] bg-orange-500 inline-block" />
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 w-auto text-center text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-gray-900"
          >
            {t("We Provide Thorough About Customer Service Home.")}
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 items-center">

          {/* LEFT SIDE - Features */}
          <div className="flex flex-col gap-6">
            {features.map((f, idx) => (
              <motion.div
                key={f.id}
                onClick={() => setActiveFeature(f.id)}
                className={`p-2 transition-transform duration-300 ease-in-out shadow-md rounded-xl cursor-pointer ${
                  activeFeature === f.id ? "ring-2 ring-gray-800 bg-gray-900" : "hover:bg-gray-800"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-center gap-4 p-5 sm:p-6 rounded-xl overflow-hidden group"
                >
                  {/* Sliding Background */}
                  <span
                    className={`absolute inset-0 bg-orange-500 rounded-xl transform transition-transform duration-500 ease-in-out ${
                      activeFeature === f.id ? "translate-x-0" : isRTL ? "translate-x-full group-hover:translate-x-0" : "translate-x-full group-hover:translate-x-0"
                    }`}
                  ></span>

                  {/* Icon */}
                  <span
                    className={`relative z-10 transition ${
                      activeFeature === f.id ? "text-white" : "text-orange-500 group-hover:text-white"
                    }`}
                  >
                    {f.icon}
                  </span>

                  {/* Title */}
                  <span
                    className={`font-semibold relative z-10 sm:text-xl transition ${
                      activeFeature === f.id ? "text-white" : "text-gray-800 group-hover:text-white"
                    }`}
                  >
                    {f.title}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE - Single Image */}
          <div className="relative overflow-hidden w-full h-[350px] sm:h-[400px] lg:h-[450px] lg:col-span-2">
            <img
              src={heroHouse}
              alt={t("Property")}
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <motion.div
              key={feature.id}
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex justify-end items-end p-6"
            >
              <div className="text-white">
                <h3 className="font-bold text-2xl sm:text-3xl">{feature.title}</h3>
                <p className="text-base sm:text-lg mt-1">{feature.desc}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
