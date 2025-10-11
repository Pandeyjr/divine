import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CollegeUniversity from "./pages/CollegeAndUni";
import Footer from "./components/Footer";
import AboutUsPage from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<CollegeUniversity />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
