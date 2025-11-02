import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import japanhero from "../assets/japanhero.png";
import japanimage from "../assets/japanimage.png";
import nepalistudent from "../assets/nepalistudent.png";
import rulesforstudent from "../assets/rulesforstudent.png";
import stepbystepguide from "../assets/stepbystepguide.png";
import affordableuni from "../assets/affordableuni.png";
import journey from "../assets/journey.png";
import howjapanhelp from "../assets/howjapanhelp.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaUniversity,
  FaPassport,
  FaLanguage,
  FaHome,
  FaHandsHelping,
  FaComments,
  FaQuoteLeft, FaQuoteRight, FaStar,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Home = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    visas: 0,
    universities: 0,
    years: 0,
    scholarships: 0,
  });

  const sectionRef = useRef(null);

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    const duration = 2000;
    const startTime = performance.now();
    const easeOut = (t) => 1 - Math.pow(1 - t, 3);
    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = easeOut(progress);
      setCounts({
        visas: Math.floor(eased * 1500),
        universities: Math.floor(eased * 50),
        years: Math.floor(eased * 10),
        scholarships: Math.floor(eased * 400),
      });
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [hasAnimated]);

  const services = [
    {
      icon: <FaUniversity className="text-5xl" />,
      title: "University & Program Selection",
      description:
        "Guiding you to the best-fit universities & programs in Japan, whether you want engineering, business, arts, or sciences.",
    },
    {
      icon: <FaPassport className="text-5xl" />,
      title: "Visa & Application Assistance",
      description:
        "Help with documentation, application guidance, interview prep, and deadlines.",
    },
    {
      icon: <FaLanguage className="text-5xl" />,
      title: "Language & Cultural Preparation",
      description:
        "Japanese language learning support and cultural orientation sessions to ease your transition.",
    },
    {
      icon: <FaHome className="text-5xl" />,
      title: "Accommodation & Settling-In Support",
      description:
        "Finding housing, banking, local network, part-time work guidance, etc.",
    },
    {
      icon: <FaHandsHelping className="text-5xl" />,
      title: "Ongoing Student Support",
      description:
        "Regular check-ins, academic referrals, help with part-time work, and counseling.",
    },
    {
      icon: <FaComments className="text-5xl" />,
      title: "Free Counselling",
      description:
        "Get expert guidance to plan your education journey in Japan with confidence.",
    },
  ];

  const articles = [
    {
      image: nepalistudent,
      tag: "News",
      title: "Nepali Students Secure 50+ MEXT Scholarships in 2025",
      description:
        "Japan continues to open doors for Nepali students with increasing scholarship opportunities.",
      author: "Sushmitha Shrestha",
      date: "22 Nov 2023",
    },
    {
      image: rulesforstudent,
      tag: "Learn",
      title: "Japan Tightens Visa Documentation Rules for International Students",
      description:
        "The Japanese government has introduced stricter documentation requirements to ensure genuine study visa applications.",
      author: "Anil Sharma",
      date: "16 Nov 2023",
    },
    {
      image: stepbystepguide,
      tag: "Tech",
      tag2: "Inspiration",
      title: "Step-by-Step Guide to Japanese Student Visa Process",
      description:
        "Build software for your team that works on mobile without creating a mountain of extra work for yourself.",
      author: "Pooja Acharya",
      date: "15 Nov 2023",
    },
    {
      image: affordableuni,
      tag: "Tools",
      title: "Top 10 Affordable Universities in Japan for Nepali Students",
      description:
        "We’ve compiled a list of top universities offering world-class education without breaking the bank.",
      author: "Wren Noble",
      date: "10 Nov 2023",
    },
    {
      image: journey,
      tag: "Learn",
      tag2: "News",
      title: "From Kathmandu to Tokyo: Ramesh’s Journey to His Dream University",
      description:
        "Ramesh, a Nepali student, shares his story of overcoming challenges and achieving his dream of studying IT in Tokyo.",
      author: "Prakash Thapa",
      date: "6 Nov 2023",
    },
    {
      image: howjapanhelp,
      tag: "Learn",
      title:
        "How Divine Abroad Studies Helped 100+ Students Find Their Perfect Program",
      description:
        "We recently celebrated a milestone of sending 100+ students to Japan in the past years.",
      author: "Binita Gurung",
      date: "6 Nov 2023",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${japanhero})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Unlock Your Future:{" "}
            <span className="text-red-500">Study In Japan</span>
            <br /> With Guidance You Can Trust
          </h1>
          <p className="text-gray-200 mb-8 text-lg">
            From application to arrival, Divine Abroad Studies is your one-stop
            partner for education in Japan.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-[#1a237e] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#0f1a5a] transition">
              Book Your Free Consultation
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#1a237e] transition">
              Explore Programs
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1a237e] mb-3">
            Our Services
          </h2>
          <p className="text-gray-600">
            We have clubbed your wishes to make your study abroad journey easier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:bg-[#1a237e] transition duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-start text-left space-y-4">
                <div className="p-4 bg-[#1a237e]/10 rounded-full group-hover:bg-white transition duration-300">
                  {React.cloneElement(service.icon, {
                    className:
                      "text-5xl text-[#1a237e] group-hover:text-[#1a237e] transition duration-300",
                  })}
                </div>
                <h3 className="text-xl font-bold text-[#1a237e] group-hover:text-white transition duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-100 transition duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Excellence Section */}
      <section ref={sectionRef} className="py-20 px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#1a237e] mb-10">
          Excellence in Consulting & Management
        </h2>

        <div
          className="relative rounded-2xl overflow-hidden max-w-7xl mx-auto"
          style={{
            backgroundImage: `url(${japanimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#1a237e]/50"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-around text-center text-white py-16 px-6 gap-8 md:gap-0">
            <div>
              <h3 className="text-5xl font-extrabold mb-2">{counts.visas}+</h3>
              <p className="text-lg">Successful Visas Approved</p>
            </div>
            <div className="hidden md:block w-px bg-white/40"></div>
            <div>
              <h3 className="text-5xl font-extrabold mb-2">
                {counts.universities}+
              </h3>
              <p className="text-lg">Partner Universities</p>
            </div>
            <div className="hidden md:block w-px bg-white/40"></div>
            <div>
              <h3 className="text-5xl font-extrabold mb-2">{counts.years}+</h3>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="hidden md:block w-px bg-white/40"></div>
            <div>
              <h3 className="text-5xl font-extrabold mb-2">
                {counts.scholarships}+
              </h3>
              <p className="text-lg">Scholarships Secured</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 px-6 md:px-16 bg-white overflow-hidden">
        <div className="parent relative grid grid-cols-5 grid-rows-5 gap-2 max-w-7xl mx-auto min-h-[600px]">
          <div className="div1 bg-[#1a237e] text-white rounded-2xl p-10 flex flex-col justify-center shadow-lg">
            <p className="text-sm font-semibold tracking-wider text-red-400 mb-2">
              OUR UNIQUE APPROACH
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              We have the <br /> best team and <br /> best process
            </h2>
            <p className="text-gray-200 mb-6">
              Each step is crafted to make your study journey to Japan smooth,
              transparent, and successful.
            </p>
            <button className="bg-white text-[#1a237e] px-6 py-3 rounded-full font-semibold hover:bg-red-500 hover:text-white transition">
              Learn More
            </button>
          </div>

          <div className="div2 bg-blue-50 hover:bg-blue-100 transition rounded-2xl p-5 shadow-md flex flex-col justify-center text-left">
            <h3 className="text-lg font-bold text-[#1a237e] mb-2">
              1. Consultation
            </h3>
            <p className="text-gray-600 text-sm">
              Discuss your academic goals and future path with our experts.
            </p>
          </div>

          <div className="div3 bg-blue-50 hover:bg-blue-100 transition rounded-2xl p-5 shadow-md flex flex-col justify-center text-left">
            <h3 className="text-lg font-bold text-[#1a237e] mb-2">
              2. Shortlisting
            </h3>
            <p className="text-gray-600 text-sm">
              We shortlist the best Japanese universities that suit your goals.
            </p>
          </div>

          <div className="div4 bg-blue-50 hover:bg-blue-100 transition rounded-2xl p-5 shadow-md flex flex-col justify-center text-left">
            <h3 className="text-lg font-bold text-[#1a237e] mb-2">
              3. Visa Process
            </h3>
            <p className="text-gray-600 text-sm">
              Complete support for your visa, documents, and paperwork.
            </p>
          </div>

          <div className="div5 bg-blue-50 hover:bg-blue-100 transition rounded-2xl p-5 shadow-md flex flex-col justify-center text-left">
            <h3 className="text-lg font-bold text-[#1a237e] mb-2">
              4. Arrival
            </h3>
            <p className="text-gray-600 text-sm">
              Support for your accommodation and settling in Japan.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Articles Section */}
<section className="py-24 px-6 md:px-16 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e] mb-4 md:mb-0">
        Recent Articles
      </h2>
      <div className="flex flex-wrap gap-3">
        {["Learn", "Tools", "Mixed", "Operations", "Inspiration", "News"].map(
          (tag, idx) => (
            <button
              key={idx}
              className="px-4 py-1.5 bg-white rounded-full text-sm font-medium border border-gray-200 hover:bg-[#1a237e] hover:text-white transition"
            >
              {tag}
            </button>
          )
        )}
      </div>
    </div>

    {/* Article Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {articles.map((article, index) => (
        <div key={index} className="flex flex-col items-center h-full">
          {/* Card */}
          <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-[#f8f9ff] w-full flex flex-col h-full">
            {/* Image with Zoom Effect */}
            <div className="overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              {/* Tags */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-3 py-1 text-xs bg-[#1a237e]/10 text-[#1a237e] font-semibold rounded-full">
                    {article.tag}
                  </span>
                  {article.tag2 && (
                    <span className="px-3 py-1 text-xs bg-yellow-100 text-yellow-700 font-semibold rounded-full">
                      {article.tag2}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="font-bold text-lg text-[#1a237e] mb-2 group-hover:text-[#0f1a5a] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>
              </div>

              {/* Footer: Author + Date */}
              <div className="mt-auto flex items-center text-gray-500 text-sm">
                <FaUser className="mr-2 text-gray-400" />
                {article.author} <span className="mx-2">•</span>
                {article.date}
              </div>
            </div>
          </div>

          {/* Learn More Button below the card */}
          <button className="mt-5 px-6 py-2 bg-[#1a237e] text-white text-sm font-semibold rounded-full hover:bg-red-500 transition-all duration-300">
            Learn More →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Testimonial Section */}
<section className="py-24 px-6 md:px-16 bg-white relative overflow-hidden">
  {/* Quote Icons */}
  <FaQuoteLeft className="absolute left-12 top-20 text-[#1a237e] text-7xl opacity-10" />
  <FaQuoteRight className="absolute right-12 bottom-20 text-[#1a237e] text-7xl opacity-10" />

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <p className="text-[#f43f5e] font-semibold tracking-wider uppercase mb-2">
      Our Testimonial
    </p>
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a237e] mb-16">
      Result Speaks the Loudest
    </h2>

    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        el: ".custom-pagination",
      }}
      loop={true}
      spaceBetween={30}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-16"
    >
      {[
        {
          name: "Kristin Watson",
          title: "Marketing Coordinator",
          text: "I have been using Adidas shoes for over a year now and I love it! I can't imagine life without it. It's so easy to use, and the customer service is great.",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Robert Fox",
          title: "Software Engineer",
          text: "Divine Abroad made my Japan journey effortless. From visa to university, everything was well-guided and smooth!",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Jane Cooper",
          title: "Student - Kyoto University",
          text: "Their counseling sessions were insightful and helped me find the right university and program in Japan.",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
        },
        {
          name: "Cody Fisher",
          title: "Business Student",
          text: "I was really nervous about applying abroad, but Divine Abroad handled everything perfectly!",
          image: "https://randomuser.me/api/portraits/men/15.jpg",
        },
        {
          name: "Arlene McCoy",
          title: "Scholarship Recipient",
          text: "They helped me secure a full scholarship! The staff is friendly and professional throughout the process.",
          image: "https://randomuser.me/api/portraits/women/21.jpg",
        },
        {
          name: "Ronald Richards",
          title: "Design Student",
          text: "Highly recommend Divine Abroad to anyone looking to study in Japan. Top-notch support!",
          image: "https://randomuser.me/api/portraits/men/60.jpg",
        },
      ].map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-2 h-[360px] flex flex-col justify-between">
            {/* Top Accent Bar */}
            <div className="h-1.5 bg-[#1a237e] w-[60px] rounded-br-xl"></div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-grow px-6 py-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="text-sm font-semibold text-[#1a237e] flex items-center gap-1">
                  <FaQuoteLeft className="text-[#1a237e]" />
                  Testimonial
                </span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                {testimonial.text}
              </p>
            </div>

            {/* Bottom User Bar */}
            <div className="bg-[#1a237e] text-white flex items-center px-5 py-3">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white mr-3"
              />
              <div className="text-left">
                <h4 className="text-sm font-semibold">{testimonial.name}</h4>
                <p className="text-xs text-gray-300">{testimonial.title}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Pagination Dots */}
    <div className="custom-pagination flex justify-center mt-9"></div>
  </div>
</section>

{/* FAQ Section */}
<section className="py-24 px-6 md:px-16 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a237e] mb-12">
      Frequently Asked Questions
    </h2>

    <div className="divide-y divide-gray-200">
      {[
        {
          question: "Why should I choose Divine Abroad Studies for studying in Japan?",
          answer:
            "Divine Abroad Studies has 10+ years of expertise helping students achieve their dreams. We provide personalized counseling, visa guidance, and end-to-end support, ensuring a stress-free journey to Japan.",
        },
        {
          question: "Which countries do you support for study abroad?",
          answer:
            "We mainly focus on Japan, but we also provide assistance for other Asian and European countries through our partner networks.",
        },
        {
          question: "What are the intakes for Japanese universities?",
          answer:
            "Japanese universities typically have two main intakes: April (Spring) and October (Fall). Some specialized programs may offer additional intakes.",
        },
        {
          question: "What documents are required to apply for a Japanese student visa?",
          answer:
            "You’ll need your academic certificates, a valid passport, financial proof, a Certificate of Eligibility (COE), and other documents depending on the institution.",
        },
        {
          question: "How much does it cost to study in Japan?",
          answer:
            "Tuition fees range from ¥500,000 to ¥1,000,000 per year depending on the university and program. Living expenses are approximately ¥80,000–¥100,000 per month.",
        },
        {
          question: "Does Divine Abroad Studies provide support after I reach Japan?",
          answer:
            "Yes, we offer post-arrival support, including accommodation assistance, part-time job guidance, and regular student check-ins.",
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
{/* Join Section (Wide Horizontal Version) */}
<section className="relative flex justify-center items-center py-16 bg-white overflow-hidden">
 

  {/* Blue Card */}
  <div className="relative bg-[#3856B2] text-center rounded-2xl shadow-lg px-8 md:px-20 py-12 w-[90%] md:w-[85%] max-w-7xl z-10">
    {/* Inner bordered box */}
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

export default Home;
