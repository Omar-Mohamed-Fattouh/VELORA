import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroshapeBu from "../assets/heroshapeBu.png";
import { apartments, loc } from "../data/content.js";

export default function CityHouse() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const houses = apartments.slice(0, 8);

  return (
    <div
      className="w-full bg-white px-4 py-10 sm:px-6 sm:py-12 lg:px-12"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto">
        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6`}
        >
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className="flex items-center text-orange-700 text-sm font-semibold tracking-wider">
              <MoveRight
                className={`w-6 h-6 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`}
              />
              <span>{t("cityhouse.label")}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-5xl font-bold mt-2 text-gray-900 leading-tight">
              {t("cityhouse.heading")} <br /> {t("cityhouse.heading2")}
            </h2>
          </div>
          {/* Nav arrows — swap chevrons in RTL so left arrow still goes "back" */}
          <div className="flex gap-3 self-end md:self-auto">
            <button
              className="project-button-prev p-3 bg-white rounded-full shadow hover:shadow-md border border-zinc-200"
              aria-label={t("cityhouse.previous")}
            >
              {isRTL ? <ChevronRight /> : <ChevronLeft />}
            </button>
            <button
              className="project-button-next p-3 bg-white rounded-full shadow hover:shadow-md border border-zinc-200"
              aria-label={t("cityhouse.next")}
            >
              {isRTL ? <ChevronLeft /> : <ChevronRight />}
            </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          loop
          dir={isRTL ? "rtl" : "ltr"}
          key={isRTL ? "rtl" : "ltr"}
          speed={900}
          autoplay={{ delay: 5000 }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            760: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full max-sm:h-auto"
          pagination={false}
          navigation={{
            prevEl: ".project-button-prev",
            nextEl: ".project-button-next",
          }}
        >
          {houses.map((house) => (
            <SwiperSlide key={house.id}>
              <div className="relative h-[320px] md:h-[350px] overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={house.image}
                  alt={loc(house.title, i18n.language)}
                  width={600}
                  height={700}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 bg-black/70 ${isRTL ? "translate-x-full" : "-translate-x-full"} opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-90`}
                />

                <div className="absolute bottom-0 inset-s-0 inset-e-0 h-36 bg-orange-500 [clip-path:polygon(50%_0,-60%_100%,170%_100%)] translate-y-full opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-95 z-10">
                  <img
                    src={heroshapeBu}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-s-5 -top-10 w-full opacity-100 pointer-events-none"
                  />
                </div>

                <Link
                  to="/apartments"
                  aria-label={`${t("cityhouse.view")} ${loc(house.title, i18n.language)}`}
                  className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} w-14 h-14 rounded-full bg-orange-500 text-white font-bold shadow-lg flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 text-sm`}
                >
                  {t("cityhouse.view")}
                </Link>

                <span
                  className={`absolute bottom-24 ${isRTL ? "right-5" : "left-5"} bg-orange-700 group-hover:opacity-[90%] text-white px-2 py-1 text-xs sm:text-sm border-2 border-b-0 group-hover:rounded-t-md transition-all duration-900 z-0`}
                >
                  {String(house.id).padStart(2, "0")}
                </span>

                <div
                  className={`absolute bottom-0 inset-s-0 inset-e-0 p-3 sm:p-4 z-20 text-white bg-gray-900/70 group-hover:bg-inherit transition-all duration-700 ${isRTL ? "text-right" : "text-left"}`}
                >
                  <h3 className="mt-1 min-w-0 break-words font-semibold text-base sm:text-lg">
                    {loc(house.title, i18n.language)}
                  </h3>
                  <div
                    className={`flex flex-wrap gap-y-1 text-xs sm:text-sm mt-1 sm:mt-2 opacity-90 divide-x-2 divide-gray-200 ${isRTL ? "divide-x-reverse" : ""}`}
                  >
                    <span className="px-2">
                      {house.baths} {t("cityhouse.room")}
                    </span>
                    <span className="px-2">
                      {house.area} {t("cityhouse.sqUnit")}
                    </span>
                    <span className="px-2">
                      {house.beds}x {t("cityhouse.bed")}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
