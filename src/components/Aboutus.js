import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FcCellPhone } from "react-icons/fc";
import { LuMapPin } from "react-icons/lu";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import grocery from "../assets/Images/grocery.png";
import a1 from "../assets/Images/a1.png";
import a2 from "../assets/Images/a2.png";
import a3 from "../assets/Images/a3.png";
import { FaRegCreditCard } from "react-icons/fa";
import Footer from "./Footer";
const OrderStep = ({ number, title, description, children }) => (
  <div className="flex flex-col gap-4 p-4 border rounded-lg bg-white">
    <div className="flex items-center gap-2">
      <div className="bg-emerald-100 text-emerald-800 w-8 h-8 rounded flex items-center justify-center font-semibold">
        {String(number).padStart(2, "0")}
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
    {children}
  </div>
);

const TimeSlot = ({ time }) => (
  <div className="p-3 border-b last:border-b-0 text-sm text-gray-700">
    {time}
  </div>
);

function Aboutus() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 w-full bg-white">
          {/* Breadcrumb */}
          <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-gray-600 hover:text-green-600">
                HOME
              </a>
              <span>›</span>
              <a href="/" className="text-gray-600 hover:text-green-600">
                ABOUT US
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-3">
                <div className="bg-[#f6f6f6] p-4 rounded sticky top-4">
                  <h2 className="text-lg mb-4">About TezChal</h2>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-green-600"
                      >
                        - What is TezChal.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-green-600"
                      >
                        - Why shop at TezChal?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-green-600"
                      >
                        - How to order
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-green-600"
                      >
                        - Where we operate
                      </a>
                    </li>
                  </ul>
                  <Link to="/contactus">
                    <div className="mt-6 space-y-3">
                      {["Contact Us"].map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block text-gray-700 hover:text-green-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-9">
                <div className="space-y-8">
                  {/* What is bigbasket.com section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h1 className="text-2xl text-gray-700 mb-4">
                        What is Tez Chal ?
                      </h1>
                      <p className="text-gray-600">
                        TezChal has been created by a veteran and alumni of
                        IIM Calcutta with the objective of providing fresh,
                        high-quality vegetables, fruits, meat, dairy products,
                        and daily-use items that are not available through the
                        CSD canteen. Understanding the challenges faced by
                        defence personnel in accessing these essential items,
                        TezChal aims to make life easier by delivering these
                        products right to their doorsteps in Armed Forces
                        cantonments across the country.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 rounded-lg" />
                      <img
                        src={grocery}
                        alt="Fresh vegetables"
                        className="w-full h-auto rounded-lg relative z-10"
                      />
                    </div>
                  </div>

                  <p className="text-gray-600">
                    
                  </p>

                  <div>
                    <h2 className="text-xl text-gray-700 mb-4">
                      Happy Shopping
                    </h2>
                    <h2 className="text-xl text-gray-700 font-semibold mb-4">
                    What sets Tez Chal apart is our commitment to providing the following benefits:</h2>
                    <div class="container mx-auto px-4 py-8">
        
        <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 class="text-xl font-semibold mb-4 text-green-700">High-Quality Products</h2>
                <p class="text-gray-700">We source fresh produce and daily-use items from trusted local suppliers, ensuring better quality compared to traditional sources.</p>
            </div>
            
            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 class="text-xl font-semibold mb-4 text-green-700">Affordable Pricing</h2>
                <p class="text-gray-700">Our rates are considerably lower, enabling Defence Personnel to save on their grocery bills while enjoying premium quality products.</p>
            </div>
            
            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 class="text-xl font-semibold mb-4 text-green-700">Eco-Friendly Delivery</h2>
                <p class="text-gray-700">We use e-bikes for our delivery services, ensuring minimal environmental impact and promoting sustainability within the community.</p>
            </div>
            
            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 class="text-xl font-semibold mb-4 text-green-700">Community Engagement</h2>
                <p class="text-gray-700">We employ local youth residing within Armed Forces residential complexes to carry out deliveries, providing employment and supporting community security.</p>
            </div>
            
            <div class="md:col-span-2 bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow">
                <h2 class="text-xl font-semibold mb-4 text-green-700">Convenience</h2>
                <p class="text-gray-700">Eliminating grocery shopping hassles, we deliver daily essentials directly to Defence personnel's homes, saving time and enabling more quality family moments before deployments.</p>
            </div>
        </div>
    </div>
                  </div>

                  {/* How do I order section */}
                  <div className="mt-8">
                    <h2 className="text-xl text-gray-700 mb-6">
                      How do I order?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <OrderStep
                        number={1}
                        title="Browse Products"
                        description="Browse TezChal.com for products or use the search feature"
                      >
                        <div className="bg-gray-50 p-4 rounded">
                          <img
                            src={a3}
                            alt="Browse products"
                            className="w-full rounded shadow-sm"
                          />
                        </div>
                      </OrderStep>

                      <OrderStep
                        number={2}
                        title="Add to Basket"
                        description="Add item to your Shopping Basket"
                      >
                        <div className="bg-gray-50 p-4 rounded">
                          <img
                            src={a2}
                            alt="Shopping basket"
                            className="w-full rounded shadow-sm"
                          />
                        </div>
                      </OrderStep>

                      <OrderStep
                        number={3}
                        title="Choose Delivery Time"
                        description="Choose a convenient delivery time from our 4 Slots* a day"
                      >
                        <div className="bg-gray-50 rounded">
                          {[
                            "7:00 AM - 9:30 AM",
                            "9:30 AM - 12:00 PM",
                            "5:00 PM - 7:30 PM",
                            "7:30 PM - 10:00 PM",
                          ].map((time, i) => (
                            <TimeSlot key={i} time={time} />
                          ))}
                          <p className="text-xs text-gray-500 p-2">
                            *Slot timings may vary across cities
                          </p>
                        </div>
                      </OrderStep>

                      <OrderStep
                        number={4}
                        title="Payment Options"
                        description="Select suitable payment option(Cash, Sodexo, Credit Card)"
                      >
                        <div className="space-y-4">
                          <div className="p-3 bg-gray-50 rounded text-gray-700">
                            Cash on Delivery
                          </div>
                          <div className="p-3 bg-gray-50 rounded text-gray-700 flex gap-2">
                            <div className="flex gap-2">
                              <FaRegCreditCard className="w-6 h-6 text-blue-600" />
                            </div>
                            <span>Cards</span>
                          </div>
                          <div className="p-3 bg-gray-50 rounded text-gray-700">
                            Coupons
                          </div>
                        </div>
                      </OrderStep>

                      <OrderStep
                        number={5}
                        title="Home Delivery"
                        description="Your products will be home-delivered as per your order"
                      >
                        <div className="bg-gray-50 p-4 rounded">
                          <img
                            src={a1}
                            alt="Delivery van"
                            className="w-full rounded shadow-sm"
                          />
                        </div>
                      </OrderStep>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
