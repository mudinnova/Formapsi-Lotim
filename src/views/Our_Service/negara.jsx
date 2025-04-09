import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { IoIosArrowDropleft,IoIosArrowDropright } from "react-icons/io";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";

// Data negara
const asiaCountries = [
  { src: "/negara/taiwan.jpg", country: "Taiwan" },
  { src: "/negara/jepang.jpg", country: "Jepang" },
  { src: "/negara/maldives.jpg", country: "Maldives" },
  { src: "/negara/malay.jpg", country: "Malaysia" },
  { src: "/negara/singapura.jpg", country: "Singapura" },
  { src: "/negara/arabia.jpg", country: "Arab Saudi" },
  { src: "/negara/turki.jpg", country: "Turki" },
];

const europeCountries = [
  { src: "/negara/polandia.jpg", country: "Polandia" },
  { src: "/negara/bulgaria.jpg", country: "Bulgaria" },
  { src: "/negara/slovakia.jpg", country: "Slovakia" },
  { src: "/negara/hungaria.jpg", country: "Hungaria" },
  { src: "/negara/portugal.jpg", country: "Portugal" },
  { src: "/negara/ceko.jpg", country: "Ceko" },
  { src: "/negara/romania.jpg", country: "Romania" },
];


// Loader
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img
      src="/logoshabi.png"
      alt="Loading..."
      className="w-20 h-20 animate-bounce"
    />
  </div>
);

// Custom Arrow Component
const Arrow = ({ onClick, direction }) => (
  <div
    className={`absolute z-10 top-1/2 transform -translate-y-1/2 ${
      direction === "left" ? "-left-6" : "-right-6"
    } cursor-pointer text-yellow-400 hover:text-yellow-600 bg-white rounded-full shadow-md p-1`}
    onClick={onClick}
  >
    {direction === "left" ? (
      <IoIosArrowDropleft size={36} />
    ) : (
      <IoIosArrowDropright size={36} />
    )}
  </div>
);



const Negara = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const renderSlider = (data) => (
    <Slider {...settings}>
      {data.map((item, index) => (
        <motion.div
          key={index}
          className="p-2"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img
              src={item.src}
              alt={item.country}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold font-primary text-black">
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

      {/* Asia Section */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center font-primary">
          Asia
        </h2>
        {renderSlider(asiaCountries)}
      </section>

      {/* Europe Section */}
      <section className="container mx-auto px-4 mt-16 mb-20">
        <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center font-primary">
          Europe
        </h2>
        {renderSlider(europeCountries)}
      </section>

      <Footer />
    </div>
  );
};

export default Negara;
