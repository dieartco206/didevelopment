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
    priceNote: 'Investasi ekosistem terpadu',
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
    <section id="pricing" className="py-12 sm:py-20 bg-mesh-pricing border-b border-blue-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-blue-200 rounded-full text-xs font-mono font-bold text-blue-700 shadow-2xs mb-2">
            <Tag className="w-3.5 h-3.5 text-blue-600" />
            <span>HARGA TRANSPARAN & BEBAS BIAYA BULANAN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            PAKET INVESTASI SISTEM
          </h2>
          <p className="mt-1.5 text-xs sm:text-base text-slate-600 font-sans font-medium">
            Sekali bayar, 100% hak milik source code tanpa sewa bulanan. Garansi resmi 1 tahun:
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isPopular;

            if (isFeatured) {
              return (
                <div
                  key={plan.id}
                  className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white p-5 sm:p-7 flex flex-col justify-between relative shadow-xl shadow-blue-900/35 border-2 border-sky-400 lg:-translate-y-3 z-10 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-sky-400/25 rounded-full blur-2xl pointer-events-none" />

                  <div>
                    {/* Popular Pill */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full font-black bg-gradient-to-r from-sky-400 to-blue-400 text-slate-950 shadow-xs">
                        ★ {plan.badge}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-mono text-sky-200 font-bold">
                        <Clock className="w-3 h-3 text-sky-300" />
                        <span>{plan.timeline}</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-blue-100 font-sans leading-relaxed mb-3.5">
                      {plan.description}
                    </p>

                    {/* Price Display */}
                    <div className="p-3.5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-4 shadow-inner">
                      <div className="text-2xl sm:text-3xl font-black font-mono text-white">
                        {plan.price}
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-sky-200 mt-0.5">
                        {plan.priceNote}
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-5">
                      <div className="text-[10px] font-mono text-sky-300 uppercase tracking-wide font-black">
                        PAKET LENGKAP TERMASUK:
                      </div>
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs font-sans text-white font-medium">
                          <Check className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className="w-full py-3.5 rounded-xl font-mono text-xs font-black flex items-center justify-center gap-2 bg-gradient-to-r from-sky-400 to-blue-400 hover:from-sky-300 hover:to-blue-300 text-slate-950 shadow-lg shadow-sky-400/25 cursor-pointer active:scale-95 transition-all"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            }

            return (
              <div
                key={plan.id}
                className="rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200/80 p-5 sm:p-7 flex flex-col justify-between shadow-sm hover:border-blue-500 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div className="h-1.5 w-full bg-slate-200 absolute top-0 left-0 right-0" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full font-bold bg-blue-50 text-blue-800 border border-blue-200">
                      {plan.badge}
                    </span>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 font-semibold">
                      <Clock className="w-3 h-3 text-blue-600" />
                      <span>{plan.timeline}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-sans text-slate-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-3.5">
                    {plan.description}
                  </p>

                  <div className="p-3.5 rounded-xl sm:rounded-2xl bg-blue-50/70 border border-blue-200 mb-4">
                    <div className="text-2xl sm:text-3xl font-black font-mono text-blue-900">
                      {plan.price}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-600 mt-0.5 font-medium">
                      {plan.priceNote}
                    </div>
                  </div>

                  <div className="space-y-2 mb-5">
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wide font-bold">
                      TERMASUK LAYANAN:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-800 font-medium">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleSelectPlan(plan)}
                  className="w-full py-3.5 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-blue-600 transition-all cursor-pointer active:scale-95"
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
