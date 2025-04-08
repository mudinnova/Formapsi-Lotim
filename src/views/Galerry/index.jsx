import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Slider from 'react-slick';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';
import OurActivies from './ouractivies';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

// Custom arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-yellow-500 text-black p-2 rounded-full shadow hover:bg-yellow-600 transition"
  >
    <FiChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-yellow-500 text-black p-2 rounded-full shadow hover:bg-yellow-600 transition"
  >
    <FiChevronRight size={24} />
  </button>
);

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img src="/logoshabi.png" alt="Loading..." className="w-20 h-20 animate-bounce" />
  </div>
);

const GalerryProfile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black mt-10">
      <Navbar />

      {/* Header */}
      <div className="relative w-full h-60 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/web2/gedung.jpg')` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold font-primary text-yellow-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            GALLERY
          </motion.h1>
          <motion.p
            className="text-lg text-white font-secondary md:text-xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Training Activities & Our Activities
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-yellow-500 mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 mt-10 relative">
        <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold font-primary text-center text-yellow-500 mb-6">Training Activities</h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden relative"
          >
            <Slider {...sliderSettings} className="px-2">
              {images.map((img, index) => (
                <div key={index} className="px-4">
                  <div className="bg-black text-white rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="h-64 bg-cover bg-center"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </div>
      <div className="mt-[-20px]">
  <OurActivies />
</div>
<Footer />
    </div>
  );
};

export default GalerryProfile;
