import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="fixed flex flex-col items-center justify-center min-h-screen">
      <div className="absolute inset-0">
      <div className="flex items-center justify-center h-screen">
  <img
    src="/formapsi.png"
    alt="Background"
    className="object-cover w-[900px] h-[900px]"
  /> 
</div>


      </div>
      <div className="absolute inset-0 bg-black bg-opacity-55"></div>
      <div className="absolute inset-0 bg-primary-950 bg-opacity-20"></div>
      <div className="relative z-10 flex flex-col items-center text-center p-4 md:p-8">
        <h3 className="text-secondary-400 text-4xl md:text-5xl font-primary-Poppins font-extrabold">
          Selamat Datang
        </h3>
        <div className="text-white text-3xl md:text-6xl font-primary-Poppins font-extrabold mb-6">
          <h3>FORMAPSI LOTIM</h3>
        </div>
        <div className="text-secondary-400 text-lg md:text-xl font-primary-Poppins font-extrabold mb-6">
          <p>
            ( Forum Mahasiswa Pemerhati Sosial Lombok Timur )
          </p>
        </div>
        <div className="text-white text-base md:text-lg font-primary mb-6">
          <p className="leading-relaxed">
            Forum Mahasiswa Pemerhati Sosial Lombok Timur (FORMAPSI LOTIM)
            adalah salah satu organisasi kemahasiswaan yang bergerak di bidang
            sosial dan kemanusiaan. Forum Mahasiswa Pemerhati Sosial Lombok Timur
            lahir atas dasar bentuk kepeduliaan para mahasiswa yang ada di Kabupaten
            Lombok Timur terhadap permasalahan-permasalahan sosial yang terjadi ditengah
            masyarakat. Hal ini menjadi faktor penggerak para mahasiswa Lombok Timur untuk
            membentuk sebuah organisasi kemahasiswaan yang kita bentuk dengan nama Forum
            Mahasiswa Pemerhati Sosial Lombok Timur. Sarana Atau Aspek Yang Penting Dalam
            Pembentukan Dan Pengembanagan Sumber Daya manusia yang utuh sesuai dengan arah
            pembangunan nasional saat ini. Hal tersebut  dijadikan  sebagai landasan sehingga
            diperlukan peran aktif  dalam mewujudkan cita cita kemerdekaan yang merupakan
            aspirasi luhur dari bangsa Indonesia. <br />
          </p>
        </div>
        <div>
          <button
            className="text-white bg-secondary-500 px-6 py-2 rounded-md hover:bg-secondary-600"
          >
            Mulai
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
