import React from "react";

export default function OfferingsSection() {
  return (
    <div className="mb-12 bg-[#cea07eff] shadow-lg rounded-2xl p-6 text-gray-800 text-left">
      <h2 className="text-3xl font-bold text-[#833e0cff] mb-4">Offerings</h2>
      <p className="mb-6">
        Every soul is unique – and so is every healing journey. That’s why my
        offerings are not one-size-fits-all, but carefully created to meet you
        where you are.
      </p>

      <ul className="space-y-4">
        <li className="bg-[#f9f4f1] p-4 rounded-xl shadow-sm">
          <span className="font-semibold">🌿 EFT (Emotional Freedom Techniques)</span> –  
          Gentle tapping on energy points to release stress, emotional pain,
          and old patterns stored in your nervous system.
        </li>
        <li className="bg-[#f9f4f1] p-4 rounded-xl shadow-sm">
          <span className="font-semibold">🌿 Reiki & Distance Healing with Soul Message</span> –  
          Receive deep energetic alignment and intuitive guidance – no matter
          where you are in the world.
        </li>
        <li className="bg-[#f9f4f1] p-4 rounded-xl shadow-sm">
          <span className="font-semibold">🌿 Psychological Counseling</span> –  
          A grounded, compassionate space to explore challenges, patterns, and
          emotions with depth and clarity.
        </li>
        <li className="bg-[#f9f4f1] p-4 rounded-xl shadow-sm">
          <span className="font-semibold">🌿 Energy Healing</span> –  
          A reset for body, mind, and soul – releasing tension, restoring
          flow, and reconnecting you to your inner balance.
        </li>
        <li className="bg-[#f9f4f1] p-4 rounded-xl shadow-sm">
          <span className="font-semibold">🌿 Embodied Light 1:1 Mentoring</span> –  
          A 3–6 month journey of nervous system healing and embodied
          transformation. Deep, personalized work that guides you out of
          survival mode and into trust, safety, and freedom.
        </li>
      </ul>
    </div>
  );
}
