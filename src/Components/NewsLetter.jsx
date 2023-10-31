import React from "react";

const NewsLetter = () => {
  return (
    <div className="p-8 text-center bg-pink-100 border-2 border-pink-400 rounded-lg">
      <h1 className="text-4xl font-serif text-black">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-2xl text-gray-700 mt-4">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="mt-6  flex-row items-center">
        <input
          type="email"
          className="w-64 py-2 px-4 border border-gray-400 rounded-lg focus:outline-none"
          placeholder="Your Email id"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full ml-2">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
