import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import divinelogo from "../assets/divinesecondlogo.png"; // your logo path
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#3856B2] text-white pt-10">
      {/* Top Location Links */}
      <div className="border-b border-white/30 pb-4 flex flex-wrap justify-center gap-3 md:gap-8 text-sm md:text-base font-medium tracking-wide">
        <span>JAPAN</span>
        <span>|</span>
        <span>KATHMANDU</span>
        <span>|</span>
        <span>CHITWAN</span>
        <span>|</span>
        <span>ITAHARI</span>
        <span>|</span>
        <span>KAWASOTI</span>
        <span>|</span>
        <span>KHAIRENI</span>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* Head Office */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Head Office</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>9845592545 / 5665</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>divineabroadstudies@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>Bharatpur, Chitwan</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>Sunday–Friday: 9:00am–10pm</span>
            </li>
          </ul>
        </div>

        {/* Japan Office */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Japan Office</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>+81 8043071334</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>dhakalavishek98@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>Aichi, Nagoya</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F9B234] shrink-0" />
              <span>Sunday–Friday: 9:00am–10pm</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
  <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
  <ul className="space-y-2 text-sm text-white/90">
    <li>
      <Link
        to="/introduction"
        className="hover:text-[#F9B234] transition-colors duration-300"
      >
        About Us
      </Link>
    </li>
    <li>
      <Link
        to="/services"
        className="hover:text-[#F9B234] transition-colors duration-300"
      >
        Services
      </Link>
    </li>
    <li>
      <Link
        to="/blogs"
        className="hover:text-[#F9B234] transition-colors duration-300"
      >
        Stories
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="hover:text-[#F9B234] transition-colors duration-300"
      >
        Contact Us
      </Link>
    </li>
    <li>
      <Link
        to="/contact"
        className="hover:text-[#F9B234] transition-colors duration-300"
      >
        Sitemap
      </Link>
    </li>
  </ul>
</div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li className="hover:text-[#F9B234] transition">Privacy Policy</li>
            <li className="hover:text-[#F9B234] transition">Terms & Conditions</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Join Our Newsletter</h3>
          <div className="flex items-center bg-white/10 border border-white/30 rounded-full overflow-hidden focus-within:ring-2 focus-within:ring-[#F9B234] transition">
            <div className="flex items-center px-3">
              <Mail className="w-4 h-4 text-white/80" />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm flex-1 px-2 py-2 outline-none placeholder-white/70 text-white"
            />
            <button className="bg-white text-[#3856B2] font-medium px-4 py-2 rounded-full hover:bg-[#F9B234] hover:text-white transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-6 flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-4 text-xs text-white/80">
        {/* Left side: Logo + Address */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left mb-4 md:mb-0">
          <img
            src={divinelogo}
            alt="Divine Logo"
            className="w-32 md:w-36 brightness-110 contrast-110 saturate-125"
          />
          <p className="leading-relaxed">
            Bharatpur-3, Kamalnagar, Chowk, Chitwan
            <br />
            Tel.: +977 56-596134, 9855031134, 9855014183
          </p>
        </div>

        {/* Right side: Copyright */}
        <div className="text-center md:text-right leading-relaxed">
          <p>© Copyright by Divine Educational Consultancy. All rights reserved.</p>
          <p>
            Developed by{" "}
            <span className="text-[#F9B234] font-semibold">KREATECH HUB</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
