import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'; // Ikon Pencarian
import { IoClose } from 'react-icons/io5'; // Ikon Tutup

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white shadow-md px-4 py-2">
      {/* Logo dan Nama Perusahaan */}
      <div className="flex items-center space-x-4">
        <img src="/logoshabi.png" alt="logo shabi" className="h-12 sm:h-16" />
        <h1 className="font-primary font-bold text-base sm:text-lg md:text-xl">
          PT. Shabi Lombok Bersaudara
        </h1>
      </div>

      {/* Tombol Pencarian */}
      <div className="flex items-center relative md:order-2">
        {!isSearchOpen ? (
          <AiOutlineSearch
            className="text-gray-500 hover:text-yellow-500 cursor-pointer transition-colors duration-300"
            size={24}
            onClick={toggleSearch}
          />
        ) : (
          <div className="flex items-center space-x-2 animate-slide-in">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300"
            />
            <IoClose
              className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-300"
              size={24}
              onClick={toggleSearch}
            />
          </div>
        )}
      </div>

      {/* Link Navigasi */}
      <div className="hidden md:flex items-center justify-center md:order-1">
        <div className="flex space-x-6 md:space-x-10">
          <Link to="/home" className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200">
            Home
          </Link>
          <Link to="/profil" className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200">
            Profile
          </Link>
          <Link to="/galeri" className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200">
            Gallery
          </Link>
          <Link to="/kerjasama" className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200">
            Our Service
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
