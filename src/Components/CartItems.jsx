import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg">
        <hr className="my-4" />
        {all_product.map((e) => {
          const quantity = cartItems[e.id];
          if (quantity > 0) {
            const totalPrice = e.new_price * quantity;

            return (
              <div
                key={e.id}
                className="flex items-center space-x-4 p-4 border-b border-gray-300"
              >
                <img className="w-16 h-16 m-4" src={e.image} alt={e.name} />
                <p className="text-lg m-4">{e.name}</p>
                <p className="text-lg m-4">${e.new_price}</p>
                <button className="bg-blue-500 text-white px-2 py-1">
                  {quantity}
                </button>
                <p className="text-lg m-4">${totalPrice}</p>
                <img
                  className="w-6 h-6 m-4 cursor-pointer"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt={`Remove ${e.name} from cart`}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="mt-4 p-4">
        <h1 className="text-lg font-semibold">Cart Totals</h1>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <div>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <p>Total</p>
              <p>${0}</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm">If you have a promo code, enter it here</p>
          <div className="flex items-center">
            <input
              className="border border-gray-300 rounded-l-md p-2"
              placeholder="Enter code"
            />
            <button className="bg-blue-500 text-white rounded-r-md px-4 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
