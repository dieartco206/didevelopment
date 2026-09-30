import React, { useState } from 'react';
import { HeroPromo3D } from '../3d/HeroPromo3D';
import type { ShowcaseMode } from '../3d/HeroPromo3D';
import { 
  Laptop, 
  ArrowRight, 
  MessageSquare, 
  Smartphone,
  Code2, 
  Users,
  CheckCircle2
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface HeroPromoProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroPromo: React.FC<HeroPromoProps> = ({ onNavigate }) => {
  const [showcaseMode, setShowcaseMode] = useState<ShowcaseMode>('combo');

  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20mau%20konsultasi%20pembuatan%20Website%20atau%20Aplikasi%20Android%20APK%20untuk%20bisnis%20saya.',
      '_blank'
    );
  };

  return (
    <section id="hero" className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:py-20 overflow-hidden bg-white border-b border-slate-200">
      {/* Subtle Soft Glow & Clean Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Clean Corporate Visual-First Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Pitch Column: Direct, Professional, Clear Value */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            {/* Sekawan Media Style Category Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-100 text-[#256BE0] rounded-full text-xs font-semibold w-fit mx-auto lg:mx-0 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#256BE0]" />
              <span className="tracking-wider uppercase text-[11px]">JASA PEMBUATAN APLIKASI WEB & ANDROID</span>
            </div>

            {/* Authoritative Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#102E61] leading-[1.2] font-sans">
              Mengembangkan Aplikasi Web & Mobile untuk Akselerasi Bisnis Anda
            </h1>

            {/* Clear 2-line Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-[#48505E] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Kami merancang dan membangun sistem aplikasi web responsif dan aplikasi mobile Android kustom berkinerja tinggi. Aman, cepat, bergaransi resmi, dan 100% full source code diserahkan penuh.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#256BE0] hover:bg-[#1D58BD] text-white font-sans font-semibold text-sm rounded-lg shadow-sm hover:shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi Kebutuhan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(600, 0.05);
                  onNavigate('calculator');
                }}
                className="inline-flex items-center justify-center px-5 py-3.5 bg-white hover:bg-slate-50 text-[#102E61] border border-slate-300 hover:border-[#256BE0] font-sans font-semibold text-sm rounded-lg transition-all cursor-pointer shadow-2xs"
              >
                Hitung Estimasi Biaya
              </button>
            </div>

            {/* 3 Key Trust Checkmarks */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#48505E] font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#256BE0]" />
                100% Full Source Code
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#256BE0]" />
                Garansi Resmi 1 Tahun
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#256BE0]" />
                Siap Rilis Play Store
              </span>
            </div>
          </div>

          {/* 3D Showcase Column */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <div className="w-full max-w-lg lg:max-w-none">
              <HeroPromo3D mode={showcaseMode} onChangeMode={(m) => setShowcaseMode(m)} />
            </div>
          </div>
        </div>

        {/* Layanan Terukur & Berdampak (Ala Sekawan Media) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 bg-[#F4F8FE] border border-[#D6E4FB] rounded-xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#256BE0]/10 text-[#256BE0] flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#102E61] leading-tight">100+</div>
              <div className="text-xs text-[#48505E] font-medium mt-0.5">Proyek Selesai</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#F4F8FE] border border-[#D6E4FB] rounded-xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#256BE0]/10 text-[#256BE0] flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#102E61] leading-tight">1 Tahun</div>
              <div className="text-xs text-[#48505E] font-medium mt-0.5">Garansi Bebas Bug</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#F4F8FE] border border-[#D6E4FB] rounded-xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#256BE0]/10 text-[#256BE0] flex items-center justify-center shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#102E61] leading-tight">100%</div>
              <div className="text-xs text-[#48505E] font-medium mt-0.5">Hak Milik Source Code</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#F4F8FE] border border-[#D6E4FB] rounded-xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-[#256BE0]/10 text-[#256BE0] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#102E61] leading-tight">99.8%</div>
              <div className="text-xs text-[#48505E] font-medium mt-0.5">Tingkat Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
