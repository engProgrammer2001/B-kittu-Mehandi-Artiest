import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = "bg-white text-teal-500 font-bold px-3 py-2 rounded-md";

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-full p-4 bg-white">
        <h2 className="text-sm font-bold text-red-600 text-center">
          Book Today and Get 20% Off | All Designed Mehandi Services
        </h2>
      </div>

      <nav className="bg-[#28666E] p-2 px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <NavLink to="/">
              <img
                src="/assets/logo/kittu.jpg"
                alt="KK Home Painting"
                className="h-20 rounded-lg cursor-pointer"
              />
            </NavLink>
          </div>

          {/* Toggle Button for Mobile */}
          <button
            className="text-[#ff9a32] text-2xl md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Menu Items for Desktop */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${activeStyle} font-bold`
                  : "text-[#ff9a32] text-semibold hover:text-gray-300 px-3 py-2 font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/b-kittu-mehandi-artiest-about"
              className={({ isActive }) =>
                isActive
                  ? `${activeStyle} font-bold`
                  : "text-[#ff9a32] hover:text-gray-300 px-3 py-2 font-bold"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "text-[#ff9a32] hover:text-gray-300 px-3 py-2 font-bold"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "text-[#ff9a32] hover:text-gray-300 px-3 py-2 font-bold"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/choose-your-plan"
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "text-[#ff9a32] hover:text-gray-300 px-3 py-2 font-bold"
              }
            >
              Mehandi Plans
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "text-[#ff9a32] hover:text-gray-300 px-3 py-2 font-bold"
              }
            >
              Contact Us
            </NavLink>
          </div>
          {/* Social Media Links */}
          <div className="hidden md:flex space-x-6 justify-center items-center">
            <a
              href="https://www.facebook.com/profile.php?id=61568687594067"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-3xl text-[#ff9a32] hover:text-gray-300 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/kk_home_painting_service/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-[#ff9a32] hover:text-gray-300 cursor-pointer" />
            </a>
            <FaYoutube className="text-3xl text-[#ff9a32] hover:text-gray-300 cursor-pointer" />
            <NavLink
              to="tel: 8800457319"
              className="bg-white px-5 py-3 rounded-lg text-[#ff9a32] hover:text-[#28666E] font-bold"
            >
              Book Now
            </NavLink>
          </div>
        </div>
        {/* Toggle Menu for Mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "block text-[#ff9a32] hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/b-kittu-mehandi-artiest-about"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "block text-[#ff9a32] hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "block text-[#ff9a32] hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "block text-[#ff9a32] hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/choose-your-plan"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "block text-[#ff9a32] hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
              }
            >
              Mehandi Plans
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className={({ isActive }) =>
                isActive
                  ? activeStyle
                  : "block text-[#ff9a32] hover:text-gray-300 px-4 py-3 bg-gray-800 rounded-lg w-full"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="tel:123456789"
              onClick={handleLinkClick}
              className="bg-gray-700 px-5 py-3 rounded-lg text-[#ff9a32] hover:text-gray-300 w-full block text-center"
            >
              Call Now
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
