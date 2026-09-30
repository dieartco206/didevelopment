import React, { useState } from 'react';
import { HeroPromo3D } from '../3d/HeroPromo3D';
import type { ShowcaseMode } from '../3d/HeroPromo3D';
import { 
  Laptop, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  MessageSquare, 
  Zap, 
  Code2, 
  Users,
  Smartphone,
  Printer,
  DownloadCloud
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
    <section id="hero" className="relative pt-4 pb-12 sm:pt-6 sm:pb-16 lg:py-20 overflow-hidden bg-mesh-hero border-b border-blue-200/60">
      {/* Background Tech Circuit */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-lines opacity-20 pointer-events-none" />

      {/* Radiant Glowing Orbs */}
      <div className="absolute -top-32 -left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges (Mobile Compact) */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-blue-600 text-white rounded-full text-[10px] sm:text-xs font-mono font-bold shadow-md shadow-blue-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>SOFTWARE HOUSE RESMI</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/95 border border-blue-300 rounded-full text-[10px] sm:text-xs font-mono font-bold text-blue-900 shadow-2xs">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600" />
            <span>100% SOURCE CODE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/95 border border-sky-300 rounded-full text-[10px] sm:text-xs font-mono font-bold text-sky-900 shadow-2xs">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600" />
            <span>GARANSI 1 TAHUN</span>
          </div>
        </div>

        {/* Main Grid: Pitch + 3D Device Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Pitch */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Live Developer Badge */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold text-blue-900 bg-blue-100/90 border border-blue-200 px-2.5 py-1 rounded-lg w-fit mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              <span>LIVE: 8 ENGINEER STANDBY • SLOT DIBUKA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[50px] font-black tracking-tight text-slate-900 leading-[1.15] sm:leading-[1.12]">
              JASA PEMBUATAN <br />
              <span className="text-shimmer-blue">
                WEBSITE & APK ANDROID
              </span> <br />
              CEPAT, RAPI, BERGARANSI
            </h1>

            {/* Short Punchy Subtitle */}
            <p className="mt-3 sm:mt-4 text-xs sm:text-base text-slate-700 leading-relaxed max-w-xl font-medium">
              Transformasi bisnis manual Anda jadi sistem digital otomatis. 
              Mulai dari <strong className="text-blue-900 font-bold">Website Profil & Toko Online</strong> hingga <strong className="text-blue-900 font-bold">Aplikasi Android APK Kasir & Absensi</strong>. 
              Siap diinstall langsung atau rilis Play Store.
            </p>

            {/* Main Action Buttons */}
            <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-mono font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>KONSULTASI GRATIS (WHATSAPP)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(600, 0.05);
                  onNavigate('calculator');
                }}
                className="flex items-center justify-center gap-2 px-4 py-3.5 sm:py-4 bg-white hover:bg-blue-50 text-slate-900 border-2 border-blue-200 font-mono font-bold text-xs sm:text-sm rounded-xl sm:rounded-2xl shadow-2xs cursor-pointer hover:border-blue-400"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>SIMULASI BIAYA PROYEK</span>
              </button>
            </div>

            {/* Feature Bullets (Mobile Optimized Grid) */}
            <div className="mt-5 sm:mt-7 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/90 border border-blue-200/90 shadow-2xs grid grid-cols-2 gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-800 font-semibold">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span>Bukan Template Pasaran</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span>Cetak Struk Bluetooth</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span>QRIS Payment Gateway</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 shrink-0" />
                <span>Aplikasi Sangat Ringan</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Showcase */}
          <div className="lg:col-span-6 w-full relative">
            <HeroPromo3D mode={showcaseMode} onChangeMode={(m) => setShowcaseMode(m)} />

            {/* Floating Live Badge (Desktop only to prevent mobile clutter) */}
            <div className="hidden lg:flex absolute -bottom-5 -left-4 z-20 items-center gap-3 p-3 bg-white/95 border-2 border-blue-300 rounded-2xl shadow-xl shadow-blue-500/15 backdrop-blur-md animate-float-slow">
              <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                <Printer className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 font-sans">Cetak Thermal Bluetooth</div>
                <div className="text-[10px] font-mono text-blue-600 font-semibold">Struk Kasir 58mm & 80mm</div>
              </div>
            </div>

            <div className="hidden lg:flex absolute -top-4 -right-2 z-20 items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-xl shadow-lg shadow-blue-600/25 animate-float-reverse">
              <DownloadCloud className="w-3.5 h-3.5 text-sky-300" />
              <div className="text-[10px] font-mono font-bold">
                APK RELEASE v2.4 • SIAP PASANG
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Social Proof / Trust Strip (Mobile Optimized) */}
        <div className="mt-8 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-white to-blue-50/70 border border-blue-200 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black font-mono text-blue-900 leading-tight">50+</div>
              <div className="text-[10px] sm:text-xs text-slate-600 font-bold">Proyek Selesai</div>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-gradient-to-br from-white to-sky-50/70 border border-sky-200 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black font-mono text-blue-900 leading-tight">100%</div>
              <div className="text-[10px] sm:text-xs text-slate-600 font-bold">Garansi Bebas Bug</div>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-gradient-to-br from-white to-indigo-50/70 border border-indigo-200 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black font-mono text-blue-900 leading-tight">Full Code</div>
              <div className="text-[10px] sm:text-xs text-slate-600 font-bold">Hak Cipta Klien</div>
            </div>
          </div>

          <div className="p-3 sm:p-4 bg-gradient-to-br from-white to-blue-50/70 border border-blue-200 rounded-xl sm:rounded-2xl shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-xs shrink-0">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-base sm:text-2xl font-black font-mono text-blue-900 leading-tight">4.9 / 5.0</div>
              <div className="text-[10px] sm:text-xs text-slate-600 font-bold">Kepuasan Klien</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
