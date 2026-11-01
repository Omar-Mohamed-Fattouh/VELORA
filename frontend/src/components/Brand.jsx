import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

import "swiper/css";

import Brand from "../assets/Brand.png";
import BrandHover from "../assets/BrandHover.png";

const brands = [Brand, Brand, Brand, Brand, Brand, Brand]; // repeat logos

export default function BrandCarousel() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="w-full py-5 px-20 lg:px-50" dir={isRTL ? "rtl" : "ltr"}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={5}
        loop={true}
        dir={isRTL ? "rtl" : "ltr"}
        rtl={isRTL}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 5, spaceBetween: 10 },
        }}
      >
        {brands.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex justify-center items-center group">
              {/* Default Image */}
              <div className="flex items-center justify-center border border-transparent rounded-full px-[42px] py-[17.5px] transition-all duration-300">
                <img
                  src={logo}
                  alt={t("Brand Logo")}
                  className="max-w-full h-auto transition-opacity duration-300 group-hover:opacity-0"
                />
              </div>

              {/* Hover Image */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-orange-500 rounded-full px-[42px] py-[17.5px]">
                <img
                  src={BrandHover}
                  alt={t("Brand Logo Hover")}
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
