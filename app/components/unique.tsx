
import Image from 'next/image'
import React from 'react'

const Unique = () => {
  return (
    <div> {/* Unique Features Section */}
          <section className="bg-[#F2F0FF] w-full py-16 px-6">
            <div className="flex flex-col lg:flex-row w-[1177px] mx-auto items-center">
              {/* Image */}
              <div className="w-[481px] h-[449px] flex justify-center items-center bg-[#ECD2FA59] rounded-full relative">
                <Image
                  src="/pleatedSofa.png"
                  alt="Furniture Chair"
                  width={481}
                  height={449}
                  
                />
              </div>
              {/* Content */}
              <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                <p className="uppercase text-sm text-pink-500 font-bold mb-4">Best Furniture For Your Castle...</p>
                <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
                  Unique Features Of Latest & Trending Products
                </h1>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-gray-700">
                    <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                    All frames constructed with hardwood solids and laminates.
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Reinforced with double wood dowels, glue, screw-nails corner blocks, and machine nails.
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Arms, backs, and seats are structurally reinforced.
                  </li>
                </ul>
                <p className="text-xl font-semibold text-[#1A0B5B] mb-2">B&B Italian Sofa</p>
                <p className="text-pink-500 font-bold text-xl mb-4">$32.00</p>
                <button className="bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-pink-400">
                  Add To Cart
                </button>
              </div>
            </div>
          </section>
    
         </div>
  )
}

export default Unique


