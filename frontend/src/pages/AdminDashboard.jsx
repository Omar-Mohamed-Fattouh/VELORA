import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import apiRequest from '../services/api.js';
import PageMeta from '../components/PageMeta.jsx';
import Loader from '../components/Loader.jsx';
import { useTranslation } from 'react-i18next';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [properties, setProperties] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [appointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [propertyData, inquiryData] = await Promise.all([
        apiRequest('/properties'),
        apiRequest('/inquiries'),
      ]);

      setProperties(propertyData.data.items || []);
      setInquiries(inquiryData.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12" dir={isRTL ? "rtl" : "ltr"}>
      <PageMeta
        title={t("seo.admin.title")}
        description={t("seo.admin.title")}
        path="/admin"
        noIndex
      />
      <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-slate-900 p-6 text-white md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-orange-300">{t("seo.admin.title")}</p>
          <h1 className="mt-2 text-3xl font-bold">{t("admin.welcome")}, {user?.name}</h1>
        </div>
        <button
          onClick={handleLogout}
          className="rounded-xl bg-orange-500 px-4 py-2 font-semibold text-white transition hover:bg-orange-400"
        >
          {t("auth.logout")}
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-8 lg:grid-cols-2">
          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-4 text-xl font-bold text-slate-900">{t("admin.properties")}</h2>
            <div className="space-y-3">
              {properties.length === 0 ? (
                <p className="text-slate-500">{t("admin.emptyProperties")}</p>
              ) : (
                properties.map((property) => (
                  <div key={property.id} className="flex items-center justify-between rounded-xl border border-slate-200 p-3">
                    <div>
                      <p className="font-semibold text-slate-800">{property.title}</p>
                      <p className="text-sm text-slate-500">{property.location}</p>
                    </div>
                    <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                      {property.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="mb-4 text-xl font-bold text-slate-900">{t("admin.inquiries")}</h2>
            <div className="space-y-3">
              {inquiries.length === 0 ? (
                <p className="text-slate-500">{t("admin.emptyInquiries")}</p>
              ) : (
                inquiries.map((inquiry) => (
                  <div key={inquiry.id} className="rounded-xl border border-slate-200 p-3">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold text-slate-800">{inquiry.name}</p>
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
                        {inquiry.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500">{inquiry.email}</p>
                    <p className="mt-2 text-sm text-slate-600">{inquiry.message || t("admin.noMessage")}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold text-slate-900">{t("admin.appointments")}</h2>
            <div className="space-y-3">
              {appointments.length === 0 ? (
                <p className="text-slate-500">{t("admin.emptyAppointments")}</p>
              ) : (
                appointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-3">
                    <div>
                      <p className="font-semibold text-slate-800">{appointment.name}</p>
                      <p className="text-sm text-slate-500">{appointment.date} {t("admin.at")} {appointment.time}</p>
                      <p className="text-sm text-slate-500">{appointment.email}</p>
                    </div>
                    <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-700">
                      {appointment.status}
                    </span>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
