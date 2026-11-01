import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import house1 from "../assets/house1.webp";
import house2 from "../assets/house2.webp";
import house3 from "../assets/house3.webp";
import house4 from "../assets/house4.webp";
import house5 from "../assets/house5.webp";

export default function ProjectAreaTwo() {
  const { t } = useTranslation();

  const projects = [
    {
      id: "01.",
      title: t("Interior Design City House"),
      image: house1,
      link: "/product-details",
      delay: 0,
    },
    {
      id: "02.",
      title: t("Lux Life Room Magazine"),
      image: house2,
      link: "/product-details",
      delay: 0.2,
    },
    {
      id: "03.",
      title: t("Ecological House"),
      image: house3,
      link: "/product-details",
      delay: 0.4,
    },
    {
      id: "04.",
      title: t("Club & Wellness City Room"),
      image: house4,
      link: "/product-details",
      delay: 0.6,
    },
    {
      id: "05.",
      title: t("London Home City Room"),
      image: house5,
      link: "/product-details",
      delay: 0.8,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));

  return (
    <section className="bg-gray-900 py-24 px-4 md:px-12 lg:px-20">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-[2px] bg-orange-500"></span>
          <h6 className="text-orange-500 uppercase tracking-widest font-semibold">
            {t("Our Best Projects")}
          </h6>
          <span className="w-8 h-[2px] bg-orange-500"></span>
        </div>
        <h3 className="text-2xl md:text-4xl font-bold text-white leading-snug">
          {t("Property Investment Assisting Projects House lucrative.")}
        </h3>
      </motion.div>

      {/* Responsive grid/slider */}
      <div className="flex flex-col md:flex-row justify-center gap-7 overflow-hidden">
        {projects.map((proj, idx) => {
          const isActive = idx === activeIndex;
          return (
            <motion.div
              key={idx}
              layout
              className={`relative group h-[180px] md:h-[420px] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                isActive ? "md:w-[380px] h-[300px] w-full" : "md:w-[200px] w-full"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: proj.delay }}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
            >
              {/* Image */}
              <motion.img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Orange gradient overlay */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-600/90 via-orange-600/40 to-transparent"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                ></motion.div>
              )}

              {/* Vertical text (inactive state) */}
              {!isActive && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-5 left-2/7 xl:left-1/2 xl:-translate-x-1/2 translate-x-[-50%] text-white text-center"
                >
                  <h4 className="text-xl flex flex-col items-start font-bold xl:[writing-mode:vertical-rl] xl:rotate-180 whitespace-nowrap">
                    <span className="flex items-center text-2xl gap-4 font-semibold text-white">
                      <span className="inline w-6 h-[3px] xl:rotate-90 bg-white"></span>
                      {proj.id}
                    </span>
                    {proj.title}
                  </h4>
                </motion.div>
              )}

              {/* Active / Hover content */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] bg-white rounded-full flex items-center justify-between px-6 py-3 shadow-lg"
                >
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg md:text-2xl leading-tight">
                      <span className="flex items-center gap-2 text-orange-500 font-semibold">
                        <span className="block w-6 h-[2px] bg-orange-500"></span>
                        {proj.id}
                      </span>
                      {proj.title}
                    </h4>
                  </div>
                  <a
                    href={proj.link}
                    className="w-15 h-15 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
                    <ArrowUpRight className="text-white w-5 h-5" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
