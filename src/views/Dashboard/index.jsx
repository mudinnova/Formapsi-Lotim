import { motion } from "framer-motion";
import Navbar from "../../component/navbar";
import Gallery from "../../component/galeri";
import OurService from "../../component/ourservice";
import Footer from "../../component/penutup";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // Animasi untuk framer-motion
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
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative flex-grow flex flex-col items-center justify-center">
        <div className="w-full max-w-[1300px] h-full rounded-xl overflow-hidden relative mt-6">
          {/* Gradient Overlay */}
          <div className="bg-gradient-to-b from-black to-black opacity-70 absolute inset-0"></div>
          {/* Background Image */}
          <img
            src="/bg.jpg"
            alt="PT. Shabi Lombok Bersaudara Background"
            className="object-cover w-full h-48 md:h-72 lg:h-96"
          />
          {/* Title */}
          <h1 className="text-white text-xl md:text-2xl lg:text-5xl font-primary-Poppins font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
            PT. Shabi Lombok Bersaudara
          </h1>
        </div>
      </div>

      {/* About Us Section */}
      <motion.div
        className="flex justify-center mt-10"
        variants={fadeInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-gray-100 max-w-[1200px] shadow-lg rounded-lg p-6">
          <div className="text-center">
            <h2 className="text-yellow-500 font-primary font-bold text-2xl mb-2">
              About Us
            </h2>
            <h3 className="text-black font-primary font-bold text-4xl">
              PT. Shabi Lombok Bersaudara
            </h3>
          </div>
          <div className="flex flex-col md:flex-row mt-6">
  <video
    src="/video/shabi.mp4"
    autoPlay
    loop
    className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0"
  />
  <div className="md:pl-6 font-secondary font-medium text-justify">
    <p>
      PT. Shabi Lombok Bersaudara in Montong Perapen, Bungtiang
      Village/Subdistrict, West Sakra District, East Lombok Regency,
      West Nusa Tenggara Province, is an Indonesian TKI Placement
      Company that places TKI Abroad in both the Formal and Informal
      sectors with Placement Destination Countries namely Poland,
      Australia, Japan, Taiwan, Malaysia, and Singapore. Our expertise
      ensures candidates are matched with suitable placements through
      integrity, productivity, trust, and excellence.
    </p>
  </div>
</div>

          <div className="flex justify-end mt-4">
            <button
              className="bg-yellow-500 rounded-md px-6 py-2 hover:bg-yellow-900"
              onClick={() => {
                navigate("/profile/company", { replace: true });
              }}
            >
              <h1 className="text-white font-secondary">More</h1>
            </button>
          </div>

        </div>
      </motion.div>

      {/* Gallery Section */}
      <Gallery />
      {/*OurService */}
      <div className="pb-10"><OurService /></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
