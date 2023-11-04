import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Object from "../Components/Object";
// import all_product from '../Assets/all_product';
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="p-4">
      <div className="relative">
        <img src={props.banner} alt="" className="w-full h-auto" />
        <div className="absolute top-0 left-0 p-4">
          <p className="text-white font-semibold">
            {/* <span className="text-yellow-400">Showing 1-12</span> out of 36 products */}
          </p>
          <div className="text-white font-semibold flex items-center space-x-2">
            Sort by
            <img src={dropdown_icon} alt="" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {all_product.map((object, i) => {
          if (props.category === object.category) {
            return (
              <div key={i} className="border-2 p-4 border-black rounded-md">
                <Object
                  id={object.id}
                  name={object.name}
                  image={object.image}
                  new_price={object.new_price}
                  old_price={object.old_price}
                />
                <p className="text-lg mt-2">Product Description</p>
                <p className="text-sm text-gray-500">Available Sizes: S, M, L</p>
                <p className="text-lg font-semibold text-green-600">
                  $ {object.new_price}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  $ {object.old_price}
                </p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="text-center mt-4 text-blue-600 font-semibold">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
