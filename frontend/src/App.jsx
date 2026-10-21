import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "./layout/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useAuth } from "./context/AuthContext.jsx";
import i18n from "./i18n";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));
const GenericPage = lazy(() => import("./pages/GenericPage"));

function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
}

function MainLayout() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/project-details/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/apartments"
              element={
                <GenericPage
                  title={t("page.apartments.title")}
                  description={t("page.apartments.description")}
                />
              }
            />
            <Route
              path="/page"
              element={
                <GenericPage
                  title={t("page.page.title")}
                  description={t("page.page.description")}
                />
              }
            />
            <Route
              path="/blog"
              element={
                <GenericPage
                  title={t("page.blog.title")}
                  description={t("page.blog.description")}
                />
              }
            />
            <Route
              path="/help"
              element={
                <GenericPage
                  title={t("page.help.title")}
                  description={t("page.help.description")}
                />
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const syncLanguageDirection = (lang = i18n.language || localStorage.getItem("language") || "en") => {
      const normalizedLang = lang.startsWith("ar") ? "ar" : "en";
      document.documentElement.lang = normalizedLang;
      document.documentElement.dir = normalizedLang === "ar" ? "rtl" : "ltr";
      document.body.dir = normalizedLang === "ar" ? "rtl" : "ltr";
      localStorage.setItem("language", normalizedLang);
    };

    syncLanguageDirection();
    i18n.on("languageChanged", syncLanguageDirection);

    return () => {
      i18n.off("languageChanged", syncLanguageDirection);
    };
  }, []);

  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
