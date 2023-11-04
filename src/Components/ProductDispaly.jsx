import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import stardull_icon from "../Assets/star_dull_icon.png";
import DescriptionBox from "./DescriptionBox";
import { ShopContext } from "../Context/ShopContext";
const ProductDispaly = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="p-4">
      <div className="md:flex md:space-x-6">
        <div className="md:w-2/3 flex flex-row">
          <div className="grid grid-row-4 gap-4">
            <div>
              <img
                src={product.image}
                alt="w-[175px] h-[209px]"
                className="w-36 h-44"
              />
            </div>
            <div>
              <img src={product.image} alt="" className="w-36 h-44" />
            </div>
            <div>
              <img src={product.image} alt="" className="w-36 h-44" />
            </div>
            <div>
              <img src={product.image} alt="" className="w-36 h-44" />
            </div>
          </div>
          <img src={product.image} alt="" className="w-full" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center space-x-2 mb-2">
            <img src={star_icon} alt="" className="w-5 h-5" />
            <img src={star_icon} alt="" className="w-5 h-5" />
            <img src={star_icon} alt="" className="w-5 h-5" />
            <img src={star_icon} alt="" className="w-5 h-5" />
            <img src={stardull_icon} alt="" className="w-5 h-5" />
            <p>(10000)</p>
          </div>
          <div className="mb-4">
            <div className="text-2xl font-bold">{product.new_price}</div>
            <div className="text-sm line-through text-gray-500">
              {product.old_price}
            </div>
          </div>
          <div className="mb-4">
            <p>Product Description</p>
          </div>
          <div className="mb-4">
            <h1 className="text-lg font-semibold">Select Size</h1>
            <div className="flex space-x-2">
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                S
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                M
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                L
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                XL
              </div>
              <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                XXL
              </div>
            </div>
          </div>
          <button onClick={()=>addToCart(product.id)} className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full">
            ADD TO CART
          </button>
          <p>
            <span className="font-semibold">Category:</span> Women, T-shirt, Crop,
            Top
          </p>
          <p>
            <span className="font-semibold">Tags:</span> Modern, Latest
          </p>
        <DescriptionBox/>
        </div>
      </div>
    </div>
  );
};

export default ProductDispaly;
