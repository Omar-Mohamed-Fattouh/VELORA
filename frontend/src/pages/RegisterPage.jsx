import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";
import PageMeta from "../components/PageMeta.jsx";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const { register } = useAuth();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await register(form);
      navigate("/");
    } catch (err) {
      setError(err.message || t("auth.registerError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 py-16" dir={isRTL ? "rtl" : "ltr"}>
      <PageMeta
        title={t("seo.register.title")}
        description={t("seo.register.description")}
        path="/register"
        noIndex
      />
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          {t("auth.createAccount")}
        </h1>
        <p className="text-slate-600 mb-6">{t("auth.registerSubtitle")}</p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="register-name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              {t("auth.fullName")}
            </label>
            <input
              id="register-name"
              type="text"
              autoComplete="name"
              required
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              {t("auth.email")}
            </label>
            <input
              id="register-email"
              type="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              {t("auth.password")}
            </label>
            <input
              id="register-password"
              type="password"
              autoComplete="new-password"
              minLength={8}
              required
              value={form.password}
              onChange={(event) =>
                setForm({ ...form, password: event.target.value })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
          >
            {loading ? t("auth.creatingAccount") : t("auth.register")}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          {t("auth.alreadyHaveAccount")}{" "}
          <Link
            to="/login"
            className="font-semibold text-orange-600 hover:text-orange-700"
          >
            {t("auth.signIn")}
          </Link>
        </p>
      </div>
    </div>
  );
}
