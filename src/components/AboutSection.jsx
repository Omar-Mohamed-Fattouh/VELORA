import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Home } from "lucide-react"; // rental-style icon
import aboutSection1 from "../assets/aboutSection1.jpg"; // woman photo
import aboutSection2 from "../assets/aboutSection2.png"; // circular text badge
import aboutSection3 from "../assets/aboutSection3.png"; // orange pyramids
import aboutSection4 from "../assets/aboutSection4.png"; // big building
import aboutSection5 from "../assets/aboutSection5.jpg"; // small circle inside
import aboutSection6 from "../assets/aboutSection6.png"; // decorative bg dots

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="relative w-full flex justify-center bg-gray-900 text-white overflow-hidden py-12 md:py-20 lg:py-10" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`relative flex flex-col justify-center ${isRTL ? "items-end" : "items-start"} space-y-5 lg:col-span-2`}
        >
          <div className="flex items-center gap-3 text-orange-500 uppercase font-semibold text-xs sm:text-sm md:text-base lg:text-lg">
            <span className="inline-block h-[2px] w-8 bg-orange-500" />
            {t("aboutSection.label")}
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans font-bold leading-snug">
            {t("aboutSection.heading")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="relative mx-auto md:mx-0">
              <img
                src={aboutSection1}
                alt="Property owner"
                className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] rounded-2xl shadow-lg relative z-10"
              />

              <motion.img
                src={aboutSection3}
                alt="Decorative pyramids"
                className={`absolute ${isRTL ? "-right-14 lg:-right-30" : "-left-14 lg:-left-30"} top-40 lg:top-35 w-[60px] sm:w-[100px] md:w-[120px] lg:w-[120px] opacity-90 select-none pointer-events-none -z-0`}
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className={`mt-6 md:mt-0 ${isRTL ? "text-right" : "text-left"}`}>
              <div className="relative w-[150px] sm:w-[160px] md:w-[180px] lg:w-[200px] aspect-square mx-auto md:mx-0 rounded-full border-2 border-dashed border-orange-500 grid place-items-center">
                <motion.img
                  src={aboutSection2}
                  alt="House Solution badge"
                  className="absolute inset-0 w-full h-full p-2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10 w-[70px] sm:w-[80px] md:w-[95px] h-[70px] sm:h-[80px] md:h-[95px] rounded-full bg-orange-500 grid place-items-center text-center">
                  <Home className="w-10 h-10 sm:w-7 sm:h-7 md:w-10 md:h-10 mb-1" />
                </div>
              </div>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#D2D6DA] max-w-md mx-auto md:mx-0">
                {t("aboutSection.description")}
              </p>

              <a
                href="#"
                className="group relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  {t("aboutSection.cta")}
                  <span className={`text-lg transition-transform group-hover:translate-x-1 ${isRTL ? "mr-2 rotate-180" : "ml-2"}`}>
                    ›
                  </span>
                </span>

                <span className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-500 group-hover:translate-x-[100%]" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end items-center lg:col-span-1 mt-12 lg:mt-0">
          <motion.img
            src={aboutSection6}
            alt="Decor background"
            className={`absolute ${isRTL ? "-left-8" : "-right-8"} top-1/3 w-[80px] md:w-[100px] opacity-40 select-none pointer-events-none -z-10`}
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-1">
            <span
              aria-hidden
              className="absolute top-[5px] left-0 right-[50px] bottom-[72px] bg-white -z-10"
              style={{
                clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0% 100%)",
              }}
            />

            <img
              src={aboutSection4}
              alt="Modern building"
              className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[360px] shadow-lg z-0"
            />
            <motion.img
              src={aboutSection6}
              alt="Decorative pyramids"
              className="absolute -z-1 top-5 -right-11 lg:-top-0 lg:-right-21 w-[70px] md:w-[70px] lg:w-[135px] opacity-90 select-none pointer-events-none"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="absolute -right-13 lg:-right-20 top-1/2 -translate-y-1/2 z-10">
              <div className="relative w-[100px] h-[100px] lg:w-[190px] lg:h-[190px] rounded-full flex items-center justify-center p-3 bg-[#D7984E] overflow-hidden">
                <span
                  aria-hidden
                  className="absolute top-0 left-[-0%] w-full h-full skew-x-[-50deg] bg-gradient-to-r from-transparent bg-white to-transparent transition-all duration-500 hover:left-[50%]"
                />

                <div className="w-full h-full rounded-full flex items-center justify-center relative z-10">
                  <img
                    src={aboutSection5}
                    alt="Small badge"
                    className="w-full h-full object-cover rounded-full relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
