import React from 'react';
import { 
  MessageSquare, 
  Palette, 
  Code2, 
  CheckCircle2, 
  Award, 
  Laptop
} from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Konsultasi & Diskusi Kebutuhan (Gratis)',
    desc: 'Kami mendengarkan alur bisnis yang ingin Anda digitalisasi. Diskusi fitur, pilihan paket, dan penyesuaian budget tanpa paksaan.',
    icon: MessageSquare,
  },
  {
    step: '02',
    title: 'Perancangan Desain UI/UX Eksklusif',
    desc: 'Kami buatkan konsep mockup tampilan website dan aplikasi Android yang rapi, modern, dan mudah dipahami pengguna.',
    icon: Palette,
  },
  {
    step: '03',
    title: 'Koding & Integrasi Sistem (Clean Code)',
    desc: 'Tim engineer kami menulis kode yang ringan, cepat, dan aman. Kami rutin memberikan laporan perkembangan pengerjaan.',
    icon: Code2,
  },
  {
    step: '04',
    title: 'Testing Ketat & Uji Coba APK',
    desc: 'Aplikasi diuji langsung di berbagai perangkat Android dan browser untuk memastikan bebas lag, bebas crash, dan siap operasional.',
    icon: CheckCircle2,
  },
  {
    step: '05',
    title: 'Serah Terima Source Code & Garansi 1 Tahun',
    desc: 'Deploy website ke domain Anda, penyerahan file APK siap pasang, penyerahan 100% source code, dan panduan penggunaan.',
    icon: Award,
  },
];

export const WorkflowSection: React.FC = () => {
  return (
    <section id="workflow" className="py-20 bg-white border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono text-blue-700 shadow-2xs mb-3">
            <Laptop className="w-3.5 h-3.5 text-blue-600" />
            <span>ALUR KERJA PROFESIONAL & TERSTRUKTUR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            BAGAIMANA KAMI MEWUJUDKAN APLIKASI ANDA?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans">
            Dari sekadar ide di kepala sampai menjadi aplikasi siap pakai di tangan Anda. 
            Proses transparan, komunikatif, dan tepat waktu.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-black text-blue-600">
                      {s.step}
                    </span>
                    <div className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-sans font-bold text-sm text-slate-900 mb-2">
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
