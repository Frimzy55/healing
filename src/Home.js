import React from "react";

export default function Home({ language, t }) {
  const imageSrc = require("./assets/serap1.jpeg");

  return (
    <div>
      {/* Background section with image */}
    {/* Background section with image */}
<div
  className="relative w-full h-[400px] md:h-[500px] bg-center bg-cover flex items-center justify-start px-8"
  style={{
    backgroundImage: `url(${imageSrc})`,
  }}
>
  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Text container */}
  <div className="relative z-10 text-[#6b722cff]">
    <h2
      className="text-4xl md:text-9xl font-bold"
      style={{ fontFamily: "'Freestyle Script', cursive" }}
    >
      Serap 
    </h2>
    <h2   className="text-4xl md:text-9xl font-medium">With Love</h2>

    <ul className="list-disc pl-6 mt-3 space-y-1 text-4xl md:text-2xl font-bold">
      <li>Heal</li>
      <li>Feel</li>
      <li>Rise</li>
    </ul>

     </div>
    
  
</div>


      {/* All text below */}
      <div className="px-6 py-8 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-4">
          {t.welcomeTitle}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {t.welcomeText}
        </p>

        <div className="bg-[#F5F5DC] p-6 rounded-2xl shadow-md text-left">
          <h2 className="text-3xl font-bold text-green-800 mb-3">
            {language === "en"
              ? "Come Home to Yourself"
              : "Komm Heim zu Dir Selbst"}
          </h2>
          <p className="text-lg text-brown-700 font-medium mb-4">
            {language === "en"
              ? "Deep Nervous System Healing & Embodied Transformation for Women"
              : "Tiefe Heilung des Nervensystems & Verkörperte Transformation für Frauen"}
          </p>
          <p className="text-gray-800 mb-6">
            {language === "en"
              ? "You don’t need to “fix” yourself — you need to remember yourself. Through gentle yet profound somatic work, we release old patterns, restore inner safety, and awaken your soul’s truest expression."
              : "Du musst Dich nicht „reparieren“ — Du musst Dich an Dich erinnern. Durch sanfte und zugleich tiefgehende somatische Arbeit lösen wir alte Muster, stellen innere Sicherheit wieder her und erwecken den wahrsten Ausdruck Deiner Seele."}
          </p>
          <button className="bg-red-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-200 flex items-center gap-2">
            📩{" "}
            {language === "en"
              ? "The perfect match , let’s work together"
              : "Das perfekte Match , lass uns gemeinsam starten"}
          </button>
        </div>
      </div>
    </div>
  );
}
