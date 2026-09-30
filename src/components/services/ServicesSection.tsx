import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Printer, 
  MapPin, 
  AlertTriangle, 
  MessageSquare,
  Camera,
  Database,
  Wifi,
  Battery,
  Signal
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const ServicesSection: React.FC = () => {
  const openWhatsApp = (topic: string) => {
    soundFx.playClick(900, 0.04);
    const msg = encodeURIComponent(`Halo DiDev Studio, saya ingin konsultasi mengenai "${topic}". Boleh minta estimasi biaya dan portofolio serupa?`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Texture & Blueprint Watermark on White */}
      <div className="absolute inset-0 artistic-dot-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap shrink-0">
            <span className="whitespace-nowrap">LAYANAN SPESIALIS KUSTOM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Solusi Rekayasa Software Nyata untuk Operasional Bisnis Anda
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Bukan template murahan. Kami merancang arsitektur web dan mobile APK dari nol sesuai alur kerja, jenis produk, dan cara kerja staf Anda.
          </p>
        </div>

        {/* ========================================================
            SPOTLIGHT 1: Web Kasir (POS) & Dashboard Toko Multi-Cabang
            (Kiri: Mockup Antarmuka / Kanan: Penjelasan Solusi)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-28">
          {/* Mockup Antarmuka Web Dashboard Kasir & Stok */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/15 via-sky-400/15 to-transparent rounded-3xl blur-2xl -z-10 opacity-75 pointer-events-none" />
            <div className="rounded-2xl bg-white border-2 border-slate-200 shadow-xl overflow-hidden">
              {/* Window Bar */}
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-semibold truncate">
                  pos.didev.studio/cabang-surabaya
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold whitespace-nowrap shrink-0">
                  SINKRON 100%
                </span>
              </div>

              {/* Screen Body */}
              <div className="p-4 sm:p-5 bg-[#F8FAFC] space-y-3.5">
                {/* Real-time Sales Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Laba Bersih Hari Ini</span>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] font-mono mt-0.5 whitespace-nowrap">
                      Rp 4.850.000
                    </div>
                    <span className="text-[10px] text-emerald-600 font-bold whitespace-nowrap shrink-0">Margin Laba 38%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Struk Tercetak</span>
                    <div className="text-lg sm:text-xl font-extrabold text-[#0F172A] font-mono mt-0.5 whitespace-nowrap">
                      184 Nota
                    </div>
                    <span className="text-[10px] text-[#2563EB] font-bold whitespace-nowrap shrink-0">Printer Thermal 58mm</span>
                  </div>
                </div>

                {/* Stock Table with Alert */}
                <div className="rounded-xl bg-white border border-slate-200 p-3">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] font-bold text-slate-700">
                    <span className="whitespace-nowrap">Manajemen Stok Bahan Baku</span>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap shrink-0">Update Tiap Transaksi</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-700">
                      <span>Biji Kopi House Blend (1kg)</span>
                      <span className="font-mono font-semibold text-slate-900 whitespace-nowrap shrink-0">28 Pcs (Aman)</span>
                    </div>
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200">
                      <span className="flex items-center gap-1 font-semibold text-[11px]">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        Susu UHT Full Cream (1L)
                      </span>
                      <span className="font-mono font-bold text-amber-700 text-[11px] whitespace-nowrap shrink-0">Sisa 3 Dus (Peringatan)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span>Sirup Caramel Signature</span>
                      <span className="font-mono font-semibold text-slate-900 whitespace-nowrap shrink-0">14 Botol</span>
                    </div>
                  </div>
                </div>

                {/* Live Checkout Simulation */}
                <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-blue-700 font-bold block uppercase whitespace-nowrap">Cetak Nota Otomatis:</span>
                    <span className="font-bold text-[#0F172A]">Kasir Meja 03 • 2x Iced Latte</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="px-2 py-1 rounded bg-[#10B981] text-white font-bold text-[10px] whitespace-nowrap shrink-0">
                      QRIS LUNAS
                    </span>
                    <Printer className="w-4 h-4 text-[#2563EB] shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Penjelasan Solusi */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-2 whitespace-nowrap shrink-0">
              01 • SISTEM KASIR & MANAJEMEN RETAIL
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight font-sans">
              Website Kasir (POS) & Dashboard Toko Multi-Cabang
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
              Kendalikan seluruh cabang toko atau outlet dari satu layar laptop. Setiap ada transaksi kasir, stok bahan otomatis berkurang seketika dan omset langsung tercatat tanpa menunggu laporan manual malam hari.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[#334155]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Cetak Struk Thermal Bluetooth:</strong> Hubungkan tablet/HP langsung ke printer nota kasir tanpa kabel.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Peringatan Stok Menipis:</strong> Sistem kirim notifikasi otomatis saat persediaan barang kritis.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Laporan Laba & Pajak 1-Klik:</strong> Export rekap keuangan harian/bulanan ke format Excel & PDF.</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => openWhatsApp('Sistem Kasir POS & Web Dashboard Toko')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-sans font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Konsultasi Sistem Kasir Toko</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap shrink-0">Mulai Rp 1.500.000</span>
            </div>
          </div>
        </div>

        {/* ========================================================
            SPOTLIGHT 2: Aplikasi Mobile Android (APK) Lapangan
            (Kiri: Penjelasan Solusi / Kanan: Mockup Smartphone)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20 sm:mb-28">
          {/* Penjelasan Solusi */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider block mb-2 whitespace-nowrap shrink-0">
              02 • APLIKASI ANDROID (APK RELEASE)
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight font-sans">
              Aplikasi Android Lapangan: Absensi, Kurir & Sales
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
              Bekali staf lapangan, kurir ekspedisi, atau tim penjualan dengan aplikasi smartphone yang responsif dan tangguh. Bisa dipasang langsung via link WhatsApp atau diterbitkan ke Google Play Store resmi.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[#334155]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Anti-Fake GPS & Swafoto Kamera:</strong> Absensi jujur di titik radius kantor dengan validasi wajah nyata.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Scan Barcode Kamera & Tanda Tangan:</strong> Bukti serah terima paket kurir langsung tersimpan digital.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Mode Offline SQLite:</strong> Aplikasi tetap bisa input transaksi meskipun sinyal internet di lokasi hilang.</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => openWhatsApp('Aplikasi Android Lapangan (Absensi / Kurir / Sales)')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl font-sans font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Konsultasi Aplikasi Android</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap shrink-0">Mulai Rp 2.500.000</span>
            </div>
          </div>

          {/* Mockup Smartphone Android Flagship (Desain Realistis Flagship) */}
          {/* Mockup Smartphone Android Flagship (Desain Realistis Flagship 19.5:9) */}
          <div className="lg:col-span-6 flex justify-center relative">
            {/* Ambient Aura Lighting */}
            <div className="absolute -inset-4 bg-gradient-to-br from-emerald-500/20 via-teal-400/15 to-transparent rounded-full blur-2xl -z-10 opacity-75 pointer-events-none" />
            
            {/* Real Flagship Android Chassis (True 19.5:9 Tall Slender Proportions) */}
            <div className="w-[285px] sm:w-[295px] h-[585px] sm:h-[605px] relative rounded-[44px] bg-slate-950 p-2 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.45)] ring-1 ring-slate-800 border-[2.5px] border-slate-700/90 flex flex-col justify-between">
              
              {/* Hardware Physical Buttons */}
              {/* Volume Buttons (Left) */}
              <div className="absolute -left-[4px] top-24 w-[3px] h-9 bg-slate-600 rounded-l-xs shadow-xs" />
              <div className="absolute -left-[4px] top-36 w-[3px] h-9 bg-slate-600 rounded-l-xs shadow-xs" />
              {/* Power Button (Right) */}
              <div className="absolute -right-[4px] top-28 w-[3px] h-12 bg-slate-600 rounded-r-xs shadow-xs" />

              {/* Edge Glare Reflection */}
              <div className="absolute inset-0 rounded-[42px] pointer-events-none ring-1 ring-inset ring-white/10" />

              {/* Inner Smartphone Screen */}
              <div className="rounded-[36px] overflow-hidden bg-[#F8FAFC] border border-slate-900 flex flex-col justify-between h-full relative select-none">
                
                {/* 1. Android Status Bar with Real Punch-Hole Camera */}
                <div className="px-4 pt-2.5 pb-1 flex items-center justify-between bg-white text-slate-800 text-[10px] font-semibold border-b border-slate-100">
                  <span className="font-bold text-slate-900 tracking-tight">09:41</span>
                  
                  {/* Punch Hole Front Camera */}
                  <div className="w-3 h-3 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center -mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-blue-900/90" />
                  </div>

                  {/* Status Bar Icons */}
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <span className="text-[8.5px] font-mono font-bold text-slate-500">5G</span>
                    <Signal className="w-3 h-3 text-slate-700" />
                    <Wifi className="w-3 h-3 text-slate-700" />
                    <Battery className="w-3.5 h-3.5 text-emerald-600 fill-emerald-500" />
                  </div>
                </div>

                {/* 2. Mobile App Header */}
                <div className="px-3.5 py-2 bg-white border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shadow-2xs">
                      ⚡
                    </div>
                    <div>
                      <div className="text-[11px] font-extrabold text-[#0F172A] leading-tight">
                        Kurir Kilat Android
                      </div>
                      <div className="text-[8.5px] text-emerald-600 font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        GPS Aktif & Terlacak
                      </div>
                    </div>
                  </div>
                  <span className="text-[8.5px] px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold whitespace-nowrap shrink-0">
                    ONLINE
                  </span>
                </div>

                {/* 3. Daily Shift Summary (3 Quick Metrics) */}
                <div className="grid grid-cols-3 gap-1.5 px-3 py-1.5 bg-slate-100/70 border-b border-slate-200/60">
                  <div className="bg-white p-1 rounded-lg text-center border border-slate-200/80 shadow-2xs">
                    <span className="text-[7.5px] text-slate-400 block font-bold uppercase tracking-wider">TERKIRIM</span>
                    <span className="text-[11px] font-extrabold text-[#0F172A] font-mono leading-none">18 Pkt</span>
                  </div>
                  <div className="bg-white p-1 rounded-lg text-center border border-slate-200/80 shadow-2xs">
                    <span className="text-[7.5px] text-slate-400 block font-bold uppercase tracking-wider">ANTREAN</span>
                    <span className="text-[11px] font-extrabold text-[#2563EB] font-mono leading-none">2 Pkt</span>
                  </div>
                  <div className="bg-white p-1 rounded-lg text-center border border-slate-200/80 shadow-2xs">
                    <span className="text-[7.5px] text-slate-400 block font-bold uppercase tracking-wider">COD TUNAI</span>
                    <span className="text-[11px] font-extrabold text-emerald-600 font-mono leading-none">Rp 420k</span>
                  </div>
                </div>

                {/* 4. Screen Body Content */}
                <div className="p-3 space-y-2.5 flex-1 flex flex-col justify-between bg-[#F8FAFC]">
                  {/* Assignment Header Card */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wide">
                        TUGAS PENGANTARAN
                      </span>
                      <span className="text-[9px] font-mono font-extrabold text-[#2563EB]">
                        #EXP-99201
                      </span>
                    </div>

                    {/* Geofence GPS Route Card */}
                    <div className="space-y-1.5">
                      <div className="flex items-start gap-1.5 text-[11px] font-semibold text-slate-800 leading-snug">
                        <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">Jl. Basuki Rahmat No. 42, Sby</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-emerald-50/90 border border-emerald-200 flex items-center justify-between text-[9px]">
                        <span className="text-emerald-900 font-medium">Radius: <strong>8m dari titik</strong></span>
                        <span className="font-extrabold text-emerald-700 bg-white px-1.5 py-0.5 rounded border border-emerald-200 text-[8.5px]">
                          ✓ LOKASI VALID
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Camera POD Simulation Card */}
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                    <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wide flex items-center justify-between pb-1 border-b border-slate-100">
                      <span>BUKTI PENERIMAAN (POD)</span>
                      <span className="text-emerald-600 font-bold text-[8.5px]">✓ 100% LENGKAP</span>
                    </div>

                    <div className="p-2 rounded-lg bg-blue-50/80 border border-blue-200 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-2xs">
                        <Camera className="w-4 h-4" />
                      </div>
                      <div className="text-left flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-slate-900 leading-tight truncate">
                          Swafoto + Tanda Tangan
                        </div>
                        <div className="text-[8px] text-slate-500 mt-0.5 font-mono">
                          30/09 09:41 WIB • -7.2575, 112.7521
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Offline Cache Status */}
                  <div className="px-1 flex items-center justify-between text-[9.5px] text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Database className="w-3 h-3 text-[#2563EB] shrink-0" />
                      Database SQLite Offline
                    </span>
                    <span className="text-emerald-600 font-bold text-[9px]">✓ Tersimpan Aman</span>
                  </div>

                  {/* Primary Mobile Action Button */}
                  <div className="w-full py-2.5 px-3 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl text-center font-bold text-[11px] shadow-md shadow-emerald-500/20 flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 transition-colors">
                    <Printer className="w-3.5 h-3.5 shrink-0" />
                    <span>Selesaikan & Cetak Struk</span>
                  </div>
                </div>

                {/* 5. Android Bottom Gesture Pill Bar */}
                <div className="pt-1.5 pb-2 bg-[#F8FAFC] flex justify-center">
                  <div className="w-20 h-1 bg-slate-300 rounded-full" />
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            SPOTLIGHT 3: Company Profile & Portal ERP Terpadu
            (Kiri: Mockup Portal Web / Kanan: Penjelasan Solusi)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Mockup Portal Web ERP / Company */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-indigo-600/18 via-blue-500/15 to-transparent rounded-3xl blur-2xl -z-10 opacity-75 pointer-events-none" />
            <div className="rounded-2xl bg-white border-2 border-slate-200 shadow-xl overflow-hidden">
              <div className="bg-slate-100 border-b border-slate-200 px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-semibold truncate">
                  portal.perusahaan.co.id
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold whitespace-nowrap shrink-0">
                  SEO SCORE 98
                </span>
              </div>

              <div className="p-4 sm:p-5 bg-[#F8FAFC] space-y-3.5">
                {/* Performance Speed Badge */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-extrabold text-xs shrink-0">
                      98
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0F172A] block whitespace-nowrap">Google PageSpeed Score</span>
                      <span className="text-[10px] text-slate-500 whitespace-nowrap">Loading kencang di bawah 0.5 detik</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-600 whitespace-nowrap shrink-0">SANGAT CEPAT</span>
                </div>

                {/* WhatsApp Bot Gateway Simulation */}
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-emerald-900">
                    <span className="flex items-center gap-1 whitespace-nowrap shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      WhatsApp Gateway Bot Otomatis
                    </span>
                    <span className="text-[9px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded font-mono whitespace-nowrap shrink-0">TERKIRIM</span>
                  </div>
                  <p className="text-[11px] text-emerald-800 bg-white p-2 rounded-lg border border-emerald-100 leading-relaxed font-sans">
                    "Halo Bapak Dian, pesanan Anda #INV-8890 telah diverifikasi lunas via QRIS. Resi pengiriman dapat dilacak pada tautan berikut: didev.to/track/8890."
                  </p>
                </div>

                {/* Multi-Level Role Access */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">Keamanan & Hak Akses Berjenjang</span>
                    <div className="font-bold text-[#0F172A] mt-0.5 whitespace-nowrap">Role: Direksi, Finance, HRD & Staf</div>
                  </div>
                  <span className="text-xs font-bold text-[#2563EB] bg-blue-50 px-2 py-1 rounded whitespace-nowrap shrink-0">
                    ENKRIPSI SSL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Penjelasan Solusi */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs font-bold text-[#4F46E5] uppercase tracking-wider block mb-2 whitespace-nowrap shrink-0">
              03 • PORTAL PERUSAHAAN & ERP TERPADU
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] leading-tight font-sans">
              Company Profile, Portal E-Commerce & ERP Terpadu
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
              Bangun reputasi perusahaan dengan website yang memukau calon investor dan klien. Diintegrasikan langsung dengan payment gateway otomatis dan bot WhatsApp untuk layanan purnajual tanpa henti.
            </p>

            <div className="mt-6 space-y-3 text-sm text-[#334155]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Optimasi SEO Rangking 1 Google:</strong> Struktur ramah mesin pencari agar bisnis Anda mudah ditemukan pelanggan.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>WhatsApp Gateway Otomatis:</strong> Kirim nota, konfirmasi pembayaran, dan OTP langsung ke nomor WA pelanggan.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                <span><strong>Pembayaran Otomatis QRIS & VA:</strong> Pelanggan bayar langsung verifikasi lunas 24 jam tanpa konfirmasi manual.</span>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => openWhatsApp('Portal ERP / Company Profile / Web E-Commerce')}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl font-sans font-bold text-xs sm:text-sm shadow-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Konsultasi Portal Perusahaan</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <span className="text-xs text-slate-500 font-medium whitespace-nowrap shrink-0">Mulai Rp 3.000.000</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
