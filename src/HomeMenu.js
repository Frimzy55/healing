import React from "react";

export default function HomeMenu({ t, onLinkClick }) {
  return (
    <li className="relative group">
      <a
        href="/"
        onClick={onLinkClick}
        className="transition-colors duration-300 hover:text-blue-900
          after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-blue-900 after:transition-all after:duration-300 group-hover:after:w-full"
      >
        {t.home}
      </a>
    </li>
  );
}
