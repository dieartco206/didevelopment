import React from 'react';
import { 
  Check, 
  X, 
  AlertTriangle, 
  ShieldCheck, 
  Scale, 
  ArrowRight, 
  Lock, 
  Server, 
  FileCode2,
  Database,
  Zap,
  UserCheck,
  Coins,
  UserX,
  Building2
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ComparisonFeature {
  title: string;
  description: string;
  icon: React.ElementType;
  didev: {
    status: 'good';
    text: string;
    subtext?: string;
    badge?: string;
  };
  freelancer: {
    status: 'bad' | 'warn';
    text: string;
    subtext?: string;
  };
  inhouse: {
    status: 'bad' | 'warn' | 'good';
    text: string;
    subtext?: string;
  };
}

export const ComparisonSection: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6289673757701?text=Halo%20DiDev%20Studio%2C%20saya%20tertarik%20dengan%20layanan%20resmi%20bergaransi%201%20tahun.%20Boleh%20konsultasi%20kebutuhan%20sistem%20bisnis%20saya%3F',
      '_blank'
    );
  };

  const comparisonData: ComparisonFeature[] = [
    {
      title: 'Garansi Bebas Bug & Error',
      description: 'Kepastian perbaikan jika ada kendala teknis setelah sistem live.',
      icon: ShieldCheck,
      didev: {
        status: 'good',
        text: 'Resmi 1 Tahun Penuh',
        subtext: 'Perbaikan cepat tanpa biaya tambahan',
        badge: 'GARANSI RESMI',
      },
      freelancer: {
        status: 'bad',
        text: '1 - 2 Minggu Saja',
        subtext: 'Sering lepas tangan begitu dibayar lunas',
      },
      inhouse: {
        status: 'warn',
        text: 'Tergantung Staf',
        subtext: 'Jika programmer resign, garansi hilang',
      },
    },
    {
      title: 'Server Cloud & Pengelolaan',
      description: 'Penyediaan VPS, konfigurasi domain, SSL, dan uptime monitoring.',
      icon: Server,
      didev: {
        status: 'good',
        text: 'Fully Managed Cloud Cepat',
        subtext: 'Anda tinggal pakai, server kami yang rawat',
        badge: 'TERKELOLA PENUH',
      },
      freelancer: {
        status: 'bad',
        text: 'Klien Setup Sendiri',
        subtext: 'Klien bingung sewa VPS & setting Linux',
      },
      inhouse: {
        status: 'warn',
        text: 'Biaya Server Membengkak',
        subtext: 'Butuh devops terpisah untuk kelola cloud',
      },
    },
    {
      title: 'Backup Data Otomatis',
      description: 'Perlindungan database transaksi, nota kasir, & data pelanggan.',
      icon: Database,
      didev: {
        status: 'good',
        text: 'Backup Rutin Terjadwal',
        subtext: 'Tersimpan aman di cloud terpisah',
        badge: 'AUTO CLOUD',
      },
      freelancer: {
        status: 'bad',
        text: 'Tidak Ada Backup',
        subtext: 'Jika server crash, data hilang selamanya',
      },
      inhouse: {
        status: 'warn',
        text: 'Manual / Butuh SOP',
        subtext: 'Rawan lupa dieksekusi oleh staf IT',
      },
    },
    {
      title: 'Kepemilikan Source Code',
      description: 'Hak cipta penuh terhadap source code dan aset sistem.',
      icon: FileCode2,
      didev: {
        status: 'good',
        text: '100% Hak Milik Anda',
        subtext: 'Full source code & database diserahkan',
        badge: 'BEBAS LISENSI',
      },
      freelancer: {
        status: 'bad',
        text: 'Sering Dikunci / Royalti',
        subtext: 'Ada biaya tersembunyi jika mau pindah',
      },
      inhouse: {
        status: 'good',
        text: 'Milik Perusahaan',
        subtext: 'Namun dokumentasi sering tidak rapi',
      },
    },
    {
      title: 'Kecepatan & Kepastian Rilis',
      description: 'Estimasi waktu mulai dari kontrak sampai sistem siap operasional.',
      icon: Zap,
      didev: {
        status: 'good',
        text: '2 - 4 Minggu Selesai',
        subtext: 'Jadwal milestone tertulis dan tepat waktu',
        badge: 'ON-TIME SLA',
      },
      freelancer: {
        status: 'bad',
        text: 'Sering Molor Berbulan-bulan',
        subtext: 'Alasan sakit, sibuk kerjaan kantor, dll',
      },
      inhouse: {
        status: 'warn',
        text: '3 - 6 Bulan',
        subtext: 'Butuh rekrutmen dan onboarding lama',
      },
    },
    {
      title: 'Risiko Ditinggal Kabur (Ghosting)',
      description: 'Keamanan dana DP dan jaminan proyek tuntas 100%.',
      icon: UserCheck,
      didev: {
        status: 'good',
        text: '0% Risiko (Kontrak Resmi)',
        subtext: 'Developer studio terpercaya & support tiap hari',
        badge: 'LEGAL KONTRAK',
      },
      freelancer: {
        status: 'bad',
        text: 'Sangat Berisiko',
        subtext: 'Banyak kasus nomor diblokir setelah DP',
      },
      inhouse: {
        status: 'warn',
        text: 'Risiko Programmer Resign',
        subtext: 'Harus rekrut ulang dan belajar dari nol',
      },
    },
    {
      title: 'Total Biaya Investasi',
      description: 'Efisiensi pengeluaran dana usaha untuk digitalisasi sistem.',
      icon: Coins,
      didev: {
        status: 'good',
        text: 'Mulai Rp 1,5 Juta All-in',
        subtext: 'Transparan tanpa biaya terselubung',
        badge: 'INVESTASI HEMAT',
      },
      freelancer: {
        status: 'warn',
        text: 'Awal Murah, Belakang Boros',
        subtext: 'Banyak biaya tambahan tak terduga',
      },
      inhouse: {
        status: 'bad',
        text: 'Rp 6 - 12 Jt / Bulan',
        subtext: 'Belum termasuk THR, BPJS & laptop kerja',
      },
    },
  ];

  return (
    <section id="comparison" className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Blueprint Grid */}
      <div className="absolute inset-0 artistic-blueprint-grid opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-2 shadow-2xs">
            <Scale className="w-3 h-3 shrink-0" aria-hidden="true" />
            <span>TRANSPARANSI KUALITAS & INVESTASI</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Kenapa DiDevelopment Jauh Lebih Menguntungkan?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed max-w-xl mx-auto font-normal">
            Bandingkan parameter penting sebelum memutuskan: kepastian garansi tertulis, kepemilikan source code, dan efisiensi biaya nyata.
          </p>
        </div>

        {/* 3-Pillar Battle Comparison Cards (Spacious, High-Converting & Responsive) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 xl:gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Pillar 1: Freelancer Lepas */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-rose-200 hover:shadow-md p-5 sm:p-6 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3">
                <UserX className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Risiko Ghosting Tinggi</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                Freelancer Lepas
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Tampak murah di awal, berisiko mahal saat ditinggal pasca-launching tanpa pertanggungjawaban.
              </p>

              <div className="my-5 border-t border-slate-100" />

              <div className="space-y-4">
                {comparisonData.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 leading-snug mt-0.5">
                        {item.freelancer.text}
                      </div>
                      {item.freelancer.subtext && (
                        <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                          {item.freelancer.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/80 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Estimasi Pengeluaran
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-800 mt-0.5">
                {comparisonData[6].freelancer.text}
              </div>
              <div className="text-[11px] text-rose-600 mt-1 flex items-center gap-1 font-medium">
                <span>⚠️ {comparisonData[6].freelancer.subtext}</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: DiDevelopment Studio (The Champion Card) */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-[#0B132B] text-white border-2 border-blue-500 shadow-xl shadow-blue-950/40 lg:-translate-y-2 lg:scale-[1.02] p-5 sm:p-6 ring-4 ring-blue-500/20 transition-all duration-300 z-10 overflow-hidden pt-8 sm:pt-9">
            {/* Top Floating Highlight Ribbon */}
            <div className="absolute top-0 right-0 left-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 py-1.5 px-4 text-center">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                ★ PILIHAN UTAMA BISNIS • GARANSI 1 TAHUN
              </span>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" aria-hidden="true" />
                <span>Software House Resmi</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                <span>DiDevelopment Studio</span>
              </h3>
              <p className="text-xs text-blue-100/90 mt-1 leading-relaxed">
                Sistem berkualitas siap pakai, bergaransi resmi, dan didampingi tim engineer bersertifikasi.
              </p>

              <div className="my-5 border-t border-slate-800" />

              <div className="space-y-4">
                {comparisonData.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-emerald-500/30">
                      <Check className="w-3 h-3 stroke-[3]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] sm:text-[11px] font-bold text-blue-300 uppercase tracking-wider">
                          {item.title}
                        </span>
                        {item.didev.badge && (
                          <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[8.5px] font-black font-mono">
                            {item.didev.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold text-white leading-snug mt-0.5">
                        {item.didev.text}
                      </div>
                      {item.didev.subtext && (
                        <div className="text-[10px] text-blue-200/80 mt-0.5 leading-tight">
                          {item.didev.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 bg-blue-950/70 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">Investasi All-In</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[9px] font-bold">Resmi & Transparan</span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">
                {comparisonData[6].didev.text}
              </div>
              <p className="text-[10px] text-blue-200/80 mt-0.5 mb-3.5">
                {comparisonData[6].didev.subtext}
              </p>
              <button
                onClick={openWhatsApp}
                className="w-full py-2.5 px-3.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold rounded-xl text-xs sm:text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Konsultasi & Pilih DiDevelopment</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Pillar 3: Rekrut Tim In-House */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 hover:border-amber-200 hover:shadow-md p-5 sm:p-6 transition-all duration-300">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                <span>Overhead Tinggi</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                Rekrut Tim In-House
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Bagus untuk korporasi mapan, namun membebani cashflow UKM & bisnis berkembang.
              </p>

              <div className="my-5 border-t border-slate-100" />

              <div className="space-y-4">
                {comparisonData.slice(0, 6).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle className="w-3 h-3 stroke-[2.5]" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.title}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 leading-snug mt-0.5">
                        {item.inhouse.text}
                      </div>
                      {item.inhouse.subtext && (
                        <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">
                          {item.inhouse.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/80 -mx-5 -mb-5 sm:-mx-6 sm:-mb-6 p-4 rounded-b-2xl">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Estimasi Pengeluaran
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-800 mt-0.5">
                {comparisonData[6].inhouse.text}
              </div>
              <div className="text-[11px] text-amber-800 mt-1 flex items-center gap-1 font-medium">
                <span>⚠️ {comparisonData[6].inhouse.subtext}</span>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Pillars Trust & Legal Guarantee Bar */}
        <div className="mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-md max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
              JAMINAN KEAMANAN & KEPERCAYAAN ANDA
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              4 Jaminan Mutlak di Setiap Proyek DiDevelopment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-blue-400 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A]">Garansi Bebas Bug 365 Hari</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Perbaikan error teknis ditangani gratis selama 1 tahun penuh.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-emerald-400 flex items-center justify-center shrink-0 shadow-2xs">
                <FileCode2 className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A]">100% Hak Milik Kode</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Source code dan database diserahkan penuh tanpa biaya lisensi per user.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-indigo-400 flex items-center justify-center shrink-0 shadow-2xs">
                <Server className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A]">Cloud Server Fully Managed</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Server berkecepatan tinggi, domain, dan backup kami yang tangani penuh.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#0F172A] text-amber-400 flex items-center justify-center shrink-0 shadow-2xs">
                <Lock className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A]">NDA Kerahasiaan Bisnis</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Data transaksi, alur SOP, dan data pelanggan dijamin aman secara hukum.
                </p>
              </div>
            </div>
          </div>

          {/* Direct CTA */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <div className="text-sm font-extrabold text-[#0F172A]">
                Punya Alur SOP Khusus yang Ingin Dibuatkan Sistemnya?
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                Konsultasikan langsung dengan developer ahli kami. Gratis tanpa biaya komitmen awal.
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer shrink-0"
            >
              <span>Konsultasi Kebutuhan Sistem</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
