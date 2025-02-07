import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // Import ikon panah

const images = [
  '/activities1.jpg',
  '/activities2.jpg',
  '/activities3.jpg',
  // '/activities4.jpg',
  '/activities5.jpg',
  '/activities6.jpg',
  '/activities7.jpg',
  '/activities8.jpg',
  '/activities9.jpg',
  '/activities10.jpg',
  '/activities11.jpg',
  '/activities12.jpg',
  // ...
];

const OurActivies = () => {
  // State untuk mengontrol apakah service ditampilkan atau tidak
  const [isServiceOpen, setIsServiceOpen] = useState(true);
  
  // State untuk melacak halaman gambar
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 4; // Menampilkan 4 gambar per halaman
  
  // Fungsi untuk toggle tampilan "Our Service"
  const toggleService = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  // Menghitung indeks gambar yang akan ditampilkan
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Fungsi untuk memuat gambar berikutnya
  const nextPage = () => {
    if (indexOfLastImage < images.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Fungsi untuk memuat gambar sebelumnya
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        {/* Bagian "Our Service" */}
        <div className="bg-gray-100 shadow-2xl mb-10 rounded-lg mx-4">
          <h2 className="text-3xl font-bold text-center mb-3 my-10">Our Activies</h2>

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
                {currentImages.map((image, index) => (
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

          {/* Navigasi untuk halaman gambar */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md disabled:bg-yellow-500 mb-4 ml-4"
            >
              Previous
            </button>
            <button
              onClick={nextPage}
              disabled={indexOfLastImage >= images.length}
              className="px-4 py-2 bg-yellow-500 text-white rounded-md disabled:bg-yellow-500 mb-4 mr-4"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurActivies;
