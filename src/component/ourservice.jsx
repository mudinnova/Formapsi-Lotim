import { motion } from "framer-motion";
import Slider from "react-slick";
import images from "../data/country"; // data negara

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

// Custom Arrow
const Arrow = ({ direction, onClick }) => (
  <div
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 z-20 
      bg-white p-2 rounded-full shadow cursor-pointer 
      hover:bg-gray-100 transition
      ${direction === "left" ? "left-2" : "right-2"}`}
  >
    {direction === "left" ? (
      <IoIosArrowDropleft size={28} className="text-blue-900" />
    ) : (
      <IoIosArrowDropright size={28} className="text-blue-900" />
    )}
  </div>
);

const OurService = () => {
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

    // RESPONSIVE BREAKPOINTS
    responsive: [
      {
        breakpoint: 1024, // tablet landscape
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // HP
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-16 bg-white px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
          Country
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Countries of Destination for Working Abroad
        </p>
      </motion.div>

      {/* Slider */}
      <Slider {...settings}>
        {images.map((country, index) => (
          <motion.div key={index} whileHover={{ scale: 1.04 }} className="p-4">
            <div className="bg-gray-50 rounded-xl shadow hover:shadow-xl overflow-hidden transition">
              <img
                src={country.src}
                alt={country.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold">{country.name}</h3>
                <p className="text-sm text-gray-600">{country.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default OurService;
