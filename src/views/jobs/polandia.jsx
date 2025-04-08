import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';
import ProcessFlow from '../../component/proses';
import SocialMedia from '../../component/sosialmedia';
import { motion } from "framer-motion";

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black">
    <img src="/logoshabi.png" alt="Loading..." className="w-20 h-20 animate-bounce" />
  </div>
);

const Polandia = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />

      {/* Header */}
      <div className="relative w-full h-64 flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center rounded-lg"
          style={{ backgroundImage: "url('/polandia.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <div className="relative text-white text-center px-6">
        <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-yellow-500"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    POLANDIA
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-xl mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  >
                    LOWONGAN KERJA
                  </motion.p>
                  <motion.div
                    className="w-32 h-1 bg-yellow-500 mt-4 mx-auto"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                  ></motion.div>
        </div>
      </div>

      {/* Konten */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Gambar Utama */}
          <div className="bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <img
              src="/loker/polandia.jpg"
              alt="Polandia"
              className="w-full object-cover rounded-lg"
            />
          </div>

          {/* Lowongan Pekerjaan */}
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-4xl font-bold text-center mb-2">LOWONGAN</h1>
            <h1 className="text-7xl font-bold text-yellow-500 text-center mb-2">PEKERJAAN</h1>
            <h1 className="text-4xl font-bold text-center mb-6">Di Polandia</h1>
            
            <div className='bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6'>
              <h2 className='text-lg font-bold text-yellow-500 mb-4'>Sektor Pabrik</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="/loker/ayam2.jpg" alt="Ayam" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/baja.png" alt="Baja" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/galangan kapal.jpg" alt="Galangan Kapal" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/mebel.jpg" alt="Mebel" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
              </div>
            </div>

            <div className='bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6 mt-6'>
              <h2 className='text-lg font-bold text-yellow-500 mb-4'>Sektor Perkebunan</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="/loker/bluebery.jpg" alt="Blueberry" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/jamur.jpg" alt="Jamur" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/kismis.jpg" alt="Kismis" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/rasbery.jpg" alt="Raspberry" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/stroberi.jpg" alt="Stroberi" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Tentang Polandia */}
        <h2 className="text-3xl font-bold text-yellow-500 mt-12 mb-4">Tentang Polandia</h2>
        <p className="text-gray-300 leading-relaxed">
          Polandia adalah negara yang terletak di Eropa Tengah dengan sejarah yang kaya dan arsitektur klasik.
          Ibu kotanya, <strong>Warsawa</strong>, adalah pusat ekonomi dan budaya.
          Polandia terkenal dengan kastil abad pertengahan, pegunungan indah, dan tradisi kuliner yang khas seperti <em>Pierogi</em> dan <em>Żurek</em>.
        </p>

        {/* Persyaratan, Benefit, Berkas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Persyaratan</h3>
            <ul className="list-disc pl-4 text-gray-300">
              <li>Laki-laki/Perempuan</li>
              <li>Usia 18-45 Tahun</li>
              <li>Sehat jasmani dan rohani</li>
              <li>Kuat Kerja Di Outdoor</li>
            </ul>
          </div>

          <div className="bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Benefit</h3>
            <ul className="list-disc pl-4 text-gray-300">
              <li>Gaji Basic 1000 - 1300 USD</li>
              <li>Fasilitas Tempat Tinggal</li>
              <li>Asuransi</li>
            </ul>
          </div>

          <div className="bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Berkas yang Diperlukan</h3>
            <ul className="list-disc pl-4 text-gray-300">
              <li>Kartu Keluarga Asli</li>
              <li>Fakta Kelahiran Asli</li>
              <li>KTP</li>
              <li>Ijazah Asli</li>
              <li>Buku Nikah (Bagi yang sudah menikah)</li>
              <li>Paspor (Jika ada paspor sebelumnya)</li>
              <li>Surat Izin Keluarga (Bertanda tangan di atas materai dan dibuat di kantor desa)</li>
            </ul>
          </div>
        </div>

        {/* Biaya Pendaftaran dan Lama Proses */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6 md:w-1/2">
            <h3 className="text-2xl font-bold text-yellow-500 mb-2 text-center">Biaya Pendaftaran</h3>
            <p className="text-2xl font-bold text-gray-300 text-center">Rp. 35.000.000</p>
          </div>

          <div className="bg-gray-500 bg-opacity-10 shadow-lg rounded-lg p-6 md:w-1/2">
            <h3 className="text-2xl font-bold text-yellow-500 mb-2 text-center">Lama Proses</h3>
            <p className="text-2xl font-bold text-gray-300 text-center">2 Tahun</p>
          </div>
        </div>

        <ProcessFlow />
        <div className="grid grid-cols-2 gap-6 mt-6 ">
          <div className="bg-gray-900 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold">Catatan :</h3>
            <ul className="list-disc list-inside">
              <li><strong>Biaya Administrasi/Registrasi:</strong> Rp. 2.500.000 termasuk biaya proses</li>
              <li>Melengkapi berkas yang diperlukan untuk proses pembuatan paspor</li>
              <li>Pemeriksaan kesehatan jasmani & rohani, biaya ditanggung oleh CPMI</li>
              <li>Proses pengajuan pembuatan paspor, biaya ditanggung oleh CPMI</li>
              <li>Perjanjian antara Pihak 1 dan Pihak 2 dengan menandatangani Kontrak Mandat/Notaris (Biaya Notaris Rp. 200.000 ditanggung Pendaftar dan Materai Rp. 10.000)</li>
              <li>Jika WP sudah turun, Pihak 1 mengajukan proses pembuatan Visa</li>
              <li>Pembekalan dilakukan untuk memberikan informasi ke pendaftar tentang persiapan keberangkatan dan penempatan kerja</li>
              <li>Terakhir, penerbangan. Biaya ditanggung oleh CPMI</li>
            </ul>
          </div>
          <div className="bg-gray-900 shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-semibold">Catatan Tambahan</h3>
            <ul className="list-disc list-inside">
              <li>Pastikan semua dokumen lengkap sebelum proses</li>
              <li>Ikuti prosedur pemeriksaan kesehatan dengan benar</li>
              <li>Jangan lupa menyiapkan biaya yang diperlukan</li>
              <li>Pelajari informasi tentang negara tujuan sebelum keberangkatan</li>
            </ul>
            <div className="mt-6 border-t pt-4">
              <h3 className="text-lg font-semibold">Contact Person</h3>
              <ul className="space-y-2">
                <li>
                  🔗 <a href="https://shabilombokbersaudara.com" className="text-blue-500 hover:underline">shabilombokbersaudara.com</a>
                </li>
                <li>
                  📞 <a href="tel:+6283825948215" className="text-blue-500 hover:underline">+62 838-2594-8215</a>
                </li>
                <li>
                  📧 <a href="mailto:shabi.lombok.bersaudara@gmail.com" className="text-blue-500 hover:underline">shabi.lombok.bersaudara@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Polandia;
