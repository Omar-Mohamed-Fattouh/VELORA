import { ChevronRight } from "lucide-react";
import heroHouse from "../assets/About.webp";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProjectHero() {
  const { t, i18n } = useTranslation();

  // Determine direction based on current language
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section
      dir={dir} // set text direction
      className="relative min-h-[65vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroHouse})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-50">
        <h1 className="text-6xl md:text-6xl font-bold text-white mb-4">
          {t("Our Best Projects")} {/* translated heading */}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center text-sm font-medium">
          <NavLink
            to="/"
            end={true}
            className={({ isActive }) =>
              `relative group font-medium text-lg tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-orange-500"
                  : "text-white hover:text-orange-500"
              }`
            }
          >
            {t("Home")}
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
          </NavLink>
          <ChevronRight className="w-4 h-4 mx-2 text-orange-500" />
          <span className="text-orange-500 text-lg">{t("Projects")}</span>
        </div>
      </div>
    </section>
  );
}
