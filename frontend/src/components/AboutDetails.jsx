import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutProject({ project }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const location = project?.location || t("Riyadh - Al Qirawan");
  const mapQuery = encodeURIComponent(project?.location || "Riyadh Al Qirawan");

  const projectData = {
    title: t("About Project"),
    description:
      project?.description ||
      t(
        "The project features an eight-floors office tower designed in the elegant Salmani architectural style, surrounded by green spaces that cater to the evolving needs of businesses, offering modern office spaces and related amenities. Strategically located on King Salman Road in Al Qirawan, the development provides an ideal setting for companies seeking a prime business location.",
      ),
    properties: [
      location,
      t(project?.status || "Available"),
      `${Number(project?.area || 7728).toLocaleString()}${t("m²")}`,
      project?.price
        ? `$${Number(project.price).toLocaleString()}`
        : t("67 Units"),
    ],
    mapSrc: `https://maps.google.com/maps?q=${mapQuery}&z=13&output=embed`,
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
