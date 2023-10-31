import React from "react";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
const Hero = () => {
  return (
    <div className="bg-pink-50 flex flex-row">
      <div className="bg-pink-50 text-center font-serif justify-center">
        <div className="ml-48 mt-32">
          <p className="text-black w-96 ml-5  text-start text-[60px]">New</p>
          <p className="text-black w-96 ml-5 text-start text-[60px] ">Collections</p>
          <p className="text-black w-96 ml-5 text-start text-[60px]">For Everyone</p>
        </div>
        <div className="">
          <div className="bg-red-500 w-28vw ml-52 text-white py-2 px-4 rounded-full text-2xl">
            Latest Collection
          </div>
          <img src={arrow_icon} alt=" " />
        </div>
      </div>
      <div className="ml-96 w-10vw h-25vh">
        <img src={hero_img} alt=" " className="w-10vw h-25vh" />
      </div>
    </div>
  );
};

export default Hero;
