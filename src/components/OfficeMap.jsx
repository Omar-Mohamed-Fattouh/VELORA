import React, { memo } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const titleVariants = { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
const subtitleVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const mapVariants = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
const pinVariants = { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1 } };

function OfficeMap() {
  const { t } = useTranslation();

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
          <iframe
            title="office-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.434183181232!2d-122.08424968468145!3d37.42206597982486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a6c7c0f4b5%3A0xd6f9f6f00b5f5e43!2sGoogleplex!5e0!3m2!1sen!2sus!4v1633028185961!5m2!1sen!2sus"
            className="w-full h-[420px] md:h-[520px] border-0"
            allowFullScreen
            loading="lazy"
          />

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            variants={pinVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
          >
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 ring-4 ring-white/80 shadow"
              role="img"
              aria-label="Office location"
            >
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="sr-only">Viora Tech HQ</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(OfficeMap);
