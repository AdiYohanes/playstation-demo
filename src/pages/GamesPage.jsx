import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const GameCard = ({ game }) => (
  <div className="border-2 border-[#c8a84b] rounded-none overflow-hidden shadow-lg transition transform hover:scale-105">
    <img
      src={game.image}
      alt={game.title}
      className="w-full h-72 object-cover"
    />
    <div className="p-4">
      <h3 className="text-xl font-bold text-[#c8a84b]">{game.title}</h3>
    </div>
  </div>
);

const GamesPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState("All");

  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Show All");

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Opsi untuk filter ruangan dengan penambahan opsi "All"
  const roomOptions = ["All", "reguler", "vip", "vvip"];
  const handleRoomFilterClick = (index) => {
    setSelectedRoom(roomOptions[index]);
    setDropdownOpen(false);
    // Reset filter kategori ke default "Show All" setiap kali filter ruangan diubah
    setActiveCategoryIndex(0);
    setSelectedCategory("Show All");
  };

  // Opsi untuk filter kategori
  const categoryFilterOptions = [
    "Show All",
    "Playstation 3",
    "Playstation 4",
    "Playstation 5",
  ];
  const handleCategoryFilterClick = (index) => {
    setActiveCategoryIndex(index);
    setSelectedCategory(categoryFilterOptions[index]);
  };

  // Dekorasi 3 box sebagai elemen estetika
  const decorationColors = ["bg-yellow-500", "bg-black", "bg-yellow-500"];

  // Data dummy untuk kartu game dengan properti room dan category (total 16 game)
  const gamesData = [
    {
      id: 1,
      title: "Game One",
      category: "Playstation 3",
      room: "reguler",
      image: "/images/games/1.png",
    },
    {
      id: 2,
      title: "Game Two",
      category: "Playstation 4",
      room: "vip",
      image: "/images/games/2.png",
    },
    {
      id: 3,
      title: "Game Three",
      category: "Playstation 5",
      room: "vvip",
      image: "/images/games/3.png",
    },
    {
      id: 4,
      title: "Game Four",
      category: "Playstation 3",
      room: "reguler",
      image: "/images/games/4.png",
    },
    {
      id: 5,
      title: "Game Five",
      category: "Playstation 4",
      room: "vip",
      image: "/images/games/5.png",
    },
    {
      id: 6,
      title: "Game Six",
      category: "Playstation 5",
      room: "vvip",
      image: "/images/games/6.png",
    },
    {
      id: 7,
      title: "Game Seven",
      category: "Playstation 3",
      room: "reguler",
      image: "/images/games/7.png",
    },
    {
      id: 8,
      title: "Game Eight",
      category: "Playstation 5",
      room: "vip",
      image: "/images/games/8.png",
    },
    {
      id: 9,
      title: "Game Nine",
      category: "Playstation 4",
      room: "reguler",
      image: "/images/games/9.png",
    },
    {
      id: 10,
      title: "Game Ten",
      category: "Playstation 3",
      room: "vip",
      image: "/images/games/10.png",
    },
    {
      id: 11,
      title: "Game Eleven",
      category: "Playstation 5",
      room: "vvip",
      image: "/images/games/11.png",
    },
    {
      id: 12,
      title: "Game Twelve",
      category: "Playstation 3",
      room: "vip",
      image: "/images/games/12.png",
    },
    {
      id: 13,
      title: "Game Thirteen",
      category: "Playstation 4",
      room: "vvip",
      image: "/images/games/13.png",
    },
    {
      id: 14,
      title: "Game Fourteen",
      category: "Playstation 5",
      room: "reguler",
      image: "/images/games/14.png",
    },
    {
      id: 15,
      title: "Game Fifteen",
      category: "Playstation 3",
      room: "vvip",
      image: "/images/games/15.png",
    },
    {
      id: 16,
      title: "Game Sixteen",
      category: "Playstation 4",
      room: "reguler",
      image: "/images/games/16.png",
    },
  ];

  // Penyaringan game berdasarkan kedua filter: room dan category.
  let filteredGames = gamesData;
  // Terapkan filter ruangan jika opsi yang dipilih bukan "All"
  if (selectedRoom && selectedRoom !== "All") {
    filteredGames = filteredGames.filter((game) => game.room === selectedRoom);
  }
  // Terapkan filter kategori jika opsi yang dipilih bukan "Show All"
  if (selectedCategory && selectedCategory !== "Show All") {
    filteredGames = filteredGames.filter(
      (game) => game.category === selectedCategory
    );
  }

  const navigate = useNavigate();

  const bookClicked = () => {
    navigate("/booking");
  };

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

        {/* Baris atas: Search bar dan Dropdown Filter Ruangan */}
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
              className="flex items-center justify-between w-full md:w-auto border border-gray-300 rounded-none px-4 py-2 bg-white shadow-sm font-minecraft"
            >
              <span className="text-gray-700">{selectedRoom}</span>
              <FaChevronDown className="ml-2 text-gray-500" size={20} />
            </button>
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 w-full md:w-48 bg-white border border-gray-300 rounded-none shadow-lg z-20 font-minecraft">
                {roomOptions.map((option, i) => (
                  <div
                    key={i}
                    onClick={() => handleRoomFilterClick(i)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tampilkan box filter kategori */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          {categoryFilterOptions.map((option, index) => (
            <div
              key={index}
              onClick={() => handleCategoryFilterClick(index)}
              className={`cursor-pointer border border-gray-300 px-8 py-4 text-center text-xl font-medium transition-all duration-200 font-minecraft w-full md:w-auto ${
                activeCategoryIndex === index
                  ? "bg-[#c8a84b] text-white"
                  : "bg-white text-gray-700"
              } rounded-none shadow-sm`}
            >
              {option}
            </div>
          ))}
        </div>

        {/* Tampilan kartu game berdasarkan kedua filter */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {filteredGames.length > 0 ? (
            filteredGames.map((game) => <GameCard key={game.id} game={game} />)
          ) : (
            <p className="text-center col-span-full text-gray-500 font-minecraft">
              No games found matching the selected filters.
            </p>
          )}
        </div>

        {/* Tombol full width sebelum Footer */}
        <div className="w-full my-8">
          <button
            onClick={bookClicked}
            className="w-full py-4 bg-[#c8a84b] hover:bg-yellow-600 text-white text-xl font-bold font-minecraft rounded-sm tracking-widest"
          >
            Book a Room
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GamesPage;
