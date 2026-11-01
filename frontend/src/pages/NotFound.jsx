"use client"

import { useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Compass, HelpCircle } from "lucide-react"
import { Button } from "../components/ui/Button.jsx"
import { useTranslation } from "react-i18next"
import PageMeta from "../components/PageMeta.jsx"

export default function NotFound() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const isRTL = i18n.language === "ar"

  const links = [
    { name: t("About"), href: "/about" },
    { name: t("Contact"), href: "/contact" },
    { name: t("Blog"), href: "/blog" },
    { name: t("Help"), href: "/help" },
  ]

  return (
    <div
      className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 text-white"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <PageMeta
        title={t("seo.notFound.title")}
        description={t("seo.notFound.description")}
        path="/404"
        noIndex
      />
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-9xl font-bold text-orange-500/20 select-none"
            >
              404
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="bg-gray-800 p-6 rounded-full shadow-lg border border-orange-500">
                <Compass className="w-12 h-12 text-orange-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {t("Oops! We couldn't find that page")}
            </h1>
            <p className="text-lg text-gray-300 max-w-md mx-auto">
              {t("But don't worry, let's get you back on track! The page you're looking for doesn't exist or may have been moved.")}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600 text-white">
                <Link to="/" className="flex items-center gap-2 p-1">
                  <Home className="w-4 h-4" />
                  {t("Go to Homepage")}
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="flex items-center gap-2 p-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="w-4 h-4" />
                {t("Go Back")}
              </Button>
            </motion.div>
          </div>

          {/* Popular Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide">
              {t("Popular Pages")}
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button asChild variant="ghost" size="sm" className="text-orange-500 hover:text-white">
                    <Link to={link.href}>{link.name}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            <span>{t("Still need help?")}</span>
            <Button asChild variant="link" size="sm" className="p-0 h-auto text-orange-500 hover:text-orange-400">
              <Link to="/contact">{t("Contact Support")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
