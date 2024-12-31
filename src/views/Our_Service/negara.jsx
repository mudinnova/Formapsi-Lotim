import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';

const images = [
  { src: '/polandia.jpg', country: 'Polandia' },
  { src: '/bulgaria.jpg', country: 'Bulgaria' },
  { src: '/slovakia.jpg', country: 'Slovakia' },
  { src: '/hungaria.jpg', country: 'Hungaria' },
  { src: '/portugal.jpg', country: 'Portugal' },
  { src: '/ceko.jpg', country: 'Ceko' },
  { src: '/au.jpg', country: 'Australia' },
  { src: '/singapura.jpg', country: 'Singapura' },
  { src: '/jepang.jpg', country: 'Jepang' },
  { src: '/malay.jpg', country: 'Malaysia' },
  { src: '/taiwan.jpg', country: 'Taiwan' },
  // Tambahkan gambar dan nama negara lainnya jika diperlukan
];

const Negara = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <h2 className="text-4xl text-yellow-500 font-bold font-primary flex items-center justify-center pt-4 mb-10">
        COUNTRY
      </h2>

      <div className="container mx-auto">
        {/* Bagian gambar dengan keterangan negara */}
        <div className="bg-gray-100 shadow-2xl mb-6 rounded-lg mx-4">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-2 mr-2 ">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden mb-2  my-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={image.src}
                    alt={`Gambar ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                  {/* Keterangan nama negara */}
                  <div className="text-center py-2 bg-gray-100 text-lg font-medium">
                    {image.country}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Negara;
