import React, { useState } from 'react';
import type { PortfolioItem } from '../../types';
import { 
  ArrowUpRight,
  Briefcase,
  Zap,
  TrendingUp,
  Printer,
  MapPin,
  Lock,
  Truck
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'kasir-pos',
    title: 'KasirKilat: Tablet POS & Web Cloud',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Jaringan Coffee Shop (12 Cabang)',
    thumbnail: 'pos',
    problem: 'Pencatatan kasir manual rawan selisih uang dan stok bahan sering hilang.',
    solution: 'Aplikasi Android APK tablet cetak struk Bluetooth + Web Dashboard pantau omset real-time.',
    techStack: ['Android APK', 'React 19', 'Bluetooth Print', 'PostgreSQL'],
    features: [
      'Cetak Struk Thermal Bluetooth Cepat',
      'Manajemen Meja & Split Bill',
      'Laporan Omset & Laba Otomatis',
      'Peringatan Stok Habis Real-time',
    ],
    results: 'Transaksi 3x Lebih Cepat, Selisih Kas 0%',
    isPopular: true,
  },
  {
    id: 'absensi-gps',
    title: 'HadirSmart: Absensi Selfie Anti-Fake GPS',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Perusahaan Konstruksi (350+ Pekerja)',
    thumbnail: 'attendance',
    problem: 'Karyawan lapangan sering titip absen dan memakai aplikasi Fake GPS palsu.',
    solution: 'Aplikasi APK Android deteksi mock GPS + swafoto wajah & Web Rekap Payroll otomatis.',
    techStack: ['Kotlin Android', 'Face Selfie', 'Geofencing', 'Web Admin'],
    features: [
      'Blokir Otomatis Aplikasi Fake GPS',
      'Verifikasi Foto Wajah Langsung (Kamera HP)',
      'Validasi Radius Titik Kantor / Proyek',
      'Export Rekap Gaji (Payroll) ke Excel',
    ],
    results: 'Kecurangan 0%, Hemat 15 Jam Rekap Gaji',
    isPopular: true,
  },
  {
    id: 'logistik-tracking',
    title: 'KargoNusantara: Portal Resi & APK Kurir',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Perusahaan Ekspedisi Logistik',
    thumbnail: 'logistics',
    problem: 'Pelanggan sering komplain status resi lambat dan bukti tanda terima tercecer.',
    solution: 'Website tracking resi publik + APK kurir scan barcode kamera & tanda tangan digital di HP.',
    techStack: ['Next.js Web', 'Camera Barcode', 'Digital Sign', 'Cloud API'],
    features: [
      'Cek Resi Real-time di Website',
      'Scan Barcode Cepat via Kamera HP',
      'Tanda Tangan Digital Penerima Paket',
      'Notifikasi Otomatis Status Pengiriman',
    ],
    results: 'Komplain Turun 85%, Update 4x Lebih Cepat',
  },
  {
    id: 'cbt-exam',
    title: 'EduExam: Ujian Sekolah Kiosk Anti-Curang',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Yayasan Pendidikan & SMK (1.200 Siswa)',
    thumbnail: 'education',
    problem: 'Siswa sering curang membuka Google atau chatting saat ujian daring di smartphone.',
    solution: 'Aplikasi APK Android terkunci (Kiosk Lock) + Web Guru untuk bank soal acak & koreksi otomatis.',
    techStack: ['Android Kiosk', 'React.js', 'SQLite Cache', 'Socket.IO'],
    features: [
      'Kiosk Mode (Kunci tombol Home & Pindah Tab)',
      'Bank Soal Acak Pilihan Ganda & Esai',
      'Ujian Tetap Berjalan saat Internet Putus',
      'Koreksi Nilai Otomatis & Analisis Butir',
    ],
    results: '1.200 Siswa Ujian Serentak Bebas Down',
  },
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'Full Ecosystem (Web + APK)'>('all');

  const filtered = activeTab === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeTab);

  const consultProject = (title: string) => {
    soundFx.playClick(900, 0.04);
    const msg = encodeURIComponent(`Halo DiDev, saya melihat portofolio "${title}" dan tertarik membuat sistem serupa untuk bisnis saya. Boleh diskusi detailnya?`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-mesh-portfolio border-b border-blue-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-1.5">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              <span>REKAM JEJAK SISTEM OPERASIONAL</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              STUDI KASUS SISTEM
            </h2>
            <p className="mt-1.5 text-xs sm:text-base text-slate-600 max-w-2xl font-sans font-medium">
              Sistem nyata yang aktif memproses transaksi dan data setiap hari:
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex items-center gap-1 p-1 bg-white/95 shadow-2xs rounded-xl border border-blue-200">
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setActiveTab('all'); }}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setActiveTab('Full Ecosystem (Web + APK)'); }}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'Full Ecosystem (Web + APK)' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Web + APK
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200/90 shadow-sm hover:border-blue-600 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="h-1.5 sm:h-2 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

              <div className="p-4 sm:p-7">
                {/* Header Pill */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-100 border border-blue-200 text-blue-900 text-[10px] sm:text-[11px] font-mono font-bold">
                    {item.category}
                  </span>
                  {item.isPopular && (
                    <span className="text-[10px] sm:text-[11px] font-mono text-blue-700 font-bold flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current text-blue-600" /> BEST CASE
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-2xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors mb-0.5">
                  {item.title}
                </h3>
                <div className="text-[11px] sm:text-xs font-mono text-slate-500 mb-3.5 font-semibold">
                  Klien: <strong className="text-blue-900">{item.client}</strong>
                </div>

                {/* Device Mockup Screen */}
                {item.id === 'kasir-pos' && (
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-slate-900 to-blue-950 text-white font-mono text-xs border border-blue-800/80 shadow-inner">
                    <div className="flex items-center justify-between pb-1.5 border-b border-blue-800/80 mb-1.5">
                      <div className="flex items-center gap-1.5 text-sky-300 font-bold text-[11px]">
                        <Printer className="w-3.5 h-3.5" />
                        <span>KASIR KILAT POS 58MM</span>
                      </div>
                      <span className="text-[9px] text-emerald-400 font-bold">STRUK TERCETAK</span>
                    </div>
                    <div className="space-y-1 text-[10px] sm:text-[11px] text-slate-300">
                      <div className="flex justify-between"><span>2x Cold Brew Latte</span><span>Rp 56.000</span></div>
                      <div className="flex justify-between font-bold text-white pt-1 border-t border-white/10">
                        <span>TOTAL BAYAR (QRIS)</span>
                        <span className="text-sky-300">Rp 84.000</span>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === 'absensi-gps' && (
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-blue-950 to-slate-900 text-white font-mono text-xs border border-blue-800/80 shadow-inner">
                    <div className="flex items-center justify-between pb-1.5 border-b border-blue-800/80 mb-1.5">
                      <div className="flex items-center gap-1.5 text-sky-300 font-bold text-[11px]">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        <span>GEOFENCING & FACE SCAN</span>
                      </div>
                      <span className="text-[9px] text-emerald-400 font-bold">LOKASI VALID</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 text-[10px] sm:text-[11px]">
                      <div className="p-1 rounded bg-white/10 text-center">
                        <span className="text-slate-400 block text-[8px]">RADIUS</span>
                        <span className="font-bold text-sky-300">18m (Valid)</span>
                      </div>
                      <div className="p-1 rounded bg-white/10 text-center">
                        <span className="text-slate-400 block text-[8px]">WAJAH</span>
                        <span className="font-bold text-emerald-400">Cocok 99.8%</span>
                      </div>
                    </div>
                  </div>
                )}

                {item.id === 'logistik-tracking' && (
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-slate-900 to-blue-950 text-white font-mono text-xs border border-blue-800/80 shadow-inner">
                    <div className="flex items-center justify-between pb-1.5 border-b border-blue-800/80 mb-1.5">
                      <div className="flex items-center gap-1.5 text-sky-300 font-bold text-[11px]">
                        <Truck className="w-3.5 h-3.5" />
                        <span>RESI: #KRG-882910</span>
                      </div>
                      <span className="text-[9px] text-sky-300 font-bold">MENGANTAR</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-300 flex items-center justify-between p-1 rounded bg-white/10">
                      <span>Kurir: Ahmad S.</span>
                      <span className="text-emerald-400 font-bold">TTD Digital: OK</span>
                    </div>
                  </div>
                )}

                {item.id === 'cbt-exam' && (
                  <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-blue-950 to-indigo-950 text-white font-mono text-xs border border-blue-800/80 shadow-inner">
                    <div className="flex items-center justify-between pb-1.5 border-b border-blue-800/80 mb-1.5">
                      <div className="flex items-center gap-1.5 text-sky-300 font-bold text-[11px]">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>KIOSK LOCK (TERKUNCI)</span>
                      </div>
                      <span className="text-[9px] text-amber-300 font-bold">ANTI-CURANG</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-300 flex items-center justify-between p-1 rounded bg-white/10">
                      <span>Soal 32 / 50</span>
                      <span className="text-sky-300 font-bold">Waktu: 42:15</span>
                    </div>
                  </div>
                )}

                {/* Problem vs Solution */}
                <div className="space-y-1.5 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans text-slate-700">
                    <strong className="text-rose-600 block mb-0.5">Tantangan Klien:</strong>
                    {item.problem}
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 text-xs font-sans text-slate-800">
                    <strong className="text-blue-800 block mb-0.5">Solusi DiDev:</strong>
                    {item.solution}
                  </div>
                </div>

                {/* Big Result Badge */}
                <div className="p-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white text-xs font-mono flex items-center gap-2.5 shadow-md shadow-blue-500/25">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-sky-300" />
                  <div>
                    <span className="font-bold uppercase tracking-wider block text-[9px] sm:text-[10px] text-sky-200">HASIL NYATA:</span>
                    <span className="font-bold text-xs sm:text-sm text-white">{item.results}</span>
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack & Consultation Button */}
              <div className="p-4 sm:p-7 pt-3 border-t border-blue-100 bg-blue-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1 self-start sm:self-auto">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white border border-blue-200 text-[9px] sm:text-[10px] font-mono text-blue-900 font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => consultProject(item.title)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 cursor-pointer active:scale-95"
                >
                  <span>BUAT SISTEM SERUPA</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
