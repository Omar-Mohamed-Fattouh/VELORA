import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Clock,
  Menu,
  X,
  Search,
  ShoppingCart,
  Grid,
} from "lucide-react";
import {} from "lucide-react";

import logo from "../assets/Logo.png";
import icon from "../assets/ico.ico";
export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME", end: true },
    { to: "/about", label: "ABOUT US", end: true },
    { to: "/projects", label: "PROJECTS", end: true },
    { to: "/investors", label: "INVESTORS", end: true },
    { to: "/article", label: "ARTICLE", end: true },
    { to: "/contact", label: "CONTACT", end: true },
  ];

  useEffect(() => {
    if (mobileOpen || sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileOpen, sidebarOpen]);

  return (
    <nav className="bg-white shadow-sm border-b relative z-[900]">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Left - Logo */}
        <NavLink to="/" className="flex items-center no-underline">
          <img
            src={logo}
            alt="MSGA Logo"
            className="w-14 h-14 object-contain"
          />
          <span className="ml-2 text-3xl font-bold text-gray-900">MSGA</span>
        </NavLink>

        {/* Center - Nav Links (only large screens) */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative group font-medium  tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`
              }
            >
              {label}
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full block" />
            </NavLink>
          ))}
        </div>

        {/* Right - Actions (only large screens) */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          {/* CONTACT US button */}
          <button className="bg-orange-500 text-white font-semibold px-3 py-2 hover:bg-orange-600 transition lg:text-sm">
            CONTACT US
          </button>

          {/* Floating Circle Button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className=" overflow-hidden absolute right-10 ml-3 w-15 h-15 rounded-full bg-indigo-950 flex items-center justify-center group"
          >
            <img src={icon} alt="icon" className="w-10 h-10 relative z-10" />

            {/* Ripple background */}
            <span className="absolute inset-0 rounded-full bg-gray-950 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
          </button>
        </div>

        {/* Mobile & iPad Hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile & iPad Menu */}
      <div
        className={`lg:hidden absolute left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-8">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `relative group text-xl font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-800 hover:text-orange-500"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}

          <button className="bg-orange-500 text-white font-semibold px-6 py-2 rounded hover:bg-orange-600 transition">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-[1000] transition-opacity duration-500 ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar Content */}
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={
            sidebarOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed top-0 right-0 h-full max-w-[340px] w-full bg-[#333333] shadow-2xl flex flex-col z-50"
        >
          {/* Close Button */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-gray-300 hover:text-orange-500"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Logo Row */}
          <div className="flex items-center border-b border-gray-700 py-6 px-6 space-x-3">
            <img
              src={logo}
              alt="MSGA Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold text-white tracking-wide">
              MSGA
            </h1>
          </div>

          {/* Content (spread with flex-grow) */}
          <div className="flex-1 flex flex-col justify-between p-6 space-y-6 overflow-y-auto">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Changing Lives For The Better
              </h3>
              <p className="text-sm text-gray-300">
                In regions affected by conflict and disaster, access to
                healthcare and psychological support is crucial. We support
                initiatives that offer medical care, counseling, and emotional
                support to children and families. For example, in war-torn areas
                like Gaza and Israel.
              </p>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="uppercase text-gray-400 text-xs">
                      Send Email
                    </p>
                    <a
                      href="mailto:info@company.com"
                      className="text-white hover:text-orange-500"
                    >
                      info@company.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="uppercase text-gray-400 text-xs">
                      Call Agent
                    </p>
                    <a
                      href="tel:+91123654900"
                      className="text-white hover:text-orange-500"
                    >
                      +91 123 654 900
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="uppercase text-gray-400 text-xs">
                      Opening Time
                    </p>
                    <p className="text-white">Hours: Mon–Fri: 8am – 7pm</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Get Notification
              </h3>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-600 bg-transparent px-3 py-2 text-sm rounded focus:outline-none text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white w-full px-4 py-2 text-sm rounded hover:bg-orange-600 flex items-center justify-center"
                >
                  Subscribe Now <span className="ml-2">➔</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
