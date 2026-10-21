import { Facebook, Twitter, Linkedin } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button";
import headerTop from "../assets/headerTop.png";

export function HeaderTop() {
  const { t } = useTranslation();

  return (
    <header className="hidden xl:flex items-center relative h-20">
      {/* Left image */}
      <img src={headerTop} alt="Header Top" className="h-24 relative z-10" />

      {/* Black topbar with only left angled cut */}
      <div className="flex-1 bg-gray-800 text-white relative z-0 h-14 bottom-5 flex items-center">
        {/* Left angled cut (white triangle) - bigger */}
        <div className="absolute top-0 left-0 w-[90px] h-full bg-white clip-left" />

        <div className="container mx-auto flex items-center justify-between w-full px-6">
          {/* Left side: Opening hours */}
          <span className="text-lg relative z-10">
            <span className="text-orange-400 font-semibold">
              {t("headerTop.openingHoursLabel")}
            </span>{" "}
            {t("headerTop.openingHoursValue")}
          </span>

          {/* Right side: Buttons + Socials */}
          <div className="text-lg flex items-center gap-4 divide-x divide-gray-500 relative z-10">
            {/* Buttons */}
            <div className="flex items-center divide-x divide-gray-500">
              <Button className="px-3 cursor-pointer hover:text-orange-400">
                {t("headerTop.login")}
              </Button>
              <Button className="px-3 cursor-pointer hover:text-orange-400">
                {t("headerTop.register")}
              </Button>
              <Button className="px-3 cursor-pointer hover:text-orange-400">
                {t("headerTop.help")}
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center divide-x divide-gray-500">
              <Facebook className="w-10 h-10 cursor-pointer hover:text-orange-400 px-2" />
              <Twitter className="w-10 h-10 cursor-pointer hover:text-orange-400 px-2" />
              <Linkedin className="w-10 h-10 cursor-pointer hover:text-orange-400 px-2" />
              <FaGoogle className="w-10 h-10 cursor-pointer hover:text-orange-400 px-2" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
