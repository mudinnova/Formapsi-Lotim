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
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          <div className="bg-gradient-to-b from-black to-black opacity-70 absolute inset-0 z-10"></div>
          <img
            src="/bg.jpg"
            alt="Background Image for Pt.Shabi Lombok Bersudara"
            className="object-cover h-96 w-full"
          />
          <h1 className="text-white text-1xl md:text-6xl font-primary-Poppins font-extrabold absolute top-36 left-60 text-center z-10">
            PT. Shabi Lombok Bersaudara
          </h1>
        </div>
      </div>

      <div className="flex justify-center mt-10 ">
        <div className="bg-white h-full max-w-[1000px] shadow-lg rounded-lg">
          <div className="flex flex-col items-start ml-96">
            <h2 className="text-black font-primary font-bold mb-2 flex justify-start">
              Tentang Kami
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
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.Contrary to popular belief, Lorem Ipsum is
                  not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                  making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                  in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical literature, discovered the undoubtable source.
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
                  "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
              </div>
            </div>
            <div className="flex justify-end mb-4 mr-10 ">
              <button className="bg-yellow-500 rounded-md w-36 h-11 hover:bg-yellow-900">
                <h1 className="text-white font-secondary">Selengkapnya </h1>
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