
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#eeeffb] text-gray-800 w-full h-[479px]">
      <div className="w-[1177px] mx-auto flex flex-col justify-between h-full py-8">
        {/* Hekto Section */}
        <div className="flex justify-between gap-20">
          {/* Hekto */}
          <div className="w-1/4 my-14">
            <h1 className="text-3xl font-bold mb-6">Hekto</h1>
            <div className="flex items-center mb-6 ">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="px-4 py-2 w-[200px] border border-gray-300 rounded-l-md focus:outline-none"
              />
               <button className= "w-[135px] h-[39px] bg-[#FB2E86] font-medium text-[#EEEFFB] hover:bg-pink-400 transition duration-300">
            Sign Up
          </button>
            </div>
            <p className="text-sm font-medium mb-2">Contact Info</p>
            <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>

          {/* Categories */}
          <div className="w-1/4 ">
            <h2 className="text-lg font-bold my-8">Categories</h2>
            <ul className="font-normal text-[#9196AA]  space-y-3 text-base">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="w-1/4">
            <h2 className=" text-lg font-bold my-8 ">Customer Care</h2>
            <ul className="font-normal text-[#9196AA] space-y-3 text-base">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div className="w-1/4">
            <h2 className="text-lg font-bold my-8">Pages</h2>
            <ul className="font-normal text-[#9196AA] space-y-3 text-base">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-[1920px] h-[53px] bg-[#e7e4f8] flex justify-between items-center px-8">
        <p className=" w-[1177px] mx-auto text-xs text-gray-600 flex justify-center">©Webecy - All Rights Reserved</p>
        <div className=" w-[1177px] mx-auto flex justify-center gap-4">
          <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
          <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
          <Image src="/twitter.svg" alt="Twitter" width={20} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;



