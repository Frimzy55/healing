// src/Reiki.js
// src/Reiki.js
import React from "react";

export default function Reiki({ language, t }) {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-24 space-y-6">
      <h1 className="text-3xl font-bold">{t.reiki}</h1>

      {/* Intro */}
      <section className="space-y-2">
        <p className="text-lg leading-relaxed font-semibold">Intuitive Energy Healing Sessions</p>
        <p className="text-lg leading-relaxed">Reconnect with your energy. Realign with your truth.</p>
        <p className="text-lg leading-relaxed">
          These sessions are designed for deep energetic clearing, intuitive guidance, and soul alignment.
        </p>
        <p className="text-lg leading-relaxed">
          Using Reiki and intuitive energy reading, I support you in releasing blocks and receiving the insights your system is ready for.
        </p>
      </section>

      {/* What to Expect */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">What to Expect</h2>
        <p className="text-lg leading-relaxed">
          Each session is conducted remotely. While you’re resting comfortably, I connect with your energy field and channel healing frequencies and intuitive messages.
        </p>
        <p className="text-lg leading-relaxed">
          After each session, you’ll receive a personal voice message with insights, energy updates, and integration tips aligned with your current process.
        </p>
      </section>

      {/* Who this is for */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">This journey is for you if you…</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-1">
          <li>feel emotionally stuck or energetically drained</li>
          <li>want clarity around a personal or spiritual theme</li>
          <li>wish to reconnect with your inner voice and intuition</li>
          <li>are navigating a transition and need energetic support</li>
          <li>long to feel lighter, more grounded, and energetically clear</li>
        </ul>
      </section>

      {/* What’s included */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">What’s Included</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-1">
          <li>4x 30-minute remote 1:1 sessions (over 4 weeks)</li>
          <li>Reiki-based energy healing</li>
          <li>Intuitive reading of your energy field</li>
          <li>Voice message after each session with personal guidance</li>
          <li>Gentle integration support and ongoing energetic alignment</li>
        </ul>
      </section>

      {/* Investment */}
      <section className="space-y-2">
        <h2 className="text-2xl font-semibold">Your Investment</h2>
        <p className="text-lg leading-relaxed font-semibold">CHF 444 / EUR 444</p>
        <p className="text-lg leading-relaxed">(for all 4 sessions as a complete experience)</p>
        <p className="text-lg leading-relaxed text-red-600">
          Only 2 spots available per month – to ensure depth and presence.
        </p>
      </section>
    </div>
  );
}

