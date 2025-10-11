import React from "react";
// import aboutUsHero from "../assets/about-us-hero.png"; // Optional hero image
import avishel_dhakal from "../assets/avishel_dhakal.png";

// Social icons
import { FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

// Import CTA (based on your project structure — it's inside `pages/`)
import JoinPartnerInstitutionsCTA from "./JoinPartnerInstitutionsCTA";

// --- Team Members Data ---
const teamMembers = [
  {
    name: "Avishek Dhakal",
    title: "Founder & CEO, Divine Abroad Studies",
    description: "Brand strategist and design visionary.",
    img: avishel_dhakal,
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    name: "Sagar Adhikari",
    title: "Web Developer",
    description:
      "Building engaging platforms that elevate brands and drive business success online.",
    img: avishel_dhakal,
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    name: "Naresh Raj Chauhan",
    title: "Web Developer",
    description:
      "Creative web developer crafting sleek, high-performing sites for impactful digital experiences.",
    img: avishel_dhakal,
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    name: "Bansika Thapa",
    title: "Graphics Designer",
    description:
      "Designing bold, strategic visuals that capture attention and communicate your brand's story.",
    img: avishel_dhakal,
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    name: "Suraj Dhakal",
    title: "Content Creator",
    description:
      "Creating engaging, impactful content that connects brands with audiences and drives growth.",
    img: avishel_dhakal,
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
  {
    name: "Santosh Khatri",
    title: "Design Internship",
    description:
      "Excited to learn and contribute to innovative design projects in a dynamic environment.",
    img: avishel_dhakal,
    social: { linkedin: "#", twitter: "#", website: "#" },
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gray-50 font-sans text-gray-900">

      {/* --- 1. Hero Section (optional) --- */}
      {/* Uncomment this section if you add a hero image */}
      {/*
      <div
        className="relative h-[400px] md:h-[450px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutUsHero})` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative z-10 text-center" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 font-['Oswald']">
            Our Team
          </h1>
          <p className="text-lg">Home / About Us</p>
        </div>
      </div>
      */}

      {/* --- 2. Meet the Brain Section --- */}
      <div className="container mx-auto px-4 md:px-6 py-16 text-center" data-aos="fade-up">
        <p className="text-red-600 font-bold mb-2">We're hiring!</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-['Oswald']">
          Meet the brain
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-8">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-blue-900 border border-blue-900 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-medium transition-colors">
            About us
          </button>
          <button className="bg-blue-900 text-white hover:bg-blue-800 px-8 py-3 rounded-full text-lg font-medium transition-colors">
            Open positions
          </button>
        </div>
      </div>

      {/* --- 3. Team Members Grid --- */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Team Member Image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-100">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Title */}
              <h3 className="text-xl font-bold text-blue-900 mb-1">
                {member.name}
              </h3>
              <p className="text-red-600 text-sm font-medium mb-3">
                {member.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {member.description}
              </p>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-3 text-gray-500">
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href={member.social.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition-colors"
                >
                  <FaGlobe size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- 4. CTA Banner --- */}
      <JoinPartnerInstitutionsCTA />
    </div>
  );
}
