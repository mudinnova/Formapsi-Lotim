import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import galeriData from "../data/galeri.json"; // JSON lokal

const GalleryLanding = () => {
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    setGaleri(galeriData); // data statis dari JSON lokal
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
          Galeri Kegiatan Kami
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Dokumentasi momen-momen berharga dalam kegiatan sosial, edukasi, dan kolaborasi kami.
        </p>
      </motion.div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {galeri.map((item) => (
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
      <button className="flex justify-center">
        <a
          onclick={() => window.scrollTo(0, 0)}
          href="/galeri"
          className="mt-8 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-700 transition-colors duration-300"
        >
          Lihat Semua Galeri
        </a>
      </button>
    </div>
  );
};

export default GalleryLanding;
