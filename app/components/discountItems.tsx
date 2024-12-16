
import Image from 'next/image'
import React from 'react'

const DiscountItems = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="w-[1177px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center text-[#1A0B5B] mb-6">
          Discount Item
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center items-center space-x-2 text-[#8A8FB9] font-medium mb-12">
  {["Wood Chair", "Plastic Chair", "Sofa Collection"].map(
    (category, index) => (
      <div key={index} className="flex items-center gap-2">
        <button
          className={`${
            index === 0 ? "text-[#FB2E86] border-b-2 border-[#FB2E86]" : ""
          } hover:text-[#FB2E86] transition duration-300`}
        >
          {category}
        </button>
        {/* Pink Dot Only for "Wood Chair" */}
        {index === 0 && (
          <Image
            src="/pinkyDot.svg"
            alt="Pink Dot"
            width={5}
            height={5}
            className="inline-block"
          />
        )}
      </div>
    )
  )}
</div>

        {/* Content Section */}
        <div className="flex items-center justify-between">
          {/* Text Content */}
          <div className="w-1/2">
            <h3 className="text-2xl font-bold text-[#1A0B5B] mb-4">
              20% Discount Of All Products
            </h3>

            {/* Additional Heading */}
            <p className="text-[#FB2E86] font-semibold mb-4">Eames Sofa Compact</p>

            <p className="text-[#B7BACB] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br />
              feugiat habitasse nec, bibendum condimentum.
            </p>

            {/* List */}
            <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-[#B8B8DC]">
  <li className="flex items-center gap-2">
    <Image
      src="/correctSign.svg"
      alt="Correct Sign"
      width={18}
      height={13}
      className="#7569B2"
    />
    Material expose like metals
  </li>
  <li className="flex items-center gap-2">
    <Image
      src="/correctSign.svg"
      alt="Correct Sign"
      width={18}
      height={13}
      className="#7569B2"
    />
    Clear lines and geometric figures
  </li>
  <li className="flex items-center gap-2">
    <Image
      src="/correctSign.svg"
      alt="Correct Sign"
      width={18}
      height={13}
      className="#7569B2"
    />
    Simple neutral colors
  </li>
  <li className="flex items-center gap-2">
    <Image
      src="/correctSign.svg"
      alt="Correct Sign"
      width={18}
      height={13}
      className="#7569B2"
    />
    Material expose like metals
  </li>
</ul>

            {/* Button */}
            <button className="mt-6 bg-[#FB2E86] text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-[#e02d7c] transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="w-[472px] h-[472px] flex justify-center items-center bg-[#FCECF1] rounded-full">
            <Image
              src="/sofaChair.png"
              alt="Discount Chair"
              width={699}
              height={597}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscountItems

