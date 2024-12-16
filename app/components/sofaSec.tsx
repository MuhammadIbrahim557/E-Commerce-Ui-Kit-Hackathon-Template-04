

import Image from "next/image";
import React from "react";

const SofaSec = () => {
  return (
    <div className="bg-[#F2F0FF] w-[1920px] h-[764px] relative overflow-hidden z-10">
      {/* Hanging Light */}
      <div className="absolute top-[-2px] left-[50px] z-20">
        <Image
          src="/light.png"
          alt="Hanging Light"
          width={387}
          height={387}
        />
      </div>

      {/* Pink Dot */}
      <div className="absolute top-[480px] left-[140px] z-20">
        <Image
          src="/pinkyDot.svg"
          alt="Pink Dot"
          width={10}
          height={10}
        />
      </div>

      {/* Centered Content  lg:w-1/2 px-6*/}
      <div className="w-[1177px] mx-auto flex flex-col-reverse lg:flex-row items-center py-16 relative z-10">
        {/* Left Content */}
        <div>
          <p className="uppercase text-sm text-pink-500 font-bold">
            Best Furniture For Your Castle...
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mt-4 ">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="mt-6 text-[#8A8FB9] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <button className="w-[163px] h-[50px] mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-pink-400 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Content - Sofa */}
        <div className="relative lg:w-1/2 flex justify-center items-center z-10">
          <div className="w-[706px] h-[689px] bg-[#ECD2FA59] rounded-full flex justify-center items-center">
            <Image
              src="/sofa.png"
              alt="Sofa Image"
              width={629}
              height={629}
            />
          </div>

          {/* Discount Badge */}
          <div className="absolute right-[-40px] top-[100px] transform -translate-y-1/2 w-[120px] h-[120px] flex items-center justify-center bg-[#00c1fe] rounded-full shadow-lg">
            <span className="text-white font-bold text-2xl ">50%<br />off</span>
          </div>
        </div>
      </div>

      {/* Decorative Rolling Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src="/rollingDots.svg"
          alt="Rolling Dots"
          width={67}
          height={16}
        />
      </div>
    </div>
  );
};

export default SofaSec;
