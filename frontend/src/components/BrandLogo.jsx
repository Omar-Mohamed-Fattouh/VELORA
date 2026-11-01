import logo from "../assets/Logo-transparent.png";
import { SITE_NAME } from "../data/site.js";

export default function BrandLogo({
  className = "w-14 h-14",
  inverted = false,
}) {
  return (
    <img
      src={logo}
      alt={SITE_NAME}
      width={56}
      height={56}
      className={`${className} object-contain ${inverted ? "brightness-0 invert" : ""}`}
    />
  );
}
