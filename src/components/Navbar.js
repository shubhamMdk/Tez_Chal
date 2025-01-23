


import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#da2127] py-4 px-6 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[115px] h-auto object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-white font-bold space-x-16">
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
            <Link to="/Aboutus" className="text-white hover:text-gray-200">
              About Us
            </Link>
            <Link to="/contactus" className="text-white hover:text-gray-200">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden left-0 right-0 bg-[#da2127]">
            <div className="px-6 pt-4 pb-6 space-y-4">
              <Link 
                to="/" 
                className="block text-white hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/Aboutus" 
                className="block text-white hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                About Us
              </Link>
              <Link 
                to="/contactus" 
                className="block text-white hover:text-gray-200"
                onClick={toggleMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
