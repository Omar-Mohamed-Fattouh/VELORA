import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("VELORA UI error:", error, info);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    const isRTL =
      typeof document !== "undefined" && document.documentElement.dir === "rtl";

    return (
      <section className="min-h-[60vh] bg-slate-50 px-4 py-20" dir={isRTL ? "rtl" : "ltr"}>
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            VELORA
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            {isRTL ? "حدث خطأ غير متوقع" : "Something went wrong"}
          </h1>
          <p className="mt-3 text-slate-600">
            {isRTL
              ? "الصفحة واجهت خطأ. يمكنك إعادة التحميل أو العودة إلى الرئيسية."
              : "The page hit an unexpected error. You can reload or return to the homepage."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
            >
              {isRTL ? "إعادة تحميل الصفحة" : "Reload page"}
            </button>
            <Link
              to="/"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-slate-400"
              onClick={() => this.setState({ hasError: false })}
            >
              {isRTL ? "العودة للرئيسية" : "Go home"}
            </Link>
          </div>
        </div>
      </section>
    );
  }
}
