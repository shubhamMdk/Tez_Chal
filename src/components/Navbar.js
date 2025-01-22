import React from "react";
import { Link } from "react-router-dom";
import grocery from "../assets/Images/grocery.png";
import logo from "../assets/Images/logo.png";

function Navbar() {
  return (
    <nav class="bg-[#da2127] py-4 px-6 shadow-sm ">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
          <img
                src={logo}
                alt="Delivery person"
                className="w-[115px] h-auto object-cover flex "
              />
          </div>

          <div class="hidden md:flex text-white font-bold space-x-16 ">
            <Link to="/" class="text-black-600 hover:text-gray-900">
              Home
            </Link>

            <Link to="/Aboutus" class="text-black-600 hover:text-gray-900">
              About Us
            </Link>

            <Link to="/contactus" class="text-black-600 hover:text-gray-900">
              Contact us
            </Link>
          </div>

          <div class="md:hidden">
            <button class="text-gray-600 hover:text-gray-900">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
