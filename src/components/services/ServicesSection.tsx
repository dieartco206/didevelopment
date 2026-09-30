import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight
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
  features: string[];
  deliverables: string[];
}

const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'web-dev',
    category: 'web',
    title: 'Jasa Pembuatan Website Modern & Toko Online',
    badge: 'PALING DIMINATI UMKM',
    priceStart: 'Mulai Rp 1.500.000',
    description: 'Pembuatan website profesional berkecepatan tinggi, SEO friendly, dan desain kustom eksklusif yang dirancang meningkatkan konversi penjualan.',
    popularFor: 'Company Profile Perusahaan, Toko Online (E-Commerce), Landing Page Iklan, Portal Informasi.',
    features: [
      'Desain Responsif 100% (Sempurna di HP, Tablet, Laptop)',
      'Kecepatan Loading Tinggi (Google PageSpeed 90+ Score)',
      'Sudah Termasuk Domain .COM / .ID & SSL Security Gratis',
      'Dashboard Admin Mudah untuk Tambah/Ubah Produk dan Artikel',
      'Optimasi SEO Dasar agar Cepat Muncul di Google Search',
      'Integrasi Tombol WhatsApp Langsung Terhubung ke CS',
    ],
    deliverables: ['Source Code Lengkap', 'Domain & Hosting 1 Tahun', 'Buku Panduan Admin', 'Garansi Teknis 1 Tahun'],
  },
  {
    id: 'android-apk',
    category: 'android',
    title: 'Jasa Pembuatan Aplikasi Android (APK & Play Store)',
    badge: 'NATIVE & HYBRID CEPAT',
    priceStart: 'Mulai Rp 2.500.000',
    description: 'Aplikasi Android native/hybrid berkinerja tinggi, ringan dibuka, dan memiliki fitur hardware seperti cetak printer Bluetooth, kamera, barcode scanner, dan GPS tracking.',
    popularFor: 'Aplikasi Kasir POS, Absensi Karyawan GPS, Aplikasi Kurir/Delivery, Sistem Gudang & Barcode.',
    features: [
      'File Master APK (.apk) siap dibagikan dan diinstal langsung',
      'Bantuan Upload & Rilis ke Akun Google Play Store',
      'Dukungan Bluetooth Thermal Printer untuk Cetak Struk',
      'Dukungan Kamera untuk Scan Barcode/QR Code & Foto Selfie',
      'Push Notification Real-time ke Smartphone Pengguna',
      'Kompatibel Penuh dari Android 8 hingga Android 15 Terbaru',
    ],
    deliverables: ['File APK Release Siap Pasang', 'Source Code Project', 'Keystore Sertifikat Digital', 'Garansi Bug 1 Tahun'],
  },
  {
    id: 'combo-ecosystem',
    category: 'combo',
    title: 'Paket Terpadu (Web Admin Dashboard + Android APK)',
    badge: 'SOLUSI BISNIS LENGKAP',
    priceStart: 'Mulai Rp 4.500.000',
    description: 'Ekosistem software lengkap untuk bisnis: Kelola operasional, laporan keuangan, dan stok barang lewat Web Laptop, sementara tim lapangan / pelanggan memakai Aplikasi Android.',
    popularFor: 'Bisnis Franchise / Multi-Cabang, E-Learning Sekolah, Jasa Ekspedisi, Sistem Absensi Perusahaan.',
    features: [
      'Sinkronisasi Data Real-time antara Web Admin dan Aplikasi HP',
      'Hak Akses Berjenjang (Owner, Admin, Kasir, Karyawan, Klien)',
      'Laporan Keuangan & Grafik Penjualan Export Excel & PDF',
      'Backup Database Otomatis Harian ke Cloud Server',
      'Integrasi Payment Gateway Otomatis (QRIS, VA Bank, E-Wallet)',
      'Server Handal dengan Dukungan Konfigurasi Nginx / VPS Cepat',
    ],
    deliverables: ['Web Dashboard + Mobile APK', 'Full Source Code', 'Setup Server Cloud', 'Pelatihan Penggunaan Sistem'],
  },
  {
    id: 'web-to-apk',
    category: 'android',
    title: 'Jasa Konversi Website ke Aplikasi Android APK',
    badge: 'PROSES CEPAT 1-3 HARI',
    priceStart: 'Mulai Rp 650.000',
    description: 'Punya website toko online atau web portal yang ingin dijadikan aplikasi Android? Kami kemas menjadi APK profesional dengan splash screen, offline notification, dan icon resmi.',
    popularFor: 'Toko Online WooCommerce/Shopify, Portal Berita, Web Komunitas, Web Sistem Internal.',
    features: [
      'Splash Screen Pembuka Aplikasi Elegan dengan Logo Bisnis',
      'Pull to Refresh & Indikator Offline Cerdas saat Hilang Sinyal',
      'Bisa Diinstal Langsung lewat File APK tanpa Harus Masuk Play Store',
      'Navigasi Bawah (Bottom Bar) Kustom agar Terasa seperti Aplikasi Asli',
      'Izin Akses Kamera & Notifikasi Browser Otomatis Aktif',
      'Ukuran File Sangat Ringan (Biasanya hanya 4 - 8 MB)',
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
    <section id="services" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>LAYANAN PROFESIONAL SOFTWARE HOUSE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              SOLUSI WEBSITE & APK ANDROID UNTUK BISNIS ANDA
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl font-sans">
              Setiap baris kode kami tulis dengan teliti, cepat, bebas bug, dan disesuaikan 100% dengan alur bisnis Anda. 
              Pilih layanan yang Anda butuhkan di bawah ini:
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('all'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                filter === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Semua Layanan
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('web'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                filter === 'web' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Website
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('android'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                filter === 'android' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Android APK
            </button>
            <button
              onClick={() => { soundFx.playClick(650, 0.03); setFilter('combo'); }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                filter === 'combo' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Paket Komplit
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Card Top */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-mono font-bold">
                    {service.badge}
                  </span>
                  <span className="text-sm font-mono font-extrabold text-blue-600">
                    {service.priceStart}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-sans text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Popular For */}
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-sans text-slate-700 mb-5">
                  <span className="font-bold text-blue-700">Cocok Untuk: </span>
                  {service.popularFor}
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
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

              {/* Card Footer Deliverables & CTA */}
              <div className="pt-5 border-t border-slate-200">
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  <span className="text-[11px] font-mono text-slate-500 mr-1">Output:</span>
                  {service.deliverables.map((deliv, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[11px] font-mono text-slate-800"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => openWhatsAppService(service.title)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
                >
                  <span>KONSULTASI JASA INI VIA WHATSAPP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
