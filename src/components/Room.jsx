import React from "react";

const ROOMS = [
  {
    id: 1,
    category: "Regular",
    images: "/images/rooms/reguler.png",
    description:
      "Our Regular Room offers a cozy and inviting atmosphere, perfect for relaxation and socializing.",
  },
  {
    id: 2,
    category: "VIP",
    images: "/images/rooms/vip.png",
    description:
      "Experience luxury in our VIP Room, designed for those who appreciate the finer things in life.",
  },
  {
    id: 3,
    category: "VVIP",
    images: "/images/rooms/vvip.png",
    description:
      "Indulge in opulence with our VVIP Room, featuring exclusive amenities and unparalleled service.",
  },
];

const Rooms = () => {
  return (
    <div className="py-20 px-4">
      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="inline-block py-2 px-6 rounded-full mb-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-minecraft relative z-10">
            Our Rooms
          </h1>
        </div>
      </div>

      {/* Rooms Gallery */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {ROOMS.map((room) => (
          <div
            key={room.id}
            className="flex flex-col items-center justify-center mb-8 transition-all duration-300 hover:scale-105"
          >
            <img
              src={room.images}
              alt={room.category}
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-lg"
            />
            {/* Category Text */}
            <h2 className="text-3xl sm:text-4xl font-minecraft text-[#b99733] mt-4">
              {room.category}
            </h2>
            <p className="text-center text-gray-600 mt-2 px-4">
              {room.description}
            </p>
            {/* Learn More Button */}
            <button className="mt-4 px-8 py-3 border-2 border-[#967515] text-[#967515] text-lg font-funnel hover:bg-[#967515] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* 3 Boxes Below */}
      <div className="flex justify-center gap-8 mt-12 flex-wrap">
        {/* First Box */}
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#967515] to-[#c8a84b] hover:scale-125 transition-all duration-300"></div>

        {/* Second Box */}
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#1a0f0f] hover:scale-125 transition-all duration-300"></div>

        {/* Third Box */}
        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#967515] to-[#c8a84b] hover:scale-125 transition-all duration-300"></div>
      </div>
    </div>
  );
};

export default Rooms;
