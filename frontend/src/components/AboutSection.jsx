import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import aboutSection1 from "../assets/aboutSection1.webp";
import CircularText from "./CircularText";
import aboutSection3 from "../assets/aboutSection3.png";
import aboutSection4 from "../assets/aboutSection4.webp";
import aboutSection5 from "../assets/aboutSection5.webp";
import aboutSection6 from "../assets/aboutSection6.png";

const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="relative w-full overflow-x-clip bg-gray-900 py-16 text-white md:py-24"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto grid max-w-[1200px] items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative space-y-6"
        >
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
            <span className="inline-block h-[2px] w-8 bg-orange-500" />
            {t("aboutSection.label")}
          </div>

          <h2 className="max-w-xl text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
            {t("aboutSection.heading")}
          </h2>

          <div className="grid items-start gap-8 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)] lg:grid-cols-[minmax(0,220px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,260px)_minmax(0,1fr)]">
            <div className="relative mx-auto w-full max-w-[280px] sm:mx-0">
              <img
                src={aboutSection1}
                alt={t("aboutSection.ownerAlt")}
                width={360}
                height={420}
                loading="lazy"
                decoding="async"
                className="relative z-10 w-full rounded-2xl shadow-lg"
              />
              <motion.img
                src={aboutSection3}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute -start-6 top-28 z-0 w-14 select-none opacity-90 sm:-start-8 sm:w-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="text-start">
              <div className="relative mx-auto grid aspect-square w-36 place-items-center rounded-full border-2 border-dashed border-orange-500 sm:mx-0 lg:w-44">
                <CircularText text={t("aboutSection.badgeText")} />
                <div className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-orange-500 text-white lg:h-20 lg:w-20">
                  <Home className="h-7 w-7 lg:h-8 lg:w-8" />
                </div>
              </div>

              <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-slate-300 sm:mx-0 sm:text-lg">
                {t("aboutSection.description")}
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-orange-600 hover:shadow-xl"
              >
                {t("aboutSection.cta")}
                <span
                  className={`text-lg ${isRTL ? "me-2 rotate-180" : "ms-2"}`}
                >
                  ›
                </span>
              </Link>
            </div>
          </div>
        </motion.div>

        <div
          className={`relative mx-auto w-fit ${
            isRTL ? "pe-14 sm:pe-16 lg:pe-20" : "ps-14 sm:ps-16 lg:ps-20"
          }`}
        >
          <motion.img
            src={aboutSection6}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -end-4 top-8 w-16 select-none opacity-40 sm:w-20"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative">
            <span
              aria-hidden
              className="absolute inset-s-0 inset-e-0 top-10 bottom-0 -z-10 bg-white"
              style={{
                clipPath: isRTL
                  ? "polygon(100% 16%, 0 0, 0 100%, 100% 100%)"
                  : "polygon(0 16%, 100% 0, 100% 100%, 0 100%)",
              }}
            />

            <img
              src={aboutSection4}
              alt={t("aboutSection.buildingAlt")}
              width={360}
              height={480}
              loading="lazy"
              decoding="async"
              className="relative z-10 w-[220px] shadow-lg sm:w-[260px] md:w-[300px] lg:w-[340px]"
            />

            <motion.img
              src={aboutSection6}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -end-6 top-4 z-0 w-14 select-none opacity-90 lg:w-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <div
              className={`absolute top-1/2 z-20 -translate-y-1/2 ${
                isRTL ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
              }`}
            >
              <div className="relative flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-orange-500 p-2 sm:h-[128px] sm:w-[128px] lg:h-[148px] lg:w-[148px] lg:p-3">
                <img
                  src={aboutSection5}
                  alt={t("aboutSection.badgeAlt")}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
