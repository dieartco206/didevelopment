import React from 'react';
import type { PricingPlan } from '../../types';
import { 
  Check, 
  ArrowRight, 
  Clock 
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-web',
    name: 'Website Bisnis & Toko Online',
    badge: 'STARTER UMKM',
    price: 'Rp 1.500.000',
    priceNote: 'Investasi sekali, tanpa biaya bulanan',
    description: 'Solusi profil perusahaan & landing page cepat, SEO ready, dan langsung terima order pelanggan.',
    timeline: '5 - 7 Hari Kerja',
    features: [
      'Desain responsif optimal di mobile & desktop',
      'Gratis domain .COM & sertifikat SSL 1 tahun',
      'Dashboard admin untuk kelola konten & data',
      'Integrasi tombol pemesanan langsung WhatsApp',
      '100% Hak milik penuh source code',
      'Garansi resmi bebas bug 1 tahun',
    ],
    ctaText: 'Pilih Paket Website',
  },
  {
    id: 'plan-apk',
    name: 'Aplikasi Android APK',
    badge: 'MOBILE STANDALONE',
    price: 'Rp 2.500.000',
    priceNote: 'Investasi sekali, full source code',
    description: 'Aplikasi Android untuk kasir POS, absensi tim, kurir pengiriman, atau operasional lapangan.',
    timeline: '10 - 14 Hari Kerja',
    features: [
      'Master installer APK release siap pasang di HP',
      'Dukungan cetak struk thermal printer Bluetooth',
      'Integrasi scan barcode & swafoto kamera HP',
      'Bisa dipasang langsung di semua tipe Android',
      'Bantuan publikasi ke Google Play Store resmi',
      'Garansi resmi bebas bug 1 tahun',
    ],
    ctaText: 'Pilih Paket Android',
  },
  {
    id: 'plan-combo',
    name: 'Paket Komplit (Web + APK)',
    badge: 'PALING DIREKOMENDASIKAN',
    price: 'Rp 4.500.000',
    priceNote: 'Ekosistem operasional terpadu',
    description: 'Pantau transaksi di laptop, staf eksekusi di HP Android dengan sinkronisasi data real-time.',
    isPopular: true,
    timeline: '14 - 21 Hari Kerja',
    features: [
      'Website admin dashboard lengkap di laptop',
      'Aplikasi Android (.apk) siap pasang di HP',
      'Sinkronisasi data otomatis secara real-time',
      'Multi-role (Owner, Admin, Kasir, Kurir)',
      'Laporan omset & laba export Excel / PDF',
      'Gratis domain .COM & setup server 1 tahun',
      'Garansi prioritas & pendampingan 1 tahun',
    ],
    ctaText: 'Pilih Paket Komplit',
  },
  {
    id: 'plan-enterprise',
    name: 'Sistem Custom Enterprise',
    badge: 'SKALA BESAR',
    price: 'Mulai Rp 7.500.000',
    priceNote: 'Sesuai alur bisnis & SOP perusahaan',
    description: 'Pengembangan sistem terpadu: ERP multi-cabang, e-learning massal, atau sistem logistik terintegrasi.',
    timeline: '21 - 35 Hari Kerja',
    features: [
      'Arsitektur kustom 100% mengikuti SOP Anda',
      'Integrasi payment gateway QRIS & Virtual Account',
      'WhatsApp Gateway pengiriman notifikasi otomatis',
      'Infrastruktur cloud VPS performa tinggi',
      'Dokumentasi API lengkap & repository Git',
      'Perjanjian Kerahasiaan (NDA) resmi',
    ],
    ctaText: 'Konsultasi Enterprise',
  },
];

export const PricingSection: React.FC = () => {
  const handleSelectPlan = (plan: PricingPlan) => {
    soundFx.playSuccess();
    const text = encodeURIComponent(
      `Halo DiDev, saya tertarik memesan "${plan.name}" (${plan.price}). Mohon informasi jadwal pengerjaan dan proses selanjutnya.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-14 sm:py-20 bg-[#F4F8FE] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block text-xs font-bold text-[#256BE0] uppercase tracking-wider mb-2">
            PAKET INVESTASI SISTEM
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102E61] tracking-tight font-sans">
            Harga Transparan Tanpa Biaya Tersembunyi
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#48505E] font-normal">
            Investasi sekali di awal, 100% hak milik source code tanpa biaya sewa bulanan. Garansi resmi 1 tahun:
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-2xl bg-white p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'border-2 border-[#256BE0] shadow-md lg:-translate-y-2'
                    : 'border border-slate-200 shadow-2xs hover:border-[#256BE0] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Badge & Timeline */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isFeatured ? 'bg-blue-100 text-[#256BE0]' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {plan.badge}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#256BE0]" />
                      <span>{plan.timeline}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#102E61] mb-1.5 leading-snug">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#48505E] leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  {/* Price Box */}
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 mb-5">
                    <div className="text-2xl font-extrabold text-[#102E61]">
                      {plan.price}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {plan.priceNote}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                      TERMASUK FASILITAS:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#2B2F38] font-normal leading-normal">
                        <Check className="w-4 h-4 text-[#256BE0] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    isFeatured
                      ? 'bg-[#256BE0] hover:bg-[#1D58BD] text-white shadow-sm'
                      : 'bg-blue-50/80 hover:bg-[#256BE0] text-[#256BE0] hover:text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
