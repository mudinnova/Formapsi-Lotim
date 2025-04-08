import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaHome, FaHandshake } from 'react-icons/fa';
import { RiProfileFill, RiGalleryView2 } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="shadow-md px-4 py-2 fixed w-full top-0 left-0 z-50 bg-yellow-400">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mx-4">
          <img src="/logoshabi.png" alt="logo shabi" className="h-12 sm:h-16" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-center space-x-6 md:space-x-10">
          {/* Home */}
          <div className="flex flex-col items-center space-y-1">
            <button
              onClick={() => navigate('/')}
              className="text-black font-medium font-primary hover:text-white transition-colors flex flex-col items-center"
            >
              <FaHome size={20} />
              <span>Home</span>
            </button>
          </div>

          {/* Profile */}
          <div className="relative flex flex-col items-center space-y-1">
            <button
              className="text-black font-medium font-primary hover:text-white transition-colors flex flex-col items-center"
              onClick={() =>
                setOpenDropdown(openDropdown === 'profile' ? null : 'profile')
              }
            >
              <RiProfileFill size={20} />
              <span>Profile</span>
            </button>
            {openDropdown === 'profile' && (
              <div className="absolute top-full mt-2 w-40 bg-yellow-400 shadow-lg rounded-md">
                <button
                  onClick={() => navigate('/profile/company')}
                  className="block px-4 py-2 text-black hover:text-white w-full font-primary text-left transition"
                >
                  Company
                </button>
                <button
                  onClick={() => navigate('/profile/manager')}
                  className="block px-4 py-2 text-black font-primary hover:text-white w-full text-left transition"
                >
                  Our Team
                </button>
              </div>
            )}
          </div>

          {/* Our Service */}
          <div className="relative flex flex-col items-center space-y-1">
            <button
              className="text-black font-primary hover:text-white font-medium transition-colors flex flex-col items-center"
              onClick={() =>
                setOpenDropdown(openDropdown === 'service' ? null : 'service')
              }
            >
              <FaHandshake size={20} />
              <span>Our Service</span>
            </button>
            {openDropdown === 'service' && (
              <div className="absolute top-full mt-2 w-40 bg-yellow-400 shadow-lg rounded-md">
                <button
                  onClick={() => navigate('/ourservice/kerjasama')}
                  className="block px-4 py-2 text-black font-primary hover:text-white w-full text-left transition"
                >
                  Collaboration
                </button>
                <button
                  onClick={() => navigate('/ourservice/negara')}
                  className="block px-4 py-2 text-black font-primary hover:text-white w-full text-left transition"
                >
                  Country
                </button>
              </div>
            )}
          </div>

          {/* Gallery */}
          <div className="flex flex-col items-center space-y-1">
            <button
              onClick={() => navigate('/galeri')}
              className="text-black font-medium font-primary hover:text-white transition-colors flex flex-col items-center"
            >
              <RiGalleryView2 size={20} />
              <span>Gallery</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-yellow-400 shadow-md absolute top-full left-0 w-full p-4 z-10 border-t border-white">
          <button
            onClick={() => navigate('/')}
            className="py-2 px-2 text-black hover:text-white rounded-md transition"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/profile/company')}
            className="py-2 px-2 text-black hover:text-white rounded-md transition"
          >
            Company
          </button>
          <button
            onClick={() => navigate('/profile/manager')}
            className="py-2 px-2 text-black hover:text-white rounded-md transition"
          >
            Manager
          </button>
          <button
            onClick={() => navigate('/ourservice/kerjasama')}
            className="py-2 px-2 text-black hover:text-white rounded-md transition"
          >
            Collaboration
          </button>
          <button
            onClick={() => navigate('/ourservice/negara')}
            className="py-2 px-2 text-black hover:text-white rounded-md transition"
          >
            Country
          </button>
          <button
            onClick={() => navigate('/galeri')}
            className="py-2 px-2 text-black hover:text-white rounded-md transition"
          >
            Gallery
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
