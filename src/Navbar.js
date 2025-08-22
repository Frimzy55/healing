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
    <nav className="bg-[#856a55ff] text-white px-8 py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">

        {/* Logo / Title */}
        <div
          className="text-3xl md:text-4xl font-bold tracking-wide"
          style={{ fontFamily: "Castella" }}
        >
          {/* Logo or title here */}
        </div>

        {/* Language Switch (Desktop) */}
        <div className="hidden md:flex space-x-1 border border-green-900 rounded p-1 shadow-sm bg-green-50 text-xs">
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded ${
              language === "en"
                ? "bg-[#eebd98ff] text-white"
                : "bg-transparent text-green-900"
            }`}
          >
            ENGLISH🌿
          </button>
          <button
            onClick={() => setLanguage("de")}
            className={`px-3 py-1 rounded ${
              language === "de"
                ? "bg-[#eebd98ff] text-white"
                : "bg-transparent text-green-900"
            }`}
          >
            GERMAN🌿
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-lg font-medium">
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
          className="md:hidden p-3 rounded-lg hover:bg-[#9b826bff] transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-5 px-4">
          {/* Language Switch - Mobile */}
          <div className="flex w-full gap-3">
            <button
              onClick={() => setLanguage("en")}
              className={`flex-1 py-3 rounded-lg font-semibold text-lg ${
                language === "en"
                  ? "bg-[#eebd98ff] text-white"
                  : "bg-green-100 text-green-900"
              }`}
            >
              ENGLISH
            </button>
            <button
              onClick={() => setLanguage("de")}
              className={`flex-1 py-3 rounded-lg font-semibold text-lg ${
                language === "de"
                  ? "bg-[#eebd98ff] text-white"
                  : "bg-green-100 text-green-900"
              }`}
            >
              GERMAN
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col space-y-4 text-lg">
            {/* Home */}
            <li>
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block py-4 px-5 bg-[#856a55ff] rounded-lg hover:bg-green-200"
              >
                {t.home}
              </Link>
            </li>

            {/* About Dropdown */}
            <li>
              <button
                className="flex justify-between w-full py-4 px-5 bg-[#eebd98ff] rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("about")}
              >
                {t.about}
                {openSubmenu === "about" ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openSubmenu === "about" && (
                <ul className="mt-2 space-y-2 bg-[#856a55ff] p-3 rounded-lg">
                  <li>
                    <Link to="/about/meet" onClick={handleLinkClick} className="block px-3 py-2 hover:bg-green-100">
                      {t.meet}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/promise" onClick={handleLinkClick} className="block px-3 py-2 hover:bg-green-100">
                      {t.promise}
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/specialized" onClick={handleLinkClick} className="block px-3 py-2 hover:bg-green-100">
                      {t.specialized}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Journey Dropdown */}
            <li>
              <button
                className="flex justify-between w-full py-3 px-4 bg-[#eebd98ff] rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("journey")}
              >
                {t.journey}
                {openSubmenu === "journey" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSubmenu === "journey" && (
                <ul className="mt-2 space-y-2 bg-[#856a55ff] p-2 rounded-lg">
                  <li>
                    <Link to="/journey/soundslikeyou" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.soundslikeyou}
                    </Link>
                  </li>
                  <li>
                    <Link to="/journey/possible" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.possible}
                    </Link>
                  </li>
                  <li>
                    <Link to="/journey/method" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.method}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li>
              <button
                className="flex justify-between w-full py-3 px-4 bg-[#eebd98ff] rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("services")}
              >
                {t.work}
                {openSubmenu === "services" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSubmenu === "services" && (
                <ul className="mt-2 space-y-2 bg-[#856a55ff] p-2 rounded-lg">
                  <li>
                    <Link to="/services/mentoring" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.mentoring}
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/deepdive" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.deepdive}
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/kennenlern" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.kennenlern}
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/reiki" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.reiki}
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/counseling" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.counseling}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact Dropdown */}
            <li>
              <button
                className="flex justify-between w-full py-3 px-4 bg-[#eebd98ff] rounded-lg font-semibold hover:bg-green-200"
                onClick={() => toggleMobileSubmenu("contact")}
              >
                {t.contact}
                {openSubmenu === "contact" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {openSubmenu === "contact" && (
                <ul className="mt-2 space-y-2 bg-[#856a55ff] p-2 rounded-lg">
                  <li>
                    <Link to="/contact/book" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.book}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/dm" onClick={handleLinkClick} className="block px-3 py-2 rounded hover:bg-green-100">
                      {t.dm}
                    </Link>
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
