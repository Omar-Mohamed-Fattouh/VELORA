import React, { useEffect, useMemo, useState } from "react";
import Select from "react-select";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, MapPinned, Video, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import apiRequest from "../services/api.js";
import { localizeProperty } from "../data/propertyI18n.js";

function formatPrice(value) {
  return Number(value || 0).toLocaleString();
}

// 🎯 Options must be inside the component (because they use t())
const selectTheme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#f97316",
    primary25: "#fff7ed",
    neutral0: "#ffffff",
    neutral80: "#0f172a",
  },
});

function ProjectCard({ p }) {
  const { t } = useTranslation();
  return (
    <motion.article
      layout
      whileHover={{ scale: 1 }}
      className="relative overflow-hidden bg-white flex flex-col p-2 h-full rounded-2xl group "
    >
      <div className="w-full relative h-70 z-20">
        <img
          src={p.image || p.img}
          alt={p.title}
          className="w-full rounded-2xl h-full p-2 object-cover"
        />
        <div className="absolute top-6 left-4">
          <span
            className={`px-3 py-2 rounded font-bold text-base ${
              p.status === "Available"
                ? "bg-orange-50 text-orange-600"
                : p.status === "Sold"
                ? "bg-gray-100 text-gray-700"
                : "bg-orange-50 text-orange-700"
            }`}
          >
            {t(p.status)}
          </span>
        </div>
      </div>
      <div className=" z-10 p-2.5 ">
        <motion.div
          className="absolute inset-0 h-[35%] rounded-xl transform
             translate-y-50 opacity-0 group-hover:translate-y-93 group-hover:opacity-100
             -z-10 bg-orange-500 bg-opacity-80 transition duration-700 ease-in-out"
        />

        <div className=" flex flex-col flex-1 rounded-2xl group-hover:bg-gray-900 transition duration-700">
          <div className="flex justify-between items-center mb-2 p-3   rounded-b-2xl bg-orange-500 group-hover:bg-gray-900 transition duration-800">
            <div className="flex items-center gap-2">
              <MapPin size={25} className="text-white" />
              <span className="text-2xl font-semibold text-white">
                {t(p.location)}
              </span>
            </div>
            <div className="flex divide-gray-200  items-center gap-3 sm:flex-col xl:flex-row">
              <a
                href={p.map}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition group"
                title={t("Open Map")}
              >
                <MapPinned
                  size={24}
                  className="text-white hover:text-orange-500"
                />
                <span className="text-lg text-white hover:text-orange-500  hidden sm:inline">
                  {t("Map")}
                </span>
              </a>
              <a
                href={p.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition group"
                title={t("Watch Video")}
              >
                <Video size={25} className="text-white hover:text-orange-500" />
                <span className="text-lg text-white hover:text-orange-500 hidden sm:inline">
                  {t("Video")}
                </span>
              </a>
            </div>
          </div>
          <div className="mx-4">
            <h3 className="text-gray-900 transition duration-700  group-hover:text-white font-bold text-2xl">
              {t(p.title)}
            </h3>
            <div className="flex justify-between gap-2  text-lg font-bold text-gray-700 group-hover:text-white transition duration-700 flex-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center ">
                  <span className=" text-gray-700 group-hover:text-white transition duration-700">
                    {formatPrice(p.price)}
                  </span>
                  <DollarSign size={20} className=" text-orange-500 " />
                </div>
                <div className="flex items-center gap-2">
                  {t(p.area)} {t("m²")}
                </div>
              </div>
            </div>

            <p className="text-gray-700  group-hover:text-white transition duration-700 text-sm  mb-2 ">
              {p.short}
            </p>
          </div>

          <div className="mt-3 flex gap-2 m-2">
            <Link
              to={`/project-details/${p.id}`}
              className="flex-1 text-center px-3 rounded-md  py-2 bg-orange-500 text-white text-lg font-medium hover:bg-orange-600 transition"
            >
              {t("Details")}
            </Link>
            <Link
              to="/contact"
              className="flex-1 px-3 py-2 border rounded-md border-orange-500 text-orange-500 text-lg font-medium hover:bg-orange-50 transition text-center"
            >
              {t("Consultation")}
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await apiRequest("/properties");
        setProjects(
          (data.data?.items || []).map((item) =>
            localizeProperty(item, i18n.language),
          ),
        );
      } catch (error) {
        console.error(error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [i18n.language]);

  const locationOptions = useMemo(
    () => [
      { value: "all", label: t("All locations") },
      ...Array.from(new Set(projects.map((p) => p.location))).map((loc) => ({
        value: loc,
        label: loc,
      })),
    ],
    [projects, t]
  );

  const statusOptions = useMemo(
    () => [
      { value: "all", label: t("All statuses") },
      { value: "Available", label: t("Available") },
      { value: "Under Construction", label: t("Under Construction") },
      { value: "Sold", label: t("Sold") },
    ],
    [t]
  );

  const priceOptions = useMemo(
    () => [
      { value: "all", label: t("All prices") },
      { value: "low", label: t("Under 600,000") },
      { value: "medium", label: t("600,000 - 1,200,000") },
      { value: "high", label: t("Over 1,200,000") },
    ],
    [t]
  );

  const areaOptions = useMemo(
    () => [
      { value: "all", label: t("All areas") },
      { value: "small", label: t("Under 15,000 m²") },
      { value: "medium", label: t("15,000 - 30,000 m²") },
      { value: "large", label: t("Over 30,000 m²") },
    ],
    [t]
  );

  const [loc, setLoc] = useState(locationOptions[0]);
  const [status, setStatus] = useState(statusOptions[0]);
  const [price, setPrice] = useState(priceOptions[0]);
  const [area, setArea] = useState(areaOptions[0]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    setLoc(locationOptions[0]);
    setStatus(statusOptions[0]);
    setPrice(priceOptions[0]);
    setArea(areaOptions[0]);
  }, [i18n.language]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (loc?.value !== "all" && p.location !== loc.value) return false;
      if (status?.value !== "all" && p.status !== status.value) return false;
      if (price?.value !== "all") {
        if (price.value === "low" && p.price >= 600000) return false;
        if (price.value === "medium" && (p.price < 600000 || p.price > 1200000))
          return false;
        if (price.value === "high" && p.price <= 1200000) return false;
      }
      if (area?.value !== "all") {
        if (area.value === "small" && p.area >= 15000) return false;
        if (area.value === "medium" && (p.area < 15000 || p.area > 30000))
          return false;
        if (area.value === "large" && p.area <= 30000) return false;
      }
      if (
        query &&
        !`${t(p.title) || p.title} ${t(p.location) || p.location} ${
          t(p.short) || p.short
        }`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
        return false;
      return true;
    });
  }, [loc, status, price, area, query, projects, t]);

  if (loading) {
    return <section className="px-4 py-12 text-center text-slate-600">{t("a11y.loading")}</section>;
  }

  return (
    <section
      className={`px-4 md:px-8 lg:px-15 py-12 container mx-auto  ${
        isRTL ? "text-right" : "text-left"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${
          isRTL ? "lg:flex-row" : ""
        }`}
      >
        {/* العنوان */}
        <div className={`lg:w-1/2 ${isRTL ? "text-right" : "text-left"}`}>
          <h6 className="text-orange-500 tracking-widest mb-2 uppercase">
            {t("Our Best Projects")}
          </h6>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {t("Projects you want to achieve")}{" "}
            {t("relaxing garden functional.")}
          </h2>
        </div>

        <div className="w-full lg:w-1/2 mt-4 lg:mt-0 z-30">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 w-full placeholder-gray-400 text-gray-900"
            placeholder={t("Search projects...")}
          />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {" "}
            <Select
              value={loc}
              onChange={setLoc}
              options={locationOptions}
              theme={selectTheme}
            />
            <Select
              value={status}
              onChange={setStatus}
              options={statusOptions}
              theme={selectTheme}
            />
            <Select
              value={price}
              onChange={setPrice}
              options={priceOptions}
              theme={selectTheme}
            />
            <Select
              value={area}
              onChange={setArea}
              options={areaOptions}
              theme={selectTheme}
            />
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {filtered.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 px-4 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 text-orange-500 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2h6v2m-7-4h8l1-8H5l1 8z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-700">
              {t("No projects match your filters.")}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              {t("Try adjusting your filters or explore all projects.")}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-5 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
            >
              {t("Reset Filters")}
            </button>
          </div>
        ) : (
          filtered.map((p, idx) => <ProjectCard key={p.id + idx} p={p} />)
        )}
      </div>
    </section>
  );
}
