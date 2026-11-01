import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import FAQSection from "../components/FAQSection.jsx";
import { breadcrumbJsonLd } from "../data/site.js";

export default function Help() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const cards = [
    { title: t("page.help.buyTitle"), text: t("page.help.buyText"), to: "/apartments" },
    { title: t("page.help.sellTitle"), text: t("page.help.sellText"), to: "/contact" },
    { title: t("page.help.visitTitle"), text: t("page.help.visitText"), to: "/projects" },
  ];

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <PageMeta
        title={t("seo.help.title")}
        description={t("seo.help.description")}
        path="/help"
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: t("page.help.title"), path: "/help" },
        ])}
      />
      <section className="bg-slate-50 px-4 py-14 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
            {t("page.help.title")}
          </p>
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            {t("page.help.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {t("page.help.description")}
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <Link
                key={card.title}
                to={card.to}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-orange-300"
              >
                <h2 className="text-xl font-bold text-slate-900">{card.title}</h2>
                <p className="mt-3 text-slate-600">{card.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
    </div>
  );
}
