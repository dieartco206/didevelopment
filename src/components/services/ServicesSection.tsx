import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  Layers, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Printer,
  Database
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
  mockupType: 'web' | 'apk' | 'combo' | 'convert';
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
    mockupType: 'web',
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
    mockupType: 'apk',
  },
  {
    id: 'combo-ecosystem',
    category: 'combo',
    title: 'Paket Komplit (Web Dashboard + Android APK)',
    badge: 'PALING LARIS & LENGKAP',
    priceStart: 'Mulai Rp 4.500.000',
    description: 'Pantau omset di laptop, staf transaksi di HP. Data tersinkron otomatis secara real-time.',
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
    mockupType: 'combo',
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
    mockupType: 'convert',
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
    <section id="services" className="py-16 sm:py-20 bg-mesh-services border-b border-blue-200/60 relative overflow-hidden">
      {/* Background Subtle Tech Highlights */}
      <div className="absolute top-1/4 -right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>KATALOG LAYANAN RESMI</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
              SOLUSI APLIKASI UNTUK PERTUMBUHAN BISNIS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-sans font-medium">
              Bebas biaya bulanan tersembunyi. Setiap solusi dilengkapi source code 100% hak milik dan garansi resmi:
            </p>
          </div>

          {/* Filter Tabs (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white/90 shadow-xs rounded-2xl border border-blue-200 overflow-x-auto max-w-full">
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Semua Layanan
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

        {/* Services Grid with Visual Interactive Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-white border-2 border-blue-200/80 shadow-md hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Header */}
                <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

                <div className="p-6 sm:p-8">
                  {/* Top Row: Icon + Badge + Price */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-mono font-bold">
                          {service.badge}
                        </span>
                        <div className="text-base sm:text-lg font-mono font-black text-blue-900 mt-0.5">
                          {service.priceStart}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-700 font-sans leading-relaxed mb-4 font-medium">
                    {service.description}
                  </p>

                  {/* Dedicated Visual UI Mockup Box (Eliminating Blank Space!) */}
                  {service.mockupType === 'web' && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-inner border border-blue-800/60 font-mono text-xs">
                      <div className="flex items-center justify-between pb-2 border-b border-blue-800/80 mb-2.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-[10px] text-blue-300">🔒 https://toko-anda.com</span>
                        <span className="text-[9px] px-1.5 py-0.5 bg-blue-600 rounded text-white font-bold">0.4s SPEED</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded bg-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Order Masuk:</span>
                          <span className="font-bold text-sky-400">128 Transaksi</span>
                        </div>
                        <div className="p-2 rounded bg-white/10 flex items-center justify-between">
                          <span className="text-slate-300">Payment:</span>
                          <span className="font-bold text-emerald-400">QRIS Aktif</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {service.mockupType === 'apk' && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-blue-950 to-slate-900 text-white shadow-inner border border-blue-800/60 font-mono text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-sky-400 font-bold">
                          <Printer className="w-4 h-4" />
                          <span>BLUETOOTH PRINTER 58MM</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          CONNECTED
                        </span>
                      </div>
                      <div className="p-2 rounded bg-white/10 flex items-center justify-between text-[11px]">
                        <span className="text-slate-300">Cetak Nota Kasir:</span>
                        <span className="font-bold text-sky-300">Auto Print Thermal Struk</span>
                      </div>
                    </div>
                  )}

                  {service.mockupType === 'combo' && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white shadow-inner border border-blue-700/60 font-mono text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-sky-300 font-bold">
                          <Database className="w-4 h-4" />
                          <span>DUAL-SYNC CLOUD ECOSYSTEM</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/30 text-blue-200 border border-blue-400/40 animate-pulse">
                          REAL-TIME
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] p-2 rounded bg-white/10">
                        <span>Laptop Web Admin</span>
                        <span className="text-sky-400 font-bold">⇄ Auto Sync ⇄</span>
                        <span>Smartphone APK</span>
                      </div>
                    </div>
                  )}

                  {service.mockupType === 'convert' && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-blue-950 text-white shadow-inner border border-blue-800/60 font-mono text-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sky-300 font-bold">FAST WEB-TO-APK PACKAGING</span>
                        <span className="text-[10px] text-slate-400">Ukuran: ~5.4 MB</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] p-2 rounded bg-white/10">
                        <span className="truncate">URL Web Bisnis</span>
                        <span className="text-sky-400 font-bold">➔</span>
                        <span className="font-bold text-emerald-400">app-release.apk</span>
                      </div>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.techTags.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-[11px] font-mono text-blue-800 font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Cocok Untuk Pill Box */}
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-xs font-sans text-slate-800 mb-5">
                    <strong className="text-blue-900">Cocok Untuk: </strong>
                    {service.popularFor}
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-bold">
                      FITUR UNGGULAN:
                    </div>
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-sans font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Deliverables & WhatsApp Button */}
                <div className="p-6 sm:p-8 pt-4 border-t border-blue-100 bg-blue-50/50 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-blue-950 font-bold mr-1">Output:</span>
                    {service.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-white border border-blue-200 text-[10px] font-mono text-blue-900 font-bold shadow-2xs"
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => openWhatsAppService(service.title)}
                    className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
                  >
                    <span>KONSULTASI JASA INI (WA)</span>
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
