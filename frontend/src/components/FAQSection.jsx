"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ChevronDown, Check } from "lucide-react";
import faqCover from "../assets/img1.webp";
import faqAnswer1 from "../assets/img2.webp";
import faqAnswer2 from "../assets/house1.webp";
import faqAnswer3 from "../assets/aboutSection4.webp";
import faqAnswer4 from "../assets/Hero1.webp";
import faqAnswer5 from "../assets/house2.webp";

export default function FAQSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const faqData = [
    {
      id: 1,
      question: t("faq.question1"),
      content: t("faq.answer1"),
      image: faqAnswer1,
    },
    {
      id: 2,
      question: t("faq.question2"),
      content: t("faq.answer2"),
      image: faqAnswer2,
    },
    {
      id: 3,
      question: t("faq.question3"),
      content: t("faq.answer3"),
      image: faqAnswer3,
    },
    {
      id: 4,
      question: t("faq.question4"),
      content: t("faq.answer4"),
      image: faqAnswer4,
    },
    {
      id: 5,
      question: t("faq.question5"),
      content: t("faq.answer5"),
      image: faqAnswer5,
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
                  src={faqCover}
                  alt={t("faq.propertyImageAlt")}
                  width={800}
                  height={520}
                  loading="lazy"
                  decoding="async"
                  className="h-52 w-full rounded-xl object-cover object-center sm:h-72"
                />

                <div className="mt-3 w-full rounded-lg bg-white p-3 shadow-sm sm:absolute sm:bottom-4 sm:end-4 sm:mt-0 sm:w-56 sm:bg-white/95 sm:p-4 sm:shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">
                    {t("faq.cardTitle")}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 shrink-0 text-orange-500" />
                      <span>{t("faq.cardItem1")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                      <Check className="w-4 h-4 shrink-0 text-orange-500" />
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
                                  src={item.image}
                                  alt={t("faq.answerImageAlt")}
                                  loading="lazy"
                                  decoding="async"
                                  className="h-32 w-full rounded-lg object-cover object-center sm:h-24 sm:w-40"
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
