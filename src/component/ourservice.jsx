import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const OurService = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const images = [
    { 
      src: "/polandia.jpg", 
      name: "Polandia",
      description: "Polandia adalah negara di Eropa Tengah yang terkenal dengan sejarahnya yang kaya, arsitektur klasik, serta budaya yang kuat. Ibu kotanya, Warsawa, merupakan pusat ekonomi dan politik dengan banyak gedung pencakar langit modern yang berpadu dengan bangunan bersejarah."
    },
    { 
      src: "/bulgaria.jpg", 
      name: "Bulgaria",
      description: "Bulgaria adalah negara di Eropa Tenggara yang memiliki sejarah panjang yang mencakup peradaban Romawi, Kekaisaran Bulgaria, hingga era Ottoman. Sofia, ibu kota Bulgaria, merupakan kota yang dipenuhi dengan bangunan bersejarah, gereja kuno, dan pusat kebudayaan yang berkembang pesat."
    },
    { 
      src: "/slovakia.jpg", 
      name: "Slovakia",
      description: "Slovakia merupakan negara di Eropa Tengah yang memiliki lanskap alam yang menakjubkan, dengan Pegunungan Carpathian yang membentang di bagian utara. Negara ini terkenal dengan kastil abad pertengahan, seperti Kastil Spiš yang merupakan salah satu kastil terbesar di Eropa."
    },
    { 
      src: "/hungaria.jpg", 
      name: "Hungaria",
      description: "Hungaria adalah negara yang terletak di Eropa Tengah dengan ibu kota Budapest, yang dikenal sebagai salah satu kota paling indah di dunia. Budapest terkenal dengan Sungai Danube yang membelah kota menjadi dua bagian, Buda dan Pest, serta bangunan ikonik seperti Gedung Parlemen Hungaria."
    },
    { 
      src: "/portugal.jpg", 
      name: "Portugal",
      description: "Portugal adalah negara maritim di Eropa Barat yang dikenal dengan sejarah eksplorasi dunia, pantai yang spektakuler, serta warisan budaya yang kaya. Ibu kotanya, Lisbon, merupakan kota yang penuh dengan bangunan bersejarah, jalanan berbatu yang menawan, serta pemandangan sungai Tagus yang indah."
    },
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

  return (
    <motion.div className="flex flex-col items-center mt-10 px-4 md:px-10 lg:px-20">
      <div className="bg-gray-100 w-full max-w-[1200px] shadow-lg rounded-lg p-6">
        <div className="flex flex-col items-center">
          <h3 className="text-yellow-500 font-primary font-bold text-3xl md:text-4xl">Our Service</h3>
        </div>
        <div ref={galleryRef} className="flex flex-row mt-6 mx-4 mb-6 overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
          {images.map((image, index) => (
            <div key={index} className="flex flex-col items-center mx-2 w-48 sm:w-60 cursor-pointer border-b pb-4 bg-white rounded-lg shadow-md p-4" onClick={() => setSelectedCountry(image)}>
              <motion.img src={image.src} alt={`Gallery image of ${image.name}`} className="rounded-lg w-full shadow-md"/>
              <p className="text-black font-medium mt-2 text-lg border-b-2 pb-1 w-full text-center">{image.name}</p>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {selectedCountry && (
            <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
              <motion.div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
                <h4 className="text-xl font-bold text-yellow-600">{selectedCountry.name}</h4>
                <div className="text-gray-700 mt-2 leading-relaxed">
                  <p>{selectedCountry.description}</p>
                </div>
                <div className="space-x-4">
                  <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md" onClick={() => setSelectedCountry(null)}>Close</button>
                  <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-md">Open</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <button className="flex justify-end mb-4 w-full" onClick={() => navigate("/ourservice/negara") }>
          <h1 className="text-white mr-6 font-medium font-secondary rounded-md bg-yellow-500 hover:bg-yellow-900 px-4 py-2 transition-colors">More</h1>
        </button>
      </div>
    </motion.div>
  );
};

export default OurService;