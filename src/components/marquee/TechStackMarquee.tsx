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
    <div className="py-3.5 sm:py-4 bg-[#F8FAFC] border-y border-slate-200 text-slate-700 relative overflow-hidden">
      <div className="flex items-center">
        {/* Left Fixed Badge (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2 pl-6 pr-4 shrink-0 border-r border-slate-200 bg-[#F8FAFC] z-10">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#256BE0] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#256BE0]"></span>
          </span>
          <span className="text-[11px] font-sans font-bold tracking-wider text-[#102E61] uppercase whitespace-nowrap">
            TEKNOLOGI & STANDAR:
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
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200/80 text-xs font-sans font-medium text-slate-800 shrink-0 shadow-2xs"
                >
                  <Icon className="w-3.5 h-3.5 text-[#256BE0] shrink-0" />
                  <span className="font-semibold text-[#102E61] whitespace-nowrap">{item.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-[#256BE0] font-semibold">
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
