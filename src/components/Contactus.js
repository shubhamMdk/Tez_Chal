import React from 'react'
import Navbar from './Navbar'
import grocery from "../assets/Images/grocery.png";
import Footer from './Footer';

function Contactus() {
  return (
    <>
    <Navbar/>
    <div class=" bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
          <div class="mb-8">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
            <p class="text-gray-600">We'd love to hear from you. Send us a message!</p>
          </div>
          
          <form class="space-y-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Full Name</label>
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50"
                />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Mobile Number</label>
              <div class="relative">
                <input 
                  type="tel" 
                  placeholder="Enter your mobile number"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50"
                />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-medium text-gray-700">Message</label>
              <div class="relative">
                <textarea 
                  placeholder="Write your message here..."
                  rows="4"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50"
                ></textarea>
              </div>
            </div>
            
            <button 
              type="submit"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div class="flex justify-center order-first md:order-last">
          <div class="relative w-full max-w-md">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-70 transform -rotate-12"></div>
            
            <img 
              src={grocery}
              alt="Contact illustration" 
              class="relative w-full h-auto rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>

   </>
    
  )
}

export default Contactus
