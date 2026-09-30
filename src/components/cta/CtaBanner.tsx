import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const CtaBanner: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6281234567890?text=Halo%20DiDev%20Studio%2C%20saya%20siap%20digitalisasi%20bisnis%20saya%20dan%20mau%20konsultasi%20pembuatan%20website%20%2F%20aplikasi%20Android.',
      '_blank'
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0A101D] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Rings & Circuit Grid */}
      <div className="absolute inset-0 bg-circuit-lines opacity-15 pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Mini Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 whitespace-nowrap shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
          <span className="whitespace-nowrap">MULAI PROYEK DIGITAL ANDA HARI INI</span>
        </div>

        {/* Big Contrast Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white leading-tight">
          Siap Digitalisasi Bisnis Anda Tanpa Ribet?
        </h2>

        {/* Subhead */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Konsultasikan ide atau kendala operasional Anda sekarang bersama tim software engineer kami. Bebas biaya analisis kebutuhan awal & tanpa ikatan.
        </p>

        {/* Big Emerald WhatsApp CTA Button */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto px-8 py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-base sm:text-lg rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-98 whitespace-nowrap shrink-0"
          >
            <MessageSquare className="w-6 h-6 fill-current shrink-0" />
            <span className="whitespace-nowrap">Chat WhatsApp Sekarang (Respon Cepat)</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>

        {/* Trust Points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5 text-slate-300 whitespace-nowrap shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
            <span className="whitespace-nowrap">Cloud Server Cepat & Terkelola</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300 whitespace-nowrap shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
            <span className="whitespace-nowrap">Backup Database Otomatis Rutin</span>
          </span>
          <span className="flex items-center gap-1.5 text-slate-300 whitespace-nowrap shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
            <span className="whitespace-nowrap">Maintenance & Support Prioritas</span>
          </span>
        </div>

      </div>
    </section>
  );
};
