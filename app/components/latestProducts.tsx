"use client"
import React from 'react'
import Image from 'next/image'
const LatestProducts = () => {
  return (
    <>
      <section className=" w-[1920px] bg-white py-16 px-6">
 
 <div className="w-[1177px] mx-auto">
   <h2 className="text-3xl font-bold text-center text-[#1A0B5B] mb-6">Leatest Products</h2>
   <div className="flex justify-center space-x-4 text-[#8A8FB9] font-medium mb-12">
    {["New Arrival", "Best Seller", "Featured", "Special Offer"].map((category, index) => (
      <button
        key={index}
        className={`${ 
          index === 0 ? "text-[#FB2E86] border-b-2 border-[#FB2E86]" : ""
        } hover:text-[#FB2E86] transition duration-300`}
      >
        {category}
      </button>
    ))}
  </div>
  {/* Products Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { id: 1, image: "/kursi1.png", name: "Comfort Handy Craft", price: "$42.00", oldPrice: "$65.00" },
      { id: 2, image: "/kursi2.png", name: "Comfort Handy Craft", price: "$35.00", oldPrice: "$50.00" },
      { id: 3, image: "/kursi3.png", name: "Comfort Handy Craft", price: "$45.00", oldPrice: "$55.00" },
      { id: 4, image: "/kursi4.png", name: "Comfort Handy Craft", price: "$40.00", oldPrice: "$60.00" },
      { id: 5, image: "/kursi5.png", name: "Comfort Handy Craft", price: "$44.00", oldPrice: "$62.00" },
      { id: 6, image: "/kursi6.png", name: "Comfort Handy Craft", price: "$50.00", oldPrice: "$80.00", },
    ].map((product) => (
      <div key={product.id} className="bg-[#F7F7F7] shadow-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={360}
          height={306}
          
        />
        <div className="p-4 text-center">
          <h3 className="text-lg font-bold text-[#1A0B5B]">{product.name}</h3>
          <div className=" gap text-[#FB2E86] font-semibold text-xl">{product.price}</div>
          <div className="text-[#8A8FB9] line-through">{product.oldPrice}</div>
        </div>
      </div>
    ))}
  </div>
</div>
</section> 
    </>
  )
}

export default LatestProducts

