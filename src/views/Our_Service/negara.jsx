import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";
import countryData from "../../data/datacountries.json"; // 🔁 Data dari JSON

// Loader animasi
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <motion.img
      src="/logoshabi.png"
      alt="Loading..."
      className="w-20 h-20"
      animate={{ y: [0, -20, 0] }}
      transition={{
        repeat: Infinity,
        duration: 0.8,
        ease: "easeInOut",
      }}
    />
  </div>
);

// Custom arrow untuk slider
const Arrow = ({ onClick, direction }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 ${
      direction === "left" ? "left-[-24px]" : "right-[-24px]"
    } cursor-pointer text-yellow-500 hover:text-yellow-700 bg-white rounded-full shadow p-1`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <IoIosArrowDropleft size={30} />
    ) : (
      <IoIosArrowDropright size={30} />
    )}
  </div>
);

const Negara = () => {
  const [loading, setLoading] = useState(true);
  const [asia, setAsia] = useState([]);
  const [europe, setEurope] = useState([]);

  useEffect(() => {
    // Simulasi fetch data
    setTimeout(() => {
      setAsia(countryData.asia);
      setEurope(countryData.europe);
      setLoading(false);
    }, 1000);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const renderSlider = (data) => (
    <Slider {...settings}>
      {data.map((item, i) => (
        <motion.div key={i} className="p-2" whileHover={{ scale: 1.05 }}>
          <div className="bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
            <img
              src={item.src}
              alt={item.country}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.country}
              </h3>
            </div>
          </div>
        </motion.div>
      ))}
    </Slider>
  );

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-72 mt-20 flex items-center justify-center">
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
          <h1 className="text-5xl font-extrabold text-yellow-400">COUNTRY</h1>
          <p className="text-xl mt-2">Collaboration & Placement</p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4" />
        </motion.div>
      </div>

      {/* Asia Section */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
          Asia
        </h2>
        {renderSlider(asia)}
      </section>

      {/* Europe Section */}
      <section className="max-w-6xl mx-auto px-4 mt-20 mb-20">
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
