import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Printer, 
  Database, 
  Cpu, 
  ShieldCheck, 
  QrCode,
  Terminal
} from 'lucide-react';

const TECH_ITEMS = [
  { name: 'React 19 & Next.js', tag: 'WEB FRAMEWORK', icon: Globe },
  { name: 'Android Native & APK', tag: 'MOBILE OS', icon: Smartphone },
  { name: 'Bluetooth Thermal Print', tag: 'POS HARDWARE', icon: Printer },
  { name: 'Three.js WebGL 3D', tag: 'INTERACTIVE', icon: Cpu },
  { name: 'QRIS & Payment Gateway', tag: 'FINTECH', icon: QrCode },
  { name: 'PostgreSQL & Cloud API', tag: 'DATABASE', icon: Database },
  { name: '100% Full Source Code', tag: 'HAK MILIK', icon: Terminal },
  { name: 'Garansi Resmi 1 Tahun', tag: 'WARRANTY', icon: ShieldCheck },
];

export const TechStackMarquee: React.FC = () => {
  return (
    <div className="py-6 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 border-y border-blue-700/60 text-white relative overflow-hidden shadow-md">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left Label */}
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-wider text-sky-200 uppercase">
              STANDAR TEKNOLOGI ENTERPRISE:
            </span>
          </div>

          {/* Tech Badges Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {TECH_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 transition-all text-xs font-mono backdrop-blur-xs shadow-xs"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-300" />
                  <span className="font-bold text-white">{item.name}</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-sky-500/30 text-sky-200 font-semibold">
                    {item.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
