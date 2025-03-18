import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';

const images = [
  { src: '/polandia.jpg', country: 'Polandia', description: 'Polandia adalah negara di Eropa Tengah dengan sejarah yang kaya dan arsitektur klasik.' },
  { src: '/bulgaria.jpg', country: 'Bulgaria', description: 'Bulgaria adalah negara di Eropa Tenggara yang memiliki sejarah panjang dan budaya yang kuat.' },
  { src: '/slovakia.jpg', country: 'Slovakia', description: 'Slovakia terkenal dengan kastil abad pertengahan dan pemandangan alamnya yang menakjubkan.' },
  { src: '/hungaria.jpg', country: 'Hungaria', description: 'Hungaria memiliki ibu kota Budapest, yang dikenal sebagai salah satu kota paling indah di dunia.' },
  { src: '/portugal.jpg', country: 'Portugal', description: 'Portugal terkenal dengan pantai spektakulernya dan sejarah eksplorasi dunia.' },
  { src: '/ceko.jpg', country: 'Ceko', description: 'Ceko memiliki Praha, kota dengan arsitektur indah dan sejarah yang kaya.' },
  { src: '/au.jpg', country: 'Australia', description: 'Australia adalah negara dengan lanskap yang unik dan kota-kota modern.' },
  { src: '/singapura.jpg', country: 'Singapura', description: 'Singapura adalah pusat bisnis dan pariwisata dengan arsitektur futuristik.' },
  { src: '/jepang.jpg', country: 'Jepang', description: 'Jepang terkenal dengan teknologi canggih dan budaya tradisionalnya.' },
  { src: '/malay.jpg', country: 'Malaysia', description: 'Malaysia memiliki budaya yang beragam dan kuliner yang lezat.' },
  { src: '/taiwan.jpg', country: 'Taiwan', description: 'Taiwan terkenal dengan pasar malamnya dan pemandangan pegunungan.' },
  { src: '/arabia.jpg', country: 'Saudi Arabia', description: 'Arab Saudi (Kerajaan Arab Saudi) adalah negara terbesar di Timur Tengah yang terletak di Semenanjung Arab. Negara ini dikenal sebagai pusat agama Islam karena merupakan tempat berdirinya dua kota suci, Mekah dan Madinah.' },
  { src: '/maldives.jpg', country: 'Maldives', description: 'Maladewa adalah negara kepulauan yang terkenal dengan pantai berpasir putih, air laut yang jernih, dan resor mewah di tengah Samudra Hindia.' },
];

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img src="/logoshabi.png" alt="Loading..." className="w-20 h-20 animate-bounce" />
  </div>
);

const Negara = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative w-full h-48 flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/web2/gedung.jpg')` }}></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 relative inline-block border-l-4 border-yellow-500 pl-4">
            COUNTRY
          </h1>
          <p className="text-lg md:text-xl mt-2">COLLABORATION & COUNTRY</p>
          <div className="w-72 h-1 bg-white mt-2 mx-auto"></div>
        </div>
      </div>

      <h2 className="text-4xl text-yellow-500 font-bold font-primary flex items-center justify-center pt-4 mb-10">
        COUNTRY
      </h2>

      <div className="container mx-auto">
        <div className="bg-gray-100 shadow-2xl mb-6 rounded-lg mx-4">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden mb-4 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedCountry(image)}
                >
                  <img src={image.src} alt={image.country} className="w-full h-64 object-cover" />
                  <div className="text-center py-2 bg-gray-100 text-lg font-medium">
                    {image.country}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCountry && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center" 
              initial={{ scale: 0.8 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.8 }}
            >
              <h4 className="text-xl font-bold text-yellow-600">{selectedCountry.country}</h4>
              <p className="text-gray-700 mt-2 leading-relaxed">{selectedCountry.description}</p>
              <div className="space-x-4">
              <button 
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md" 
                  onClick={() => setSelectedCountry(null)}
                >
                  Open
                </button>
                <button 
                  className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md" 
                  onClick={() => setSelectedCountry(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Negara;
