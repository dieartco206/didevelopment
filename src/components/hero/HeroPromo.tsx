import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  CheckCircle2, 
  TrendingUp, 
  Printer, 
  MapPin, 
  Lock, 
  ShieldCheck,
  Laptop,
  Code2,
  Users,
  Signal,
  Wifi,
  Battery,
  Camera
} from 'lucide-react';
import { AndroidIcon } from '../icons/BrandIcons';
import { soundFx } from '../../utils/audio';

const HEADLINE_TEXT = 'Bikin Sistem Bisnis & Aplikasi Android Sesuai Alur Usaha Anda Sendiri.';

interface HeroPromoProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroPromo: React.FC<HeroPromoProps> = ({ onNavigate }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (displayedText.length < HEADLINE_TEXT.length) {
      // Jeda 250ms di awal agar terlihat jelas mulai ngetik, lalu 38ms per karakter
      const delay = displayedText.length === 0 ? 250 : 38;
      timer = setTimeout(() => {
        setDisplayedText(HEADLINE_TEXT.slice(0, displayedText.length + 1));
      }, delay);
    }

    return () => clearTimeout(timer);
  }, [displayedText]);

  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6289673757701?text=Halo%20DiDev%20Studio%2C%20saya%20tertarik%20konsultasi%20jasa%20pembuatan%20Website%20dan%20Aplikasi%20Android%20APK%20untuk%20usaha%20saya.',
      '_blank'
    );
  };

  return (
    <section id="hero" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 lg:py-24 overflow-hidden bg-mesh-hero border-b border-slate-200">
      {/* Blueprint Grid Architecture */}
      <div className="absolute inset-0 artistic-dot-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 artistic-blueprint-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Pitch Tajam, Human-First Copywriting */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left animate-enter-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-xs font-bold w-fit mx-auto lg:mx-0 mb-4 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" aria-hidden="true" />
              <span className="tracking-wide text-[11px] sm:text-xs">Jasa Pembuatan Website & Aplikasi Android Kustom</span>
            </div>

            {/* Headline Kuat & Tegas dengan Animasi Typewriter & SEO Full-Text Guard */}
            <div className="min-h-[84px] sm:min-h-[115px] lg:min-h-[155px] flex flex-col justify-start">
              <h1 
                className="text-2xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-[#0F172A] leading-tight font-sans"
              >
                {/* Accessible text for web search bots & screen readers */}
                <span className="sr-only">{HEADLINE_TEXT}</span>
                <span aria-hidden="true">
                  <span>{displayedText}</span>
                  <span 
                    className="inline-block w-[3px] sm:w-[4px] h-[0.82em] bg-[#2563EB] ml-1 sm:ml-1.5 align-baseline animate-blink rounded-full shadow-xs shadow-blue-500/50" 
                  />
                </span>
              </h1>
            </div>

            {/* Subheadline Solutif */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Hentikan pencatatan manual yang rawan selisih uang dan stok hilang. Kami bangunkan website operasional dan aplikasi Android APK yang pas dengan SOP usaha Anda — <strong className="text-[#0F172A] font-semibold">layanan terkelola penuh (fully managed) dengan cloud server berkecepatan tinggi, backup otomatis, dan maintenance rutin setiap bulan</strong>.
            </p>

            {/* CTA Ganda: WhatsApp Hijau + Tombol Hitung Biaya */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <button
                onClick={openWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 bg-[#10B981] hover:bg-[#059669] text-white font-sans font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-200 active:scale-98 cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-5 h-5 fill-current shrink-0" />
                <span className="whitespace-nowrap">Konsultasi Gratis via WhatsApp</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(600, 0.05);
                  onNavigate('calculator');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-slate-200 hover:border-[#2563EB] font-sans font-bold text-sm sm:text-base rounded-xl transition-all duration-200 cursor-pointer shadow-2xs whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Hitung Estimasi Biaya</span>
              </button>
            </div>

            {/* Trust Checklist Bar */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-5 text-[11px] sm:text-xs text-[#334155] font-semibold">
              <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="whitespace-nowrap">Cloud Server Cepat</span>
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="whitespace-nowrap">Backup Otomatis Rutin</span>
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="whitespace-nowrap">Maintenance & Support</span>
              </span>
              <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                <span className="whitespace-nowrap">Siap Rilis Play Store</span>
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Layered High-Fidelity UI Showcase (Datang dari Kanan ke Tengah) */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end animate-enter-right delay-100">
            <div className="relative w-full max-w-[540px]">
              {/* Floating Live Transaction Badge */}
              <div className="hidden sm:flex absolute -top-4 -right-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl px-3.5 py-1.5 rounded-full items-center gap-2 text-[10px] font-bold text-slate-800 animate-float-badge z-20 whitespace-nowrap shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                <span className="text-[#0F172A] font-extrabold font-mono">Pesanan Baru +Rp 74.000</span>
                <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 text-[9px] px-1.5 py-0.5 rounded font-bold">QRIS LUNAS</span>
              </div>

              {/* LAYER 1: Web Browser Admin POS (Dekstop Mockup) */}
              <div className="rounded-2xl bg-white border-2 border-slate-200 shadow-xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
                {/* Browser Titlebar */}
                <div className="bg-slate-100 border-b border-slate-200 px-3.5 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-2 sm:px-3 py-0.5 text-[9.5px] sm:text-[11px] text-slate-600 font-mono font-medium max-w-[140px] sm:max-w-[240px] truncate shadow-2xs">
                    <Lock className="w-3 h-3 text-[#10B981] shrink-0" />
                    <span className="truncate">pos.didev.studio/dashboard</span>
                  </div>
                  <div className="flex items-center gap-1 whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="text-[9px] font-bold text-emerald-700 whitespace-nowrap">ONLINE</span>
                  </div>
                </div>

                {/* Dashboard Screen Content */}
                <div className="p-4 sm:p-5 bg-[#F8FAFC]">
                  {/* Store Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                    <div>
                      <div className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wide">
                        KOPINUSA POS • OUTLET CABANG UTAMA
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        Shift Aktif: Kasir Budi S. • Sinkron Cloud Real-time
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[#2563EB] text-[10px] font-bold whitespace-nowrap shrink-0">
                      VERSI 3.2
                    </span>
                  </div>

                  {/* Stat Cards: Omset & Transaksi */}
                  <div className="grid grid-cols-2 gap-3 mb-3.5">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Omset Hari Ini</div>
                      <div className="text-base sm:text-xl font-extrabold text-[#0F172A] mt-0.5 font-mono whitespace-nowrap">
                        Rp 18.500.000
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1 whitespace-nowrap shrink-0">
                        <TrendingUp className="w-3 h-3 shrink-0" />
                        <span className="whitespace-nowrap">+24.5% vs kemarin</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Total Pesanan</div>
                      <div className="text-base sm:text-xl font-extrabold text-[#0F172A] mt-0.5 font-mono whitespace-nowrap">
                        248 Struk
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-blue-600 mt-1 whitespace-nowrap shrink-0">
                        <Printer className="w-3 h-3 shrink-0" />
                        <span className="whitespace-nowrap">Cetak Struk Bluetooth OK</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini Sales Bar Chart Simulation */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 mb-3.5 shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-700 uppercase whitespace-nowrap">Grafik Penjualan 7 Hari</span>
                      <span className="text-[9px] font-semibold text-slate-400 whitespace-nowrap">Rata-rata Rp 16.2 Juta/hari</span>
                    </div>
                    <div className="flex items-end justify-between gap-1.5 h-14 pt-2 border-b border-slate-100">
                      {[
                        { day: 'Sen', val: '45%' },
                        { day: 'Sel', val: '60%' },
                        { day: 'Rab', val: '55%' },
                        { day: 'Kam', val: '75%' },
                        { day: 'Jum', val: '85%' },
                        { day: 'Sab', val: '100%', peak: true },
                        { day: 'Min', val: '90%' },
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <div
                            className={`w-full rounded-t-sm transition-all duration-300 ${
                              bar.peak ? 'bg-[#10B981]' : 'bg-[#2563EB]'
                            }`}
                            style={{ height: bar.val }}
                          />
                          <span className="text-[8px] text-slate-500 font-mono">{bar.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recent Real Transactions */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-slate-600 uppercase whitespace-nowrap">Transaksi Terkini:</div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                      <div>
                        <span className="font-bold text-[#0F172A]">2x Caramel Latte + 1x Toast</span>
                        <span className="block text-[9px] text-slate-400">#ORD-9982 • Meja 04</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-[#0F172A] whitespace-nowrap">Rp 74.000</span>
                        <span className="block text-[9px] font-bold text-emerald-600 whitespace-nowrap shrink-0">QRIS LUNAS</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                      <div>
                        <span className="font-bold text-[#0F172A]">1x V60 Gayo + Croissant</span>
                        <span className="block text-[9px] text-slate-400">#ORD-9981 • Takeaway</span>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono font-bold text-[#0F172A] whitespace-nowrap">Rp 52.000</span>
                        <span className="block text-[9px] font-bold text-emerald-600 whitespace-nowrap shrink-0">TUNAI LUNAS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LAYER 2: Overlapping Real Flagship Smartphone Android (Menumpuk Elegan di Depan Kanan Bawah) */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 z-10 animate-enter-up delay-200">
                <div className="w-[215px] sm:w-[220px] h-[440px] rounded-[40px] bg-slate-950 p-2 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.55)] border-[2.5px] border-slate-700/90 ring-1 ring-slate-800 animate-float-phone hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Physical Hardware Buttons */}
                {/* Volume Buttons (Left) */}
                <div className="absolute -left-[3.5px] top-20 w-[2.5px] h-7 bg-slate-600 rounded-l-xs" />
                <div className="absolute -left-[3.5px] top-29 w-[2.5px] h-7 bg-slate-600 rounded-l-xs" />
                {/* Power Button (Right) */}
                <div className="absolute -right-[3.5px] top-24 w-[2.5px] h-9 bg-slate-600 rounded-r-xs" />

                {/* Edge Glare Ring */}
                <div className="absolute inset-0 rounded-[38px] pointer-events-none ring-1 ring-inset ring-white/10" />

                {/* Inner Smartphone Screen */}
                <div className="rounded-[32px] overflow-hidden bg-[#F8FAFC] border border-slate-900 flex flex-col justify-between h-full relative select-none">
                  {/* 1. Android Status Bar with Real Punch-Hole Camera */}
                  <div className="relative px-3.5 pt-2 pb-1 bg-white flex items-center justify-between border-b border-slate-100 text-[9px] font-bold text-slate-800">
                    <span className="font-mono text-[9px] tracking-tight">07:42</span>
                    {/* Centered Punch-Hole Camera (Guaranteed 100% Dead-Center) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-2 w-2.5 h-2.5 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center pointer-events-none">
                      <span className="w-0.5 h-0.5 rounded-full bg-blue-900/90" />
                    </div>
                    {/* Real Android Status Icons */}
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Signal className="w-2.5 h-2.5" aria-hidden="true" />
                      <Wifi className="w-2.5 h-2.5" aria-hidden="true" />
                      <Battery className="w-3 h-3 text-emerald-600 fill-emerald-500" aria-hidden="true" />
                    </div>
                  </div>

                  {/* 2. App Mini Header */}
                  <div className="px-3 py-1.5 bg-white border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-md bg-[#2563EB] text-white flex items-center justify-center p-0.5 shadow-2xs">
                        <AndroidIcon className="w-3.5 h-3.5" aria-hidden="true" />
                      </div>
                      <div className="text-[10px] font-extrabold text-[#0F172A] leading-tight">
                        HadirSmart APK
                      </div>
                    </div>
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold whitespace-nowrap shrink-0">
                      ONLINE
                    </span>
                  </div>

                  {/* 3. Screen Body Content */}
                  <div className="p-2.5 space-y-2 flex-1 flex flex-col justify-between bg-[#F8FAFC]">
                    {/* User Profile Card */}
                    <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-center">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 mx-auto mb-1 flex items-center justify-center text-white font-bold text-xs ring-2 ring-emerald-400">
                        AF
                      </div>
                      <div className="text-[11px] font-bold text-[#0F172A] whitespace-nowrap">Ahmad Fauzi</div>
                      <div className="text-[8px] text-slate-500 whitespace-nowrap">Staf Kurir & Lapangan</div>
                      <div className="mt-1 pt-1 border-t border-slate-100 text-[8px] text-slate-400 font-mono">
                        ID: #EMP-0429 • Shift Pagi
                      </div>
                    </div>

                    {/* Geofence Verification Card */}
                    <div className="p-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                      <div className="flex items-center gap-1 text-[9px] font-bold text-slate-700 mb-1">
                        <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                        <span className="whitespace-nowrap">Kantor Pusat Surabaya</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[8px]">
                        <span className="text-emerald-900 font-medium">Radius: <strong>12m</strong></span>
                        <span className="font-extrabold text-emerald-700 bg-white px-1 py-0.5 rounded border border-emerald-200 text-[8px]">
                          ✓ GPS VALID
                        </span>
                      </div>
                    </div>

                    {/* Facial Recognition / Camera Verification with Animated Laser Scan */}
                    <div className="p-2 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center gap-2 relative overflow-hidden">
                      {/* Laser Scanning Beam */}
                      <div className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-laser-scan shadow-[0_0_8px_rgba(37,99,235,0.8)] pointer-events-none" />
                      
                      <div className="w-7 h-7 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Camera className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <div className="text-[9px] font-bold text-slate-900 leading-tight">
                          Swafoto Wajah Valid
                        </div>
                        <div className="text-[7.5px] text-slate-500 font-mono">
                          Anti Fake GPS • Terkunci
                        </div>
                      </div>
                    </div>

                    {/* Primary Action Check-In Success */}
                    <div className="w-full py-2 bg-[#10B981] text-white rounded-xl text-center font-bold text-[10px] flex items-center justify-center gap-1 shadow-sm whitespace-nowrap shrink-0">
                      <CheckCircle2 className="w-3 h-3 shrink-0" />
                      <span className="whitespace-nowrap">Hadir Tepat Waktu</span>
                    </div>
                  </div>

                  {/* 4. Android Bottom Gesture Pill Bar */}
                  <div className="pt-1 pb-2 bg-[#F8FAFC] flex justify-center">
                    <div className="w-16 h-1 bg-slate-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

              {/* Floating Badge Tag: APK Siap Pakai with Gentle Bobbing */}
              <div className="absolute -top-3 -left-3 bg-[#0F172A] text-white px-3 py-1.5 rounded-lg shadow-lg border border-slate-700 text-[10px] font-mono font-bold flex items-center gap-1.5 whitespace-nowrap shrink-0 animate-float-badge-slow">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span className="whitespace-nowrap">APK RELEASE READY • ANDROID 8 - 15</span>
              </div>
            </div>
          </div>

        </div>

        {/* Layanan Terukur & Berdampak (4 Poin Pencapaian - Staggered Cascade) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3 sm:p-5 bg-white border border-slate-200 shadow-2xs rounded-xl flex items-center gap-2.5 sm:gap-3.5 hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out cursor-default animate-enter-up delay-100">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#0F172A] text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
              <Laptop className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-extrabold text-[#0F172A] leading-tight whitespace-nowrap shrink-0">100+</div>
              <div className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5 truncate">Proyek Web & APK</div>
            </div>
          </div>

          <div className="p-3 sm:p-5 bg-white border border-slate-200 shadow-2xs rounded-xl flex items-center gap-2.5 sm:gap-3.5 hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out cursor-default animate-enter-up delay-200">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#0F172A] text-emerald-400 flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-extrabold text-[#0F172A] leading-tight whitespace-nowrap shrink-0">1 Tahun</div>
              <div className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5 truncate">Garansi Bebas Bug</div>
            </div>
          </div>

          <div className="p-3 sm:p-5 bg-white border border-slate-200 shadow-2xs rounded-xl flex items-center gap-2.5 sm:gap-3.5 hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out cursor-default animate-enter-up delay-300">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#0F172A] text-indigo-400 flex items-center justify-center shrink-0 shadow-2xs">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-extrabold text-[#0F172A] leading-tight whitespace-nowrap shrink-0">99.9%</div>
              <div className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5 truncate">Uptime Monitoring</div>
            </div>
          </div>

          <div className="p-3 sm:p-5 bg-white border border-slate-200 shadow-2xs rounded-xl flex items-center gap-2.5 sm:gap-3.5 hover:border-[#2563EB] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-out cursor-default animate-enter-up delay-400">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[#0F172A] text-sky-400 flex items-center justify-center shrink-0 shadow-2xs">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="text-lg sm:text-2xl font-extrabold text-[#0F172A] leading-tight whitespace-nowrap shrink-0">99.8%</div>
              <div className="text-[11px] sm:text-xs text-[#475569] font-medium mt-0.5 truncate">Kepuasan Klien</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
