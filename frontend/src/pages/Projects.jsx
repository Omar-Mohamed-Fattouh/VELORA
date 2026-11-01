import React from "react";
import { useTranslation } from "react-i18next";
import ProjectHero from "../components/ProjectHero";
import OurBestProject from "../components/OurBestProject";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd } from "../data/site.js";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50">
      <PageMeta
        title={t("seo.projects.title")}
        description={t("seo.projects.description")}
        path="/projects"
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.projects"), path: "/projects" },
        ])}
      />
      <ProjectHero />
      <OurBestProject />
    </div>
  );
}

