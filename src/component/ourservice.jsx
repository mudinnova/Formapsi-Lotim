import { motion } from "framer-motion";
import images from "../data/country"; // ← data dari file yang kamu kirim

const OurService = () => {
  return (
    <section className="py-16 bg-white px-6 max-w-7xl mx-auto">
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
                Dokumentasi momen-momen berharga dalam kegiatan sosial, edukasi, dan kolaborasi kami.
              </p>
            </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((country, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >
            <img
              src={country.src}
              alt={`Foto ${country.name}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{country.name}</h3>
              <p className="text-sm text-gray-600">{country.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
