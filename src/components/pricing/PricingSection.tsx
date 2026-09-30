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
    name: 'Website Bisnis',
    badge: 'STARTER UMKM',
    price: 'Rp 1.500.000',
    priceNote: 'Sekali bayar, tanpa sewa bulanan',
    description: 'Solusi profil usaha & landing page cepat, SEO ready, dan langsung terima order WA.',
    timeline: '5 - 7 Hari Kerja',
    features: [
      'Website Responsif Mobile & Laptop',
      'Gratis Domain .COM & SSL 1 Tahun',
      'Dashboard Admin Kelola Konten',
      'Tombol WhatsApp Order ke CS',
      '100% Hak Milik Source Code',
      'Garansi Bebas Bug 1 Tahun',
    ],
    ctaText: 'PILIH WEBSITE',
  },
  {
    id: 'plan-apk',
    name: 'Aplikasi Android APK',
    badge: 'STANDALONE APP',
    price: 'Rp 2.500.000',
    priceNote: 'Sekali bayar, full source code',
    description: 'Aplikasi Android untuk kasir POS, absensi internal, kurir, atau alat staf lapangan.',
    timeline: '10 - 14 Hari Kerja',
    features: [
      'Master File APK Release Siap Pasang',
      'Dukungan Cetak Struk Bluetooth',
      'Scan Barcode / QR Kamera HP',
      'Bisa Diinstal di Semua HP Android',
      'Bantuan Upload Google Play Store',
      'Garansi Bebas Bug 1 Tahun',
    ],
    ctaText: 'PILIH PAKET APK',
  },
  {
    id: 'plan-combo',
    name: 'Paket Komplit (Web + APK)',
    badge: 'PALING LARIS & LENGKAP',
    price: 'Rp 4.500.000',
    priceNote: 'Ekosistem bisnis paling terpadu',
    description: 'Pantau omset di laptop, staf eksekusi di HP. Data tersinkron otomatis secara real-time.',
    isPopular: true,
    timeline: '14 - 21 Hari Kerja',
    features: [
      'Web Admin Dashboard di Laptop',
      'Aplikasi Android (.apk) Siap Pasang di HP',
      'Sinkronisasi Data Real-time Otomatis',
      'Multi-Role (Owner, Admin, Kasir, Kurir)',
      'Laporan Omset Export Excel / PDF',
      'Gratis Domain .COM & Server 1 Tahun',
      'Garansi Prioritas & Free Maintenance',
    ],
    ctaText: 'PILIH PAKET KOMPLIT',
  },
  {
    id: 'plan-enterprise',
    name: 'Custom Enterprise',
    badge: 'SKALA BESAR',
    price: 'Mulai Rp 7.500.000',
    priceNote: 'Sesuai alur bisnis & SOP Anda',
    description: 'Sistem kustom advance: ERP multi-cabang, e-learning massal, atau sistem lelang terpadu.',
    timeline: '21 - 35 Hari Kerja',
    features: [
      'Full Custom Arsitektur Sesuai SOP',
      'Integrasi Payment Gateway QRIS & VA',
      'WhatsApp Gateway Kirim Notifikasi',
      'Server VPS Tangguh Bebas Down',
      'Source Code Git Repo & Dokumen API',
      'Perjanjian Kerahasiaan (NDA) Resmi',
    ],
    ctaText: 'KONSULTASI KHUSUS',
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
    <section id="pricing" className="py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-200 rounded-full text-xs font-mono font-bold text-blue-700 shadow-2xs mb-3">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>HARGA TRANSPARAN TANPA BIAYA TERSEMBUNYI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            PAKET INVESTASI SISTEM BISNIS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans">
            Sekali bayar, 100% hak milik source code tanpa biaya langganan bulanan. Termasuk garansi perbaikan bug 1 tahun:
          </p>
        </div>

        {/* Pricing Cards Grid (Responsive 1 -> 2 -> 4 cols) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                plan.isPopular
                  ? 'bg-white border-2 border-blue-600 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.22)] lg:-translate-y-2 z-10'
                  : 'bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-lg'
              }`}
            >
              {/* Top Accent Gradient Line */}
              <div className={`h-1.5 w-full ${
                plan.isPopular 
                  ? 'bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600' 
                  : 'bg-slate-200'
              }`} />

              <div className="p-6 sm:p-7">
                {/* Popular Pill */}
                <div className="flex items-center justify-between mb-3.5">
                  <span
                    className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                      plan.isPopular
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {plan.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 font-medium">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>{plan.timeline}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-sans text-slate-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 font-sans leading-relaxed mb-4">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-5">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-blue-700">
                    {plan.price}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    {plan.priceNote}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide font-bold">
                    TERMASUK LAYANAN:
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
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 ${
                    plan.isPopular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25'
                      : 'bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
