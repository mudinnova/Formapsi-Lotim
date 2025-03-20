import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome, FaBuilding, FaPeopleGroup, FaHandshake } from 'react-icons/fa';
import { RiProfileFill, RiGalleryView2 } from 'react-icons/ri';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { MdAccountBalance } from 'react-icons/md';
import { FcCollaboration } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from './translate';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  return (
    <nav className="bg-white shadow-md px-4 py-2 fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mx-4">
          <img src="/logoshabi.png" alt="logo shabi" className="h-12 sm:h-16" />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden md:flex flex-grow justify-center space-x-6 md:space-x-10">
          <div className='flex items-center space-x-1'>
            <FaHome />
            <button onClick={() => navigate('/')} className="text-black font-medium hover:text-yellow-500 transition-colors">Home</button>
          </div>
          
          {/* Profile Dropdown */}
          <div className="relative">
            <div className="flex items-center space-x-1">
              <RiProfileFill />
              <button className="text-black font-medium hover:text-yellow-500" onClick={() => setOpenDropdown(openDropdown === 'profile' ? null : 'profile')}>Profile</button>
            </div>
            {openDropdown === 'profile' && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-md">
                <button onClick={() => navigate('/profile/company')} className="block px-4 py-2 hover:bg-yellow-500 w-full text-left">Company</button>
                <button onClick={() => navigate('/profile/manager')} className="block px-4 py-2 hover:bg-yellow-500 w-full text-left">Manager</button>
              </div>
            )}
          </div>
          
          {/* Our Service Dropdown */}
          <div className="relative">
            <div className="flex items-center space-x-1">
              <FaHandshake />
              <button className="text-black font-medium hover:text-yellow-500" onClick={() => setOpenDropdown(openDropdown === 'service' ? null : 'service')}>Our Service</button>
            </div>
            {openDropdown === 'service' && (
              <div className="absolute top-full left-0 mt-1 w-40 bg-white shadow-lg rounded-md">
                <button onClick={() => navigate('/ourservice/kerjasama')} className="block px-4 py-2 hover:bg-yellow-500 w-full text-left">Collaboration</button>
                <button onClick={() => navigate('/ourservice/negara')} className="block px-4 py-2 hover:bg-yellow-500 w-full text-left">Country</button>
              </div>
            )}
          </div>
          
          <div className='flex items-center space-x-1'>
            <RiGalleryView2 />
            <button onClick={() => navigate('/galeri')} className="text-black font-medium hover:text-yellow-500">Gallery</button>
          </div>
          
        </div>
        <div className='flex items-center'>
          <LanguageSwitcher />
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-md absolute top-full left-0 w-full p-4 z-10">
          <button onClick={() => navigate('/')} className="py-2 text-black hover:text-yellow-500">Home</button>
          <button onClick={() => navigate('/profile/company')} className="py-2 text-black hover:text-yellow-500">Company</button>
          <button onClick={() => navigate('/profile/manager')} className="py-2 text-black hover:text-yellow-500">Manager</button>
          <button onClick={() => navigate('/ourservice/kerjasama')} className="py-2 text-black hover:text-yellow-500">Collaboration</button>
          <button onClick={() => navigate('/ourservice/negara')} className="py-2 text-black hover:text-yellow-500">Country</button>
          <button onClick={() => navigate('/galeri')} className="py-2 text-black hover:text-yellow-500">Gallery</button>
        </div>
      )}

       
      {/* Search Button
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
        {!isSearchOpen ? (
          <AiOutlineSearch className="text-gray-500 hover:text-yellow-500 cursor-pointer" size={24} onClick={toggleSearch} />
        ) : (
          <div className="flex items-center space-x-2">
            <input type="text" placeholder="Search..." className="px-4 py-2 rounded-md bg-gray-100" />
            <IoClose className="text-gray-500 hover:text-red-500 cursor-pointer" size={24} onClick={toggleSearch} />
          </div>
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;
