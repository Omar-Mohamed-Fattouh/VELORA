import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import SkipToContent from "./components/SkipToContent.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
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
const Privacy = lazy(() => import("./pages/Privacy"));
const Apartments = lazy(() => import("./pages/Apartments"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Services = lazy(() => import("./pages/Services"));
const Help = lazy(() => import("./pages/Help"));

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
  const location = useLocation();
  return (
    <>
      <SkipToContent />
      <ScrollToTop />
      <Header />
      <ErrorBoundary key={location.pathname}>
        <Suspense fallback={<Loader />}>
          <main id="main-content" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/project-details/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/apartments" element={<Apartments />} />
              <Route path="/services" element={<Services />} />
              <Route path="/page" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/help" element={<Help />} />
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
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default function App() {
  useEffect(() => {
    const syncLanguageDirection = (
      lang = i18n.language || localStorage.getItem("language") || "en",
    ) => {
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
