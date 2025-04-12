import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// Sample Reviews Data
const REVIEWS = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et efficitur laoreet.",
    name: "John Doe",
    position: "CEO, Company X",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et efficitur laoreet.",
    name: "Jane Smith",
    position: "Marketing Director, Company Y",
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et efficitur laoreet.",
    name: "Emily Johnson",
    position: "Software Engineer, Company Z",
  },
  {
    id: 4,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et efficitur laoreet.",
    name: "Michael Brown",
    position: "Product Manager, Company W",
  },
  {
    id: 5,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et efficitur laoreet.",
    name: "Olivia Green",
    position: "HR Manager, Company V",
  },
  {
    id: 6,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et efficitur laoreet.",
    name: "James Lee",
    position: "Lead Developer, Company U",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next review
  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % REVIEWS.length);
  };

  // Move to the previous review
  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + REVIEWS.length) % REVIEWS.length
    );
  };

  return (
    <div className="py-20 px-4 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="inline-block py-2 px-6 rounded-full mb-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-minecraft relative z-10 text-[#b99733]">
            Customer Reviews
          </h1>
        </div>
      </div>

      {/* Carousel Container with Grid Layout */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
        {/* Grid Layout for Reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Loop through 3 reviews at a time */}
          {REVIEWS.slice(currentIndex, currentIndex + 3).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-center p-6 border-4 border-[#967515] rounded-md bg-[#faf7d1] shadow-xl transition-transform transform"
            >
              {/* Quote */}
              <div className="flex justify-center text-[#967515] mb-6">
                <FaQuoteLeft size={16} className="mr-2" />
                <span className="font-[Minecraft] text-xl sm:text-2xl lg:text-3xl">
                  Quote
                </span>
                <FaQuoteRight size={16} className="ml-2" />
              </div>

              <p className="text-lg text-gray-700 text-center mb-4 font-[Minecraft]">
                {item.quote}
              </p>

              <div className="text-center mt-6 font-[Minecraft] text-xl">
                <div className="font-bold">{item.name}</div>
                <div className="text-gray-600">{item.position}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Arrows */}
        <div
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl sm:text-4xl text-[#967515] hover:text-[#b99733] transition-all duration-300 cursor-pointer"
          onClick={prevReview}
          style={{ left: "-50px" }}
        >
          <FaArrowLeft />
        </div>
        <div
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl sm:text-4xl text-[#967515] hover:text-[#b99733] transition-all duration-300 cursor-pointer"
          onClick={nextReview}
          style={{ right: "-50px" }}
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
