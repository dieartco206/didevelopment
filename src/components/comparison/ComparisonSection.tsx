import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Server, 
  FileCode2 
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ComparisonFeature {
  title: string;
  description: string;
  didev: {
    status: 'good';
    text: string;
    subtext?: string;
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
      description: 'Kepastian perbaikan jika ada error atau kendala teknis setelah sistem digunakan.',
      didev: {
        status: 'good',
        text: 'Resmi 1 Tahun Penuh',
        subtext: 'Perbaikan cepat tanpa biaya tambahan',
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
      description: 'Penyediaan server, konfigurasi domain, SSL, dan kestabilan uptime sistem.',
      didev: {
        status: 'good',
        text: 'Fully Managed Cloud Cepat',
        subtext: 'Anda tinggal pakai, server kami yang rawat',
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
      description: 'Perlindungan database transaksi, nota kasir, dan data pelanggan dari kehilangan.',
      didev: {
        status: 'good',
        text: 'Backup Rutin Terjadwal',
        subtext: 'Tersimpan aman di cloud terpisah',
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
      description: 'Hak cipta penuh terhadap kode program dan kebebasan pengembangan ke depan.',
      didev: {
        status: 'good',
        text: '100% Hak Milik Anda',
        subtext: 'Full source code & database diserahkan',
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
      description: 'Estimasi waktu mulai dari kesepakatan sampai sistem operasional live.',
      didev: {
        status: 'good',
        text: '2 - 4 Minggu Selesai',
        subtext: 'Jadwal milestone tertulis dan tepat waktu',
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
      description: 'Keamanan dana DP dan kepastian proyek selesai sampai tuntas.',
      didev: {
        status: 'good',
        text: '0% Risiko (Kontrak Resmi)',
        subtext: 'Developer studio terpercaya & support tiap hari',
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
      didev: {
        status: 'good',
        text: 'Mulai Rp 1,5 Juta All-in',
        subtext: 'Transparan tanpa biaya terselubung',
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
    <section id="comparison" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 artistic-blueprint-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/10 via-sky-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 border border-blue-200 text-[#2563EB] rounded-full text-xs font-bold uppercase tracking-wider mb-3 whitespace-nowrap shrink-0 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">TRANSPARANSI KUALITAS & INVESTASI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Kenapa DiDevelopment Jauh Lebih Menguntungkan?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            Bandingkan secara objektif sebelum Anda mengeluarkan uang: apakah lebih aman dan hemat membuat sistem di DiDevelopment, memakai jasa freelancer murah, atau merekrut programmer sendiri?
          </p>
        </div>

        {/* Comparison Table for Desktop / Tablet */}
        <div className="hidden md:block overflow-hidden rounded-2xl bg-white border-2 border-slate-200 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-5 text-sm font-extrabold text-slate-700 w-1/4">
                  Parameter Kebutuhan Bisnis
                </th>
                
                {/* Column DiDev (Highlighted) */}
                <th className="p-5 text-sm font-extrabold text-white bg-[#2563EB] w-1/3 relative shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-base font-extrabold">DiDevelopment Studio</span>
                    <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-white/30 whitespace-nowrap shrink-0">
                      Pilihan Terbaik
                    </span>
                  </div>
                  <div className="text-xs text-blue-100 font-normal mt-0.5">
                    Layanan Resmi • Bergaransi 1 Tahun
                  </div>
                </th>

                <th className="p-5 text-sm font-bold text-slate-700 w-1/5 bg-slate-100/70">
                  Freelancer Murahan
                  <div className="text-xs text-slate-500 font-normal mt-0.5">Jasa Lepas di Medsos</div>
                </th>

                <th className="p-5 text-sm font-bold text-slate-700 w-1/5 bg-slate-100/70">
                  Hire In-House Sendiri
                  <div className="text-xs text-slate-500 font-normal mt-0.5">Rekrut Karyawan IT</div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                  {/* Parameter Column */}
                  <td className="p-4 sm:p-5 align-top">
                    <div className="font-extrabold text-[#0F172A] leading-snug">
                      {row.title}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      {row.description}
                    </div>
                  </td>

                  {/* DiDevelopment Column */}
                  <td className="p-4 sm:p-5 align-top bg-blue-50/40 border-x-2 border-[#2563EB]/40">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-[#0F172A] block text-sm">
                          {row.didev.text}
                        </span>
                        {row.didev.subtext && (
                          <span className="text-[11px] text-slate-600 font-medium block mt-0.5">
                            {row.didev.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Freelancer Column */}
                  <td className="p-4 sm:p-5 align-top bg-slate-50/20 text-slate-600">
                    <div className="flex items-start gap-2">
                      {row.freelancer.status === 'bad' ? (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold text-slate-800 block text-xs sm:text-sm">
                          {row.freelancer.text}
                        </span>
                        {row.freelancer.subtext && (
                          <span className="text-[11px] text-slate-500 block mt-0.5">
                            {row.freelancer.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* In-House Column */}
                  <td className="p-4 sm:p-5 align-top bg-slate-50/20 text-slate-600">
                    <div className="flex items-start gap-2">
                      {row.inhouse.status === 'good' ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : row.inhouse.status === 'warn' ? (
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <span className="font-bold text-slate-800 block text-xs sm:text-sm">
                          {row.inhouse.text}
                        </span>
                        {row.inhouse.subtext && (
                          <span className="text-[11px] text-slate-500 block mt-0.5">
                            {row.inhouse.subtext}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Accordion / Stacked Cards View for Small Screens */}
        <div className="md:hidden space-y-4">
          {comparisonData.map((row, idx) => (
            <div key={idx} className="rounded-xl bg-white border border-slate-200 p-4 shadow-sm space-y-3">
              <div>
                <h4 className="font-extrabold text-[#0F172A] text-sm">
                  {row.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {row.description}
                </p>
              </div>

              {/* DiDev Choice (Highlight) */}
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] font-bold text-[#2563EB] uppercase">DiDevelopment:</div>
                  <div className="text-xs font-extrabold text-[#0F172A]">{row.didev.text}</div>
                  {row.didev.subtext && (
                    <div className="text-[10px] text-slate-600 mt-0.5">{row.didev.subtext}</div>
                  )}
                </div>
              </div>

              {/* Freelancer vs Inhouse Small Row */}
              <div className="grid grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-100">
                <div className="p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="text-[9.5px] font-bold text-slate-400 block uppercase">Freelancer Lepas:</span>
                  <span className="font-semibold text-slate-700 text-[11px] block mt-0.5">{row.freelancer.text}</span>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-100">
                  <span className="text-[9.5px] font-bold text-slate-400 block uppercase">Hire In-House:</span>
                  <span className="font-semibold text-slate-700 text-[11px] block mt-0.5">{row.inhouse.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars Trust & Legal Guarantee Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block mb-1">
              JAMINAN KEAMANAN & KEPERCAYAAN ANDA
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              4 Jaminan Mutlak di Setiap Proyek DiDevelopment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] whitespace-nowrap">Garansi Bebas Bug 365 Hari</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Perbaikan error teknis ditangani gratis selama 1 tahun penuh.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                <FileCode2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] whitespace-nowrap">100% Hak Milik Kode</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Source code dan database diserahkan penuh tanpa biaya lisensi per user.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] whitespace-nowrap">Cloud Server Fully Managed</h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                  Server berkecepatan tinggi, domain, dan backup kami yang tangani penuh.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] whitespace-nowrap">NDA Kerahasiaan Bisnis</h4>
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Konsultasi Kebutuhan Sistem</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
