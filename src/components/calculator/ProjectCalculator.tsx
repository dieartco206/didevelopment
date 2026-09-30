import React, { useState } from 'react';
import { 
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
  { id: 'web_company', name: 'Website Profil Perusahaan', basePrice: 1500000, days: 7, desc: 'Profil usaha, katalog, dan kontak WhatsApp', icon: Globe },
  { id: 'web_ecommerce', name: 'Website Toko Online (E-Commerce)', basePrice: 2800000, days: 14, desc: 'Katalog produk, keranjang belanja & hitung ongkir', icon: Globe },
  { id: 'apk_standalone', name: 'Aplikasi Android APK Mandiri', basePrice: 2500000, days: 12, desc: 'Aplikasi kasir POS, absensi internal, atau kurir', icon: Smartphone },
  { id: 'combo_ecosystem', name: 'Paket Komplit (Web + Android APK)', basePrice: 4500000, days: 21, desc: 'Dashboard laptop + aplikasi HP tersinkronisasi', icon: Layers },
  { id: 'custom_saas', name: 'Sistem Custom Enterprise', basePrice: 6500000, days: 30, desc: 'ERP multi-cabang, HRIS, atau sistem logistik', icon: Building2 },
];

const ADDONS: FeatureAddon[] = [
  { id: 'qris_payment', name: 'Payment Gateway QRIS & VA', price: 750000, desc: 'Terima pembayaran otomatis bank & e-wallet' },
  { id: 'bluetooth_print', name: 'Cetak Struk Bluetooth APK', price: 500000, desc: 'Dukungan printer thermal 58mm / 80mm' },
  { id: 'wa_gateway', name: 'Notifikasi Otomatis WhatsApp', price: 650000, desc: 'Kirim nota, invoice, dan update status ke WA' },
  { id: 'gps_tracking', name: 'GPS Geofencing & Tracking', price: 850000, desc: 'Validasi radius lokasi dan rute pengiriman' },
  { id: 'face_camera', name: 'Foto Swafoto Wajah Validasi', price: 950000, desc: 'Kamera HP untuk verifikasi absensi' },
  { id: 'play_store', name: 'Publikasi Google Play Store', price: 450000, desc: 'Bantuan rilis resmi di Play Console' },
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

    const text = `Halo DiDev Studio, saya ingin berkonsultasi mengenai rencana pembuatan sistem dengan rincian berikut:%0A%0A` +
      `📌 *Jenis Sistem:* ${selectedType.name}%0A` +
      `⚡ *Jadwal:* ${isExpress ? 'Express Prioritas' : 'Standar Reguler'}%0A` +
      `🧩 *Fitur Pilihan:*%0A- ${addonNames || 'Tanpa fitur tambahan'}%0A%0A` +
      `💰 *Estimasi Biaya:* ${formatRupiah(price)}%0A` +
      `⏱️ *Estimasi Pengerjaan:* ${days} Hari Kerja%0A%0A` +
      `Mohon informasi langkah selanjutnya. Terima kasih!`;

    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="inline-block text-xs font-bold text-[#256BE0] uppercase tracking-wider mb-2">
            SIMULASI INVESTASI APLIKASI
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102E61] tracking-tight font-sans">
            Hitung Estimasi Biaya Proyek Anda
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#48505E] max-w-2xl font-normal">
            Pilih kategori sistem dan kebutuhan fitur tambahan untuk melihat estimasi investasi secara transparan dan instan:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Project Type */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <label className="block text-xs font-bold text-[#102E61] uppercase mb-4 tracking-wider">
                1. PILIH KATEGORI SISTEM:
              </label>
              <div className="space-y-2.5">
                {PROJECT_TYPES.map((pt) => {
                  const isSelected = selectedType.id === pt.id;
                  const Icon = pt.icon;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => { soundFx.playClick(650, 0.03); setSelectedType(pt); }}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-blue-50/80 border-[#256BE0] shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-[#256BE0] text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-[#102E61]">
                            {pt.name}
                          </div>
                          <div className="text-xs text-[#48505E] mt-0.5">
                            {pt.desc}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm font-bold text-[#256BE0]">
                          {formatRupiah(pt.basePrice)}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          ~{pt.days} hari
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Addons */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <label className="block text-xs font-bold text-[#102E61] uppercase mb-4 tracking-wider">
                2. FITUR TAMBAHAN (OPSIONAL):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-blue-50/80 border-[#256BE0]'
                          : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="mt-0.5 accent-[#256BE0] w-4 h-4 cursor-pointer shrink-0"
                      />
                      <div>
                        <div className="text-xs font-bold text-[#102E61]">
                          {addon.name}
                        </div>
                        <div className="text-[11px] text-[#48505E] mt-0.5">
                          {addon.desc}
                        </div>
                        <div className="text-xs font-bold text-[#256BE0] mt-1">
                          +{formatRupiah(addon.price)}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Speed */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-2xs">
              <label className="block text-xs font-bold text-[#102E61] uppercase mb-4 tracking-wider">
                3. PRIORITAS JADWAL PENGERJAAN:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(false); }}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    !isExpress
                      ? 'bg-blue-50/80 border-[#256BE0]'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-bold text-[#102E61]">Standar Reguler</div>
                  <div className="text-xs text-[#48505E] mt-0.5">Alur jadwal standar</div>
                </button>

                <button
                  type="button"
                  onClick={() => { soundFx.playClick(650, 0.03); setIsExpress(true); }}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isExpress
                      ? 'bg-blue-50/80 border-[#256BE0]'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="text-sm font-bold text-[#102E61] flex items-center justify-between">
                    <span>Express Prioritas</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#256BE0] text-white font-bold">+25%</span>
                  </div>
                  <div className="text-xs text-[#48505E] mt-0.5">Lebih cepat ~40%</div>
                </button>
              </div>
            </div>
          </div>

          {/* Summary Card (Right 5 Cols - Clean Executive Card) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-[#F4F8FE] border border-[#D6E4FB] p-6 sm:p-7 shadow-xs">
              <div className="border-b border-slate-200/80 pb-4 mb-5">
                <span className="text-xs font-bold text-[#256BE0] uppercase tracking-wider block">
                  RINGKASAN ESTIMASI
                </span>
                <h3 className="text-xl font-bold text-[#102E61] mt-1">
                  {selectedType.name}
                </h3>
              </div>

              {/* Price & Timeline Display Box */}
              <div className="p-5 rounded-xl bg-white border border-[#D6E4FB] mb-6 text-center">
                <div className="text-xs text-[#48505E] font-medium">Estimasi Nilai Investasi:</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#102E61] mt-1">
                  {formatRupiah(price)}
                </div>
                <div className="text-xs text-[#256BE0] font-semibold mt-2 flex items-center justify-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Durasi Pengerjaan: <strong>{days} Hari Kerja</strong></span>
                </div>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 text-xs text-[#48505E] mb-6 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#256BE0] shrink-0" />
                  <span>100% Hak Milik Source Code Lengkap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#256BE0] shrink-0" />
                  <span>Garansi Resmi Bebas Bug Selama 1 Tahun</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#256BE0] shrink-0" />
                  <span>Master File Installer APK Siap Pasang</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#256BE0] shrink-0" />
                  <span>Panduan & Sesi Pelatihan Staf Gratis</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={sendToWhatsApp}
                className="w-full py-3.5 bg-[#256BE0] hover:bg-[#1D58BD] text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-all active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasikan via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[11px] text-center text-slate-500 mt-3 font-normal">
                Konsultasi & diskusi kebutuhan 100% Bebas Biaya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
