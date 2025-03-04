import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai'; // Search Icon
import { IoClose } from 'react-icons/io5'; // Close Icon
import { FaHome } from 'react-icons/fa';
import { RiProfileFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { RiGalleryView2 } from "react-icons/ri";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openLanguageDropdown, setOpenLanguageDropdown] = useState(false);
  const [language, setLanguage] = useState('id');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const languageDropdownRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setOpenDropdown(null);
      setOpenLanguageDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setOpenLanguageDropdown(false);
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
    <nav className="flex items-center justify-between bg-white shadow-md px-4 py-2 relative">
      {/* Logo */}
      <div className="flex items-center mx-11">
        <img src="/logoshabi.png" alt="logo shabi" className="h-12 sm:h-16" />
        {/* <h1 className='text-base font-primary font-bold text-black ml-2'>
          PT. SHABI LOMBOK BERSAUDARA
        </h1> */}
      </div>

      {/* Navbar Links */}
      <div className="flex-grow flex justify-center mr-28 space-x-6 md:space-x-10 ">
        <div className='flex items-center space-x-1'>
          <FaHome />
          <button onClick={() => navigate('/')} className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200">Home</button>
        </div>
        
        {/* Profile Dropdown */}
        <div className="relative dropdown-container p-1">
          <div className="flex items-center space-x-1">
            <RiProfileFill />
            <button className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200" onClick={() => setOpenDropdown(openDropdown === 'profile' ? null : 'profile')}>Profile</button>
          </div>
          {openDropdown === 'profile' && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-md z-20">
              <button onClick={() => navigate('/profile/company')} className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left">
                <FaBuilding className="text-lg" />
                <span>Company</span>
              </button>
              <button onClick={() => navigate('/profile/manager')} className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left">
                <FaPeopleGroup className="text-lg" />
                <span>Manager</span>
              </button>
            </div>
          )}
        </div>
        
        {/* Our Service Dropdown */}
        <div className="relative dropdown-container p-1">
          <div className="flex items-center space-x-1">
            <FaHandshake />
            <button className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200" onClick={() => setOpenDropdown(openDropdown === 'service' ? null : 'service')}>Our Service</button>
          </div>
          {openDropdown === 'service' && (
            <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-md z-20">
              <button onClick={() => navigate('/ourservice/kerjasama')} className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left">
                <MdAccountBalance className="text-lg" />
                <span>Collaboration</span>
              </button>
              <button onClick={() => navigate('/ourservice/negara')} className="flex items-center space-x-2 px-4 py-2 text-black hover:bg-yellow-500 hover:text-white transition-colors duration-200 w-full text-left">
                <FcCollaboration className="text-lg" />
                <span>Country</span>
              </button>
            </div>
          )}
        </div>
        <div className='flex items-center space-x-1'>
        <RiGalleryView2 />
        <button
          onClick={() => navigate('/galeri')}
          className="text-black font-primary font-medium hover:text-yellow-500 transition-colors duration-200"
        >
          Gallery
        </button>
        </div>
      </div>

       

      {/* Search Button */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
        {!isSearchOpen ? (
          <AiOutlineSearch className="text-gray-500 hover:text-yellow-500 cursor-pointer transition-colors duration-300" size={24} onClick={toggleSearch} />
        ) : (
          <div className="flex items-center space-x-2 animate-slide-in">
            <input type="text" placeholder="Search..." className="px-4 py-2 rounded-md bg-gray-100 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300" />
            <IoClose className="text-gray-500 hover:text-red-500 cursor-pointer transition-colors duration-300" size={24} onClick={toggleSearch} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
