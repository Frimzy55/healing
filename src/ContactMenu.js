import React from "react";

export default function ContactMenu({ t, openDropdown, setOpenDropdown, onLinkClick }) {
  return (
    <li
      className="relative group"
      onMouseEnter={() => setOpenDropdown("contact")}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        className="transition-colors duration-300 hover:text-blue-900
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all after:duration-300 group-hover:after:w-full"
      >
        {t.contact}
      </button>
      {openDropdown === "contact" && (
        <ul className="absolute top-full left-0 bg-[#13a061ff] shadow-lg rounded-lg py-2 w-56">
          <li>
            <a href="/contact/book" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.book}
            </a>
          </li>
          <li>
            <a href="/contact/dm" onClick={onLinkClick} className="block px-4 py-2 hover:bg-green-900 rounded-md">
              {t.dm}
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
