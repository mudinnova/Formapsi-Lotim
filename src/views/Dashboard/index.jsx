import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../component/navbar";
import Gallery from "../../component/galeri";
import OurService from "../../component/ourservice";
import Footer from "../../component/penutup";
import SocialMedia from "../../component/sosialmedia";
import { useNavigate } from "react-router-dom";
import { FaGlobeAsia } from "react-icons/fa";

const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <img src="/logoshabi.png" alt="Loading..." className="w-16 h-16 animate-bounce" />
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full flex flex-col bg-white text-black overflow-x-hidden"
    >
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[90vh] px-6 overflow-hidden">
        <img
          src="/web2/gam1.jpg"
          className="absolute inset-0 w-full h-full object-cover brightness-[.4]"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        <div className="relative z-10 text-left max-w-5xl text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            PT SHABI LOMBOK BERSAUDARA
          </h1>
          <p className="text-lg sm:text-xl mb-6 max-w-lg">
            Migrant Worker Placement with Integrity and Professionalism.
          </p>
          <button
            onClick={() => navigate("/profile/company")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Operating Hours */}
      <div className="bg-yellow-300 py-3 text-center text-sm md:text-base font-medium">
        <p>
          <span className="mr-4">🕒 Mon–Fri: 08:00 AM – 04:00 PM WITA</span>
          <span>Saturday: 08:00 AM – 12:00 PM WITA</span>
        </p>
      </div>

      {/* About Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="w-full rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <video src="/video/shabi.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl text-yellow-500 font-bold mb-3 flex items-center gap-2">
            <FaGlobeAsia /> About Us
          </h2>
          <h3 className="text-xl font-semibold mb-4 text-black">PT. Shabi Lombok Bersaudara</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            We are an Indonesian Migrant Worker Placement Company (P3MI) that deploys workers to destinations such as
            the European Union, Australia, Japan, Taiwan, Malaysia, the Maldives, Saudi Arabia, and Singapore.
          </p>
          <button
            onClick={() => navigate("/profile/company")}
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-white px-5 py-2 rounded-lg shadow-lg transition-transform hover:scale-105"
          >
            Read More
          </button>
        </motion.div>
      </section>

      {/* Gallery */}
      <section className="py-10 px-6 bg-gray-50">
        <Gallery />
      </section>

      {/* Services Section */}
      <OurService />

      {/* Social Media Section */}
      <motion.section
        className="py-16 bg-white grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative flex items-center justify-center">
          <div className="absolute bg-white shadow px-5 py-3 rounded-lg text-black text-sm font-medium top-[-20px] left-10 z-10">
            Confused about how to work abroad?
          </div>
          <img src="/animasi/animasi2.png" alt="Confused Person" className="w-72 animate-bounce-slow" />
        </div>
        <div>
          <SocialMedia />
        </div>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default Dashboard;
