"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

export default function BestProjects() {
  const swiperRef = useRef(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const [zoomIndex, setZoomIndex] = useState(null);
  const [prevButton, setPrevButton] = useState(null);
  const [nextButton, setNextButton] = useState(null);

  const properties = [
    { id: 1, image: img1, title: t("Modern Villa with Pool") },
    { id: 2, image: img2, title: t("Contemporary Glass House") },
    { id: 3, image: img3, title: t("Minimalist Luxury Home") },
    { id: 4, image: img1, title: t("Blue Modern House") },
    { id: 5, image: img2, title: t("Sleek Glass House") },
  ];

  const totalImages = properties.length;

  const handlePrev = () => {
    setZoomIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNext = () => {
    setZoomIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Ensure Swiper navigation buttons are assigned after render
    setPrevButton(document.querySelector(".project-button-prev"));
    setNextButton(document.querySelector(".project-button-next"));
  }, []);

  return (
    <section
      className="py-8 md:py-16 bg-gradient-to-b from-gray-50 to-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6">
            <div className="h-px bg-orange-500 w-8 md:w-12"></div>
            <span className="text-orange-500 font-medium tracking-wider text-xs md:text-lg uppercase">
              {t("OUR BEST PROJECTS")}
            </span>
            <div className="h-px bg-orange-500 w-8 md:w-12"></div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight text-balance px-4">
            {t("Property Investment Assisting")}
            <br />
            {t("Projects House Lucrative.")}
          </h2>
        </motion.div>

        {/* Swiper Showcase */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Navigation, Autoplay]}
            centeredSlides
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            slidesPerView={3}
            loop
            speed={600}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevButton,
              nextEl: nextButton,
            }}
            dir={isRTL ? "rtl" : "ltr"}
            className="w-full h-full"
            pagination={false}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={property.id}>
                {({ isActive }) => (
                  <div
                    className={`relative w-full max-w-[700px] h-[400px] lg:h-[650px] overflow-hidden shadow-lg transition-all duration-500 ${
                      isActive
                        ? "scale-100 z-30 rounded-2xl"
                        : "scale-90 opacity-80 rounded-xl bottom-[50%]"
                    }`}
                  >
                    <img
                      src={property.image}
                      alt={property.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <button
                        onClick={() => setZoomIndex(index)}
                        aria-label={
                          isRTL ? "تكبير صورة المشروع" : "Zoom project image"
                        }
                        className="absolute top-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-md hover:bg-orange-600 transition"
                      >
                        <ZoomIn className="w-6 h-6" />
                      </button>
                    )}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className={`project-button-prev absolute top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:scale-105 transition z-40 ${
              isRTL ? "right-4" : "left-4"
            }`}
            aria-label={isRTL ? "المشروع السابق" : "Previous project"}
          >
            {isRTL ? (
              <ChevronRight className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            )}
          </button>
          <button
            className={`project-button-next absolute top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:scale-105 transition z-40 ${
              isRTL ? "left-4" : "right-4"
            }`}
            aria-label={isRTL ? "المشروع التالي" : "Next project"}
          >
            {isRTL ? (
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronRight className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomIndex !== null && (
        <div className="fixed h-[100vh] inset-0 bg-black/75 z-50 flex items-center justify-center p-4">
          {/* Prev */}
          <button
            onClick={handlePrev}
            aria-label={isRTL ? "الصورة السابقة" : "Previous image"}
            className={`absolute top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-105 transition z-50 ${
              isRTL ? "right-4" : "left-4"
            }`}
          >
            {isRTL ? (
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronRight className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full flex items-center justify-center"
          >
            <img
              src={properties[zoomIndex].image}
              alt={properties[zoomIndex].title}
              className="w-[60%] h-[50%] rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-8 right-[20%] text-white font-medium px-4 py-1 rounded-lg">
              {zoomIndex + 1}/{totalImages}
            </div>
          </motion.div>

          {/* Next */}
          <button
            onClick={handleNext}
            aria-label={isRTL ? "الصورة التالية" : "Next image"}
            className={`absolute top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-105 transition z-50 ${
              isRTL ? "left-4" : "right-4"
            }`}
          >
            {isRTL ? (
              <ChevronRight className="w-6 h-6 text-gray-700" />
            ) : (
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* Close */}
          <button
            onClick={() => setZoomIndex(null)}
            aria-label={isRTL ? "إغلاق" : "Close"}
            className="absolute h-10 w-10 flex justify-center items-center top-4 right-4 bg-white text-gray-800 p-3 rounded-full shadow hover:bg-gray-200 z-50"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}
