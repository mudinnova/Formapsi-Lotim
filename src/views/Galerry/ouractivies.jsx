import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  "/gambar1.jpg",
  "/gambar2.jpg",
  "/gambar3.jpg",
  "/gambar4.jpg",
  '/activities1.jpg',
  '/activities2.jpg',
  '/activities3.jpg',
  '/activities5.jpg',
  '/activities6.jpg',
  '/activities7.jpg',
  '/activities8.jpg',
  '/activities9.jpg',
  '/activities10.jpg',
  '/activities11.jpg',
  '/activities12.jpg',
];

// Custom arrow components
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 z-10 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full shadow hover:bg-yellow-500 transition"
  >
    <FiChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 z-10 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-2 rounded-full shadow hover:bg-yellow-500 transition"
  >
    <FiChevronRight size={24} />
  </button>
);

const OurActivies = () => {
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
    <div className="text-white pt-4 pb-10">
      <div className="container mx-auto">
        <div className="shadow-2xl rounded-lg p-8">
          <h2 className="text-3xl font-bold font-primary text-center text-yellow-400 mb-6">Our Activities</h2>

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
    </div>
  );
};

export default OurActivies;
