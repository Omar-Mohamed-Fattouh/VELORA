import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroshapeBu from "../assets/heroshapeBu.png";

export default function CityHouse() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const houses = [
    {
      id: 1,
      titleKey: "cityhouse.house1",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
    {
      id: 2,
      titleKey: "cityhouse.house2",
      img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
    {
      id: 3,
      titleKey: "cityhouse.house3",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
    {
      id: 4,
      titleKey: "cityhouse.house4",
      img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
    {
      id: 5,
      titleKey: "cityhouse.house5",
      img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
    {
      id: 6,
      titleKey: "cityhouse.house6",
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
    {
      id: 7,
      titleKey: "cityhouse.house7",
      img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
    {
      id: 8,
      titleKey: "cityhouse.house8",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&h=700&q=80",
      rooms: 25,
      size: "2505",
      beds: 2,
    },
  ];

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
            <div className="flex items-center text-orange-400 text-sm font-semibold tracking-wider">
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
                  src={house.img}
                  alt={t(house.titleKey)}
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

                <button
                  className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} w-14 h-14 rounded-full bg-orange-500 text-white font-bold shadow-lg flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 text-sm`}
                >
                  {t("cityhouse.view")}
                </button>

                <span
                  className={`absolute bottom-24 ${isRTL ? "right-5" : "left-5"} bg-orange-500 group-hover:opacity-[90%] text-white px-2 py-1 text-xs sm:text-sm border-2 border-b-0 group-hover:rounded-t-md transition-all duration-900 z-0`}
                >
                  {String(house.id).padStart(2, "0")}
                </span>

                <div
                  className={`absolute bottom-0 inset-s-0 inset-e-0 p-3 sm:p-4 z-20 text-white bg-gray-900/70 group-hover:bg-inherit transition-all duration-700 ${isRTL ? "text-right" : "text-left"}`}
                >
                  <h3 className="mt-1 min-w-0 break-words font-semibold text-base sm:text-lg">
                    {t(house.titleKey)}
                  </h3>
                  <div
                    className={`flex flex-wrap gap-y-1 text-xs sm:text-sm mt-1 sm:mt-2 opacity-90 divide-x-2 divide-gray-200 ${isRTL ? "divide-x-reverse" : ""}`}
                  >
                    <span className="px-2">
                      {house.rooms} {t("cityhouse.room")}
                    </span>
                    <span className="px-2">
                      {house.size} {t("cityhouse.sqUnit")}
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
