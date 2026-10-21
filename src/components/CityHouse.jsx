// import { useRef } from "react";
import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroshapeBu from "../assets/heroshapeBu.png";

const houses = [
  {
    id: 1,
    title: "London Home City House",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
  {
    id: 2,
    title: "Apartment Complex City",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
  {
    id: 3,
    title: "Zoomvila Home Room",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
  {
    id: 4,
    title: "Australia Home City House",
    img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
  {
    id: 5,
    title: "Modern Villa",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
  {
    id: 6,
    title: "Classic Family House",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
  {
    id: 7,
    title: "Luxury Mansion",
    img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
  {
    id: 8,
    title: "Beachside Home",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&h=700&q=80",
    rooms: 25,
    size: "2505q",
    beds: "Bed 2x",
  },
];

export default function CityHouse() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="w-full py-12 px-6 bg-white" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6 ${isRTL ? "md:flex-row-reverse" : ""}`}>
          <div className={isRTL ? "text-right" : "text-left"}>
            <div className={`flex items-center text-orange-400 text-sm font-semibold tracking-wider ${isRTL ? "flex-row-reverse" : ""}`}>
              <MoveRight className={`w-6 h-6 ${isRTL ? "ml-2 rotate-180" : "mr-2"}`} />
              <span>{t("cityhouse.label")}</span>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold mt-2 text-gray-900 leading-tight">
              {t("cityhouse.heading")} <br /> {t("cityhouse.heading2")}
            </h1>
          </div>
          <div className={`flex gap-3 self-end md:self-auto ${isRTL ? "flex-row-reverse" : ""}`}>
            <button
              className="project-button-prev p-3 bg-white rounded-full shadow hover:shadow-md border border-zinc-200"
              aria-label={t("cityhouse.previous")}
            >
              <ChevronLeft />
            </button>
            <button
              className="project-button-next p-3 bg-white rounded-full shadow hover:shadow-md border border-zinc-200"
              aria-label={t("cityhouse.next")}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          loop
          dir={isRTL ? "rtl" : "ltr"}
          rtl={isRTL}
          speed={900}
          autoplay={{ delay: 5000 }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            760: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="w-full max-sm:h-auto"
          pagination={false}
          navigation={{
            prevEl: ".project-button-prev",
            nextEl: ".project-button-next",
          }}
        >
          {houses.map((house) => (
            <SwiperSlide key={house.id}>
              <div className="relative h-[320px] md:h-[350px] overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={house.img}
                  alt={house.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/70 -translate-x-full opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-90" />

                <div className={`absolute bottom-0 left-0 right-0 h-36 bg-orange-500 [clip-path:polygon(50%_0,-60%_100%,170%_100%)] translate-y-full opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-95 z-10 ${isRTL ? "scale-x-[-1]" : ""}`}>
                  <img
                    src={heroshapeBu}
                    alt="Wireframe Background"
                    className="absolute left-5 -top-10 w-[100%] opacity-100 pointer-events-none"
                  />
                </div>

                <button className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} w-14 h-14 rounded-full bg-orange-500 text-white font-bold shadow-lg flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 text-sm`}>
                  {t("cityhouse.view")}
                </button>

                <span className={`absolute bottom-24 ${isRTL ? "right-5" : "left-5"} bg-orange-500 group-hover:opacity-[90%] text-white px-2 py-1 text-xs sm:text-sm border-2 border-b-0 group-hover:rounded-t-md transition-all duration-900 z-0`}>
                  {String(house.id).padStart(2, "0")}
                </span>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 text-white bg-gray-900/70 group-hover:bg-inherit transition-all duration-700">
                  <h3 className="mt-1 font-semibold text-base sm:text-lg">
                    {house.title}
                  </h3>
                  <div className="flex gap-0 text-xs sm:text-sm mt-1 sm:mt-2 opacity-90 divide-x-2 divide-gray-200">
                    <span className="px-2">
                      {house.rooms} {t("cityhouse.room")}
                    </span>
                    <span className="px-2">{house.size}</span>
                    <span className="px-2">{house.beds}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// // import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /* --- INLINE ICONS --- */
// const ArrowLeft = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
//     <path d="m12 19-7-7 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="M19 12H5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const ArrowRight = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
//     <path d="M5 12h14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//     <path d="m12 5 7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const HomeIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
//     <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//     <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
//   </svg>
// );
// const SquareFootIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
//     <rect width="18" height="18" x="3" y="3" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none"/>
//     <path d="M9 9h6v6H9z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
//   </svg>
// );
// const BedIcon = (props) => (
//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
//     <path d="M2 4v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4" stroke="currentColor" strokeWidth="1.4" fill="none"/>
//     <path d="M2 10h20" stroke="currentColor" strokeWidth="1.4" fill="none"/>
//   </svg>
// );

// /* --- MOCK DATA --- (replace imageUrl values with your assets if you want) --- */
// const properties = [
//   { id: 1, title: 'London Home City House', details: { rooms: 25, area: 2505, beds: 2 }, imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80' },
//   { id: 2, title: 'Apartment Complex City', details: { rooms: 25, area: 2505, beds: 2 }, imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1600&q=80' },
//   { id: 3, title: 'Zoomvila Home Room', details: { rooms: 25, area: 2505, beds: 2 }, imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80' },
//   { id: 4, title: 'Australia Home City House', details: { rooms: 25, area: 2505, beds: 2 }, imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80' }
// ];

// /* --- tiny presentational row for the bottom detail icons --- */
// const DetailItem = ({ icon, text }) => (
//   <div className="flex items-center gap-2 text-xs md:text-sm">
//     <span className="w-4 h-4">{icon}</span>
//     <span className="opacity-90">{text}</span>
//   </div>
// );

// /* --- Property Card --- */
// function PropertyCard({ property, index, hoveredIndex, setHoveredIndex }) {
//   const hovered = hoveredIndex === index;

//   return (
//     <motion.div
//       layout
//       onMouseEnter={() => setHoveredIndex(index)}
//       onFocus={() => setHoveredIndex(index)}
//       onMouseLeave={() => setHoveredIndex(null)}
//       onBlur={() => setHoveredIndex(null)}
//       tabIndex={0}
//       role="button"
//       aria-pressed={hovered}
//       aria-label={`Open card ${property.title}`}
//       initial={{ opacity: 0.95 }}
//       animate={{
//         flex: hovered ? 4 : 1,
//         transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
//       }}
//       className="relative h-full min-h-[320px] rounded-2xl overflow-hidden flex-shrink-0 cursor-pointer"
//       style={{
//         backgroundImage: `url(${property.imageUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center"
//       }}
//     >
//       {/* base dark overlay */}
//       <div className={`absolute inset-0 transition-opacity duration-500 ${hovered ? "bg-black/20" : "bg-black/40"}`}></div>

//       {/* ID badge top-left */}
//       <div className="absolute left-4 top-4 z-20">
//         <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm ${hovered ? "bg-orange-200 text-white" : "bg-orange-500 text-white"}`}>
//           {String(index + 1).padStart(2, "0")}
//         </div>
//       </div>

//       {/* VIEW circle button top-right (visible on hover) */}
//       <AnimatePresence>
//         {hovered && (
//           <motion.button
//             initial={{ scale: 0.85, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.85, opacity: 0 }}
//             transition={{ duration: 0.35 }}
//             className="absolute right-6 top-6 z-30 w-12 h-12 rounded-full flex items-center justify-center font-semibold bg-orange-500 text-white shadow-lg"
//             aria-label="View property"
//           >
//             VIEW
//           </motion.button>
//         )}
//       </AnimatePresence>

//       {/* content area at bottom (title + small details) */}
//       <div className="relative z-20 h-full flex flex-col justify-end p-6 text-white">
//         {/* Title row */}
//         <motion.div
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.4, delay: 0.05 }}
//         >
//           <div className="flex items-end gap-4">
//             {/* small number pill duplicated inside bottom content when hovered for style like your screenshot */}
//             <div className={`hidden md:flex items-center justify-center w-12 h-12 rounded-xl text-lg font-bold ${hovered ? "bg-white/20" : "bg-white/10"}`}>
//               {String(index + 1).padStart(2, "0")}
//             </div>

//             <div className="max-w-[70%] md:max-w-[60%]">
//               <h3 className={`text-lg md:text-2xl font-bold leading-tight ${hovered ? "text-white" : "text-white"}`}>{property.title}</h3>
//             </div>
//           </div>
//         </motion.div>

//         {/* bottom detail row - hidden when hovered because full panel replaces it */}
//         <AnimatePresence>
//           {!hovered && (
//             <motion.div
//               initial={{ opacity: 0, y: 6 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -6 }}
//               transition={{ duration: 0.3 }}
//               className="mt-4 flex flex-col gap-3"
//             >
//               <div className="bg-black/50 p-3 rounded-md flex items-center justify-between">
//                 <div className="flex gap-6 items-center">
//                   <DetailItem icon={<HomeIcon className="w-4 h-4" />} text={`${property.details.rooms} Room`} />
//                   <DetailItem icon={<SquareFootIcon className="w-4 h-4" />} text={`${property.details.area} Sq`} />
//                   <DetailItem icon={<BedIcon className="w-4 h-4" />} text={`Bed ${property.details.beds}x`} />
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Hover-expanded panel (orange trapezoid + details) */}
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
//               className="w-full relative mt-6"
//             >
//               {/* orange trapezoid shape via clip-path (sits under the text) */}
//               <div
//                 className="absolute left-0 right-0 bottom-0 top-0 pointer-events-none"
//                 style={{
//                   clipPath: "polygon(0 60%, 100% 40%, 100% 100%, 0% 100%)",
//                   background: "rgba(215,141,66,0.95)"
//                 }}
//               />

//               {/* content above the trapezoid */}
//               <div className="relative p-6 text-white z-30">
//                 <div className="flex justify-between items-start gap-4">
//                   <div className="max-w-[60%]">
//                     <h3 className="text-2xl md:text-3xl font-bold">{property.title}</h3>
//                     <div className="mt-3 flex gap-6 items-center">
//                       <DetailItem icon={<HomeIcon className="w-4 h-4" />} text={`${property.details.rooms} Room`} />
//                       <DetailItem icon={<SquareFootIcon className="w-4 h-4" />} text={`${property.details.area} Sq`} />
//                       <DetailItem icon={<BedIcon className="w-4 h-4" />} text={`Bed ${property.details.beds}x`} />
//                     </div>
//                   </div>

//                   <div className="flex flex-col items-end gap-4">
//                     <button className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center">◦</button>
//                     <button className="bg-white text-orange-600 px-5 py-3 font-semibold rounded-md shadow">About</button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }

// /* --- MAIN SHOWCASE --- */
// export default function PropertyShowcase() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextProperty = () => setCurrentIndex((p) => (p + 1) % properties.length);
//   const prevProperty = () => setCurrentIndex((p) => (p - 1 + properties.length) % properties.length);

//   const cardsToShow = 4;
//   const visible = [];
//   for (let i = 0; i < cardsToShow; i++) {
//     visible.push(properties[(currentIndex + i) % properties.length]);
//   }

//   return (
//     <div className="bg-white py-12">
//       <div className="container mx-auto px-6 lg:px-12">
//         {/* header */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
//           <div>
//             <p className="uppercase text-sm text-orange-600 font-semibold flex items-center gap-3">
//               <span className="inline-block w-6 h-6 rounded bg-orange-50" /> BUILDINGCITYHOUSE
//             </p>
//             <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">Exhibition Large open space <br/> with minimal distractions.</h2>
//           </div>

//           <div className="flex gap-3">
//             <button onClick={prevProperty} aria-label="previous" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
//               <ArrowLeft className="w-6 h-6 text-gray-600" />
//             </button>
//             <button onClick={nextProperty} aria-label="next" className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
//               <ArrowRight className="w-6 h-6 text-gray-600" />
//             </button>
//           </div>
//         </div>

//         {/* cards row */}
//         <div
//           className="flex gap-4 mt-8 h-[46vh] min-h-[380px] sm:h-[48vh] lg:h-[44vh] overflow-hidden"
//           onMouseLeave={() => setHoveredIndex(null)}
//         >
//           <AnimatePresence mode="popLayout">
//             {visible.map((prop, idx) => (
//               <PropertyCard
//                 key={prop.id}
//                 property={prop}
//                 index={idx}
//                 hoveredIndex={hoveredIndex}
//                 setHoveredIndex={setHoveredIndex}
//               />
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* mobile hint: horizontal scroll alternative */}
//         <p className="mt-6 text-sm text-gray-500">Tip: use arrow controls to cycle. On mobile the row becomes scrollable.</p>
//       </div>
//     </div>
//   );
// }
//
