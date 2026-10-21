import { motion } from "framer-motion";
import Logo from "../assets/Logo.png";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      {/* Logo with soft pulse */}
      <motion.img
        src={Logo}
        alt="Logo"
        className="w-20 h-20 mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: [1, 1.05, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />

      {/* Clean spinner */}
      <motion.div
        className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />

      {/* Subtle loading text */}
      <motion.p
        className="mt-4 text-gray-600 text-sm font-medium"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
