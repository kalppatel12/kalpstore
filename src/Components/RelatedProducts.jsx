import React, { useContext } from "react";
// import data_product from "../Assets/data";
import Object from "./Object";
import { ShopContext } from "../Context/ShopContext";
const RelatedProducts = (props) => {
    const {data_product} = useContext(ShopContext);
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold mb-4">Related Products</h1>
        <hr className="border-t-2 border-gray-300 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data_product.map((object, i) => {
          if (props.product === object.category) {
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
      </div>
    </div>
  );
};

export default RelatedProducts;
