// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Meet from "./Meet";
import Promise from "./Promise";
import Specialized from "./Specialized";
import translations from "./translations";
import JourneySoundsLikeYou from "./JourneySoundsLikeYou";
import Reiki from "./Reiki";

export default function App() {
  const [language, setLanguage] = useState("en"); // default language

  // Pick translations for current language
  //hell
  const t = translations[language];

  return (
    <Router>
      {/* Navbar stays outside Routes so it's always visible */}
      <Navbar language={language} setLanguage={setLanguage} t={t} />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home language={language} t={t} />} />

        {/* About section */}
        <Route path="/about/meet" element={<Meet language={language} t={t} />} />
        <Route path="/about/promise" element={<Promise language={language} t={t} />} />
        <Route path="/about/specialized" element={<Specialized language={language} t={t} />} />

          <Route path="/journey/soundslikeyou" element={<JourneySoundsLikeYou language={language} t={t} />} />
           <Route path="/services/reiki" element={<Reiki language={language} t={t} />} />

        {/* Catch-all: redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
