import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/AuthContext.jsx";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(form);
      navigate("/");
    } catch (err) {
      setError(err.message || "Unable to log in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          {t("auth.welcomeBack")}
        </h1>
        <p className="text-slate-600 mb-6">{t("auth.signinSubtitle")}</p>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              {t("auth.email")}
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(event) =>
                setForm({ ...form, email: event.target.value })
              }
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              {t("auth.password")}
            </label>
            <input
              type="password"
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
            {loading ? t("auth.signingIn") : t("auth.login")}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          {t("auth.needAccount")}{" "}
          <Link
            to="/register"
            className="font-semibold text-orange-600 hover:text-orange-700"
          >
            {t("auth.createOne")}
          </Link>
        </p>
      </div>
    </div>
  );
}
