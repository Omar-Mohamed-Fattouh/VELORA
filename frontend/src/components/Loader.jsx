import { useTranslation } from "react-i18next";
import BrandLogo from "./BrandLogo.jsx";

export default function Loader({ fullScreen = false }) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white ${
        fullScreen ? "h-screen" : "min-h-[28vh] py-16"
      }`}
      role="status"
      aria-live="polite"
      aria-label={t("a11y.loading")}
    >
      <BrandLogo className={fullScreen ? "mb-5 h-16 w-16" : "mb-4 h-12 w-12"} />
      <div
        className={`rounded-full border-orange-500 border-t-transparent animate-spin ${
          fullScreen ? "h-10 w-10 border-4" : "h-8 w-8 border-[3px]"
        }`}
      />
      <p className="mt-4 text-sm font-medium text-gray-500">{t("a11y.loading")}</p>
    </div>
  );
}
