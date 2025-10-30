import React from "react";
import ornamen from "../assets/ornamen.png"; 
// Import all your icons
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import icon7 from "../assets/icon7.png";
import icon8 from "../assets/icon8.png";

const VisionMissionSection = () => {
  return (
    <section
      className="relative w-full text-white py-20"
      style={{ backgroundColor: "#172983" }}
    >
      {/* ===== Background Grid ===== */}
      <div className="absolute inset-0 z-0">
        <img
          src={ornamen}
          alt="Background pattern"
          className="w-full h-full object-contain opacity-100"
        />
      </div>

      {/* ===== Content Wrapper ===== */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 z-10">
        {/* ===== Vision ===== */}
        <div>
          <h2 className="text-[#FF375E] text-sm font-semibold mb-2">Our Vision</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Dreams into <br /> Global Success Stories
          </h1>
          <p className="text-gray-300 mb-10 leading-relaxed">
            At Divine Abroad Studies Pvt. Ltd., we envision a future where every
            aspiring student from Nepal has access to quality education in Japan,
            empowering them to grow academically, culturally, and professionally.
            We aim to become a trusted bridge between Nepalese students and
            world-class Japanese institutions, creating opportunities that change
            lives and shape communities.
          </p>

          <div className="space-y-6">
            {[icon1, icon2, icon3, icon4].map((icon, idx) => {
              const titles = [
                "Student-Centric Guidance",
                "Building Strong Partnerships",
                "Empowering Global Citizens",
                "Promoting Cultural Exchange",
              ];
              const descriptions = [
                "Personalized counseling tailored to each student’s goals and ambitions.",
                "Connecting Nepalese talent with trusted Japanese institutions.",
                "Preparing students to become leaders and professionals with global impact.",
                "Equipping students with language skills and cultural awareness for a smooth transition to life in Japan.",
              ];
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <img src={icon} alt={`icon${idx + 1}`} className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{titles[idx]}</h3>
                    <p className="text-gray-300 text-sm">{descriptions[idx]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ===== Mission ===== */}
        <div>
          <h2 className="text-[#FF375E] text-sm font-semibold mb-2">Our Mission</h2>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Guiding Students, <br /> Shaping Global Futures
          </h1>
          <p className="text-gray-300 mb-10 leading-relaxed">
            At Divine Abroad Studies Pvt. Ltd., our mission is to empower Nepalese
            students by providing them with the right guidance, resources, and
            opportunities to pursue higher education in Japan. We are committed to
            helping students achieve their academic dreams while fostering cultural
            exchange and building pathways for global success.
          </p>

          <div className="space-y-6">
            {[icon5, icon6, icon7, icon8].map((icon, idx) => {
              const titles = [
                "Empowering Students Through Education",
                "Sustainable Impact",
                "Excellence and Integrity",
                "Building Global Connections",
              ];
              const descriptions = [
                "Guiding students with the skills and confidence to thrive globally.",
                "Creating positive, lasting change through cultural exchange and education.",
                "Upholding transparency, ethics, and quality at every step.",
                "Connecting Nepalese students with world-class Japanese institutions.",
              ];
              return (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <img src={icon} alt={`icon${idx + 5}`} className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{titles[idx]}</h3>
                    <p className="text-gray-300 text-sm">{descriptions[idx]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
