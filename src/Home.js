import React from "react";

export default function Home({ language, t }) {
  const desktopImage = require("./assets/serap.jpeg");
  const mobileImage = require("./assets/serap.jpeg"); // New mobile image

  return (
    <div>
      {/* Background section with image */}
      {/* Mobile view */}
      
<div
  className="relative w-full h-[300px] bg-center bg-contain bg-no-repeat flex items-center justify-start px-8 md:hidden"
  style={{
    backgroundImage: `url(${mobileImage})`,
    backgroundColor: "#eebd98ff", // optional background behind image
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative z-10 text-[#114e11ff]">
    <h2
      className="text-4xl font-light"
      style={{ fontFamily: "Breathing" }}
    >
      {/* Mobile heading */}
    </h2>
  </div>
</div>

      {/* Desktop view */}
      {/* Desktop view */}
<div
  className="relative w-full min-h-[500px] bg-center bg-contain bg-no-repeat flex items-center justify-start px-8 hidden md:flex"
  style={{
    backgroundImage: `url(${desktopImage})`,
    backgroundColor: "#eebd98ff", // optional background color behind image
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
  <div className="relative z-10 text-[#114e11ff]">
    <h2
      className="text-9xl font-light"
      style={{ fontFamily: "Breathing" }}
    >
      {/* Desktop heading */}
    </h2>
  </div>
</div>

      {/* All text below */}
      <div className="px-6 py-8 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#cea07eff] mb-4">
          {t.welcomeTitle}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {t.welcomeText}
        </p>

        <div className="bg-[#ebdac3ff] p-6 rounded-2xl shadow-md text-left">
          <h2 className="text-3xl font-bold text-[#cea07eff] mb-3">
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
          <button className="bg-[#eebd98ff] text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-200 flex items-center gap-2">
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
