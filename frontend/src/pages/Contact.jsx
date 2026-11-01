import React from "react";
import { useTranslation } from "react-i18next";
import ContactHero from "../components/ContactHero";
import OfficeMap from "../components/OfficeMap";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd, organizationJsonLd } from "../data/site.js";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta
        title={t("seo.contact.title")}
        description={t("seo.contact.description")}
        path="/contact"
        jsonLd={[
          organizationJsonLd(),
          breadcrumbJsonLd([
            { name: t("nav.home"), path: "/" },
            { name: t("nav.contact"), path: "/contact" },
          ]),
        ]}
      />
      <ContactHero />
      <OfficeMap />
    </>
  );
}
