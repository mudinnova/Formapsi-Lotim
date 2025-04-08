import React, { useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";
import { motion } from "framer-motion";

const positions = [
  { title: "PRESIDENT DIRECTOR", imgSrc: "/manager/asrianto.jpg", description: "Asrianto" },
  { title: "PRESIDENT COMMISSIONER", imgSrc: "/manager/komut.jpg", description: "Zulita Maehartin" },
  { title: "DIRECTOR", imgSrc: "/manager/rodi.jpg", description: "Rodi Wardana" },
  { title: "COMMISSIONER", imgSrc: "/manager/mursal.jpg", description: "Mursal" },
  { title: "MARKETING DIVISION SRIKANDI", imgSrc: "/manager/anik.jpg", description: "Zul Fitriani Tri Maehartin" },
  { title: "HUMAN RESOURCE MANAGER", imgSrc: "/manager/firdaus.jpg", description: "Muhammad Firdaus Khutbi" },
  { title: "FINANCE MANAGER", imgSrc: "/manager/khaliq.jpg", description: "Rafiul Khaliq" },
  { title: "MARKETING MANAGER", imgSrc: "/manager/Karti.jpg", description: "Karti" },
  { title: "DIVISION IT", imgSrc: "/manager/nova.jpg", description: "Muhamad Halimudin Nova" },
  { title: "MARKETING DIVISION", imgSrc: "/manager/saleh.jpg", description: "Muhammad Saleh" },
  { title: "INTERNATIONAL JOB AFFAIR", imgSrc: "/manager/farid.jpg", description: "Farid" }
];

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img src="/logoshabi.png" alt="Loading..." className="w-20 h-20 animate-bounce" />
  </div>
);

const Manager = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />

      {/* Header Section */}
      <div className="relative w-full h-52 flex items-center justify-center mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/web2/gedung.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-yellow-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            OUR TEAM
          </motion.h1>
          <motion.p
            className="text-lg text-white md:text-xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Profile & Our Team
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-yellow-500 mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex-grow">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: "url('/bg3.jpg')" }} />
        <div className="relative z-10 py-12 px-8 lg:px-36">
          <h2 className="text-3xl font-extrabold text-center text-yellow-500 mb-10">
            COMPANY ORGANIZATIONAL STRUCTURE
          </h2>

          {/* President Director */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-6"
          >
            <div className="text-black rounded-lg rounded-t-full relative shadow-lg bg-gray-100">
              <img src={positions[0].imgSrc} alt={positions[0].title} className="w-52 rounded-t-full" />
              <div className="w-full absolute bg-yellow-500 text-white py-1 mt-[-35px] rounded-b-lg shadow-md text-center">
                <h3 className="mx-1 font-extrabold text-xs">{positions[0].title}</h3>
                <p className="text-xs mx-1 font-medium">{positions[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Other Managers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {positions.slice(1).map((position, index) => (
              <div key={index} className="flex flex-col items-center mb-6">
                <div className="text-black rounded-lg rounded-t-full relative shadow-lg bg-gray-100">
                  <img src={position.imgSrc} alt={position.title} className="w-52 rounded-t-full" />
                  <div className="w-full absolute bg-yellow-500 text-white py-1 mt-[-35px] rounded-b-lg shadow-md text-center">
                    <h3 className="mx-1 font-extrabold text-xs">{position.title}</h3>
                    <p className="text-xs mx-1 font-medium">{position.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Manager;
