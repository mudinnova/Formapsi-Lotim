import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";

const images = [
  { src: "/polandia.jpg", country: "Polandia", description: "Polandia adalah negara di Eropa Tengah dengan sejarah yang kaya dan arsitektur klasik.", path: "/ourservice/negara/polandia" },
  { src: "/bulgaria.jpg", country: "Bulgaria", description: "Bulgaria adalah negara di Eropa Tenggara yang memiliki sejarah panjang dan budaya yang kuat.", path: "/ourseervice/negara/bulgaria" },
  { src: "/slovakia.jpg", country: "Slovakia", description: "Slovakia terkenal dengan kastil abad pertengahan dan pemandangan alamnya yang menakjubkan.", path: "/ourservice/negara/slovakia" },
  { src: "/hungaria.jpg", country: "Hungaria", description: "Hungaria memiliki ibu kota Budapest, yang dikenal sebagai salah satu kota paling indah di dunia.", path: "/ourservice/negara/hungaria" },
  { src: "/portugal.jpg", country: "Portugal", description: "Portugal terkenal dengan pantai spektakulernya dan sejarah eksplorasi dunia.", path: "/ourservice/negara/portugal" },
];

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img src="/logoshabi.png" alt="Loading..." className="w-20 h-20 animate-bounce" />
  </div>
);

const Negara = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(null); // State untuk pop-up
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

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
                  onClick={() => setSelectedCountry(image)} // Set state untuk pop-up
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

      {/* Pop-up Deskripsi Negara */}
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
              <div className="space-x-4 mt-4">
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                  onClick={() => navigate(selectedCountry.path)} // Navigasi ke path yang sesuai
                >
                  Open
                </button>

                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                  onClick={() => setSelectedCountry(null)} // Tutup pop-up
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
