import React from "react";
import { useTranslation } from "react-i18next";
import { Hero } from "../components/Hero";
import AboutSection from "../components/AboutSection";
import CityHouse from "../components/CityHouse";
import Article from "../components/Article";
import FAQSection from "../components/FAQSection";
import Counter from "../components/Counter";
import PageMeta from "../components/PageMeta.jsx";
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from "../data/site.js";

const Home = () => {
  const { t } = useTranslation();
  const jsonLd = [
    organizationJsonLd(),
    websiteJsonLd(),
    faqJsonLd([
      { question: t("faq.question1"), answer: t("faq.answer1") },
      { question: t("faq.question2"), answer: t("faq.answer2") },
      { question: t("faq.question3"), answer: t("faq.answer3") },
      { question: t("faq.question4"), answer: t("faq.answer4") },
      { question: t("faq.question5"), answer: t("faq.answer5") },
    ]),
  ];

  return (
    <div>
      <PageMeta
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <AboutSection />
      <CityHouse />
      <Article />
      <FAQSection />
      <Counter />
    </div>
  );
};

export default Home;
