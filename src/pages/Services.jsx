import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaUniversity,
  FaPassport,
  FaLanguage,
  FaHome,
  FaUserGraduate,
  FaComments,
  FaPlane,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import japanImage from "../assets/japan.png";

// ✅ Local images for destinations
import tokyoImage from "../assets/tokyo.jpg";
import kyotoImage from "../assets/kyoto.jpg";
import osakaImage from "../assets/osaka.jpg";
import fukokaImage from "../assets/fukoka.jpg";
import sapporoImage from "../assets/sapporo.jpg";
import hiroshimaImage from "../assets/hiroshima.jpg";

const services = [
  {
    id: 1,
    title: "University & Program Selection",
    desc: "Guiding you to the best-fit universities & programs in Japan, whether you want engineering, business, arts, or sciences.",
    icon: <FaUniversity className="text-4xl" />,
  },
  {
    id: 2,
    title: "Visa & Application Assistance",
    desc: "Help with documentation, application guidance, interview prep, and deadlines.",
    icon: <FaPassport className="text-4xl" />,
  },
  {
    id: 3,
    title: "Language & Cultural Preparation",
    desc: "Japanese language learning support and cultural orientation sessions to ease your transition.",
    icon: <FaLanguage className="text-4xl" />,
  },
  {
    id: 4,
    title: "Accommodation & Settling-In Support",
    desc: "Finding housing, banking, local network, part-time work guidance etc.",
    icon: <FaHome className="text-4xl" />,
  },
  {
    id: 5,
    title: "Ongoing Student Support",
    desc: "Regular check-ins, academic referrals, help with part-time work, counseling.",
    icon: <FaUserGraduate className="text-4xl" />,
  },
  {
    id: 6,
    title: "Free Counselling",
    desc: "Personalized sessions to help you make informed study abroad decisions.",
    icon: <FaComments className="text-4xl" />,
  },
];

const programs = [
  {
    id: 1,
    title: "Beginner (JLPT N5)",
    desc: "Basic Japanese: hiragana/katakana, ~100 Kanji, basic grammar & conversation (self-introduction, daily life)",
    duration: "Duration : 8-10 weeks",
  },
  {
    id: 2,
    title: "Elementary (JLPT N4)",
    desc: "More grammar, ~300 Kanji, expand vocabulary, basic reading / listening comprehension",
    duration: "Duration : 10-12 weeks",
  },
  {
    id: 3,
    title: "Intermediate (JLPT N3)",
    desc: "Complex grammar, ~650 Kanji, longer listening/reading passages, everyday conversations",
    duration: "Duration : 12-14 weeks",
  },
  {
    id: 4,
    title: "Pre-Advanced (JLPT N2)",
    desc: "Advanced grammar, ~1000+ Kanji, more nuanced comprehension, writing skills, speaking fluency",
    duration: "Duration : 14-16 weeks",
  },
  {
    id: 5,
    title: "Advanced (JLPT N1)",
    desc: "Master level grammar, all Kanji, high-speed listening, reading complex texts, writing essays",
    duration: "Duration : 14-16 weeks",
  },
  {
    id: 6,
    title: "JLPT Preparation & Practice",
    desc: "Focused mock exams, past papers, test strategy, timed listening & reading practice",
    duration: "Duration : 8-10 weeks",
  },
];

const destinations = [
  {
    id: 1,
    city: "Tokyo",
    image: tokyoImage,
    fact: "Japan’s capital — the perfect blend of innovation, tradition, and student life.",
  },
  {
    id: 2,
    city: "Kyoto",
    image: kyotoImage,
    fact: "Cultural heart of Japan — home to ancient temples and authentic traditions.",
  },
  {
    id: 3,
    city: "Osaka",
    image: osakaImage,
    fact: "Known for street food, warm locals, and vibrant nightlife.",
  },
  {
    id: 4,
    city: "Fukuoka",
    image: fukokaImage,
    fact: "A coastal city famous for ramen, startups, and friendly locals.",
  },
  {
    id: 5,
    city: "Sapporo",
    image: sapporoImage,
    fact: "Cool northern city famous for snow, beer, and relaxed living.",
  },
  {
    id: 6,
    city: "Hiroshima",
    image: hiroshimaImage,
    fact: "A city of peace, culture, and remembrance with modern energy.",
  },
];

const Services = () => {
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
        <div className="absolute inset-0 bg-[#3856B2]/85"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Services</h1>
          <div className="flex items-center justify-center text-sm md:text-base gap-2">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#F9B234] transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-white/70">›</span>
            <span className="text-[#F9B234] font-medium">Services</span>
          </div>
        </div>
      </div>

      {/* ✅ Our Services Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12">
          We have clubbed your wishes to make your journey to Japan easier.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl shadow-md transition-all duration-500 cursor-pointer bg-white text-[#1a237e] hover:bg-[#1a237e] hover:text-white hover:scale-[1.03]"
            >
              <div className="flex items-center justify-center mb-6 w-16 h-16 rounded-full mx-auto bg-[#E8EBF9] text-[#1a237e] transition-all duration-500 group-hover:bg-white group-hover:text-[#1a237e]">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 group-hover:text-white/90 transition-all duration-500">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Language Programs */}
<section className="max-w-7xl mx-auto px-6 md:px-10 py-16 text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-2">
    Our Japanese Language Programs
  </h2>
  <p className="text-gray-600 mb-12">
    From JLPT N5 to N1 – Achieve fluency with expert training.
  </p>

  <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
    {programs.map((prog) => (
      <div
        key={prog.id}
        className="group p-8 rounded-2xl bg-white text-[#1a237e] shadow-md transition-all duration-500 hover:bg-[#1a237e] hover:text-white hover:scale-[1.03]"
      >
        <h3 className="text-lg font-semibold mb-3">{prog.title}</h3>
        <p className="text-sm leading-relaxed mb-6 text-gray-600 group-hover:text-white/90 transition-all duration-500">
          {prog.desc}
        </p>
        <button className="px-4 py-2 bg-[#1a237e] text-white rounded-md text-xs font-medium transition-all duration-300 group-hover:bg-[#F9B234] group-hover:text-[#1a237e]">
          {prog.duration}
        </button>
      </div>
    ))}
  </div>
</section>

{/* ✅ Study Process Section */}
<section className="relative  py-20 overflow-hidden">
  <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e] text-center mb-12">
    Study Process – Your Journey to Japan
  </h2>

  <div className="relative max-w-6xl mx-auto flex justify-between items-center gap-6 px-4 md:px-8">
    {/* Steps (All in One Line, Smaller Size) */}
    {[
      "Free Counselling",
      "University Selection",
      "Visa Application",
      "Pre-Departure",
      "Arrival in Japan",
      "Student Support",
    ].map((step, index) => (
      <div
        key={index}
        className="relative z-10 flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-4 text-center w-32 h-32 hover:scale-105 transition-all duration-300"
      >
        <div className="w-8 h-8 rounded-full bg-[#F9B234] flex items-center justify-center mb-2 text-white text-sm font-bold">
          {index + 1}
        </div>
        <h3 className="text-[#1a237e] font-semibold text-xs md:text-sm leading-snug">
          {step}
        </h3>
      </div>
    ))}

    {/* ✈️ Flying Plane */}
    <FaPlane className="absolute text-[#3856B2] text-xl md:text-2xl flying-plane" />
  </div>

  <style>{`
    /* ✈️ Plane Animation */
    @keyframes flyAcrossSection {
      0% {
        transform: translate(-100px, 100px) rotate(20deg);
        opacity: 0;
      }
      10% { opacity: 1; }
      50% {
        transform: translate(50vw, -40px) rotate(-10deg);
        opacity: 1;
      }
      90% { opacity: 1; }
      100% {
        transform: translate(100vw, -120px) rotate(-25deg);
        opacity: 0;
      }
    }

    .flying-plane {
      animation: flyAcrossSection 9s linear infinite;
      position: absolute;
      bottom: 0;
      left: 0;
      filter: drop-shadow(0 0 5px rgba(56, 86, 178, 0.6)) blur(0.5px);
    }
  `}</style>
</section>



      {/* ✅ Join Section */}
      <section className="relative flex justify-center items-center py-16 bg-white overflow-hidden">
        <div className="relative bg-[#3856B2] text-center rounded-2xl shadow-lg px-8 md:px-20 py-12 w-[90%] md:w-[85%] max-w-7xl z-10">
          <div className="border border-[#6B86D8] rounded-2xl p-10 md:p-12">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-wide">
              JOIN 1,500+ STUDENTS WHO TRUSTED US TO
            </h2>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              STUDY IN <span className="text-[#F55A5A]">JAPAN</span>
            </h3>
            <p className="text-white/90 text-sm md:text-base max-w-3xl mx-auto mb-8 leading-relaxed">
              From first consultation to arrival, we make your transition to Japan smooth and stress-free. 
              Start building your future with Divine Abroad Studies today.
            </p>
            <button className="border border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-[#3856B2] transition-all duration-300">
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
