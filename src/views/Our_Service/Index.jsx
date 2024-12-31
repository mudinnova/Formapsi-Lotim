import React from "react";
import Navbar from "../../component/navbar";
import Footer from "../../component/penutup";

const Kerjsama = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="relative flex-grow">
                {/* Full-screen background */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-10 w-full"
                    style={{ backgroundImage: `url('/background.jpg')`,  }}
                />
                <div className="flex justify-center items-center pt-10 pb-9 relative ">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-1/2">
                        <h1 className="text-4xl text-yellow-500 font-bold font-primary flex justify-center">COLLABORATION</h1>
                    </div>
                    <div>

                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Kerjsama;
