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
  Sparkles
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
    <section id="hero" className="relative pt-6 pb-16 lg:py-20 overflow-hidden bg-[#F8FAFC]">
      {/* Dynamic Background Mesh & Glowing Orbs */}
      <div className="glow-orb-primary -top-24 -left-24 opacity-70" />
      <div className="glow-orb-secondary top-1/3 -right-24 opacity-60" />
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-circuit-lines opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Floating Promo Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/90 border border-blue-200/90 rounded-full text-[11px] font-mono font-bold text-blue-700 shadow-xs backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>SOFTWARE HOUSE RESMI</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-sky-200/90 rounded-full text-[11px] font-mono font-bold text-sky-700 shadow-xs backdrop-blur-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>100% SOURCE CODE HAK MILIK</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-indigo-200/90 rounded-full text-[11px] font-mono font-bold text-indigo-700 shadow-xs backdrop-blur-xs">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>GARANSI RESMI 1 TAHUN</span>
          </div>
        </div>

        {/* Main Grid: Pitch + 3D Device Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Punchy Pitch */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Super Header Badge */}
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>JASA PEMBUATAN SISTEM TERPERCAYA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-slate-900 leading-[1.12]">
              BIKIN WEBSITE & <br className="hidden sm:inline" />
              <span className="text-shimmer-blue">
                APK ANDROID
              </span> <br />
              CEPAT & BERGARANSI
            </h1>

            {/* Short Punchy Subtitle */}
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Tingkatkan omset bisnis dengan sistem modern siap pakai. 
              Mulai dari <strong className="text-slate-900 font-semibold">Website Company Profile & Toko Online</strong> hingga <strong className="text-slate-900 font-semibold">Aplikasi Android (APK) Kasir & Absensi</strong>. 
              Bisa direct install atau upload ke Play Store.
            </p>

            {/* Main Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={openWhatsApp}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>KONSULTASI GRATIS (WA)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(600, 0.05);
                  onNavigate('calculator');
                }}
                className="flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-mono font-bold text-xs sm:text-sm rounded-2xl transition-all shadow-xs cursor-pointer hover:border-blue-400"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>SIMULASI BIAYA PROYEK</span>
              </button>
            </div>

            {/* Feature Bullets (Punchy 4 Points) */}
            <div className="mt-7 pt-5 border-t border-slate-200/80 grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bukan Template Pasaran</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Cetak Struk Bluetooth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>QRIS & Payment Gateway</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Aplikasi Cepat & Ringan</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Dual-Device Showcase */}
          <div className="lg:col-span-6 w-full">
            <HeroPromo3D mode={showcaseMode} onChangeMode={(m) => setShowcaseMode(m)} />
          </div>
        </div>

        {/* Bottom Social Proof / Trust Strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xs border border-blue-100 rounded-2xl shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">50+</div>
              <div className="text-xs text-slate-500 font-medium">Proyek Selesai</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xs border border-blue-100 rounded-2xl shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">Garansi Bebas Bug</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xs border border-blue-100 rounded-2xl shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">Full Code</div>
              <div className="text-xs text-slate-500 font-medium">Hak Cipta Diberikan</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white/90 backdrop-blur-xs border border-blue-100 rounded-2xl shadow-xs flex items-center gap-3.5 hover:border-blue-300 transition-colors">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900">4.9 / 5.0</div>
              <div className="text-xs text-slate-500 font-medium">Rating Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
