import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';
import galeriprofile from '../../data/galeriprofile.json'; // Import JSON

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-4 z-10 top-1/2 -translate-y-1/2 bg-white/80 text-yellow-600 p-2 rounded-full shadow hover:bg-yellow-500 hover:text-white transition"
  >
    <FiChevronLeft size={28} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 z-10 top-1/2 -translate-y-1/2 bg-white/80 text-yellow-600 p-2 rounded-full shadow hover:bg-yellow-500 hover:text-white transition"
  >
    <FiChevronRight size={28} />
  </button>
);

const LandingGallery = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: false },
      },
    ],
  };

  const galeriKegiatan = galeriprofile?.galeriKegiatan || [];
  const galeriAktivitas = galeriprofile?.galeriAktivitas || [];

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />

      {/* Header */}
      <header className="relative h-[320px] mt-16 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/web2/gedung.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center text-white">
          <motion.h1
            className="text-5xl font-bold font-primary text-yellow-400"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            GALERI KEGIATAN
          </motion.h1>
          <motion.p
            className="text-lg mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            Dokumentasi kegiatan terkini dalam satu tampilan.
          </motion.p>
          <motion.div
            className="w-24 h-1 bg-yellow-400 mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </header>

      {/* Galeri Kegiatan */}
      {galeriKegiatan.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold font-primary text-center text-yellow-500 mb-10">
            Galeri Kegiatan
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Slider {...sliderSettings}>
              {galeriKegiatan.map((item, index) => (
                <div key={`kegiatan-${index}`} className="px-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl overflow-hidden shadow-lg bg-black group"
                  >
                    <div
                      className="h-64 bg-cover bg-center group-hover:brightness-75 transition-all duration-300"
                      style={{ backgroundImage: `url(${item.src})` }}
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </section>
      )}

      {/* Galeri Aktivitas */}
      {galeriAktivitas.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold font-primary text-center text-yellow-500 mb-10">
            Galeri Aktivitas
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <Slider {...sliderSettings}>
              {galeriAktivitas.map((item, index) => (
                <div key={`aktivitas-${index}`} className="px-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="rounded-xl overflow-hidden shadow-lg bg-black group"
                  >
                    <div
                      className="h-64 bg-cover bg-center group-hover:brightness-75 transition-all duration-300"
                      style={{ backgroundImage: `url(${item.src})` }}
                    />
                  </motion.div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default LandingGallery;
