import React, { useState, useEffect } from "react";
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
    setTimeout(() => setLoading(false), 2000); // Simulasi loading selama 2 detik
  }, []);

  if (loading) {
    return <Loader />;
    
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative w-full h-48 flex items-center justify-center mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/web2/gedung.jpg')` }}
        ></div>

        {/* Overlay Hitam dengan Opacity */}
        <div className="absolute inset-0 bg-black opacity-70"></div>

        {/* Content */}
        <div className="relative text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 relative inline-block border-l-4 border-yellow-500 pl-4">
            PROFILE
          </h1>
          <p className="text-lg md:text-xl mt-2">
            ABOUT US PT SHABI LOMBOK BERSAUDARA
          </p>
          <div className="w-96 h-1 bg-white mt-2 mx-auto"></div>
        </div>
      </div>

      <div className="relative flex-grow">
        {/* Full-screen background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 hidden md:block"
          style={{ backgroundImage: `url('/bg4.jpg')` }}
        />

        {/* Content */}
        <div className="flex justify-center items-center py-10 px-4 relative">
          <div className="bg-white p-5 md:p-10 rounded-lg shadow-lg w-full max-w-3xl">
            <h2 className="text-2xl text-yellow-500 text-center font-primary font-medium">
              About
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold font-primary text-center">
              PT. SHABI LOMBOK BERSAUDARA
            </h1>

            {/* Logo */}
            <img
              src="/logoshabi.png"
              alt="logo shabi"
              className="h-40 md:h-60 lg:h-80 mx-auto my-4"
            />

            {/* Description */}
            <p className="text-justify text-sm md:text-base">
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

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div>
                <h2 className="font-primary font-bold text-lg md:text-xl">
                  Vision
                </h2>
                <p className="text-justify text-sm md:text-base">
                  Creating Quality and Superior Workers, Expanding Job
                  Opportunities.
                </p>
              </div>
              <div>
                <h2 className="font-primary font-bold text-lg md:text-xl">
                  Mission
                </h2>
                <p className="text-justify text-sm md:text-base">
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