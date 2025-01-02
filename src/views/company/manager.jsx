import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";
import { motion } from 'framer-motion';

const positions = [
    {
        title: "Direktur Utama",
        imgSrc: "/dirut.jpg", // Ganti dengan path gambar Anda
        description: "Pemimpin perusahaan dan bertanggung jawab atas keseluruhan operasi."
    },
    {
        title: "Komisaris Utama",
        imgSrc: "/manager.jpg", // Ganti dengan path gambar Anda
        description: "Bertanggung jawab untuk manajemen keuangan perusahaan."
    },
    {
        title: "Direktur",
        imgSrc: "/manager2.jpg", // Ganti dengan path gambar Anda
        description: "Mengelola catatan keuangan dan laporan keuangan perusahaan."
    },
    {
        title: "Komisaris",
        imgSrc: "/manager3.jpg", // Ganti dengan path gambar Anda
        description: "Bertanggung jawab atas kepatuhan pajak perusahaan."
    },
    {
        title: "Manager Keuangan",
        imgSrc: "/manager4.jpg", // Ganti dengan path gambar Anda
        description: "Mengawasi semua kegiatan operasional di perusahaan."
    },
    {
        title: "Manager SDM",
        imgSrc: "/manager5.jpg", // Ganti dengan path gambar Anda
        description: "Mengelola proses produksi dan efisiensi bagi perusahaan."
    },
    {
        title: "Manager Pemasaran",
        imgSrc: "/manager6.jpg", // Ganti dengan path gambar Anda
        description: "Bertanggung jawab untuk distribusi produk perusahaan."
    },
    {
        title: "Direktur Pemasaran",
        imgSrc: "/manager7.jpg", // Ganti dengan path gambar Anda
        description: "Mengelola strategi pemasaran perusahaan."
    },
    {
        title: "Manajer Pemasaran",
        imgSrc: "/manager8.jpg", // Ganti dengan path gambar Anda
        description: "Bertanggung jawab atas kampanye pemasaran."
    },
    {
        title: "Manajer Penjualan",
        imgSrc: "/manager9.jpg", // Ganti dengan path gambar Anda
        description: "Mengelola tim penjualan dan hubungan pelanggan."
    }
];

const Manager = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="relative flex-grow">
                {/* Full-screen background */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 w-1/2"
                    style={{ backgroundImage: `url('/bg3.jpg')`,  }}
                />
                <div className="relative z-10 my-12">
                    <h2 className="text-4xl font-bold text-center font-primary text-yellow-500 mb-4 pt-4">
                        STRUKTUR ORGANISASI PERUSAHAAN
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
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-4"
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
