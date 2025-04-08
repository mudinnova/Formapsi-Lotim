import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";

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

const Company = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar />
      <div className="relative w-full h-64 flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: `url('/web2/gedung.jpg')` }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>

        <div className="relative text-black text-center px-6">
          <motion.h1
            className="text-4xl font-primary md:text-5xl font-extrabold text-yellow-500"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            COMPANY PROFILE
          </motion.h1>
          <motion.p
            className="text-lg font-secondary text-white md:text-xl mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Company Profile & Manager
          </motion.p>
          <motion.div
            className="w-32 h-1 bg-yellow-500 mt-4 mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
      </div>

      <div className="relative flex-grow">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5 hidden md:block"
          style={{ backgroundImage: `url('/bg4.jpg')` }}
        ></div>

        <div className="flex justify-center items-center py-16 px-4 relative">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-2xl w-full max-w-4xl border border-gray-300">
            <h2 className="text-3xl font-primary text-yellow-500 text-center font-bold mb-4">
              About
            </h2>
            <h1 className="text-4xl font-primary md:text-5xl font-extrabold text-center mb-8">
              PT. SHABI LOMBOK BERSAUDARA
            </h1>

            <img
              src="/logoshabi.png"
              alt="logo shabi"
              className="h-40 md:h-60 lg:h-80 mx-auto my-6"
            />

            <p className="text-justify text-base font-secondary md:text-lg leading-relaxed mb-8">
            PT. Shabi Lombok Bersaudara, located in Montong Pengen, Bungtiang
              Village/Subdistrict, West Sakra District, East Lombok Regency,
              West Nusa Tenggara Province, is an Indonesian Migrant Worker
              Placement Company (P3MI) that places Indonesian Migrant Workers
              (PMI) abroad in both the formal and informal sectors. The
              Destination Countries for Placement include the European Union,
              Australia, Japan, Taiwan, Malaysia, the Maldives, Saudi Arabia,
              and Singapore. PT. Shabi Lombok Bersaudara participates in
              permanent and temporary recruitment with various positions on
              offer. The expertise we work with helps our team to identify the
              skills and talents, personalities and attitudes of our candidates
              that will benefit clients and the candidates themselves.
              One-on-one interviews as a screening process and technology-based
              interviews with our users are completed to ensure candidates get
              suitable placements in our client companies. Integrity,
              productivity, trust and excellence are values that we believe can
              bring success to all of us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h2 className="font-bold font-primary text-2xl text-yellow-500 mb-4">
                  Vision
                </h2>
                <p className="text-justify text-base font-secondary leading-relaxed">
                  Creating Quality and Superior Workers, Expanding Job
                  Opportunities.
                </p>
              </div>
              <div>
                <h2 className="font-bold font-primary text-2xl text-yellow-500 mb-4">
                  Mission
                </h2>
                <p className="text-justify font-secondary text-base leading-relaxed">
                  Fostering and Developing Skills and Establishing Harmonious
                  Relationships with Work Partners Consistently and Constantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Company;
