import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageMeta from "../components/PageMeta.jsx";
import { breadcrumbJsonLd } from "../data/site.js";
import { blogPosts, loc } from "../data/content.js";

export default function BlogPost() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const post = blogPosts.find((item) => String(item.id) === String(id));

  if (!post) {
    return (
      <section className="px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">{t("seo.notFound.title")}</h1>
        <Link to="/blog" className="mt-6 inline-block font-semibold text-orange-600">
          {t("nav.blog")}
        </Link>
      </section>
    );
  }

  const title = loc(post.title, i18n.language);

  return (
    <article className="bg-slate-50 px-4 py-14 md:px-6" dir={isRTL ? "rtl" : "ltr"}>
      <PageMeta
        title={`${title} | VELORA`}
        description={loc(post.excerpt, i18n.language)}
        path={`/blog/${post.id}`}
        image={post.image}
        jsonLd={breadcrumbJsonLd([
          { name: t("nav.home"), path: "/" },
          { name: t("nav.blog"), path: "/blog" },
          { name: title, path: `/blog/${post.id}` },
        ])}
      />
      <div className="container mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <img
          src={post.image}
          alt={title}
          className="h-72 w-full object-cover"
        />
        <div className="p-6 md:p-10">
          <p className="text-sm text-slate-500">{post.date}</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            {loc(post.body, i18n.language)}
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600"
          >
            {t("nav.blog")}
          </Link>
        </div>
      </div>
    </article>
  );
}
