import React from "react";

export default function JourneyMenu({ t, openDropdown, setOpenDropdown, onLinkClick }) {
  return (
    <li
      className="relative group"
      onMouseEnter={() => setOpenDropdown("journey")}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className="transition-colors duration-300 hover:text-blue-900
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all after:duration-300 group-hover:after:w-full"
      >
        {t.journey}
      </button>
      {openDropdown === "journey" && (
        <ul className="absolute top-full left-0 bg-[#856a55ff] shadow-lg rounded-lg py-2 w-64">
          <li>
            <a href="/journey/soundslikeyou" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.soundslikeyou}
            </a>
          </li>
          <li>
            <a href="/journey/possible" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.possible}
            </a>
          </li>
          <li>
            <a href="/journey/method" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.method}
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
