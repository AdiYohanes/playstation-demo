import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Arrow icon for each item
import { SiPlaystation } from "react-icons/si"; // PlayStation icon for the title

const PRICELIST = [
  {
    id: 1,
    model: "PlayStation 4",
    description:
      "This is a place for you to grab a PlayStation, dive into epic games, and play without limits—no commitments, just pure gaming joy!",
  },
  {
    id: 2,
    model: "PlayStation 5",
    description:
      "Experience the next level of gaming with the PlayStation 5, featuring ultra-fast load times, stunning graphics, and a revolutionary controller.",
  },
  {
    id: 3,
    model: "PlayStation 5 Digital Edition",
    description:
      "All the power of PlayStation 5, without the disc drive, for a more streamlined gaming experience.",
  },
];

const Pricelist = () => {
  return (
    <div className="py-20 px-4 bg-gray-100">
      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="inline-block py-2 px-6 rounded-full mb-4 ">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-minecraft  relative z-10">
            Pricelist
          </h1>
        </div>
      </div>

      {/* Pricelist Items */}
      <div className="space-y-8">
        {PRICELIST.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-6 border-4 border-[#967515] rounded-md bg-[#faf7d1] hover:bg-[#f1e6a6] hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <SiPlaystation size={40} className="text-[#967515]" />
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-minecraft text-[#967515]">
                  {item.model}
                </h2>
                <p className="text-lg text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaArrowRight size={24} className="text-[#967515]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricelist;
