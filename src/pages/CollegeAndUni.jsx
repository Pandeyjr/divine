import React from "react"; 
// Assuming aboutImage and aboutTeam imports are for other parts of the project, kept for completeness
// import aboutImage from "../assets/WhatsApp Image 2025-09-19 at 14.22.15_a6b13380 1.png";
// import aboutTeam from "../assets/image.png"; 

// --- START: Component Imports ---
import college1 from "../assets/yanago_international_business_college.png";
import college2 from "../assets/japanese_language_institute_MIRAI.png";
import college3 from "../assets/okazaki_japanese_language_school.png";
import college4 from "../assets/Tsuruishi_Gakuen_Sakura_Japanese_Language_Academy.png";
import college5 from "../assets/Aristo_foreign_language_school.png";
import college6 from "../assets/IPA_International_Education_Academy.png";
import facilityImg from "../assets/divinecampus_facilities.png"; 
import { BsPatchCheckFill } from "react-icons/bs"; 
// import VisionMissionSection from "./VisionMissionSection"; // Assuming this is a separate component
// --- END: Component Imports ---

// --- NEW: Import the CTA component ---
import JoinPartnerInstitutionsCTA from "./JoinPartnerInstitutionsCTA"; 
// --- END: Import the CTA component ---

// --- College Data ---
const colleges = [
  {
    name: "Yonago International Business College",
    location: "Yonago City, Tottori Prefecture, Japan",
    description:
      "Yonago International Business College is a reputed institution that focuses on business management, hospitality, and IT programs tailored for international students.",
    img: college1,
  },
  {
    name: "Japanese Language Institute MIRAI",
    location: "Kobe City, Hyogo Prefecture, Japan",
    description:
      "Located in the beautiful and vibrant city of Kobe, the Japanese Language Institute MIRAI offers comprehensive Japanese language training for all levels.",
    img: college2,
  },
  {
    name: "Okazaki Japanese Language School",
    location: "Okazaki City, Aichi Prefecture, Japan",
    description:
      "Okazaki Japanese Language School is dedicated to providing international students with complete academic and cultural guidance.",
    img: college3,
  },
  {
    name: "Tsuruishi Gakuen Sakura Japanese Language Academy",
    location: "Saitama Prefecture, Japan",
    description:
      "Sakura Japanese Language Academy guides students to explore Japanese culture, history, and society through immersive education.",
    img: college4,
  },
  {
    name: "Aristo Foreign Language School",
    location: "Tokyo, Japan",
    description:
      "Aristo Foreign Language School offers a modern and friendly environment where international students can learn Japanese effectively.",
    img: college5,
  },
  {
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
// --- End College Data ---


export default function CollegeUniversity() {
  const imageContainerHeight = "h-48"; 

  return (
    // Updated font to match the request, assuming @fontsource/oswald is configured
    <div className="bg-gray-50 pb-20 font-['Oswald']"> 
      
      {/* 1. Header Section */}
      <div className="relative bg-blue-900 text-white pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">College & University</h1>
          <p className="text-sm">Home / College & University</p>
        </div>
      </div>

      {/* 2. Title Section */}
      <div className="text-center py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900">
          College and University in Associated <span className="text-red-600">with us</span>
        </h2>
        <p className="mt-3 text-gray-600 text-base">
          Explore our affiliated academic partners and institutions dedicated to international education and success.
        </p>
      </div>
      
      {/* 3. College Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {colleges.map((college, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Image Wrapper: object-cover to match design */}
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
                <p className="text-sm text-gray-500 mb-2">{college.location}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{college.description}</p>
                <a 
                    href="#" 
                    className="text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors inline-flex items-center"
                >
                  Learn More 
                  <span className="ml-1 text-base">&rarr;</span>
                </a>
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
              Our partner institutions in Japan are dedicated to providing comfortable, safe, and enriching
              environments for international students. They ensure quality education, cultural integration, and
              career support.
            </p>
            
            {/* Dynamic List using BsPatchCheckFill */}
            <ul className="text-gray-700 space-y-4">
                {supportServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                        {/* Using BsPatchCheckFill */}
                        <BsPatchCheckFill 
                            className="text-red-600 flex-shrink-0 w-6 h-6 mr-3 mt-1" 
                        />
                        <span className="text-gray-900 font-medium text-lg leading-snug">{service}</span>
                    </li>
                ))}
            </ul>
            {/* The blue line divider below the points */}
            <div className="w-full h-1 bg-blue-600 mt-4 rounded"></div> 
          </div>
        </div>
      </div>
      
      {/* 5. CTA Banner Section (Before the Footer) */}
      <JoinPartnerInstitutionsCTA />

      {/* Footer Section is implied to follow here */}
    </div>
  );
}