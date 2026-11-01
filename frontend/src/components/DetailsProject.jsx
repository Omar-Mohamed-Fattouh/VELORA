import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import detail1 from "../assets/detail1.webp";
import detail2 from "../assets/detail2.webp";
import detail3 from "../assets/detail3.webp";
import detail4 from "../assets/detail4.webp";

import { Ruler, MapPin, Square } from "lucide-react";

export default function DetailsProject({ project }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const images = [project?.image, detail1, detail2, detail3, detail4].filter(
    (src, index, list) => src && list.indexOf(src) === index,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleThumbClick = (idx) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(idx);
    }
    setActiveIndex(idx);
  };

  const getVisibleThumbs = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      result.push(images[(activeIndex + i) % images.length]);
    }
    return result;
  };
useEffect(function(){
      window.scrollTo(0, 0);

},[])
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"} // ✅ change direction
    >
      {/* Main Swiper */}
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        speed={1200}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <AnimatePresence mode="wait">
              {activeIndex === idx && (
                <motion.div
                  key={idx}
                  className="relative w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <img
                    src={img}
                    alt={`detail-${idx}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                </motion.div>
              )}
            </AnimatePresence>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div
        className={`absolute top-2/5 lg:top-1/2 ${
          isRTL ? "right-2 sm:right-4" : "left-2 sm:left-4"
        } -translate-y-1/2 flex flex-col gap-3 z-20 overflow-hidden h-[240px] sm:h-[300px] w-[70px] sm:w-[90px]`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="flex flex-col gap-3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {getVisibleThumbs().map((img, idx) => {
              const realIndex = (activeIndex + idx) % images.length;
              return (
                <motion.button
                  key={realIndex}
                  onClick={() => handleThumbClick(realIndex)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-md overflow-hidden ${
                    realIndex === activeIndex
                      ? "border-orange-500"
                      : "border-gray-300"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={img}
                    alt={`thumb-${realIndex}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Info */}
      <motion.div
        className={`absolute bottom-6 sm:bottom-10 ${
          isRTL ? "text-right" : "text-left"
        } left-0 right-0 px-6 sm:px-20 lg:px-40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-30 text-white`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            {project?.title || t("Capital Avenue (Al Qirawan)")}
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-6 sm:mt-10 text-lg sm:text-xl lg:text-2xl">
            <div className="flex items-center gap-2">
              <Ruler size={22} className="text-orange-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs sm:text-sm text-orange-500">
                  {t("Building Area")}
                </span>
                <span>
                  {Number(project?.area || 36000).toLocaleString()} {t("m²")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={22} className="text-orange-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs sm:text-sm text-orange-500">
                  {t("Location")}
                </span>
                <span>{project?.location || t("Riyadh - Al Qirawan")}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Square size={22} className="text-orange-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs sm:text-sm text-orange-500">
                  {t("Price")}
                </span>
                <span>
                  ${Number(project?.price || 875000).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
        <a
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("interested")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          href="#interested"
          className="text-base sm:text-lg bg-orange-500/50 hover:bg-orange-500 text-white px-5 sm:px-7 py-2 rounded-2xl sm:rounded-3xl border border-orange-600 font-semibold transition self-start lg:self-auto"
        >
          {t("Register Interest")}
        </a>
      </motion.div>
    </section>
  );
}
