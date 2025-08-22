// src/LetsWorkTogether.js
import React from "react";

export default function LetsWorkTogether() {
  return (
    <div className="mb-12 bg-[#cea07eff] shadow-lg rounded-2xl p-6 text-gray-800 text-left">
      <h2 className="text-3xl font-bold text-[#833e0cff] mb-4">
        Let’s Work Together
      </h2>
      <p>
        If you’ve read this far, something inside you already knows:{" "}
        <span className="font-semibold">You are ready.</span>
      </p>
      <p>🌿Ready to stop running.</p>
      <p>🌿Ready to soften.</p>
      <p>🌿Ready to trust yourself again.</p>

      <p className="mt-4">
        My work is not about quick fixes or surface-level tools. It’s about{" "}
        <span className="font-semibold">deep transformation</span> – at the
        level of your nervous system, your emotions, and your soul.
      </p>

      <p>
        So if you feel the call, I invite you to take the next step. Book your
        session, join me for a deep dive, or step into my 1:1 mentoring program.
      </p>

      <p className="mt-4 font-medium">
        📩 Let’s explore what’s possible for you. Together, we’ll walk the path
        back home – to you.
      </p>

      {/* Call to Action */}
      <div className="mt-6">
        <a
          href="#book"
          className="inline-block px-6 py-3 bg-[#833e0cff] text-white rounded-xl shadow hover:bg-[#6b2f09ff] transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
