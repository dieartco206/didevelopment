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
    <section id="workflow" className="py-16 sm:py-20 bg-mesh-workflow border-b border-blue-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-blue-200 rounded-full text-xs font-mono font-bold text-blue-700 shadow-2xs mb-3">
            <Workflow className="w-3.5 h-3.5 text-blue-600" />
            <span>ALUR KERJA TRANSPARAN & TERSTRUKTUR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            5 TAHAPAN MENUJU APLIKASI SIAP PAKAI
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans font-medium">
            Proses kerja rapi, tepat waktu, dan Anda memegang kendali penuh atas sistem:
          </p>
        </div>

        {/* Steps Grid: Responsive 1 -> 2 -> 5 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white border-2 border-blue-200/90 p-6 flex flex-col justify-between hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-300 overflow-hidden shadow-sm"
              >
                {/* Top Accent Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 group-hover:h-2 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-mono font-black text-blue-800 group-hover:scale-105 transition-transform">
                      {s.step}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-md shadow-blue-500/25 group-hover:rotate-6 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-base text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-blue-50 text-[10px] font-mono font-bold text-blue-600 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>STEP {s.step} OF 05</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom SLA & Security Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-sky-300 border border-white/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold font-sans">Garansi Kepuasan & 1 Tahun Free Bug Fix</div>
              <div className="text-xs text-blue-200 font-sans mt-0.5">Sistem diuji coba secara ketat sebelum rilis ke tangan Anda.</div>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-xs font-mono font-bold text-sky-200 shrink-0">
            SLA 99.9% UPTIME READY
          </div>
        </div>
      </div>
    </section>
  );
};
