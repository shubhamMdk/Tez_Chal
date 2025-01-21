


import React from "react";
import Navbar from "./Navbar";
import boy from "../assets/Images/boy.png";
import grocery from "../assets/Images/grocery.png";
import card from "../assets/Images/card.png";
import groww from "../assets/Images/groww.png";
import a1 from "../assets/Images/a1.png";
import a2 from "../assets/Images/a2.png";
import a3 from "../assets/Images/a3.png";
import a4 from "../assets/Images/a4.png";
import Footer from "./Footer";

const Home = () => {
  const categories = [
    {
      title: "Category 1",
      itemCount: "24 items",
      image: a1
    },
    {
      title: "Category 2",
      itemCount: "16 items",
      image: a2
    },
    {
      title: "Category 3",
      itemCount: "32 items",
      image:a3
    },
    {
      title: "Category 4",
      itemCount: "12 items",
      image: a4
    },
    {
      title: "Category 4",
      itemCount: "24 items",
      image: a1
    },
    {
      title: "Category 6",
      itemCount: "16 items",
      image: a2
    },
    {
      title: "Category 7",
      itemCount: "32 items",
      image:a3
    },
    
  ];

  return (
    <><Navbar />
    
    <div className="min-h-screen">
      

      {/* Added max-w-[1920px] and adjusted padding for larger screens */}
      <div className="max-w-[1920px] mx-auto px-6 2xl:px-16">
        {/* Hero Section */}
        <div className="bg-emerald-700 rounded-2xl my-8 p-12 2xl:p-16 relative overflow-hidden min-h-[600px] 2xl:min-h-[800px]">
          <div className="inline-flex items-center bg-emerald-800/50 rounded-full px-3 py-1.5 mb-8">
            <span className="mr-2">🚚</span>
            <span className="text-white text-xs font-medium tracking-wide">
              FREE SHIPPING FEE
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-60  items-center justify-between max-w-[1600px] mx-auto">
            <div className="md:w-1/2 space-y-8 ">
              <h1 className="text-5xl 2xl:text-6xl font-bold text-white leading-tight">
                Make healthy<br /> 
                life with <span className="text-[#CDFF67]">fresh</span><br />
                grocery
              </h1>

              <p className="text-gray-100 text-lg 2xl:text-xl max-w-md">
                Get the best quality and most delicious grocery food in the world,
                you can get them all use our website.
              </p>

              <button className="bg-[#FF6B47] hover:bg-[#FF5A33] text-white px-8 py-3.5 rounded-xl font-semibold text-lg">
                Shop Now
              </button>
            </div>

            <div className="md:w-1/2 relative ">
              <img
                src={boy}
                alt="Delivery person"
                className="w-[500px] h-auto "
              />
              
              <div className="bg-white rounded-2xl p-4 shadow-lg absolute  left-4 bottom-16 flex items-center gap-3">
                <div className="bg-red-500 rounded-full p-2.5">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Fast Delivery</p>
                  <p className="text-sm text-gray-500">Free in local any delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="my-16 2xl:my-24 max-w-[1600px] mx-auto">
          <h2 className="text-3xl 2xl:text-4xl font-bold mb-8 text-gray-800">
            Top Categories
          </h2>

          <div className="flex justify-center">
      <div className="flex flex-row gap-12">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white p-6 2xl:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center">
              <div className=" rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-32 h-full  object-cover"
                />
              </div>
              <h3 className="text-gray-800 font-medium mb-1 2xl:text-lg">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm 2xl:text-base">{category.itemCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>

        {/* Showcase Section */}
        <div className="bg-emerald-800/50 rounded-2xl my-16 2xl:my-24 p-12 2xl:p-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 2xl:gap-16 max-w-[1600px] mx-auto">
            <div className="md:w-1/2 flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 rounded-lg" />
              <img
                src={grocery}
                alt="Fresh vegetables"
                className="rounded-lg w-[400px] h-auto relative z-10"
              />
            </div>

            <div className="md:w-1/2 space-y-8">
              <div>
                <p className="text-red-700 font-bold text-xl 2xl:text-2xl tracking-wide mb-4">
                  SHOWCASE
                </p>
                <h2 className="text-2xl 2xl:text-3xl font-bold text-gray-800 leading-tight mb-4">
                  Best quality grocery<br />
                  just for you.
                </h2>
                <p className="text-gray-500 2xl:text-lg">
                  We prioritize quality in each of our grocery,<br />
                  below are the advantages of our products.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Best service than others",
                  "Use experienced staff",
                  "Userfriendly app",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 2xl:w-3 2xl:h-3 rounded-full bg-red-400" />
                    <span className="text-gray-600 2xl:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-100 rounded-2xl my-16 2xl:my-24 p-12 2xl:p-16">
          <div className="flex flex-col md:flex-row items-center gap-12 2xl:gap-16 max-w-[1600px] mx-auto">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-2xl 2xl:text-3xl font-bold">
                Why should you use our service?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center bg-white rounded-lg p-4 2xl:p-6 shadow-sm">
                  <span className="text-gray-700 2xl:text-lg">We provide the fastest service</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 2xl:p-6 shadow-sm">
                  <span className="text-gray-700 2xl:text-lg">No additional fees for orders</span>
                </div>
                <div className="flex items-center bg-white rounded-lg p-4 2xl:p-6 shadow-sm">
                  <span className="text-gray-700 2xl:text-lg">Fast and reliable delivery</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="bg-emerald-600 rounded-lg p-4">
                <img 
                  src={card} 
                  alt="Service feature"
                  className="rounded-lg w-full max-w-[250px] 2xl:max-w-[300px] h-auto"
                />
              </div>
              <img 
                src={groww} 
                alt="Additional feature"
                className="rounded-lg w-full max-w-[180px] 2xl:max-w-[300px] h-auto absolute right-40 top-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;