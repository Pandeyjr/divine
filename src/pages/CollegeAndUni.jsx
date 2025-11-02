import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import college1 from "../assets/yanago_international_business_college.png";
import college2 from "../assets/japanese_language_institute_MIRAI.png";
import college3 from "../assets/okazaki_japanese_language_school.png";
import college4 from "../assets/Tsuruishi_Gakuen_Sakura_Japanese_Language_Academy.png";
import college5 from "../assets/Aristo_foreign_language_school.png";
import college6 from "../assets/IPA_International_Education_Academy.png";
import facilityImg from "../assets/divinecampus_facilities.png";
import { BsPatchCheckFill } from "react-icons/bs";
import JoinPartnerInstitutionsCTA from "./JoinPartnerInstitutionsCTA";
import japanImage from "../assets/japan.png";

// --- College Data ---
const colleges = [
  {
    id: 1,
    name: "Yonago International Business College",
    location: "Yonago City, Tottori Prefecture, Japan",
    description:
      "Yonago International Business College is a reputed institution that focuses on business management, hospitality, and IT programs tailored for international students.",
    img: college1,
  },
  {
    id: 2,
    name: "Japanese Language Institute MIRAI",
    location: "Kobe City, Hyogo Prefecture, Japan",
    description:
      "Located in the beautiful and vibrant city of Kobe, the Japanese Language Institute MIRAI offers comprehensive Japanese language training for all levels.",
    img: college2,
  },
  {
    id: 3,
    name: "Okazaki Japanese Language School",
    location: "Okazaki City, Aichi Prefecture, Japan",
    description:
      "Okazaki Japanese Language School is dedicated to providing international students with complete academic and cultural guidance.",
    img: college3,
  },
  {
    id: 4,
    name: "Tsuruishi Gakuen Sakura Japanese Language Academy",
    location: "Saitama Prefecture, Japan",
    description:
      "Sakura Japanese Language Academy guides students to explore Japanese culture, history, and society through immersive education.",
    img: college4,
  },
  {
    id: 5,
    name: "Aristo Foreign Language School",
    location: "Tokyo, Japan",
    description:
      "Aristo Foreign Language School offers a modern and friendly environment where international students can learn Japanese effectively.",
    img: college5,
  },
  {
    id: 6,
    name: "IPA International Education Academy",
    location: "Tokyo, Japan",
    description:
      "IPA International Education Academy provides an Academic Preparation Course designed for students aspiring to pursue university or graduate school education in Japan.",
    img: college6,
  },
];

const supportServices = [
  "Trusted and recognized schools across Japan",
  "Experienced instructors & student-centered learning",
  "Support for visa processing, accommodation, and orientation",
  "Academic & career counseling for higher studies",
  "Strong track record of Nepali students succeeding in Japan",
];

// --- Main Component ---
export default function CollegeUniversity() {
  const imageContainerHeight = "h-48";

  return (
    <div className="bg-gray-50 pb-20 font-['Oswald']">
      {/* ✅ Hero Section */}
      <div
        className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${japanImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#3856B2]/85"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            College & University
          </h1>

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
            <span className="text-[#F9B234] font-medium">
              College & University
            </span>
          </div>
        </div>
      </div>

      {/* 2. Title Section */}
      <div className="text-center py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900">
          College and University in Associated{" "}
          <span className="text-red-600">with us</span>
        </h2>
        <p className="mt-3 text-gray-600 text-base">
          Explore our affiliated academic partners and institutions dedicated
          to international education and success.
        </p>
      </div>

      {/* 3. College Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {colleges.map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Wrapper */}
              <div className={`w-full ${imageContainerHeight}`}>
                <img
                  src={college.img}
                  alt={college.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {college.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {college.location}
                </p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {college.description}
                </p>

                {/* ✅ Updated Learn More Link */}
                <Link
                  to={`/college/${college.id}`}
                  className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Learn More
                  <span className="ml-1 text-base">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Facilities Section */}
      <div className="container mx-auto mt-24 px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white p-8 rounded-lg shadow-lg">
          {/* Image Column */}
          <div className="w-full lg:w-1/2">
            <img
              src={facilityImg}
              alt="Campus Facility"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>

          {/* Text/Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Campus Facilities and Student Support{" "}
              <span className="text-red-600">Services</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-base">
              Our partner institutions in Japan are dedicated to providing
              comfortable, safe, and enriching environments for international
              students. They ensure quality education, cultural integration, and
              career support.
            </p>

            {/* Dynamic List using BsPatchCheckFill */}
            <ul className="text-gray-700 space-y-4">
              {supportServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <BsPatchCheckFill className="text-red-600 flex-shrink-0 w-6 h-6 mr-3 mt-1" />
                  <span className="text-gray-900 font-medium text-lg leading-snug">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
            <div className="w-full h-1 bg-blue-600 mt-4 rounded"></div>
          </div>
        </div>
      </div>

      {/* 5. CTA Banner Section */}
      <JoinPartnerInstitutionsCTA />
    </div>
  );
}
