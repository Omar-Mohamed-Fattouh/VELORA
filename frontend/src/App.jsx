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
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Apartments from "./pages/Apartments";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Help from "./pages/Help";

const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

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
