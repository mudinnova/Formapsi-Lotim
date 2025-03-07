import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const images = [
    "/gambar1.jpg",
    "/gambar2.jpg",
    "/gambar3.jpg",
    "/gambar4.jpg",
    "/activities1.jpg",
    "/activities2.jpg",
    "/activities3.jpg",
    "/activities6.jpg",
    "/activities7.jpg",
    "/activities8.jpg",
    "/activities9.jpg",
    "/activities10.jpg",
    "/activities11.jpg",
    "/activities12.jpg",
    "/activities5.jpg",
  ];

  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      const scrollStep = 1;
      const scrollInterval = 30;

      const autoScroll = setInterval(() => {
        gallery.scrollLeft += scrollStep;
        if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth) {
          gallery.scrollLeft = 0;
        }
      }, scrollInterval);

      return () => clearInterval(autoScroll);
    }
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="flex justify-center mt-10 px-4"
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="bg-gray-100 h-full max-w-[1200px] shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-yellow-500 font-primary font-bold text-4xl">Gallery</h3>
        </div>
        <div
          ref={galleryRef}
          className="flex flex-row mt-6 overflow-x-auto whitespace-nowrap scrollbar-hide px-4"
        >
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="rounded-lg w-56 h-40 object-cover mx-2 shadow-md"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="text-white font-medium font-secondary rounded-md bg-yellow-500 hover:bg-yellow-900 px-4 py-2 transition-colors"
            onClick={() => navigate("/galeri")}
          >
            More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
