import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, MapPinned, Video, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";

import product1 from "../assets/img1.jpg";
import product2 from "../assets/img2.jpg";
import product3 from "../assets/img3.jpg";
import product4 from "../assets/img1.jpg";

const RELATED_PRODUCTS = [
  {
    id: 1,
    img: product1,
    title: "Modern Sofa",
    location: "New York",
    price: 1200,
    area: 20,
    status: "Available",
    short: "A comfortable modern sofa for your living room.",
  },
  {
    id: 2,
    img: product2,
    title: "Luxury Chair",
    location: "Paris",
    price: 800,
    area: 10,
    status: "Available",
    short: "Elegant chair with high-quality materials.",
  },
  {
    id: 3,
    img: product3,
    title: "Wooden Table",
    location: "London",
    price: 1500,
    area: 15,
    status: "Sold",
    short: "Durable wooden table perfect for dining rooms.",
  },
  {
    id: 4,
    img: product4,
    title: "Garden Set",
    location: "Dubai",
    price: 2000,
    area: 30,
    status: "Available",
    short: "Outdoor garden furniture set for relaxing moments.",
  },
];

function RelatedProductCard({ p }) {
  const { t } = useTranslation();
  return (
<motion.article
  layout
  whileHover={{ scale: 1 }}
  className="relative overflow-hidden bg-white flex flex-col h-full p-2 rounded-2xl group"
>

      {/* Image */}
      <div className="w-full relative h-70 z-20">
        <img
          src={p.img}
          alt={p.title}
          className="w-full rounded-2xl h-full p-2 object-cover"
        />
        <div className="absolute top-6 left-4">
          <span
            className={`px-3 py-2 rounded font-bold text-base ${
              p.status === "Available"
                ? "bg-orange-50 text-orange-600"
                : p.status === "Sold"
                ? "bg-gray-100 text-gray-700"
                : "bg-yellow-50 text-yellow-800"
            }`}
          >
            {t(p.status)}
          </span>
        </div>
      </div>

      {/* Overlay effect */}
      <div className="z-10 p-2.5">
        <motion.div
          className="absolute inset-0 h-[35%] rounded-xl transform
             translate-y-50 opacity-0 group-hover:translate-y-93 group-hover:opacity-100
             -z-10 bg-orange-500 bg-opacity-80 transition duration-700 ease-in-out"
        />

        {/* Card content */}
     <div className=" flex flex-col flex-1 rounded-2xl group-hover:bg-gray-900 transition duration-700">
          <div className="flex justify-between items-center mb-2 p-3   rounded-b-2xl bg-orange-500 group-hover:bg-gray-900 transition duration-800">
            <div className="flex items-center gap-2">
              <MapPin size={25} className="text-white" />
              <span className="text-2xl font-semibold text-white">
                {t(p.location)}
              </span>
            </div>
            <div className="flex divide-gray-200  items-center gap-3 sm:flex-col xl:flex-row">
              <a
                href={p.map}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition group"
                title={t("Open Map")}
              >
                <MapPinned
                  size={24}
                  className="text-white hover:text-orange-500"
                />
                <span className="text-lg text-white hover:text-orange-500  hidden sm:inline">
                  {t("Map")}
                </span>
              </a>
              <a
                href={p.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 transition group"
                title={t("Watch Video")}
              >
                <Video size={25} className="text-white hover:text-orange-500" />
                <span className="text-lg text-white hover:text-orange-500 hidden sm:inline">
                  {t("Video")}
                </span>
              </a>
            </div>
          </div>
          <div className="mx-4">
            <h3 className="text-gray-900 transition duration-700  group-hover:text-white font-bold text-2xl">
              {t(p.title)}
            </h3>
            <div className="flex justify-between gap-2  text-lg font-bold text-gray-700 group-hover:text-white transition duration-700 flex-1">
              <div className="flex items-center gap-4">
                <div className="flex items-center ">
                  <span className=" text-gray-700 group-hover:text-white transition duration-700">
                    {t(p.price.toLocaleString())}
                  </span>
                  <DollarSign size={20} className=" text-orange-500 " />
                </div>
                <div className="flex items-center gap-2">
                  {t(p.area)} {t("m²")}
                </div>
              </div>
            </div>

            <p className="text-gray-700  group-hover:text-white transition duration-700 text-sm  mb-2 ">
              {t(p.short)}
            </p>
          </div>

          <div className="mt-3 flex gap-2 m-2">
            <Link
              to={`/project-details/${p.id}`}
              className="flex-1 text-center px-3 rounded-md  py-2 bg-orange-500 text-white text-lg font-medium hover:bg-orange-600 transition"
            >
              {t("Details")}
            </Link>
            <button className="flex-1 px-3 py-2 border rounded-md border-orange-500 text-orange-500 text-lg font-medium hover:bg-orange-50 transition">
              {t("Consultation")}
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function RelatedProductsSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section
      className={`px-4 md:px-8 lg:px-20 py-12 container mx-auto ${
        isRTL ? "text-right" : "text-left"
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {t("Related Products")}
        </h2>
        <p className="text-gray-600 mt-2">
          {t("Explore similar products carefully selected for you.")}
        </p>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
  {RELATED_PRODUCTS.slice(0, 3).map((p) => (
    <RelatedProductCard key={p.id} p={p} />
  ))}
</div>

    </section>
  );
}
