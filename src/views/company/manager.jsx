import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";
import { motion } from 'framer-motion';

const positions = [
    {
        title: "PRECIDENT DIRECTOR",
        imgSrc: "/manager/asrianto.jpg", // Ganti dengan path gambar Anda
        description: "Asrianto"
    },
    {
        title: "PRECIDENT COMMISSIONER",
        imgSrc: "/manager/komut.jpg", // Ganti dengan path gambar Anda
        description: "Zulita Maehartin"
    },
    {
        title: "DIRECTOR",
        imgSrc: "/manager/rodii.jpg", // Ganti dengan path gambar Anda
        description: "Rodi Wardana"
    },
    {
        title: "COMMISSIONER",
        imgSrc: "/manager/mursall.jpg", // Ganti dengan path gambar Anda
        description: "Mursal"
    },
    {
        title: "FINANCE MANAGER",
        imgSrc: "/manager/rodiw.jpg", // Ganti dengan path gambar Anda
        description: "Zul Fitriani Tri Maehartin  "
    },
    {
        title: "HUMAN RESOURCE MANAGER",
        imgSrc: "/manager/khaliq.jpg", // Ganti dengan path gambar Anda
        description: "Rafiul Khaliq"
    },
    {
        title: "MARKETING MANAGER",
        imgSrc: "/manager/Karti.jpg", // Ganti dengan path gambar Anda
        description: "Karti"
    },
    {
        title: "ADMINISTRATOR",
        imgSrc: "/manager/novaa.jpg", // Ganti dengan path gambar Anda
        description: "Muhamad Halimudin Nova"
    },
    {
        title: "ADMINISTRATOR",
        imgSrc: "/manager/ikaaa.jpg", // Ganti dengan path gambar Anda
        description: "Monika MayaDiana Putri"
    },
    {
        title: "ADMINISTRATOR",
        imgSrc: "/manager/sulamiyah.jpg", // Ganti dengan path gambar Anda
        description: "Baiq Sullamiyah"
    },
    {
        title: "MARKETING DIVISION",
        imgSrc: "/manager/SALEHHh.jpg", // Ganti dengan path gambar Anda
        description: "Muhammad Saleh"
    },
    {
        title: "INTERNATIONAL JOB AFFAIR",
        imgSrc: "/manager/faridd.jpg", // Ganti dengan path gambar Anda
        description: "Farid"
    }   
    
];

const Manager = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="relative flex-grow">
                {/* Full-screen background */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    style={{ backgroundImage: `url('/bg3.jpg')`,  }}
                />
                <div className="relative z-10 my-12">
                    <h2 className="text-4xl font-bold text-center font-primary text-yellow-500 mb-4 pt-4">
                        COMPANY ORGANIZATIONALY STRUCTURE
                    </h2>

                    {/* Direktur Utama section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center mb-6 px-4"
                    >
                        <div className="text-black p-6 rounded-lg shadow-md bg-gray-100">
                            <h3 className="font-extrabold text-center font-primary text-2xl">{positions[0].title}</h3>
                            <img
                                src={positions[0].imgSrc}
                                alt={positions[0].title}
                                className="w-60 rounded-md mt-4 mx-auto"
                            />
                            <p className="mt-2 text-center font-medium font-secondary">{positions[0].description}</p>
                        </div>
                    </motion.div>

                    {/* Manager Section */}
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
                                    <img
                                        src={position.imgSrc}
                                        alt={position.title}
                                        className="w-60 rounded-md mt-4 mx-auto"
                                    />
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
