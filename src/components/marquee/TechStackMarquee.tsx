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
  { name: 'React 19 & Next.js', tag: 'WEB', icon: Globe },
  { name: 'Android Native & APK', tag: 'MOBILE', icon: Smartphone },
  { name: 'Bluetooth Thermal Print', tag: 'HARDWARE', icon: Printer },
  { name: 'Three.js WebGL 3D', tag: '3D GRAPHICS', icon: Cpu },
  { name: 'QRIS & Payment Gateway', tag: 'FINTECH', icon: QrCode },
  { name: 'PostgreSQL & Cloud API', tag: 'DATABASE', icon: Database },
  { name: '100% Full Source Code', tag: 'HAK MILIK', icon: Terminal },
  { name: 'Garansi Resmi 1 Tahun', tag: 'WARRANTY', icon: ShieldCheck },
];

export const TechStackMarquee: React.FC = () => {
  return (
    <div className="py-3 sm:py-4 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 border-y border-blue-700/60 text-white relative overflow-hidden shadow-inner">
      <div className="flex items-center">
        {/* Left Fixed Badge (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2 pl-6 pr-4 shrink-0 border-r border-blue-700/80 bg-blue-950 z-10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          <span className="text-[11px] font-mono font-bold tracking-wider text-sky-200 uppercase whitespace-nowrap">
            ENTERPRISE STACK:
          </span>
        </div>

        {/* Marquee Track (Smooth Infinite loop on all viewports) */}
        <div className="overflow-hidden w-full select-none">
          <div className="animate-marquee flex items-center gap-3">
            {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono shrink-0 backdrop-blur-xs"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                  <span className="font-bold text-white whitespace-nowrap">{item.name}</span>
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
