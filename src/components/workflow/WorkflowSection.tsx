import React from 'react';
import { 
  MessageSquare, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Award, 
  ShieldCheck 
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Konsultasi & Blueprint',
    desc: 'Diskusi komprehensif mengenai alur proses bisnis, kebutuhan fitur, dan penyusunan blueprint sistem.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Perancangan UI/UX',
    desc: 'Pembuatan konsep tampilan antarmuka yang bersih, intuitif, dan responsif di smartphone maupun laptop.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Pengembangan Sistem',
    desc: 'Koding dengan standar arsitektur bersih (clean code), integrasi database, dan penyusunan build APK Android.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Quality Assurance',
    desc: 'Pengujian multi-device di berbagai tipe HP Android dan browser web untuk memastikan sistem 100% bebas bug.',
    icon: CheckCircle2,
  },
  {
    step: '05',
    title: 'Pelatihan & Garansi',
    desc: 'Instalasi server, serah terima 100% source code, pelatihan tim Anda, dan masa garansi resmi 1 tahun.',
    icon: Award,
  },
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-14 sm:py-20 bg-[#F4F8FE] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-block text-xs font-bold text-[#256BE0] uppercase tracking-wider mb-2">
            TAHAPAN PENGEMBANGAN SISTEM
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102E61] tracking-tight font-sans">
            Proses Strategis untuk Hasil Terbaik
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#48505E] font-normal">
            Alur kerja transparan dan terukur yang memastikan aplikasi selesai tepat waktu sesuai spesifikasi:
          </p>
        </div>

        {/* Steps Grid: Responsive 1 -> 2 -> 5 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#D6E4FB] shadow-2xs hover:border-[#256BE0] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-sans text-[#256BE0]">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#256BE0] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-[#102E61] mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#48505E] leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Assurance Card */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl bg-white border border-[#D6E4FB] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#256BE0] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-[#102E61]">Garansi Resmi 1 Tahun & Free Bug Fix</div>
              <div className="text-xs text-[#48505E] mt-0.5">Seluruh aplikasi diuji ketat dan didampingi tim teknis setelah serah terima.</div>
            </div>
          </div>
          <div className="px-4 py-2 rounded-lg bg-blue-50 text-xs font-semibold text-[#256BE0] shrink-0">
            SLA 99.8% Uptime Ready
          </div>
        </div>
      </div>
    </section>
  );
};
