import React, { useState } from 'react';
import type { AndroidApiFeature } from '../../types';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Lock, 
  Cpu
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

const ANDROID_VERSIONS: AndroidApiFeature[] = [
  {
    apiLevel: 35,
    codename: 'Vanilla Ice Cream',
    version: 'Android 15',
    releaseYear: 2024,
    isCurrentTarget: true,
    keyChanges: [
      'Wajib 16KB ELF page sizes untuk seluruh native .so libraries',
      'Enforced Edge-to-Edge window layout secara default (tidak bisa dimatikan)',
      'Private Space isolation: Data dipartisi terpisah pada profil privat',
      'Screen recording detection API untuk aplikasi perbankan & keamanan tinggi',
    ],
    securityRules: 'Hardware TEE Keymaster + Restricted background alarms',
    ndkRequirement: 'NDK r27+ dengan linker flag -Wl,-z,max-page-size=16384',
  },
  {
    apiLevel: 34,
    codename: 'Upside Down Cake',
    version: 'Android 14',
    releaseYear: 2023,
    isCurrentTarget: false,
    keyChanges: [
      'Wajib deklarasi Foreground Service Types spesifik di AndroidManifest',
      'Granular Photo Access: User bisa memilih partial foto yang dibagikan',
      'Non-linear font scaling sampai 200% tanpa UI clipping',
      'Strict broadcast receiver registration flags (RECEIVER_EXPORTED)',
    ],
    securityRules: 'Minimum installable targetSdk API 23 (blokir malware lama)',
    ndkRequirement: 'OpenXR & Vulkan 1.3 baseline graphics drivers',
  },
  {
    apiLevel: 33,
    codename: 'Tiramisu',
    version: 'Android 13',
    releaseYear: 2022,
    isCurrentTarget: false,
    keyChanges: [
      'Runtime notification permission (POST_NOTIFICATIONS) wajib dialog izin',
      'Per-app language preferences independen dari bahasa sistem OS',
      'Themed App Icons monochrome vector drawables',
      'Predictive back gesture swipe animation preview',
    ],
    securityRules: 'Scoped Storage 3.0: Pemisahan izin Audio, Video, dan Image',
    ndkRequirement: 'Clang compiler C++20 default standard',
  },
  {
    apiLevel: 31,
    codename: 'Snow Cone',
    version: 'Android 12',
    releaseYear: 2021,
    isCurrentTarget: false,
    keyChanges: [
      'Material You (Monet) dynamic color extraction dari wallpaper user',
      'Native SplashScreen API terstandarisasi saat cold-booting',
      'Camera & Microphone status indicators pada status bar',
      'Approximate vs Precise Location access switches',
    ],
    securityRules: 'PendingIntent mutable/immutable flag wajib dideklarasikan',
    ndkRequirement: 'Vulkan ray-tracing extensions preview',
  },
];

export const AndroidMatrix15: React.FC = () => {
  const [selectedApi, setSelectedApi] = useState<AndroidApiFeature>(ANDROID_VERSIONS[0]);

  const handleSelect = (ver: AndroidApiFeature) => {
    soundFx.playClick(820, 0.04);
    setSelectedApi(ver);
  };

  return (
    <section id="android-matrix" className="py-20 bg-[#080d1a] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#3DDC84] uppercase tracking-wider mb-2">
            <Activity className="w-4 h-4" />
            <span>COMPATIBILITY LAB // OS KERNEL & APIS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            ANDROID 15 (API 35) & OS MATRIX READINESS
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl">
            Aplikasi Android modern tidak boleh sekadar &quot;berjalan di emulator&quot;. Kami memastikan setiap baris kode
            memenuhi regulasi keamanan ketat Android 15: proteksi 16KB memory page size, edge-to-edge insets, 
            dan sandbox foreground service compliance.
          </p>
        </div>

        {/* API Switcher Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {ANDROID_VERSIONS.map((item) => {
            const isSelected = selectedApi.apiLevel === item.apiLevel;
            return (
              <button
                key={item.apiLevel}
                onClick={() => handleSelect(item)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono font-bold text-sm text-white">
                    {item.version}
                  </span>
                  {item.isCurrentTarget && (
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-[#3DDC84]/20 text-[#3DDC84] border border-[#3DDC84]/40">
                      TARGET
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-cyan-400 font-semibold">
                  API {item.apiLevel} • {item.codename}
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">
                  Release {item.releaseYear}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected API Deep Dive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Key Requirements */}
          <div className="lg:col-span-8 p-6 bg-slate-950/90 border border-slate-800 rounded-3xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <div>
                <h3 className="text-lg font-bold font-sans text-white">
                  Spesifikasi Wajib {selectedApi.version} ({selectedApi.codename})
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Target SDK API {selectedApi.apiLevel} Compliance Blueprint
                </span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>100% Tested Ready</span>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {selectedApi.keyChanges.map((change, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono font-bold">
                    {idx + 1}
                  </div>
                  <div className="text-xs text-slate-300 font-sans leading-relaxed">
                    {change}
                  </div>
                </div>
              ))}
            </div>

            {/* Hardware & NDK Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                  <Lock className="w-3.5 h-3.5 text-rose-400" />
                  <span>Security Sandbox Rule:</span>
                </div>
                <div className="text-slate-200 font-semibold">{selectedApi.securityRules}</div>
              </div>

              <div className="p-3 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="text-slate-400 flex items-center gap-1.5 mb-1">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>NDK Linker Requirement:</span>
                </div>
                <div className="text-slate-200 font-semibold">{selectedApi.ndkRequirement}</div>
              </div>
            </div>
          </div>

          {/* Right Checklist Box */}
          <div className="lg:col-span-4 p-6 bg-slate-950/90 border border-slate-800 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="text-sm font-mono font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3DDC84]" />
                <span>Pre-Launch Hardening Checklist</span>
              </div>

              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Strict android:exported flags checked</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Edge-to-edge window insets padding</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>16KB native elf page size verified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>LeakCanary zero memory leaks verified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Predictive back gesture enabled</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>v2, v3, and v4 signing key validation</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-xl bg-[#3DDC84]/10 border border-[#3DDC84]/30 text-xs font-mono text-[#3DDC84]">
              Google Play 2025 Target SDK Mandate: 100% Passed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
