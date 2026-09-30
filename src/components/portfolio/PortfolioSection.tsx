import React, { useState } from 'react';
import type { PortfolioItem } from '../../types';
import { 
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'kasir-pos',
    title: 'Aplikasi Kasir POS Tablet & Web Cloud',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Jaringan F&B Coffee Shop (12 Cabang)',
    thumbnail: 'pos',
    problem: 'Pencatatan kasir manual rawan selisih uang dan data stok antar cabang sering terlambat diperbarui.',
    solution: 'Aplikasi Android APK tablet kasir cetak struk Bluetooth terintegrasi dengan Web Dashboard owner real-time.',
    techStack: ['Android APK', 'React', 'Bluetooth Print', 'PostgreSQL'],
    features: [
      'Cetak struk thermal Bluetooth cepat',
      'Manajemen meja, antrean & split bill',
      'Laporan omset dan laba kotor otomatis',
      'Peringatan otomatis stok bahan menipis',
    ],
    results: 'Transaksi 3x Lebih Cepat, Selisih Kas 0%',
    isPopular: true,
  },
  {
    id: 'absensi-gps',
    title: 'Sistem Absensi Selfie & Validasi Geofencing',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Perusahaan Konstruksi (350+ Pekerja Lapangan)',
    thumbnail: 'attendance',
    problem: 'Karyawan lapangan sering titip absen dan memakai aplikasi Fake GPS palsu di proyek.',
    solution: 'Aplikasi APK Android anti-fake GPS dengan swafoto kamera HP dan Web Rekap Payroll otomatis.',
    techStack: ['Android Native', 'Face Selfie', 'Geofencing GPS', 'Web Payroll'],
    features: [
      'Deteksi dan pemblokiran otomatis Fake GPS',
      'Verifikasi foto wajah langsung di lokasi',
      'Validasi radius geofencing area proyek',
      'Export rekapitulasi gaji bulanan ke Excel',
    ],
    results: 'Kecurangan 0%, Hemat 15 Jam Rekap Payroll',
    isPopular: true,
  },
  {
    id: 'logistik-tracking',
    title: 'Portal Tracking Resi & Aplikasi Kurir',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Perusahaan Jasa Ekspedisi Logistik',
    thumbnail: 'logistics',
    problem: 'Pelanggan sering komplain status resi lambat dan bukti tanda terima pengiriman fisik sering tercecer.',
    solution: 'Website tracking resi publik terintegrasi APK kurir untuk scan barcode kamera dan tanda tangan digital.',
    techStack: ['Next.js Web', 'Camera Barcode', 'Digital Signature', 'Cloud API'],
    features: [
      'Pelacakan status paket real-time di website',
      'Scan barcode resi cepat dengan kamera smartphone',
      'Tanda tangan digital penerima langsung di layar HP',
      'Notifikasi otomatis pembaruan status ke WhatsApp',
    ],
    results: 'Komplain Pelanggan Turun 85%, Update Instan',
  },
  {
    id: 'cbt-exam',
    title: 'Sistem Ujian Sekolah Online Kiosk Anti-Curang',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Yayasan Pendidikan & SMK (1.200 Siswa)',
    thumbnail: 'education',
    problem: 'Siswa sering curang membuka browser pencari atau chatting saat ujian daring di smartphone.',
    solution: 'Aplikasi APK Android mode Kiosk Lock terkunci dan Web Guru untuk bank soal acak & penilaian instan.',
    techStack: ['Android Kiosk', 'React Web', 'SQLite Cache', 'Socket.IO'],
    features: [
      'Mode Kiosk terkunci (blokir tombol Home & pindah tab)',
      'Pengacakan butir soal pilihan ganda & esai',
      'Ujian tetap lancar saat koneksi internet sekolah putus',
      'Koreksi nilai otomatis dan analisis daya beda soal',
    ],
    results: '1.200 Siswa Ujian Serentak Tanpa Gangguan Server',
  },
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'Full Ecosystem (Web + APK)'>('all');

  const filtered = activeTab === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category === activeTab);

  const consultProject = (title: string) => {
    soundFx.playClick(900, 0.04);
    const msg = encodeURIComponent(`Halo DiDev, saya melihat studi kasus portofolio "${title}" dan tertarik membuat sistem serupa untuk bisnis saya. Boleh diskusi detailnya?`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-block text-xs font-bold text-[#256BE0] uppercase tracking-wider mb-2">
              REKAM JEJAK & PORTOFOLIO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102E61] tracking-tight font-sans">
              Kumpulan Proyek & Studi Kasus Nyata
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#48505E] max-w-2xl font-normal">
              Sistem perangkat lunak yang telah aktif digunakan untuk memproses transaksi dan aktivitas operasional harian.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setActiveTab('all'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-[#256BE0] text-white shadow-xs' : 'text-[#48505E] hover:text-[#256BE0]'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setActiveTab('Full Ecosystem (Web + APK)'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'Full Ecosystem (Web + APK)' ? 'bg-[#256BE0] text-white shadow-xs' : 'text-[#48505E] hover:text-[#256BE0]'
              }`}
            >
              Web + APK
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#256BE0] hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Header: Category Badge + Best Case */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-blue-50 text-[#256BE0] text-xs font-semibold">
                    {item.category}
                  </span>
                  <div className="text-xs text-slate-500 font-medium">
                    Klien: <strong className="text-[#102E61]">{item.client}</strong>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#102E61] group-hover:text-[#256BE0] transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Problem & Solved Narrative */}
                <div className="space-y-2 mb-5 text-sm text-[#48505E]">
                  <p className="leading-relaxed">
                    <strong className="text-[#102E61] font-semibold">Kebutuhan: </strong>
                    {item.problem}
                  </p>
                  <p className="leading-relaxed">
                    <strong className="text-[#256BE0] font-semibold">Solusi DiDev: </strong>
                    {item.solution}
                  </p>
                </div>

                {/* Impact Highlight Box */}
                <div className="p-3.5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB] flex items-center gap-3 mb-5">
                  <TrendingUp className="w-5 h-5 text-[#256BE0] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold text-[#256BE0] uppercase tracking-wider block">HASIL IMPLEMENTASI:</span>
                    <span className="text-xs sm:text-sm font-bold text-[#102E61]">{item.results}</span>
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack & Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-[#48505E] text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => consultProject(item.title)}
                  className="w-full sm:w-auto px-4 py-2 bg-blue-50/80 hover:bg-[#256BE0] text-[#256BE0] hover:text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                >
                  <span>Buat Serupa</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
