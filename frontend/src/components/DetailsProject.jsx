import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";
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
      className="relative w-full overflow-hidden bg-gray-900"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="relative h-[58vh] min-h-[280px] overflow-hidden sm:h-[70vh] lg:h-screen">
        <Swiper
          modules={[EffectFade]}
          effect="fade"
          speed={1200}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="h-full w-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <div className="relative h-full w-full">
                <img
                  src={img}
                  alt={`${project?.title || "project"} ${idx + 1}`}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent lg:from-gray-900/80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className={`absolute z-20 flex gap-2 ${
            isRTL ? "lg:right-4 lg:left-auto" : "lg:left-4 lg:right-auto"
          } bottom-3 left-1/2 -translate-x-1/2 flex-row lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 lg:translate-x-0 lg:flex-col`}
        >
          {getVisibleThumbs().map((img, idx) => {
            const realIndex = (activeIndex + idx) % images.length;
            return (
              <button
                key={`${realIndex}-${idx}`}
                type="button"
                onClick={() => handleThumbClick(realIndex)}
                className={`h-14 w-14 overflow-hidden rounded-md border-2 sm:h-16 sm:w-16 ${
                  realIndex === activeIndex
                    ? "border-orange-500"
                    : "border-white/70"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        className={`flex flex-col items-start justify-between gap-5 bg-gray-900 px-5 py-6 text-white sm:px-8 sm:py-8 lg:absolute lg:inset-x-0 lg:bottom-10 lg:z-30 lg:bg-transparent lg:px-20 xl:px-40 lg:flex-row lg:items-center ${
          isRTL ? "text-right" : "text-left"
        }`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-2xl font-bold sm:text-4xl lg:text-6xl">
            {project?.title || t("Capital Avenue (Al Qirawan)")}
          </h1>
          <div className="mt-5 flex flex-col gap-4 text-base sm:mt-8 sm:flex-row sm:gap-8 sm:text-xl lg:text-2xl">
            <div className="flex items-center gap-2">
              <Ruler size={22} className="shrink-0 text-orange-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-orange-500 sm:text-sm">
                  {t("Building Area")}
                </span>
                <span>
                  {Number(project?.area || 36000).toLocaleString()} {t("m²")}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={22} className="shrink-0 text-orange-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-orange-500 sm:text-sm">
                  {t("Location")}
                </span>
                <span>{project?.location || t("Riyadh - Al Qirawan")}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Square size={22} className="shrink-0 text-orange-500" />
              <div className="flex flex-col leading-tight">
                <span className="text-xs text-orange-500 sm:text-sm">
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
          className="rounded-2xl border border-orange-600 bg-orange-500 px-5 py-2 text-base font-semibold text-white transition hover:bg-orange-600 sm:rounded-3xl sm:px-7 sm:text-lg"
        >
          {t("Register Interest")}
        </a>
      </motion.div>
    </section>
  );
}
