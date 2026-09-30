import React from 'react';
import { 
  MessageSquare, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Award, 
  Workflow,
  ShieldCheck,
  Zap
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Konsultasi Kebutuhan',
    desc: 'Diskusi alur bisnis, fitur, dan budget secara gratis tanpa ikatan.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Perancangan UI/UX',
    desc: 'Konsep tampilan visual modern yang ramah pengguna di HP & laptop.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Koding & Integrasi',
    desc: 'Penulisan clean code cepat, ringan, aman, dan laporan rutin.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Testing Multi-Device',
    desc: 'Uji coba ketat di berbagai HP Android dan browser bebas crash.',
    icon: CheckCircle2,
  },
  {
    step: '05',
    title: 'Serah Terima & Garansi',
    desc: '100% Source code diserahkan, APK siap pasang, dan garansi 1 tahun.',
    icon: Award,
  },
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-12 sm:py-20 bg-mesh-workflow border-b border-blue-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-blue-200 rounded-full text-xs font-mono font-bold text-blue-700 shadow-2xs mb-2">
            <Workflow className="w-3.5 h-3.5 text-blue-600" />
            <span>ALUR KERJA TERSTRUKTUR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            5 TAHAP MENUJU SISTEM JADI
          </h2>
          <p className="mt-1.5 text-xs sm:text-base text-slate-600 font-sans font-medium">
            Proses kerja rapi, tepat waktu, dan Anda memegang kendali penuh atas sistem:
          </p>
        </div>

        {/* Steps Grid: Responsive 1 -> 2 -> 5 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-5 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl sm:rounded-3xl bg-white border-2 border-blue-200/90 p-4 sm:p-6 flex flex-col justify-between hover:border-blue-600 hover:shadow-lg transition-all duration-300 overflow-hidden shadow-xs"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-blue-800">
                      {s.step}
                    </span>
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-3.5 pt-2.5 border-t border-blue-50 text-[10px] font-mono font-bold text-blue-600 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>STEP {s.step} OF 05</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SLA Banner */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-sky-300 border border-white/20">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-bold font-sans">Garansi Kepuasan & 1 Tahun Free Bug Fix</div>
              <div className="text-[11px] sm:text-xs text-blue-200 font-sans mt-0.5">Sistem diuji coba secara ketat sebelum rilis.</div>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-[10px] sm:text-xs font-mono font-bold text-sky-200 shrink-0">
            SLA 99.9% UPTIME READY
          </div>
        </div>
      </div>
    </section>
  );
};
