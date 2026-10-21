import { NavLink } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import img1 from "../assets/Hero1.jpg";
import img2 from "../assets/Hero2.jpg";

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
          <NavLink to="/" className={`flex items-center no-underline mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
            <img
              src={logo}
              alt="MSGA Logo"
              className="w-14 h-14 object-contain"
            />
            <span className={`${isRTL ? "mr-2" : "ml-2"} text-3xl font-bold text-white`}>MSGA</span>
          </NavLink>
          <p className={`text-sm leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>{t("footer.about")}</p>
          <div className={`flex mt-4 ${isRTL ? "flex-row-reverse gap-3" : "gap-4"}`}>
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-600 transition duration-300"
                aria-label="Social link"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">
            {t("footer.servicesTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            {["Dynamic", "Contact", "FAQ", "Fancy", "Maps", "Service"].map(
              (item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-orange-500 transition duration-300"
                  >
                    {t(`footer.services.${item}`)}
                  </a>
                </li>
              ),
            )}
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
          {[img1, img2].map((img, i) => (
            <div key={i} className={`flex items-start mb-4 ${isRTL ? "flex-row-reverse gap-3" : "gap-3"}`}>
              <img
                src={img}
                alt="Property highlight"
                className="w-20 h-16 object-cover rounded hover:scale-105 transition-transform duration-300"
              />
              <div className={isRTL ? "text-right" : "text-left"}>
                <p className="text-xs text-gray-400">20 Nov 2023</p>
                <a
                  href="#"
                  className="text-sm font-semibold hover:text-orange-500 transition duration-300"
                >
                  {t("footer.postExample")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`flex flex-col md:flex-row justify-around items-center bg-gray-900 text-center py-4 px-6 text-sm text-white ${isRTL ? "md:flex-row-reverse" : ""}`}>
        <p>{t("footer.copyright")}</p>
        <div className={`mt-2 md:mt-0 ${isRTL ? "gap-4" : "space-x-4"} flex ${isRTL ? "flex-row-reverse" : ""}`}>
          <a href="#" className="hover:underline">
            {t("footer.privacy")}
          </a>
          <a href="#" className="hover:underline">
            {t("footer.policy")}
          </a>
          <a href="#" className="hover:underline">
            {t("footer.contact")}
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 ${isRTL ? "left-6 right-auto" : "right-6 left-auto"} p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-500 transition duration-300`}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
