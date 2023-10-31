import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-pink-50 py-6">
  <div className="flex flex-col items-center mx-4">
    <img src={footer_logo} alt="Footer Logo" className="h-12 w-12" />
    <p className="text-2xl font-serif text-black mt-2">SHOpPER</p>
  </div>
  <ul className="flex flex-row  items-center mx-4">
    <li className="text-lg m-3 text-black">Company</li>
    <li className="text-lg m-3 text-black">Products</li>
    <li className="text-lg m-3 text-black">Offices</li>
    <li className="text-lg m-3 text-black">About</li>
    <li className="text-lg m-3 text-black">Contact</li>
  </ul>
  <div className="flex mx-4">
    <div className="mx-2">
      <img src={instagram_icon} alt="Instagram" className="h-6 w-6" />
    </div>
    <div className="mx-2">
      <img src={pinterest_icon} alt="Pinterest" className="h-6 w-6" />
    </div>
    <div className="mx-2">
      <img src={whatsapp_icon} alt="WhatsApp" className="h-6 w-6" />
    </div>
  </div>
  <div className="mx-4 mt-5">
    <hr className="border border-black" />
    <p className="text-sm text-gray-500">Copyright © 2023 - All rights are reserved</p>
  </div>
</div>

  );
}

export default Footer;
