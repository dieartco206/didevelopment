import React from 'react';
import { 
  MessageSquare, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Award, 
  Workflow
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
    <section id="workflow" className="py-16 sm:py-20 bg-white border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono font-bold text-blue-700 shadow-2xs mb-3">
            <Workflow className="w-3.5 h-3.5 text-blue-600" />
            <span>ALUR KERJA TRANSPARAN</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            5 LANGKAH MENUJU APLIKASI SIAP PAKAI
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-sans">
            Dari diskusi awal hingga penyerahan sistem. Terstruktur, tepat waktu, dan komunikatif:
          </p>
        </div>

        {/* Steps Grid: Responsive 1 -> 2 -> 5 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden"
              >
                {/* Top Accent Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400 group-hover:h-1.5 transition-all" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-mono font-black text-blue-600 group-hover:scale-105 transition-transform">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-base text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
