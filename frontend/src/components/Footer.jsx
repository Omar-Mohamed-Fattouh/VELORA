import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BrandLogo from "./BrandLogo.jsx";
import img1 from "../assets/Hero1.webp";
import img2 from "../assets/Hero2.webp";
import { SITE_NAME, socialLinks } from "../data/site.js";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [showScroll, setShowScroll] = useState(false);
  const isRTL = i18n.language === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-gray-900 text-gray-300"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <NavLink to="/" className="flex items-center no-underline mb-4 gap-2">
            <BrandLogo className="w-14 h-14" inverted />
            <span
              className={`${isRTL ? "mr-2" : "ml-2"} text-3xl font-bold text-white`}
            >
              {SITE_NAME}
            </span>
          </NavLink>
          <p
            className={`text-sm leading-relaxed ${isRTL ? "text-right" : "text-left"}`}
          >
            {t("footer.about")}
          </p>
          <div className="flex mt-4 gap-4">
            {socialLinks.map((item) => {
              const Icon =
                item.id === "facebook"
                  ? Facebook
                  : item.id === "twitter"
                    ? Twitter
                    : item.id === "linkedin"
                      ? Linkedin
                      : Instagram;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-orange-600 transition duration-300"
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.servicesTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { item: "Dynamic", href: "/projects" },
              { item: "Contact", href: "/contact" },
              { item: "FAQ", href: "/#faq" },
              { item: "Fancy", href: "/services" },
              { item: "Maps", href: "/contact" },
              { item: "Service", href: "/about" },
            ].map(({ item, href }) => (
              <li key={item}>
                <NavLink
                  to={href}
                  className="hover:text-orange-500 transition duration-300"
                >
                  {t(`footer.services.${item}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.quickLinksTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "What We Do", href: "/about" },
              { label: "About Company", href: "/about" },
              { label: "Team Member", href: "/projects" },
              { label: "Our Gallery", href: "/projects" },
              { label: "Watch Video", href: "/page" },
              { label: "Latest News", href: "/blog" },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  to={item.href}
                  className="hover:text-orange-500 transition duration-300"
                >
                  {t(`footer.quickLinks.${item.label}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.recentPostsTitle")}
          </h3>
          {[
            { image: img1, title: "footer.post1Title", to: "/blog/1" },
            { image: img2, title: "footer.post2Title", to: "/blog/2" },
          ].map(({ image, title, to }) => (
            <div key={title} className="flex items-start mb-4 gap-3">
              <img
                src={image}
                alt=""
                width={80}
                height={64}
                loading="lazy"
                decoding="async"
                className="w-20 h-16 object-cover rounded hover:scale-105 transition-transform duration-300"
              />
              <div className={isRTL ? "text-right" : "text-left"}>
                <p className="text-xs text-gray-400">20 Nov 2023</p>
                <NavLink
                  to={to}
                  className="text-sm font-semibold hover:text-orange-500 transition duration-300"
                >
                  {t(title)}
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-around items-center bg-gray-900 text-center py-4 px-6 text-sm text-white">
        <p>{t("footer.copyright")}</p>
        <div className="mt-2 md:mt-0 flex gap-4">
          <NavLink to="/privacy" className="hover:underline">
            {t("footer.privacyPolicy")}
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            {t("footer.contact")}
          </NavLink>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label={t("a11y.scrollTop")}
          className="fixed bottom-6 inset-s-6 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-500 transition duration-300"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
