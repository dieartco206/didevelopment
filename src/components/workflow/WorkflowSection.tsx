import React from 'react';
import { 
  MessageSquare, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Award, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface Step {
  number: string;
  title: string;
  timeline: string;
  desc: string;
  icon: React.ElementType;
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Konsultasi & Bedah Kebutuhan',
    timeline: 'Hari 1 - 2',
    desc: 'Diskusi santai tanpa biaya seputar alur bisnis, masalah kasir/stok/lapangan, dan penyusunan blueprint spesifikasi.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Perancangan Alur & Desain UI/UX',
    timeline: 'Hari 3 - 5',
    desc: 'Pembuatan wireframe antarmuka yang bersih, mudah digunakan staf dari HP atau laptop tanpa kebingungan.',
    icon: Palette,
  },
  {
    number: '03',
    title: 'Pengerjaan Sistem & Coding Kustom',
    timeline: 'Hari 6 - 14',
    desc: 'Penulisan kode bersih, arsitektur database aman, build installer APK Android, dan laporan progres berkala.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Pengujian Bersama & Revisi',
    timeline: 'Hari 15 - 17',
    desc: 'Uji coba ketat di HP Android Anda, printer Bluetooth, dan skenario transaksi riil sampai benar-benar bebas bug.',
    icon: CheckCircle2,
  },
  {
    number: '05',
    title: 'Serah Terima & Bimbingan Staf',
    timeline: 'Hari 18+',
    desc: '100% Full source code diserahkan, instalasi server resmi, pelatihan staf sampai mahir, dan masa garansi 1 tahun.',
    icon: Award,
  },
];

export const WorkflowSection: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open('https://wa.me/6289673757701?text=Halo%20DiDev%20Studio%2C%20saya%20ingin%20jadwalkan%20konsultasi%20awal%20bedah%20kebutuhan%20sistem%20saya.', '_blank');
  };

  return (
    <section id="workflow" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Dot Matrix & Blueprint Texture on White */}
      <div className="absolute inset-0 artistic-dot-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3">
            <span>ROADMAP KERJA TRANSPARAN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            5 Tahap Pasti Menuju Sistem Siap Pakai
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-[#475569] font-normal leading-relaxed">
            Tidak ada kejutan biaya di tengah jalan. Anda mengawal setiap langkah mulai dari konsep hingga serah terima source code.
          </p>
        </div>

        {/* HORIZONTAL CONNECTED STEPPER / PROCESS ROADMAP (Desktop) */}
        <div className="hidden lg:block relative mb-16">
          {/* Continuous Connected Progress Line with Glowing Circuit Gradient */}
          <div className="absolute top-1/2 left-12 right-12 h-1.5 bg-gradient-to-r from-blue-500 via-sky-400 to-emerald-500 rounded-full -translate-y-12 z-0 opacity-80 shadow-xs shadow-blue-500/25" />

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Circle with Number Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#2563EB] text-[#2563EB] flex items-center justify-center shadow-md transition-all duration-200 mb-6 group-hover:scale-105 group-hover:shadow-lg">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Card */}
                  <div className="w-full bg-[#F8FAFC] border border-slate-200 group-hover:border-[#2563EB] group-hover:-translate-y-2 group-hover:shadow-xl rounded-2xl p-5 shadow-2xs transition-all duration-300 flex flex-col justify-between h-[210px]">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xl font-extrabold font-mono text-[#2563EB] whitespace-nowrap shrink-0">
                          {s.number}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] whitespace-nowrap shrink-0">
                          {s.timeline}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm text-[#0F172A] mb-2 leading-snug">
                        {s.title}
                      </h3>
                      <p className="text-xs text-[#475569] leading-relaxed font-normal">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VERTICAL TIMELINE FOR MOBILE / TABLET */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-slate-200 mb-12">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div key={idx} className="relative flex items-start gap-4 pl-2">
                {/* Node icon */}
                <div className="w-10 h-10 rounded-xl bg-white border-2 border-[#2563EB] text-[#2563EB] flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-[#F8FAFC] border border-slate-200 rounded-xl p-4 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-base font-extrabold font-mono text-[#2563EB] whitespace-nowrap shrink-0">
                      LANGKAH {s.number}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] whitespace-nowrap shrink-0">
                      {s.timeline}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-[#0F172A] mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Card with Immediate Consultation Button */}
        <div className="p-4 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 border-2 border-blue-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                Garansi Resmi 1 Tahun & Pendampingan Purna Jual
              </div>
              <div className="text-xs sm:text-sm text-[#475569] mt-0.5">
                Jika ditemukan kendala teknis atau bug, tim kami perbaiki secara gratis dan responsif.
              </div>
            </div>
          </div>

          <button
            onClick={openWhatsApp}
            className="w-full md:w-auto px-6 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer shrink-0"
          >
            <span>Mulai Konsultasi Langkah 01</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
