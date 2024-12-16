
import React from "react";
import Image from "next/image";

const blogData = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top esssential Trends in 2021",
    description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    imageUrl: "/blog1.png", // Replace with actual image path
  },
  {
    id: 2,
    author: "Surfauxion",
    date: "21 August,2020",
    title: "Top essential trends in 2021",
    description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    imageUrl: "/blog2.png", // Replace with actual image path
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August,2020",
    title: "Top esssential Trends in 2021",
    description: "More off this less hello samlande lied much over tightly circa horse taped mightly",
    imageUrl: "/blog3.png", // Replace with actual image path
  },
];

const LatestBlog = () => {
  return (
    <section className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#1A0B5B] text-center mb-10">
          Latest Blog
        </h2>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
           <div
           key={blog.id}
           className="shadow-lg p-4 bg-white rounded-lg transition duration-300"
         >
         
              {/* Blog Image */}
              <div className="relative w-[370px] h-[252px] mb-4">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              {/* Blog Content */}
              <div>
                {/* Author and Date */}
                <div className="flex items-center gap-2 text-[#151875] text-sm mb-2">
                  <span>✒️ {blog.author}</span>
                  <span>📅 {blog.date}</span>
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-2 ${
                    index === 1 ? "text-[#FB2E86]" : "text-[#1A0B5B]"
                  }`}
                >
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-[#B7BACB] text-sm mb-4">{blog.description}</p>

                {/* Read More */}
                <a
                  href="#"
                  className={`text-sm font-medium ${
                    index === 1 ? "text-[#FB2E86]" : "text-[#1A0B5B]"
                  } hover:underline`}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlog;
