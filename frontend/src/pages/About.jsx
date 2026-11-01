import React from "react";
import { useTranslation } from "react-i18next";
import HeroAbout from "../components/HeroAbout";
import AboutProperty from "../components/AboutProperty";
import ProjectShowcase from "../components/ProjectShowcase";
import AboutHero from "../components/AboutHero";
import Brand from "../components/Brand";
import OurExpertAgents from "../components/OurExpertAgents";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd, organizationJsonLd } from "../data/site.js";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full overflow-hidden">
      <PageMeta
        title={t("seo.about.title")}
        description={t("seo.about.description")}
        path="/about"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.about"), path: "/about" },
          ]),
        ]}
      />
      <HeroAbout />
      <AboutHero />
      <Brand />
      <AboutProperty />
      <OurExpertAgents />
      <ProjectShowcase />
    </div>
  );
}
