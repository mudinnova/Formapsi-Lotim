import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';
import OurActivies from './ouractivies'; // Pastikan nama file benar

const images = [
  '/training1.jpg',
  '/training2.jpg',
  '/training3.jpg',
  '/training4.jpg',
  '/training5.jpg',
  '/training6.jpg',
  '/training7.jpg',
  '/training8.jpg',
];

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img src="/logoshabi.png" alt="Loading..." className="w-20 h-20 animate-bounce" />
  </div>
);

const GalerryProfile = () => {
  const [isServiceOpen, setIsServiceOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative w-full h-48 flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/web2/gedung.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 relative inline-block border-l-4 border-yellow-500 pl-4">
            GALLERY
          </h1>
          <p className="text-lg md:text-xl mt-2">TRAINING ACTIVITIES & OUR ACTIVITIES</p>
          <div className="w-80 h-1 bg-white mt-2 mx-auto"></div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="bg-gray-100 shadow-2xl mb-10 rounded-lg mx-4 mt-9">
          <h2 className="text-3xl font-bold text-center mb-3">Training Activities</h2>

          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsServiceOpen(!isServiceOpen)}
              className="px-4 py-2 text-black rounded-md flex items-center"
            >
              {isServiceOpen ? <FiChevronUp size={20} className="mr-2" /> : <FiChevronDown size={20} className="mr-2" />}
            </button>
          </div>

          <motion.div
            initial={{ height: 'auto' }}
            animate={{ height: isServiceOpen ? 'auto' : 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2">
              {images.map((image, index) => (
                <motion.div key={index} className="bg-white shadow-md rounded-lg overflow-hidden mb-2" whileHover={{ scale: 1.05 }}>
                  <img src={image} alt={`Gambar ${index + 1}`} className="w-full h-64 object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <OurActivies />
      <Footer />
    </div>
  );
};

export default GalerryProfile;
