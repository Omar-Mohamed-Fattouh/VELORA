import React, { memo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const titleVariants = { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
const subtitleVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const mapVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
const pinVariants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.4!2d32.271!3d30.5965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f8597d4e6c!2sIsmailia!5e0!3m2!1sen!2seg";

function OfficeMap() {
  const { t } = useTranslation();
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="w-full bg-white pt-15 pb-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-900"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("Visit Our Office")}
        </motion.h2>

        <motion.div
          className="mt-3 flex items-center justify-center gap-3"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="w-10 h-1 rounded-full bg-orange-500 inline-block" />
          <p className="text-lg text-gray-700">{t("You can find us at our headquarters below.")}</p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <motion.div
          className="relative rounded-lg overflow-hidden shadow-sm"
          variants={mapVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {showMap ? (
            <iframe
              title={t("map.title")}
              src={MAP_SRC}
              className="w-full h-[420px] md:h-[520px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <button
              type="button"
              onClick={() => setShowMap(true)}
              className="w-full h-[420px] md:h-[520px] bg-slate-100 flex flex-col items-center justify-center gap-4 text-slate-700"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 ring-4 ring-white/80 shadow">
                <MapPin className="w-6 h-6 text-white" />
              </span>
              <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white">
                {t("map.load")}
              </span>
            </button>
          )}

          {showMap ? (
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
              variants={pinVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            >
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 ring-4 ring-white/80 shadow"
                role="img"
                aria-label={t("map.title")}
              >
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
export default memo(OfficeMap);

