/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/order */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
"use client";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import { inter } from "@/app/font";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<nav className="relative flex items-center justify-between bg-black text-white px-4 py-3 md:px-8 w-full z-50">
  {/* Logo */}
  <div className="flex items-center">
    <img src="/Logo.png" alt="Logo" className="h-10 md:h-12" />
  </div>

  {/* Desktop Navigation Links */}
  <div
    className={`${inter.className} hidden md:flex items-center space-x-8 text-[16px] font-medium`}
  >
    <a
      href="#about"
      className="hover:text-red-500 transition-all duration-300"
    >
      About
    </a>
    <a
      href="#events"
      className="hover:text-red-500 transition-all duration-300"
    >
      Events
    </a>
    <a
      href="#partners"
      className="hover:text-red-500 transition-all duration-300"
    >
      Partners
    </a>
    <a
      href="#curators"
      className="hover:text-red-500 transition-all duration-300"
    >
      Curators
    </a>
  </div>

  {/* Call-to-Action Button */}
  <Button
    className={`${inter.className} hidden md:flex    
      text-white 
      text-center
      text-[16px]
      font-medium
      w-[135px] 
      h-[41px] 
      justify-center 
      items-center 
      rounded-[8px] bg-[#E91F23] hover:bg-white hover:text-[#E91F23] transition-all`}
  >
    Partner with us
  </Button>

  {/* Mobile Menu Icon */}
  <div className="flex md:hidden items-center space-x-4">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
      className="text-2xl focus:outline-none"
    >
      ☰
    </button>
  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 z-40">
      <a
        href="#about"
        className="hover:text-red-500 transition-all duration-300"
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#events"
        className="hover:text-red-500 transition-all duration-300"
        onClick={() => setMenuOpen(false)}
      >
        Events
      </a>
      <a
        href="#partners"
        className="hover:text-red-500 transition-all duration-300"
        onClick={() => setMenuOpen(false)}
      >
        Partners
      </a>
      <a
        href="#curators"
        className="hover:text-red-500 transition-all duration-300"
        onClick={() => setMenuOpen(false)}
      >
        Curators
      </a>
      <Button
        className={`${inter.className} text-white w-[135px] h-[41px] rounded-[8px] bg-[#E91F23] hover:bg-white hover:text-[#E91F23] transition-all`}
        onClick={() => setMenuOpen(false)}
      >
        Partner with us
      </Button>
    </div>
  )}
</nav>

  );
};

export default Navbar;
