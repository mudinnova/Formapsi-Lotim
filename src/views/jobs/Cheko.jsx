import React, { useState, useEffect } from 'react';
import Navbar from '../../component/navbar';
import Footer from '../../component/penutup';
import ProcessFlow from '../../component/proses';
import SocialMedia from '../../component/sosialmedia';

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <img src="/logoshabi.png" alt="Loading..." className="w-20 h-20 animate-bounce" />
  </div>
);

const Cheko = () => {
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

          {/* Sektor Pabrik */}
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-5xl font-bold font-primary text-center ">LOWONGAN</h1>
            <h1 className="text-8xl font-bold font-primary text-center text-yellow-500 ">PEKERJAAN</h1>
            <h1 className="text-5xl font-bold font-primary text-center mt-2 ">Di Polandia</h1>
            <div className='bg-white shadow-lg rounded-lg p-6'>
              <div className='text-lg font-primary font-bold'>
                Sektor Pabrik
              </div>
              {/* Sektor Perkebunan */}
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
                <img src="/loker/bluebery.jpg" alt="Image 1" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/jamur.jpg" alt="Image 2" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/kismis.jpg" alt="Image 3" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/rasbery.jpg" alt="Image 4" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
                <img src="/loker/stroberi.jpg" alt="Image 4" className="w-full h-32 object-cover rounded-lg border border-gray-300" />
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
            <h1 className="text-xl font-bold font-primary underline flex text-yellow-500 justify-center">Persyaratan</h1>
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
            <h1 className="text-xl font-bold font-primary underline text-yellow-500 flex justify-center ">Benefit</h1>
            <h2 className=' mt-5 ' >
              <ul className="list-decimal list-outside font-secondary font-medium pl-6">
                <li>Gaji Basic 1000 - 1300 USD</li>
                <li>Fasilitas Tempat Tinggal</li>
                <li>Asuransi</li>
              </ul>

            </h2>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-6'>
            <h1 className="text-xl font-bold font-primary underline text-yellow-500 flex justify-center ">Berkas yang Diperlukan</h1>
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
            {/* <img
              src="/proses/Asset 2.png"
              alt="Alur"
              className="w-full object-cover rounded-lg"> 

            </img> */}
            <ProcessFlow />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
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
            <div className="bg-white shadow-lg rounded-lg p-6">
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
      </div>
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Cheko;
