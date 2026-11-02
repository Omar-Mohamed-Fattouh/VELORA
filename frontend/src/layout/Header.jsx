import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  Clock,
  Menu,
  X,
  Grid,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";

import LanguageSwitcher from "../components/LanguageSwitcher";
import BrandLogo from "../components/BrandLogo.jsx";
import apiRequest from "../services/api.js";
import { SITE_NAME, siteContact } from "../data/site.js";
import { useAuth } from "../context/AuthContext.jsx";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const { t, i18n: i18nInstance } = useTranslation();
  const isRTL = i18nInstance.language === "ar";
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleSubscribe = async (event) => {
    event.preventDefault();
    setSubscribeStatus("");
    try {
      await apiRequest("/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: subscribeEmail }),
      });
      setSubscribeStatus(t("newsletter.success"));
      setSubscribeEmail("");
    } catch (error) {
      setSubscribeStatus(error.message || t("newsletter.error"));
    }
  };

  const navLinks = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/about", label: t("nav.about"), end: true },
    { to: "/apartments", label: t("nav.apartments"), end: true },
    { to: "/projects", label: t("nav.projects"), end: true },
    { to: "/services", label: t("nav.services"), end: true },
    { to: "/blog", label: t("nav.blog"), end: true },
  ];

  useEffect(() => {
    setMobileOpen(false);
    setSidebarOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen || sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileOpen, sidebarOpen]);

  const topLinkClass = "whitespace-nowrap text-white/85 transition-colors hover:text-orange-400";

  return (
    <header className="sticky top-0 z-[900] bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto flex h-9 xl:h-11 items-center justify-between gap-3 px-4 xl:px-6">
          <p className="flex min-w-0 items-center gap-1.5 text-[11px] xl:text-sm">
            <Clock className="h-3.5 w-3.5 shrink-0 text-orange-400" aria-hidden />
            <span className="truncate">
              <span className="hidden font-semibold text-orange-400 sm:inline">
                {t("header.openingHours")}:{" "}
              </span>
              <span className="xl:hidden">{t("header.openingHoursShort")}</span>
              <span className="hidden xl:inline">{t("headerTop.openingHoursValue")}</span>
            </span>
          </p>

          <div className="flex shrink-0 items-center gap-3 text-[11px] xl:gap-5 xl:text-sm">
            <div className="flex items-center gap-3 xl:gap-4 xl:border-s xl:border-white/20 xl:ps-5">
              {user ? (
                <>
                  {user.role === "admin" ? (
                    <NavLink to="/admin" className={topLinkClass}>
                      {t("seo.admin.title")}
                    </NavLink>
                  ) : null}
                  <button type="button" onClick={logout} className={topLinkClass}>
                    {t("auth.logout")}
                  </button>
                </>
              ) : (
                <>
                  <NavLink to="/login" className={topLinkClass}>
                    <span className="sm:hidden">{t("header.loginCompact")}</span>
                    <span className="hidden sm:inline">{t("header.login")}</span>
                  </NavLink>
                  <NavLink to="/register" className={topLinkClass}>
                    <span className="sm:hidden">{t("header.registerCompact")}</span>
                    <span className="hidden sm:inline">{t("header.register")}</span>
                  </NavLink>
                </>
              )}
              <NavLink to="/help" className={`${topLinkClass} hidden xl:inline`}>
                {t("header.help")}
              </NavLink>
            </div>

            <div className="hidden items-center gap-3 border-s border-white/20 ps-5 xl:flex">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/85 hover:text-orange-400">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="text-white/85 hover:text-orange-400">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/85 hover:text-orange-400">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${siteContact.email}`} aria-label="Email" className="text-white/85 hover:text-orange-400">
                <FaGoogle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="relative border-b border-gray-100 bg-white shadow-sm"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2.5 xl:px-6 xl:py-3">
          <NavLink to="/" className="flex items-center gap-2 no-underline">
            <BrandLogo className="h-10 w-10 xl:h-14 xl:w-14" />
            <span className="text-xl font-bold tracking-tight text-gray-800 xl:text-3xl">
              {SITE_NAME}
            </span>
          </NavLink>

          <div className="hidden xl:flex items-center gap-6 2xl:gap-10">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `relative group font-medium text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-orange-500"
                  }`
                }
              >
                {label}
                <span className="absolute inset-s-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          <div className="hidden xl:flex items-center gap-6 text-sm">
            <NavLink
              to="/contact"
              className="bg-orange-500 text-white font-semibold px-4 py-2 hover:bg-orange-600 transition text-sm"
            >
              {t("header.contactUs")}
            </NavLink>
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              aria-label={t("a11y.openSidebar")}
              className="overflow-hidden relative w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center group"
            >
              <Grid className="w-6 h-6 text-white relative z-10" />
              <span className="absolute inset-0 rounded-full bg-gray-800 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
            </button>
          </div>

          <div className="flex items-center gap-1 xl:hidden">
            <LanguageSwitcher />
            <button
              className="p-2 text-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="primary-mobile-navigation"
              aria-label={mobileOpen ? t("a11y.closeMenu") : t("a11y.openMenu")}
            >
              {mobileOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        <div
          id="primary-mobile-navigation"
          className={`xl:hidden absolute inset-s-0 inset-e-0 z-50 w-full overflow-hidden bg-white shadow-md transition-all duration-300 ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-5 px-6 py-6">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `text-base font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:text-orange-500"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-100 pt-4 text-sm font-medium">
              {user ? (
                <>
                  {user.role === "admin" ? (
                    <NavLink
                      to="/admin"
                      className="text-gray-700 hover:text-orange-500"
                      onClick={() => setMobileOpen(false)}
                    >
                      {t("seo.admin.title")}
                    </NavLink>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="text-gray-700 hover:text-orange-500"
                  >
                    {t("auth.logout")}
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="text-gray-700 hover:text-orange-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("header.login")}
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="text-gray-700 hover:text-orange-500"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t("header.register")}
                  </NavLink>
                </>
              )}
              <NavLink
                to="/help"
                className="text-gray-700 hover:text-orange-500"
                onClick={() => setMobileOpen(false)}
              >
                {t("header.help")}
              </NavLink>
            </div>

            <NavLink
              to="/contact"
              className="bg-orange-500 px-6 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
              onClick={() => setMobileOpen(false)}
            >
              {t("header.contactUs")}
            </NavLink>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[1000] transition-opacity duration-500 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        />

        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={
            sidebarOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full max-w-[340px] w-full bg-[#333333] shadow-2xl flex flex-col z-50"
        >
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            aria-label={t("a11y.closeSidebar")}
            className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} text-gray-300 hover:text-orange-500`}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex items-center border-b border-gray-700 py-6 px-6 gap-3">
            <BrandLogo className="w-10 h-10" inverted />
            <span className="text-2xl font-bold text-white tracking-wide">
              {SITE_NAME}
            </span>
          </div>

          <div
            className="flex-1 flex flex-col justify-between p-6 space-y-6 overflow-y-auto"
            dir={isRTL ? "rtl" : "ltr"}
          >
            <div>
              <h3
                className={`text-lg font-semibold text-white mb-2 ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("header.changingLives")}
              </h3>
              <p
                className={`text-sm text-gray-300 ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("header.sidebarText")}
              </p>
            </div>

            <div>
              <h3
                className={`text-lg font-semibold text-white mb-4 ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("nav.contact")}
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="uppercase text-gray-400 text-xs">
                      {t("header.sendEmail")}
                    </p>
                    <a
                      href={`mailto:${siteContact.email}`}
                      className="text-white hover:text-orange-500"
                    >
                      {siteContact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="uppercase text-gray-400 text-xs">
                      {t("header.callAgent")}
                    </p>
                    <a
                      href={siteContact.phoneHref}
                      className="text-white hover:text-orange-500"
                    >
                      {siteContact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="uppercase text-gray-400 text-xs">
                      {t("header.openingTime")}
                    </p>
                    <p className="text-white">{t("contact.hours")}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3
                className={`text-lg font-semibold text-white mb-4 ${isRTL ? "text-right" : "text-left"}`}
              >
                {t("header.getNotification")}
              </h3>
              <form className="space-y-3" onSubmit={handleSubscribe}>
                <label htmlFor="sidebar-email" className="sr-only">
                  {t("auth.email")}
                </label>
                <input
                  id="sidebar-email"
                  type="email"
                  required
                  value={subscribeEmail}
                  onChange={(event) => setSubscribeEmail(event.target.value)}
                  placeholder={t("auth.email")}
                  className="w-full border border-gray-600 bg-transparent px-3 py-2 text-sm rounded focus:outline-none text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white w-full px-4 py-2 text-sm rounded hover:bg-orange-600 flex items-center justify-center"
                >
                  {t("header.subscribeNow")}
                </button>
                {subscribeStatus ? (
                  <p className="text-xs text-gray-300" role="status">
                    {subscribeStatus}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
