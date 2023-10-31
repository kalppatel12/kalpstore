import React from "react";
import new_collection from "../Assets/new_collections";
import Object from "./Object";
const NewCollections = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-serif text-black">NEW COLLECTIONS</h1>
      <hr className="border-2 border-black rounded-full mx-auto my-4 w-32" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {new_collection.map((object, i) => {
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
        })}
      </div>
    </div>
  );
};

export default NewCollections;
