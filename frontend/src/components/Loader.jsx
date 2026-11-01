import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import BrandLogo from "./BrandLogo.jsx";

export default function Loader() {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-white"
      role="status"
      aria-live="polite"
    >
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <BrandLogo className="h-20 w-20" />
      </motion.div>

      <motion.div
        className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      <motion.p
        className="mt-4 text-gray-600 text-sm font-medium"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {t("a11y.loading")}
      </motion.p>
      <span className="sr-only">{t("a11y.loading")}</span>
    </div>
  );
}
