import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import divinelogo from "../assets/divinelogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const handleLanguageChange = () => {
    setLanguage((prev) =>
      prev === "EN" ? "JP" : prev === "JP" ? "NP" : "EN"
    );
  };

  return (
    <nav className="w-full shadow-sm bg-white font-[DM_Sans]">
      {/* Top Bar */}
      <div className="bg-[#1a237e] text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Social Icons */}
        <div className="flex items-center gap-4 mb-2 md:mb-0">
          <a
            href="#"
            className="transition duration-300 text-white hover:text-[#1877F2]" // Facebook Blue
          >
            <FaFacebookF className="hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="transition duration-300 text-white hover:text-[#1DA1F2]" // Twitter Blue
          >
            <FaTwitter className="hover:scale-110 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="transition duration-300 text-white hover:text-[#E4405F]" // Instagram Pink
          >
            <FaInstagram className="hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 text-center">
          <div className="flex items-center gap-1">
            <FaPhoneAlt /> <span>9845592545 / 56665</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <FaEnvelope /> <span>divineabroadstudies@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <FaMapMarkerAlt /> <span>Bharatpur, Chitwan</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock /> <span>Sunday–Friday 9:00am–10pm</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-16 py-4 bg-white">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={divinelogo}
            alt="Divine Logo"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-800">
          {["Home", "About Us", "Services", "College & University", "Blogs", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="relative group transition duration-300"
              >
                <span className="hover:text-[#1a237e] transition duration-300">
                  {item}
                </span>
                {/* Underline Animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1a237e] transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}

          {/* Questions Button */}
          <button className="bg-[#1a237e] text-white px-4 py-2 rounded-md hover:bg-[#0f1a5a] transition duration-300">
            Questions
          </button>

          {/* Language Flag Button */}
          <button
            onClick={handleLanguageChange}
            className="flex items-center justify-center border border-gray-300 rounded-full w-9 h-9 focus:outline-none hover:scale-110 transition-transform duration-300"
          >
            {language === "EN" && (
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ width: "1.6em", height: "1.6em" }}
                title="English"
              />
            )}
            {language === "JP" && (
              <ReactCountryFlag
                countryCode="JP"
                svg
                style={{ width: "1.6em", height: "1.6em" }}
                title="Japanese"
              />
            )}
            {language === "NP" && (
              <ReactCountryFlag
                countryCode="NP"
                svg
                style={{ width: "1.6em", height: "1.6em" }}
                title="Nepali"
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-3 text-gray-800 font-medium border-t">
          {["Home", "About Us", "Services", "College & University", "Blogs", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="block relative group transition duration-300"
              >
                <span className="hover:text-[#1a237e] transition duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#1a237e] transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}

          <button className="w-full bg-[#1a237e] text-white py-2 rounded-md mt-2 hover:bg-[#0f1a5a] transition duration-300">
            Questions
          </button>

          {/* Mobile Language Flag Button */}
          <button
            onClick={handleLanguageChange}
            className="flex items-center justify-center border border-gray-300 rounded-full w-10 h-10 mt-2 hover:scale-110 transition-transform duration-300"
          >
            {language === "EN" && (
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{ width: "1.6em", height: "1.6em" }}
                title="English"
              />
            )}
            {language === "JP" && (
              <ReactCountryFlag
                countryCode="JP"
                svg
                style={{ width: "1.6em", height: "1.6em" }}
                title="Japanese"
              />
            )}
            {language === "NP" && (
              <ReactCountryFlag
                countryCode="NP"
                svg
                style={{ width: "1.6em", height: "1.6em" }}
                title="Nepali"
              />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
