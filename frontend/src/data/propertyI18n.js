import { loc } from "./content.js";

const copy = {
  1: {
    title: { en: "Capital Avenue (Al Qirawan)", ar: "كابيتال أفينيو (القيروان)" },
    location: { en: "Riyadh - Al Qirawan", ar: "الرياض - القيروان" },
    short: {
      en: "Premium commercial development in the heart of Riyadh.",
      ar: "تطوير تجاري مميز في قلب الرياض.",
    },
    description: {
      en: "A landmark commercial tower with premium office spaces, landscaped promenade, and modern amenities suited for growing businesses.",
      ar: "برج تجاري بارز بمكاتب مميزة وممشى منسق وخدمات عصرية للشركات النامية.",
    },
  },
  2: {
    title: { en: "Skyline Residency", ar: "سكاي لاين ريزيدنس" },
    location: { en: "Jeddah - Corniche", ar: "جدة - الكورنيش" },
    short: {
      en: "Luxury waterfront residence with sea views and wellness amenities.",
      ar: "سكن فاخر على الواجهة البحرية بإطلالة وخدمات عافية.",
    },
    description: {
      en: "A resort-inspired residential community designed around comfort, indoor-outdoor living, and elevated waterfront experiences.",
      ar: "مجتمع سكني بطابع منتجع يركز على الراحة والمعيشة بين الداخل والخارج وتجربة الواجهة البحرية.",
    },
  },
  3: {
    title: { en: "Desert Crest Villas", ar: "فلل ديزرت كريست" },
    location: { en: "Dubai - Palm Jumeirah", ar: "دبي - نخلة جميرا" },
    short: {
      en: "Exclusive villas with private leisure spaces and a skyline backdrop.",
      ar: "فلل خاصة بمساحات ترفيه وإطلالة على الأفق.",
    },
    description: {
      en: "A gated coastal villa community with breathtaking views, lush landscaping, and high-end finishes for modern living.",
      ar: "مجتمع فلل ساحلي مسوّر بإطلالات وتنسيق أخضر وتشطيبات عالية للمعيشة العصرية.",
    },
  },
  4: {
    title: { en: "Green Horizon Apartments", ar: "شقق الأفق الأخضر" },
    location: { en: "Abu Dhabi - Saadiyat", ar: "أبوظبي - السعديات" },
    short: {
      en: "Contemporary apartments inspired by open-space luxury living.",
      ar: "شقق معاصرة مستوحاة من المعيشة الفسيحة.",
    },
    description: {
      en: "Smart living spaces crafted for families and professionals looking for comfort, sustainability, and premium finishes.",
      ar: "مساحات ذكية للعائلات والمهنيين الباحثين عن الراحة والاستدامة والتشطيب الجيد.",
    },
  },
  5: {
    title: { en: "Harbor View Residences", ar: "إقامات إطلالة الميناء" },
    location: { en: "Doha - West Bay", ar: "الدوحة - الخليج الغربي" },
    short: {
      en: "Urban elegance and marina-inspired comfort in one address.",
      ar: "أناقة المدينة وراحة المارينا في عنوان واحد.",
    },
    description: {
      en: "A refined community built for investors and homeowners who value lifestyle, location, and long-term value.",
      ar: "مجتمع هادئ للمستثمرين والملاك الذين يهتمون بأسلوب الحياة والموقع والقيمة طويلة الأمد.",
    },
  },
  6: {
    title: { en: "Zamalek Garden House", ar: "منزل حديقة الزمالك" },
    location: { en: "Cairo - Zamalek", ar: "القاهرة - الزمالك" },
    short: {
      en: "A calm residential building beside the Nile with shared gardens.",
      ar: "مبنى سكني هادئ بجانب النيل مع حدائق مشتركة.",
    },
    description: {
      en: "Family apartments and duplexes with river walks, doorman service, and upgraded kitchens.",
      ar: "شقق ودوبلكس عائلية مع نزهة على النيل وخدمة بوابة ومطابخ محدّثة.",
    },
  },
  7: {
    title: { en: "Al Yasmin Courtyards", ar: "ساحات الياسمين" },
    location: { en: "Riyadh - Al Yasmin", ar: "الرياض - الياسمين" },
    short: {
      en: "Low-rise homes arranged around planted courtyards.",
      ar: "منازل منخفضة حول أفنية مزروعة.",
    },
    description: {
      en: "A neighborhood-scale project with guest parking, shaded walkways, and family-sized units.",
      ar: "مشروع بحجم حي مع مواقف للضيوف وممرات مظللة ووحدات عائلية.",
    },
  },
  8: {
    title: { en: "Stanley Shore Residences", ar: "إقامات شاطئ ستانلي" },
    location: { en: "Alexandria - Stanley", ar: "الإسكندرية - ستانلي" },
    short: {
      en: "Sea-facing apartments designed for year-round living.",
      ar: "شقق مطلة على البحر للمعيشة طوال العام.",
    },
    description: {
      en: "Salt-resistant finishes, basement parking, and wide balconies along the corniche.",
      ar: "تشطيبات مقاومة للملح ومواقف سفلى وشرفات واسعة على الكورنيش.",
    },
  },
  9: {
    title: { en: "Business Bay Lofts", ar: "لوفت الخليج التجاري" },
    location: { en: "Dubai - Business Bay", ar: "دبي - الخليج التجاري" },
    short: {
      en: "Loft-style homes for professionals who want city access.",
      ar: "منازل لوفت للمهنيين القريبين من المدينة.",
    },
    description: {
      en: "High ceilings, smart access, and a short walk to metro and offices.",
      ar: "أسقف مرتفعة ودخول ذكي ومشي قصير إلى المترو والمكاتب.",
    },
  },
  10: {
    title: { en: "Ismailia Lake Houses", ar: "منازل بحيرة الإسماعيلية" },
    location: { en: "Ismailia - Lake", ar: "الإسماعيلية - البحيرة" },
    short: {
      en: "Small houses near the lake for weekends and family stays.",
      ar: "بيوت صغيرة قرب البحيرة للعطلات والإقامة العائلية.",
    },
    description: {
      en: "Gardens, guest rooms, and a short drive to the city center and ferry.",
      ar: "حدائق وغرف ضيوف ووصول سريع لوسط المدينة والعبّارة.",
    },
  },
  11: {
    title: { en: "King Abdullah Park Villas", ar: "فلل حديقة الملك عبدالله" },
    location: { en: "Riyadh - King Abdullah Park", ar: "الرياض - حديقة الملك عبدالله" },
    short: {
      en: "Detached villas facing a large public park.",
      ar: "فلل مستقلة مطلة على حديقة عامة كبيرة.",
    },
    description: {
      en: "Private yards, driver rooms, and a layout suited to extended families.",
      ar: "أحواش خاصة وغرف سائق وتخطيط يناسب العائلات الممتدة.",
    },
  },
  12: {
    title: { en: "Maadi Shade Lane", ar: "شارع ظل المعادي" },
    location: { en: "Cairo - Maadi", ar: "القاهرة - المعادي" },
    short: {
      en: "Tree-lined street building with mixed 2 and 3 bedroom homes.",
      ar: "مبنى في شارع ظليل بشقق غرفتين وثلاث غرف.",
    },
    description: {
      en: "Quiet floors, street parking, and shops within a short walk.",
      ar: "أدوار هادئة ومواقف في الشارع ومحلات على مسافة قريبة.",
    },
  },
};

export function localizeProperty(property, language) {
  if (!property) return property;
  const extra = copy[property.id];
  if (!extra) return property;
  return {
    ...property,
    title: loc(extra.title, language) || property.title,
    location: loc(extra.location, language) || property.location,
    short: loc(extra.short, language) || property.short,
    description: loc(extra.description, language) || property.description,
  };
}
