import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import ikon panah
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';
import OurActivies from './ouractivies';

const images = [
  '/training1.jpg',
  '/training2.jpg',
  '/training3.jpg',
  '/training4.jpg',
  '/training5.jpg',
  '/training6.jpg',
  '/training7.jpg',
  '/training8.jpg',
  // ...
];

const GalerryProfile = () => {
  // State untuk mengontrol apakah service ditampilkan atau tidak
  const [isServiceOpen, setIsServiceOpen] = useState(true);

  // Fungsi untuk toggle tampilan "Our Service"
  const toggleService = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <h2 className="text-4xl text-yellow-500 font-bold font-primary flex items-center justify-center pt-4 mb-10">
        GALLERY
      </h2>

      <div className="container mx-auto">
        {/* Bagian "Our Service" */}
        <div className="bg-gray-100 shadow-2xl mb-10 rounded-lg mx-4">
          <h2 className="text-3xl font-bold text-center mb-3">Training Activies</h2>

          {/* Tombol untuk membuka/mengurangi bagian "Our Service" */}
          <div className="flex justify-center mb-4">
            <button
              onClick={toggleService}
              className="px-4 py-2 text-black rounded-md flex items-center"
            >
              {/* Menampilkan ikon berdasarkan state */}
              {isServiceOpen ? (
                <FiChevronUp size={20} className="mr-2" />
              ) : (
                <FiChevronDown size={20} className="mr-2" />
              )}
            
            </button>
          </div>

          {/* Konten gambar yang dapat dimaksimalkan/diminalisir */}
          <div className="relative">
            {/* Bagian atas tetap terlihat */}
            <motion.div
              initial={{ height: 'auto' }}
              animate={{ height: isServiceOpen ? 'auto' : 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-2 mr-2">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-md rounded-lg overflow-hidden mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`Gambar ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <OurActivies/>

      <Footer />
    </div>
  );
};

export default GalerryProfile;
