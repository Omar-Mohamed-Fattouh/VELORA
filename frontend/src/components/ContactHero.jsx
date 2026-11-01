import { memo, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroHouse from "../assets/About.webp";
import apiRequest from "../services/api.js";
import { siteContact, socialLinks } from "../data/site.js";
import { User, Phone, Mail, FileText, Home } from "lucide-react";
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
} from "lucide-react";

// Motion Variants
const fadeLeft = {
  hidden: { opacity: 0.2, x: -80 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0.2, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0.2, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Contact Cards Data (outside component for performance)
const socialHref = (id) =>
  socialLinks.find((item) => item.id === id)?.href || "#";

const contactCards = [
  {
    href: `mailto:${siteContact.email}`,
    icon: <Mail className="w-8 h-8 text-orange-500" />,
    title: "Email",
    text: siteContact.email,
    translateText: false,
    color: "group-hover:text-orange-500",
  },
  {
    href: siteContact.phoneHref,
    icon: <Phone className="w-8 h-8 text-orange-500" />,
    title: "Phone",
    text: siteContact.phone,
    translateText: false,
    color: "group-hover:text-orange-500",
  },
  {
    href: siteContact.whatsapp,
    icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
    title: "WhatsApp",
    text: siteContact.phone,
    translateText: false,
    color: "group-hover:text-orange-500",
  },
  {
    href: socialHref("linkedin"),
    icon: <Linkedin className="w-8 h-8 text-orange-500" />,
    title: "LinkedIn",
    text: "VELORA",
    translateText: false,
    color: "group-hover:text-orange-500",
  },
  {
    href: socialHref("facebook"),
    icon: <Facebook className="w-8 h-8 text-orange-500" />,
    title: "Facebook",
    text: "VELORA",
    translateText: false,
    color: "group-hover:text-orange-500",
  },
  {
    href: socialHref("instagram"),
    icon: <Instagram className="w-8 h-8 text-orange-500" />,
    title: "Instagram",
    text: "@velora",
    translateText: false,
    color: "group-hover:text-orange-500",
  },
  {
    href: null,
    icon: <MapPin className="w-8 h-8 text-orange-500" />,
    title: "Location",
    text: "social.locationText",
    translateText: true,
    color: "group-hover:text-orange-500",
  },
];

// Memoized Card Component
const ContactCard = memo(({ card, delay }) => {
  const { t, i18n } = useTranslation();
  return (
    <motion.a
      href={card.href || "#"}
      target={card.href ? "_blank" : ""}
      rel="noopener noreferrer"
      className={`group flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition`}
      variants={fadeUp}
      transition={{ duration: 0.6, delay }}
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="flex items-center justify-center gap-4 xl:flex-col 2xl:flex-row">
        {card.icon}
        <h3
          className={`text-gray-900 text-xl font-semibold ${card.color} transition`}
        >
          {t(card.title)}
        </h3>
      </div>
      <p className={`text-gray-600 text-md ${card.color}`}>
        {card.translateText === false ? card.text : t(card.text)}
      </p>
    </motion.a>
  );
});

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });
    try {
      await apiRequest("/inquiries", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      setStatus({ type: "success", message: t("contact.formSuccess") });
      setFormData({
        name: "",
        phone: "",
        email: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || t("contact.formError"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <div
        className="relative w-full bg-gray-900 py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroHouse})` }}
        role="img"
        aria-label="City house background"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />

        <div className="relative container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 lg:px-12">
          {/* LEFT */}
          <motion.div
            className="text-white space-y-5 max-w-xl"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              {t("Sell Your")}{" "}
              <span className="text-orange-500">{t("City House")}</span>{" "}
              {t("Fast")} {t("For")}{" "}
              <span className="text-orange-500">{t("Cash!")}</span>
            </h1>
            <p className="text-lg opacity-90">
              {t("Our process is")}{" "}
              <span className="text-orange-500 font-semibold">
                {t("extremely simple")}
              </span>
              . {t("Fill out our quick form & receive a")}{" "}
              <span className="text-orange-500 font-semibold">
                {t("free no-obligation cash offer!")}
              </span>
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("Let’s Talk")}{" "}
              <span className="text-orange-500">{t("Real Estate")}</span>
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t("Looking for your")}{" "}
              <span className="text-orange-500 font-semibold">
                {t("dream home")}
              </span>
              , {t("selling property, or need")}{" "}
              <span className="text-orange-500 font-semibold">
                {t("investment advice")}
              </span>
              ?{" "}
              {t(
                "Fill out the form below and our expert team will reach out to you."
              )}
            </p>

            {status.message ? (
              <p
                role="status"
                className={`mb-4 rounded-md border px-3 py-2 text-sm ${
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </p>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <User
                    className="absolute start-3 top-3 text-gray-400"
                    size={18}
                  />
                  <label htmlFor="contact-name" className="sr-only">
                    {t("Full Name *")}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("Full Name *")}
                    className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm"
                  />
                </div>
                <div className="relative">
                  <Phone
                    className="absolute start-3 top-3 text-gray-400"
                    size={18}
                  />
                  <label htmlFor="contact-phone" className="sr-only">
                    {t("Phone Number *")}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("Phone Number *")}
                    className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <Mail
                    className="absolute start-3 top-3 text-gray-400"
                    size={18}
                  />
                  <label htmlFor="contact-email" className="sr-only">
                    {t("Email Address *")}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("Email Address *")}
                    className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm"
                  />
                </div>
                <div className="relative">
                  <Home
                    className="absolute start-3 top-3 text-gray-400"
                    size={18}
                  />
                  <label htmlFor="contact-interest" className="sr-only">
                    {t("Select Interest")}
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm appearance-none"
                  >
                    <option value="">{t("Select Interest")}</option>
                    <option value="buy">{t("Buy Property")}</option>
                    <option value="sell">{t("Sell Property")}</option>
                    <option value="rent">{t("Rent")}</option>
                    <option value="investment">{t("Investment")}</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <FileText
                  className="absolute start-3 top-3 text-gray-400"
                  size={18}
                />
                <label htmlFor="contact-message" className="sr-only">
                  {t("Your Message *")}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("Your Message *")}
                  className="w-full ps-10 pe-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm resize-none h-24"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded-lg transition transform hover:scale-[1.02] shadow-md disabled:cursor-not-allowed disabled:bg-orange-300"
              >
                {loading ? t("Sending...") : t("Send Request")}
              </button>
            </form>

            <p className="text-gray-600 text-sm mt-6 text-center">
              {t("Trusted House Buyers in Your City")} |{" "}
              <span className="text-orange-500 font-semibold">
                {t("No Fees")}
              </span>
              ,{" "}
              <span className="text-orange-500 font-semibold">
                {t("No Obligations")}
              </span>
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards */}
      <motion.div
        className="relative -mt-12 px-5 w-full grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {contactCards.map((card, i) => (
          <ContactCard key={i} card={card} delay={i * 0.15} />
        ))}
      </motion.div>
    </section>
  );
}
