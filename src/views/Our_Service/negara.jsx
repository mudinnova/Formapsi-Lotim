import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";
import countryData from "../../data/datacountries.json";

// Import wajib untuk React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Loader
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <motion.img
      src="/logoshabi.png"
      alt="Loading..."
      className="w-20 h-20"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
    />
  </div>
);

// Arrow Slider
const Arrow = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 -translate-y-1/2 z-20 
      bg-white p-2 rounded-full shadow-lg cursor-pointer 
      hover:bg-gray-100 transition
      ${direction === "left" ? "left-2 md:left-[-20px]" : "right-2 md:right-[-20px]"}`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <IoIosArrowDropleft size={28} className="text-yellow-600" />
    ) : (
      <IoIosArrowDropright size={28} className="text-yellow-600" />
    )}
  </div>
);

const Negara = () => {
  const [loading, setLoading] = useState(true);
  const [asia, setAsia] = useState([]);
  const [europe, setEurope] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setAsia(countryData.asia);
      setEurope(countryData.europe);
      setLoading(false);
    }, 1000);
  }, []);

  // Proper responsive slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // Render Card
  const renderSlider = (data) => (
    <Slider {...settings} className="px-2">
      {data.map((item, index) => (
        <div key={index} className="p-3">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">
            <img
              src={item.src}
              alt={item.country}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-xl font-semibold mt-4 text-center">
              {item.country}
            </h3>
          </div>
        </div>
      ))}
    </Slider>
  );

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <div className="relative h-56 md:h-72 mt-16 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/web2/gedung.jpg')" }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />

        <motion.div
          className="relative z-10 text-center px-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
            COUNTRY
          </h1>
          <p className="text-lg md:text-xl mt-2">Collaboration & Placement</p>
          <div className="w-20 md:w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </motion.div>
      </div>

      {/* Asia */}
      <section className="w-full mx-auto px-4">

        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Asia
        </h2>
        {renderSlider(asia)}
      </section>

      {/* Europe */}
      <section className="w-full mx-auto px-4 my-12">

        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Europe
        </h2>
        {renderSlider(europe)}
      </section>

      <Footer />
    </div>
  );
};

export default Negara;
