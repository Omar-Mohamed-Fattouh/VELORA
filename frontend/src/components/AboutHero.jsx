import { useTranslation } from "react-i18next";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.png";
import heroshapeB from "../assets/heroshapeB.png";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import i18n from "../i18n"; // i18n import

export default function AboutHero() {
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar"; // check Arabic

  return (
    <section
      className="py-20 bg-white relative overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"} // set HTML direction
    >
      <img
        src={heroshapeB}
        alt="Wireframe Background"
        className={`absolute ${isRTL ? "left-0" : "right-0"} top-50 opacity-100 pointer-events-none`}
      />

      <div className="container mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Images */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`relative flex justify-center ${isRTL ? "lg:justify-start" : "lg:justify-end"}`}
        >
          <div className="relative w-full max-w-xl">
            {/* Main Image */}
            <img
              src={about1}
              alt="About 1"
              className="w-[400px] h-[500px] object-contain"
            />

            {/* Small Top-Right Icon */}
            <div className={`absolute top-10 ${isRTL ? "left-8" : "right-8"}`}>
              <img
                src={about3}
                alt="About 3"
                className="hidden xl:block w-35 h-35 object-contain"
              />
            </div>

            {/* Right/Left Bottom Image */}
            <div className={`absolute bottom-0 ${isRTL ? "-left-15" : "-right-15"}`}>
              <img
                src={about2}
                alt="About 2"
                className="w-3/4 border-[12px] border-white border-r-0 border-b-0 object-contain"
              />
            </div>

            {/* Contact Box */}
            <div className={`absolute bottom-3 ${isRTL ? "right-0" : "left-0"} translate-y-1/4 bg-orange-600 px-11 py-3 inline-flex items-center gap-2`}>
              <Phone className="w-7 h-7 text-white" />
              <span className="text-white font-bold text-xl tracking-wide">
                +91 123 654 900
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10">
            <p className={`text-orange-600 font-semibold mb-3 tracking-wide uppercase text-sm md:text-base ${isRTL ? "text-right" : "text-left"}`}>
              {t("Our About Property")}
            </p>
            <h2 className={`text-3xl md:text-4xl font-bold leading-snug mb-6 ${isRTL ? "text-right" : "text-left"}`}>
              {t("We Provide Thorough About Customer Service Home.")}
            </h2>
            <p className={`text-gray-600 mb-8 text-base leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
              {t("Home tailored design paragraph")}
            </p>

            {/* Button */}
            <motion.button
              className="bg-orange-600 text-white px-6 py-3 shadow-md font-semibold text-base flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("About More →")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
