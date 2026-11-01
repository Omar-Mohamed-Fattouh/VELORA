import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd } from "../data/site.js";
import { blogPosts, loc } from "../data/content.js";

export default function Blog() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <section className="bg-slate-50 px-4 py-14 md:px-6" dir={isRTL ? "rtl" : "ltr"}>
      <PageMeta
        title={t("seo.blog.title")}
        description={t("seo.blog.description")}
        path="/blog"
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.blog"), path: "/blog" },
        ])}
      />
      <div className="container mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-600">
          {t("article.label")}
        </p>
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
          {t("page.blog.title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          {t("page.blog.description")}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={post.image}
                alt={loc(post.title, i18n.language)}
                width={600}
                height={400}
                loading="lazy"
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-slate-500">{post.date}</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  {loc(post.title, i18n.language)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {loc(post.excerpt, i18n.language)}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="mt-5 inline-flex text-sm font-semibold text-orange-600 hover:text-orange-700"
                >
                  {t("article.readMore")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
