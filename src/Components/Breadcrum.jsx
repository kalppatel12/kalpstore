import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div>
      <div class="flex items-center space-x-2 text-sm text-gray-600">
        <span>Home</span>
        <img src={arrow_icon} alt="" class="w-4 h-4" />
        <span>Shop</span>
        <img src={arrow_icon} alt="" class="w-4 h-4" />
        <span>{product.category}</span>
        <img src={arrow_icon} alt="" class="w-4 h-4" />
        <span>{product.name}</span>
      </div>
    </div>
  );
};

export default Breadcrum;
