import { motion } from "framer-motion";
import Navbar from "../../component/navbar";
import Gallery from "../../component/galeri";
import OurService from "../../component/ourservice";
import Footer from "../../component/penutup";
import { useNavigate } from "react-router-dom";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

const Dashboard = () => {
  const navigate = useNavigate();
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="flex flex-col min-h-screen w-full z-50">
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
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-primary-Poppins font-extrabold">
              WELCOME
            </h1>
            <h1 className="text-yellow-500 text-2xl md:text-4xl lg:text-5xl font-primary-Poppins font-extrabold">
              PT. SHABI LOMBOK BERSAUDARA
            </h1>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl font-medium font-primary">
              Perusahaan Penempatan Pekerja Migran Indonesia (P3MI)
            </h2>
          </div>
        </div>
      </div>

      {/* Jam Operasional */}
      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-center text-amber-500">
            Jam Operasional
          </h1>
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
      <motion.div
        className="flex justify-center mt-16"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-white space-y-8 md:space-y-0 md:space-x-12">
          {/* Bagian Kiri - Gambar */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="relative w-[200px] md:w-[300px] lg:w-[350px]">
              <img
                src="/web2/gam2.jpg"
                alt="Gedung 1"
                className="rounded-lg shadow-lg w-full"
              />
              <img
                src="/web2/gam3.jpg"
                alt="Gedung 2"
                className="rounded-lg shadow-lg absolute bottom-[-32px] right-[-40px] w-3/4 border-4 border-white"
              />
            </div>
          </div>

          {/* Bagian Kanan - Teks */}
          <div className="w-full md:w-1/2">
            <h2 className="text-black text-xl md:text-2xl font-bold">Tentang</h2>
            <h1 className="text-yellow-500 text-2xl md:text-3xl lg:text-4xl font-extrabold mt-2">
              PT. SHABI LOMBOK BERSAUDARA
            </h1>
            <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed font-bold font-secondary">
              PT. Shabi Lombok Bersaudara di Montong Pengen, Bungtiang Village/Subdistrict,
              West Sakra District, East Lombok Regency, West Nusa Tenggara Province, is an 
              Indonesian TKI Placement Company that places TKI abroad both in the formal and 
              informal sectors with Placement Destination Countries namely Poland, Australia, 
              Japan, Taiwan, Malaysia, and Singapore. Our expertise ensures candidates are 
              matched with suitable placements through integrity, productivity, trust, and excellence.
            </p>
            <button className="mt-6 bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition">
              Selengkapnya
            </button>
          </div>
        </section>
      </motion.div>

      {/* Gallery Section */}
      <div className="mt-16">
        <Gallery />
      </div>

      {/* Our Services */}
      <div className="mt-16 pb-10">
        <OurService />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
