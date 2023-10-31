import React from "react";
import data_product from "../Assets/data";
import Object from "./Object";
const Popular = () => {
  return (
    <div className=' text-center'>
  <h1 className='text-4xl font-serif mt-16'>POPULAR IN WOMEN</h1>
  <hr className='border-2 border-black rounded-full mx-auto my-4 w-96' />

  <div className='grid grid-cols-4 gap-4'>
    {data_product.map((object, i) => (
      <div key={i} className='border-2 p-4 border-black rounded-md'>
        <Object
          id={object.id}
          name={object.name}
          image={object.image}
          new_price={object.new_price}
          old_price={object.old_price}
        />
        <p className='text-lg mt-2'>Product Description</p>
        <p className='text-sm text-gray-500'>Available Sizes: S, M, L</p>
        <p className='text-lg font-semibold text-green-600'>$ {object.new_price}</p>
        <p className='text-sm text-gray-400 line-through'>$ {object.old_price}</p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Popular;
