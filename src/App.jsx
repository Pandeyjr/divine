import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs"; // ✅ newly added page

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
          </Routes>
        </div>

        {/* ✅ Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
