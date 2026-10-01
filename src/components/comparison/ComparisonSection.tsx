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
  Coins
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

        {/* Comparison Table for Desktop / Tablet (Compact, Elegant, Space-Efficient) */}
        <div className="hidden md:block max-w-5xl mx-auto relative rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          <table className="w-full text-left border-collapse table-fixed">
            <thead>
              <tr className="border-b border-slate-200">
                {/* Column 1: Parameters */}
                <th className="py-3 px-3.5 lg:px-4 w-[28%] bg-slate-50/80 align-bottom">
                  <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">
                    KOMPARASI
                  </div>
                  <div className="text-xs lg:text-sm font-extrabold text-[#0F172A] mt-0.5">
                    Parameter Kebutuhan Bisnis
                  </div>
                </th>

                {/* Column 2: DiDevelopment Studio (The Champion Column) */}
                <th className="py-3 px-3.5 lg:px-4 w-[32%] bg-gradient-to-b from-[#1D4ED8] to-[#2563EB] text-white relative shadow-sm">
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[9px] font-extrabold uppercase tracking-wider border border-white/30 mb-1 shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>PILIHAN TERBAIK</span>
                    </div>
                    <div className="text-xs lg:text-sm font-extrabold tracking-tight">
                      DiDevelopment Studio
                    </div>
                    <div className="text-[10px] text-blue-100 font-normal">
                      Layanan Resmi Software House • Garansi 1 Tahun
                    </div>
                  </div>
                </th>

                {/* Column 3: Freelancer Murahan */}
                <th className="py-3 px-3.5 lg:px-4 w-[20%] bg-slate-50/90 border-l border-slate-200 align-bottom">
                  <div className="inline-block px-1.5 py-0.2 rounded text-[8.5px] font-extrabold text-rose-700 bg-rose-50 border border-rose-200 mb-1">
                    RISIKO TINGGI
                  </div>
                  <div className="text-xs lg:text-sm font-bold text-slate-800">
                    Freelancer Murahan
                  </div>
                  <div className="text-[10px] text-slate-500 font-normal">
                    Jasa Lepas Medsos
                  </div>
                </th>

                {/* Column 4: Hire In-House Sendiri */}
                <th className="py-3 px-3.5 lg:px-4 w-[20%] bg-slate-50/90 border-l border-slate-200 align-bottom">
                  <div className="inline-block px-1.5 py-0.2 rounded text-[8.5px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 mb-1">
                    BIAYA TINGGI
                  </div>
                  <div className="text-xs lg:text-sm font-bold text-slate-800">
                    Hire In-House Sendiri
                  </div>
                  <div className="text-[10px] text-slate-500 font-normal">
                    Programmer Kantor
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {comparisonData.map((row, idx) => {
                const Icon = row.icon;
                return (
                  <tr 
                    key={idx} 
                    className="group transition-colors duration-150 hover:bg-blue-50/20"
                  >
                    {/* Parameter Column */}
                    <td className="py-2.5 px-3.5 align-middle bg-white group-hover:bg-slate-50/70 transition-colors">
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-md bg-blue-50 border border-blue-100/80 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                          <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-extrabold text-[#0F172A] text-xs leading-snug group-hover:text-[#2563EB] transition-colors">
                            {row.title}
                          </div>
                          <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                            {row.description}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* DiDevelopment Column (Highlighted Champion) */}
                    <td className="py-2.5 px-3.5 align-middle bg-blue-50/40 border-x-2 border-[#2563EB]/40 group-hover:bg-blue-50/70 transition-colors relative">
                      <div className="flex items-start gap-2">
                        <div className="w-4.5 h-4.5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-extrabold text-[#0F172A] text-xs leading-tight">
                              {row.didev.text}
                            </span>
                            {row.didev.badge && (
                              <span className="px-1.5 py-0.2 rounded bg-emerald-100/90 border border-emerald-300 text-emerald-800 text-[8px] font-black font-mono tracking-tight uppercase whitespace-nowrap">
                                {row.didev.badge}
                              </span>
                            )}
                          </div>
                          {row.didev.subtext && (
                            <div className="text-[10px] text-slate-600 font-medium mt-0.5 leading-tight">
                              {row.didev.subtext}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Freelancer Column */}
                    <td className="py-2.5 px-3.5 align-middle bg-white border-l border-slate-100 group-hover:bg-slate-50/70 transition-colors">
                      <div className="flex items-start gap-2">
                        <div className="w-4.5 h-4.5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-800 text-xs leading-tight">
                            {row.freelancer.text}
                          </div>
                          {row.freelancer.subtext && (
                            <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                              {row.freelancer.subtext}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* In-House Column */}
                    <td className="py-2.5 px-3.5 align-middle bg-white border-l border-slate-100 group-hover:bg-slate-50/70 transition-colors">
                      <div className="flex items-start gap-2">
                        {row.inhouse.status === 'good' ? (
                          <div className="w-4.5 h-4.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                          </div>
                        ) : (
                          <div className="w-4.5 h-4.5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                            <AlertTriangle className="w-2.5 h-2.5 stroke-[2.5]" aria-hidden="true" />
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="font-semibold text-slate-800 text-xs leading-tight">
                            {row.inhouse.text}
                          </div>
                          {row.inhouse.subtext && (
                            <div className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                              {row.inhouse.subtext}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* Table Footer Action Row */}
            <tfoot>
              <tr className="border-t-2 border-slate-200 bg-slate-50/90">
                <td className="py-2.5 px-3.5 text-[10px] text-slate-500 font-medium">
                  🛡️ <span className="font-bold text-slate-700">Jaminan Legal:</span> Dicantumkan dalam SPK resmi bermaterai.
                </td>
                <td className="py-2.5 px-3.5 bg-blue-50/90 border-x-2 border-[#2563EB]/40 text-center">
                  <button
                    onClick={openWhatsApp}
                    className="w-full py-2 px-3 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-98 text-white rounded-lg text-xs font-bold shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>Pilih DiDevelopment</span>
                    <ArrowRight className="w-3 h-3 shrink-0" aria-hidden="true" />
                  </button>
                  <span className="text-[9px] text-slate-500 mt-0.5 block font-medium">Konsultasi 100% Bebas Biaya</span>
                </td>
                <td className="py-2.5 px-3.5 border-l border-slate-200 text-center">
                  <span className="text-[11px] text-rose-600 font-bold block">Risiko Ghosting</span>
                  <span className="text-[9px] text-slate-400">Tanpa kantor resmi</span>
                </td>
                <td className="py-2.5 px-3.5 border-l border-slate-200 text-center">
                  <span className="text-[11px] text-amber-700 font-bold block">Beban Gaji Bulanan</span>
                  <span className="text-[9px] text-slate-400">Biaya tetap tinggi</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Mobile Accordion / Stacked Cards View for Small Screens (Compact & Clean) */}
        <div className="md:hidden max-w-md mx-auto space-y-3">
          {comparisonData.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div key={idx} className="rounded-xl bg-white border border-slate-200/90 p-3 shadow-2xs space-y-2.5">
                {/* Parameter Title with Micro-Icon */}
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-md bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0F172A] text-xs">
                      {row.title}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {row.description}
                    </p>
                  </div>
                </div>

                {/* Featured DiDev Pill Card */}
                <div className="p-2.5 rounded-lg bg-gradient-to-r from-blue-50 via-indigo-50/50 to-blue-50 border-2 border-[#2563EB]/60 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-black text-[#2563EB] uppercase tracking-wide flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      DiDevelopment Studio:
                    </span>
                    {row.didev.badge && (
                      <span className="px-1 py-0.2 rounded bg-emerald-100 border border-emerald-300 text-emerald-800 text-[8px] font-bold font-mono uppercase">
                        {row.didev.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      <Check className="w-2.5 h-2.5 stroke-[3]" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-[#0F172A] leading-tight">
                        {row.didev.text}
                      </div>
                      {row.didev.subtext && (
                        <div className="text-[10px] text-slate-600 font-medium mt-0.5 leading-tight">
                          {row.didev.subtext}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Comparison Chips (Freelancer vs In-house) */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-100">
                  <div className="p-2 rounded-lg bg-rose-50/60 border border-rose-100 flex flex-col justify-between">
                    <div>
                      <span className="text-[8.5px] font-extrabold text-rose-700 block uppercase tracking-wider">Freelancer Lepas</span>
                      <span className="font-semibold text-slate-800 text-[10px] block mt-0.5 leading-snug">{row.freelancer.text}</span>
                    </div>
                    {row.freelancer.subtext && (
                      <span className="text-[9px] text-slate-500 block mt-0.5 leading-tight">{row.freelancer.subtext}</span>
                    )}
                  </div>

                  <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-100 flex flex-col justify-between">
                    <div>
                      <span className="text-[8.5px] font-extrabold text-amber-800 block uppercase tracking-wider">Hire In-House</span>
                      <span className="font-semibold text-slate-800 text-[10px] block mt-0.5 leading-snug">{row.inhouse.text}</span>
                    </div>
                    {row.inhouse.subtext && (
                      <span className="text-[9px] text-slate-500 block mt-0.5 leading-tight">{row.inhouse.subtext}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
