// pages/about.js

import Image from "next/image";

export default function AboutUs() {
  return (
    <div className=" ">
      {/* Header Section */}
      <section className="bg-[#F6F5FF] py-10">
        <div className="w-[1177px] mx-auto ">
          <h1 className="text-3xl font-bold text-[#1A0B5B]">About Us</h1>
          <p className="text-[#8A8FB9] mt-2">
            Home.Pages.<span className="text-[#FB2E86]">About us</span>
          </p>
        </div>
      </section>

      {/* Business History Section */}
      <section className="w-[1177px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-96">
          <Image
            src="/about.png"
            alt="Business History"
           width={570}
           height={409}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Know About Our Ecommerce Business, History
          </h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor lobortis quis
            bibendum quam.
          </p>
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Features</h2>
        <div className="w-[1177px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🚚", title: "Free Delivery" },
            { icon: "💵", title: "100% Cash Back" },
            { icon: "🎯", title: "Quality Product" },
            { icon: "📞", title: "24/7 Support" },
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex bg-white py-12">
        <div className="text-center mb-12">
          <h1 className="mb-24 text-6xl font-bold text-gray-800 justify-center">Our Client Say!</h1>
          <div className="w-[689px] mx-auto flex gap-3 items-center justify-center ">
              <div className=" flex gap-2">
                <Image
                  src="/client1.png"
                  alt="Client"
                  height={55}
                  width={55}
                />
                <Image
                  src="/client2.png"
                  alt="Client"
                  height={55}
                  width={55}
                />
                <Image
                  src="/client3.png"
                  alt="Client"
                  height={55}
                  width={55}
                />
              </div>
        </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Selina Gomez
                </h3>
                <p className="text-gray-600 text-sm">Ceo At Webecy Digital</p>
        <div className="w-[1920px] text-center">
        
              <div>
          <div className="mx-auto  bg-white shadow-md w-[689px] mt-5">
                <p className="text-gray-600 mb-6 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                  vitae a enim nunc, sed sapien egestas ac nam. Tristique
                  ultrices dolor aliquam lacus volutpat praesent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
