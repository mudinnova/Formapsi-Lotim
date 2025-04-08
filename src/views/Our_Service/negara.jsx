import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";

const images = [
  {
    src: "/polandia.jpg",
    country: "Polandia",
    // path: "/ourservice/negara/polandia",
  },
  {
    src: "/taiwan.jpg",
    country: "Taiwan",
    // path: "/ourservice/negara/taiwan",
  },
  {
    src: "/bulgaria.jpg",
    country: "Bulgaria",
    // path: "/ourservice/negara/bulgaria",
  },
  {
    src: "/slovakia.jpg",
    country: "Slovakia",
    // path: "/ourservice/negara/slovakia",
  },
  {
    src: "/hungaria.jpg",
    country: "Hungaria",
    // path: "/ourservice/negara/hungaria",
  },
  {
    src: "/portugal.jpg",
    country: "Portugal",
    // path: "/ourservice/negara/portugal",
  },
];

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img
      src="/logoshabi.png"
      alt="Loading..."
      className="w-20 h-20 animate-bounce"
    />
  </div>
);

const Negara = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Header */}
      <div className="relative w-full h-64 flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/web2/gedung.jpg')` }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative text-center px-6 text-white">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold font-primary text-yellow-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            COUNTRY
          </motion.h1>
          <motion.p
            className="text-lg font-secondary md:text-xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Collaboration & Country
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-yellow-500 mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-4xl font-bold font-primary text-center text-yellow-500 mt-12 mb-8">
        Explore Country
      </h2>

      {/* Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate(image.path)}
            >
              <img
                src={image.src}
                alt={image.country}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold font-primary text-black">
                  {image.country}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
        <div className="mt-9">
      <Footer />
      </div>
    </div>
  );
};

export default Negara;
