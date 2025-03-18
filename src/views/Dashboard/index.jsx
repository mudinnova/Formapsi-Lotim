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
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />

      <div className="relative flex-grow flex flex-col items-center justify-center">
        <div className="w-full h-[560px] overflow-hidden relative">
          <div className="bg-gradient-to-b from-black to-black opacity-70 absolute inset-0"></div>
          <img
            src="/web2/gam1.jpg"
            alt="PT. Shabi Lombok Bersaudara Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-primary-Poppins font-extrabold">WELCOME</h1>
            <h1 className="text-yellow-500 text-2xl md:text-4xl lg:text-5xl font-primary-Poppins font-extrabold">PT. SHABI LOMBOK BERSAUDARA</h1>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-medium font-primary">Perusahaan Penempatan Pekerja Migran Indonesia (P3MI)</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <div className="max-w-lg w-full bg-white shadow-md rounded-lg border border-yellow-500 p-6 md:p-8">
          <h1 className="text-2xl font-bold text-center text-amber-500">Jam Operasional</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex items-center space-x-2 text-amber-500 font-medium">
              <FaRegCalendarAlt />
              <span>Senin - Jumat</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-500 font-medium">
              <MdOutlineAccessTime />
              <span>08.00 - 16.00 WITA</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-500 font-medium">
              <FaRegCalendarAlt />
              <span>Sabtu</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-500 font-medium">
              <MdOutlineAccessTime />
              <span>08.00 - 12.00 WITA</span>
            </div>
          </div>
        </div>
      </div>

      <motion.div className="relative py-16 bg-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white space-y-8 md:space-y-0 md:space-x-12">
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Lingkaran dekoratif */}
            <div className="absolute bottom-[30%] right-[70%] w-36 h-36 md:w-44 md:h-44 border-4 md:border-[5px] border-yellow-500 rounded-full opacity-100"></div>
            <div className="absolute bottom-[70%] right-[-1%] w-44 h-44 md:w-28 md:h-28 border-8 md:border-[12px] border-yellow-500 rounded-full opacity-100"></div>
            <div className="absolute bottom-[-10%] right-[30%] w-16 h-16 md:w-24 md:h-24 border-6 md:border-[10px] border-yellow-500 rounded-full opacity-100"></div>
            <div className="relative w-[100%] max-w-xs md:max-w-sm lg:max-w-md">
              {/* Video utama */}
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
            <h2 className="text-black text-xl md:text-2xl font-bold">About Us</h2>
            <h1 className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl font-extrabold mt-2">PT. SHABI LOMBOK BERSAUDARA</h1>
            <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed font-bold font-secondary">
              PT. Shabi Lombok Bersaudara is an Indonesian Migrant Worker Placement Company (P3MI)
              that places migrant workers in various destination countries such as the European
              Union, Australia, Japan, Taiwan, Malaysia, the Maldives, Saudi Arabia, and Singapore.
              We are committed to placing candidates in positions that align with integrity,
              productivity, trust, and excellence.
            </p>
            <button className="mt-6 bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition">More</button>
          </div>
        </section>
      </motion.div>

      <Gallery />
      <div className="mt-7">
        <OurService />
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Dashboard;
