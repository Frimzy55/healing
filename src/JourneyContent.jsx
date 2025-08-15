import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

import HomeMenu from "./HomeMenu";
import AboutMenu from "./AboutMenu";
import JourneyMenu from "./JourneyMenu";
import ServicesMenu from "./ServicesMenu";
import ContactMenu from "./ContactMenu";

export default function Navbar({ language, setLanguage, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="bg-[#856a55ff] text-[#b7cfb2ff] px-6 py-1 fixed top-0 left-0 w-full z-50 shadow-md">


      <div className="flex items-center justify-between">
        
        {/* Logo / Title */}
        <div
          className="text-4xl font-bold"
          style={{ fontFamily: "Castella" }}
        >
          
        </div>

        {/* Language Switch (Desktop) */}
        {/* Language Switch (Desktop) */}
<div className="hidden md:flex space-x-0.5 border border-green-900 rounded-sm p-0.5 shadow-xs bg-green-50 text-xs">
  <button
    onClick={() => setLanguage("en")}
    className={`px-1 py-0.5 rounded-sm ${
      language === "en"
        ? "bg-green-900 text-white"
        : "bg-transparent text-green-900"
    }`}
  >
    ENGLISH
  </button>
  <button
    onClick={() => setLanguage("de")}
    className={`px-1 py-0.5 rounded-sm ${
      language === "de"
        ? "bg-green-900 text-white"
        : "bg-transparent text-green-900"
    }`}
  >
    GERMAN
  </button>
</div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 mx-auto relative">
          <HomeMenu t={t} onLinkClick={handleLinkClick} />
          <AboutMenu
            t={t}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            onLinkClick={handleLinkClick}
          />
          <JourneyMenu
            t={t}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            onLinkClick={handleLinkClick}
          />
          <ServicesMenu
            t={t}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            onLinkClick={handleLinkClick}
          />
          <ContactMenu
            t={t}
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
            onLinkClick={handleLinkClick}
          />
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          
          {/* Language Switch - Mobile */}
          <div className="flex w-full gap-2">
            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 py-2 rounded-lg font-semibold ${
                language === "en"
                  ? "bg-green-900 text-white"
                  : "bg-green-100 text-green-900"
              }`}
            >
              ENGLISH
            </button>
            <button
              onClick={() => setLanguage("de")}
              className={`flex-1 py-2 rounded-lg font-semibold ${
                language === "de"
                  ? "bg-green-900 text-white"
                  : "bg-green-100 text-green-900"
              }`}
            >
              GERMAN
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col space-y-3">
            
            {/* Home */}
            <li>
              <a
                href="/"
                onClick={handleLinkClick}
                className="block py-3 px-4 bg-[#856a55ff] rounded-lg hover:bg-green-200"
              >
                {t.home}
              </a>
            </li>

            {/* About Dropdown */}
            <li>
              <button
                className="flex justify-between w-full py-3 px-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("about")}
              >
                {t.about}
                {openSubmenu === "about" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSubmenu === "about" && (
                <ul className="mt-2 space-y-2 bg-green p-2 rounded-lg">
                  <li>
                    <Link to="/about/meet" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.meet}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/promise" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.promise}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/specialized" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.specialized}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Repeat same pattern for Journey */}
            <li>
              <button
                className="flex justify-between w-full py-3 px-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("journey")}
              >
                {t.journey}
                {openSubmenu === "journey" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSubmenu === "journey" && (
                <ul className="mt-2 space-y-2 bg-[#856a55ff] p-2 rounded-lg">
                  <li>
                    <a href="/journey/soundslikeyou" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.soundslikeyou}
                    </a>
                  </li>
                  <li>
                    <a href="/journey/possible" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.possible}
                    </a>
                  </li>
                  <li>
                    <a href="/journey/method" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.method}
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Services */}
            <li>
              <button
                className="flex justify-between w-full py-3 px-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("services")}
              >
                {t.work}
                {openSubmenu === "services" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSubmenu === "services" && (
                <ul className="mt-2 space-y-2 bg-[#856a55ff] p-2 rounded-lg">
                  <li>
                    <a href="/services/mentoring" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.mentoring}
                    </a>
                  </li>
                  <li>
                    <a href="/services/deepdive" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.deepdive}
                    </a>
                  </li>
                  <li>
                    <a href="/services/kennenlern" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.kennenlern}
                    </a>
                  </li>
                  <li>
                    <a href="/services/reiki" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.reiki}
                    </a>
                  </li>
                  <li>
                    <a href="/services/counseling" className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.counseling}
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact */}
            <li>
              <button
                className="flex justify-between w-full py-3 px-4 bg-green-100 rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("contact")}
              >
                {t.contact}
                {openSubmenu === "contact" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSubmenu === "contact" && (
                <ul className="mt-2 space-y-2 bg-[#856a55ff] p-2 rounded-lg">
                  <li>
                    <a href="/contact/book" className="block px-3 py-2 rounded hover:bg-[#eebd98ff]">
                      {t.book}
                    </a>
                  </li>
                  <li>
                    <a href="/contact/dm" className="block px-3 py-2 rounded hover:bg-[#eebd98ff]">
                      {t.dm}
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
