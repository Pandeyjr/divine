import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import japanImage from "../assets/japan.png";

// ✅ Blog images
import nepalistudent from "../assets/nepalistudent.png";
import rulesforstudent from "../assets/rulesforstudent.png";
import stepbystepguide from "../assets/stepbystepguide.png";
import affordableuni from "../assets/affordableuni.png";
import journey from "../assets/journey.png";
import howjapanhelp from "../assets/howjapanhelp.png";

const Blogs = () => {
  // ✅ Blog Data
  const blogs = [
    {
      id: 1,
      title: "Nepali Students Secure 50+ MEXT Scholarships in 2025",
      desc: "Japan continues to open doors for Nepali students with increasing scholarship opportunities.",
      category: "News",
      author: "Sushmitha Shrestha",
      date: "22 Nov 2023",
      image: nepalistudent,
    },
    {
      id: 2,
      title:
        "Japan Tightens Visa Documentation Rules for International Students",
      desc: "The Japanese government has introduced stricter documentation requirements to ensure genuine study visa applications.",
      category: "Learn",
      author: "Anil Sharma",
      date: "16 Nov 2023",
      image: rulesforstudent,
    },
    {
      id: 3,
      title: "Step-by-Step Guide to Japanese Student Visa Process",
      desc: "A complete guide for students who want to study in Japan — from visa forms to embassy interviews.",
      category: "Inspiration",
      author: "Pooja Acharya",
      date: "15 Nov 2023",
      image: stepbystepguide,
    },
    {
      id: 4,
      title: "Top 10 Affordable Universities in Japan for Nepali Students",
      desc: "We’ve compiled a list of top universities offering world-class education without breaking the bank.",
      category: "Tools",
      author: "Wren Noble",
      date: "10 Nov 2023",
      image: affordableuni,
    },
    {
      id: 5,
      title:
        "From Kathmandu to Tokyo: Ramesh’s Journey to His Dream University",
      desc: "Ramesh, a Nepali student, shares his story of overcoming challenges and achieving his dream of studying IT in Tokyo.",
      category: "News",
      author: "Prakash Thapa",
      date: "6 Nov 2023",
      image: journey,
    },
    {
      id: 6,
      title:
        "How Divine Abroad Studies Helped 100+ Students Find Their Perfect Program",
      desc: "We recently celebrated a milestone of sending 100+ students to Japan in the past years.",
      category: "Learn",
      author: "Binita Gurung",
      date: "6 Nov 2023",
      image: howjapanhelp,
    },
  ];

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
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#3856B2]/85"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Blogs</h1>

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
            <span className="text-[#F9B234] font-medium">Blogs</span>
          </div>
        </div>
      </div>

      {/* ✅ Recent Articles Section */}
<section className="max-w-7xl mx-auto px-6 md:px-10 py-16">
  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-[#1a237e]">
      Recent Articles
    </h2>
    <div className="flex flex-wrap gap-2 mt-3 md:mt-0">
      {["Learn", "Tools", "Mixed", "Operations", "Inspiration", "News"].map(
        (cat) => (
          <span
            key={cat}
            className="px-3 py-1 text-xs md:text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-[#3856B2] hover:text-white transition"
          >
            {cat}
          </span>
        )
      )}
    </div>
  </div>

  {/* Blog Grid */}
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {blogs.map((blog) => (
      <div
        key={blog.id}
        className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 flex flex-col"
      >
        {/* Image with zoom effect */}
        <div className="overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Blog content */}
        <div className="p-5 flex flex-col flex-grow">
          <span className="inline-block bg-[#E8EBF9] text-[#3856B2] text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3">
            {blog.category}
          </span>
          <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2 group-hover:text-[#3856B2] transition-colors duration-300">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            {blog.desc}
          </p>

          <div className="mt-auto">
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>👤 {blog.author}</span>
              <span>{blog.date}</span>
            </div>
            <button className="w-full bg-[#3856B2] text-white text-sm py-2 rounded-md hover:bg-[#2f4aa3] transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



    </div>
  );
};

export default Blogs;
