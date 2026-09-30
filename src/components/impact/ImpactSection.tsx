import React from 'react';
import { ShieldCheck, Target, Code2, Headphones } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'Berorientasi pada Solusi Bisnis',
    desc: 'Kami merancang sistem yang menyelesaikan masalah riil operasional dan alur kerja perusahaan Anda, bukan sekadar menulis baris kode.',
  },
  {
    icon: ShieldCheck,
    title: 'Layanan Bergaransi 1 Tahun Penuh',
    desc: 'Masa garansi resmi 1 tahun memastikan implementasi sukses, perbaikan bug gratis, dan pendampingan teknis purna jual.',
  },
  {
    icon: Code2,
    title: '100% Kepemilikan Source Code',
    desc: 'Tanpa biaya sewa atau royalti tahunan. Seluruh kode sumber, aset desain, dan database diserahkan penuh menjadi aset perusahaan Anda.',
  },
  {
    icon: Headphones,
    title: 'Pendampingan & Pelatihan Menyeluruh',
    desc: 'Kami menyediakan dokumentasi teknis, buku panduan pemakaian, serta sesi pelatihan untuk staf dan admin hingga mahir mengoperasikan sistem.',
  },
];

export const ImpactSection: React.FC = () => {
  return (
    <section id="impact" className="py-14 sm:py-20 bg-[#F4F8FE] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block text-xs font-bold text-[#256BE0] uppercase tracking-wider mb-2">
            KOMITMEN LAYANAN KAMI
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102E61] tracking-tight font-sans">
            Standar Rekayasa untuk Hasil Terbaik
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#48505E] font-normal">
            Empat pilar utama yang mendasari setiap pengembangan perangkat lunak di DiDev Studio:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-[#D6E4FB] shadow-2xs hover:border-[#256BE0] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#256BE0] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#102E61] mb-2 leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#48505E] leading-relaxed font-normal">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
