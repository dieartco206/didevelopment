import React from 'react';
import {
  GolangIcon,
  FlutterIcon,
  ReactIcon,
  VueIcon,
  TypeScriptIcon,
  PostgresIcon,
  DockerIcon,
  TailwindIcon
} from '../icons/BrandIcons';

interface TechItem {
  name: string;
  category: string;
  brandColor: string;
  icon: React.FC<{ size?: number; className?: string }>;
}

const TECH_ITEMS: TechItem[] = [
  { name: 'Golang', category: 'High-Perf Backend', brandColor: '#00ADD8', icon: GolangIcon },
  { name: 'Flutter', category: 'Cross-Platform Mobile', brandColor: '#02569B', icon: FlutterIcon },
  { name: 'React.js', category: 'Modern Frontend', brandColor: '#0284C7', icon: ReactIcon },
  { name: 'Vue.js', category: 'Reactive UI', brandColor: '#42B883', icon: VueIcon },
  { name: 'TypeScript', category: 'Type-Safe Logic', brandColor: '#3178C6', icon: TypeScriptIcon },
  { name: 'PostgreSQL', category: 'Relational Database', brandColor: '#336791', icon: PostgresIcon },
  { name: 'Docker', category: 'Cloud Deployment', brandColor: '#2496ED', icon: DockerIcon },
  { name: 'Tailwind CSS', category: 'Modern Styling', brandColor: '#06B6D4', icon: TailwindIcon },
];

export const TechStackMarquee: React.FC = () => {
  return (
    <div className="py-4 bg-slate-50/90 border-y border-slate-200 text-slate-700 relative overflow-hidden">
      {/* Subtle Dot Matrix Texture */}
      <div className="absolute inset-0 artistic-dot-grid opacity-30 pointer-events-none" />

      {/* Edge Fade Gradients for Cinematic Flow */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

      <div className="flex items-center relative z-20">
        {/* Left Fixed Badge (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2 pl-6 pr-4 shrink-0 border-r border-slate-200 bg-white/90 rounded-r-xl py-1.5 shadow-2xs z-30">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
          </span>
          <span className="text-[11px] font-sans font-extrabold tracking-wider text-[#0F172A] uppercase whitespace-nowrap">
            TEKNOLOGI RESMI:
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
                  className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200/90 text-xs font-sans font-medium text-slate-700 shrink-0 shadow-2xs hover:border-[#2563EB] hover:shadow-xs transition-all duration-200 cursor-default"
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform duration-200" />
                  <span className="font-bold text-[#0F172A] whitespace-nowrap shrink-0">{item.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium whitespace-nowrap shrink-0">
                    {item.category}
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
