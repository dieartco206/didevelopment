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
    <section id="hero" className="relative pt-3 pb-8 sm:pt-6 sm:pb-16 lg:py-16 overflow-hidden bg-mesh-hero border-b border-blue-200/60">
      {/* Background Tech Circuit */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-lines opacity-15 pointer-events-none" />

      {/* Radiant Glowing Orbs */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Clean Visual-First Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
          {/* Pitch Column: Tight, Punchy, Zero Text Bloat */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            {/* Single Elegant Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded-full text-[11px] font-mono font-bold w-fit mx-auto lg:mx-0 mb-2.5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>SOFTWARE HOUSE RESMI</span>
            </div>

            {/* Killer Short Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-900 leading-[1.15]">
              Bikin Website & <br className="hidden sm:inline" />
              <span className="text-shimmer-blue">APK Android</span> Cepat
            </h1>

            {/* Single Short 1-Line Subtitle */}
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto lg:mx-0">
              100% Hak milik source code & garansi 1 tahun tanpa biaya sewa.
            </p>

            {/* Compact Action Buttons */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <button
                onClick={openWhatsApp}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs sm:text-sm rounded-xl shadow-md shadow-blue-500/25 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi WA</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(600, 0.05);
                  onNavigate('calculator');
                }}
                className="flex-1 sm:flex-initial px-4 py-3 sm:py-3.5 bg-white hover:bg-blue-50 text-slate-800 border-2 border-blue-200 font-mono font-bold text-xs sm:text-sm rounded-xl shadow-2xs cursor-pointer hover:border-blue-400"
              >
                Hitung Biaya
              </button>
            </div>

            {/* 3 Quick Visual Trust Badges (Compact) */}
            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-center lg:justify-start gap-3 sm:gap-4 text-[10px] sm:text-xs text-slate-600 font-semibold">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Full Code
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Cetak Bluetooth
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                Play Store Ready
              </span>
            </div>
          </div>

          {/* 3D Showcase Column (Immediately Visible on First Screen!) */}
          <div className="lg:col-span-7 w-full">
            <HeroPromo3D mode={showcaseMode} onChangeMode={(m) => setShowcaseMode(m)} />
          </div>
        </div>

        {/* Compact Bottom Trust Strip (Clean 4 metrics) */}
        <div className="mt-5 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          <div className="p-2.5 sm:p-3 bg-white/90 border border-blue-200 rounded-xl flex items-center gap-2.5 shadow-2xs">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Laptop className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-lg font-black font-mono text-blue-900 leading-tight">50+ Proyek</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Web & Mobile Selesai</div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/90 border border-blue-200 rounded-xl flex items-center gap-2.5 shadow-2xs">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-lg font-black font-mono text-blue-900 leading-tight">100% Garansi</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Bebas Bug 1 Tahun</div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/90 border border-blue-200 rounded-xl flex items-center gap-2.5 shadow-2xs">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-lg font-black font-mono text-blue-900 leading-tight">Source Code</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Hak Milik Penuh</div>
            </div>
          </div>

          <div className="p-2.5 sm:p-3 bg-white/90 border border-blue-200 rounded-xl flex items-center gap-2.5 shadow-2xs">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm sm:text-lg font-black font-mono text-blue-900 leading-tight">4.9 / 5.0</div>
              <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
