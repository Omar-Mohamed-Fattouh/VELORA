import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd } from "../data/site.js";
import { loc, services } from "../data/content.js";

export default function Services() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="bg-slate-50 px-4 py-14 md:px-6" dir={isRTL ? "rtl" : "ltr"}>
      <PageMeta
        title={t("seo.services.title")}
        description={t("seo.services.description")}
        path="/services"
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.services"), path: "/services" },
        ])}
      />
      <div className="container mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
          {t("nav.services")}
        </p>
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          {t("page.services.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          {t("page.services.description")}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-slate-900">
                {loc(item.title, i18n.language)}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                {loc(item.text, i18n.language)}
              </p>
            </article>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
        >
          {t("header.contactUs")}
        </Link>
      </div>
    </section>
  );
}
