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
        src="/logoshabi.png" // Ganti dengan path logo yang benar
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
    setTimeout(() => setLoading(false), 2000); // Simulasi loading selama 2 detik
  }, []);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative flex-grow flex flex-col items-center justify-center">
        <div className="w-full h-[560px] overflow-hidden relative">
          {/* Gradient Overlay */}
          <div className="bg-gradient-to-b from-black to-black opacity-70 absolute inset-0"></div>

          {/* Background Image */}
          <img
            src="/web2/gam1.jpg"
            alt="PT. Shabi Lombok Bersaudara Background"
            className="object-cover w-full h-full"
          />
          
          {/* Text Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-3">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-primary-Poppins font-extrabold">WELCOME</h1>
            <h1 className="text-yellow-500 text-2xl md:text-4xl lg:text-5xl font-primary-Poppins font-extrabold">PT. SHABI LOMBOK BERSAUDARA</h1>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-medium font-primary">Perusahaan Penempatan Pekerja Migran Indonesia (P3MI)</h2>
          </div>
        </div>
      </div>
      
      {/* Jam Operasional */}
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
      
      {/* About Us Section */}
      <motion.div className="relative py-16 bg-white" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {/* Isi About Us Tetap Sama */}
      </motion.div>
      
      {/* Gallery Section */}
      <Gallery />

      {/* Our Services */}
      <div className="mt-7">
        <OurService />
      </div>

      {/* Social Media */}
      <SocialMedia />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;