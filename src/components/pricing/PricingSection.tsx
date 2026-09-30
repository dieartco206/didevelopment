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
    priceNote: 'Sekali bayar • Tanpa sewa bulanan',
    targetAudience: 'Cocok untuk toko retail, coffee shop, butik, atau UMKM yang ingin pencatatan rapi.',
    timeline: '5 - 7 Hari Kerja',
    features: [
      'Pilih Web Dashboard atau Aplikasi Android APK',
      'Dukungan cetak struk printer Bluetooth thermal',
      'Pencatatan kasir, riwayat pesanan & stok barang',
      'Gratis domain .COM & SSL security 1 tahun',
      'Laporan omset harian langsung rekap otomatis',
      '100% Hak milik penuh source code diserahkan',
      'Garansi resmi bebas bug selama 1 tahun',
    ],
    deliverables: 'Source Code / Master APK • Garansi 1 Th',
    ctaText: 'Pilih Paket Starter',
  },
  {
    id: 'business',
    name: 'Paket Bisnis: Mobile APK + Web Cloud',
    badge: 'PALING BANYAK DIPILIH',
    isPopular: true,
    price: 'Rp 4.500.000',
    priceNote: 'Sekali bayar • Solusi operasional lengkap',
    targetAudience: 'Paling ideal untuk bisnis berkembang, multi-cabang, absensi staf, dan armada lapangan.',
    timeline: '14 - 21 Hari Kerja',
    features: [
      'Website Admin Dashboard untuk Owner di Laptop',
      'Aplikasi Android (.apk) untuk Staf Lapangan & Kasir',
      'Sinkronisasi data transaksi otomatis secara real-time',
      'Multi-Role (Owner, Admin, Kasir, Kurir, Staf)',
      'Fitur GPS Geofencing, swafoto & scan barcode kamera',
      'Integrasi payment gateway QRIS & Virtual Account bank',
      'Laporan keuangan & analitik laba export Excel/PDF',
      'Bantuan publikasi ke Google Play Store resmi',
      'Garansi resmi bebas bug & prioritas teknis 1 tahun',
    ],
    deliverables: 'Web Admin + Master APK • Setup Cloud VPS • Garansi 1 Th',
    ctaText: 'Pilih Paket Bisnis Terpadu',
  },
  {
    id: 'enterprise',
    name: 'Paket Custom Enterprise: Sistem & ERP',
    badge: 'KUSTOM 100% SOP',
    price: 'Mulai Rp 7.500.000',
    priceNote: 'Sekali bayar • Arsitektur skala besar',
    targetAudience: 'Untuk perusahaan, pabrik manufaktur, yayasan sekolah, atau sistem dengan alur unik.',
    timeline: '21 - 35 Hari Kerja',
    features: [
      'Rekayasa arsitektur 100% custom sesuai SOP perusahaan',
      'WhatsApp Gateway Bot notifikasi invoice, resi & OTP',
      'Modernisasi sistem lama & migrasi database terenkripsi',
      'Server VPS cloud tangguh berkapasitas ribuan user',
      'Dokumentasi API lengkap, Git repository & buku panduan',
      'Sesi pelatihan tatap muka / online sampai tim mahir',
      'Penandatanganan Perjanjian Kerahasiaan (NDA) resmi',
      'Garansi resmi pemeliharaan sistem selama 1 tahun',
    ],
    deliverables: 'Full Custom Codebase • Cloud Deployment • NDA Resmi',
    ctaText: 'Konsultasi Kebutuhan Enterprise',
  },
];

export const PricingSection: React.FC = () => {
  const handleSelectPlan = (plan: PricingTier) => {
    soundFx.playSuccess();
    const text = encodeURIComponent(
      `Halo DiDev Studio, saya tertarik memesan "${plan.name}" (${plan.price}). Mohon informasi jadwal ketersediaan pengerjaan dan proses pembayarannya.`
    );
    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <span className="text-[#10B981] shrink-0">✓</span> <span className="whitespace-nowrap shrink-0">SEKALI BAYAR</span>
            <span className="text-slate-300 shrink-0">•</span>
            <span className="text-[#10B981] shrink-0">✓</span> <span className="whitespace-nowrap shrink-0">100% HAK MILIK</span>
            <span className="text-slate-300 shrink-0">•</span>
            <span className="text-[#10B981] shrink-0">✓</span> <span className="whitespace-nowrap shrink-0">TANPA BIAYA BULANAN</span>
          </div>
        </div>

        {/* 3 Structured Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isFeatured = tier.isPopular;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
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
                  <div className="p-4 rounded-xl bg-white border border-slate-200 mb-6 shadow-2xs">
                    <div className="text-3xl font-extrabold text-[#0F172A] font-mono whitespace-nowrap">
                      {tier.price}
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1 whitespace-nowrap shrink-0">
                      {tier.priceNote}
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
