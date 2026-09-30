import React from 'react';
import type { PricingPlan } from '../../types';
import { 
  Check, 
  ArrowRight, 
  Tag, 
  Clock
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-web',
    name: 'Paket Website Bisnis',
    badge: 'STARTER UMKM',
    price: 'Rp 1.500.000',
    priceNote: 'Sekali bayar, tanpa biaya bulanan',
    description: 'Solusi tepat untuk profil usaha, personal branding, atau landing page promosi produk dengan kecepatan loading instan.',
    timeline: '5 - 7 Hari Kerja',
    features: [
      'Website Multi-Halaman / Landing Page Konversi',
      'Gratis Domain .COM / .ID & SSL 1 Tahun',
      'Desain Responsif 100% Mobile & Desktop',
      'Dashboard Admin Kelola Konten & Foto Produk',
      'Integrasi Tombol WhatsApp Langsung ke CS',
      'Full Source Code & Akses CPanel / Server',
      'Garansi Perbaikan Bug 1 Tahun',
    ],
    ctaText: 'PILIH PAKET WEBSITE',
  },
  {
    id: 'plan-apk',
    name: 'Paket Android APK',
    badge: 'STANDALONE APP',
    price: 'Rp 2.500.000',
    priceNote: 'Sekali bayar, full source code',
    description: 'Aplikasi Android native/hybrid fungsional untuk kasir toko, absensi internal, kurir, atau alat bantu kerja staf lapangan.',
    timeline: '10 - 14 Hari Kerja',
    features: [
      'Master File APK Release (.apk) Siap Pasang',
      'Dukungan Cetak Struk Printer Bluetooth',
      'Dukungan Kamera Barcode / QR Scanner',
      'Database Penyimpanan Offline di Smartphone',
      'Bisa Diinstal di Semua HP Android (OS 8 - 15)',
      'Bantuan Upload ke Google Play Console',
      'Garansi Perbaikan Bug 1 Tahun',
    ],
    ctaText: 'PILIH PAKET APK',
  },
  {
    id: 'plan-combo',
    name: 'Paket Komplit (Web + APK)',
    badge: 'PALING LARIS & REKOMENDASI',
    price: 'Rp 4.500.000',
    priceNote: 'Investasi terbaik ekosistem bisnis',
    description: 'Sistem terpadu: Pantau omset dan kelola data di Web Admin laptop, eksekusi transaksi di HP Android kasir/lapangan secara real-time.',
    isPopular: true,
    timeline: '14 - 21 Hari Kerja',
    features: [
      'Website Admin Dashboard Monitoring di Laptop',
      'Aplikasi Android (.apk) Siap Pasang di HP Klien',
      'Sinkronisasi Data Real-time (Web & Mobile HP)',
      'Multi-Role Hak Akses (Superadmin, Kasir, Kurir)',
      'Laporan Keuangan & Penjualan Export Excel/PDF',
      'Gratis Domain .COM & Setup Cloud Server 1 Tahun',
      'Pelatihan Pemakaian Sistem sampai Bisa',
      'Garansi Prioritas & Free Maintenance 1 Tahun',
    ],
    ctaText: 'PILIH PAKET KOMPLIT',
  },
  {
    id: 'plan-enterprise',
    name: 'Paket Custom Enterprise',
    badge: 'KUSTOM SKALA BESAR',
    price: 'Mulai Rp 7.500.000',
    priceNote: 'Disesuaikan dengan flow bisnis Anda',
    description: 'Pengembangan sistem software khusus tingkat lanjut seperti ERP multi-cabang, marketplace, atau sistem lelang dengan arsitektur tangguh.',
    timeline: '21 - 35 Hari Kerja',
    features: [
      'Full Custom Arsitektur Sesuai SOP Bisnis',
      'Integrasi Payment Gateway Otomatis (QRIS & VA)',
      'WhatsApp Gateway Pengirim Notifikasi Otomatis',
      'Optimasi Server VPS Tinggi Bebas Down',
      'Audit Keamanan Data OWASP & Anti-Tampering',
      'Source Code Git Repository & Dokumentasi API',
      'Perjanjian Kerahasiaan (NDA) & Garansi Eksklusif',
    ],
    ctaText: 'KONSULTASI ENTERPRISE',
  },
];

export const PricingSection: React.FC = () => {
  const handleSelectPlan = (plan: PricingPlan) => {
    soundFx.playSuccess();
    const text = encodeURIComponent(
      `Halo DiDev, saya ingin pesan "${plan.name}" (${plan.price}). Mohon informasi jadwal pengerjaan dan proses pembayarannya.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono text-blue-700 shadow-2xs mb-3">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>HARGA TRANSPARAN & BEBAS BIAYA TERSEMBUNYI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            PILIHAN PAKET INVESTASI SISTEM BISNIS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans">
            Sistem berkualitas tinggi dengan harga rasional untuk kemajuan bisnis Anda. 
            Semua paket sudah termasuk garansi perbaikan bug dan penyerahan source code 100% hak milik.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 rounded-3xl flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-102 z-10'
                  : 'bg-white border border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <div>
                {/* Popular Pill */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      plan.isPopular
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {plan.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>{plan.timeline}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-sans text-slate-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed mb-4">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 mb-5">
                  <div className="text-2xl font-extrabold font-mono text-blue-700">
                    {plan.price}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    {plan.priceNote}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide font-semibold">
                    YANG ANDA DAPATKAN:
                  </div>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectPlan(plan)}
                className={`w-full py-3 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  plan.isPopular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 active:scale-98'
                    : 'bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
