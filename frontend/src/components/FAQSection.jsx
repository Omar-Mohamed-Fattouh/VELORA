"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check } from "lucide-react";
import img from "../assets/img3.webp";

export default function FAQSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const faqData = [
    {
      id: 1,
      question: t("faq.question1"),
      content: t("faq.answer1"),
      image: img,
    },
    {
      id: 2,
      question: t("faq.question2"),
      content: t("faq.answer2"),
      image: img,
    },
    {
      id: 3,
      question: t("faq.question3"),
      content: t("faq.answer3"),
      image: img,
    },
    {
      id: 4,
      question: t("faq.question4"),
      content: t("faq.answer4"),
      image: img,
    },
    {
      id: 5,
      question: t("faq.question5"),
      content: t("faq.answer5"),
      image: img,
    },
  ];
  const [expandedItem, setExpandedItem] = useState(1);

  const toggleItem = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="bg-gray-50 px-4 py-12 sm:px-6 lg:px-12"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <span className="text-orange-700 font-semibold text-base sm:text-lg">
                {t("faq.label")}
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h2
                id="faq-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug"
              >
                {t("faq.heading")}
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {t("faq.description")}
              </p>
            </div>

            {/* Property Image Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-orange-200">
              <div className="relative">
                <img
                  src={img}
                  alt={t("faq.propertyImageAlt")}
                  width={800}
                  height={520}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-48 sm:h-64 object-cover rounded-xl"
                />

                {/* Property Info Overlay */}
                <div
                  className={`absolute bottom-3 ${isRTL ? "left-3" : "right-3"} sm:bottom-4 ${isRTL ? "sm:left-4" : "sm:right-4"} bg-white/90 backdrop-blur-md rounded-lg p-3 sm:p-4 shadow-lg w-48 sm:w-64`}
                >
                  <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    {t("faq.cardTitle")}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-orange-500" />
                      <span>{t("faq.cardItem1")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 text-orange-500" />
                      <span>{t("faq.cardItem2")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - FAQ */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={expandedItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                  className={`w-full px-3 sm:px-4 py-3 sm:py-4 ${isRTL ? "text-right" : "text-left"} flex items-center justify-between hover:bg-gray-50 transition-colors`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-sm sm:text-base
                      ${
                        expandedItem === item.id
                          ? "bg-orange-700 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <span dir="ltr">{String(item.id).padStart(2, "0")}.</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{
                      rotate: expandedItem === item.id ? 180 : 0,
                      scale: expandedItem === item.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.div
                      id={`faq-answer-${item.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="bg-gray-900 rounded-xl p-4 sm:p-6 text-white">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                {item.content}
                              </p>
                            </div>
                            {item.image && (
                              <div className="flex-shrink-0">
                                <img
                                  src={item.image || "/placeholder.svg"}
                                  alt={t("faq.answerImageAlt")}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full sm:w-40 h-28 sm:h-24 object-cover rounded-lg"
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
