import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const GameCard = ({ game }) => (
  <div className="border-2 border-[#c8a84b] rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105">
    <img
      src={game.image}
      alt={game.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-[#c8a84b]">{game.title}</h3>
    </div>
  </div>
);

const GamesPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeFilterIndex, setActiveFilterIndex] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleFilterClick = (index) => {
    setActiveFilterIndex(index);
  };

  // Dekorasi 3 box dengan looping (gunakan warna sesuai kebutuhan)
  const decorationColors = ["bg-yellow-500", "bg-black", "bg-yellow-500"];
  // Filter options: Playstation 3, 4, 5
  const filterOptions = ["Playstation 3", "Playstation 4", "Playstation 5"];

  // Data dummy untuk card game
  const gamesData = [
    { id: 1, title: "Game One", image: "/images/game1.jpg" },
    { id: 2, title: "Game Two", image: "/images/game2.jpg" },
    { id: 3, title: "Game Three", image: "/images/game3.jpg" },
    { id: 4, title: "Game Four", image: "/images/game4.jpg" },
    { id: 5, title: "Game Five", image: "/images/game5.jpg" },
    { id: 6, title: "Game Six", image: "/images/game6.jpg" },
    { id: 7, title: "Game Seven", image: "/images/game7.jpg" },
    { id: 8, title: "Game Eight", image: "/images/game8.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center font-minecraft text-7xl font-bold text-gray-800 mb-10">
          All Games
        </h1>
        <div className="flex justify-center space-x-4 mb-10">
          {decorationColors.map((color, index) => (
            <div
              key={index}
              className={`w-10 h-10 ${color} shadow-lg rounded-none`}
            ></div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center w-full md:w-auto border border-gray-300 rounded-none px-4 py-2 bg-white shadow-sm">
            <FaSearch className="text-gray-500 mr-3" size={20} />
            <input
              type="text"
              placeholder="Search games"
              className="w-full outline-none text-gray-700"
            />
          </div>
          <div className="relative w-full md:w-auto">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-between w-full md:w-auto border border-gray-300 rounded-none px-4 py-2 bg-white shadow-sm"
            >
              <span className="text-gray-700">Filter</span>
              <FaChevronDown className="ml-2 text-gray-500" size={20} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-full md:w-48 bg-white border border-gray-300 rounded-none shadow-lg z-20">
                {filterOptions.map((option, i) => (
                  <div key={i} className="p-2 hover:bg-gray-100 cursor-pointer">
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          {filterOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleFilterClick(index)}
              className={`cursor-pointer border border-gray-300 px-8 py-4 text-center text-xl font-medium transition-all duration-200 ${
                activeFilterIndex === index
                  ? "bg-[#c8a84b] text-white"
                  : "bg-white text-gray-700"
              } rounded-none shadow-sm`}
            >
              {option}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {gamesData.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamesPage;
