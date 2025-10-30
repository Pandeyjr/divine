import React from "react";
import aboutImage from "../assets/WhatsApp Image 2025-09-19 at 14.22.15_a6b13380 1.png";
import "@fontsource/oswald";
import aboutTeam from "../assets/image.png";
import group33 from "../assets/group33.png"; // ✅ Add your image import here
import { BsPatchCheckFill } from "react-icons/bs";
import VisionMissionSection from "../components/VisionMissionSection";
import { useParams, Link } from "react-router-dom";
import japanImage from "../assets/japan.png";
const AboutSection = () => {
  return (
    <section className="w-full bg-white text-gray-800">
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
              <div className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <span className="text-white/70">›</span>
            <span className="text-[#F9B234] font-medium">Services</span>
          </div>
        </div>
      </div>

      {/* ======= MAIN ABOUT TITLE ======= */}
      <div className="max-w-4xl mx-auto text-center px-4 pt-16">
        <h1
          className="text-[40px] font-bold mb-1"
          style={{ fontFamily: "Oswald", color: "#172983" }}
        >
          About Divine Abroad Studies Pvt. Ltd.
        </h1>
        <p className="text-gray-600 text-[15px] max-w-3xl mx-auto">
          Divine Abroad Studies Pvt. Ltd. is proud to offer a one stop solution
          for students looking to study at a Japanese university.
        </p>
      </div>

      {/* ======= IMAGE & CONTENT SECTION ======= */}
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col md:flex-row md:items-start gap-32">
        {/* Left Image */}
        <div className="md:w-[350px] flex-shrink-0 mx-auto md:mx-0">
          <img
            src={aboutImage}
            alt="About Divine Abroad Studies"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div className="flex-1 space-y-6 text-gray-700">
          <p>
            At Divine Abroad Studies Pvt. Ltd., we are dedicated to transforming
            the dreams of aspiring students into reality by providing expert
            guidance and seamless support for those wishing to study in Japan.
            Established with a strong commitment to excellence and integrity, we
            have grown to become a trusted name among students and families
            across Nepal who seek high-quality education opportunities abroad.
          </p>

          <p>
            Located at Kamalnagar Chowk, Narayangadh, Chitwan, Divine Abroad
            Studies serves as a one-stop educational consultancy, offering
            comprehensive services from career counseling to visa assistance.
            With years of experience and a passionate team of professionals, we
            ensure that every student receives personalized guidance tailored to
            their academic goals, financial needs, and future career
            aspirations.
          </p>

          <p>
            Studying in Japan opens the door to a world of opportunities — from
            world-class education and innovative technology to rich cultural
            experiences and exciting career pathways. At Divine Abroad Studies,
            we specialize exclusively in Japanese education programs, helping
            students secure admissions in top-ranked language schools, colleges,
            and universities. Our deep knowledge of Japanese language schools
            and higher education institutions allows us to recommend the most
            suitable programs for each individual.
          </p>
        </div>
      </div>

      {/* ======= OUR VALUES SECTION ======= */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Oswald", color: "#172983" }}
          >
            OUR VALUES
          </h2>
          <p className="text-gray-500">
            Empowering Dreams, Building Global Futures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src={aboutTeam}
              alt="Our Values"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2
              className="font-manrope font-bold mb-1"
              style={{ color: "#FF375E", fontSize: "16px" }}
            >
              Our Values
            </h2>
            <h3
              className="font-manrope font-semibold text-gray-800 mb-8"
              style={{ fontSize: "50px", lineHeight: "1.1" }}
            >
              <span className="block">Empowering Dreams</span>
              <span className="block text-gray-800">
                Building Global Futures
              </span>
            </h3>
            <p className="text-gray-600 mb-8">
              At Divine Abroad Studies, we don’t just send students abroad — we
              shape futures. Guided by trust, integrity, and passion, we are
              committed to helping students achieve their academic dreams while
              embracing the cultural and educational excellence of Japan.
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm font-bold text-gray-700">
              <div className="flex items-center gap-2">
                <BsPatchCheckFill
                  className="w-5 h-5"
                  style={{ color: "#FF375E" }}
                />
                Student-Centered Guidance
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill
                  className="w-5 h-5"
                  style={{ color: "#FF375E" }}
                />
                Growth & Opportunity
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill
                  className="w-5 h-5"
                  style={{ color: "#FF375E" }}
                />
                Quality Education Pathways
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill
                  className="w-5 h-5"
                  style={{ color: "#FF375E" }}
                />
                Excellence in Service
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill
                  className="w-5 h-5"
                  style={{ color: "#FF375E" }}
                />
                Integrity & Transparency
              </div>
              <div className="flex items-center gap-2">
                <BsPatchCheckFill
                  className="w-5 h-5"
                  style={{ color: "#FF375E" }}
                />
                Cultural Connection & Care
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= VISION & MISSION SECTION ======= */}
<div className="pb-20"> 

<VisionMissionSection/>
</div>
      {/* ======= EXCELLENCE SECTION (GROUP 33) ======= */}
      <div className="max-w-7xl mx-auto px-4 pb-20 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12"
          style={{ fontFamily: 'Oswald', color: '#172983' }}
        >
          Excellence in Consulting & Management
        </h2>

        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
          <img
            src={group33}
            alt="Excellence Background"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col md:flex-row items-center justify-around text-white text-center p-8 md:p-12">
            <div>
              <h3 className="text-4xl font-bold">1500+</h3>
              <p className="text-sm mt-1">Successful Visas Approved</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-sm mt-1">Partner Universities</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">10+</h3>
              <p className="text-sm mt-1">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">400+</h3>
              <p className="text-sm mt-1">Scholarships Secured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
