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

// Komponen peta sederhana menggunakan iframe Google Maps
const SimpleMap = () => {
  return (
    <iframe
      title="Google Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126974.38659730626!2d98.6606489546906!3d3.595196785185863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131eae1fdf4e7%3A0x168a35d8f1dd6a44!2sMedan%2C%20Indonesia!5e0!3m2!1sen!2s!4v1586879930014!5m2!1sen!2s"
      width="100%"
      height="250"
      frameBorder="0"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

// Komponen untuk menampilkan informasi alamat, jam operasional, dan kontak di bawah maps
const MapsInfo = () => {
  return (
    <div className="mt-4 text-gray-200 text-sm">
      <div className="mb-2">
        <div className="font-bold">Address:</div>
        <div>Jl. Jendral Sudirman No. 67, Medan Sunggal, Sumatera Utara</div>
      </div>
      <div className="mb-2">
        <div className="font-bold">Operational Hours:</div>
        <div>09.00 - 21.00</div>
      </div>
      <div>
        <div className="font-bold">Contact Us:</div>
        <div>+62 876-9084-0987</div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#1B1010] text-white">
      {/* Footer Content */}
      <div className="max-w-screen-xl mx-auto py-10 px-4 sm:px-6">
        {/* Footer Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          {/* Left Section */}
          <div className="flex flex-col mb-6 sm:mb-0">
            {/* Logo di atas judul */}
            <img
              src="/images/logo.png" // Ganti dengan path logo kamu
              alt="Medan Gaming Ecosystem Logo"
              className="w-36 mb-4" // Ukuran logo dapat disesuaikan
            />
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

          {/* Right Section: Menampilkan peta dan informasi tambahan */}
          <div className="w-full sm:w-auto">
            <SimpleMap />
            <MapsInfo />
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
