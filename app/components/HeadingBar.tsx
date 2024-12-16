//HeadingBar 
"use client";
import Image from "next/image";
import React, { useState } from "react";

const HeadingBar = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);

  return (
    <>
      {/* Container */}
      <div className="h-[44px] bg-[#7e33e0] flex items-center px-4 w-[1920px]">
        {/* Main div */}
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[1177px] mx-auto items-center py-2">
          {/* Left Section: Email and Phone */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            {/* Email */}
            <div className="flex items-center gap-2">
              <Image src="/email.svg" alt="Email icon" width={14} height={12} />
              <p className="text-[#F1F1F1] text-sm md:text-base font-semibold">
                mhhasanul@gmail.com
              </p>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Image src="/phone.svg" alt="Phone icon" width={16} height={16} />
              <p className="text-[#F1F1F1] text-sm md:text-base font-semibold">
                (12345)67890
              </p>
            </div>
          </div>

        

          {/* Right Section: Login, Wishlist, and Cart */}
          <div className="flex justify-center md:justify-end gap-4 md:gap-7 mt-2 md:mt-0">
              {/* Middle Section: Language and Currency Dropdowns */}
          <div className="flex justify-center gap-4 mt-2 md:mt-0">
            {/* Dropdown: Language */}
            <div className="relative">
              <div
                className="flex items-center gap-2 text-[#F1F1F1] cursor-pointer font-semibold"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                English
                <Image
                  src="/dropdown.svg"
                  alt="Dropdown icon"
                  width={16}
                  height={16}
                />
              </div>
              {showLanguageDropdown && (
                <div className="absolute z-10 mt-2 bg-white text-black rounded-md shadow-md">
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold">
                    Urdu
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown: Currency */}
            <div className="relative">
              <div
                className="flex items-center gap-2 text-[#F1F1F1] cursor-pointer font-semibold"
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              >
                USD
                <Image
                  src="/dropdown.svg"
                  alt="Dropdown icon"
                  width={16}
                  height={16}
                />
              </div>
              {showCurrencyDropdown && (
                <div className="absolute z-10 mt-2 bg-white text-black rounded-md shadow-md">
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-semibold">
                    Rupees
                  </div>
                </div>
              )}
            </div>
          </div>
            {/* Login Button */}
            <button className="flex items-center text-white gap-2 font-semibold text-sm md:text-base">
              Login
              <Image src="/user.svg" alt="User icon" width={16} height={16} />
            </button>

            {/* Wishlist Button */}
            <button className="flex items-center text-white gap-2 font-semibold text-sm md:text-base">
              Wishlist
              <Image
                src="/heart.svg"
                alt="Wishlist icon"
                width={14}
                height={14}
              />
            </button>

            {/* Cart Button */}
            <button className="flex items-center text-white gap-2">
              <Image src="/cart.svg" alt="Cart icon" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeadingBar;
