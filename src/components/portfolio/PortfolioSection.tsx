import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  TrendingUp, 
  MapPin, 
  Lock, 
  Truck, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

type PortfolioCategory = 'all' | 'pos' | 'android' | 'erp';

interface PortfolioItemData {
  id: string;
  category: PortfolioCategory;
  categoryLabel: string;
  industry: string;
  title: string;
  impactHighlight: string;
  solutionDesc: string;
  techStack: string[];
  uiPreviewType: 'pos' | 'attendance' | 'logistics' | 'exam';
}

const PORTFOLIO_ITEMS: PortfolioItemData[] = [
  {
    id: 'kasir-pos',
    category: 'pos',
    categoryLabel: 'Web Kasir POS',
    industry: 'Retail & F&B Multi-Cabang (12 Cabang)',
    title: 'KasirKilat POS: Tablet Kasir Bluetooth & Web Pantau Omset',
    impactHighlight: 'Transaksi 3x Lebih Cepat • Selisih Kas 0%',
    solutionDesc: 'Aplikasi kasir tablet Android yang terhubung printer thermal Bluetooth, disinkronkan langsung ke dashboard owner untuk kontrol stok bahan dan laba harian.',
    techStack: ['Flutter', 'Golang', 'PostgreSQL', 'Bluetooth 58mm'],
    uiPreviewType: 'pos',
  },
  {
    id: 'absensi-gps',
    category: 'android',
    categoryLabel: 'Android Mobile',
    industry: 'Konstruksi & Operasional Lapangan (350+ Pekerja)',
    title: 'HadirSmart: APK Presensi Geofencing & Rekap Payroll Otomatis',
    impactHighlight: 'Kecurangan 0% • Hemat 15 Jam Rekap Gaji',
    solutionDesc: 'Aplikasi APK Android anti-fake GPS dengan validasi swafoto wajah langsung di titik proyek. Terintegrasi web admin untuk kalkulasi gaji bulanan otomatis.',
    techStack: ['Kotlin Android', 'Face Camera', 'Geofencing', 'React Web'],
    uiPreviewType: 'attendance',
  },
  {
    id: 'logistik-tracking',
    category: 'erp',
    categoryLabel: 'Portal & ERP',
    industry: 'Logistik & Ekspedisi Pengiriman',
    title: 'KargoNusantara: Portal Cek Resi & Aplikasi Kurir Digital',
    impactHighlight: 'Komplain Turun 85% • Update Resi Instan',
    solutionDesc: 'Website tracking resi publik yang terhubung langsung ke aplikasi kurir untuk scan barcode paket via kamera HP dan tanda tangan digital penerima.',
    techStack: ['React.js', 'TypeScript', 'Camera Barcode', 'Cloud API'],
    uiPreviewType: 'logistics',
  },
  {
    id: 'cbt-exam',
    category: 'erp',
    categoryLabel: 'Portal & ERP',
    industry: 'Pendidikan & Sekolah (1.200 Siswa Serentak)',
    title: 'EduExam: Aplikasi Ujian Kiosk Lock & Bank Soal Acak',
    impactHighlight: '1.200 Siswa Bebas Down • Anti-Buka Google',
    solutionDesc: 'Aplikasi Android mode Kiosk terkunci sehingga siswa tidak bisa membuka browser atau chatting saat ujian daring, lengkap dengan koreksi nilai otomatis.',
    techStack: ['Vue.js', 'Android Kiosk', 'SQLite Cache', 'Golang'],
    uiPreviewType: 'exam',
  },
];

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('all');

  const filtered = activeTab === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  const consultProject = (title: string) => {
    soundFx.playClick(900, 0.04);
    const msg = encodeURIComponent(`Halo DiDev Studio, saya melihat studi kasus "${title}" dan tertarik membuat sistem serupa untuk usaha saya. Boleh diskusi detailnya?`);
    window.open(`https://wa.me/6281234567890?text=${msg}`, '_blank');
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-mesh-portfolio border-b border-slate-200 relative overflow-hidden">
      {/* Artistic Dot Matrix & Ambient Aura */}
      <div className="absolute inset-0 artistic-dot-grid opacity-60 pointer-events-none" />
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-blue-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-block text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2 whitespace-nowrap shrink-0">
              STUDI KASUS PRODUKSI NYATA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
              Portofolio Sistem dengan Bukti Kinerja
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#475569] max-w-2xl font-normal leading-relaxed">
              Bukan sekadar mockup fiktif. Seluruh sistem di bawah ini aktif melayani ribuan transaksi dan operasional karyawan setiap hari.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xs overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'Semua Proyek' },
              { id: 'pos', label: 'Web Kasir POS' },
              { id: 'android', label: 'Android Mobile' },
              { id: 'erp', label: 'Portal & ERP' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick(650, 0.03);
                  setActiveTab(tab.id as PortfolioCategory);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-slate-600 hover:text-[#2563EB] hover:bg-slate-50'
                }`}
              >
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid with Left/Right Entrance Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filtered.map((item, idx) => {
            const entranceAnim = idx % 2 === 0 ? 'animate-enter-left delay-100' : 'animate-enter-right delay-200';
            return (
              <div
                key={item.id}
                className={`group rounded-2xl bg-white border-2 border-slate-200 hover:border-[#2563EB] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${entranceAnim}`}
              >
              {/* AREA PREVIEW UI NYATA (Bukan Teks Kosong!) */}
              <div className="bg-slate-100 p-4 border-b border-slate-200">
                
                {/* 1. MOCKUP PREVIEW: POS KASIR */}
                {item.uiPreviewType === 'pos' && (
                  <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="font-bold text-[#0F172A] whitespace-nowrap">Kasir Tablet POS • Shift Pagi</span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 whitespace-nowrap shrink-0">Printer Bluetooth 58mm: OK</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] mb-2.5">
                      <div className="p-2 rounded bg-slate-50 border border-slate-100">
                        <span className="text-slate-500 block text-[9px] whitespace-nowrap">Pesanan Aktif</span>
                        <span className="font-bold text-[#0F172A] whitespace-nowrap">2x Caramel Latte (Rp 68k)</span>
                      </div>
                      <div className="p-2 rounded bg-emerald-50 border border-emerald-100">
                        <span className="text-emerald-700 block text-[9px] whitespace-nowrap">Status Pembayaran</span>
                        <span className="font-bold text-emerald-700 whitespace-nowrap shrink-0">QRIS BCA LUNAS</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-1.5 border-t border-slate-100 text-[10px]">
                      <span className="text-slate-500 whitespace-nowrap">Struk otomatis tercetak ke meja pelanggan</span>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-[#2563EB] font-bold whitespace-nowrap shrink-0">1-Klik Cetak</span>
                    </div>
                  </div>
                )}

                {/* 2. MOCKUP PREVIEW: ABSENSI GPS & SELFIE */}
                {item.uiPreviewType === 'attendance' && (
                  <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-[#2563EB] font-bold whitespace-nowrap shrink-0">
                        <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                        <span className="whitespace-nowrap">Validasi Geofencing & Wajah</span>
                      </div>
                      <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold whitespace-nowrap shrink-0">
                        RADIUS 9 METER (VALID)
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded bg-slate-50 border border-slate-100 mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs ring-2 ring-emerald-400 shrink-0">
                        BS
                      </div>
                      <div>
                        <div className="font-bold text-[#0F172A] whitespace-nowrap">Bambang Setiawan</div>
                        <div className="text-[10px] text-slate-500 whitespace-nowrap">Proyek Gedung A • Presensi 07:55:12 WIB</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 whitespace-nowrap shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">Terverifikasi Anti-Mock GPS • Payroll Tersinkron</span>
                    </div>
                  </div>
                )}

                {/* 3. MOCKUP PREVIEW: LOGISTIK & KURIR */}
                {item.uiPreviewType === 'logistics' && (
                  <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-slate-800 font-bold whitespace-nowrap shrink-0">
                        <Truck className="w-4 h-4 text-[#2563EB] shrink-0" />
                        <span className="whitespace-nowrap">Resi #KRG-881920 • Jakarta - Malang</span>
                      </div>
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold whitespace-nowrap shrink-0">
                        TERKIRIM
                      </span>
                    </div>
                    <div className="space-y-1.5 p-2 rounded bg-slate-50 border border-slate-100 text-[11px] mb-2">
                      <div className="flex justify-between">
                        <span className="text-slate-500 whitespace-nowrap">Penerima:</span>
                        <span className="font-bold text-[#0F172A] whitespace-nowrap">Ibu Ratna S.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 whitespace-nowrap">Tanda Tangan Digital:</span>
                        <span className="text-emerald-600 font-bold whitespace-nowrap shrink-0">✓ Tervalidasi</span>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 flex items-center justify-between">
                      <span className="whitespace-nowrap">Notifikasi WA pelanggan: Terkirim</span>
                      <span className="font-mono text-slate-400 whitespace-nowrap shrink-0">14:22 WIB</span>
                    </div>
                  </div>
                )}

                {/* 4. MOCKUP PREVIEW: UJIAN SEKOLAH CBT */}
                {item.uiPreviewType === 'exam' && (
                  <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm text-xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <div className="flex items-center gap-1.5 text-amber-700 font-bold whitespace-nowrap shrink-0">
                        <Lock className="w-4 h-4 text-amber-600 shrink-0" />
                        <span className="whitespace-nowrap">Kiosk Mode Aktif (Terkunci)</span>
                      </div>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold whitespace-nowrap shrink-0">
                        ANTI-PINDAH TAB
                      </span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-100 text-[11px] mb-2 flex items-center justify-between">
                      <div>
                        <span className="text-slate-500 block text-[9px] whitespace-nowrap">Ujian Matematika Terapan</span>
                        <span className="font-bold text-[#0F172A] whitespace-nowrap">Soal 28 / 50 • Acak Butir Soal</span>
                      </div>
                      <span className="font-mono font-bold text-rose-600 whitespace-nowrap shrink-0">Sisa 38:40</span>
                    </div>
                    <div className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 whitespace-nowrap shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">Cache Offline SQLite: Jawaban Tersimpan Aman</span>
                    </div>
                  </div>
                )}
              </div>

              {/* CARD DETAILS */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category & Industry */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#2563EB] text-[11px] font-bold whitespace-nowrap shrink-0">
                      {item.categoryLabel}
                    </span>
                    <span className="text-xs text-slate-500 font-medium truncate max-w-[200px]">
                      {item.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Impact Highlight Badge */}
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 mb-3.5 whitespace-nowrap shrink-0 overflow-x-auto max-w-full">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="whitespace-nowrap">HASIL NYATA: {item.impactHighlight}</span>
                  </div>

                  {/* Solution Narrative */}
                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 font-normal">
                    {item.solutionDesc}
                  </p>
                </div>

                {/* Footer Tech Stack & CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-bold font-mono whitespace-nowrap shrink-0"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => consultProject(item.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg text-xs font-bold transition-colors cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">Bikin Serupa</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      </div>
    </section>
  );
};
