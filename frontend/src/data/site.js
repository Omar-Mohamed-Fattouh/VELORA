export const SITE_NAME = "VELORA";
export const SITE_TAGLINE = "Real Estate";

export const getSiteUrl = () => {
  if (import.meta.env.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL.replace(/\/$/, "");
  }
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://localhost:5175";
};

export const siteContact = {
  email: "info@velora.com",
  phone: "+20 123 456 7890",
  phoneHref: "tel:+201234567890",
  whatsapp: "https://wa.me/201234567890",
  address: "Ismailia, Egypt",
  hours: "Mon - Sat 9:00 am to 6:00 pm",
};

export const socialLinks = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com",
  },
  {
    id: "twitter",
    label: "X",
    href: "https://x.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com",
  },
];

export function organizationJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "RealEstateAgent"],
    name: SITE_NAME,
    url,
    logo: `${url}/icon-512.png`,
    image: `${url}/og-cover.webp`,
    email: siteContact.email,
    telephone: siteContact.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ismailia",
      addressCountry: "EG",
    },
    sameAs: socialLinks.map((item) => item.href),
    areaServed: ["EG", "SA", "AE"],
  };
}

export function websiteJsonLd() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url,
    inLanguage: ["en", "ar"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/projects?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(crumbs) {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${url}${crumb.path}`,
    })),
  };
}

export function propertyJsonLd(property) {
  if (!property) return null;
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.title,
    description: property.description || property.short,
    image: property.image,
    url: `${url}/projects/${property.id}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.location,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: property.area,
      unitCode: "MTK",
    },
    offers: {
      "@type": "Offer",
      price: property.price,
      priceCurrency: "USD",
      availability:
        property.status === "Sold"
          ? "https://schema.org/SoldOut"
          : "https://schema.org/InStock",
    },
  };
}
