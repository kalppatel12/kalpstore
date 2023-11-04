import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
const Navbar = () => {
    const [menu,setMenu] = useState("Shop");
    // const [item,setItem] = useState(getTotalCartItems());
    const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className="">
      <div className="flex items-center justify-between p-4 border-b border-red-500">
        <div className="flex items-center">
          <div className="mr-8 flex items-center">
            <img src={logo} alt="Logo" className="w-24 h-24" />
            <p className="ml-2 text-3xl font-bold">SHOPPER</p>
          </div>
          <ul className="flex space-x-8 text-2xl">
          <Link to="/shop" className="text-red-500"><li className="" onClick={()=>{setMenu("Shop")}}>Shop</li></Link>
            <li className="" onClick={()=>{setMenu("Men")}}>  <Link className="text-red-500" to="/mens">Mens</Link></li>
            <li className="" onClick={()=>{setMenu("Women")}}><Link className="text-red-500" to="/womens">Womens</Link></li>
            <li className="" onClick={()=>{setMenu("Kids")}}> <Link className="text-red-500" to="/kids">Kids</Link></li>
          
        </ul> 
        </div>
        <div className="flex items-center space-x-4">
          <Link className="text-red-500" to="/login">
          <button className="text-2xl font-bold border border-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white">
            Login
          </button>
          </Link>
          <Link className="text-red-500"    to="/cart">
          <img src={cart_icon} alt="Cart" className="w-8 h-8"/>
          <div>{getTotalCartItems}</div>
          </Link>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Navbar;
