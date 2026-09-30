import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  MessageSquare, 
  Clock, 
  ArrowRight
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ProjectType {
  id: string;
  name: string;
  basePrice: number;
  days: number;
  desc: string;
}

interface FeatureAddon {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const PROJECT_TYPES: ProjectType[] = [
  { id: 'web_company', name: 'Website Company Profile', basePrice: 1500000, days: 7, desc: 'Profil usaha, portofolio, kontak WA, SEO ready' },
  { id: 'web_ecommerce', name: 'Website Toko Online (E-Commerce)', basePrice: 2800000, days: 14, desc: 'Katalog produk, keranjang belanja, hitung ongkir otomatis' },
  { id: 'apk_standalone', name: 'Aplikasi Android APK Standalone', basePrice: 2500000, days: 12, desc: 'Aplikasi kasir POS, absensi internal, atau tool lapangan' },
  { id: 'combo_ecosystem', name: 'Paket Komplit (Web Admin + Android APK)', basePrice: 4500000, days: 21, desc: 'Dashboard monitoring di laptop + aplikasi operasional di HP' },
  { id: 'custom_saas', name: 'Web App & Sistem Enterprise Custom', basePrice: 6500000, days: 30, desc: 'Sistem ERP, manajemen multi-cabang, database besar' },
];

const ADDONS: FeatureAddon[] = [
  { id: 'qris_payment', name: 'Payment Gateway QRIS & VA Otomatis', price: 750000, desc: 'Terima pembayaran otomatis tanpa cek mutasi manual' },
  { id: 'bluetooth_print', name: 'Integrasi Cetak Struk Bluetooth APK', price: 500000, desc: 'Cetak nota kasir via printer thermal 58mm/80mm' },
  { id: 'wa_gateway', name: 'Notifikasi Otomatis via WhatsApp', price: 650000, desc: 'Kirim invoice dan status pesanan otomatis ke nomor WA klien' },
  { id: 'gps_tracking', name: 'GPS Geolocation & Peta Tracking', price: 850000, desc: 'Validasi radius lokasi absensi atau pelacakan kurir' },
  { id: 'face_camera', name: 'Face Recognition / Selfie Camera', price: 950000, desc: 'Verifikasi foto wajah anti-fake GPS untuk absensi' },
  { id: 'play_store', name: 'Upload & Setup Google Play Store', price: 450000, desc: 'Kami bantu submit dan lolos review Google Play Console' },
];

export const ProjectCalculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ProjectType>(PROJECT_TYPES[3]); // Default: Combo
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
    <section id="calculator" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>KALKULATOR TRANSPARAN BIAYA PROYEK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            SIMULASIKAN BIAYA PEMBUATAN SISTEM ANDA
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl font-sans">
            Hitung sendiri estimasi investasi pembuatan website dan aplikasi Android Anda secara terbuka. 
            Tidak ada biaya tersembunyi, source code 100% milik Anda setelah proyek selesai.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Options (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-3">
                1. Pilih Kategori Sistem yang Anda Butuhkan:
              </label>
              <div className="space-y-2.5">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedType.id === pt.id;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => { soundFx.playClick(650, 0.03); setSelectedType(pt); }}
                      className={`p-4 rounded-2xl border text-left cursor-pointer transition-all flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-blue-50 border-blue-600 shadow-xs'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="text-sm font-bold font-sans text-slate-900">
                          {pt.name}
                        </div>
                        <div className="text-xs text-slate-500 font-sans mt-0.5">
                          {pt.desc}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-mono font-bold text-blue-600">
                          {formatRupiah(pt.basePrice)}
                        </div>
                        <div className="text-[10px] font-mono text-slate-400">
                          ~{pt.days} hari kerja
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-3">
                2. Pilih Fitur & Integrasi Tambahan (Opsional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-blue-50/80 border-blue-600 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="mt-1 accent-blue-600 w-4 h-4 cursor-pointer"
                      />
                      <div>
                        <div className="text-xs font-bold font-sans text-slate-900">
                          {addon.name}
                        </div>
                        <div className="text-[11px] text-slate-500 font-sans mt-0.5">
                          {addon.desc}
                        </div>
                        <div className="text-xs font-mono font-bold text-blue-600 mt-1">
                          +{formatRupiah(addon.price)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Timeline Speed */}
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-3">
                3. Prioritas Kecepatan Pengerjaan:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(false); }}
                  className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                    !isExpress
                      ? 'bg-blue-50 border-blue-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 font-sans">Reguler (Standar)</div>
                  <div className="text-[11px] text-slate-500 font-sans mt-0.5">Alur kerja standar, tanpa biaya prioritas</div>
                </button>

                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(true); }}
                  className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                    isExpress
                      ? 'bg-blue-50 border-blue-600 shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900 font-sans flex items-center gap-1.5">
                    <span>Express Prioritas</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-600 text-white font-bold">+25%</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans mt-0.5">Pengerjaan diprioritaskan, lebih cepat 40%</div>
                </button>
              </div>
            </div>
          </div>

          {/* Result Sticky Card (Right 5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-7 bg-white border border-slate-200 rounded-3xl shadow-xl">
              <div className="border-b border-slate-200 pb-4 mb-5">
                <div className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wide">
                  RINGKASAN ESTIMASI PROYEK
                </div>
                <h3 className="text-xl font-bold font-sans text-slate-900 mt-1">
                  {selectedType.name}
                </h3>
              </div>

              {/* Price & Timeline Display */}
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 mb-6 text-center">
                <div className="text-xs font-mono text-slate-500">Estimasi Total Investasi:</div>
                <div className="text-3xl font-extrabold font-mono text-blue-700 mt-1">
                  {formatRupiah(price)}
                </div>
                <div className="text-xs font-mono text-slate-600 mt-1 flex items-center justify-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Estimasi Durasi: <strong>{days} Hari Kerja</strong></span>
                </div>
              </div>

              {/* Inclusions list */}
              <div className="space-y-2.5 text-xs font-sans text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% Full Source Code diserahkan ke Klien</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Garansi Perbaikan Bug & Error 1 Tahun</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Pelatihan Pengoperasian Admin sampai Bisa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Kirim File APK Release siap install di Android</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={sendToWhatsApp}
                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-mono text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-98 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>KIRIM RINCIAN KE WHATSAPP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-3 font-sans">
                Konsultasi & tanya-tanya 100% Gratis. Diskusi santai tanpa ikatan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
