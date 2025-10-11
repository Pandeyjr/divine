import React from 'react';

export default function JoinPartnerInstitutionsCTA() {
  return (
    <div className="container mx-auto px-4 md:px-6 mt-20"> 
      <div 
        className="relative rounded-2xl py-16 px-8 md:px-16 overflow-hidden shadow-lg"
        style={{ backgroundColor: '#F5F5F7' }}
      >
        
        {/* =================================================== */}
        {/* === Background Design: Top-Right Concentric Semi-Circles === */}
        {/* =================================================== */}
        
        {/* Outer/Largest Circle (Navy Blue) */}
        <div 
          className="absolute top-0 right-0 w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full"
          style={{ 
            backgroundColor: '#1E3A8A',
            transform: 'translate(35%, -35%)',
          }}
        ></div>
        
        {/* Middle Circle (White) */}
        <div 
          className="absolute top-0 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-white"
          style={{ 
            transform: 'translate(30%, -30%)',
          }}
        ></div>
        
        {/* Inner Circle (Pink) */}
        <div 
          className="absolute top-0 right-0 w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full"
          style={{ 
            backgroundColor: '#FF3366',
            transform: 'translate(25%, -25%)',
          }}
        ></div>
        
        {/* =================================================== */}
        {/* === Background Design: Left Decorative Dots === */}
        {/* =================================================== */}
        
        <div className="absolute top-8 left-16 w-2 h-2 bg-purple-600 rounded-full" />
        <div className="absolute top-14 left-8 w-3 h-3 bg-green-400 rounded-full" />
        <div className="absolute top-24 left-4 w-3 h-3 bg-blue-900 rounded-full" />
        <div className="absolute top-4 left-2 w-2 h-2 bg-gray-400 rounded-full" />
        <div className="absolute bottom-16 left-12 w-3 h-3 bg-blue-900 rounded-full" />
        <div className="absolute top-20 left-24 w-2 h-2 bg-red-500 rounded-full" />
        
        {/* =================================================== */}
        {/* === Content Area === */}
        {/* =================================================== */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Partner Institutions <span className="text-red-500">Today!</span>
          </h2>
          <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
            Take the next step toward your academic journey in Japan with Divine Abroad Studies. 
            We'll guide you through the entire admission, visa, and placement process.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto shadow-lg rounded-md overflow-hidden bg-white">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-4 text-gray-700 text-sm focus:outline-none border-none"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8 transition-colors duration-300 whitespace-nowrap"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}