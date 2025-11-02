import React from "react";
import "@fontsource/oswald";
import ceoImage from "../assets/Ceo.png";
import japanImage from "../assets/japan.png";
import { Link } from "react-router-dom";

const AboutCeo = () => {
  return (
    <div className="w-full bg-white text-gray-800">

      {/* ✅ HERO SECTION — stays at the top */}
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
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Message from the CEO</h1>
          <div className="flex items-center justify-center text-sm md:text-base gap-2">
            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#F9B234] transition-colors duration-300"
            >
              <span>Home</span>
            </Link>
            <span className="text-white/70">›</span>
            <span className="text-[#F9B234] font-medium">CEO Message</span>
          </div>
        </div>
      </div>

      {/* ✅ MAIN CONTENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16">

        {/* ======= HEADING ======= */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          style={{ fontFamily: "Oswald" }}
        >
          <span className="text-[#172983]">Message from the </span>
          <span className="text-[#FF0000]">CEO</span>
        </h1>

        {/* ======= CONTENT SECTION ======= */}
        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
          
          {/* LEFT IMAGE */}
          <div className="md:w-[40%] flex flex-col items-center">
            <img
              src={ceoImage}
              alt="CEO"
              className="w-full md:w-[380px] rounded-[25px] shadow-lg object-cover"
            />
            <div className="mt-4 text-center">
              <h3 className="text-[16px] font-semibold text-gray-800">
                Avishek Dhakal
              </h3>
              <p className="text-sm text-[#3856B2]">
                Founder & CEO <br /> Divine Abroad Studies
              </p>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex-1 text-justify text-[#444] leading-relaxed space-y-5">
            <p>Dear Students, Parents, and Well-Wishers,</p>

            <p>
              It gives me immense pleasure to welcome you to Divine Abroad
              Studies, a trusted educational consultancy committed to guiding
              Nepali students toward quality education and a successful future
              in Japan.
            </p>

            <p>
              From the very beginning, our vision has been clear — to create a
              platform where students can receive honest guidance, transparent
              counseling, and personalized support as they take one of the most
              important steps in their academic journey. We understand that
              studying abroad is not just about gaining a degree; it’s about
              exploring new perspectives, embracing a new culture, and preparing
              oneself to compete in a global environment.
            </p>

            <p>
              At Divine Abroad Studies, we are proud to have built a strong
              reputation for our ethical counseling practices, reliable
              documentation process, and genuine partnerships with prestigious
              Japanese language schools, colleges, and universities. Our team
              works tirelessly to ensure that every student receives the best
              possible advice — from language preparation to visa processing,
              accommodation arrangement, and pre-departure orientation.
            </p>

            <p>
              Over the years, we have witnessed countless success stories —
              students who started their journeys with us and are now thriving
              in Japan, both academically and professionally. These stories
              motivate us to keep improving, to stay updated with educational
              policies and opportunities, and to continue being a trusted bridge
              between Nepal and Japan.
            </p>

            <p>
              As the CEO, I personally believe that true success comes from
              sincerity, hard work, and a deep sense of responsibility.
              Therefore, at Divine Abroad Studies, we do not simply send
              students abroad; we mentor, empower, and accompany them throughout
              their journey until they are confidently settled.
            </p>

            <p>
              Our commitment is to remain your lifelong educational partner —
              guiding you not just toward Japan, but toward a brighter, more
              meaningful global future.
            </p>

            <p>
              Thank you for trusting Divine Abroad Studies as part of your
              academic dream. Together, let’s shape futures beyond borders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCeo;
