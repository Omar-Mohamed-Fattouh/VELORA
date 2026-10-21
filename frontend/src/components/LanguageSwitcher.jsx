import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const isArabic = currentLang.startsWith("ar");

  const toggleLanguage = () => {
    const nextLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="text-sm font-medium text-slate-700 hover:text-orange-500"
      aria-label="Toggle language"
    >
      {isArabic ? "English" : "العربية"}
    </button>
  );
}

export default LanguageSwitcher;
