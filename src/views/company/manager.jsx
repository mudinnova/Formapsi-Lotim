import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import managerImage from "../../data/datamanager";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";

// ✅ Loader dengan animasi bounce manual (framer-motion)
const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <motion.img
      src="/logoshabi.png"
      alt="Loading..."
      className="w-16 h-16"
      animate={{ y: [0, -30, 0] }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 0.8,
        ease: "easeInOut",
      }}
    />
  </div>
);

// ✅ Card reusable
const Card = ({ title, subtitle, foto, bg = "bg-white", border = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`p-4 shadow-md text-center ${bg} ${border ? "border" : ""}`}
  >
    {foto && (
      <motion.img
        src={foto}
        alt={title}
        className="w-full h-80 object-contain mx-auto mb-3 rounded-md"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
    )}
    <h4 className="font-bold text-lg">{title}</h4>
    {subtitle && <p className="text-sm text-yellow-600 mt-1">{subtitle}</p>}
  </motion.div>
);

const ProfileManager = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading 1.5 detik
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const first = managerImage.slice(0, 1);
  const rest = managerImage.slice(1);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      <Navbar />
      <div className="mt-20">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 w-full bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: "url('/web2/gedung.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
              PROFILE
            </h1>
            <p className="text-lg mt-2">Manajemen PT. Shabi Lombok Bersaudara</p>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-3" />
          </div>
        </motion.div>

        {/* Konten */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-100 to-white">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold font-heading text-center mb-12 text-blue-950"
          >
            Struktur Manajemen
          </motion.h2>

          <div className="flex justify-center mb-10">
            {first.map((manager, idx) => (
              <Card
                key={idx}
                title={manager.description}
                subtitle={manager.title}
                foto={manager.imgSrc}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {rest.map((manager, idx) => (
              <Card
                key={idx}
                title={manager.description}
                subtitle={manager.title}
                foto={manager.imgSrc}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileManager;
