import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import heroHouse from "../assets/About.jpg";
import { NavLink } from "react-router-dom";
import i18n from "../i18n";

export default function HeroAbout() {
  const { t } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className="relative min-h-[65vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroHouse})` }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50" />

      {/* Content */}
<div
  className={`relative z-10 container mx-auto ${isRTL ? "pr-6 lg:pr-50 text-right" : "pl-6 lg:pl-50 text-left"}`}
>
  <h1 className={`text-5xl md:text-6xl font-bold text-white mb-4 ${isRTL ? "text-right" : "text-left"}`}>
    {t("About Us")}
  </h1>

  <div className={`flex items-center text-sm font-medium mb-4 ${isRTL ? "flex-row-reverse justify-end" : "flex-row"}`}>
    <NavLink
      to="/"
      end
      className={({ isActive }) =>
        `relative group font-medium text-sm tracking-wide transition-colors duration-300 ${
          isActive ? "text-orange-500" : "text-white hover:text-orange-500"
        }`
      }
    >
      {t("Home")}
      <span
        className={`absolute -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full ${
          isRTL ? "right-0 left-auto" : "left-0"
        }`}
      />
    </NavLink>

    <ChevronRight
      className={`w-4 h-4 mx-2 text-orange-500 ${isRTL ? "rotate-180" : ""}`}
    />

    <span className="text-orange-500">{t("About Us")}</span>
  </div>
</div>

    </section>
  );
}
