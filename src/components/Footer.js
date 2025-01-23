import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Images/logo.png";

function Footer() {
  return (
    <>
     <footer className="w-full bg-white px-8 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description Section */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-red-600 rounded-md flex items-center"> <img
                src={logo}
                alt="Delivery person"
                className="w-[80px] h-auto object-cover object-fit"
              /></div>
            <span className="text-lg font-bold">
             Tez Chal <span className="text-green-600"></span>
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            We deliver convenience and flavor with every click, bringing deliciousness right to your doorstep and making a breeze!
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 flex flex-col">
          <Link to="/" class="text-black-600 hover:text-gray-900">
              Home
            </Link>

            <Link to="/Aboutus" class="text-black-600 hover:text-gray-900">
              About Us
            </Link>

            <Link to="/contactus" class="text-black-600 hover:text-gray-900">
              Contact us
            </Link>
          </ul>
        </div>

        {/* Information Section */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Cancellation & Refunds</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-900 mb-4">Contact Us</h3>
          <div className="space-y-2">
            <p className="text-gray-600">+918981440034</p>
            <p className="text-gray-600 text-sm">(Customer Care<br/>9:00 am TO 9:00 pm)</p>
            <p className="text-gray-600">info@Tezchal.com</p>
            <p className="text-gray-600 text-sm">
              Nirvana Club, At Viva Inn Building, Chawk
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
