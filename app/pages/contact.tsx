"use client";
import React from "react";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-[#F9F8FE]">
      {/* Header Section */}
      <section className="bg-[#F5F5F5] py-10">
        <div className="w-[1177px] mx-auto ">
          <h1 className="text-3xl font-bold text-[#1A0B5B]">Contact Us</h1>
          <p className="text-[#8A8FB9] mt-2">
            Home <span className="text-[#FB2E86]">Pages</span> Contact us
          </p>
        </div>
      </section>

      {/* Information and Contact Way Section */}
      <section className="py-16">
        <div className="w-[1177px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Information About Us */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A0B5B] mb-4">
              Information About us
            </h2>
            <p className="text-[#8A8FB9] leading-7 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices mattis aliquam, malesuada diam sit. <br /> malesuada erat
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae
              lobortis quis bibendum quam.
            </p>
            <div className="flex gap-4">
              <div className="w-6 h-6 bg-[#FB2E86] rounded-full"></div>
              <div className="w-6 h-6 bg-[#FFB265] rounded-full"></div>
              <div className="w-6 h-6 bg-[#98D8D3] rounded-full"></div>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A0B5B] mb-4">
              Contact Way
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-8 h-8 bg-[#FB2E86] rounded-full mr-4"></span>
                E-Mail: shop@store.com, Tel: 877-67-88-99
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-[#FFB265] rounded-full mr-4"></span>
                Support Forum For over 24hr
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-[#98D8D3] rounded-full mr-4"></span>
                20 Margaret st, London Great Britain, 3NM98-LK
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 bg-[#98D8D3] rounded-full mr-4"></span>
                Free standard shipping on all orders
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16">
        <div className="w-[1177px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#1A0B5B] mb-4">Get In Touch</h2>
            <p className="text-[#8A8FB9] leading-7 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
              ultrices tristique amet erat vitae eget dolor los vitae lobortis quis
              bibendum quam.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="border border-[#C9CBE2] p-3 rounded-lg w-full"
                />
                <input
                  type="email"
                  placeholder="Your E-mail*"
                  className="border border-[#C9CBE2] p-3 rounded-lg w-full"
                />
              </div>
              <input
                type="text"
                placeholder="Subject*"
                className="border border-[#C9CBE2] p-3 rounded-lg w-full"
              />
              <textarea
                placeholder="Type Your Message*"
                rows={5}
                className="border border-[#C9CBE2] p-3 rounded-lg w-full"
              ></textarea>
              <button className="bg-[#FB2E86] text-white px-8 py-3 rounded-lg text-lg shadow-lg">
                Send Mail
              </button>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <Image
              src="/contact.png"
              alt="Contact Illustration"
              width={570}
              height={409}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
