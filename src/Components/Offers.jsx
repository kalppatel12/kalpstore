import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between bg-pink-50 p-8">
      <div className="text-center ml-32 md:text-left">
        <h1 className="text-5xl  font-serif text-black">Exclusive</h1>
        <h1 className="text-5xl font-serif text-black">Offers For You</h1>
        <p className="text-gray-700 text-4xl">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 w-96 px-4 rounded-full mt-4">
          Check Now
        </button>
      </div>
      <div className="mt-4 md:mt-0">
        <img src={exclusive_image} alt="Exclusive Offer" />
      </div>
    </div>
  );
};

export default Offers;
