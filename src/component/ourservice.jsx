import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const OurService = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const images = [
    {
      src: "/Country/polandia.jpg",
      name: "Polandia",
      description:
        "Polandia terkenal dengan kota Warsawa yang modern namun kaya sejarah. Negara ini merupakan destinasi menarik bagi pekerja migran di bidang manufaktur dan logistik.",
    },
    {
      src: "/Country/ceko.jpg",
      name: "Ceko",
      description:
        "Republik Ceko, dengan ibu kota Praha, adalah pusat industri dan pariwisata. Banyak pekerja migran Indonesia bekerja di pabrik dan sektor jasa di sini.",
    },
    {
      src: "/Country/jepang.jpg",
      name: "Jepang",
      description:
        "Jepang dikenal dengan teknologi tinggi dan budaya kerja yang disiplin. Negara ini banyak merekrut tenaga kerja asing melalui program pemagangan.",
    },
    {
      src: "/Country/arab.jpg",
      name: "Arab Saudi",
      description:
        "Arab Saudi merupakan tujuan populer untuk pekerja rumah tangga dan sektor konstruksi, dengan budaya kerja yang berbeda dan upah kompetitif.",
    },
    {
      src: "/Country/taiwan.jpg",
      name: "Taiwan",
      description:
        "Taiwan menawarkan peluang kerja di sektor pabrik, pengasuhan lansia, dan rumah tangga. Negara ini terkenal dengan kenyamanan hidup dan upah yang layak.",
    },
    {
      src: "/Country/singapura.jpg",
      name: "Singapura",
      description:
        "Singapura dikenal sebagai pusat keuangan dan bisnis di Asia Tenggara. Negara ini menawarkan peluang kerja di sektor rumah tangga, konstruksi, dan layanan. Dengan sistem kerja yang teratur dan lingkungan multikultural, Singapura menjadi pilihan menarik bagi pekerja migran Indonesia.",
    }
    
  ];

  return (
    <motion.div className="flex flex-col items-center mt-10 px-4 md:px-10 lg:px-20">
      <div className="">
        <h3 className="text-yellow-500 font-primary font-bold text-3xl md:text-4xl text-center mb-6">
          Our Service
        </h3>

        <div className="flex flex-row flex-nowrap overflow-x-auto gap-6 pb-4 scrollbar-hide">
          {images.map((image, index) => {
            const cardRef = useRef(null);

            const handleClick = () => {
              setSelected(selected === index ? null : index);
              setTimeout(() => {
                cardRef.current?.scrollIntoView({
                  behavior: "smooth",
                  inline: "center",
                  block: "nearest",
                });
              }, 100);
            };

            return (
              <div
                key={index}
                ref={cardRef}
                className="flex flex-row gap-4 min-w-fit items-start"
              >
                <div
                  className="relative w-[200px] h-[320px] cursor-pointer rounded-md overflow-hidden shadow-md flex-shrink-0"
                  onClick={handleClick}
                >
                  <img
                    src={image.src}
                    alt={`Iconic image of ${image.name}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-60 py-2 text-center">
                    <p className="text-black font-primary font-semibold text-sm">
                      {image.name}
                    </p>
                  </div>
                </div>

                {selected === index && (
                  <motion.div
                    className="max-w-sm bg-white/60 backdrop-blur-md p-4 rounded-lg shadow-md text-sm h-fit"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <p className="text-black font-secondary font-medium">{image.description}</p>
                    {/* <button
                      onClick={() =>
                        navigate(
                          `/ourservice/negara/${image.name
                            .toLowerCase()
                            .replace(/\s/g, "-")}`
                        )
                      }
                      className="mt-3 inline-block bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-800 transition-colors font-secondary"
                    >
                      Selengkapnya
                    </button> */}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="text-white font-medium font-secondary rounded-md bg-yellow-600 hover:bg-yellow-900 px-4 py-2 transition-colors"
            // onClick={() => navigate("/ourservice/negara")}
          >
            More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OurService;
