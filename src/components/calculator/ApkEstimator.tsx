import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Sliders
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const ApkEstimator: React.FC = () => {
  const [appType, setAppType] = useState<'utility' | 'business' | 'enterprise' | 'ndk_engine'>('enterprise');
  const [graphicsEngine, setGraphicsEngine] = useState<'compose_only' | 'ndk_vulkan' | 'audio_dsp'>('compose_only');
  const [securityTier, setSecurityTier] = useState<'standard' | 'hardened' | 'banking_vault'>('hardened');
  const [offlineSync, setOfflineSync] = useState<'none' | 'room_json' | 'room_protobuf'>('room_protobuf');
  const [copied, setCopied] = useState(false);

  const calculateEstimate = () => {
    let sizeMb = 8.5;
    let memoryRss = 18;
    let sprints = 4;

    if (appType === 'utility') { sizeMb += 2; sprints = 2; }
    else if (appType === 'business') { sizeMb += 6; sprints = 4; }
    else if (appType === 'enterprise') { sizeMb += 10; sprints = 6; memoryRss += 10; }
    else if (appType === 'ndk_engine') { sizeMb += 14; sprints = 8; memoryRss += 22; }

    if (graphicsEngine === 'ndk_vulkan') { sizeMb += 8; sprints += 2; memoryRss += 16; }
    if (graphicsEngine === 'audio_dsp') { sizeMb += 4; sprints += 2; }

    if (securityTier === 'banking_vault') { sprints += 1; }
    if (offlineSync === 'room_protobuf') { sizeMb -= 2; }

    return {
      apkSize: `${sizeMb.toFixed(1)} MB`,
      memory: `${memoryRss} MB RSS`,
      sprints: `${sprints} Sprints (2-week cadence)`,
      framerate: graphicsEngine === 'ndk_vulkan' ? '120 FPS Vulkan' : '120 FPS Compose',
    };
  };

  const estimate = calculateEstimate();

  const handleCopySpec = () => {
    soundFx.playClick(950, 0.05);
    const specText = `### DIDEV ANDROID APP ARCHITECTURE SPEC
- Project Tier: ${appType.toUpperCase()}
- Graphics & UI: ${graphicsEngine.toUpperCase()}
- Security & Obfuscation: ${securityTier.toUpperCase()}
- Persistence: ${offlineSync.toUpperCase()}
- Estimated Output APK: ${estimate.apkSize}
- Runtime RSS Footprint: ${estimate.memory}
- Target OS: Android 15 (API 35) with 16KB Page Alignment & v4 Signature
Generated via DIDEV Android Forge (https://didevelopment.dev)`;

    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="estimator" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">
            <Sliders className="w-4 h-4" />
            <span>INTERACTIVE SPEC BUILDER // ARCHITECTURE ESTIMATOR</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            BUILD YOUR NATIVE ANDROID SPECIFICATION
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl font-sans">
            Tentukan parameter teknis aplikasi Android Anda: kebutuhan C++ NDK, keamanan hardware Keymaster, 
            dan model persistence biner. Dapatkan estimasi footprint APK dan arsitektur langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configuration Form */}
          <div className="lg:col-span-7 space-y-6">
            {/* App Scope */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-3">
                1. Kategori & Kompleksitas Aplikasi:
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {[
                  { id: 'utility', label: 'Utility / Micro-Tool' },
                  { id: 'business', label: 'Business & SaaS Client' },
                  { id: 'enterprise', label: 'Enterprise High-Concurrency' },
                  { id: 'ndk_engine', label: 'Hardcore NDK / Game Engine' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick(700, 0.03);
                      setAppType(item.id as typeof appType);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      appType === item.id
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Graphics Engine */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-3">
                2. Rendering Engine & Hardware Interface:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                {[
                  { id: 'compose_only', label: 'Jetpack Compose 120Hz' },
                  { id: 'ndk_vulkan', label: 'Vulkan 1.3 C++ NDK' },
                  { id: 'audio_dsp', label: 'Realtime Audio (Oboe NDK)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick(700, 0.03);
                      setGraphicsEngine(item.id as typeof graphicsEngine);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      graphicsEngine === item.id
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Security Hardening */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-3">
                3. Tingkat Keamanan & Obfuscation:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                {[
                  { id: 'standard', label: 'Standard R8 Shrinking' },
                  { id: 'hardened', label: 'R8 Dictionary + RootBeer' },
                  { id: 'banking_vault', label: 'StrongBox TEE + v4 Sign' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick(700, 0.03);
                      setSecurityTier(item.id as typeof securityTier);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      securityTier === item.id
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Offline Persistence */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <label className="block text-xs font-mono font-bold text-slate-900 uppercase mb-3">
                4. Arsitektur Data Offline:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                {[
                  { id: 'none', label: 'Cloud Only (No Local DB)' },
                  { id: 'room_json', label: 'Room SQLite + JSON' },
                  { id: 'room_protobuf', label: 'Room 2.7 + Protobuf Biner' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      soundFx.playClick(700, 0.03);
                      setOfflineSync(item.id as typeof offlineSync);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      offlineSync === item.id
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Realtime Output Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 bg-white border border-slate-200 rounded-3xl shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-600" />
                  <span className="font-mono font-bold text-sm text-slate-900">
                    SPECIFICATION MANIFEST
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                  REALTIME CALCULATED
                </span>
              </div>

              {/* Calculated Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-[11px] font-mono text-slate-500">Target Output APK:</div>
                  <div className="text-xl font-mono font-extrabold text-blue-600 mt-1">
                    {estimate.apkSize}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">R8 & WebP Stripped</div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-[11px] font-mono text-slate-500">Memory Baseline:</div>
                  <div className="text-xl font-mono font-extrabold text-sky-600 mt-1">
                    {estimate.memory}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">Zero LeakCanary leaks</div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-[11px] font-mono text-slate-500">Display Pacing:</div>
                  <div className="text-sm font-mono font-bold text-slate-800 mt-1">
                    {estimate.framerate}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">VSYNC synchronized</div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="text-[11px] font-mono text-slate-500">Timeline Scope:</div>
                  <div className="text-sm font-mono font-bold text-slate-800 mt-1">
                    {estimate.sprints}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">Agile CI/CD Sprints</div>
                </div>
              </div>

              {/* Compliance Verification List */}
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs font-mono text-slate-700 mb-6">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Android 15 (API 35) & 16KB Page Size Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Full v2, v3, v4 Cryptographic APK Signing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  <span>Kotlin 2.1 Strong Skipping Mode Activated</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleCopySpec}
                  className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-blue-600" />
                      <span>COPIED SPEC TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      <span>COPY ARCHITECTURE BLUEPRINT</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    soundFx.playSuccess();
                    alert(`Spesifikasi Terkonfirmasi!\n\nTarget APK: ${estimate.apkSize}\nRuntime Memory: ${estimate.memory}\nSiap untuk tahap kompilasi dan konsultasi arsitektur native.`);
                  }}
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-mono text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-98 transition-all cursor-pointer"
                >
                  <span>LOCK ARCHITECTURE & CONTACT ENGINEER</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
