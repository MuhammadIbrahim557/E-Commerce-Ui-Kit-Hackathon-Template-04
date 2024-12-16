import Image from 'next/image'
import React from 'react'

const FeaturedSec = () => {
  return (
      <div>
        {/* Featured Products Section */}
             <section className="w-[1920px] mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
               Featured Products
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-[1177px] mx-auto">
               {/* Product Card 1 */}
               <div className="bg-[#F7F7F7] shadow-lg rounded-lg overflow-hidden w-[270px] h-[236]">
                <Image
                  src="/chair1.png"
                  alt="Chair"         
                  width={270}
                  height={236}
                />
                <div className="p-4 flex flex-col gap-3 items-center">
                  <h3 className="text-lg font-bold text-gray-800">
                    Cantilever Chair
                  </h3>
                  <Image
                  src="/threeDots.svg"
                  alt="three dots"                                 
                  width={52}
                  height={4}
                />
                  <p className="text-gray-500 mt-2">Code: Y523201</p>
                  <p className="text-pink-500 font-bold mt-2">$42.00</p>          
                </div>
              </div>
    
              {/* Product Card 2 */}
              <div className="bg-[#F7F7F7] flex flex-col items-center shadow-lg rounded-lg overflow-hidden w-[270px] ">
                <Image
                  src="/chair2.png"
                  alt="Chair"
                  width={178}
                  height={178} 
                />
                  <button className="flex items-center mt-4 bg-[#08d15f] text-white px-4 py-2 rounded-lg hover:bg-pink-400">
                    View Details
                  </button>
                <div className="flex flex-col gap-3 items-center mt-3 p-4 bg-[#2f1ac4] w-[270px] h-[180px]">
                  <h3 className="text-lg font-bold text-white">
                    Cantilever Chair
                  </h3>
                  <Image
                  src="/threeDots.svg"
                  alt="three dots" 
                  width={52}
                  height={4}
                />
                  <p className="text-white mt-2">Code: Y523201</p>
                  <p className="text-white font-bold mt-2">$42.00</p>
                </div>
              </div>
    
              {/* Product Card 3 */}
              <div className="bg-[#F7F7F7] shadow-lg rounded-lg overflow-hidden w-[270px] ">
                <Image
                  src="/chair3.png"
                  alt="Elegant Chair"
                  width={270}
                  height={236}
                />
                <div className="p-4 flex flex-col gap-3 items-center">
                  <h3 className="text-lg font-bold text-gray-800">
                  Cantilever chair
                  </h3>
                  <Image
                  src="/threeDots.svg"
                  alt="three dots"                                 
                  width={52}
                  height={4}
                />
                  <p className="text-gray-500 mt-2">Code: Y523201</p>
                  <p className="text-pink-500 font-bold mt-2">$42.00</p>
                  
                </div>
              </div>
    
              {/* Product Card 4 */}
              <div className="bg-[#F7F7F7] shadow-lg rounded-lg overflow-hidden w-[270px] ">
                <Image
                  src="/chair4.png"
                  alt="Modern Chair"
                  width={270}
                  height={236}
                />
                <div className=" flex flex-col gap-3 items-center p-4">
                  <h3 className="text-lg font-bold text-gray-800">Cantilever chair</h3>
                  <Image
                  src="/threeDots.svg"
                  alt="three dots"                                 
                  width={52}
                  height={4}
                />
                  <p className="text-gray-500 mt-2">Code: Y523201</p>
                  <p className="text-pink-500 font-bold mt-2">$42.00</p>
                  <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-400">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </section>   
    </div>
  )
}

export default FeaturedSec