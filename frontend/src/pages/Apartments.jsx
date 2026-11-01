import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd } from "../data/site.js";
import { apartments, loc } from "../data/content.js";

export default function Apartments() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const items = useMemo(() => {
    return apartments.filter((item) => {
      const haystack = `${loc(item.title, i18n.language)} ${loc(item.location, i18n.language)}`.toLowerCase();
      const matchesQuery = haystack.includes(query.trim().toLowerCase());
      const matchesStatus = status === "all" || item.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [query, status, i18n.language]);

  return (
    <section className="bg-slate-50 px-4 py-14 md:px-6" dir={isRTL ? "rtl" : "ltr"}>
      <PageMeta
        title={t("seo.apartments.title")}
        description={t("seo.apartments.description")}
        path="/apartments"
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.apartments"), path: "/apartments" },
        ])}
      />
      <div className="container mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
          {t("nav.apartments")}
        </p>
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          {t("page.apartments.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          {t("page.apartments.description")}
        </p>

        <div className="mt-8 flex flex-col gap-3 md:flex-row">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("Search apartments...")}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-orange-500"
          >
            <option value="all">{t("All statuses")}</option>
            <option value="Available">{t("Available")}</option>
            <option value="Under Construction">{t("Under Construction")}</option>
            <option value="Sold">{t("Sold")}</option>
          </select>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={loc(item.title, i18n.language)}
                width={600}
                height={400}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
                  {t(item.status)}
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  {loc(item.title, i18n.language)}
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  {loc(item.location, i18n.language)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {loc(item.description, i18n.language)}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700">
                  <span>{item.beds} {t("cityhouse.bed")}</span>
                  <span>{item.area} {t("m²")}</span>
                  <span className="font-semibold text-orange-600">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
                >
                  {t("Register Interest")}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="mt-10 text-center text-slate-600">
            {t("No apartments match your filters.")}
          </p>
        ) : null}
      </div>
    </section>
  );
}
