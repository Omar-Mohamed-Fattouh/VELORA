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
import { siteContact, socialLinks } from "../data/site.js";

const socialHref = (id) =>
  socialLinks.find((item) => item.id === id)?.href || "#";

export default function ContactSection() {
  const { t } = useTranslation();

  const cards = [
    {
      href: `mailto:${siteContact.email}`,
      icon: Mail,
      title: t("social.email"),
      text: siteContact.email,
    },
    {
      href: siteContact.phoneHref,
      icon: Phone,
      title: t("social.phone"),
      text: siteContact.phone,
    },
    {
      href: siteContact.whatsapp,
      icon: MessageCircle,
      title: t("social.whatsapp"),
      text: siteContact.phone,
      external: true,
    },
    {
      href: socialHref("linkedin"),
      icon: Linkedin,
      title: t("social.linkedin"),
      text: "VELORA",
      external: true,
    },
    {
      href: socialHref("facebook"),
      icon: Facebook,
      title: t("social.facebook"),
      text: "VELORA",
      external: true,
    },
    {
      href: socialHref("instagram"),
      icon: Instagram,
      title: t("social.instagram"),
      text: "@velora",
      external: true,
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-orange-50 via-white to-white">
      <div className="container mx-auto px-6">
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

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition"
              >
                <Icon className="w-8 h-8 text-orange-500" />
                <h3 className="text-gray-900 font-semibold group-hover:text-orange-500 transition">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.text}</p>
              </a>
            );
          })}

          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white shadow-md">
            <MapPin className="w-8 h-8 text-orange-500" />
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
