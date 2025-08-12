import React from "react";

export default function ServicesMenu({ t, openDropdown, setOpenDropdown, onLinkClick }) {
  return (
    <li
      className="relative group"
      onMouseEnter={() => setOpenDropdown("services")}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className="transition-colors duration-300 hover:text-blue-900
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all after:duration-300 group-hover:after:w-full"
      >
        {t.work}
      </button>
      {openDropdown === "services" && (
        <ul className="absolute top-full left-0 bg-[#13a061ff] shadow-lg rounded-lg py-2 w-72">
          <li>
            <a href="/services/mentoring" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.mentoring}
            </a>
          </li>
          <li>
            <a href="/services/deepdive" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.deepdive}
            </a>
          </li>
          <li>
            <a href="/services/kennenlern" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.kennenlern}
            </a>
          </li>
          <li>
            <a href="/services/counseling" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.counseling}
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
