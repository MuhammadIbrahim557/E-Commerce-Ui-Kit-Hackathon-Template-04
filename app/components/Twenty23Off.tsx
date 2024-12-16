

import Image from 'next/image';
import React from 'react';

const Twenty23Off = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="w-[1177px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6">
        {/* Left Card */}
        <div className="bg-[#F6F7FB] p-6 flex flex-col rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#1A0B5B] mb-2">
            23% off in all products
          </h3>
          <a
            href="#"
            className="text-[#FB2E86] font-semibold underline hover:underline mb-4"
          >
            Shop Now
          </a>
          <div className="flex justify-end w-[420px] h-[270px]">
            <Image
              src="/clock.png" 
              alt="clock img"
              width={213}
              height={207}
            />
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-[#EFF2F8] p-6 flex flex-col rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[#1A0B5B] mb-2">
            23% off in all products
          </h3>
          <a
            href="#"
            className="text-[#FB2E86] font-semibold underline hover:underline mb-4"
          >
            View Collection
          </a>
          <div className="flex justify-end items-center space-x-4">
            <div className="w-[420px] h-[270px] flex-shrink-0">
              <Image
                src="/furniture.png" 
                alt="Collection Discount"
                width={312}
                height={173}
              />
            </div>
            <div className="flex flex-col justify-start  space-y-2 ">
             
              <div className="flex w-[170px] h-[74px]">
                <Image
                  src="/executiveSeat1.png" 
                  alt="Chair 1"
                  width={64}
                  height={71}
                />
                <p className='text-[#151875]'>Executive Seat chair
              <span className='text-[#151875] line-through'> $32.00</span>
               </p>
              </div>
              <div className="flex w-[170px] h-[74px]">
                <Image
                  src="/executiveSeat2.png" 
                  alt="Chair 2"
                  width={67}
                  height={67}
                />
             <p className='text-[#151875]'>Executive Seat chair
              <span className='text-[#151875] line-through'> $32.00</span>
               </p>
              </div>
            
              <div className="flex w-[170px] h-[74px]">
                <Image
                  src="/executiveSeat3.png" 
                  alt="Chair 3"
                  width={67}
                  height={67}
                />
                <p className='text-[#151875]'>Executive Seat chair
              <span className='text-[#151875] line-through'> $32.00</span>
               </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Twenty23Off;
