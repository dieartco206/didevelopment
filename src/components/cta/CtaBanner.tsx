import React, { useState } from 'react';
import { MessageSquare, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { QuickInquiryModal } from '../proposal/QuickInquiryModal';
import { soundFx } from '../../utils/audio';

export const CtaBanner: React.FC = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6289673757701?text=Halo%20DiDev%20Studio%2C%20saya%20siap%20digitalisasi%20bisnis%20saya%20dan%20mau%20konsultasi%20pembuatan%20website%20%2F%20aplikasi%20Android.',
      '_blank'
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-blue-50/40 relative overflow-hidden border-b border-slate-200">
      {/* Background Decorative Circuit & Blueprint Grid */}
      <div className="absolute inset-0 artistic-blueprint-grid opacity-40 pointer-events-none" />
      <div className="absolute inset-0 artistic-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-white via-blue-50/40 to-white border-2 border-blue-200/90 shadow-xl shadow-blue-500/5 p-8 sm:p-14 text-center relative overflow-hidden">
          
          {/* Subtle Accent Glow inside Card */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Mini Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#2563EB] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
            <span>MULAI PROYEK DIGITAL ANDA HARI INI</span>
          </div>

          {/* Big Contrast Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-[#0F172A] leading-tight">
            Siap Digitalisasi Bisnis Anda Tanpa Ribet?
          </h2>

          {/* Subhead */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed">
            Konsultasikan ide atau kendala operasional Anda sekarang bersama tim software engineer kami. Bebas biaya analisis kebutuhan awal & tanpa ikatan.
          </p>

          {/* Dual Action: WhatsApp + Proposal Formal */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto px-7 sm:px-9 py-3.5 sm:py-4 bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer active:scale-98 shrink-0"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current shrink-0" aria-hidden="true" />
              <span>Chat WhatsApp Sekarang</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
            </button>

            <button
              onClick={() => {
                soundFx.playClick(750, 0.04);
                setIsInquiryOpen(true);
              }}
              className="w-full sm:w-auto px-6 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-slate-300 hover:border-[#2563EB] font-bold text-sm sm:text-base rounded-xl transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-2xs shrink-0"
            >
              <FileText className="w-5 h-5 text-[#2563EB] shrink-0" />
              <span>Minta Proposal Resmi</span>
            </button>
          </div>

          {/* Trust Points */}
          <div className="mt-7 pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#334155] font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>Cloud Server Cepat & Terkelola</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>Backup Database Otomatis Rutin</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" aria-hidden="true" />
              <span>Maintenance & Support Prioritas</span>
            </span>
          </div>

        </div>
      </div>

      {/* Proposal Inquiry Modal */}
      <QuickInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </section>
  );
};
