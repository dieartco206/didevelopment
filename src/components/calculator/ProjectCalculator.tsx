import React, { useState } from 'react';
import { 
  Calculator, 
  MessageSquare, 
  Clock, 
  ArrowRight,
  Globe,
  Smartphone,
  Layers,
  Building2,
  CheckCircle2
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
  { id: 'web_company', name: 'Website Company Profile', basePrice: 1500000, days: 7, desc: 'Profil usaha & kontak WA', icon: Globe },
  { id: 'web_ecommerce', name: 'Website Toko Online (E-Commerce)', basePrice: 2800000, days: 14, desc: 'Katalog, keranjang & hitung ongkir', icon: Globe },
  { id: 'apk_standalone', name: 'Aplikasi Android APK Standalone', basePrice: 2500000, days: 12, desc: 'Kasir POS, absensi & staf lapangan', icon: Smartphone },
  { id: 'combo_ecosystem', name: 'Paket Komplit (Web + Android APK)', basePrice: 4500000, days: 21, desc: 'Dashboard laptop + aplikasi HP sinkron', icon: Layers },
  { id: 'custom_saas', name: 'Sistem Custom Enterprise', basePrice: 6500000, days: 30, desc: 'ERP, multi-cabang & database besar', icon: Building2 },
];

const ADDONS: FeatureAddon[] = [
  { id: 'qris_payment', name: 'Payment Gateway QRIS & VA', price: 750000, desc: 'Terima pembayaran otomatis' },
  { id: 'bluetooth_print', name: 'Cetak Struk Bluetooth APK', price: 500000, desc: 'Printer thermal 58mm / 80mm' },
  { id: 'wa_gateway', name: 'Notifikasi Otomatis WhatsApp', price: 650000, desc: 'Kirim invoice & status ke WA' },
  { id: 'gps_tracking', name: 'GPS Geolocation & Tracking', price: 850000, desc: 'Validasi radius & rute kurir' },
  { id: 'face_camera', name: 'Face Selfie Anti-Fake GPS', price: 950000, desc: 'Foto wajah validasi absensi' },
  { id: 'play_store', name: 'Upload Google Play Store', price: 450000, desc: 'Setup rilis di Play Console' },
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

    const text = `Halo DiDev Studio, saya ingin order jasa pembuatan aplikasi dengan rincian berikut:%0A%0A` +
      `📌 *Jenis Proyek:* ${selectedType.name}%0A` +
      `⚡ *Kecepatan:* ${isExpress ? 'Express Prioritas' : 'Standar'}%0A` +
      `🧩 *Fitur Tambahan:*%0A- ${addonNames || 'Tanpa fitur tambahan'}%0A%0A` +
      `💰 *Estimasi Biaya:* ${formatRupiah(price)}%0A` +
      `⏱️ *Estimasi Waktu:* ${days} Hari Kerja%0A%0A` +
      `Mohon info ketersediaan slot pengerjaan dan langkah selanjutnya. Terima kasih!`;

    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-12 sm:py-20 bg-mesh-calculator border-b border-blue-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-1.5">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>KALKULATOR BIAYA PROYEK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            SIMULASI INVESTASI TRANSPARAN
          </h2>
          <p className="mt-1.5 text-xs sm:text-base text-slate-600 max-w-2xl font-sans font-medium">
            Pilih paket dan fitur yang Anda inginkan. Biaya terhitung otomatis secara riil:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-start">
          {/* Form Options (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Step 1: Project Type */}
            <div className="p-4 sm:p-7 bg-white/95 border-2 border-blue-200/80 rounded-2xl sm:rounded-3xl shadow-xs">
              <label className="block text-xs font-mono font-bold text-blue-900 uppercase mb-3 tracking-wide">
                1. Pilih Kategori Sistem:
              </label>
              <div className="space-y-2">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedType.id === pt.id;
                  const Icon = pt.icon;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => { soundFx.playClick(650, 0.03); setSelectedType(pt); }}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left cursor-pointer transition-all duration-200 flex items-center justify-between gap-2.5 ${
                        isSelected
                          ? 'bg-blue-50 border-blue-600 shadow-xs ring-1 ring-blue-500/20'
                          : 'bg-slate-50/70 border-slate-200 hover:border-blue-300 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3.5">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-blue-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                        }`}>
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold font-sans text-slate-900 leading-snug">
                            {pt.name}
                          </div>
                          <div className="text-[10px] sm:text-xs text-slate-600 font-sans mt-0.5">
                            {pt.desc}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-xs sm:text-sm font-mono font-black text-blue-800">
                          {formatRupiah(pt.basePrice)}
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-semibold">
                          ~{pt.days} hari
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div className="p-4 sm:p-7 bg-white/95 border-2 border-blue-200/80 rounded-2xl sm:rounded-3xl shadow-xs">
              <label className="block text-xs font-mono font-bold text-blue-900 uppercase mb-3 tracking-wide">
                2. Pilih Fitur Tambahan (Opsional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl sm:rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-start gap-2.5 ${
                        isChecked
                          ? 'bg-blue-50 border-blue-600 shadow-2xs'
                          : 'bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="mt-0.5 accent-blue-600 w-4 h-4 cursor-pointer shrink-0"
                      />
                      <div>
                        <div className="text-xs font-bold font-sans text-slate-900 leading-snug">
                          {addon.name}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-slate-600 font-sans mt-0.5">
                          {addon.desc}
                        </div>
                        <div className="text-xs font-mono font-black text-blue-700 mt-1">
                          +{formatRupiah(addon.price)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Speed */}
            <div className="p-4 sm:p-7 bg-white/95 border-2 border-blue-200/80 rounded-2xl sm:rounded-3xl shadow-xs">
              <label className="block text-xs font-mono font-bold text-blue-900 uppercase mb-3 tracking-wide">
                3. Prioritas Kecepatan:
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(false); }}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left cursor-pointer transition-all ${
                    !isExpress
                      ? 'bg-blue-50 border-blue-600 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 font-sans">Reguler</div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-sans mt-0.5">Alur standar</div>
                </button>

                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(true); }}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 text-left cursor-pointer transition-all ${
                    isExpress
                      ? 'bg-blue-50 border-blue-600 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 font-sans flex items-center justify-between">
                    <span>Express</span>
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-mono bg-blue-600 text-white font-bold">+25%</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-sans mt-0.5">Lebih cepat 40%</div>
                </button>
              </div>
            </div>
          </div>

          {/* Summary Card (Right 5 Cols - Executive Blue) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white p-5 sm:p-7 shadow-xl shadow-blue-900/30 border-2 border-blue-500/40 relative overflow-hidden">
              <div className="border-b border-blue-700/80 pb-3 sm:pb-4 mb-4 sm:mb-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider">
                    RINGKASAN ESTIMASI
                  </span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/30 text-sky-200 text-[9px] sm:text-[10px] font-mono font-semibold">
                    REAL-TIME
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold font-sans text-white mt-1">
                  {selectedType.name}
                </h3>
              </div>

              {/* Price & Timeline Display Box */}
              <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mb-4 sm:mb-6 text-center">
                <div className="text-[11px] font-mono text-sky-200">Total Estimasi Investasi:</div>
                <div className="text-2xl sm:text-4xl font-black font-mono text-white mt-0.5">
                  {formatRupiah(price)}
                </div>
                <div className="text-xs font-mono text-sky-300 mt-1.5 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Durasi: <strong>{days} Hari Kerja</strong></span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2 text-xs font-sans text-blue-100 mb-5 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>100% Hak Milik Source Code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Garansi Resmi Bebas Bug 1 Tahun</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>File Master APK Siap Pasang</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Panduan & Training Lengkap</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={sendToWhatsApp}
                className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-300 hover:to-blue-400 text-slate-950 rounded-xl sm:rounded-2xl font-mono text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-sky-400/25 active:scale-98 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>ORDER VIA WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-blue-200 mt-2.5 font-sans">
                Konsultasi & diskusi 100% Bebas Biaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
