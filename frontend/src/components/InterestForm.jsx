import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import apiRequest from "../services/api.js";

import CircularText from "./CircularText";
import BrandLogo from "./BrandLogo.jsx";
import aboutSection3 from "../assets/aboutSection3.png";
import aboutSection6 from "../assets/aboutSection6.png";
import heroShapeB from "../assets/heroShapeB.png";

export default function InterestForm() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language.startsWith("ar");
  const { id: propertyId } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      await apiRequest("/inquiries", {
        method: "POST",
        body: JSON.stringify({ ...formData, propertyId }),
      });

      setStatus({
        type: "success",
        message: t("Your request has been submitted successfully."),
      });
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || t("contact.formError") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="interested"
      className="relative h-full w-full bg-gray-900 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero shape bottom-left */}
      <img
        src={heroShapeB}
        alt=""
        aria-hidden="true"
        className="hidden sm:block absolute bottom-0 left-0 w-[350px] sm:w-[700px] opacity-40 pointer-events-none select-none z-0"
      />

      {/* Form container */}
      <div className="container relative z-10 mx-auto px-3 md:px-1 py-20 sm:py-40 flex justify-center">
        <div className="bg-white relative rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-md border border-orange-100">
          {/* Floating decorative pyramids */}
          <motion.img
            src={aboutSection3}
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute top-16 -left-22 -z-10 w-[60px] sm:w-[90px] opacity-80"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating decorative dots */}
          <motion.img
            src={aboutSection6}
            alt=""
            aria-hidden="true"
            className="hidden sm:block absolute bottom-20 -right-22 -z-10 w-[70px] sm:w-[130px] opacity-50"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Rotating circular badge */}
          <div className="hidden sm:grid absolute -top-18 -right-60 z-[5] w-[120px] sm:w-[150px] md:w-[200px] aspect-square rounded-full border-2 border-dashed border-orange-500 place-items-center text-white">
            <CircularText />
            <div className="relative z-[20] w-[60px] sm:w-[70px] md:w-[90px] h-[60px] sm:h-[70px] md:h-[90px] rounded-full bg-orange-500 grid place-items-center text-white">
              <BrandLogo className="w-12 h-12 sm:w-14 sm:h-14" inverted />
            </div>
          </div>

          {/* Brand Header */}
          <div className="text-center mb-6">
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">
              <span className="text-orange-500">VELORA</span> {t("Real Estate")}
            </p>
            <p className="text-gray-700 mt-2 text-sm sm:text-base">
              {t("Building dreams, creating investments.")}
            </p>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900">
            {t("Register Your Interest")}
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            {t("Interest description")}
          </p>

          {/* Form */}
          {status.message && (
            <div
              className={`mb-4 rounded-md border px-3 py-2 text-sm ${
                status.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="name"
              >
                {t("Name")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                {t("Email")} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="phone"
              >
                {t("Phone Number")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Interest */}
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="interest"
              >
                {t("Type of Interest")}
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">{t("Select an option")}</option>
                <option value="residential">{t("Residential")}</option>
                <option value="commercial">{t("Commercial")}</option>
                <option value="investment">{t("Investment")}</option>
              </select>
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-600 transition disabled:cursor-not-allowed disabled:bg-orange-300"
              >
                {loading ? t("Sending...") : t("Send Your Request")}
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-6">
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-500 font-semibold">VELORA</span>.{" "}
            {t("All rights reserved.")}
          </p>
        </div>
      </div>
    </div>
  );
}
