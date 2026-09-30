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
  Users
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
    <section id="hero" className="relative pt-8 pb-20 overflow-hidden bg-[#F8FAFC] bg-radial-gradient">
      {/* Subtle Blue Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Promotional Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono text-blue-700 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>SOFTWARE HOUSE & DEVELOPER RESMI</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-200 rounded-full text-xs font-mono text-sky-700 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>100% SOURCE CODE HAK MILIK KLIEN</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 border border-indigo-200 rounded-full text-xs font-mono text-indigo-700 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>GARANSI RESMI & FREE MAINTENANCE</span>
          </div>
        </div>

        {/* Main Grid: Pitch + 3D Device Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] font-sans">
              JASA PEMBUATAN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600">
                WEBSITE & APK ANDROID
              </span> <br />
              PROFESIONAL & BERGARANSI
            </h1>

            <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
              Tingkatkan omset dan digitalisasi bisnis Anda dengan sistem aplikasi terpadu. 
              Kami melayani pembuatan <strong className="text-slate-900 font-semibold">Website Company Profile, Toko Online, Dashboard Admin</strong>, 
              serta <strong className="text-slate-900 font-semibold">Aplikasi Android (APK) Custom</strong> yang siap diinstal langsung di smartphone atau dipublish ke Google Play Store.
            </p>

            {/* Main CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={openWhatsApp}
                className="flex items-center gap-2.5 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-500/25 transition-all hover:translate-y-[-1px] active:scale-95 cursor-pointer"
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
                className="flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-mono text-xs sm:text-sm rounded-xl transition-all shadow-xs cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-blue-600" />
                <span>HITUNG BIAYA PROYEK</span>
              </button>
            </div>

            {/* Key Advantages Checklist */}
            <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs font-sans text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Bukan Template Pasaran</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Siap Cetak Struk Bluetooth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Integrasi Payment Gateway / QRIS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Aplikasi Sangat Ringan & Cepat</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Device Preview */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            <HeroPromo3D mode={showcaseMode} onChangeMode={(m) => setShowcaseMode(m)} />
          </div>
        </div>

        {/* Bottom Social Proof / Trust Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-slate-900">50+</div>
              <div className="text-xs text-slate-500 font-sans">Website & APK Selesai</div>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-sans">Garansi Bebas Bug</div>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-slate-900">Full Code</div>
              <div className="text-xs text-slate-500 font-sans">Hak Cipta Diberikan</div>
            </div>
          </div>

          <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-bold font-mono text-slate-900">4.9 / 5.0</div>
              <div className="text-xs text-slate-500 font-sans">Kepuasan Klien UKM & PT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
