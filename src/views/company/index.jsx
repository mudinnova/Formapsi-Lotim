import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";

const Company = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="relative flex-grow">
                {/* Full-screen background */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 w-1/2"
                    style={{ backgroundImage: `url('/bg4.jpg')`,  }}
                />
                <div className="flex justify-center items-center pt-10 pb-9 relative ">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
                        <h2 className="text-2xl text-yellow-500 flex justify-center font-primary font-medium">About</h2>
                        <h1 className="text-4xl font-bold font-primary flex justify-center">PT.SHABI LOMBOK BERSUDARA</h1>
                        <img
                            src="/logoshabi.png"
                            alt="logo shabi"
                            className="h-80 sm:h-80 ml-36"
                        />
                        <p className="text-justify">
                        PT. Shabi Lombok Bersaudara in Montong Perapen, Bungtiang Village/Subdistrict, West Sakra District, East Lombok Regency, West Nusa Tenggara Province, is an Indonesian TKI Placement Company that places TKI Abroad in both the Formal and Informal sectors with Placement Destination Countries namely Poland, Australia , Japan, Taiwan, Malaysia, Singapore. PT. Shabi Lombok Bersaudara participates in permanent and temporary recruitment with various positions on offer. The expertise we work with helps our team to identify the skills and talents, personalities and attitudes of our candidates that will benefit clients and the candidates themselves. One-on-one interviews as a screening process and technology-based interviews with our users are completed to ensure candidates get suitable placements in our client companies. Integrity, productivity, trust and excellence are values ​​that we believe can bring success to all of us.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-4  w-full">
                            <h2 className="font-primary font-bold text-xl">
                                Vision
                            </h2>
                            <h2 className="font-primary font-bold text-xl">
                                Mission
                            </h2>
                            <p className="text-justify">
                            Creating Quality and Superior Workers, Expanding Job Opportunities
                            </p>
                            <p className="text-justify">
                              Fostering and Developing Skills and Establishing Harmonious Relationships with Work Partners Consistently and Constantly
                            </p>
                        
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Company;
