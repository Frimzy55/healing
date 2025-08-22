// src/Home.js
import React from "react";
import { motion } from "framer-motion"; // 👈 animation
import YogaSection from "./YogaSection";
import OfferingsSection from "./OfferingsSection";
import storyImage from "./assets/img.jpg"; // 👈 your side image
import LetsWorkTogether from "./LetsWorkTogether";
import WhatBecomesPossible from "./WhatBecomesPossible";
//importScripts WhatBecomesPossible

export default function Home({ language, t }) {
  const desktopImage = require("./assets/serap.jpeg");
  const mobileImage = require("./assets/serap.jpeg");

  return (
    <div>
      {/* Background section with image */}
      {/* Mobile view */}
      <div
        className="relative w-full h-[300px] bg-center bg-contain bg-no-repeat flex items-center justify-start px-8 md:hidden"
        style={{
          backgroundImage: `url(${mobileImage})`,
          backgroundColor: "#eebd98ff",
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
      <div
        className="relative w-full min-h-[500px] bg-center bg-contain bg-no-repeat flex items-center justify-start px-8 hidden md:flex"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundColor: "#eebd98ff",
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
      <div className="px-6 py-8 max-w-5xl mx-auto text-center">
        {/* Welcome text */}
        <h1 className="text-4xl font-bold text-[#cea07eff] mb-4">
          {t.welcomeTitle}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {t.welcomeText}
        </p>

        {/* Healing intro block with side-by-side layout */}
        <div className="mb-16 flex flex-col md:flex-row items-center md:items-start gap-8 text-gray-800">
          {/* Left: Animated Image */}
          <div className="flex-shrink-0 md:w-1/2 flex justify-center">
           <motion.img
  src={storyImage}
  alt="Healing journey"
  className="rounded-2xl shadow-lg w-full max-w-md h-80 object-cover"
  animate={{
    scale: [1, 1.05, 1],   // zoom in and back
    opacity: [1, 0.9, 1],  // subtle fade
    x: [0, -10, 0, 10, 0], // slight side-to-side pan
  }}
  transition={{
    duration: 12,   // slideshow "cycle" duration
    repeat: Infinity, // loop forever
    ease: "easeInOut",
  }}
/>


          </div>

          {/* Right: Text */}
          <div className="space-y-4 md:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-[#cea07eff]">
              Heal • Rise • Shine
            </h2>
            <p className="text-xl font-medium">
              Nervous System &amp; Soul Healing
            </p>
            <p>
              You’ve been carrying so much. Always showing up. Always giving.
              Always holding it together. But deep inside, you know: this can’t
              be all there is.
            </p>
            <p>
              Here, you are invited to pause. To exhale. To feel your body
              soften and your soul expand.
            </p>
            <p>
              <span className="font-semibold">Serap with Love</span> is more
              than a practice – it’s a sanctuary. A place where healing becomes
              simple, where your nervous system can unwind, and where you are
              reminded of the truth: you are not broken. You are whole.
            </p>
          </div>
        </div>

        {/* Personal Story Block */}
        <div className="mb-12 text-gray-800 space-y-4 text-left">
          <p>
            I didn’t have an easy start in life. And maybe that’s why I began
            searching early – for depth, for truth, for a sense of belonging
            inside myself.
          </p>
          <p>
            That longing became my compass. It carried me through crises,
            through burnout, through times when I thought I had lost myself. And
            it led me into the healing worlds of psychology, yoga, meditation,
            breathwork, EFT, and energy work.
          </p>
          <p>
            With every practice, with every layer I released, I came closer to
            something essential: my own essence. The quiet strength that had
            always been there. The inner home I had been longing for all along.
          </p>
          <p>
            Today, I guide women who are ready for the same journey – back to
            themselves. <span className="font-semibold">Serap with Love</span>{" "}
            is my way of sharing not just tools, but lived experience, embodied
            presence, and the deep knowing that true healing always begins
            within.
          </p>
        </div>

        {/* Import Yoga and Offerings */}
        <YogaSection />
        <OfferingsSection />
        <LetsWorkTogether/>
        <WhatBecomesPossible/>
        
        {/* Placeholder for "Come Home to Yourself card" or more content */}
      </div>
    </div>
  );
}
