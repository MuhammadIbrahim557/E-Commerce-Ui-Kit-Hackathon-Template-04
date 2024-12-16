
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Image from "next/image";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter(); // Initialize useRouter

  // Function to handle navigation
  const navigateTo = (path: string) => {
    router.push(path); // Navigate to the given path
  };

  return (
    <div className="flex w-[1920px] z-10">
      <nav className="bg-white shadow-sm w-[1177px] mx-auto">
        <div className="mx-auto w-[1177px] px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex">
              <span
                className="text-[#0D0E43]"
                style={{
                  fontFamily: "Josefin Sans, sans-serif",
                  fontWeight: 700,
                  fontSize: "34px",
                  lineHeight: "34px",
                  width: "98px",
                  height: "34px",
                  paddingTop: "3px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Hekto
              </span>
            </div>

            {/* Links Section (Center it with Flexbox) */}
            <div className="flex space-x-6 ml-40">
              {/* Home Link */}
              <button
                onClick={() => navigateTo("/")}
                className="text-[#FB2E86] font-medium hover:underline flex items-center"
              >
                Home
                <Image
                  src="/dropdown.svg"
                  alt="Dropdown icon"
                  width={12}
                  height={7}
                  className="flex"
                />
              </button>

              {/* Pages Dropdown */}
              <div className="relative group">
                <button
                  className="text-[#0D0E43] font-medium hover:underline flex items-center"
                >
                  Pages
                </button>
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <button
                    onClick={() => navigateTo("/about")}
                    className="block px-4 py-2 text-[#0D0E43] hover:bg-pink-100"
                  >
                    About
                  </button>
                  <button
                    onClick={() => navigateTo("/contact")}
                    className="block px-4 py-2 text-[#0D0E43] hover:bg-pink-100"
                  >
                    Contact
                  </button>
                </div>
              </div>

              {/* Other Links */}
              <button
                onClick={() => navigateTo("/products")}
                className="text-[#0D0E43] hover:text-pink-500 transition"
              >
                Products
              </button>
              <button
                onClick={() => navigateTo("/blog")}
                className="text-[#0D0E43] hover:text-pink-500 transition"
              >
                Blog
              </button>
              <button
                onClick={() => navigateTo("/shop")}
                className="text-[#0D0E43] hover:text-pink-500 transition"
              >
                Shop
              </button>
            </div>

            <div className="flex items-center w-[317px] h-[40px] ml-auto">
              <input
                type="text"
                className="block w-48 md:w-64 rounded-md border border-gray-300 bg-white py-2 px-3 leading-5 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
              />
              <button className="bg-[#FB2E86] w-[51px] h-[41px] flex justify-center p-2 text-white hover:bg-pink-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
