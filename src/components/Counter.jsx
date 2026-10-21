// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faDrawPolygon,
  faHeadset,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  { id: 1, icon: faBuilding, value: "20M", label: "Building Renovation" },
  { id: 2, icon: faDrawPolygon, value: "250", label: "Square Areas" },
  { id: 3, icon: faHeadset, value: "260+", label: "Team Support" },
  { id: 4, icon: faTrophy, value: "25M", label: "Awards Won" },
];

export default function FunFacts() {
  return (
    <section className="container mx-auto py-14 px-6">
      {/* Title + Subtitle */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Our Achievements
        </h2>
        <p className="text-gray-600 container mx-auto">
          Some key facts and figures that reflect our journey of success and
          growth.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div
            key={stat.id}
            className="w-full p-3 bg-[#F6F7F8] hover:bg-gray-800 rounded-2xl transition-all duration-700"
          >
            <motion.div
              // initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-[#F6F7F8] hover:bg-gray-800 rounded-xl overflow-hidden transition-all duration-700 p-6"
            >
              {/* Corner triangle */}
              <div className="absolute top-0 left-0 w-[57px] h-[57px] bg-orange-500 [clip-path:polygon(100%_0,0_0,0_100%)] z-0 transition-all duration-500 ease-in-out"></div>

              {/* Expanding rectangle */}
              <div className="absolute inset-0 bg-orange-500 [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-1000 ease-in-out z-0 rounded"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-2">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-500 text-white mb-4 transition-all duration-700 group-hover:bg-white group-hover:text-orange-500">
                  <FontAwesomeIcon icon={stat.icon} size="2x" />
                </div>
                <h3 className="text-3xl font-bold text-black group-hover:text-white">
                  {stat.value}
                </h3>
                <p className="text-gray-600 group-hover:text-white">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
