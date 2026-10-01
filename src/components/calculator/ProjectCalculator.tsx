import React, { useState } from 'react';
import { 
  MessageSquare, 
  Clock, 
  ArrowRight,
  Globe,
  Smartphone,
  Layers,
  Building2,
  CheckCircle2,
  Receipt
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ProjectType {
  id: string;
  name: string;
  basePrice: number;
  days: number;
  desc: string;
  icon: React.ElementType;
}

interface FeatureAddon {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const PROJECT_TYPES: ProjectType[] = [
  { id: 'web_company', name: 'Website Company Profile', basePrice: 1500000, days: 7, desc: 'Profil usaha, katalog produk, dan tombol order WhatsApp', icon: Globe },
  { id: 'web_ecommerce', name: 'Website Toko Online (E-Commerce)', basePrice: 2800000, days: 14, desc: 'Katalog interaktif, keranjang belanja & hitung ongkir', icon: Globe },
  { id: 'apk_standalone', name: 'Aplikasi Android APK Standalone', basePrice: 2500000, days: 12, desc: 'Aplikasi kasir POS, absensi internal, atau kurir', icon: Smartphone },
  { id: 'combo_ecosystem', name: 'Paket Komplit (Web + Android APK)', basePrice: 4500000, days: 21, desc: 'Dashboard laptop + aplikasi HP tersinkronisasi otomatis', icon: Layers },
  { id: 'custom_saas', name: 'Sistem Custom Enterprise', basePrice: 6500000, days: 30, desc: 'ERP multi-cabang, HRIS, atau sistem logistik terpadu', icon: Building2 },
];

const ADDONS: FeatureAddon[] = [
  { id: 'qris_payment', name: 'Integrasi Payment Gateway QRIS & VA', price: 750000, desc: 'Terima pembayaran bank & e-wallet otomatis 24 jam' },
  { id: 'bluetooth_print', name: 'Cetak Struk Bluetooth Thermal APK', price: 500000, desc: 'Konektivitas printer nota 58mm / 80mm tanpa kabel' },
  { id: 'wa_gateway', name: 'WhatsApp Gateway Bot Otomatis', price: 650000, desc: 'Kirim nota, invoice, dan update status ke WA pelanggan' },
  { id: 'gps_tracking', name: 'GPS Geofencing & Tracking Kurir', price: 850000, desc: 'Validasi radius lokasi presensi dan rute armada' },
  { id: 'face_camera', name: 'Foto Swafoto Wajah Validasi Absensi', price: 950000, desc: 'Verifikasi wajah di lokasi proyek anti-fake GPS' },
  { id: 'play_store', name: 'Publikasi Google Play Store Resmi', price: 450000, desc: 'Setup bundle release di Google Play Console sampai terbit' },
];

export const ProjectCalculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProjectType>(PROJECT_TYPES[3]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['qris_payment', 'wa_gateway']);
  const [isExpress, setIsExpress] = useState(false);

  const toggleAddon = (id: string) => {
    soundFx.playClick(750, 0.03);
    setSelectedAddons((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    let price = selectedType.basePrice;
    let days = selectedType.days;

    selectedAddons.forEach((addonId) => {
      const found = ADDONS.find((a) => a.id === addonId);
      if (found) {
        price += found.price;
        days += 1;
      }
    });

    if (isExpress) {
      price = Math.round(price * 1.25);
      days = Math.max(5, Math.round(days * 0.6));
    }

    return { price, days };
  };

  const { price, days } = calculateTotal();

  const formatRupiah = (num: number) => {
    return 'Rp ' + num.toLocaleString('id-ID');
  };

  const sendToWhatsApp = () => {
    soundFx.playSuccess();
    const addonNames = selectedAddons
      .map((id) => ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join('%0A- ');

    const text = `Halo DiDev Studio, saya telah melakukan simulasi estimasi biaya pembuatan aplikasi dengan rincian berikut:%0A%0A` +
      `📌 *Kategori Sistem:* ${selectedType.name}%0A` +
      `⚡ *Jalur Pengerjaan:* ${isExpress ? 'Express Prioritas (+25%)' : 'Standar Reguler'}%0A` +
      `🧩 *Modul Tambahan:*%0A- ${addonNames || 'Tanpa modul tambahan'}%0A%0A` +
      `💰 *Estimasi Biaya Setup Awal:* ${formatRupiah(price)}%0A` +
      `🖥️ *Biaya Server & Maintenance:* Mulai Rp 500.000 / bulan%0A` +
      `⏱️ *Estimasi Durasi:* ${days} Hari Kerja%0A%0A` +
      `Boleh minta info jadwal ketersediaan pengerjaan dan detail paket layanannya? Terima kasih!`;

    window.open(`https://wa.me/6289673757701?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-mesh-calculator border-b border-slate-200 relative overflow-hidden">
      {/* Artistic Blueprint Grid & Ambient Glowing Orbs */}
      <div className="absolute inset-0 artistic-blueprint-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 artistic-dot-grid opacity-40 pointer-events-none" />
      <div className="absolute top-10 left-10 w-[550px] h-[550px] bg-blue-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-sky-400/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap shrink-0">
            <span className="whitespace-nowrap">KALKULATOR ESTIMASI FINANSIAL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Hitung Estimasi Biaya Pembuatan Aplikasi
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Sesuaikan kebutuhan modul dengan budget perusahaan Anda. Dapatkan gambaran investasi yang transparan sebelum mulai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Options (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Base System Package */}
            <div className="p-6 bg-white border-2 border-slate-200 rounded-2xl shadow-sm">
              <label className="block text-xs font-extrabold text-[#0F172A] uppercase mb-4 tracking-wider whitespace-nowrap">
                1. PILIH KATEGORI SISTEM UTAMA:
              </label>
              <div className="space-y-3">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedType.id === pt.id;
                  const Icon = pt.icon;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => { soundFx.playClick(650, 0.03); setSelectedType(pt); }}
                      className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all duration-200 flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-blue-50/90 border-[#2563EB] shadow-xs ring-1 ring-blue-500/20'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#2563EB] text-white shadow-sm' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#0F172A]">
                            {pt.name}
                          </div>
                          <div className="text-xs text-[#475569] mt-0.5">
                            {pt.desc}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0 whitespace-nowrap">
                        <div className="text-sm sm:text-base font-extrabold text-[#2563EB] font-mono whitespace-nowrap">
                          {formatRupiah(pt.basePrice)}
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium whitespace-nowrap">
                          ~{pt.days} hari kerja
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addon Modules */}
            <div className="p-6 bg-white border-2 border-slate-200 rounded-2xl shadow-sm">
              <label className="block text-xs font-extrabold text-[#0F172A] uppercase mb-4 tracking-wider whitespace-nowrap">
                2. PILIH MODUL TAMBAHAN (OPSIONAL):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-3 ${
                        isChecked
                          ? 'bg-blue-50/90 border-[#2563EB] shadow-2xs'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="mt-1 accent-[#2563EB] w-4 h-4 cursor-pointer shrink-0"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#0F172A] leading-snug">
                          {addon.name}
                        </div>
                        <div className="text-[11px] text-[#475569] mt-1">
                          {addon.desc}
                        </div>
                        <div className="text-xs font-extrabold text-[#2563EB] mt-1.5 font-mono whitespace-nowrap shrink-0">
                          +{formatRupiah(addon.price)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Pacing Priority */}
            <div className="p-6 bg-white border-2 border-slate-200 rounded-2xl shadow-sm">
              <label className="block text-xs font-extrabold text-[#0F172A] uppercase mb-4 tracking-wider whitespace-nowrap">
                3. PRIORITAS KECEPATAN PENGERJAAN:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(false); }}
                  className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                    !isExpress
                      ? 'bg-blue-50/90 border-[#2563EB] shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-bold text-[#0F172A] whitespace-nowrap">Standar Reguler</div>
                  <div className="text-xs text-[#475569] mt-0.5">Alur jadwal standar terstruktur</div>
                </button>

                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(true); }}
                  className={`p-4 rounded-xl border-2 text-left cursor-pointer transition-all ${
                    isExpress
                      ? 'bg-blue-50/90 border-[#2563EB] shadow-xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-bold text-[#0F172A] flex items-center justify-between">
                    <span className="whitespace-nowrap">Express Prioritas</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[#2563EB] text-white font-bold whitespace-nowrap shrink-0">+25%</span>
                  </div>
                  <div className="text-xs text-[#475569] mt-0.5">Diselesaikan ~40% lebih kilat</div>
                </button>
              </div>
            </div>

          </div>

          {/* Sticky Summary Card (Right 5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-white border-2 border-slate-300 p-6 sm:p-7 shadow-lg">
              
              {/* Header Quote */}
              <div className="border-b border-slate-200 pb-4 mb-5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-wider block whitespace-nowrap shrink-0">
                    ESTIMASI RESMI DIDEV STUDIO
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mt-0.5">
                    {selectedType.name}
                  </h3>
                </div>
                <Receipt className="w-6 h-6 text-[#2563EB] shrink-0" />
              </div>

              {/* Total Investment Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-blue-50/80 border-2 border-blue-200 mb-6 text-center">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                  Estimasi Biaya Setup Pembuatan:
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] font-sans tracking-tight mt-1.5 whitespace-nowrap">
                  {formatRupiah(price)}
                </div>

                <div className="mt-4 pt-4 border-t border-blue-200/70 text-left bg-white/80 rounded-xl p-3.5 border border-blue-100 shadow-2xs">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                    Cloud Server & Maintenance:
                  </div>
                  <div className="text-lg font-extrabold text-[#2563EB] font-sans tracking-tight mt-0.5 whitespace-nowrap">
                    Mulai Rp 500.000 / bln
                  </div>
                </div>

                <div className="text-xs font-bold text-[#2563EB] mt-4 flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">Estimasi Pengerjaan: {days} Hari Kerja</span>
                </div>
              </div>

              {/* Guarantees Included */}
              <div className="space-y-2.5 text-xs text-[#334155] mb-6 font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Cloud Server VPS Cepat & Terkelola</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Backup Database Otomatis & Pemeliharaan Rutin</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Master File Installer APK Siap Bagikan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span>Pelatihan & Buku Panduan Staf Gratis</span>
                </div>
              </div>

              {/* Action Button: Send Quote to WhatsApp */}
              <button
                onClick={sendToWhatsApp}
                className="w-full py-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98 cursor-pointer whitespace-nowrap shrink-0"
              >
                <MessageSquare className="w-5 h-5 fill-current shrink-0" />
                <span className="whitespace-nowrap">Konsultasikan Estimasi Ini via WA</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <p className="text-[11px] text-center text-slate-500 mt-3 font-normal">
                Konsultasi & diskusi kebutuhan 100% Bebas Biaya tanpa ikatan.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
