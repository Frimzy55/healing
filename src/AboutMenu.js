import React from "react";

export default function AboutMenu({ t, openDropdown, setOpenDropdown, onLinkClick }) {
  return (
    <li
      className="relative group"
      onMouseEnter={() => setOpenDropdown("about")}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className="transition-colors duration-300 hover:text-blue-900
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-green-900 after:transition-all after:duration-300 group-hover:after:w-full"
      >
        {t.about}
      </button>
      {openDropdown === "about" && (
        <ul className="absolute top-full left-0 bg-[#6b722cff] shadow-lg rounded-lg py-2 w-56">
          <li>
            <a href="/about/meet" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.meet}
            </a>
          </li>
          <li>
            <a href="/about/promise" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.promise}
            </a>
          </li>
          <li>
            <a href="/about/specialized" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.specialized}
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
