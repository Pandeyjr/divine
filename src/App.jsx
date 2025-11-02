import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs"; // ✅ newly added page
import BlogDetails from "./pages/BlogDetails";
import AboutCeo from "./pages/AboutCeo";
import AboutSection from "./pages/AboutSection";
import CollegeAndUni from "./pages/CollegeAndUni";
import CollegeDetail from "./pages/CollegeDetail";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen flex flex-col">
        {/* ✅ Navbar at the top */}
        <Navbar />

        {/* ✅ Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} /> {/* ✅ Contact Us Route */}
            <Route path="/blogs/:id" element={<BlogDetails/>} />
             <Route path="/ceo-message" element={<AboutCeo/>} />
         <Route path="/introduction" element={<AboutSection/>} />
          <Route path="/colleges" element={<CollegeAndUni/>} />
          <Route path="/college/:id" element={<CollegeDetail />} />

          </Routes>
        </div>

        {/* ✅ Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
