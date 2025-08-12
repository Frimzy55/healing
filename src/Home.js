// src/Home.js
import React from "react";
import { motion } from "framer-motion";

export default function Home({ language, t }) {
  const imageSrc = require("./assets/img.jpg");

  return (
    <div className="px-6 py-8 flex flex-col md:flex-row items-center gap-8">
      {/* Left side image - Rotation Animation */}
      <motion.div
        className="flex-shrink-0"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
      >
        <img
          src={imageSrc}
          alt={t.welcomeTitle}
          className="w-64 h-64 object-cover rounded-full shadow-lg"
        />
      </motion.div>

      {/* Right side text */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold text-green-900 mb-4">{t.welcomeTitle}</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{t.welcomeText}</p>

        <div className="bg-[#F5F5DC] p-6 rounded-2xl shadow-md">
          <h2 className="text-3xl font-bold text-green-800 mb-3">
            {language === "en" ? "Come Home to Yourself" : "Komm Heim zu Dir Selbst"}
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
            📩 {language === "en" ? "Book Your Session | DM “READY”" : "Buche Deine Sitzung | DM „BEREIT“"}
          </button>
        </div>
      </div>
    </div>
  );
}
