
"use client";
import React from "react";
import Image from "next/image";

const TopCategories = () => {
  return (
    <div className="bg-white">
      {/* Top Categories Section */}
      <section className="py-16">
        <div className="w-[1177px] mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A0B5B] mb-10">
            Top Categories
          </h2>
          <div className="flex justify-center gap-8">
            {[
              { id: 1, image: "/chair1.png", name: "Mini LCW Chair", price: "$56.00", button: "View All" },
              { id: 2, image: "/chair2.png", name: "Mini LCW Chair", price: "$56.00" },
              { id: 3, image: "/chair3.png", name: "Mini LCW Chair", price: "$56.00" },
              { id: 4, image: "/chair4.png", name: "Mini LCW Chair", price: "$56.00" },
            ].map((category) => (
              <div key={category.id} className="flex flex-col items-center text-center">
                {/* LCW Chair Image Div */}
                <div className="relative bg-[#F7F7F7] w-[269px] h-[269px] rounded-full flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt="picture"
                    width={140}
                    height={140}
                  />
                  {category.button && (
                    <button className="absolute bottom-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-400">
                      {category.button}
                    </button>
                  )}
                </div>
                
                <h3 className="mt-4 font-normal text-[#151875]">{category.name}</h3>
                <p className="text-[#151875] font-bold">{category.price}</p>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div className="w-4 h-4 bg-[#FB2E86] rounded-full mx-1"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full mx-1"></div>
            <div className="w-4 h-4 bg-gray-300 rounded-full mx-1"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopCategories;
