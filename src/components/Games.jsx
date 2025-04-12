import React from "react";
import { FaDice } from "react-icons/fa";

const LIST_GAMES = [
  { id: 1, title: "Game 1", image: "/images/games/1.png" },
  { id: 2, title: "Game 2", image: "/images/games/2.png" },
  { id: 3, title: "Game 3", image: "/images/games/3.png" },
  { id: 4, title: "Game 4", image: "/images/games/4.png" },
  { id: 5, title: "Game 5", image: "/images/games/5.png" },
  { id: 6, title: "Game 6", image: "/images/games/6.png" },
  { id: 7, title: "Game 7", image: "/images/games/7.png" },
  { id: 8, title: "Game 8", image: "/images/games/8.png" },
  { id: 9, title: "Game 9", image: "/images/games/9.png" },
  { id: 10, title: "Game 10", image: "/images/games/10.png" },
  { id: 11, title: "Game 11", image: "/images/games/11.png" },
  { id: 12, title: "Game 12", image: "/images/games/12.png" },
  { id: 13, title: "Game 13", image: "/images/games/13.png" },
  { id: 14, title: "Game 14", image: "/images/games/14.png" },
  { id: 15, title: "Game 15", image: "/images/games/15.png" },
  { id: 16, title: "Game 16", image: "/images/games/16.png" },
];

const Games = () => {
  return (
    <div className="py-20 px-4">
      {/* Section Title */}
      <div className="text-center mb-16">
        <div className="inline-block py-2 px-6 rounded-full mb-4">
          <h1 className="text-5xl sm:text-7xl font-minecraft relative z-10">
            Games
          </h1>
        </div>
        <p className="font-funnel text-gray-700 text-xl sm:text-2xl">
          Make Good Enough is a place for you to grab a PlayStation, dive into
          epic games, and play without limits—no commitments, just pure gaming
          joy!
        </p>
      </div>

      {/* Games Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {LIST_GAMES.map((game) => (
          <div
            key={game.id}
            className="group relative rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-64 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-2xl font-semibold">
                {game.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12">
        <button className="px-6 py-3 border-2 border-black text-xl font-funnel text-black hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3">
          <FaDice size={24} />
          <span>View More Games</span>
        </button>
      </div>

      {/* 3 Boxes Below Button */}
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

export default Games;
