import React from "react";
import { useNavigate } from "react-router-dom";

export default function GradientCard() {
  const navigate = useNavigate();

  return (
    <div className="relative rounded-lg shadow-xl p-6 mb-6 w-full max-w-xs sm:max-w-sm md:max-w-md overflow-hidden">
      {/* Blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"></div>

      {/* Buttons */}
      <button
        onClick={() => navigate("/welcome")}
        className="bg-transparent border border-white text-white font-semibold py-3 rounded-lg shadow-md transition-all w-full mb-4 hover:bg-white hover:text-blue-700 relative z-10"
      >
        German - Willkommen bei Serap with Love
      </button>

      <button
        onClick={() => navigate("/welcome1")}
        className="bg-transparent border border-white text-white font-semibold py-3 rounded-lg shadow-md transition-all w-full hover:bg-white hover:text-blue-700 relative z-10"
      >
        English - Welcome to Serap with Love
      </button>
    </div>
  );
}
