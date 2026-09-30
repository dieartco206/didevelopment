import React, { useState } from 'react';
import type { PortfolioItem } from '../../types';
import { 
  CheckCircle2, 
  ArrowUpRight,
  Briefcase,
  Zap
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'kasir-pos',
    title: 'KasirKilat: Sistem POS Tablet & Web Cloud Inventori',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Jaringan Resto & Coffee Shop (12 Cabang)',
    thumbnail: 'pos',
    problem: 'Pencatatan kasir manual rawan selisih uang, stok bahan baku sering hilang, dan owner kesulitan memantau omset saat sedang di luar kota.',
    solution: 'Kami bangun aplikasi kasir Android APK untuk tablet kasir kasir dengan cetak struk Bluetooth, terhubung real-time ke Web Dashboard Admin untuk owner memantau penjualan dari mana saja.',
    techStack: ['Android APK Native', 'React.js Web', 'Node.js', 'PostgreSQL', 'Bluetooth ESC/POS'],
    features: [
      'Cetak Struk Thermal Bluetooth Cepat',
      'Manajemen Meja & Split Bill',
      'Laporan Omset & Laba Bersih Otomatis',
      'Deteksi Stok Menipis Real-time',
    ],
    results: 'Efisiensi waktu transaksi naik 3x lipat, selisih kas harian turun menjadi 0%.',
    isPopular: true,
  },
  {
    id: 'absensi-gps',
    title: 'HadirSmart: Absensi GPS & Face Selfie Anti-Fake GPS',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Perusahaan Outsourcing & Konstruksi (350+ Pekerja)',
    thumbnail: 'attendance',
    problem: 'Karyawan lapangan sering titip absen dan memakai aplikasi Fake GPS palsu untuk memanipulasi kehadiran.',
    solution: 'Aplikasi Android APK dengan proteksi anti-mock location (blokir Fake GPS), validasi foto selfie wajah real-time, dan dashboard web rekap gaji otomatis.',
    techStack: ['Kotlin Android', 'Face Detection AI On-Device', 'React Web', 'Go Backend'],
    features: [
      'Deteksi & Blokir Aplikasi Fake GPS',
      'Verifikasi Foto Wajah Langsung (Kamera HP)',
      'Geofencing Radius Titik Kantor',
      'Export Rekap Penggajian (Payroll) Excel',
    ],
    results: 'Kecurangan absensi berkurang 100%, HRD hemat 15 jam kerja rekap gaji tiap akhir bulan.',
    isPopular: true,
  },
  {
    id: 'logistik-tracking',
    title: 'KargoNusantara: Portal Web Resi & APK Kurir Barcode',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Perusahaan Ekspedisi & Forwarding Lokal',
    thumbnail: 'logistics',
    problem: 'Pelanggan sering komplain karena status resi lambat diperbarui dan kurir kesulitan mencatat bukti tanda terima barang.',
    solution: 'Website publik untuk tracking nomor resi cepat, serta aplikasi Android APK khusus kurir dengan fitur scan barcode kamera dan tanda tangan digital penerima.',
    techStack: ['Next.js Website', 'Android APK (Camera Barcode)', 'Cloud Database'],
    features: [
      'Lacak Resi Real-time di Website',
      'Scan Barcode Paket via Kamera HP',
      'Tanda Tangan Digital Penerima Paket',
      'Notifikasi WhatsApp Update Pengiriman',
    ],
    results: 'Komplain status paket turun 85%, kecepatan update manifest naik 400%.',
  },
  {
    id: 'cbt-exam',
    title: 'EduExam Pro: Aplikasi Ujian Siswa Anti-Curang & Web CBT',
    category: 'Full Ecosystem (Web + APK)',
    client: 'Yayasan Pendidikan & SMK Swasta (1.200 Siswa)',
    thumbnail: 'education',
    problem: 'Siswa sering membuka tab browser lain atau chatting saat ujian online di smartphone.',
    solution: 'Aplikasi APK Android siswa dengan Kiosk Lock Mode (layar terkunci saat ujian aktif) dan Web Admin Guru untuk bank soal acak & koreksi nilai otomatis.',
    techStack: ['Android APK Kiosk', 'React.js', 'SQLite Local Cache', 'Socket.IO'],
    features: [
      'Kiosk Mode (Blokir tombol Home & Pindah Tab)',
      'Bank Soal Acak Pilihan Ganda & Esai',
      'Ujian Tetap Berjalan saat Sinyal Terputus',
      'Analisis Butir Soal & Nilai Otomatis',
    ],
    results: 'Ujian serentak 1.200 siswa berjalan mulus tanpa server down, integritas nilai terjamin.',
  },
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'Full Ecosystem (Web + APK)' | 'Android APK'>('all');

  const filtered = activeTab === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter((p) => p.category.includes(activeTab));

  const consultProject = (title: string) => {
    soundFx.playClick(900, 0.04);
    const msg = encodeURIComponent(`Halo DiDev, saya melihat portofolio "${title}" dan tertarik membuat sistem serupa untuk bisnis saya. Boleh diskusi detailnya?`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">
              <Briefcase className="w-4 h-4" />
              <span>BUKTI KERJA NYATA & REKAM JEJAK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              PORTOFOLIO SISTEM WEBSITE & APK ANDROID
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
              Bukan sekadar desain mockup di atas kertas. Ini adalah sistem nyata yang sudah digunakan setiap hari
              oleh ratusan staf dan ribuan pelanggan di berbagai sektor bisnis.
            </p>
          </div>

          {/* Tab Filter */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setActiveTab('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Semua Proyek
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setActiveTab('Full Ecosystem (Web + APK)'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'Full Ecosystem (Web + APK)' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Web + APK
            </button>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold">
                    {item.category}
                  </span>
                  {item.isPopular && (
                    <span className="text-[11px] font-mono text-blue-600 font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current" /> BEST SELLER
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-sans text-slate-900 mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono text-slate-500 mb-4">
                  Klien: <strong className="text-slate-700">{item.client}</strong>
                </div>

                {/* Problem vs Solution */}
                <div className="space-y-3 mb-5">
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-sans text-slate-700">
                    <span className="font-bold text-rose-600 block mb-0.5">Tantangan Klien:</span>
                    {item.problem}
                  </div>

                  <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs font-sans text-slate-800">
                    <span className="font-bold text-blue-700 block mb-0.5">Solusi DiDev:</span>
                    {item.solution}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wide font-semibold">
                    FITUR SISTEM:
                  </div>
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Result Highlights */}
                <div className="p-3 rounded-xl bg-blue-600 text-white text-xs font-mono mb-6 shadow-xs">
                  <span className="font-bold">HASIL NYATA: </span>
                  {item.results}
                </div>
              </div>

              {/* Footer Tech Stack & Consultation Button */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => consultProject(item.title)}
                  className="w-full sm:w-auto px-4 py-2.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>KONSULTASI SISTEM INI</span>
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
