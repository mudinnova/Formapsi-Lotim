import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';  // Pastikan Anda mengimpor useNavigate dari react-router-dom

const OurService = () => {
  // Array gambar untuk galeri dengan nama negara
  const navigate = useNavigate();  // Hook navigate untuk navigasi
  const images = [
    { src: "/polandia.jpg", name: "Polandia" },
    { src: "/bulgaria.jpg", name: "Bulgaria" },
    { src: "/slovakia.jpg", name: "Slovakia" },
    { src: "/hungaria.jpg", name: "Hungaria" },
    { src: "/portugal.jpg", name: "Portugal" },
  ];

  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      const scrollStep = 1; // Kecepatan scroll (pixel per langkah)
      const scrollInterval = 30; // Interval waktu (ms)

      const autoScroll = setInterval(() => {
        gallery.scrollLeft += scrollStep;

        // Reset ke awal saat mencapai akhir
        if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth) {
          gallery.scrollLeft = 0;
        }
      }, scrollInterval);

      // Membersihkan interval saat komponen di-unmount
      return () => clearInterval(autoScroll);
    }
  }, []);

  // Variabel animasi menggunakan Framer Motion
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
      <div className="bg-gray-100 h-full max-w-[1200px] shadow-lg rounded-lg">
        {/* Judul */}
        <div className="flex flex-col items-center mt-6">
          <h3 className="text-yellow-500 font-primary font-bold text-4xl">
            Our Service
          </h3>
        </div>
        {/* Galeri */}
        <div
          ref={galleryRef}
          className="flex flex-row mt-6 mx-4 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center mx-2">
              <motion.img
                src={image.src}
                alt={`Gallery image of ${image.name}`}
                className="rounded-lg w-60 shadow-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              />
              <p className="text-black font-medium mt-2">{image.name}</p>
            </div>
          ))}
        </div>
        <button 
        className="flex justify-end mb-4 w-full"
        onClick={() => {
          navigate("/ourservice/negara");
        }}
      >
        <h1 className="text-white font-medium font-secondary rounded-md bg-yellow-500 hover:bg-yellow-900 px-4 py-2 transition-colors">
          More
        </h1>
        </button>
      </div>
    </motion.div>

  );
};

export default OurService;
