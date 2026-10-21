import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "About Us": "About Us",
      Home: "Home",
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.apartments": "Apartments",
      "nav.projects": "Projects",
      "nav.page": "Page",
      "nav.blog": "Blog",
      "nav.contact": "Contact",
      "meta.title": "MSGA | Real Estate",
      "meta.description":
        "Explore thoughtfully designed homes and real estate opportunities with MSGA.",
      "page.apartments.title": "Apartments",
      "page.apartments.description":
        "Explore premium apartments and residences designed for comfort, convenience, and modern city living.",
      "page.page.title": "Page",
      "page.page.description":
        "This page is kept as a flexible content hub for your additional real-estate content sections.",
      "page.blog.title": "Blog",
      "page.blog.description":
        "Read market insights, property news, and expert guidance from the MSGA team.",
      "page.help.title": "Help",
      "page.help.description":
        "Need support? Contact our team for guidance on buying, selling, or investing in property.",
      "header.openingHours": "Opening hours",
      "header.login": "Login",
      "header.register": "Register",
      "header.help": "Help You",
      "headerTop.openingHoursLabel": "Opening hours:",
      "headerTop.openingHoursValue": "Mon - Sat 9:00 am to 6:00 pm",
      "headerTop.login": "Login",
      "headerTop.register": "Register",
      "headerTop.help": "Help You",
      "header.contactUs": "CONTACT US",
      "header.sendEmail": "Send Email",
      "header.callAgent": "Call Agent",
      "header.openingTime": "Opening Time",
      "header.getNotification": "Get Notification",
      "header.subscribeNow": "Subscribe Now",
      "header.changingLives": "Changing Lives For The Better",
      "header.sidebarText":
        "In regions affected by conflict and disaster, access to healthcare and psychological support is crucial. We support initiatives that offer medical care, counseling, and emotional support to children and families.",
      "auth.welcomeBack": "Welcome back",
      "auth.signinSubtitle":
        "Sign in to manage your account and property interests.",
      "auth.email": "Email",
      "auth.password": "Password",
      "auth.signingIn": "Signing in...",
      "auth.login": "Login",
      "auth.needAccount": "Need an account?",
      "auth.createOne": "Create one",
      "auth.createAccount": "Create account",
      "auth.registerSubtitle":
        "Register to save your property interests and receive updates.",
      "auth.fullName": "Full name",
      "auth.creatingAccount": "Creating account...",
      "auth.register": "Register",
      "auth.alreadyHaveAccount": "Already have an account?",
      "auth.signIn": "Sign in",
      "Switch Language": "العربية",
      "Our About Property": "Our About Property",
      "aboutSection.label": "Our About Property",
      "aboutSection.heading":
        "A single-family home or townhouse typically owned by an individual or family.",
      "aboutSection.description":
        "Home tailored design, management & support services business agency elit, sed eiusmod tempor majority have in some form by injected humour solution.",
      "aboutSection.cta": "About More",
      "We Provide Thorough About Customer Service Home.":
        "We Provide Thorough About Customer Service Home.",
      "About More →": "About More →",
      "Home tailored design paragraph":
        "Home tailored design, management & support services business agency elit, sed do eiusmod tempor majority have in some we form by injected humour solution Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus ex dignissimos nostrum qui. Laudantium, fugiat suscipit quos adipisci eum dignissimos odio! Sint nulla sequi commodi voluptatum! Suscipit ab corrupti nihil sunt corporis excepturi cupiditate quod maxime reprehenderit earum, tempora consequatur possimus vitae sit sapiente saepe dolores voluptates blanditiis incidunt..",
      "Brand Logo": "Brand Logo",
      "Brand Logo Hover": "Brand Logo Hover",

      // AboutProperty Features
      "PARKING SPACE": "PARKING SPACE",
      "Secure parking for your vehicle with 24/7 surveillance, ensuring convenience and peace of mind.":
        "Secure parking for your vehicle with 24/7 surveillance, ensuring convenience and peace of mind.",
      "SWIMMING POOL": "SWIMMING POOL",
      "Relax in our modern pool with crystal-clear water, perfect for a refreshing swim or lounging under the sun.":
        "Relax in our modern pool with crystal-clear water, perfect for a refreshing swim or lounging under the sun.",
      "FAST FREE WI-FI": "FAST FREE WI-FI",
      "Enjoy unlimited high-speed internet access across the property, ideal for work, streaming, and staying connected.":
        "Enjoy unlimited high-speed internet access across the property, ideal for work, streaming, and staying connected.",
      "FOOD VEGETABLE": "FOOD VEGETABLE",
      "Fresh, organic, and healthy meals prepared daily with seasonal vegetables sourced from trusted farms.":
        "Fresh, organic, and healthy meals prepared daily with seasonal vegetables sourced from trusted farms.",
      Property: "Property",
      OUREXPERTAGENTS: "Our Expert Agents",
      "Marketing Teams Responsible Meet Promoting Apartment List.":
        "Marketing Teams Responsible Meet Promoting Apartment List.",
      Founder: "Founder",
      "Louis Coolidge": "Louis Coolidge",
      "Our Best Projects": "Our Best Projects",
      "article.label": "OUR LARGEST BLOG",
      "article.heading": "Our News & Property",
      "article.subtitle": "Articles of blog",
      "article.by": "By:",
      "article.comments": "Comments",
      "article.readMore": "READ MORE",
      "article.author": "Admin",
      "article.post1Title": "Modern Industrial of Blog Apartment",
      "article.post2Title": "Full Property Blog Some Agencies",
      "article.post3Title": "Promote to Property Blog Effectively",
      "Property Investment Assisting Projects House lucrative.":
        "Property Investment Assisting Projects House lucrative.",
      "Interior Design City House": "Interior Design City House",
      "Lux Life Room Magazine": "Lux Life Room Magazine",
      "Ecological House": "Ecological House",
      "Club & Wellness City Room": "Club & Wellness City Room",
      "London Home City Room": "London Home City Room",
      "View Details": "View Details",
      "Sell Your City House Fast For Cash!":
        "Sell Your City House Fast For Cash!",
      "Our process is extremely simple. Fill out our quick form & receive a free no-obligation cash offer!":
        "Our process is extremely simple. Fill out our quick form & receive a free no-obligation cash offer!",
      "Let’s Talk Real Estate": "Let’s Talk Real Estate",
      "Looking for your dream home, selling property, or need investment advice? Fill out the form below and our expert team will reach out to you.":
        "Looking for your dream home, selling property, or need investment advice? Fill out the form below and our expert team will reach out to you.",
      "Full Name *": "Full Name *",
      "Phone Number *": "Phone Number *",
      "Email Address *": "Email Address *",
      "Select Interest": "Select Interest",
      "Buy Property": "Buy Property",
      "Sell Property": "Sell Property",
      Rent: "Rent",
      Investment: "Investment",
      "Your Message *": "Your Message *",
      "Send Request": "Send Request",
      "Trusted House Buyers in Your City | No Fees, No Obligations":
        "Trusted House Buyers in Your City | No Fees, No Obligations",
      "Sell Your": "Sell Your",
      "City House": "City House",
      Fast: "Fast",
      For: "For",
      "Cash!": "Cash!",
      "hero.subtitle": "WELCOME TO MSGA!",
      "hero.slide1.titleStart": "Modern Homes",
      "hero.slide1.titleAccent": "Best",
      "hero.slide1.titleEnd": "City Locations Now.",
      "hero.slide1.text":
        "We provide the most House and functional IT design place for companies and businesses home.",
      "hero.slide1.stat1": "90 Apartments",
      "hero.slide1.stat2": "2500 Square",
      "hero.slide1.location":
        "400 London Road City Labest 896 Th At Ruben Place",
      "hero.slide2.titleStart": "Perfect Place",
      "hero.slide2.titleAccent": "Business",
      "hero.slide2.titleEnd": "Start With Ease.",
      "hero.slide2.text":
        "We provide the most House and functional IT design place for companies and businesses home.",
      "hero.slide2.stat1": "70 Apartments",
      "hero.slide2.stat2": "2100 Square",
      "hero.slide2.location":
        "123 Green Street, Springfield Near Riverside Park",
      "hero.slide3.titleStart": "Many Property",
      "hero.slide3.titleAccent": "Places",
      "hero.slide3.titleEnd": "Service Best Home.",
      "hero.slide3.text":
        "We provide the most House and functional IT design place for companies and businesses home.",
      "hero.slide3.stat1": "120 Apartments",
      "hero.slide3.stat2": "3000 Square",
      "hero.slide3.location": "890 Main Avenue, Downtown Next to City Mall",
      "Our process is": "Our process is",
      "extremely simple": "extremely simple",
      "Fill out our quick form & receive a":
        "Fill out our quick form & receive a",
      "free no-obligation cash offer!": "free no-obligation cash offer!",
      "Let’s Talk": "Let’s Talk",
      "Real Estate": "Real Estate",
      "Looking for your": "Looking for your",
      "dream home": "dream home",
      "selling property, or need": "selling property, or need",
      "investment advice": "investment advice",
      "Fill out the form below and our expert team will reach out to you.":
        "Fill out the form below and our expert team will reach out to you.",
      "social.connectTitleStart": "Let’s",
      "social.connectTitleEnd": "Connect",
      "social.connectSubtitle":
        "We’d love to hear from you. Reach out through your favorite channel.",
      "social.email": "Email",
      "social.phone": "Phone",
      "social.whatsapp": "WhatsApp",
      "social.linkedin": "LinkedIn",
      "social.facebook": "Facebook",
      "social.instagram": "Instagram",
      "social.location": "Location",
      "social.locationText": "Ismailia, Egypt",
      "Trusted House Buyers in Your City": "Trusted House Buyers in Your City",
      "No Fees": "No Fees",
      "No Obligations": "No Obligations",
      Email: "Email",
      Phone: "Phone",
      WhatsApp: "WhatsApp",
      LinkedIn: "LinkedIn",
      Facebook: "Facebook",
      Instagram: "Instagram",
      Location: "Location",
      EmailAddress: "example@gmail.com",
      PhoneNumber: "+20 123 456 7890",
      WhatsAppNumber: "+20 123 456 7890",
      LinkedInProfile: "/in/yourname",
      FacebookPage: "/YourPage",
      InstagramProfile: "@yourprofile",
      LocationText: "Ismailia, Egypt",
      "Visit Our Office": "Visit Our Office",
      "You can find us at our headquarters below.":
        "You can find us at our headquarters below.",
      Projects: "Projects",
      "Projects you want to achieve\nrelaxing garden functional.":
        "Projects you want to achieve\nrelaxing garden functional.",
      "Search projects...": "Search projects...",
      Details: "Details",
      Consultation: "Consultation",
      "All locations": "All locations",
      "All statuses": "All statuses",
      Available: "Available",
      "Under Construction": "Under Construction",
      Sold: "Sold",
      "All prices": "All prices",
      "Under 10,000": "Under 10,000",
      "10,000 - 25,000": "10,000 - 25,000",
      "Over 25,000": "Over 25,000",
      "All areas": "All areas",
      "Under 100 m²": "Under 100 m²",
      "100 - 300 m²": "100 - 300 m²",
      "Over 300 m²": "Over 300 m²",
      "No projects match your filters.": "No projects match your filters.",
      Map: "Map",
      Video: "Video",
      "Open Map": "Open Map",
      "Watch Video": "Watch Video",
      "m²": "m²",
      "Paris Luxury Floor": "Paris Luxury Floor",
      "Dubai Royal Room": "Dubai Royal Room",
      "New York Modern Villa": "New York Modern Villa",
      "15,000": "15,000",
      "Projects you want to achieve": "Projects you want to achieve",
      "relaxing garden functional.": "relaxing garden functional.",
      London: "London",
      Paris: "Paris",
      Dubai: "Dubai",
      "New York": "New York",
      project1_short:
        "Cozy city room with balcony and garden view. Spacious royal suite with skyline panorama. Best choice for small families who want comfort and city vibes.",
      project2_short:
        "Luxury floor near main avenue with modern finishes. Elegant living with prime location and high investment potential.",
      project3_short:
        "Spacious royal suite with skyline panorama. Top-tier lifestyle with exclusive view.",
      project4_short:
        "Contemporary villa with private pool and terrace. Perfect for luxury living and family comfort.",
      9000: "9,000",
      200: "200",
      25000: "25,000",
      300: "300",
      40000: "40,000",
      400: "400",
      "²": "m²",
      "Capital Avenue (Al Qirawan)": "Capital Avenue (Al Qirawan)",
      "Building Area": "Building Area",
      "Land Area": "Land Area",
      "Register Interest": "Register Interest",
      "Riyadh - Al Qirawan": "Riyadh - Al Qirawan",
      "36,000": "36,000",
      "7,728": "7,728",
      "About Project": "About Project",
      Riyadh: "Riyadh",
      Office: "Office",
      "67 Units": "67 Units",
      "%48": "%48",
      "The project features an eight-floors office tower designed ...":
        "The project features an eight-floors office tower designed in the elegant Salmani architectural style, surrounded by green spaces...",
      "OUR BEST PROJECTS": "OUR BEST PROJECTS",
      "Property Investment Assisting": "Property Investment Assisting",
      "Projects House Lucrative.": "Projects House Lucrative.",
      "Modern Villa with Pool": "Modern Villa with Pool",
      "Contemporary Glass House": "Contemporary Glass House",
      "Minimalist Luxury Home": "Minimalist Luxury Home",
      "Blue Modern House": "Blue Modern House",
      "Sleek Glass House": "Sleek Glass House",
      "Oops! We couldn't find that page": "Oops! We couldn't find that page",
      "But don't worry, let's get you back on track! The page you're looking for doesn't exist or may have been moved.":
        "But don't worry, let's get you back on track! The page you're looking for doesn't exist or may have been moved.",
      "Go to Homepage": "Go to Homepage",
      "Go Back": "Go Back",
      "Popular Pages": "Popular Pages",
      About: "About",
      Contact: "Contact",
      Blog: "Blog",
      Help: "Help",
      "Still need help?": "Still need help?",
      "Contact Support": "Contact Support",
      "Related Products": "Related Products",
      "Modern Sofa": "Modern Sofa",
      "Luxury Chair": "Luxury Chair",
      "Wooden Table": "Wooden Table",
      "Garden Set": "Garden Set",
      "A comfortable modern sofa for your living room.":
        "A comfortable modern sofa for your living room.",
      "Elegant chair with high-quality materials.":
        "Elegant chair with high-quality materials.",
      "Durable wooden table perfect for dining rooms.":
        "Durable wooden table perfect for dining rooms.",
      "Outdoor garden furniture set for relaxing moments.":
        "Outdoor garden furniture set for relaxing moments.",

      // Counter section
      "counter.title": "Our Achievements",
      "counter.subtitle":
        "Some key facts and figures that reflect our journey of success and growth.",
      "counter.buildingRenovation": "Building Renovation",
      "counter.squareAreas": "Square Areas",
      "counter.teamSupport": "Team Support",
      "counter.awardsWon": "Awards Won",

      // CityHouse titles
      "cityhouse.house1": "London Home City House",
      "cityhouse.house2": "Apartment Complex City",
      "cityhouse.house3": "Zoomvila Home Room",
      "cityhouse.house4": "Australia Home City House",
      "cityhouse.house5": "Modern Villa",
      "cityhouse.house6": "Classic Family House",
      "cityhouse.house7": "Luxury Mansion",
      "cityhouse.house8": "Beachside Home",
      "cityhouse.sqUnit": "sq",
      "cityhouse.bed": "Bed",
      "cityhouse.label": "BUILDING CITY HOUSE",
      "cityhouse.heading": "Exhibition Large Open Space",
      "cityhouse.heading2": "With Less Distraction.",
      "cityhouse.previous": "Previous",
      "cityhouse.next": "Next",
      "cityhouse.view": "View",
      "cityhouse.room": "Room",

      "faq.label": "FREQUENTLY ASKED QUESTIONS",
      "faq.heading": "Clear answers to your real estate questions",
      "faq.description":
        "Learn more about choosing, selling, renting, and managing a property with guidance from the MSGA team.",
      "faq.cardTitle": "A home designed around you",
      "faq.cardItem1": "Bright, welcoming living spaces",
      "faq.cardItem2": "Thoughtful finishes that last",
      "faq.question1": "What should I consider when choosing a home?",
      "faq.answer1":
        "Consider your budget, preferred location, daily needs, and the property's condition. Our team can help you compare options and make an informed decision.",
      "faq.question2": "How can I sell or rent my property?",
      "faq.answer2":
        "We can assess your property, recommend a pricing strategy, prepare it for the market, and support you through inquiries, negotiations, and the required paperwork.",
      "faq.question3": "How is a property's value determined?",
      "faq.answer3":
        "We consider location, size, condition, recent comparable sales, and current market demand to provide a clear, evidence-based valuation.",
      "faq.question4": "What property management services are included?",
      "faq.answer4":
        "Depending on your needs, services can include tenant screening, rent collection, maintenance coordination, property inspections, and regular reporting.",
      "faq.question5": "Which real estate services does MSGA offer?",
      "faq.answer5":
        "MSGA supports clients with buying, selling, renting, property management, valuation, and ongoing guidance throughout the process.",
      "faq.propertyImageAlt": "Bright, modern residential interior",
      "faq.answerImageAlt": "Residential property exterior",
      footer: {
        about:
          "We provide complete solutions and services, delivering innovation and value to help our clients achieve their goals effectively.",
        servicesTitle: "Our Services",
        services: {
          Dynamic: "Dynamic",
          Contact: "Contact",
          FAQ: "FAQ",
          Fancy: "Fancy",
          Maps: "Maps",
          Service: "Service",
        },
        quickLinksTitle: "Quick Links",
        quickLinks: {
          "What We Do": "What We Do",
          "About Company": "About Company",
          "Team Member": "Team Member",
          "Our Gallery": "Our Gallery",
          "Watch Video": "Watch Video",
          "Latest News": "Latest News",
        },
        recentPostsTitle: "Recent Posts",
        post1Title: "A practical guide to preparing your home for sale",
        post2Title: "How to choose the right property investment",
        copyright: "© Copyright 2025 by MSGA. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        contact: "Contact Us",
        "No projects match your filters.": "No projects match your filters.",
        "Try adjusting your filters or explore all projects.":
          "Try adjusting your filters or explore all projects.",
        "Reset Filters": "Reset Filters",
      },
    },
  },
  ar: {
    translation: {
      "About Us": "من نحن",
      Home: "الرئيسية",
      "nav.home": "الرئيسية",
      "nav.about": "من نحن",
      "nav.apartments": "الشقق",
      "nav.projects": "المشاريع",
      "nav.page": "الصفحة",
      "nav.blog": "المدونة",
      "nav.contact": "اتصل بنا",
      "meta.title": "MSGA | عقارات",
      "meta.description":
        "اكتشف منازل مصممة بعناية وفرصاً عقارية مميزة مع MSGA.",
      "page.apartments.title": "الشقق",
      "page.apartments.description":
        "استكشف الشقق والفيلات المميزة المصممة للراحة والملاءمة والمعيشة الحضرية الحديثة.",
      "page.page.title": "الصفحة",
      "page.page.description":
        "هذه الصفحة بمثابة مركز مرن للمحتوى الإضافي الخاص بك في مشاريع العقارات.",
      "page.blog.title": "المدونة",
      "page.blog.description":
        "اقرأ الرؤى السوقية وأخبار العقارات والإرشادات من فريق MSGA.",
      "page.help.title": "المساعدة",
      "page.help.description":
        "هل تحتاج إلى دعم؟ تواصل مع فريقنا للحصول على إرشادات حول شراء أو بيع أو استثمار العقارات.",
      "header.openingHours": "ساعات العمل",
      "header.login": "تسجيل الدخول",
      "header.register": "إنشاء حساب",
      "header.help": "ساعدك",
      "headerTop.openingHoursLabel": "ساعات العمل:",
      "headerTop.openingHoursValue":
        "الإثنين - السبت 9:00 صباحًا حتى 6:00 مساءً",
      "headerTop.login": "تسجيل الدخول",
      "headerTop.register": "إنشاء حساب",
      "headerTop.help": "ساعدك",
      "header.contactUs": "تواصل معنا",
      "header.sendEmail": "إرسال بريد إلكتروني",
      "header.callAgent": "اتصل بالوكيل",
      "header.openingTime": "وقت العمل",
      "header.getNotification": "احصل على التنبيهات",
      "header.subscribeNow": "اشترك الآن",
      "header.changingLives": "نغيّر الحياة نحو الأفضل",
      "header.sidebarText":
        "في المناطق المتضررة من النزاعات والكوارث، يعد الوصول إلى الرعاية الصحية والدعم النفسي أمرًا بالغ الأهمية. نحن ندعم المبادرات التي تقدم الرعاية الطبية والاستشارات والدعم العاطفي للأطفال والعائلات.",
      "auth.welcomeBack": "مرحبًا بعودتك",
      "auth.signinSubtitle": "سجيل الدخول لإدارة حسابك واهتماماتك العقارية.",
      "auth.email": "البريد الإلكتروني",
      "auth.password": "كلمة المرور",
      "auth.signingIn": "جارٍ تسجيل الدخول...",
      "auth.login": "تسجيل الدخول",
      "auth.needAccount": "هل تحتاج إلى حساب؟",
      "auth.createOne": "أنشئ واحدًا",
      "auth.createAccount": "إنشاء حساب",
      "auth.registerSubtitle": "سجل لتخزين اهتماماتك العقارية وتلقي التحديثات.",
      "auth.fullName": "الاسم الكامل",
      "auth.creatingAccount": "جارٍ إنشاء الحساب...",
      "auth.register": "إنشاء الحساب",
      "auth.alreadyHaveAccount": "هل لديك حساب بالفعل؟",
      "auth.signIn": "تسجيل الدخول",
      "Switch Language": "English",
      "Our About Property": "عقاراتنا",
      "aboutSection.label": "عقاراتنا",
      "aboutSection.heading":
        "منزل مستقل أو تاون هاوس عادة ما يكون مملوكًا لشخص أو عائلة.",
      "aboutSection.description":
        "تصميم منزلي مخصص، وإدارة ودعم خدمات الأعمال العقارية مع حلول مبتكرة وتجربة فريدة.",
      "aboutSection.cta": "المزيد",
      "We Provide Thorough About Customer Service Home.":
        "نقدم خدمات متكاملة للعملاء في المنزل.",
      "About More →": "المزيد →",
      "Home tailored design paragraph":
        "تصميم المنزل المخصص، إدارة ودعم خدمات وكالة الأعمال، إلخ. بعض النصوص الوهمية لأغراض العرض. هذا النص يمثل وصفاً تفصيلياً للخدمات مع بعض الكلمات العربية لإكمال الترجمة.",
      "Brand Logo": "شعار الشركة",
      "Brand Logo Hover": "شعار الشركة عند المرور",

      // AboutProperty Features
      "PARKING SPACE": "مكان انتظار السيارات",
      "Secure parking for your vehicle with 24/7 surveillance, ensuring convenience and peace of mind.":
        "مكان آمن لوقوف السيارات مع مراقبة 24/7 لضمان راحتك وطمأنينتك.",
      "SWIMMING POOL": "حمام سباحة",
      "Relax in our modern pool with crystal-clear water, perfect for a refreshing swim or lounging under the sun.":
        "استرخِ في حمام السباحة الحديث بمياه صافية، مثالي للسباحة أو الاسترخاء تحت الشمس.",
      "FAST FREE WI-FI": "واي فاي سريع ومجاني",
      "Enjoy unlimited high-speed internet access across the property, ideal for work, streaming, and staying connected.":
        "استمتع باتصال إنترنت عالي السرعة وغير محدود في جميع أنحاء العقار، مثالي للعمل والمشاهدة والبقاء متصلاً.",
      "FOOD VEGETABLE": "وجبات صحية",
      "Fresh, organic, and healthy meals prepared daily with seasonal vegetables sourced from trusted farms.":
        "وجبات طازجة وعضوية وصحية تُحضَّر يوميًا بالخضروات الموسمية من مزارع موثوقة.",
      Property: "العقار",
      OUREXPERTAGENTS: "فريق الخبراء",
      "Marketing Teams Responsible Meet Promoting Apartment List.":
        "فرق التسويق المسؤولة عن الترويج لقائمة الشقق.",
      Founder: "المؤسس",
      "Louis Coolidge": "لويس كوليدج",
      "Our Best Projects": "أفضل المشاريع لدينا",
      "article.label": "أكبر مدونة لدينا",
      "article.heading": "أخبارنا والعقارات",
      "article.subtitle": "مقالات المدونة",
      "article.by": "بواسطة:",
      "article.comments": "التعليقات",
      "article.readMore": "اقرأ المزيد",
      "article.author": "الإدارة",
      "article.post1Title": "مدونة شقة صناعية حديثة",
      "article.post2Title": "مدونة عقارات بعض الوكالات",
      "article.post3Title": "الترويج لمدونة العقارات بشكل فعال",
      "Property Investment Assisting Projects House lucrative.":
        "استثمارات عقارية تساعد المشاريع المنزلية المربحة",
      "Interior Design City House": "تصميم داخلي لمنزل المدينة",
      "Lux Life Room Magazine": "غرفة حياة فاخرة",
      "Ecological House": "منزل بيئي",
      "Club & Wellness City Room": "غرفة النادي والعافية",
      "London Home City Room": "غرفة منزل لندن",
      "View Details": "عرض التفاصيل",
      "Sell Your City House Fast For Cash!":
        "بيع منزلك في المدينة بسرعة نقداً!",
      "Our process is extremely simple. Fill out our quick form & receive a free no-obligation cash offer!":
        "عملية البيع لدينا بسيطة جداً. املأ النموذج السريع واحصل على عرض نقدي مجاني بدون أي التزام!",
      "Let’s Talk Real Estate": "دعنا نتحدث عن العقارات",
      "Looking for your dream home, selling property, or need investment advice? Fill out the form below and our expert team will reach out to you.":
        "هل تبحث عن منزلك المثالي، أو ترغب في بيع عقار، أو تحتاج إلى نصائح استثمارية؟ املأ النموذج أدناه وسيتواصل معك فريقنا المتخصص.",
      "Full Name *": "الاسم الكامل *",
      "Phone Number *": "رقم الهاتف *",
      "Email Address *": "البريد الإلكتروني *",
      "Select Interest": "اختر اهتمامك",
      "Buy Property": "شراء عقار",
      "Sell Property": "بيع عقار",
      Rent: "إيجار",
      Investment: "استثمار",
      "Your Message *": "رسالتك *",
      "Send Request": "إرسال الطلب",
      "Trusted House Buyers in Your City | No Fees, No Obligations":
        "مشترو العقارات الموثوق بهم في مدينتك | بدون رسوم، بدون التزامات",
      "Sell Your": "بيع",
      "City House": "المنزل في المدينة",
      Fast: "سريع",
      For: "لـ",
      "Cash!": "نقداً!",
      "hero.subtitle": "مرحبًا بكم في MSGA!",
      "hero.slide1.titleStart": "منازل عصرية",
      "hero.slide1.titleAccent": "أفضل",
      "hero.slide1.titleEnd": "أماكن المدينة الآن.",
      "hero.slide1.text":
        "نقدم الأماكن الأكثر فاعلية وتصميماً عملياً للشركات وأصحاب المنازل.",
      "hero.slide1.stat1": "٩٠ شقة",
      "hero.slide1.stat2": "٢٥٠٠ متر مربع",
      "hero.slide1.location": "400 طريق لندن، منطقة المدينة، 896 شارع روبن",
      "hero.slide2.titleStart": "مكان مثالي",
      "hero.slide2.titleAccent": "لأعمالك",
      "hero.slide2.titleEnd": "ابدأ بسهولة.",
      "hero.slide2.text":
        "نقدم الأماكن الأكثر فاعلية وتصميماً عملياً للشركات وأصحاب المنازل.",
      "hero.slide2.stat1": "٧٠ شقة",
      "hero.slide2.stat2": "٢١٠٠ متر مربع",
      "hero.slide2.location": "123 شارع جرين، سبرينغفيلد بجوار منتزه النافورة",
      "hero.slide3.titleStart": "منازل متعددة",
      "hero.slide3.titleAccent": "أماكن",
      "hero.slide3.titleEnd": "خدمة منزلية مثالية.",
      "hero.slide3.text":
        "نقدم الأماكن الأكثر فاعلية وتصميماً عملياً للشركات وأصحاب المنازل.",
      "hero.slide3.stat1": "١٢٠ شقة",
      "hero.slide3.stat2": "٣٠٠٠ متر مربع",
      "hero.slide3.location": "890 شارع الرئيسي، وسط المدينة بجوار مول المدينة",
      "Our process is": "عملية البيع لدينا",
      "extremely simple": "سهلة للغاية",
      "Fill out our quick form & receive a": "املأ النموذج السريع واحصل على",
      "free no-obligation cash offer!": "عرض نقدي مجاني بدون التزامات!",
      "Let’s Talk": "تحدث معنا",
      "Real Estate": "العقارات",
      "Looking for your": "هل تبحث عن",
      "dream home": "منزل أحلامك",
      "selling property, or need": "بيع عقار، أو تحتاج إلى",
      "investment advice": "نصائح استثمارية",
      "Fill out the form below and our expert team will reach out to you.":
        "املأ النموذج أدناه وسيتواصل فريقنا المختص معك.",

      "social.connectTitleStart": "دعنا",
      "social.connectTitleEnd": "نتواصل",
      "social.connectSubtitle":
        "نحن نحب أن نسمع منك. تواصل معنا عبر قناتك المفضلة.",
      "social.email": "البريد الإلكتروني",
      "social.phone": "الهاتف",
      "social.whatsapp": "واتساب",
      "social.linkedin": "لينكدإن",
      "social.facebook": "فيسبوك",
      "social.instagram": "إنستغرام",
      "social.location": "الموقع",
      "social.locationText": "الإسماعيلية، مصر",
      "Trusted House Buyers in Your City":
        "مشترو المنازل الموثوق بهم في مدينتك",
      "No Fees": "بدون رسوم",
      "No Obligations": "بدون التزامات",
      Email: "البريد الإلكتروني",
      Phone: "الهاتف",
      WhatsApp: "واتساب",
      LinkedIn: "لينكدإن",
      Facebook: "فيسبوك",
      Instagram: "إنستغرام",
      Location: "الموقع",
      EmailAddress: "example@gmail.com",
      PhoneNumber: "+20 123 456 7890",
      WhatsAppNumber: "+20 123 456 7890",
      LinkedInProfile: "/في/اسم المستعمل",
      FacebookPage: "/صفحتك",
      InstagramProfile: "@حسابك التعريفي",
      LocationText: "الإسماعيلية، مصر",
      "Visit Our Office": "قم بزيارة مكتبنا",
      "You can find us at our headquarters below.":
        "يمكنك العثور علينا في مقرنا أدناه.",
      Projects: "المشاريع",
      "Projects you want to achieve\nrelaxing garden functional.":
        "المشاريع التي تريد تحقيقها\nحديقة مريحة ووظائف عملية.",
      "cityhouse.label": "بناء منزل المدينة",
      "cityhouse.heading": "معرض مساحة مفتوحة كبيرة",
      "cityhouse.heading2": "مع تشتيت أقل.",
      "cityhouse.previous": "السابق",
      "cityhouse.next": "التالي",
      "cityhouse.view": "عرض",
      "cityhouse.room": "غرفة",
      "cityhouse.sqUnit": "م²",
      "cityhouse.bed": "سرير",

      // CityHouse house titles
      "cityhouse.house1": "منزل لندن في المدينة",
      "cityhouse.house2": "مجمع شقق المدينة",
      "cityhouse.house3": "منزل زومفيلا",
      "cityhouse.house4": "منزل أستراليا في المدينة",
      "cityhouse.house5": "فيلا عصرية",
      "cityhouse.house6": "بيت العائلة الكلاسيكي",
      "cityhouse.house7": "قصر فاخر",
      "cityhouse.house8": "منزل على الشاطئ",

      // Counter section
      "counter.title": "إنجازاتنا",
      "counter.subtitle":
        "بعض الحقائق والأرقام الرئيسية التي تعكس رحلتنا نحو النجاح والنمو.",
      "counter.buildingRenovation": "تجديد المباني",
      "counter.squareAreas": "المساحات المربعة",
      "counter.teamSupport": "فريق الدعم",
      "counter.awardsWon": "الجوائز المكتسبة",
      "faq.label": "الأسئلة الشائعة",
      "faq.heading": "إجابات واضحة عن أسئلتك العقارية",
      "faq.description":
        "تعرّف على خيارات شراء العقارات وبيعها وتأجيرها وإدارتها بمساعدة فريق MSGA.",
      "faq.cardTitle": "مسكن مصمم لراحتك",
      "faq.cardItem1": "مساحات معيشة مشرقة ومرحبة",
      "faq.cardItem2": "تشطيبات عملية تدوم طويلاً",
      "faq.question1": "ما الأمور التي ينبغي مراعاتها عند اختيار منزل؟",
      "faq.answer1":
        "راعِ ميزانيتك والموقع الذي تفضله واحتياجاتك اليومية وحالة العقار. يساعدك فريقنا على مقارنة الخيارات واتخاذ قرار مناسب.",
      "faq.question2": "كيف يمكنني بيع عقاري أو تأجيره؟",
      "faq.answer2":
        "نقيّم العقار ونقترح استراتيجية تسعير مناسبة، ونساعدك على تجهيزه للسوق ومتابعة الاستفسارات والتفاوض واستكمال الإجراءات المطلوبة.",
      "faq.question3": "كيف تُحدَّد قيمة العقار؟",
      "faq.answer3":
        "نراعي الموقع والمساحة والحالة والمبيعات الحديثة لعقارات مشابهة والطلب الحالي في السوق لتقديم تقييم واضح يستند إلى بيانات.",
      "faq.question4": "ما الخدمات التي تشملها إدارة العقارات؟",
      "faq.answer4":
        "بحسب احتياجاتك، قد تشمل الخدمات اختيار المستأجرين، وتحصيل الإيجار، وتنسيق الصيانة، ومعاينة العقار، وتقديم تقارير دورية.",
      "faq.question5": "ما الخدمات العقارية التي تقدمها MSGA؟",
      "faq.answer5":
        "نساعد عملاءنا في شراء العقارات وبيعها وتأجيرها وإدارتها وتقييمها، ونقدم لهم الإرشاد في مختلف مراحل العملية.",
      "faq.propertyImageAlt": "تصميم داخلي سكني مشرق وعصري",
      "faq.answerImageAlt": "واجهة عقار سكني",
      "Search projects...": "ابحث عن المشاريع...",
      Details: "التفاصيل",
      Consultation: "استشارة",
      "All locations": "جميع المواقع",
      "All statuses": "جميع الحالات",
      Available: "متاح",
      "Under Construction": "تحت الإنشاء",
      Sold: "تم البيع",
      "All prices": "جميع الأسعار",
      "All areas": "جميع المساحات",
      "No projects match your filters.":
        "لا توجد مشاريع تطابق الفلاتر الخاصة بك.",
      Map: "خريطة",
      Video: "فيديو",
      "Open Map": "افتح الخريطة",
      "Watch Video": "شاهد الفيديو",
      "m²": "م²",
      "Paris Luxury Floor": "شقة فاخرة باريس",
      "Dubai Royal Room": "غرفة فاخرة دبي",
      "New York Modern Villa": "فيلا حديثة نيويورك",
      "Projects you want to achieve": "مشاريع تطمح لتحقيقها",
      "relaxing garden functional.": "حديقة مريحة وعملية.",

      London: "لندن",
      Paris: "باريس",
      Dubai: "دبي",
      "New York": "نيويورك",

      project1_short:
        "غرفة مدينة مريحة مع شرفة وإطلالة على الحديقة. جناح ملكي واسع مع إطلالة بانورامية على أفق المدينة. الخيار الأفضل للعائلات الصغيرة التي ترغب في الراحة وأجواء المدينة.",
      project2_short:
        "طابق فاخر بالقرب من الشارع الرئيسي بتشطيبات عصرية. معيشة أنيقة بموقع متميز وإمكانات استثمارية عالية.",
      project3_short:
        "جناح ملكي واسع بإطلالة بانورامية على أفق المدينة. أسلوب حياة من الدرجة الأولى مع إطلالة حصرية.",
      project4_short:
        "فيلا معاصرة مع مسبح خاص وتراس. مثالية للمعيشة الفاخرة وراحة الأسرة.",

      "15,000": "١٥٬٠٠٠",
      "Under 10,000": "أقل من ١٠٬٠٠٠",
      "10,000 - 25,000": "١٠٬٠٠٠ - ٢٥٬٠٠٠",
      "Over 25,000": "أكثر من ٢٥٬٠٠٠",
      "Under 100 m²": "أقل من ١٠٠ م²",
      "100 - 300 m²": "١٠٠ - ٣٠٠ م²",
      "Over 300 m²": "أكثر من ٣٠٠ م²",
      9000: "٩٬٠٠٠",
      25000: "٢٥٬٠٠٠",
      40000: "٤٠٬٠٠٠",
      "9,000": "٩٬٠٠٠",
      200: "٢٠٠",
      300: "٣٠٠",
      400: "٤٠٠",
      "²": "متر مربع",
      120: "١٢٠",
      "1,200": "١,٢٠٠",
      20: "٢٠",
      "2,000": "٢٬٠٠٠",
      30: "٣٠",
      15: "١٥",
      "1,500": "١٬٥٠٠",
      "40,000": "٤٠٬٠٠٠",
      "25,000": "٢٥٬٠٠٠",
      800: "٨٠٠",
      "Capital Avenue (Al Qirawan)": "كابيتال أفينيو (القيروان)",
      "Building Area": "مساحة البناء",
      "Land Area": "مساحة الأرض",
      "Register Interest": "سجل اهتمامك",
      "Riyadh - Al Qirawan": "الرياض - القيروان",
      "36,000": "٣٦٬٠٠٠",
      "7,728": "٧٬٧٢٨",
      "About Project": "عن المشروع",
      "Explore similar products carefully selected for you.":
        "اكتشف منتجات مشابهة تم اختيارها بعناية لك.",

      "The project features an eight-floors office tower designed in the elegant Salmani architectural style, surrounded by green spaces that cater to the evolving needs of businesses, offering modern office spaces and related amenities. Strategically located on King Salman Road in Al Qirawan, the development provides an ideal setting for companies seeking a prime business location.":
        "يتميز المشروع ببرج مكاتب من ثمانية طوابق، مصمم على الطراز المعماري السلماني الأنيق، وتحيط به مساحات خضراء تلبي احتياجات الشركات المتنامية، ويوفر مساحات مكتبية عصرية ومرافق متكاملة. يتميز المشروع بموقع استراتيجي على طريق الملك سلمان في حي القيروان، مما يوفر بيئة مثالية للشركات التي تبحث عن موقع أعمال متميز.",
      Riyadh: "الرياض",
      Office: "مكاتب",
      "67 Units": "٦٧ وحدة",
      "%48": "٪٤٨",
      "OUR BEST PROJECTS": "أفضل مشاريعنا",
      "Property Investment Assisting": "مساعدة في استثمار العقارات",
      "Projects House Lucrative.": "مشاريع عقارية مربحة.",
      "Modern Villa with Pool": "فيلا عصرية مع مسبح",
      "Contemporary Glass House": "منزل زجاجي معاصر",
      "Minimalist Luxury Home": "منزل فاخر بسيط",
      "Blue Modern House": "منزل عصري أزرق",
      "Sleek Glass House": "منزل زجاجي أنيق",
      "Building dreams, creating investments.":
        "نبني الأحلام ونصنع الاستثمارات.",
      "Register Your Interest": "سجل اهتمامك",
      "Interest description": "وصف الاهتمام",
      Name: "الاسم",
      "Phone Number": "رقم الهاتف",
      "Type of Interest": "نوع الاهتمام",
      "Select an option": "اختر خيارًا",
      Residential: "سكني",
      Commercial: "تجاري",
      "Send Your Request": "أرسل طلبك",
      "All rights reserved.": "جميع الحقوق محفوظة.",
      "Oops! We couldn't find that page":
        "عذراً! لم نستطع العثور على هذه الصفحة",
      "But don't worry, let's get you back on track! The page you're looking for doesn't exist or may have been moved.":
        "لا تقلق، سنساعدك للعودة إلى المسار الصحيح! الصفحة التي تبحث عنها غير موجودة أو قد تكون نُقلت.",
      "Go to Homepage": "الذهاب إلى الصفحة الرئيسية",
      "Go Back": "الرجوع للخلف",
      "Popular Pages": "الصفحات الشائعة",
      About: "من نحن",
      Contact: "اتصل بنا",
      Blog: "المدونة",
      Help: "المساعدة",
      "Still need help?": "هل ما زلت بحاجة للمساعدة؟",
      "Contact Support": "تواصل مع الدعم",
      "Related Products": "منتجات ذات صلة",
      "Modern Sofa": "أريكة عصرية",
      "Luxury Chair": "كرسي فاخر",
      "Wooden Table": "طاولة خشبية",
      "Garden Set": "مجموعة حديقة",
      "A comfortable modern sofa for your living room.":
        "أريكة عصرية مريحة لغرفة المعيشة الخاصة بك.",
      "Elegant chair with high-quality materials.":
        "كرسي أنيق مصنوع من مواد عالية الجودة.",
      "Durable wooden table perfect for dining rooms.":
        "طاولة خشبية متينة مثالية لغرف الطعام.",
      "Outdoor garden furniture set for relaxing moments.":
        "مجموعة أثاث حديقة خارجية للحظات استرخاء.",

      footer: {
        about:
          "نحن نقدم حلولاً وخدمات متكاملة، نوفر الابتكار والقيمة لمساعدة عملائنا على تحقيق أهدافهم بفعالية.",
        servicesTitle: "خدماتنا",
        services: {
          Dynamic: "ديناميك",
          Contact: "اتصل بنا",
          FAQ: "الأسئلة الشائعة",
          Fancy: "فانسي",
          Maps: "خرائط",
          Service: "خدمة",
        },
        quickLinksTitle: "روابط سريعة",
        quickLinks: {
          "What We Do": "ماذا نفعل",
          "About Company": "عن الشركة",
          "Team Member": "أعضاء الفريق",
          "Our Gallery": "معرضنا",
          "Watch Video": "شاهد الفيديو",
          "Latest News": "آخر الأخبار",
        },
        recentPostsTitle: "أحدث المقالات",
        post1Title: "دليل عملي لتجهيز منزلك للبيع",
        post2Title: "كيف تختار الاستثمار العقاري المناسب",
        copyright: "© جميع الحقوق محفوظة 2025 لدى MSGA.",
        privacyPolicy: "سياسة الخصوصية",
        contact: "تواصل معنا",
        "No projects match your filters.":
          "لا يوجد مشاريع مطابقة لخيارات البحث.",
        "Try adjusting your filters or explore all projects.":
          "حاول تعديل الفلاتر أو استعرض جميع المشاريع.",
        "Reset Filters": "إعادة ضبط الفلاتر",
      },
      "Related Products": "منتجات ذات صلة",
      "Explore similar products carefully selected for you.":
        "اكتشف منتجات مشابهة تم اختيارها بعناية لك.",
      Details: "التفاصيل",
      Consultation: "استشارة",
      Available: "متاح",
      Sold: "تم البيع",
      "m²": "م²",
      "Modern Sofa": "أريكة عصرية",
      "Luxury Chair": "كرسي فاخر",
      "Wooden Table": "طاولة خشبية",
      "Garden Set": "مجموعة حديقة",
      "A comfortable modern sofa for your living room.":
        "أريكة عصرية مريحة لغرفة المعيشة الخاصة بك.",
      "Elegant chair with high-quality materials.":
        "كرسي أنيق مصنوع من مواد عالية الجودة.",
      "Durable wooden table perfect for dining rooms.":
        "طاولة خشبية متينة مثالية لغرف الطعام.",
      "Outdoor garden furniture set for relaxing moments.":
        "مجموعة أثاث حديقة خارجية للحظات استرخاء.",
    },
  },
};

const applyDocumentDirection = (lang = i18n.language || "en") => {
  const normalizedLang = lang && lang.startsWith("ar") ? "ar" : "en";
  document.documentElement.setAttribute("lang", normalizedLang);
  document.documentElement.setAttribute(
    "dir",
    normalizedLang === "ar" ? "rtl" : "ltr",
  );
  document.body.dir = normalizedLang === "ar" ? "rtl" : "ltr";
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("language", normalizedLang);
  }
  const title = i18n.t("meta.title", { lng: normalizedLang });
  const description = i18n.t("meta.description", { lng: normalizedLang });
  document.title = title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[property="og:locale"]')
    ?.setAttribute("content", normalizedLang === "ar" ? "ar_SA" : "en_US");
  document
    .querySelector('meta[name="twitter:title"]')
    ?.setAttribute("content", title);
  document
    .querySelector('meta[name="twitter:description"]')
    ?.setAttribute("content", description);
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en",
  fallbackLng: "en",
  supportedLngs: ["en", "ar"],
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", applyDocumentDirection);
applyDocumentDirection(i18n.language);

export default i18n;
