import React from 'react';
import { Smartphone, ShieldCheck, Binary, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03060d] border-t border-slate-800 text-slate-400 py-16 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#3DDC84] flex items-center justify-center text-[#050811]">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-white font-extrabold text-base tracking-wider">
                DIDEV<span className="text-[#3DDC84]">.ANDROID</span>
              </span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm mb-4">
              Pusat riset, perancangan arsitektur, dan rekayasa aplikasi biner Android APK native performa tinggi. 
              Bebas dari kode AI murahan, berlandaskan prinsip solid AOSP, C++ NDK, dan Jetpack Compose.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#3DDC84]" />
              <span>AOSP Master Build • Android 15 (API 35) Baseline</span>
            </div>
          </div>

          {/* Col 2: Quick ADB Cheatsheet */}
          <div>
            <div className="text-slate-200 font-bold uppercase tracking-wider mb-3">
              ADB CHEATSHEET
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="hover:text-emerald-400 transition-colors">
                <code>adb shell dumpsys gfxinfo</code>
              </li>
              <li className="hover:text-emerald-400 transition-colors">
                <code>adb install-multiple -r</code>
              </li>
              <li className="hover:text-emerald-400 transition-colors">
                <code>apksigner verify --verbose</code>
              </li>
              <li className="hover:text-emerald-400 transition-colors">
                <code>./gradlew -Dorg.gradle.caching=true</code>
              </li>
            </ul>
          </div>

          {/* Col 3: Architecture Pillars */}
          <div>
            <div className="text-slate-200 font-bold uppercase tracking-wider mb-3">
              CORE PILLARS
            </div>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>C++20 NDK SIMD & Vulkan</span>
              </li>
              <li className="flex items-center gap-2">
                <Binary className="w-3.5 h-3.5 text-[#3DDC84]" />
                <span>R8 Full Mode Obfuscator</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
                <span>Hardware TEE Keymaster</span>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                <span>16KB ELF Boundary Aligned</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} DIDEVELOPMENT. All rights reserved. Murni Rekayasa Native.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Built with precision in React & Three.js WebGL</span>
            <span>•</span>
            <span className="text-[#3DDC84]">100% Anti-AI Slop</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
