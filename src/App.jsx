import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer"; // ✅ import Footer here

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Home />
      <Footer /> {/* ✅ Footer appears after the Home page */}
    </div>
  );
}

export default App;
