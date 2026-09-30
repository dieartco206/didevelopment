import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ServiceDetail {
  id: string;
  category: 'all' | 'web' | 'android' | 'combo';
  title: string;
  badge: string;
  priceStart: string;
  description: string;
  popularFor: string;
  icon: React.ElementType;
  techTags: string[];
  features: string[];
  deliverables: string[];
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'web-dev',
    category: 'web',
    title: 'Website Modern & Toko Online',
    badge: 'STARTER UMKM',
    priceStart: 'Mulai Rp 1.500.000',
    description: 'Web kilat, modern, responsif di HP & laptop, SEO ready, dan siap terima order 24 jam.',
    popularFor: 'Company Profile, Toko Online, Landing Page Promo, Portal Berita',
    icon: Globe,
    techTags: ['React 19', 'Next.js', 'Tailwind', 'SEO Score 95+'],
    features: [
      'Desain Responsif 100% (HP, Tablet, Laptop)',
      'Loading Cepat (< 0.6 detik Google PageSpeed)',
      'Gratis Domain .COM / .ID & SSL Security 1 Tahun',
      'Dashboard Admin Kelola Produk & Artikel',
      'Tombol WhatsApp Order Langsung ke CS',
    ],
    deliverables: ['Full Source Code', 'Domain & Hosting 1 Th', 'Buku Panduan', 'Garansi 1 Tahun'],
  },
  {
    id: 'android-apk',
    category: 'android',
    title: 'Aplikasi Android APK & Play Store',
    badge: 'NATIVE & CEPAT',
    priceStart: 'Mulai Rp 2.500.000',
    description: 'Aplikasi smartphone ringan, cetak struk Bluetooth, barcode scanner, dan GPS tracking.',
    popularFor: 'Kasir POS, Absensi Karyawan, Aplikasi Kurir, Sistem Gudang',
    icon: Smartphone,
    techTags: ['Android Native', 'Bluetooth Print', 'Camera Barcode', 'Offline Cache'],
    features: [
      'Master File APK (.apk) siap bagikan & pasang',
      'Bantuan Upload ke Google Play Store Resmi',
      'Cetak Struk Printer Thermal Bluetooth',
      'Scan Barcode / QR & Swafoto Kamera HP',
      'Kompatibel Android 8 hingga Android 15',
    ],
    deliverables: ['File APK Release', 'Full Source Code', 'Keystore Sertifikat', 'Garansi 1 Tahun'],
  },
  {
    id: 'combo-ecosystem',
    category: 'combo',
    title: 'Paket Komplit (Web Dashboard + Android APK)',
    badge: 'PALING LARIS & LENGKAP',
    priceStart: 'Mulai Rp 4.500.000',
    description: 'Pantau omset di laptop, staf transaksi di HP. Data tersinkronisasi otomatis secara real-time.',
    popularFor: 'Bisnis Franchise / Multi-Cabang, E-Learning, Ekspedisi, Sistem Absensi',
    icon: Layers,
    techTags: ['Web Admin', 'Android APK', 'Cloud Database', 'Real-time Sync'],
    features: [
      'Sinkronisasi Otomatis Web Laptop & HP Android',
      'Hak Akses Berjenjang (Owner, Admin, Kasir, Kurir)',
      'Laporan Keuangan & Grafik Export Excel / PDF',
      'Integrasi Payment Gateway QRIS & VA Bank Otomatis',
      'Cloud Server Stabil dengan Backup Rutin',
    ],
    deliverables: ['Web + APK Mobile', 'Full Source Code', 'Setup Cloud VPS', 'Training Pemakaian'],
  },
  {
    id: 'web-to-apk',
    category: 'android',
    title: 'Konversi Web Jadi Aplikasi Android APK',
    badge: 'PROSES 1-3 HARI',
    priceStart: 'Mulai Rp 650.000',
    description: 'Kemasan website yang sudah ada jadi file APK Android berlogo resmi, siap pasang di HP.',
    popularFor: 'Toko Online WooCommerce/Shopify, Web Berita, Portal Komunitas',
    icon: RefreshCw,
    techTags: ['Fast Web2APK', 'Push Notification', 'Offline Handler', 'Icon HD'],
    features: [
      'Splash Screen Logo Elegan & Navigasi Bawah Modern',
      'Pull to Refresh & Indikator Cerdas saat Offline',
      'Direct Install tanpa wajib masuk Play Store',
      'Ukuran APK Sangat Ringan (hanya 4 - 8 MB)',
    ],
    deliverables: ['File APK Siap Pakai', 'Icon Aplikasi HD', 'Panduan Instalasi', 'Bantuan Update Link'],
  },
];

export const ServicesSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'android' | 'combo'>('all');

  const filteredServices = filter === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter((s) => s.category === filter);

  const openWhatsAppService = (serviceName: string) => {
    soundFx.playClick(900, 0.04);
    const msg = encodeURIComponent(`Halo DiDev, saya berminat dengan layanan "${serviceName}". Boleh minta rincian penawaran dan waktu pengerjaannya?`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative overflow-hidden">
      {/* Background Subtle Tech Highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>KATALOG LAYANAN RESMI</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              PILIHAN LAYANAN SOFTWARE HOUSE
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
              Kode bersih, cepat, bebas bug, dan 100% hak milik Anda. Pilih paket sesuai kebutuhan bisnis:
            </p>
          </div>

          {/* Filter Tabs (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 overflow-x-auto max-w-full">
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('web'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'web' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Website
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('android'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'android' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Android APK
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('combo'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'combo' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Paket Komplit
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

                <div className="p-6 sm:p-8">
                  {/* Top Row: Icon + Badge + Price */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-bold">
                          {service.badge}
                        </span>
                        <div className="text-base sm:text-lg font-mono font-black text-blue-700 mt-0.5">
                          {service.priceStart}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.techTags.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Cocok Untuk Pill Box */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-sans text-slate-700 mb-5">
                    <span className="font-bold text-blue-700">Cocok Untuk: </span>
                    {service.popularFor}
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                      FITUR UNGGULAN:
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Deliverables & WhatsApp Button */}
                <div className="p-6 sm:p-8 pt-4 border-t border-slate-100 bg-slate-50/60 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-500 font-semibold mr-1">Output:</span>
                    {service.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] font-mono text-slate-800"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openWhatsAppService(service.title)}
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <span>KONSULTASI VIA WHATSAPP</span>
                    <ArrowRight className="w-4 h-4" />
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
