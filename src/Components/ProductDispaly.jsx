import React from "react";
import star_icon from "../Assets/star_icon.png";
import stardull_icon from "../Assets/star_dull_icon.png";
const ProductDispaly = (props) => {
  const { product } = props;
  return (
    <div class="p-4">
      <div class="md:flex md:space-x-6">
        <div class="md:w-2/3 flex flex-row">
          <div class="grid grid-row-4 gap-4">
            <div>
              <img
                src={product.image}
                alt="w-[175px] h-[209px]"
                class="w-36 h-44"
              />
            </div>
            <div>
              <img src={product.image} alt="" class="w-36 h-44" />
            </div>
            <div>
              <img src={product.image} alt="" class="w-36 h-44" />
            </div>
            <div>
              <img src={product.image} alt="" class="w-36 h-44" />
            </div>
          </div>
          <img src={product.image} alt="" class="w-full" />
        </div>
        <div class="md:w-2/3">
          <h1 class="text-2xl font-bold mb-2">{product.name}</h1>
          <div class="flex items-center space-x-2 mb-2">
            <img src={star_icon} alt="" class="w-5 h-5" />
            <img src={star_icon} alt="" class="w-5 h-5" />
            <img src={star_icon} alt="" class="w-5 h-5" />
            <img src={star_icon} alt="" class="w-5 h-5" />
            <img src={stardull_icon} alt="" class="w-5 h-5" />
            <p>(10000)</p>
          </div>
          <div class="mb-4">
            <div class="text-2xl font-bold">{product.new_price}</div>
            <div class="text-sm line-through text-gray-500">
              {product.old_price}
            </div>
          </div>
          <div class="mb-4">
            <p>Product Description</p>
          </div>
          <div class="mb-4">
            <h1 class="text-lg font-semibold">Select Size</h1>
            <div class="flex space-x-2">
              <div class="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                S
              </div>
              <div class="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                M
              </div>
              <div class="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                L
              </div>
              <div class="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                XL
              </div>
              <div class="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                XXL
              </div>
            </div>
          </div>
          <button class="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full">
            ADD TO CART
          </button>
          <p>
            <span class="font-semibold">Category:</span> Women, T-shirt, Crop,
            Top
          </p>
          <p>
            <span class="font-semibold">Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDispaly;
