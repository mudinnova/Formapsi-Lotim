import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white">
      <div className="flex items-center">
        <img src="/logoshabi.png" alt="logo shabi" className="h-16 ml-6" />
        <h1 className=' font-primary font-bold'>
          PT.Shabi Lombok Bersaudara
        </h1>
      </div>
      <div className="flex items-center justify-center"> 
        <div className="flex space-x-10"> 
          <Link to="/home" className="text-black font-primary font-medium hover:text-yellow-500">Beranda</Link>
          <Link to="/profil" className="text-black font-primary font-medium hover:text-yellow-500">Profil</Link>
          <Link to="/galeri" className="text-black font-primary font-medium hover:text-yellow-500">Galeri</Link>
          <Link to="/kerjasama" className="text-black font-primary font-medium hover:text-yellow-500">Kerjasama</Link>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-2 py-1 mr-36 rounded-md bg-white text-black placeholder-gray-400 focus:outline-none"
        />
      </div>
    </nav>
  );
};

export default Navbar;