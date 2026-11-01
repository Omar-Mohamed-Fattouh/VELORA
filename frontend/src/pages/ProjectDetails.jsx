import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DetailsProject from "../components/DetailsProject";
import AboutProject from "../components/AboutDetails";
import BestProject from "../components/BestProjects";
import InterestForm from "../components/InterestForm";
import RelatedProductsSection from "../components/RelatedProductsSection";
import PageMeta from "../components/PageMeta.jsx";
import apiRequest from "../services/api.js";
import { breadcrumbJsonLd, propertyJsonLd } from "../data/site.js";
import { localizeProperty } from "../data/propertyI18n.js";

const ProjectDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await apiRequest(`/properties/${id}`);
        setProperty(localizeProperty(data.data?.item || null, i18n.language));
      } catch (error) {
        console.error(error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadProject();
  }, [id, i18n.language]);

  if (loading) {
    return <div className="p-10 text-center text-slate-600">{t("a11y.loading")}</div>;
  }

  if (!property) {
    return <div className="p-10 text-center text-red-500">{t("seo.notFound.title")}</div>;
  }

  return (
    <div>
      <PageMeta
        title={`${property.title} | VELORA`}
        description={property.short || property.description}
        path={`/projects/${property.id}`}
        image={property.image}
        jsonLd={[
          propertyJsonLd(property),
          breadcrumbJsonLd([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.projects"), path: "/projects" },
            { name: property.title, path: `/projects/${property.id}` },
          ]),
        ]}
      />
      <DetailsProject project={property} />
      <AboutProject project={property} />
      <BestProject />
      <InterestForm />
      <RelatedProductsSection />
    </div>
  );
};

export default ProjectDetails;
