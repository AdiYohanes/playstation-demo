import React from "react";
import { User } from "lucide-react";
import logo from "/images/logo.png";
import buttonIcon from "/images/button-icon.png";

const NAV_ITEMS = [
  { href: "/", label: "MGE Rental" },
  { href: "/rent", label: "Rent" },
  { href: "/food-drinks", label: "Food & Drinks" },
  { href: "/faq", label: "FAQ" },
];

const Logo = () => (
  <div className="flex items-center">
    <a href="/" className="flex items-center">
      <div className="flex items-center mr-2">
        <img src={logo} alt="MGE Logo" className="w-16 h-16 object-contain" />
      </div>
    </a>
  </div>
);

const NavLinks = () => (
  <nav className="hidden md:flex items-center space-x-8">
    {NAV_ITEMS.map(({ href, label }) => (
      <a
        key={href}
        href={href}
        className="text-black font-minecraft text-2xl hover:text-gray-700 transition-colors"
      >
        {label}
      </a>
    ))}
  </nav>
);

const LoginButton = () => (
  <div>
    <a
      href="/login"
      className="bg-[#1a0f0f] hover:bg-[#2a1f1f] text-white px-6 py-2 flex items-center transition-all duration-300 hover:shadow-lg border border-[#967515] hover:border-[#c8a84b]"
    >
      <img
        src={buttonIcon}
        alt="Login Icon"
        className="w-8 h-8 mr-2 hover:scale-110 transition-transform duration-300"
      />
      <span className="font-minecraft text-2xl">Login</span>
    </a>
  </div>
);

const Navbar = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Logo />
        <NavLinks />
        <LoginButton />
      </div>
    </header>
  );
};

export default Navbar;
