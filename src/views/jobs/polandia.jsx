import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
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
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header */}
      <div className="relative w-full h-48 flex items-center justify-center mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/polandia.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white text-center px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 border-l-4 border-yellow-500 pl-4">
            POLANDIA
          </h1>
          <p className="text-lg md:text-xl mt-2">INFORMASI TENTANG POLANDIA</p>
          <div className="w-72 h-1 bg-white mt-2 mx-auto"></div>
        </div>
      </div>

      {/* Konten */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Gambar Utama */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <img
              src="/loker/polandia.jpg"
              alt="Polandia"
              className="w-full object-cover rounded-lg"
            />
          </div>

          {/* Info Lowongan & Gambar Lainnya */}
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-5xl font-bold font-primary text-center ">LOWONGAN</h1>
            <h1 className="text-8xl font-bold font-primary text-center text-yellow-500 ">PEKERJAAN</h1>
            <h1 className="text-5xl font-bold font-primary text-center mt-2 ">Di Polandia</h1>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-lg font-primary font-bold'>
                Sektor Pabrik
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="/loker/ayam2.jpg" alt="Image 1" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/baja.png" alt="Image 2" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/galangan kapal.jpg" alt="Image 3" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/mebel.jpg" alt="Image 4" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
              </div>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6 mt-9'>
              <div className='text-lg font-primary font-bold'>
                Sektor Perkebunan
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src="/loker/ayam.jpeg" alt="Image 1" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/baja.png" alt="Image 2" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/galangan kapal.jpg" alt="Image 3" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/mebel.jpg" alt="Image 4" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Tentang Polandia */}
        <h2 className="text-3xl font-bold text-yellow-500 mt-6">Tentang Polandia</h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Polandia adalah negara yang terletak di Eropa Tengah dengan sejarah yang kaya dan arsitektur klasik.
          Ibu kotanya, <strong>Warsawa</strong>, adalah pusat ekonomi dan budaya.
          Polandia terkenal dengan kastil abad pertengahan, pegunungan indah, dan tradisi kuliner yang khas seperti <em>Pierogi</em> dan <em>Żurek</em>.
        </p>
        <div className='flex flex-col-3 md:flex-row gap-3 mt-6 justify-center'>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h1 className="text-xl font-bold font-primary underline flex justify-center">Persyaratan</h1>
            <h2 className=' mt-5 ' >
              <ul className="list-decimal list-outside font-secondary font-medium pl-6">
                <li>Laki-laki/Perempuan</li>
                <li>Usia 18-45 Tahun</li>
                <li>Sehat jasmani dan rohani</li>
                <li>Kuat Kerja Di Outdoor</li>
              </ul>

            </h2>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h1 className="text-xl font-bold font-primary underline flex justify-center ">Benefit</h1>
            <h2 className=' mt-5 ' >
              <ul className="list-decimal list-outside font-secondary font-medium pl-6">
                <li>Gaji Basic 1000 - 1300 USD</li>
                <li>Fasilitas Tempat Tinggal</li>
                <li>Asuransi</li>
              </ul>

            </h2>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h1 className="text-xl font-bold font-primary underline flex justify-center ">Berkas yang Diperlukan</h1>
            <h2 className=' mt-5 ' >
              <ul className="list-decimal list-outside font-secondary font-medium pl-6">
                <li> Kartu Keluarga Asli</li>
                <li>FAkta Kelahiran Asli</li>
                <li>KTP</li>
                <li> Ijazah Asli</li>
                <li>Buku Nikah (Bagi yang sudah menikah)</li>
                <li>Paspor (Jika ada paspor sebelumnya)</li>
                <li>Surat Izin Keluarga (Bertanda tangan di atas materai dan di buat di kantor desa)</li>
              </ul>

            </h2>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center">
          {/* Kolom 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
            <h1 className="text-2xl font-bold text-center text-yellow-500">
              Biaya Pendaftaran
            </h1>
            <h1 className="text-2xl font-bold text-center text-black mt-1">
              Rp. 35.000.000
            </h1>
          </div>

          {/* Kolom 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2">
            <h1 className="text-2xl font-bold text-center text-yellow-500">
              Lama Proses
            </h1>
            <h1 className="text-2xl font-bold text-center text-black">
              2 Tahun
            </h1>
          </div>
        </div>
        <div>
          <div className=''>

          </div>
        </div>
        <div>
          <div className='bg-white shadow-lg rounded-lg p-6 mt-6'>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Polandia;
