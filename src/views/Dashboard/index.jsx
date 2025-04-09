import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../component/navbar";
import Gallery from "../../component/galeri";
import OurService from "../../component/ourservice";
import Footer from "../../component/penutup";
import { useNavigate } from "react-router-dom";
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

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col justify-between min-h-screen w-full bg-white text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex-grow">
        <img
          src="/web2/gam1.jpg"
          alt="PT. Shabi Lombok Bersaudara Background"
          className="absolute inset-0 object-cover w-full h-[500px] md:h-[760px] brightness-50 grayscale"
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-[500px] md:h-[640px] text-center px-4 sm:px-6 space-y-5 mt-24">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white font-primary break-words"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            WELCOME{" "}
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-2xl">
              TO
            </span>
          </motion.h1>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white font-primary break-words"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            PT.SHABI LOMBOK{" "}
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-2xl">
              BERSAUDARA
            </span>
          </motion.h1>

          <motion.p
            className="text-white/80 text-sm md:text-base max-w-xl mt-2 font-secondary font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Placement of Indonesian Migrant Workers to destination countries with integrity and professionalism.
          </motion.p>

          <motion.button
            className="mt-4 bg-yellow-400 text-black rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            onClick={() =>
              window.scrollTo({ top: 700, behavior: "smooth" })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Operating Hours */}
      <div className="w-full bg-yellow-400 py-4 mt-6">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-black font-primary font-semibold text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <span>Operating Hours:</span>
            <span>Monday - Friday</span>
            <span>08.00 - 16.00 WITA</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Saturday:</span>
            <span>08.00 - 12.00 WITA</span>
          </div>
        </div>
      </div>

      {/* About Us + Video */}
      <motion.div
        className="relative py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 space-y-10 md:space-y-0 md:space-x-12">
          <div className="relative w-full md:w-1/2 flex justify-center">
            {/* Decorative Circles */}
            <div className="hidden md:block absolute bottom-[30%] right-[70%] w-36 h-36 md:w-44 md:h-44 border-4 md:border-[5px] border-yellow-400 rounded-full opacity-100" />
            <div className="hidden md:block absolute bottom-[70%] right-[-1%] w-44 h-44 md:w-28 md:h-28 border-8 md:border-[12px] border-yellow-400 rounded-full opacity-100" />
            <div className="hidden md:block absolute bottom-[-10%] right-[30%] w-16 h-16 md:w-24 md:h-24 border-6 md:border-[10px] border-yellow-400 rounded-full opacity-100" />
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
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
            <h2 className="text-black font-primary text-xl md:text-2xl font-bold">
              About Us
            </h2>
            <h1 className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-primary font-extrabold mt-2">
              PT. SHABI LOMBOK BERSAUDARA
            </h1>
            <p className="text-gray-800 mt-4 text-sm md:text-base leading-relaxed font-secondary font-bold">
              PT. Shabi Lombok Bersaudara is an Indonesian Migrant Worker Placement Company (P3MI) that places migrant workers in various destination countries such as the European Union, Australia, Japan, Taiwan, Malaysia, the Maldives, Saudi Arabia, and Singapore. We are committed to placing candidates in positions that align with integrity, productivity, trust, and excellence.
            </p>
            <button
              onClick={() => navigate("/profile/company")}
              className="mt-6 bg-yellow-400 font-secondary text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-600 transition w-full sm:w-fit"
            >
              More
            </button>
          </div>
        </section>
      </motion.div>

      <Gallery />

      <div className="mt-7">
        <OurService />
      </div>

      {/* Illustration + Social Media */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center px-6 gap-10 md:gap-0 py-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-4 md:-top-10 bg-white border border-gray-300 shadow-md rounded-xl px-6 py-4 max-w-xs md:max-w-md text-base md:text-lg font-secondary text-black z-10">
            <p>Hmm... How do I work abroad?</p>
            <div className="absolute left-6 -bottom-3 w-4 h-4 bg-white border-l border-b border-gray-300 rotate-45"></div>
          </div>
          <img
            src="/animasi/animasi2.png"
            alt="Confused person"
            className="w-[500px] md:w-80 animate-bounce-slow"
          />
        </motion.div>

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
