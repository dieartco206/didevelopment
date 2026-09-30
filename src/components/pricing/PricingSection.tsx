import React from 'react';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  Sparkles
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface PricingTier {
  id: string;
  name: string;
  badge: string;
  isPopular?: boolean;
  price: string;
  priceLabel: string;
  monthlyMaintenance: string;
  priceNote: string;
  targetAudience: string;
  timeline: string;
  features: string[];
  deliverables: string;
  ctaText: string;
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Paket Starter: Toko & Kasir POS',
    badge: 'STARTER UMKM',
    price: 'Rp 1.500.000',
    priceLabel: 'Biaya Setup Pembuatan Awal',
    monthlyMaintenance: 'Rp 500.000 / bln',
    priceNote: 'Sudah termasuk Cloud Server & Maintenance Rutin',
    targetAudience: 'Cocok untuk toko retail, coffee shop, butik, atau UMKM yang ingin pencatatan rapi.',
    timeline: '5 - 7 Hari Kerja',
    features: [
      'Pilih Web Dashboard atau Aplikasi Android APK',
      'Dukungan cetak struk printer Bluetooth thermal',
      'Pencatatan kasir, riwayat pesanan & stok barang',
      'Cloud Server VPS terkelola & domain resmi aktif',
      'Backup database transaksi berkala otomatis',
      'Pemeliharaan bug & update keamanan bulanan',
      'Bantuan teknis via WhatsApp fast-response',
    ],
    deliverables: 'Setup Sistem Siap Pakai • Cloud Server & Maintenance Aktif',
    ctaText: 'Pilih Paket Starter',
  },
  {
    id: 'business',
    name: 'Paket Bisnis: Mobile APK + Web Cloud',
    badge: 'PALING BANYAK DIPILIH',
    isPopular: true,
    price: 'Rp 4.500.000',
    priceLabel: 'Biaya Setup Pembuatan Awal',
    monthlyMaintenance: 'Rp 1.000.000 / bln',
    priceNote: 'High-Speed Cloud VPS, Multi-Cabang & Monitoring 24/7',
    targetAudience: 'Paling ideal untuk bisnis berkembang, multi-cabang, absensi staf, dan armada lapangan.',
    timeline: '14 - 21 Hari Kerja',
    features: [
      'Website Admin Dashboard untuk Owner di Laptop',
      'Aplikasi Android (.apk) untuk Staf Lapangan & Kasir',
      'Sinkronisasi data transaksi otomatis secara real-time',
      'Multi-Role (Owner, Admin, Kasir, Kurir, Staf)',
      'Fitur GPS Geofencing, swafoto & scan barcode kamera',
      'Integrasi payment gateway QRIS & Virtual Account bank',
      'Cloud Server VPS kapasitas tinggi & monitoring 24/7',
      'Backup otomatis berkala & penanganan bug kilat',
      'Bantuan publikasi ke Google Play Store resmi',
    ],
    deliverables: 'Web Admin + Master APK • Cloud VPS Dedicated • Maintenance Rutin',
    ctaText: 'Pilih Paket Bisnis Terpadu',
  },
  {
    id: 'enterprise',
    name: 'Paket Custom Enterprise: Sistem & ERP',
    badge: 'KUSTOM 100% SOP',
    price: 'Mulai Rp 7.500.000',
    priceLabel: 'Biaya Rekayasa Sistem Awal',
    monthlyMaintenance: 'Mulai Rp 2.000.000 / bln',
    priceNote: 'Dedicated VPS Cloud Instance • SLA Prioritas Tinggi',
    targetAudience: 'Untuk perusahaan, pabrik manufaktur, yayasan sekolah, atau sistem dengan alur unik.',
    timeline: '21 - 35 Hari Kerja',
    features: [
      'Rekayasa arsitektur 100% custom sesuai SOP perusahaan',
      'WhatsApp Gateway Bot notifikasi invoice, resi & OTP',
      'Modernisasi sistem lama & migrasi database terenkripsi',
      'Dedicated Cloud VPS berkapasitas ribuan pengguna aktif',
      'Jaminan SLA uptime 99.9% & monitoring log server',
      'Backup snapshot otomatis harian & pemulihan darurat',
      'Sesi pelatihan berkala & pendampingan teknis prioritas',
      'Penandatanganan Perjanjian Kerahasiaan (NDA) resmi',
    ],
    deliverables: 'Custom Architecture • Dedicated Enterprise Cloud • SLA Maintenance',
    ctaText: 'Konsultasi Kebutuhan Enterprise',
  },
];

export const PricingSection: React.FC = () => {
  const handleSelectPlan = (plan: PricingTier) => {
    soundFx.playSuccess();
    const text = encodeURIComponent(
      `Halo DiDev Studio, saya tertarik memesan "${plan.name}" (Setup ${plan.price} + Server & Maintenance ${plan.monthlyMaintenance}). Mohon informasi jadwal ketersediaan pengerjaan dan detail layanannya.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  const renderPrice = (priceStr: string) => {
    const isStartingFrom = priceStr.startsWith('Mulai ');
    const cleanPrice = isStartingFrom ? priceStr.replace('Mulai ', '') : priceStr;

    return (
      <div className="flex items-baseline gap-1.5 flex-wrap">
        {isStartingFrom && (
          <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wide shrink-0">
            Mulai
          </span>
        )}
        <span className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-sans">
          {cleanPrice}
        </span>
      </div>
    );
  };

  const renderMaintenance = (maintStr: string) => {
    const isStarting = maintStr.startsWith('Mulai ');
    const clean = isStarting ? maintStr.replace('Mulai ', '') : maintStr;
    const parts = clean.split(' / ');
    const amount = parts[0];
    const period = parts[1];

    return (
      <div className="flex items-baseline gap-1 flex-wrap">
        {isStarting && (
          <span className="text-xs font-bold text-slate-500 uppercase shrink-0">Mulai</span>
        )}
        <span className="text-lg sm:text-xl font-extrabold text-[#2563EB] tracking-tight font-sans">
          {amount}
        </span>
        {period && (
          <span className="text-xs text-slate-500 font-semibold shrink-0">
            / {period}
          </span>
        )}
      </div>
    );
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Dot Grid Texture on White */}
      <div className="absolute inset-0 artistic-dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Technical Coordinates */}
      <div className="absolute top-8 left-8 hidden xl:flex items-center gap-2 text-[10px] font-mono text-slate-400/60 pointer-events-none">
        <span className="text-[#2563EB] font-bold">TIER.SPEC</span>
        <span>// FULLY_MANAGED_INFRASTRUCTURE</span>
      </div>
      <div className="absolute top-8 right-8 hidden xl:flex items-center gap-2 text-[10px] font-mono text-slate-400/60 pointer-events-none">
        <span>SLA: 99.9% UPTIME</span>
        <span className="text-[#10B981] font-bold">● ACTIVE</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Bold Value Proposition */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap shrink-0">
            <span className="whitespace-nowrap">PAKET INVESTASI RESMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Pilihan Paket Transparan Tanpa Biaya Tersembunyi
          </h2>
          
          {/* Key Value Guarantee Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-[#0F172A] font-mono text-xs sm:text-sm font-bold border border-slate-200 whitespace-nowrap shrink-0 overflow-x-auto max-w-full">
            <span className="text-[#10B981] shrink-0">✓</span> <span className="whitespace-nowrap shrink-0">FULLY MANAGED</span>
            <span className="text-slate-300 shrink-0">•</span>
            <span className="text-[#10B981] shrink-0">✓</span> <span className="whitespace-nowrap shrink-0">CLOUD SERVER CEPAT</span>
            <span className="text-slate-300 shrink-0">•</span>
            <span className="text-[#10B981] shrink-0">✓</span> <span className="whitespace-nowrap shrink-0">MAINTENANCE & BACKUP RUTIN</span>
          </div>
        </div>

        {/* 3 Structured Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  isFeatured
                    ? 'bg-white border-2 border-[#2563EB] shadow-xl ring-2 ring-blue-500/10 lg:-translate-y-3 z-10'
                    : 'bg-[#F8FAFC] border-2 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Popular Recommendation Header Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span className="whitespace-nowrap">{tier.badge}</span>
                  </div>
                )}

                <div>
                  {/* Top Badge & Duration */}
                  <div className="flex items-center justify-between mb-4">
                    {!isFeatured && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-200 text-slate-700 uppercase tracking-wide whitespace-nowrap shrink-0">
                        {tier.badge}
                      </span>
                    )}
                    {isFeatured && <div />}
                    <div className="flex items-center gap-1 text-xs text-slate-500 font-semibold whitespace-nowrap shrink-0">
                      <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span className="whitespace-nowrap">{tier.timeline}</span>
                    </div>
                  </div>

                  {/* Title & Target Audience */}
                  <h3 className="text-2xl font-extrabold text-[#0F172A] mb-2 leading-snug">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-[#475569] leading-relaxed mb-6 font-normal">
                    {tier.targetAudience}
                  </p>

                  {/* Price Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 mb-6 shadow-xs overflow-hidden">
                    {/* Setup Fee */}
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 whitespace-nowrap">
                      {tier.priceLabel}
                    </div>
                    {renderPrice(tier.price)}

                    {/* Server & Maintenance Dedicated Section */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1 whitespace-nowrap">
                        Server & Maintenance:
                      </div>
                      {renderMaintenance(tier.monthlyMaintenance)}
                      <div className="text-xs text-emerald-600 font-medium mt-1 leading-snug">
                        {tier.priceNote}
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wide whitespace-nowrap shrink-0">
                      SUDAH TERMASUK:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1E293B] font-medium leading-normal">
                        <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Deliverable & CTA Button */}
                <div className="pt-5 border-t border-slate-200 space-y-3">
                  <div className="text-[11px] text-slate-500 font-medium text-center">
                    Output: <strong className="text-[#0F172A]">{tier.deliverables}</strong>
                  </div>

                  <button
                    onClick={() => handleSelectPlan(tier)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98 whitespace-nowrap shrink-0 ${
                      isFeatured
                        ? 'bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/25'
                        : 'bg-white hover:bg-slate-50 text-[#0F172A] border-2 border-slate-200 hover:border-[#2563EB]'
                    }`}
                  >
                    <span className="whitespace-nowrap">{tier.ctaText}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
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
