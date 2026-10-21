import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutProject() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar"; // ✅ detect language

  // Project data object (المحتوى كله بالـ t)
  const projectData = {
    title: t("About Project"),
    description: t(
      "The project features an eight-floors office tower designed in the elegant Salmani architectural style, surrounded by green spaces that cater to the evolving needs of businesses, offering modern office spaces and related amenities. Strategically located on King Salman Road in Al Qirawan, the development provides an ideal setting for companies seeking a prime business location."
    ),
    properties: [
      t("Riyadh"),
      t("Office"),
      t("7,728") + t("m²"),
      t("67 Units"),
      t("%48"),
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.195166759534!2d46.6201!3d24.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f038e9c5bb7e3%3A0x3c6e8bb1e8aef!2sKing%20Salman%20Rd%2C%20Al%20Qirawan%2C%20Riyadh!5e0!3m2!1sen!2ssa&basemap=satellite",
  };

  return (
    <section
      className={`container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 bg-white text-gray-900 ${
        isRTL ? "text-right" : "text-left"
      }`}
      dir={isRTL ? "rtl" : "ltr"} // ✅ الاتجاه يتغير حسب اللغة
    >
      {/* Header */}
      <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
        {projectData.title}
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg leading-relaxed text-gray-900 max-w-4xl mb-10">
        {projectData.description}
      </p>

      {/* Properties */}
      <div
        className={`flex gap-2 mb-12 ${
        isRTL ? "text-right" : "text-left"
        }`}
      >
        {projectData.properties.map((prop, idx) => (
          <div
            key={idx}
            className="border border-orange-500 rounded-xl py-1 px-2 flex items-center justify-center text-center shadow-sm"
          >
            <h3 className="text-sm sm:text-base font-semibold text-orange-500">
              {prop}
            </h3>
          </div>
        ))}
      </div>

      {/* Google Map */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          title="Google Map Satellite"
          src={projectData.mapSrc}
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
