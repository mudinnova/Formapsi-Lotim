import React from "react";

const processSteps = [
  { title: "Registrasi", description: "Biaya Administrasi Rp. 2.500.000", icon: "/icons/registrasi.png" },
  { title: "Pemberkasan", description: "Melengkapi Berkas yang Diperlukan", icon: "/icons/pemberkasan.png" },
  { title: "Medical Check Up", description: "Pemeriksaan kesehatan jasmani & rohani", icon: "/icons/medical.png" },
  { title: "Pasport", description: "Proses Pembuatan Pasport Pendaftar", icon: "/icons/pasport.png" },
  { title: "Contract Mandat", description: "Persetujuan Perjanjian Antara Pihak 1 Dengan Pihak 2", icon: "/icons/contract.png" },
  { title: "Calling Visa", description: "Proses Pengajuan Visa", icon: "/icons/visa.png" },
  { title: "Pembekalan Akhir", description: "Pembekalan dilakukan untuk memberi informasi ke pendaftar", icon: "/icons/pembekalan.png" },
  { title: "Pemberangkatan", description: "Keberangkatan Pendaftar ke Negara Tujuan", icon: "/icons/pemberangkatan.png" },
  { title: "Penempatan", description: "Pendaftar Sudah Mulai Bekerja di Negara Tujuan", icon: "/icons/penempatan.png" },
];

const ProcessFlow = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-9 gap-4 items-center text-center relative">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative w-full">
            {/* Icon */}
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-500 rounded-full relative z-10">
              <img src={step.icon} alt={step.title} className="w-10 h-10" />
            </div>
            {/* Title */}
            <h2 className="text-yellow-500 font-bold text-lg mt-3">{step.title}</h2>
            {/* Description */}
            <p className="text-gray-700 text-sm max-w-[140px]">{step.description}</p>
            {/* Garis Penghubung */}
            {index !== processSteps.length - 1 && (
              <div className="absolute top-8 left-full w-12 h-1 bg-yellow-500 hidden md:block"></div>
            )}
            {index === 4 && (
              <div className="absolute top-8 left-full w-12 h-1 bg-yellow-500 hidden md:block"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessFlow;
