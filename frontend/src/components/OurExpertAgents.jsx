import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import team1 from "../assets/team3.jpg";
import team2 from "../assets/team4.jpg";
import team3 from "../assets/team1.jpg";
import team4 from "../assets/team2.jpg";

const TEAM = [
  { id: 1, name: "Louis Coolidge", role: "Founder", img: team1 },
  { id: 2, name: "Louis Coolidge", role: "Founder", img: team2 },
  { id: 3, name: "Louis Coolidge", role: "Founder", img: team3 },
  { id: 4, name: "Louis Coolidge", role: "Founder", img: team4 },
  { id: 5, name: "Louis Coolidge", role: "Founder", img: team1 },
  { id: 6, name: "Louis Coolidge", role: "Founder", img: team2 },
  { id: 7, name: "Louis Coolidge", role: "Founder", img: team3 },
  { id: 8, name: "Louis Coolidge", role: "Founder", img: team4 },
];

export default function OurExpertAgents() {
  const [openId, setOpenId] = useState(null);
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const swiperRef = useRef(null);

  const toggleCard = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const goPrev = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    swiper.slidePrev();
  };

  const goNext = () => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    swiper.slideNext();
  };

  return (
    <section className="relative py-12 bg-gray-100" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4 max-w-[1180px]">
        {/* Title */}
        <div className="text-center mb-12 px-2">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="w-8 h-[2px] bg-orange-500 inline-block" />
            <h6 className="text-orange-500 font-semibold text-lg md:text-xl tracking-widest">
              {t("OUREXPERTAGENTS")}
            </h6>
            <span className="w-8 h-[2px] bg-orange-500 inline-block" />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto">
            {t("Marketing Teams Responsible Meet Promoting Apartment List.")}
          </h3>
        </div>

        {/* Swiper */}
        <div className="relative pb-14 lg:pb-0">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            navigation={false}
            pagination={false}
            dir={isRTL ? "rtl" : "ltr"}
          >
            {TEAM.map((member) => {
              const isOpen = openId === member.id;
              return (
                <SwiperSlide key={`team-${member.id}`}>
                  <article className="team-card group relative bg-transparent flex flex-col">
                    {/* Photo */}
                    <div className="relative overflow-hidden bg-white shadow-sm p-3 pt-0 flex-1">
                      <div
                        className={`absolute left-0 top-0 w-full h-28 transform transition-transform duration-300 ease-in-out z-0 bg-orange-500
                          ${isOpen ? "translate-y-0" : "-translate-y-full"}
                          group-hover:translate-y-0`}
                      />
                      <div className="relative top-3 border border-gray-200">
                        <div className="relative w-full aspect-[3/4]">
                          <img
                            src={member.img}
                            alt={member.name}
                            loading="lazy"
                            decoding="async"
                            className={`absolute inset-0 w-full h-full object-cover z-10 transition-all duration-500
                              ${
                                isOpen
                                  ? "filter-none"
                                  : "filter grayscale-[85%]"
                              }
                              group-hover:filter-none`}
                          />
                        </div>
                        <div
                          className={`absolute right-3 sm:right-4 bottom-4 sm:bottom-5 flex flex-col items-center gap-3 transition-all duration-300
                            ${
                              isOpen
                                ? "translate-x-0 opacity-100 visible z-10"
                                : "-translate-y-1/2 opacity-0 invisible"
                            }`}
                        >
                          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle].map(
                            (Icon, idx) => (
                              <a
                                key={idx}
                                href="#"
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center shadow text-orange-500"
                              >
                                <Icon />
                              </a>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="relative flex items-stretch">
                      <div
                        className={`flex-1 px-4 sm:px-6 py-4 sm:py-5 text-white transition-colors duration-300
                          ${isOpen ? "bg-orange-500" : "bg-gray-900"}
                          group-hover:bg-orange-500`}
                      >
                        <h4 className="text-lg sm:text-xl md:text-2xl font-semibold leading-tight">
                          {t(member.name)}
                        </h4>
                        <p className="text-sm sm:text-md opacity-90">
                          {t(member.role)}
                        </p>
                      </div>

                      <div className="w-[28px] sm:w-[34px] md:w-[38px] flex-shrink-0 relative">
                        <div
                          className={`absolute inset-0 transition-colors duration-300
                            ${isOpen ? "bg-gray-900" : "bg-orange-500"}
                            group-hover:bg-gray-900`}
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleCard(member.id)}
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Hide" : "Show"} social links for ${t(member.name)}`}
                        className={`absolute text-orange-500 ${
                          isRTL ? "left-3 sm:left-4" : "right-3 sm:right-4"
                        } top-1/2 transform -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-200`}
                      >
                        {isOpen ? (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M6 12h12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 6v12M6 12h12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div
            className={`absolute bottom-0 z-30 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 ${isRTL ? "right-0 lg:-right-4" : "left-0 lg:-left-4"}`}
          >
            <button
              onClick={goPrev}
              aria-label={isRTL ? "السابق" : "Previous agents"}
              className="w-10 h-10 lg:w-14 lg:h-14 bg-orange-500 hover:bg-gray-900 transform duration-700 text-white rounded-full shadow flex items-center justify-center"
            >
              {isRTL ? (
                <ArrowRight size={32} strokeWidth={2} />
              ) : (
                <ArrowLeft size={32} strokeWidth={2} />
              )}
            </button>
          </div>
          <div
            className={`absolute bottom-0 z-30 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 ${isRTL ? "left-0 lg:-left-4" : "right-0 lg:-right-4"}`}
          >
            <button
              onClick={goNext}
              aria-label={isRTL ? "التالي" : "Next agents"}
              className="w-10 h-10 lg:w-14 lg:h-14 bg-orange-500 hover:bg-gray-900 transform duration-700 text-white rounded-full shadow flex items-center justify-center"
            >
              {isRTL ? (
                <ArrowLeft size={32} strokeWidth={2} />
              ) : (
                <ArrowRight size={32} strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
