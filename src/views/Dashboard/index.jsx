import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar"; // Import the Navbar component

const Dashboard = () => {
  const galleryRef = useRef(null); // Ref untuk galeri

  const images = [
    '/gambar1.jpg',
    '/gambar2.jpg',
    '/gambar3.jpg',
    '/gambar4.jpg',
  ];

  useEffect(() => {
    const gallery = galleryRef.current;

    if (gallery) {
      const scrollInterval = setInterval(() => {
        if (gallery.scrollLeft + gallery.offsetWidth >= gallery.scrollWidth) {
          // Jika sudah mencapai akhir, kembali ke awal
          gallery.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Lanjutkan scroll ke kanan
          gallery.scrollBy({ left: 1, behavior: "smooth" }); // Sesuaikan kecepatan scroll
        }
      }, 10); // Interval waktu dalam milidetik (semakin kecil, semakin halus)

      return () => clearInterval(scrollInterval); // Cleanup interval
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-5">
      <div>
        <Navbar />
      </div>

      <div className="relative flex-grow flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="w-full max-w-[1300px] h-full rounded-xl overflow-hidden relative mt-6">
          {/* Gradient Overlay */}
          <div className="bg-gradient-to-b from-black to-black opacity-70 absolute inset-0 z-10"></div>
          {/* Image */}
          <img
            src="/bg.jpg"
            alt="Background Image for Pt.Shabi Lombok Bersudara"
            className="object-cover w-full h-48 md:h-72 lg:h-96"
          />
          
          {/* Title */}
          <h1 className="text-white text-1xl md:text-2xl lg:text-5xl font-primary-Poppins font-extrabold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
            PT. Shabi Lombok Bersaudara
          </h1>
        </div>
        
      </div>


      <div className="flex justify-center mt-10 ">
        <div className="bg-white h-full max-w-[1000px] shadow-lg rounded-lg">
          <div className="flex flex-col items-start ml-96">
            <h2 className="text-black font-primary font-bold mb-2 flex justify-start">
              About Us
            </h2>
            <h3 className="text-black font-primary font-bold text-4xl">
              PT.SHABI LOMBOK BERSAUDARA
            </h3>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <img
                src="/perusahaan.jpg"
                alt="perusahaan"
                className="w-1/3 ml-10 bg-gradient-to-tr from-gray-600 to-gray-900"
              />
              <div className="p-4 w-2/3 font-secondary font-medium text-justify">
                <p> PT. Shabi Lombok Bersaudara in Montong Perapen, Bungtiang Village/Subdistrict,
                  West Sakra District, East Lombok Regency, West Nusa Tenggara Province, is an Indonesian
                  TKI Placement Company that places TKI Abroad in both the Formal and Informal sectors with
                  Placement Destination Countries namely Poland, Australia , Japan, Taiwan, Malaysia, Singapore.
                  PT. Shabi Lombok Bersaudara participates in permanent and temporary recruitment with various
                  positions on offer. The expertise we work with helps our team to identify the skills and talents,
                  personalities and attitudes of our candidates that will benefit clients and the candidates themselves.
                  One-on-one interviews as a screening process and technology-based interviews with our users are
                  completed to ensure candidates get suitable placements in our client companies. Integrity,
                  productivity, trust and excellence are values that we believe can bring success to all of us</p>
              </div>
            </div>
            <div className="flex justify-end mb-4 mr-10 ">
              <button className="bg-yellow-500 rounded-md w-24 h-11 hover:bg-yellow-900">
                <h1 className="text-white font-secondary">More </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <div className="bg-white h-full max-w-[1000px] shadow-lg rounded-lg">
          <div className="flex flex-col items-center">
            <h3 className="text-black font-primary font-bold text-4xl">Galeri</h3>
          </div>
          <div
            ref={galleryRef}
            className="flex flex-row mt-4 ml-8 mb-4 overflow-x-auto scroll-smooth whitespace-nowrap"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none", // Menghilangkan scrollbar (untuk Firefox)
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-60 mb-2 mt-4 ml-2 mr-2"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;