import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { getSiteUrl } from "../data/site.js";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.append(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel, href, extra = {}) {
  const selector = extra.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.append(element);
  }
  element.setAttribute("href", href);
  Object.entries(extra).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

export default function PageMeta({
  title,
  description,
  path = "/",
  image = "/og-image.jpg",
  noIndex = false,
  jsonLd,
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";
  const jsonLdKey = JSON.stringify(jsonLd || null);

  useEffect(() => {
    const site = getSiteUrl();
    const url = `${site}${path}`;
    const absoluteImage = image.startsWith("http") ? image : `${site}${image}`;
    const fullTitle = title || "VELORA | Real Estate";

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", absoluteImage);
    upsertMeta("property", "og:image:secure_url", absoluteImage);
    upsertMeta("property", "og:image:type", absoluteImage.endsWith(".jpg") ? "image/jpeg" : "image/png");
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", "VELORA");
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "VELORA");
    upsertMeta("property", "og:locale", lang === "ar" ? "ar_SA" : "en_US");
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", absoluteImage);
    upsertLink("canonical", url);
    upsertLink("alternate", url, { hreflang: lang });
    upsertLink("alternate", url, { hreflang: "x-default" });

    const existing = document.getElementById("velora-jsonld");
    if (existing) existing.remove();
    if (jsonLd) {
      const script = document.createElement("script");
      script.id = "velora-jsonld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
      document.head.append(script);
    }

    return () => {
      document.getElementById("velora-jsonld")?.remove();
    };
  }, [title, description, path, image, noIndex, jsonLdKey, lang]);

  return null;
}
