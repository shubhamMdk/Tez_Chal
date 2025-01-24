// import React from 'react'
// import Navbar from './Navbar'
// import grocery from "../assets/Images/grocery.png";
// import Footer from './Footer';

// function Contactus() {
//   return (
//     <>
//     <Navbar/>
//     <div class=" bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
//     <div class="max-w-6xl mx-auto ">
//       <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//         <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
//           <div class="mb-8">
//             <h2 class="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
//             <p class="text-gray-600">We'd love to hear from you. Send us a message!</p>
//           </div>
          
//           <form class="space-y-6">
//             <div class="space-y-2">
//               <label class="text-sm font-medium text-gray-700">Full Name</label>
//               <div class="relative">
//                 <input 
//                   type="text" 
//                   placeholder="Enter your full name"
//                   class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50"
//                 />
//               </div>
//             </div>
            
//             <div class="space-y-2">
//               <label class="text-sm font-medium text-gray-700">Mobile Number</label>
//               <div class="relative">
//                 <input 
//                   type="tel" 
//                   placeholder="Enter your mobile number"
//                   class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50"
//                 />
//               </div>
//             </div>
//             <div class="space-y-2">
//               <label class="text-sm font-medium text-gray-700">Email Address</label>
//               <div class="relative">
//                 <input 
//                   type="tel" 
//                   placeholder="Enter your email address"
//                   class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50"
//                 />
//               </div>
//             </div>
            
//             <div class="space-y-2">
//               <label class="text-sm font-medium text-gray-700">Message</label>
//               <div class="relative">
//                 <textarea 
//                   placeholder="Write your message here..."
//                   rows="4"
//                   class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50"
//                 ></textarea>
//               </div>
//             </div>
            
            
//             <button 
//               type="submit"
//               class="w-full  bg-[#da2127]  text-white py-3 px-6 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-md"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
        
//         <div class="flex justify-center order-first md:order-last">
//           <div class="relative w-full max-w-md">
//             <div class="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-70 transform -rotate-12"></div>
            
//             <img 
//               src={grocery}
//               alt="Contact illustration" 
//               class="relative w-full h-auto rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <Footer/>

//    </>
    
//   )
// }

// export default Contactus


import React from 'react'
import Navbar from './Navbar'
import grocery from "../assets/Images/grocery.png";
import Footer from './Footer';

function Contactus() {
  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Mobile Image */}
          <div className=" mb-8 w-full">
            <div className="relative  mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-70 "></div>
              <img 
                src={grocery}
                alt="Contact illustration" 
                className="relative  h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 w-full">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Get in Touch</h2>
              <p className="text-gray-600 text-sm md:text-base">We'd love to hear from you. Send us a message!</p>
            </div>
            
            <form className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50 text-sm md:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-gray-700">Mobile Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your mobile number"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50 text-sm md:text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50 text-sm md:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-medium text-gray-700">Message</label>
                <textarea 
                  placeholder="Write your message here..."
                  rows="4"
                  className="w-full px-3 py-2 md:px-4 md:py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-gray-700 bg-gray-50 text-sm md:text-base"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-[#da2127] text-white py-2 md:py-3 px-6 rounded-xl text-base md:text-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 active:scale-[0.98] shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Desktop Image */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full filter blur-3xl opacity-70 transform -rotate-12"></div>
              
              <img 
                src={grocery}
                alt="Contact illustration" 
                className="relative w-full h-auto rounded-2xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
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