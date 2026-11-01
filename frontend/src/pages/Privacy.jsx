import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd } from "../data/site.js";

export default function Privacy() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="min-h-[60vh] bg-slate-50 px-4 py-16 md:px-6 md:py-20"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <PageMeta
        title={t("seo.privacy.title")}
        description={t("seo.privacy.description")}
        path="/privacy"
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: t("privacy.title"), path: "/privacy" },
        ])}
      />
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600 ${isRTL ? "text-right" : "text-left"}`}
        >
          {t("privacy.badge")}
        </p>
        <h1
          className={`text-4xl font-bold tracking-tight text-slate-900 md:text-5xl ${isRTL ? "text-right" : "text-left"}`}
        >
          {t("privacy.title")}
        </h1>
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 ${isRTL ? "text-right" : "text-left"}`}
        >
          {t("privacy.intro")}
        </p>

        <div className={`mt-10 space-y-8 text-slate-700 ${isRTL ? "text-right" : "text-left"}`}>
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              {t("privacy.collectTitle")}
            </h2>
            <p className="mt-3 leading-relaxed">{t("privacy.collectText")}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              {t("privacy.useTitle")}
            </h2>
            <p className="mt-3 leading-relaxed">{t("privacy.useText")}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              {t("privacy.keepTitle")}
            </h2>
            <p className="mt-3 leading-relaxed">{t("privacy.keepText")}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              {t("privacy.contactTitle")}
            </h2>
            <p className="mt-3 leading-relaxed">{t("privacy.contactText")}</p>
          </section>
        </div>
      </div>
    </section>
  );
}
