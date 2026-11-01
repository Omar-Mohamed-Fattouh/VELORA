import house1 from "../assets/house1.webp";
import house2 from "../assets/house2.webp";
import house3 from "../assets/house3.webp";
import house4 from "../assets/house4.webp";
import house5 from "../assets/house5.webp";
import room from "../assets/room.webp";
import aboutHome from "../assets/About.webp";
import article1 from "../assets/Article.webp";
import article2 from "../assets/Article2.webp";
import article3 from "../assets/Article3.webp";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";

export const apartments = [
  {
    id: 1,
    image: house1,
    beds: 2,
    baths: 2,
    area: 128,
    price: 245000,
    status: "Available",
    title: { en: "Nile View Residence", ar: "إقامة إطلالة النيل" },
    location: { en: "Cairo - Zamalek", ar: "القاهرة - الزمالك" },
    description: {
      en: "Bright two-bedroom apartment with balcony views, marble floors, and a quiet street facing the river.",
      ar: "شقة غرفتين مشرقة مع شرفة وإطلالة، وأرضيات رخامية في شارع هادئ مطل على النيل.",
    },
  },
  {
    id: 2,
    image: house2,
    beds: 3,
    baths: 2,
    area: 186,
    price: 390000,
    status: "Available",
    title: { en: "Garden Court Apartment", ar: "شقة جاردن كورت" },
    location: { en: "Riyadh - Al Yasmin", ar: "الرياض - الياسمين" },
    description: {
      en: "Family apartment with a landscaped courtyard, upgraded kitchen, and two parking spaces.",
      ar: "شقة عائلية بفناء منسق ومطبخ محدّث وموقفين للسيارات.",
    },
  },
  {
    id: 3,
    image: house3,
    beds: 1,
    baths: 1,
    area: 72,
    price: 165000,
    status: "Available",
    title: { en: "City Studio Loft", ar: "استوديو لوفت المدينة" },
    location: { en: "Dubai - Business Bay", ar: "دبي - الخليج التجاري" },
    description: {
      en: "Compact loft with high ceilings, smart storage, and walking access to cafes and metro.",
      ar: "لوفت مدمج بأسقف مرتفعة وتخزين ذكي وقرب من المقاهي والمترو.",
    },
  },
  {
    id: 4,
    image: house4,
    beds: 4,
    baths: 3,
    area: 248,
    price: 620000,
    status: "Under Construction",
    title: { en: "Palm Horizon Suite", ar: "جناح أفق النخلة" },
    location: { en: "Jeddah - Corniche", ar: "جدة - الكورنيش" },
    description: {
      en: "Wide sea-facing suite with a private terrace, staff room, and full-floor windows.",
      ar: "جناح واسع مطل على البحر مع تراس خاص وغرفة خدمة ونوافذ بطول الطابق.",
    },
  },
  {
    id: 5,
    image: house5,
    beds: 3,
    baths: 3,
    area: 210,
    price: 455000,
    status: "Available",
    title: { en: "Saadiyat Light Home", ar: "منزل السعديات المضيء" },
    location: { en: "Abu Dhabi - Saadiyat", ar: "أبوظبي - السعديات" },
    description: {
      en: "Open-plan residence near the beach, with a study, maid room, and community pool.",
      ar: "سكن مفتوح قريب من الشاطئ مع مكتب وغرفة خادمة ومسبح مجتمعي.",
    },
  },
  {
    id: 6,
    image: room,
    beds: 2,
    baths: 2,
    area: 140,
    price: 275000,
    status: "Sold",
    title: { en: "West Bay Corner", ar: "ركن الخليج الغربي" },
    location: { en: "Doha - West Bay", ar: "الدوحة - الخليج الغربي" },
    description: {
      en: "Corner unit with two exposures, a large living room, and marina skyline views.",
      ar: "وحدة ركنية بإطلالتين وغرفة معيشة واسعة ومشهد على أفق المارينا.",
    },
  },
  {
    id: 7,
    image: aboutHome,
    beds: 3,
    baths: 2,
    area: 198,
    price: 410000,
    status: "Available",
    title: { en: "Ismailia Garden Flat", ar: "شقة حديقة الإسماعيلية" },
    location: { en: "Ismailia - City Center", ar: "الإسماعيلية - وسط المدينة" },
    description: {
      en: "Quiet garden-level apartment with a private patio, new finishes, and nearby schools.",
      ar: "شقة هادئة بمستوى الحديقة وفناء خاص وتشطيبات جديدة ومدارس قريبة.",
    },
  },
  {
    id: 8,
    image: img1,
    beds: 2,
    baths: 1,
    area: 110,
    price: 198000,
    status: "Available",
    title: { en: "Maadi Shade Apartment", ar: "شقة ظل المعادي" },
    location: { en: "Cairo - Maadi", ar: "القاهرة - المعادي" },
    description: {
      en: "Tree-lined street apartment with a sunny kitchen, balcony, and storage room.",
      ar: "شقة في شارع ظليل مع مطبخ مشمس وشرفة وغرفة تخزين.",
    },
  },
  {
    id: 9,
    image: img2,
    beds: 5,
    baths: 4,
    area: 320,
    price: 890000,
    status: "Available",
    title: { en: "Royal Park Penthouse", ar: "بنتهاوس رويال بارك" },
    location: { en: "Riyadh - King Abdullah Park", ar: "الرياض - حديقة الملك عبدالله" },
    description: {
      en: "Top-floor penthouse with a roof terrace, elevator access, and panoramic city lights.",
      ar: "بنتهاوس في الطابق الأعلى مع سطح ووصول بالمصعد وإطلالة بانورامية.",
    },
  },
  {
    id: 10,
    image: img3,
    beds: 1,
    baths: 1,
    area: 64,
    price: 142000,
    status: "Under Construction",
    title: { en: "Harbor Mini Suite", ar: "جناح الميناء الصغير" },
    location: { en: "Alexandria - Stanley", ar: "الإسكندرية - ستانلي" },
    description: {
      en: "One-bedroom suite designed for short stays or first-home buyers near the sea.",
      ar: "جناح غرفة واحدة مناسب للإقامة القصيرة أو أول منزل قرب البحر.",
    },
  },
  {
    id: 11,
    image: house1,
    beds: 3,
    baths: 2,
    area: 175,
    price: 335000,
    status: "Available",
    title: { en: "Heliopolis Courtyard Home", ar: "منزل فناء مصر الجديدة" },
    location: { en: "Cairo - Heliopolis", ar: "القاهرة - مصر الجديدة" },
    description: {
      en: "Classic street apartment with high ceilings, a service elevator, and a shared courtyard.",
      ar: "شقة كلاسيكية بأسقف مرتفعة ومصعد خدمة وفناء مشترك.",
    },
  },
  {
    id: 12,
    image: house2,
    beds: 2,
    baths: 2,
    area: 132,
    price: 288000,
    status: "Available",
    title: { en: "New Cairo Work Loft", ar: "لوفت العمل في القاهرة الجديدة" },
    location: { en: "Cairo - New Cairo", ar: "القاهرة - القاهرة الجديدة" },
    description: {
      en: "Two-bedroom loft with a work corner, gym access, and covered parking.",
      ar: "لوft غرفتين مع ركن عمل ونادي رياضي وموقف مغطى.",
    },
  },
  {
    id: 13,
    image: house3,
    beds: 4,
    baths: 3,
    area: 260,
    price: 710000,
    status: "Available",
    title: { en: "Sheikh Zayed Garden Villa", ar: "فيلا حديقة الشيخ زايد" },
    location: { en: "Giza - Sheikh Zayed", ar: "الجيزة - الشيخ زايد" },
    description: {
      en: "Detached villa with a private garden, maid room, and a quiet gated street.",
      ar: "فيلا مستقلة بحديقة خاصة وغرفة خادمة وشارع هادئ مسوّر.",
    },
  },
  {
    id: 14,
    image: house5,
    beds: 1,
    baths: 1,
    area: 58,
    price: 128000,
    status: "Sold",
    title: { en: "Downtown Starter Flat", ar: "شقة البداية في وسط البلد" },
    location: { en: "Cairo - Downtown", ar: "القاهرة - وسط البلد" },
    description: {
      en: "Compact first home near cafes, metro, and offices for a short commute.",
      ar: "منزل أول مدمج قرب المقاهي والمترو والمكاتب.",
    },
  },
  {
    id: 15,
    image: room,
    beds: 3,
    baths: 2,
    area: 168,
    price: 360000,
    status: "Under Construction",
    title: { en: "Corniche Light Residence", ar: "إقامة نور الكورنيش" },
    location: { en: "Alexandria - Gleem", ar: "الإسكندرية - جليم" },
    description: {
      en: "Three-bedroom home with morning light, a utility room, and sea-breeze balconies.",
      ar: "منزل ثلاث غرف بإضاءة صباحية وغرفة خدمات وشرفات بنسيم البحر.",
    },
  },
  {
    id: 16,
    image: aboutHome,
    beds: 2,
    baths: 2,
    area: 146,
    price: 255000,
    status: "Available",
    title: { en: "Lake Edge Apartment", ar: "شقة حافة البحيرة" },
    location: { en: "Ismailia - Lake", ar: "الإسماعيلية - البحيرة" },
    description: {
      en: "Calm two-bedroom apartment with a lake path, parking, and nearby schools.",
      ar: "شقة هادئة غرفتين مع مسار البحيرة وموقف ومدارس قريبة.",
    },
  },
];

export const blogPosts = [
  {
    id: 1,
    image: article1,
    date: "20 Nov 2025",
    comments: 8,
    title: { en: "How to prepare your home before listing", ar: "كيف تجهّز منزلك قبل طرحه للبيع" },
    excerpt: {
      en: "Small repairs, light, and honest photos make a listing feel ready without a full renovation.",
      ar: "إصلاحات صغيرة وإضاءة وصور صادقة تجعل الإعلان جاهزاً من غير تجديد كامل.",
    },
    body: {
      en: "Buyers decide quickly. Clean sightlines, working lights, and a priced plan for any remaining work help them trust the home. Start with the entrance, then the living room, then the kitchen. Remove extra furniture so rooms look larger, and keep one personal object so the space still feels lived in.",
      ar: "المشتري يقرر بسرعة. الممرات الواضحة والإضاءة والوضوح في الأعمال المتبقية تساعده على الثقة. ابدأ بالمدخل ثم المعيشة ثم المطبخ. قلّل الأثاث ليظهر الاتساع واترك عنصراً شخصياً واحداً حتى يبقى المكان حياً.",
    },
  },
  {
    id: 2,
    image: article2,
    date: "12 Nov 2025",
    comments: 5,
    title: { en: "What actually moves property value", ar: "ما الذي يحرّك قيمة العقار فعلاً" },
    excerpt: {
      en: "Location, building condition, and nearby services still outweigh decorative upgrades.",
      ar: "الموقع وحالة المبنى والخدمات القريبة ما زالت أهم من التشطيبات الشكلية.",
    },
    body: {
      en: "A new kitchen helps, but access, light, and a sound building help more. Compare three recent sales on the same street before you set a price. If the home needs work, show the cost clearly instead of hiding it.",
      ar: "المطبخ الجديد يفيد، لكن الوصول والإضاءة والمبنى السليم يفيدون أكثر. قارن ثلاث بيوعات حديثة في نفس الشارع قبل التسعير. وإن كان البيت يحتاج عملاً، اذكر التكلفة بوضوح.",
    },
  },
  {
    id: 3,
    image: article3,
    date: "02 Nov 2025",
    comments: 11,
    title: { en: "A first-time buyer checklist", ar: "قائمة المشتري لأول مرة" },
    excerpt: {
      en: "Budget, commute, and building rules should be settled before you fall for a view.",
      ar: "الميزانية والمواصلات وقواعد المبنى لازم تتحدد قبل ما تنجذب للإطلالة.",
    },
    body: {
      en: "Write the monthly number you can carry, then look only inside that range. Visit at two times of day. Ask about fees, parking, and water pressure. If anything is unclear, pause. A good purchase can wait one more week.",
      ar: "اكتب الرقم الشهري الذي تتحمله ثم ابحث داخل هذا النطاق فقط. زُر المكان في وقتين مختلفين. اسأل عن الرسوم والمواقف وضغط المياه. وإن بقي شيء غامضاً توقف. الصفقة الجيدة تحتمل أسبوعاً إضافياً.",
    },
  },
  {
    id: 4,
    image: house2,
    date: "24 Oct 2025",
    comments: 4,
    title: { en: "Renting versus buying in this market", ar: "الإيجار مقابل الشراء في هذا السوق" },
    excerpt: {
      en: "The better choice depends on how long you will stay, not on a single headline rate.",
      ar: "الخيار الأفضل يعتمد على مدة بقائك لا على رقم واحد في عنوان الخبر.",
    },
    body: {
      en: "If you expect to move within three years, renting can be the calmer path. If you will stay longer and can keep a reserve, buying builds a place you control. Run both numbers with the same lifestyle, not an optimistic one.",
      ar: "إن كنت ستنتقل خلال ثلاث سنوات فالإيجار قد يكون أهدأ. وإن كنت ستبقى أطول وتحتفظ باحتياطي فالشراء يمنحك مكاناً تتحكم فيه. احسب الرقمين بنفس أسلوب الحياة لا بالأفضل.",
    },
  },
  {
    id: 5,
    image: house4,
    date: "15 Oct 2025",
    comments: 6,
    title: { en: "How we value a coastal home", ar: "كيف نقيّم منزلاً على الساحل" },
    excerpt: {
      en: "Sea view is only one line. Access, humidity wear, and year-round use matter too.",
      ar: "إطلالة البحر سطر واحد. الوصول وتآكل الرطوبة والاستخدام طوال العام مهمان أيضاً.",
    },
    body: {
      en: "We look at the view, then at parking, flood risk, and how the building handles salt air. A quieter street one block inland can be worth more if daily life is easier.",
      ar: "ننظر إلى الإطلالة ثم إلى المواقف ومخاطر المياه وكيف يتحمل المبنى هواء الملح. شارع أهدأ على بعد مربع قد يكون أعلى قيمة إن كانت الحياة اليومية أسهل.",
    },
  },
  {
    id: 6,
    image: aboutHome,
    date: "03 Oct 2025",
    comments: 3,
    title: { en: "Documents you need before an offer", ar: "أوراق تحتاجها قبل تقديم عرض" },
    excerpt: {
      en: "Title, utilities, and building approval should be in one folder before negotiation starts.",
      ar: "سند الملكية والمرافق وموافقة المبنى لازم تكون في ملف واحد قبل التفاوض.",
    },
    body: {
      en: "Ask for proof of ownership, the latest utility bills, and any association rules. If a permit is missing, price it. Clear papers shorten the path from interest to keys.",
      ar: "اطلب إثبات الملكية وآخر فواتير ورسوم المبنى. وإن نقص تصريح فاحسبه في السعر. الأوراق الواضحة تقصّر الطريق من الاهتمام إلى التسليم.",
    },
  },
  {
    id: 7,
    image: house1,
    date: "21 Sep 2025",
    comments: 7,
    title: { en: "What to ask on a first viewing", ar: "ماذا تسأل في أول معاينة" },
    excerpt: {
      en: "Noise, water, parking, and neighbors tell you more than the listing photos.",
      ar: "الضوضاء والمياه والموقف والجيران يقولون أكثر من صور الإعلان.",
    },
    body: {
      en: "Stand still in each room. Listen. Open taps. Ask who lives next door and how the building handles repairs. If the agent rushes you, slow down. You are buying the ordinary day, not the photos.",
      ar: "قف في كل غرفة واستمع وافتح الحنفيات. اسأل من يسكن بجوارك وكيف تُدار الصيانة. وإن استعجل الوكيل فتمهل. أنت تشتري اليوم العادي لا الصور.",
    },
  },
  {
    id: 8,
    image: house5,
    date: "08 Sep 2025",
    comments: 9,
    title: { en: "A simple way to compare two homes", ar: "طريقة بسيطة لمقارنة منزلين" },
    excerpt: {
      en: "Write five facts for each home, then ignore the nicer sofa.",
      ar: "اكتب خمسة حقائق لكل منزل ثم تجاهل الأريكة الأجمل.",
    },
    body: {
      en: "Price, commute, light, condition, and monthly fees. If one home wins four of five, the nicer kitchen is not enough. Bring the same list to every visit so emotion does not rewrite the numbers.",
      ar: "السعر والمواصلات والضوء والحالة والرسوم الشهرية. إن فاز منزل بأربعة من خمسة فالمطبخ الأجمل لا يكفي. خذ نفس القائمة لكل زيارة حتى لا يعيد الإحساس كتابة الأرقام.",
    },
  },
];

export const services = [
  {
    id: "buy",
    title: { en: "Home buying", ar: "شراء المنازل" },
    text: {
      en: "We shortlist homes that match your budget, commute, and family needs, then stay with you through viewing and offer.",
      ar: "نرشّح منازل تناسب ميزانيتك ومواصلاتك واحتياج أسرتك، ونبقى معك في المعاينة والعرض.",
    },
  },
  {
    id: "sell",
    title: { en: "Home selling", ar: "بيع المنازل" },
    text: {
      en: "Pricing, photos, inquiries, and negotiation handled in one sequence so you are not left managing the listing alone.",
      ar: "التسعير والصور والاستفسارات والتفاوض في مسار واحد حتى لا تدير الإعلان وحدك.",
    },
  },
  {
    id: "rent",
    title: { en: "Letting and rentals", ar: "التأجير" },
    text: {
      en: "Tenant screening, contracts, and handover support for owners who want a steady rental without daily calls.",
      ar: "فرز المستأجرين والعقود والتسليم للملاك الذين يريدون إيجاراً ثابتاً من غير مكالمات يومية.",
    },
  },
  {
    id: "manage",
    title: { en: "Property management", ar: "إدارة العقارات" },
    text: {
      en: "Maintenance coordination, inspections, and monthly reporting for homes and small buildings.",
      ar: "تنسيق الصيانة والمعاينات وتقرير شهري للمنازل والمباني الصغيرة.",
    },
  },
  {
    id: "value",
    title: { en: "Valuation", ar: "التقييم" },
    text: {
      en: "A clear, comparable-based value so you can list, refinance, or decide whether to wait.",
      ar: "قيمة واضحة مبنية على عقارات مشابهة لتعلن أو تعيد التمويل أو تقرر الانتظار.",
    },
  },
  {
    id: "invest",
    title: { en: "Investment advice", ar: "الاستشارة الاستثمارية" },
    text: {
      en: "Yield, location risk, and hold period explained in plain language before you commit funds.",
      ar: "العائد ومخاطر الموقع ومدة الاحتفاظ بلغة واضحة قبل ما تربط أموالك.",
    },
  },
];

export const loc = (value, language) => {
  const lang = language?.startsWith("ar") ? "ar" : "en";
  if (value && typeof value === "object") return value[lang] || value.en;
  return value;
};
