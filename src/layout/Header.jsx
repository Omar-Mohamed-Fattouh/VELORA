import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
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

import logo from "../assets/Logo.png";
import headerTop from "../assets/headerTop.png";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t, i18n: i18nInstance } = useTranslation();
  const isRTL = i18nInstance.language === "ar";

  const navLinks = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/about", label: t("nav.about"), end: true },
    { to: "/apartments", label: t("nav.apartments"), end: true },
    { to: "/projects", label: t("nav.projects"), end: true },
    { to: "/page", label: t("nav.page"), end: true },
    { to: "/blog", label: t("nav.blog"), end: true },
    { to: "/contact", label: t("nav.contact"), end: true },
  ];

  useEffect(() => {
    if (mobileOpen || sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileOpen, sidebarOpen]);

  return (
    <header className="relative z-[900]" dir={isRTL ? "rtl" : "ltr"}>
      <div className={`hidden xl:flex items-center relative ${isRTL ? "flex-row-reverse" : ""}`}>
        <img src={headerTop} alt="Header Top" className="h-24 relative z-10" />
        <div className="flex-1 bg-gray-900 text-white relative z-0 h-14 bottom-5 flex items-center">
          <div className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} w-[90px] h-full bg-white clip-left`} />

          <div className={`container mx-auto flex items-center justify-between w-full px-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            <span className="text-sm relative z-10">
              <span className="text-orange-400 font-semibold">{t("header.openingHours")}: </span>
              Mon - Sat 9:00 am to 6:00 pm
            </span>

            <div className={`flex items-center gap-6 text-sm relative z-10 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className={`flex items-center gap-4 ${isRTL ? "border-l border-gray-500 pl-4" : "border-r border-gray-500 pr-4"}`}>
                <NavLink to="/login" className="hover:text-orange-400">{t("header.login")}</NavLink>
                <NavLink to="/register" className="hover:text-orange-400">{t("header.register")}</NavLink>
                <NavLink to="/help" className="hover:text-orange-400">{t("header.help")}</NavLink>
              </div>

              <div className={`flex items-center gap-3 ${isRTL ? "pr-4" : "pl-4"}`}>
                <Facebook className="w-5 h-5 cursor-pointer hover:text-orange-400" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-orange-400" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-orange-400" />
                <FaGoogle className="w-5 h-5 cursor-pointer hover:text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm border-b relative" dir={isRTL ? "rtl" : "ltr"}>
        <div className={`container mx-auto flex items-center justify-between py-3 px-6 ${isRTL ? "flex-row-reverse" : ""}`}>
          <NavLink to="/" className={`flex items-center no-underline ${isRTL ? "flex-row-reverse" : ""}`}>
            <img src={logo} alt="Logo" className="w-14 h-14 object-contain" />
            <span className={`${isRTL ? "mr-2" : "ml-2"} text-3xl font-bold text-gray-700`}>VELORA</span>
          </NavLink>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `relative group font-medium text-sm tracking-wide transition-colors duration-300 ${
                    isActive ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                  }`
                }
              >
                {label}
                <span className={`absolute ${isRTL ? "right-0" : "left-0"} -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full`} />
              </NavLink>
            ))}
          </div>

          <div className={`hidden lg:flex items-center gap-6 text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
            <NavLink to="/contact" className="bg-orange-500 text-white font-semibold px-4 py-2 hover:bg-orange-600 transition text-sm">
              {t("header.contactUs")}
            </NavLink>
            <LanguageSwitcher />
            <button
              onClick={() => setSidebarOpen(true)}
              className={`overflow-hidden relative w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center group ${isRTL ? "ml-3" : "mr-3"}`}
            >
              <Grid className="w-6 h-6 text-white relative z-10" />
              <span className="absolute inset-0 rounded-full bg-gray-800 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
            </button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
            {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        <div
          className={`lg:hidden absolute ${isRTL ? "right-0 left-auto" : "left-0 right-auto"} w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`flex flex-col items-center gap-8 py-8 ${isRTL ? "text-right" : "text-left"}`}>
            {navLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `relative group text-xl font-semibold transition-colors duration-300 ${
                    isActive ? "text-orange-500" : "text-gray-800 hover:text-orange-500"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {label}
                <span className={`absolute ${isRTL ? "right-0" : "left-0"} -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full`} />
              </NavLink>
            ))}

            <div className="flex items-center justify-center"><LanguageSwitcher /></div>

            <NavLink to="/contact" className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition" onClick={() => setMobileOpen(false)}>
              {t("header.contactUs")}
            </NavLink>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[1000] transition-opacity duration-500 ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="absolute inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)} />

        <motion.div
          initial={{ x: isRTL ? "-100%" : "100%", opacity: 0 }}
          animate={sidebarOpen ? { x: 0, opacity: 1 } : { x: isRTL ? "-100%" : "100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} h-full max-w-[340px] w-full bg-[#333333] shadow-2xl flex flex-col z-50`}
        >
          <button onClick={() => setSidebarOpen(false)} className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} text-gray-300 hover:text-orange-500`}>
            <X className="w-6 h-6" />
          </button>

          <div className={`flex items-center border-b border-gray-700 py-6 px-6 ${isRTL ? "flex-row-reverse" : ""}`}>
            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
            <h1 className={`text-2xl font-bold text-white tracking-wide ${isRTL ? "mr-3" : "ml-3"}`}>VELORA</h1>
          </div>

          <div className="flex-1 flex flex-col justify-between p-6 space-y-6 overflow-y-auto" dir={isRTL ? "rtl" : "ltr"}>
            <div>
              <h3 className={`text-lg font-semibold text-white mb-2 ${isRTL ? "text-right" : "text-left"}`}>{t("header.changingLives")}</h3>
              <p className={`text-sm text-gray-300 ${isRTL ? "text-right" : "text-left"}`}>{t("header.sidebarText")}</p>
            </div>

            <div>
              <h3 className={`text-lg font-semibold text-white mb-4 ${isRTL ? "text-right" : "text-left"}`}>{t("nav.contact")}</h3>
              <ul className="space-y-4 text-sm">
                <li className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="uppercase text-gray-400 text-xs">{t("header.sendEmail")}</p>
                    <a href="mailto:info@company.com" className="text-white hover:text-orange-500">info@company.com</a>
                  </div>
                </li>
                <li className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="uppercase text-gray-400 text-xs">{t("header.callAgent")}</p>
                    <a href="tel:+91123654900" className="text-white hover:text-orange-500">+91 123 654 900</a>
                  </div>
                </li>
                <li className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Clock className="w-5 h-5 text-orange-500" />
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <p className="uppercase text-gray-400 text-xs">{t("header.openingTime")}</p>
                    <p className="text-white">Hours: Mon–Fri: 8am – 7pm</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className={`text-lg font-semibold text-white mb-4 ${isRTL ? "text-right" : "text-left"}`}>{t("header.getNotification")}</h3>
              <form className="space-y-3">
                <input type="email" placeholder={t("auth.email")} className="w-full border border-gray-600 bg-transparent px-3 py-2 text-sm rounded focus:outline-none text-white placeholder-gray-400" />
                <button type="submit" className="bg-orange-500 text-white w-full px-4 py-2 text-sm rounded hover:bg-orange-600 flex items-center justify-center">
                  {t("header.subscribeNow")}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
