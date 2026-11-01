import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useReducedMotion from "../hooks/useReducedMotion";

export default function CircularText({
  text,
  className = "",
}) {
  const { t } = useTranslation();
  const badge = text || t("aboutSection.badgeText");
  const reduceMotion = useReducedMotion();
  const chars = Array.from(badge);

  return (
    <motion.div
      dir="ltr"
      className={`pointer-events-none absolute inset-[8px] ${className}`}
      animate={reduceMotion ? undefined : { rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="absolute inset-0 flex justify-center"
          style={{ transform: `rotate(${(360 / chars.length) * index}deg)` }}
        >
          <span className="pt-0.5 text-[9px] font-bold leading-none tracking-[0.08em] text-white sm:text-[10px] lg:text-[11px]">
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </motion.div>
  );
}
