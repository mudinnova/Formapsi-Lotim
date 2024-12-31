import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'; // Search Icon
import { IoClose } from 'react-icons/io5'; // Close Icon

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track the open dropdown
  const [openLanguageDropdown, setOpenLanguageDropdown] = useState(false); // Track the language dropdown
  const [language, setLanguage] = useState('id'); // Default language
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Toggle for mobile menu

  const navigate = useNavigate(); // Use useNavigate hook for navigation
  const languageDropdownRef = useRef(null); // Ref for the language dropdown

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setOpenDropdown(null);
      setOpenLanguageDropdown(false); // Close language dropdown
    }
  };

  const toggleProfileDropdown = () => {
    setOpenDropdown(openDropdown === 'profile' ? null : 'profile');
    if (openDropdown === 'service') {
      setOpenDropdown('profile');
      setOpenLanguageDropdown(false); // Close language dropdown
    } else {
      setOpenLanguageDropdown(false); // Close language dropdown
    }
  };

  const toggleServiceDropdown = () => {
    setOpenDropdown(openDropdown === 'service' ? null : 'service');
    if (openDropdown === 'profile') {
      setOpenDropdown('service');
      setOpenLanguageDropdown(false); // Close language dropdown
    } else {
      setOpenLanguageDropdown(false); // Close language dropdown
    }
  };

  const toggleLanguageDropdown = () => {
    setOpenLanguageDropdown(!openLanguageDropdown);
    if (openDropdown) {
      setOpenDropdown(null);
    }
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setOpenLanguageDropdown(false); // Close the dropdown after selecting a language
    console.log(`Language changed to: ${lang}`);
  };

  const navigateToCompany = () => navigate('/profil/company');
  const navigateToManager = () => navigate('/profil/manager');
  const navigateToKerjasama = () => navigate('/kerjasama/kerjasama');
  const navigateToNegara = () => navigate('/kerjasama/negara');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setOpenLanguageDropdown(false); // Close language dropdown if clicked outside
      }
      if (openDropdown && !event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-white shadow-md px-4 py-2 relative">
      {/* Logo and Company Name */}
      <div className="flex items-center space-x-4">
        <img src="/logoshabi.png" alt="logo shabi" className="h-12 sm:h-16" />
        <h1 className="font-primary font-bold text-base sm:text-lg md:text-xl">
          PT. Shabi Lombok Bersaudara
        </h1>
      </div>

      {/* Search Button */}
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

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-gray-500 hover:text-yellow-500 transition-colors duration-300 mr-10"
      >
        {/* Hamburger menu for mobile */}
        {isMobileMenuOpen ? 'Close' : 'Menu'}
      </button>

      {/* Navigation Links */}
      <div
        className={`md:flex items-center justify-center md:order-1 z-10 space-x-6 md:space-x-10 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}
      >
        <button
          onClick={() => navigate('/')}
          className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200"
        >
          Home
        </button>

        {/* Dropdown Profile */}
        <div className="relative dropdown-container">
          <button
            className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200"
            onClick={toggleProfileDropdown}
          >
            Profile
          </button>
          {openDropdown === 'profile' && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-20">
              <button
                onClick={() => navigate('/profile/company')}
                className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Company
              </button>
              <button
                onClick={() => navigate('/profile/manager')}
                className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Manager
              </button>
            </div>
          )}
        </div>

        {/* Dropdown Our Service */}
        <div className="relative dropdown-container">
          <button
            className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200"
            onClick={toggleServiceDropdown}
          >
            Our Service
          </button>
          {openDropdown === 'service' && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-20">
              <button
                onClick={() => navigate('/ourservice/kerjsama')}
                className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Kerja Sama
              </button>
              <button
                onClick={() => navigate('/ourservice/negara')}
                className="block px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left"
              >
                Negara
              </button>
            </div>
          )}
        </div>

        <button
          onClick={() => navigate('/galeri')}
          className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200"
        >
          Gallery
        </button>

        {/* Dropdown Language */}
        <div className="relative">
          <button
            className="flex items-center rounded-full bg-gray-200 px-4 py-2 text-black font-primary font-medium hover:bg-yellow-500 transition-colors duration-200"
            onClick={toggleLanguageDropdown}
          >
            {language === 'id' ? <span>Indonesia</span> : <span>English</span>}
          </button>
          {openLanguageDropdown && (
            <div className="absolute mt-2 w-40 bg-white shadow-lg rounded-md z-20">
              <button
                onClick={() => changeLanguage('id')}
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left"
              >
                <img src="/indo.jpg" alt="Bahasa Indonesia" className="h-4 w-6" />
                <span>Indonesia</span>
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left"
              >
                <img src="/eng.jpg" alt="English" className="h-4 w-6" />
                <span>English</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
