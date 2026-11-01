import { useEffect, useRef, useState } from "react";
import { Home, Ruler, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import img2 from "../assets/Hero2.webp";
import img3 from "../assets/Hero3.webp";
import heroshapeBu from "../assets/heroshapeBu.png";
import useReducedMotion from "../hooks/useReducedMotion";

function OrangeStar({ className }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      fill="#f97316"
    >
      <path d="M32 2 L38 26 L62 32 L38 38 L32 62 L26 38 L2 32 L26 26 Z" />
    </svg>
  );
}

function OrangeWave({ className }) {
  return (
    <svg
      viewBox="0 0 220 40"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M4 28 C 40 4, 80 4, 110 20 S 180 40, 216 12"
        stroke="#f97316"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

const img1 = "/hero-lcp.webp";

const SLIDE_INTERVAL = 5000;

export function Hero() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const reduceMotion = useReducedMotion();
  const slides = [
    {
      id: 1,
      subtitle: t("hero.subtitle"),
      title: (
        <>
          {t("hero.slide1.titleStart")}{" "}
          <span className="text-orange-500">
            {t("hero.slide1.titleAccent")}
          </span>{" "}
          <br /> {t("hero.slide1.titleEnd")}
        </>
      ),
      text: t("hero.slide1.text"),
      stats: [
        { icon: <Home className="w-5 h-5" />, text: t("hero.slide1.stat1") },
        { icon: <Ruler className="w-5 h-5" />, text: t("hero.slide1.stat2") },
      ],
      image: img1,
      location: t("hero.slide1.location"),
    },
    {
      id: 2,
      subtitle: t("hero.subtitle"),
      title: (
        <>
          {t("hero.slide2.titleStart")}{" "}
          <span className="text-orange-500">
            {t("hero.slide2.titleAccent")}
          </span>{" "}
          <br />
          {t("hero.slide2.titleEnd")}
        </>
      ),
      text: t("hero.slide2.text"),
      stats: [
        { icon: <Home className="w-5 h-5" />, text: t("hero.slide2.stat1") },
        { icon: <Ruler className="w-5 h-5" />, text: t("hero.slide2.stat2") },
      ],
      image: img2,
      location: t("hero.slide2.location"),
    },
    {
      id: 3,
      subtitle: t("hero.subtitle"),
      title: (
        <>
          {t("hero.slide3.titleStart")}{" "}
          <span className="text-orange-500">
            {t("hero.slide3.titleAccent")}
          </span>{" "}
          <br />
          {t("hero.slide3.titleEnd")}
        </>
      ),
      text: t("hero.slide3.text"),
      stats: [
        { icon: <Home className="w-5 h-5" />, text: t("hero.slide3.stat1") },
        { icon: <Ruler className="w-5 h-5" />, text: t("hero.slide3.stat2") },
      ],
      image: img3,
      location: t("hero.slide3.location"),
    },
  ];

  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const gotoSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const el = swiper.el;

      const handleEnter = () => swiper.autoplay?.stop?.();
      const handleLeave = () => {
        if (!reduceMotion) swiper.autoplay?.start?.();
      };

      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, [reduceMotion]);

  return (
    <section
      className="relative flex items-center overflow-hidden bg-gray-900 w-full h-[calc(100svh-5rem)] min-h-[540px] max-h-[900px] lg:h-[calc(100svh-8rem)] lg:min-h-[620px]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={
          reduceMotion
            ? false
            : { delay: SLIDE_INTERVAL, disableOnInteraction: false }
        }
        loop
        key={isRTL ? "rtl" : "ltr"}
        dir={isRTL ? "rtl" : "ltr"}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative w-full h-full"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div
                className={`absolute inset-0 grid grid-cols-1 lg:grid-cols-2 items-center ${isRTL ? "lg:[direction:rtl]" : ""}`}
              >
                <div
                  className={`relative z-10 flex flex-col justify-center h-full text-white space-y-4 overflow-hidden px-5 sm:px-10 md:px-14 lg:px-12 ${isRTL ? "text-right" : "text-left"}`}
                >
                  <motion.img
                    src={heroshapeBu}
                    alt=""
                    aria-hidden="true"
                    className={`absolute bottom-0 ${isRTL ? "right-0" : "left-0"} object-contain opacity-80`}
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  />

                  <motion.div
                    className={`absolute ${isRTL ? "left-60" : "right-60"} top-20 z-10`}
                    aria-hidden="true"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ y: [0, -20, 0], opacity: 1 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <OrangeStar className="h-16 w-16 sm:h-20 sm:w-20" />
                  </motion.div>

                  <motion.div
                    className={`absolute ${isRTL ? "left-35" : "right-35"} top-55 z-10`}
                    aria-hidden="true"
                    initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                    animate={{
                      x: isRTL ? [0, -20, 0] : [0, 20, 0],
                      opacity: 1,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <OrangeWave className="h-10 w-40" />
                  </motion.div>

                  <motion.div
                    className="relative z-20"
                    initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="inline-flex items-center text-xs sm:text-sm bg-white min-h-7 text-orange-700 font-semibold px-3 md:px-5 py-1 rounded-full shadow">
                      {isRTL ? "←" : "→"} {s.subtitle}
                    </div>
                  </motion.div>

                  <motion.div
                    className="relative z-20 text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug"
                    initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                  >
                    {s.id === 1 ? <h1>{s.title}</h1> : <p>{s.title}</p>}
                  </motion.div>

                  <motion.p
                    className="relative z-20 text-base md:text-lg text-gray-300 leading-relaxed max-w-md"
                    initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                  >
                    {s.text}
                  </motion.p>

                  <motion.ul
                    className="relative z-20 flex mt-1 flex-wrap"
                    initial={{ x: isRTL ? 100 : -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  >
                    {s.stats.map((st, i) => (
                      <li
                        key={i}
                        className="flex items-center text-xs sm:text-sm md:text-base gap-2 border border-gray-600 px-3 sm:px-4 py-2 sm:py-3 bg-black/40"
                      >
                        {st.icon}
                        <span className="text-white font-medium">
                          {st.text}
                        </span>
                      </li>
                    ))}
                  </motion.ul>
                </div>

                <motion.div
                  className="hidden lg:block relative w-full h-full border-s-4 border-white"
                  initial={{ x: isRTL ? -200 : 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <img
                    src={s.image}
                    alt={s.location}
                    width={1600}
                    height={1067}
                    loading={s.id === 1 ? "eager" : "lazy"}
                    fetchPriority={s.id === 1 ? "high" : undefined}
                    decoding="async"
                    className="w-full h-full object-cover"
                  />

                  <motion.div
                    className={`absolute bottom-20 lg:bottom-6 z-20 ${isRTL ? "right-4 lg:left-4 lg:right-auto" : "left-4 lg:right-4 lg:left-auto"}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <div className="bg-orange-700 text-white py-3 px-4 shadow-lg flex items-center gap-3 border-2 border-white max-w-[min(82vw,22rem)]">
                      <MapPin className="w-5 h-5 shrink-0" />
                      <span className="font-medium text-sm leading-snug">
                        {s.location}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="lg:hidden absolute inset-0 z-0">
                <img
                  src={s.image}
                  alt={s.location}
                  width={1600}
                  height={1067}
                  loading={s.id === 1 ? "eager" : "lazy"}
                  fetchPriority={s.id === 1 ? "high" : undefined}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
              </div>

              <div className="absolute bottom-16 inset-s-4 z-20 lg:hidden">
                <div className="bg-orange-700 text-white py-2.5 px-3 shadow-lg flex items-center gap-2 border-2 border-white max-w-[min(82vw,22rem)]">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span className="font-medium text-xs sm:text-sm leading-snug">
                    {s.location}
                  </span>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-50">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => gotoSlide(i)}
            aria-label={String(i + 1).padStart(2, "0")}
            className={`w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-base md:text-lg lg:text-xl font-semibold transition-colors duration-300 ${
              i === activeIndex
                ? "bg-orange-700 text-white"
                : "bg-white text-gray-900 hover:bg-gray-200"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </section>
  );
}
