import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Cpu
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ServiceDetail {
  id: string;
  category: 'web' | 'android' | 'combo';
  title: string;
  badge: string;
  priceStart: string;
  description: string;
  icon: React.ElementType;
  techTags: string[];
  features: string[];
  deliverables: string;
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'web-dev',
    category: 'web',
    title: 'Pengembangan Aplikasi Web Kustom',
    badge: 'WEB APPLICATION',
    priceStart: 'Mulai Rp 1.500.000',
    description: 'Sistem aplikasi web responsif untuk digitalisasi proses bisnis: ERP, HRIS, manajemen stok, dan portal perusahaan.',
    icon: Globe,
    techTags: ['React', 'Next.js', 'PostgreSQL', 'Tailwind'],
    features: [
      'Tampilan responsif optimal di desktop, tablet, dan smartphone',
      'Kecepatan akses tinggi (< 1 detik) & arsitektur RESTful API',
      'Dashboard admin intuitif untuk kelola data & unduh laporan',
      'Keamanan SSL, enkripsi database, dan backup berkala',
    ],
    deliverables: '100% Full Source Code • Garansi 1 Tahun',
  },
  {
    id: 'android-apk',
    category: 'android',
    title: 'Aplikasi Mobile Android (APK & Play Store)',
    badge: 'MOBILE ANDROID',
    priceStart: 'Mulai Rp 2.500.000',
    description: 'Aplikasi Android native/hybrid ringan untuk kasir POS, absensi karyawan, kurir pengiriman, dan layanan pelanggan.',
    icon: Smartphone,
    techTags: ['Android Native', 'Bluetooth Print', 'Barcode Scan', 'Offline SQLite'],
    features: [
      'Master installer APK (.apk) siap pasang langsung di smartphone',
      'Dukungan cetak struk printer thermal Bluetooth (58mm/80mm)',
      'Integrasi scan barcode kamera, GPS tracking, dan swafoto',
      'Bantuan publikasi dan verifikasi di Google Play Store resmi',
    ],
    deliverables: 'Master APK Release • Source Code • Garansi 1 Tahun',
  },
  {
    id: 'combo-ecosystem',
    category: 'combo',
    title: 'Ekosistem Terintegrasi (Web + Android APK)',
    badge: 'SOLUSI PALING LARIS',
    priceStart: 'Mulai Rp 4.500.000',
    description: 'Solusi terpadu: pantau transaksi di laptop, staf eksekusi di HP Android dengan sinkronisasi data real-time.',
    icon: Layers,
    techTags: ['Web Admin', 'Android APK', 'Cloud Database', 'Real-time Sync'],
    features: [
      'Sinkronisasi otomatis data transaksi antara web dan aplikasi HP',
      'Pembagian hak akses multi-level (Owner, Admin, Kasir, Staf)',
      'Laporan omset, laba, dan inventori otomatis export Excel & PDF',
      'Integrasi payment gateway QRIS dan Virtual Account Bank',
    ],
    deliverables: 'Web + APK Mobile • Setup Cloud VPS • Garansi 1 Tahun',
  },
  {
    id: 'modernize',
    category: 'web',
    title: 'Modernisasi Sistem & Migrasi Cloud',
    badge: 'SYSTEM UPGRADE',
    priceStart: 'Mulai Rp 3.000.000',
    description: 'Perbarui sistem lama yang lambat menjadi aplikasi modern berbasis cloud yang lebih cepat, aman, dan siap scale-up.',
    icon: Database,
    techTags: ['Cloud VPS', 'Code Refactor', 'Database Migration', 'Security'],
    features: [
      'Redesain antarmuka UI/UX modern yang ramah pengguna',
      'Optimasi database & refactoring kode agar performa lebih cepat',
      'Migrasi server lokal ke arsitektur cloud terproteksi',
      'Penambahan fungsi & fitur baru sesuai alur bisnis yang berkembang',
    ],
    deliverables: 'Sistem Cloud Modern • Panduan Migrasi • Garansi 1 Tahun',
  },
  {
    id: 'web-to-apk',
    category: 'android',
    title: 'Konversi Web ke Aplikasi Android APK',
    badge: 'PROSES CEPAT 1-3 HARI',
    priceStart: 'Mulai Rp 650.000',
    description: 'Kemas website yang sudah berjalan menjadi aplikasi Android APK berlogo resmi, siap pasang di smartphone.',
    icon: RefreshCw,
    techTags: ['Web2APK', 'Push Notification', 'Offline Screen', 'HD Icon'],
    features: [
      'Splash screen berlogo resmi dan navigasi modern di HP',
      'Ukuran aplikasi sangat ringan (hanya 4-8 MB) dan hemat kuota',
      'Fitur notifikasi push dan deteksi koneksi internet cerdas',
      'File installer APK langsung dikirim dan siap dibagikan',
    ],
    deliverables: 'File APK Rilis • Panduan Instalasi • Garansi 1 Tahun',
  },
  {
    id: 'api-hardware',
    category: 'combo',
    title: 'Integrasi API, Payment & Hardware',
    badge: 'INTEGRATION',
    priceStart: 'Mulai Rp 1.200.000',
    description: 'Hubungkan sistem aplikasi Anda dengan pihak ketiga: gateway pembayaran QRIS, WhatsApp bot notifikasi, dan hardware kasir.',
    icon: Cpu,
    techTags: ['QRIS Payment', 'WhatsApp API', 'Thermal Printer', 'REST API'],
    features: [
      'Integrasi pembayaran QRIS dinamis & Virtual Account bank',
      'WhatsApp Gateway untuk pengiriman nota, resi, dan notifikasi OTP',
      'Koneksi hardware scanner barcode & printer Bluetooth kasir',
      'Dokumentasi teknis RESTful API yang rapi dan terstandar',
    ],
    deliverables: 'Modul Integrasi Aktif • Dokumentasi API • Garansi 1 Tahun',
  },
];

export const ServicesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'android' | 'combo'>('all');

  const filteredServices = filter === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.category === filter);

  const openWhatsAppService = (serviceName: string) => {
    soundFx.playClick(900, 0.04);
    const msg = encodeURIComponent(`Halo DiDev, saya berminat konsultasi layanan "${serviceName}". Boleh minta rincian estimasi biaya dan waktu pengerjaannya?`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="services" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Sekawan Media Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-block text-xs font-bold text-[#256BE0] uppercase tracking-wider mb-2">
              TIPE LAYANAN PENGEMBANGAN
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102E61] tracking-tight font-sans">
              Melayani Berbagai Jasa Pengembangan Sistem
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#48505E] max-w-2xl font-normal">
              Kami menawarkan software kustom sesuai kebutuhan alur bisnis Anda. 100% hak milik source code tanpa biaya sewa tersembunyi.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('all'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all' ? 'bg-[#256BE0] text-white shadow-xs' : 'text-[#48505E] hover:text-[#256BE0]'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('web'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'web' ? 'bg-[#256BE0] text-white shadow-xs' : 'text-[#48505E] hover:text-[#256BE0]'
              }`}
            >
              Aplikasi Web
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('android'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'android' ? 'bg-[#256BE0] text-white shadow-xs' : 'text-[#48505E] hover:text-[#256BE0]'
              }`}
            >
              Android APK
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('combo'); }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'combo' ? 'bg-[#256BE0] text-white shadow-xs' : 'text-[#48505E] hover:text-[#256BE0]'
              }`}
            >
              Ekosistem Terintegrasi
            </button>
          </div>
        </div>

        {/* Clean Corporate Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#256BE0] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#256BE0] flex items-center justify-center shrink-0 group-hover:bg-[#256BE0] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 text-[#102E61] text-[10px] font-semibold tracking-wide uppercase">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Price */}
                  <h3 className="text-xl font-bold text-[#102E61] group-hover:text-[#256BE0] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <div className="text-sm font-semibold text-[#256BE0] mb-3">
                    {service.priceStart}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#48505E] leading-relaxed mb-5 font-normal">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2B2F38] font-normal leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#256BE0] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techTags.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-[#48505E] text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Deliverable & Action Button */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <div className="text-[11px] text-slate-500 font-medium">
                    Output: <strong className="text-[#102E61]">{service.deliverables}</strong>
                  </div>

                  <button
                    onClick={() => openWhatsAppService(service.title)}
                    className="w-full py-2.5 bg-blue-50/80 hover:bg-[#256BE0] text-[#256BE0] hover:text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Konsultasi Layanan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
