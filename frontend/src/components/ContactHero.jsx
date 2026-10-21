import { memo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroHouse from "../assets/About.jpg";
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
const contactCards = [
  {
    href: "mailto:example@gmail.com",
    icon: <Mail className="w-8 h-8 text-orange-500" />,
    title: "Email",
    text: "EmailAddress",
    color: "group-hover:text-orange-500",
  },
  {
    href: "tel:+201234567890",
    icon: <Phone className="w-8 h-8 text-yellow-500" />,
    title: "Phone",
    text: "PhoneNumber",
    color: "group-hover:text-yellow-500",
  },
  {
    href: "https://wa.me/201234567890",
    icon: <MessageCircle className="w-8 h-8 text-green-500" />,
    title: "WhatsApp",
    text: "WhatsAppNumber",
    color: "group-hover:text-green-500",
  },
  {
    href: "https://linkedin.com/in/yourname",
    icon: <Linkedin className="w-8 h-8 text-sky-600" />,
    title: "LinkedIn",
    text: "LinkedInProfile",
    color: "group-hover:text-sky-600",
  },
  {
    href: "https://facebook.com/yourpage",
    icon: <Facebook className="w-8 h-8 text-blue-600" />,
    title: "Facebook",
    text: "FacebookPage",
    color: "group-hover:text-blue-600",
  },
  {
    href: "https://instagram.com/yourprofile",
    icon: <Instagram className="w-8 h-8 text-pink-500" />,
    title: "Instagram",
    text: "InstagramProfile",
    color: "group-hover:text-pink-500",
  },
  {
    href: null,
    icon: <MapPin className="w-8 h-8 text-red-500" />,
    title: "Location",
    text: "LocationText",
    color: "group-hover:text-red-500",
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
      <p className={`text-gray-600 text-md ${card.color}`}>{t(card.text)}</p>
    </motion.a>
  );
});

export default function Contact() {
  const { t, i18n } = useTranslation();

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

            {/* Form */}
            <form action="#" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <User
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder={t("Full Name *")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm"
                  />
                </div>
                <div className="relative">
                  <Phone
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <input
                    type="tel"
                    placeholder={t("Phone Number *")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    placeholder={t("Email Address *")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm"
                  />
                </div>
                <div className="relative">
                  <Home
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <select className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm appearance-none">
                    <option>{t("Select Interest")}</option>
                    <option>{t("Buy Property")}</option>
                    <option>{t("Sell Property")}</option>
                    <option>{t("Rent")}</option>
                    <option>{t("Investment")}</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <FileText
                  className="absolute left-3 top-3 text-gray-400"
                  size={18}
                />
                <textarea
                  placeholder={t("Your Message *")}
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none text-sm resize-none h-24"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold rounded-lg transition transform hover:scale-[1.02] shadow-md"
              >
                {t("Send Request")}
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
