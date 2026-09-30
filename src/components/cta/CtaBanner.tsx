import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const CtaBanner: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20tertarik%20konsultasi%20pembuatan%20website%20atau%20aplikasi%20Android%20untuk%20perusahaan%20saya.',
      '_blank'
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-[#102E61] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
          Efisiensi Bisnis Mulai dari Sini
        </h2>
        <p className="mt-4 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal leading-relaxed">
          Konsultasikan ide atau kendala operasional Anda sekarang bersama tim konsultan software kami secara gratis tanpa ikatan.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-[#256BE0] hover:bg-[#1D58BD] text-white font-semibold text-sm sm:text-base rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Klaim Konsultasi Gratis (WhatsApp)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-6 text-xs text-blue-200 font-medium">
          ✓ Respon Cepat Setiap Hari • Bebas Biaya Analisis Awal • 100% Full Source Code
        </div>
      </div>
    </section>
  );
};
