import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  useEffect(() => {
    const normalizedLang = currentLang.startsWith("ar") ? "ar" : "en";
    document.documentElement.lang = normalizedLang;
    document.documentElement.dir = normalizedLang === "ar" ? "rtl" : "ltr";
    document.body.dir = normalizedLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", normalizedLang);
  }, [currentLang]);

  const toggleLanguage = () => {
    const nextLang = currentLang === "ar" ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-slate-700 hover:text-orange-500"
      aria-label="Toggle language"
    >
      {currentLang === "ar" ? "English" : "العربية"}
    </button>
  );
}

export default LanguageSwitcher;
