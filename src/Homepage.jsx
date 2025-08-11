import React from "react";
import GradientCard from "./GradientCard";
import bgImage from "./assets/img.jpg"; // adjust path to your image

export default function Homepage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-white">Healing Session</h1>

        {/* Gradient Card */}
        <GradientCard />

        {/* Other buttons */}
        <div className="flex flex-col gap-4 mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md transition-all w-full">
            information 1
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg shadow-md transition-all w-full">
            information 2
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg shadow-md transition-all w-full">
            information 3
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg shadow-md transition-all w-full">
            information 4
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg shadow-md transition-all w-full">
            information 5
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg shadow-md transition-all w-full">
            information 6
          </button>
        </div>
      </div>
    </div>
  );
}
