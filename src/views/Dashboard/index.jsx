import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../component/navbar";
import Gallery from "../../component/galeri";
import OurService from "../../component/ourservice";
import Footer from "../../component/penutup";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import SocialMedia from "../../component/sosialmedia";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <img
        src="/logoshabi.png"
        alt="Loading..."
        className="w-20 h-20 animate-bounce"
      />
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col justify-between min-h-screen w-full bg-white text-black"> 
      <Navbar />

      <div className="relative flex-grow flex flex-col items-center justify-center">
        <div className="w-full relative">
          <img
            src="/web2/gam1.jpg"
            alt="PT. Shabi Lombok Bersaudara Background"
            className="object-cover w-full h-[640px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3 bg-gradient-to-b from-transparent to-white">
            <motion.h1
              className="text-black font-primary text-4xl md:text-5xl lg:text-6xl font-primary-Poppins font-extrabold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              WELCOME
            </motion.h1>
            <motion.h1
              className="text-yellow-500 text-2xl font-primary md:text-4xl lg:text-5xl font-primary-Poppins font-extrabold"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              PT. SHABI LOMBOK BERSAUDARA
            </motion.h1>
            <motion.h2
              className="text-black text-lg md:text-xl lg:text-2xl font-medium font-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              Perusahaan Penempatan Pekerja Migran Indonesia (P3MI)
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg border border-yellow-500 p-6 md:p-8">
          <h1 className="text-2xl font-bold font-primary text-center text-yellow-500">
            Jam Operasional
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex items-center space-x-2 text-black font-secondary font-medium">
              <FaRegCalendarAlt />
              <span>Senin - Jumat</span>
            </div>
            <div className="flex items-center space-x-2 text-black font-secondary font-medium">
              <MdOutlineAccessTime />
              <span>08.00 - 16.00 WITA</span>
            </div>
            <div className="flex items-center space-x-2 text-black font-secondary font-medium">
              <FaRegCalendarAlt />
              <span>Sabtu</span>
            </div>
            <div className="flex items-center space-x-2 text-black font-secondary font-medium">
              <MdOutlineAccessTime />
              <span>08.00 - 12.00 WITA</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 space-y-8 md:space-y-0 md:space-x-12">
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute bottom-[30%] right-[70%] w-36 h-36 md:w-44 md:h-44 border-4 md:border-[5px] border-yellow-500 rounded-full opacity-100"></div>
            <div className="absolute bottom-[70%] right-[-1%] w-44 h-44 md:w-28 md:h-28 border-8 md:border-[12px] border-yellow-500 rounded-full opacity-100"></div>
            <div className="absolute bottom-[-10%] right-[30%] w-16 h-16 md:w-24 md:h-24 border-6 md:border-[10px] border-yellow-500 rounded-full opacity-100"></div>
            <div className="relative w-[100%] max-w-xs md:max-w-sm lg:max-w-md">
              <video
                src="/video/shabi.mp4"
                className="rounded-lg shadow-lg w-full"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-black font-primary text-xl md:text-2xl font-bold">About Us</h2>
            <h1 className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl font-primary font-extrabold mt-2">
              PT. SHABI LOMBOK BERSAUDARA
            </h1>
            <p className="text-gray-800 mt-4 text-sm md:text-base leading-relaxed font-secondary font-bold">
              PT. Shabi Lombok Bersaudara is an Indonesian Migrant Worker Placement Company (P3MI)
              that places migrant workers in various destination countries such as the European
              Union, Australia, Japan, Taiwan, Malaysia, the Maldives, Saudi Arabia, and Singapore.
              We are committed to placing candidates in positions that align with integrity,
              productivity, trust, and excellence.
            </p>
            <button className="mt-6 bg-yellow-500 font-secondary text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition">
              More
            </button>
          </div>
        </section>
      </motion.div>

      <Gallery />
      <div className="mt-7">
        <OurService />
      </div>

      {/* Ilustrasi + Social Media dengan animasi */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Ilustrasi + Chat (kiri) */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Chat Bubble */}
          <div className="absolute -top-4 md:-top-3 bg-white border border-gray-300 shadow-md rounded-xl px-6 py-4 max-w-xs md:max-w-md text-base md:text-lg font-secondary text-black z-10">
            <p>Hmm... Gimana sih cara kerja di luar negeri?</p>
            <div className="absolute left-6 -bottom-3 w-4 h-4 bg-white border-l border-b border-gray-300 rotate-45"></div>
          </div>

          {/* Gambar Ilustrasi */}
          <img
            src="/animasi/orangbingung.png"
            alt="Orang bingung"
            className="w-96 md:w-80  animate-bounce-slow"
          />
        </motion.div>

        {/* Social Media (kanan) */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SocialMedia />
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Dashboard;
