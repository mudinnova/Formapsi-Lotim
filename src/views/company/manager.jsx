import React, { useState, useEffect } from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";
import { motion } from "framer-motion";


const positions = [
  { title: "PRESIDENT DIRECTOR", imgSrc: "/manager/asrianto.jpg", description: "Asrianto" },
  { title: "PRESIDENT COMMISSIONER", imgSrc: "/manager/komut.jpg", description: "Zulita Maehartin" },
  { title: "DIRECTOR", imgSrc: "/manager/rodii.jpg", description: "Rodi Wardana" },
  { title: "COMMISSIONER", imgSrc: "/manager/mursall.jpg", description: "Mursal" },
  { title: "FINANCE MANAGER", imgSrc: "/manager/rodiw.jpg", description: "Zul Fitriani Tri Maehartin" },
  { title: "HUMAN RESOURCE MANAGER", imgSrc: "/manager/khaliq.jpg", description: "Rafiul Khaliq" },
  { title: "MARKETING MANAGER", imgSrc: "/manager/Karti.jpg", description: "Karti" },
  { title: "ADMINISTRATOR", imgSrc: "/manager/novaa.jpg", description: "Muhamad Halimudin Nova" },
  { title: "ADMINISTRATOR", imgSrc: "/manager/ikaaa.jpg", description: "Monika MayaDiana Putri" },
  { title: "ADMINISTRATOR", imgSrc: "/manager/sulamiyah.jpg", description: "Baiq Sullamiyah" },
  { title: "MARKETING DIVISION", imgSrc: "/manager/SALEHHh.jpg", description: "Muhammad Saleh" },
  { title: "INTERNATIONAL JOB AFFAIR", imgSrc: "/manager/faridd.jpg", description: "Farid" }
];

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img
        src="/logoshabi.png"
        alt="Loading..."
        className="w-20 h-20 animate-bounce"
      />
  </div>
);

const Manager = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header Section */}
      <div className="relative w-full h-48 flex items-center justify-center mt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/web2/gedung.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 border-l-4 border-yellow-500 pl-4">
            MANAGER
          </h1>
          <p className="text-lg md:text-xl mt-2">COMPANY ORGANIZATIONAL STRUCTURE</p>
          <div className="w-96 h-1 bg-white mt-2 mx-auto"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative flex-grow">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/bg3.jpg')" }} />
        <div className="relative z-10 my-12">
          <h2 className="text-4xl font-bold text-center font-primary text-yellow-500 mb-4 pt-4">
            COMPANY ORGANIZATIONAL STRUCTURE
          </h2>

          {/* President Director */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-6 px-4"
          >
            <div className="text-black p-6 rounded-lg rounded-t-full relative">
              <img src={positions[0].imgSrc} alt={positions[0].title} className="w-60 rounded-t-full mx-auto" />
              <div className="w-full absolute bg-yellow-500 text-white py-2 mt-[-70px] rounded-b-lg shadow-md right-6">
                <h3 className="mx-2 font-extrabold font-primary text-2xl">{positions[0].title}</h3>
                <p className="text-xl font-medium font-secondary">{positions[0].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Other Managers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-24 mt-4"
          >
            {positions.slice(1).map((position, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-black p-4 rounded-lg text-center shadow-md bg-gray-100">
                  <h4 className="font-bold font-secondary text-xl">{position.title}</h4>
                  <img src={position.imgSrc} alt={position.title} className="w-60 rounded-md mt-4 mx-auto" />
                  <p className="mt-2 font-medium font-secondary">{position.description}</p>
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
