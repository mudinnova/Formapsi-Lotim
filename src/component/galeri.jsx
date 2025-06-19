import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import galeriData from "../data/galeri.json"; // Local JSON

const GalleryLanding = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    setGallery(galeriData); // static data from local JSON
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
          Our Activity Gallery
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          A collection of memorable moments from our social, educational, and collaborative activities.
        </p>
      </motion.div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {gallery.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="overflow-hidden rounded-xl shadow-lg bg-white"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-60 object-cover transform transition-transform duration-300 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <a
          onClick={() => window.scrollTo(0, 0)}
          href="/galeri"
          className="mt-8 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition-colors duration-300"
        >
          View All Gallery
        </a>
      </div>
    </div>
  );
};

export default GalleryLanding;
