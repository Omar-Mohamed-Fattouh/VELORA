import { useTranslation } from "react-i18next";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section className="w-full py-20 bg-gradient-to-b from-orange-50 via-white to-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            {t("social.connectTitleStart")}{" "}
            <span className="text-orange-500">
              {t("social.connectTitleEnd")}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t("social.connectSubtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {/* Email */}
          <a
            href="mailto:example@gmail.com"
            className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Mail className="w-8 h-8 text-orange-500" />
            <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
              {t("social.email")}
            </h3>
            <p className="text-gray-600 text-sm">example@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+201234567890"
            className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Phone className="w-8 h-8 text-yellow-500" />
            <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
              {t("social.phone")}
            </h3>
            <p className="text-gray-600 text-sm">+20 123 456 7890</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <MessageCircle className="w-8 h-8 text-green-500" />
            <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
              {t("social.whatsapp")}
            </h3>
            <p className="text-gray-600 text-sm">+20 123 456 7890</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Linkedin className="w-8 h-8 text-sky-600" />
            <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
              {t("social.linkedin")}
            </h3>
            <p className="text-gray-600 text-sm">/in/yourname</p>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Facebook className="w-8 h-8 text-blue-600" />
            <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
              {t("social.facebook")}
            </h3>
            <p className="text-gray-600 text-sm">/YourPage</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
          >
            <Instagram className="w-8 h-8 text-pink-500" />
            <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
              {t("social.instagram")}
            </h3>
            <p className="text-gray-600 text-sm">@yourprofile</p>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md">
            <MapPin className="w-8 h-8 text-red-500" />
            <h3 className="text-gray-900 font-semibold">
              {t("social.location")}
            </h3>
            <p className="text-gray-600 text-sm">{t("social.locationText")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
