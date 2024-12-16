    "use client"

{/* Trending Products Section */}
import Image from 'next/image'
import React from 'react'

const TrendingSec = () => {
  return (
    <div>
        <section className="w-full bg-white py-16 px-6">
  <h2 className="text-3xl font-bold text-center text-[#1A0B5B] mb-10">Trending Products</h2>
  <div className="flex justify-center items-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-11">
      {[
        { id: 1, image: "/cantilever1.png", name: "Cantilever Chair", price: "$26.00", price2: "$42.00" },
        { id: 2, image: "/cantilever2.png", name: "Cantilever Chair", price: "$26.00", price2: "$42.00" },
        { id: 3, image: "/cantilever3.png", name: "Cantilever Chair", price: "$26.00", price2: "$42.00" },
        { id: 4, image: "/cantilever4.png", name: "Cantilever Chair", price: "$26.00", price2: "$42.00" },
      ].map((product) => (
        <div
          key={product.id}
          className="w-full max-w-[270px] bg-[#F7F7F7] shadow-lg rounded-lg overflow-hidden text-center p-6 mx-auto"
        >
          {/* Image */}
          <div className="flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.name}
              width={171}
              height={171}
              
            />
          </div>

          {/* Product Name */}
          <h3 className="text-lg font-bold text-[#1A0B5B] mt-4">{product.name}</h3>

          {/* Prices */}
          <div className="flex justify-center items-center gap-2 mt-2">
            <p className="text-[#1A0B5B] font-semibold text-xl">{product.price}</p>
            <p className="text-[#8A8FB9] ">{product.price2}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default TrendingSec
