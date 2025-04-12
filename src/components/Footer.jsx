import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

// Navigation and Social Media links as constants
const NAV_LINKS = [
  { name: "Home", url: "#" },
  { name: "About", url: "#" },
  { name: "Games", url: "#" },
  { name: "Rooms", url: "#" },
];

const SOCIAL_MEDIA_LINKS = [
  { name: "Youtube", icon: <FaYoutube size={24} />, url: "#" },
  { name: "Instagram", icon: <FaInstagram size={24} />, url: "#" },
  { name: "Tiktok", icon: <FaTiktok size={24} />, url: "#" },
  { name: "Facebook", icon: <FaFacebook size={24} />, url: "#" },
];

const Footer = () => {
  return (
    <div className="bg-[#1B1010] text-white">
      {/* Footer Content */}
      <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6">
        {/* Footer Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          {/* Left Section */}
          <div className="flex flex-col mb-6 sm:mb-0">
            <div className="text-2xl font-bold mb-2">
              Medan Gaming Ecosystem
            </div>
            <div className="text-lg text-gray-300 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              laudantium.
            </div>
            <div className="text-sm text-gray-400">
              © 2023 Medan Gaming Ecosystem. All rights reserved.
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center sm:justify-end">
            <div className="text-lg font-semibold">Maps</div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-500 my-4" />

        {/* Footer Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-between mb-6">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="hover:text-[#b99733] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6 sm:mt-0">
            {SOCIAL_MEDIA_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="hover:text-[#b99733] transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
