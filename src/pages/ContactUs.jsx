import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import japanImage from "../assets/japan.png";

const ContactUs = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* ✅ Hero Section */}
      <div
        className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${japanImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue translucent mask */}
        <div className="absolute inset-0 bg-[#3856B2]/85"></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Contact Us</h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center text-sm md:text-base gap-2">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#F9B234] transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-white/70">›</span>
            <span className="text-[#F9B234] font-medium">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ✅ Get in Touch Heading */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-3">
          Get In Touch With Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have questions about studying
          in Japan, our services, or partnerships — our team is here to help.
        </p>
      </section>

      {/* ✅ Contact Info & Form Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          {/* LEFT SIDE — Consultancy Information */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
              Divine Abroad Consultancy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We help students achieve their dream of studying in Japan with
              personalized guidance, visa assistance, and cultural preparation.
            </p>

            <div className="space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#3856B2]" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#3856B2]" />
                <span>+977-9800000000</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#3856B2]" />
                <span>info@divineconsultancy.com</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-5 pt-4">
              <a
                href="#"
                className="text-gray-500 text-xl transition-colors duration-300 hover:text-[#25D366]"
              >
                <FaWhatsapp />
              </a>
              <a
                href="#"
                className="text-gray-500 text-xl transition-colors duration-300 hover:text-[#E4405F]"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-500 text-xl transition-colors duration-300 hover:text-[#1877F2]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-500 text-xl transition-colors duration-300 hover:text-[#010101]"
              >
                <FaTiktok />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — Contact Form */}
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3856B2] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3856B2] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3856B2] outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#3856B2] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#3856B2] text-white py-3 rounded-lg font-semibold hover:bg-[#2c4391] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ✅ Google Map Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 pb-20">
        <h3 className="text-2xl font-bold text-[#1a237e] text-center mb-6">
          Find Us on Map
        </h3>
        <div className="w-full h-[350px] overflow-hidden rounded-2xl shadow-md border border-gray-200">
          <iframe
            title="Divine Abroad Consultancy Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.142437248733!2d85.31232987453246!3d27.711019025041973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908e0b3ab75%3A0xa2f9e8dfac7c3d75!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2snp!4v1694599959485!5m2!1sen!2snp"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* ✅ FAQ Section */}
<section className="py-24 px-6 md:px-16 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a237e] mb-12">
      Frequently Asked Questions
    </h2>

    <div className="divide-y divide-gray-200">
      {[
        {
          question: "How can I contact Divine Abroad Consultancy?",
          answer:
            "You can reach us via phone at +977-9800000000, email at info@divineconsultancy.com, or visit our office in Kathmandu, Nepal. You can also message us directly through our website contact form.",
        },
        {
          question: "What are your office hours?",
          answer:
            "Our office is open Sunday to Friday, from 10:00 AM to 5:00 PM. We’re closed on Saturdays and all national holidays.",
        },
        {
          question: "Do I need an appointment before visiting your office?",
          answer:
            "While walk-ins are welcome, we recommend scheduling an appointment in advance so our counselors can dedicate proper time to your queries.",
        },
        {
          question: "How soon can I expect a reply after submitting the contact form?",
          answer:
            "We usually respond within 24 hours during working days. For urgent matters, please contact us directly via phone or WhatsApp.",
        },
        {
          question: "Can I reach out to you on social media?",
          answer:
            "Yes, absolutely! You can connect with us on Facebook, Instagram, TikTok, and WhatsApp for quick updates, inquiries, or support.",
        },
        {
          question: "Where is your office located?",
          answer:
            "Our office is located in Kathmandu, Nepal — easily accessible from major public transportation routes. You can find our exact location in the map section above.",
        },
      ].map((faq, idx) => (
        <details
          key={idx}
          className="group py-5 cursor-pointer transition-all"
        >
          <summary className="flex justify-between items-center font-semibold text-lg text-[#1a237e] hover:text-[#0f1a5a] focus:outline-none">
            {faq.question}
            <span className="transition-transform duration-300 group-open:rotate-45 text-gray-500 text-2xl leading-none">
              +
            </span>
          </summary>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

export default ContactUs;
