import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd } from "../data/site.js";

export default function GenericPage({
  title,
  description,
  badge = "VELORA",
  path = "/",
}) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="min-h-[60vh] bg-slate-50 px-4 py-16 md:px-6 md:py-20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <PageMeta
        title={`${title} | VELORA`}
        description={description}
        path={path}
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: title, path },
        ])}
      />
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-orange-500 ${isRTL ? "text-right" : "text-left"}`}>
          {badge}
        </p>
        <h1 className={`text-4xl font-bold tracking-tight text-slate-900 md:text-5xl ${isRTL ? "text-right" : "text-left"}`}>
          {title}
        </h1>
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 ${isRTL ? "text-right" : "text-left"}`}>
          {description}
        </p>

        <div className={`mt-8 flex flex-wrap gap-4 ${isRTL ? "justify-end" : "justify-start"}`}>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            {t("Go to Homepage")}
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            {t("Projects")}
          </Link>
        </div>
      </div>
    </section>
  );
}
