import React from 'react';
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
  Users
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface HeroPromoProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroPromo: React.FC<HeroPromoProps> = ({ onNavigate }) => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6281234567890?text=Halo%20DiDev%20Studio%2C%20saya%20tertarik%20konsultasi%20jasa%20pembuatan%20Website%20dan%20Aplikasi%20Android%20APK%20untuk%20usaha%20saya.',
      '_blank'
    );
  };

  return (
    <section id="hero" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 lg:py-20 overflow-hidden bg-white border-b border-slate-200">
      {/* Background Soft Accent Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Kolom Kiri: Pitch Tajam, Human-First Copywriting */}
          <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-xs font-bold w-fit mx-auto lg:mx-0 mb-4 shadow-2xs">
              <span className="text-amber-500 font-extrabold">⚡</span>
              <span className="tracking-wide">Jasa Pembuatan Website & Aplikasi Android Kustom</span>
            </div>

            {/* Headline Kuat & Tegas */}
            <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight text-[#0F172A] leading-[1.18] font-sans">
              Bikin Sistem Bisnis & Aplikasi Android Sesuai Alur Usaha Anda Sendiri.
            </h1>

            {/* Subheadline Solutif */}
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
              Hentikan pencatatan manual yang rawan selisih uang dan stok hilang. Kami bangunkan website operasional dan aplikasi Android APK yang pas dengan SOP usaha Anda — <strong className="text-[#0F172A] font-semibold">sekali bayar, 100% hak milik source code, tanpa biaya sewa bulanan</strong>.
            </p>

            {/* CTA Ganda: WhatsApp Hijau + Tombol Hitung Biaya */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 bg-[#10B981] hover:bg-[#059669] text-white font-sans font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-200 active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Konsultasi Gratis via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(600, 0.05);
                  onNavigate('calculator');
                }}
                className="inline-flex items-center justify-center px-5 py-3.5 sm:py-4 bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-slate-200 hover:border-[#2563EB] font-sans font-bold text-sm sm:text-base rounded-xl transition-all duration-200 cursor-pointer shadow-2xs"
              >
                Hitung Estimasi Biaya
              </button>
            </div>

            {/* Trust Checklist Bar */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs text-[#334155] font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                Sekali Bayar
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                100% Source Code Klien
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                Garansi Bebas Bug 1 Th
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                Siap Rilis Play Store
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Layered High-Fidelity UI Showcase (Pengganti 3D Pucat) */}
          <div className="lg:col-span-6 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[540px]">
              
              {/* LAYER 1: Web Browser Admin POS (Dekstop Mockup) */}
              <div className="rounded-2xl bg-white border-2 border-slate-200 shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl">
                {/* Browser Titlebar */}
                <div className="bg-slate-100 border-b border-slate-200 px-3.5 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-3 py-0.5 text-[10px] sm:text-[11px] text-slate-600 font-mono font-medium max-w-[240px] truncate shadow-2xs">
                    <Lock className="w-3 h-3 text-[#10B981]" />
                    <span>pos.didev.studio/dashboard</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-bold text-emerald-700">ONLINE</span>
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
                    <span className="px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[#2563EB] text-[10px] font-bold">
                      VERSI 3.2
                    </span>
                  </div>

                  {/* Stat Cards: Omset & Transaksi */}
                  <div className="grid grid-cols-2 gap-3 mb-3.5">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[10px] text-slate-500 font-medium">Omset Hari Ini</div>
                      <div className="text-base sm:text-xl font-extrabold text-[#0F172A] mt-0.5 font-mono">
                        Rp 18.500.000
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 mt-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>+24.5% vs kemarin</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      <div className="text-[10px] text-slate-500 font-medium">Total Pesanan</div>
                      <div className="text-base sm:text-xl font-extrabold text-[#0F172A] mt-0.5 font-mono">
                        248 Struk
                      </div>
                      <div className="flex items-center gap-1 text-[10px] font-semibold text-blue-600 mt-1">
                        <Printer className="w-3 h-3" />
                        <span>Cetak Struk Bluetooth OK</span>
                      </div>
                    </div>
                  </div>

                  {/* Mini Sales Bar Chart Simulation */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 mb-3.5 shadow-2xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-700 uppercase">Grafik Penjualan 7 Hari</span>
                      <span className="text-[9px] font-semibold text-slate-400">Rata-rata Rp 16.2 Juta/hari</span>
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
                    <div className="text-[10px] font-bold text-slate-600 uppercase">Transaksi Terkini:</div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                      <div>
                        <span className="font-bold text-[#0F172A]">2x Caramel Latte + 1x Toast</span>
                        <span className="block text-[9px] text-slate-400">#ORD-9982 • Meja 04</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-[#0F172A]">Rp 74.000</span>
                        <span className="block text-[9px] font-bold text-emerald-600">QRIS LUNAS</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200 flex items-center justify-between text-[11px] shadow-2xs">
                      <div>
                        <span className="font-bold text-[#0F172A]">1x V60 Gayo + Croissant</span>
                        <span className="block text-[9px] text-slate-400">#ORD-9981 • Takeaway</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-bold text-[#0F172A]">Rp 52.000</span>
                        <span className="block text-[9px] font-bold text-emerald-600">TUNAI LUNAS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LAYER 2: Overlapping Smartphone Android (Menumpuk Elegan di Depan Kanan Bawah) */}
              <div className="hidden sm:block absolute -bottom-6 -right-5 w-[230px] rounded-[28px] bg-slate-900 p-2 shadow-2xl border-4 border-slate-800 rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Phone Speaker & Camera Notch */}
                <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-1.5 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                </div>

                {/* Smartphone Screen Content */}
                <div className="rounded-[20px] bg-white p-3 text-slate-900 text-xs overflow-hidden">
                  <div className="flex items-center justify-between pb-1.5 border-b border-slate-100 mb-2">
                    <span className="text-[9px] font-bold text-[#2563EB]">APK HADIRSMART</span>
                    <span className="text-[9px] font-mono text-slate-500">07:42 WIB</span>
                  </div>

                  {/* Selfie & Location Verification */}
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 mb-2 text-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 mx-auto mb-1 flex items-center justify-center text-white font-bold text-xs ring-2 ring-emerald-400">
                      AF
                    </div>
                    <div className="text-[11px] font-bold text-[#0F172A]">Ahmad Fauzi</div>
                    <div className="text-[9px] text-slate-500">Staf Kurir & Lapangan</div>
                  </div>

                  {/* Geofencing Card */}
                  <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 mb-2.5">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-800">
                      <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                      <span>Radius Kantor: 12 Meter</span>
                    </div>
                    <div className="text-[9px] text-emerald-700 mt-0.5 font-medium">
                      GPS Valid • Anti Mock Location
                    </div>
                  </div>

                  {/* Check-In Success Badge */}
                  <div className="w-full py-1.5 bg-[#10B981] text-white rounded-lg text-center font-bold text-[10px] flex items-center justify-center gap-1 shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Hadir Tepat Waktu</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge Tag: APK Siap Pakai */}
              <div className="absolute -top-3 -left-3 bg-[#0F172A] text-white px-3 py-1.5 rounded-lg shadow-lg border border-slate-700 text-[10px] font-mono font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>APK RELEASE READY • ANDROID 8 - 15</span>
              </div>
            </div>
          </div>

        </div>

        {/* Layanan Terukur & Berdampak (4 Poin Pencapaian) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl flex items-center gap-3.5 hover:border-[#2563EB] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">100+</div>
              <div className="text-xs text-[#475569] font-medium mt-0.5">Proyek Web & APK Selesai</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl flex items-center gap-3.5 hover:border-[#2563EB] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">1 Tahun</div>
              <div className="text-xs text-[#475569] font-medium mt-0.5">Garansi Resmi Bebas Bug</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl flex items-center gap-3.5 hover:border-[#2563EB] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">100%</div>
              <div className="text-xs text-[#475569] font-medium mt-0.5">Hak Milik Source Code</div>
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-slate-200 rounded-xl flex items-center gap-3.5 hover:border-[#2563EB] transition-colors">
            <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] leading-tight">99.8%</div>
              <div className="text-xs text-[#475569] font-medium mt-0.5">Tingkat Kepuasan Klien</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
