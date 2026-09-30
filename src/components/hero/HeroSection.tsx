import React, { useState } from 'react';
import { HeroScene3D, APK_LAYERS } from '../3d/HeroScene3D';
import type { ViewMode3D, ApkLayerInfo } from '../../types';
import { 
  Layers, 
  Smartphone, 
  Cpu, 
  Grid, 
  Terminal, 
  FileCode2, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HardDrive
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<ViewMode3D>('exploded');
  const [selectedLayer, setSelectedLayer] = useState<ApkLayerInfo>(APK_LAYERS[0]);

  const handleModeChange = (mode: ViewMode3D) => {
    soundFx.playClick(600, 0.05);
    setViewMode(mode);
  };

  const handleSelectLayer = (layer: ApkLayerInfo) => {
    setSelectedLayer(layer);
  };

  return (
    <section id="hero-3d" className="relative pt-6 pb-20 overflow-hidden bg-radial-gradient">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges: Proudly Anti-AI Slop */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3DDC84]/10 border border-[#3DDC84]/30 rounded-full text-xs font-mono text-[#3DDC84]">
            <span className="w-2 h-2 rounded-full bg-[#3DDC84] animate-pulse" />
            <span>KOTLIN 2.1 & JETPACK COMPOSE</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 rounded-full text-xs font-mono text-cyan-400">
            <Cpu className="w-3.5 h-3.5" />
            <span>C++20 NDK • VULKAN 1.3</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-950/40 border border-rose-500/30 rounded-full text-xs font-mono text-rose-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ZERO AI SLOP • 100% PRODUCTION-GRADE CRAFT</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
              ENGINEERED FOR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DDC84] via-emerald-300 to-cyan-400">
                RAW ANDROID
              </span> <br />
              PERFORMANCE.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Kami tidak membungkus WebView lambat atau membuat template murahan. Kami merancang arsitektur aplikasi dan APK Android dari level terbawah: 
              <strong className="text-white font-semibold"> Dalvik/ART bytecode optimization</strong>, 
              <strong className="text-white font-semibold"> Choreographer 120Hz zero-jank frame pacing</strong>, 
              <strong className="text-white font-semibold"> C++ NDK SIMD acceleration</strong>, dan 
              <strong className="text-white font-semibold"> v4 APK signature hardening</strong>.
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => {
                  soundFx.playClick(850, 0.05);
                  onNavigate('apk-analyzer');
                }}
                className="flex items-center gap-2 px-5 py-3 bg-[#3DDC84] hover:bg-[#34c776] text-[#050811] font-mono font-bold text-xs rounded-xl shadow-lg shadow-[#3DDC84]/25 transition-all hover:translate-y-[-1px] active:scale-95 cursor-pointer"
              >
                <FileCode2 className="w-4 h-4" />
                <span>INSPECT LIVE APK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => {
                  soundFx.playClick(600, 0.05);
                  onNavigate('gradle-build');
                }}
                className="flex items-center gap-2 px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-mono text-xs rounded-xl transition-all cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>RUN GRADLE SIMULATOR</span>
              </button>
            </div>

            {/* Quick Teardown Highlights */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="text-slate-400 text-[11px]">PAGE SIZE ALIGNED</div>
                <div className="text-emerald-400 font-bold text-sm mt-0.5">16 KB ELF Native</div>
                <div className="text-[10px] text-slate-500 mt-1">Android 15 requirement verified</div>
              </div>
              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="text-slate-400 text-[11px]">BYTECODE SHRINKING</div>
                <div className="text-cyan-400 font-bold text-sm mt-0.5">R8 Full Mode + PGO</div>
                <div className="text-[10px] text-slate-500 mt-1">-42% classes.dex payload</div>
              </div>
            </div>
          </div>

          {/* 3D Interactive Canvas & Controls */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {/* View Mode Switcher Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-950/80 border border-slate-800/90 rounded-xl backdrop-blur-md">
              <div className="flex items-center gap-1.5 px-2 text-[11px] font-mono text-slate-400">
                <span className="text-[#3DDC84] font-bold">VIEWPORT:</span>
                <span>Select 3D Camera & Layer Mode</span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleModeChange('exploded')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                    viewMode === 'exploded'
                      ? 'bg-[#3DDC84] text-[#050811] font-bold shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>APK Exploded</span>
                </button>

                <button
                  onClick={() => handleModeChange('chassis')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                    viewMode === 'chassis'
                      ? 'bg-cyan-400 text-[#050811] font-bold shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Chassis</span>
                </button>

                <button
                  onClick={() => handleModeChange('circuit')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                    viewMode === 'circuit'
                      ? 'bg-purple-400 text-[#050811] font-bold shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Motherboard</span>
                </button>

                <button
                  onClick={() => handleModeChange('wireframe')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                    viewMode === 'wireframe'
                      ? 'bg-emerald-400 text-[#050811] font-bold shadow'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>Wireframe</span>
                </button>
              </div>
            </div>

            {/* The 3D Canvas */}
            <HeroScene3D
              viewMode={viewMode}
              selectedLayerId={selectedLayer.id}
              onSelectLayer={handleSelectLayer}
            />

            {/* Layer Quick Selection Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {APK_LAYERS.map((layer) => {
                const isSelected = selectedLayer.id === layer.id;
                return (
                  <button
                    key={layer.id}
                    onClick={() => {
                      soundFx.playClick(700, 0.04);
                      handleSelectLayer(layer);
                      if (viewMode !== 'exploded') setViewMode('exploded');
                    }}
                    className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 border-[#3DDC84] shadow-md shadow-[#3DDC84]/15'
                        : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: layer.color }}
                      />
                      <span className="text-[10px] font-mono text-slate-500">
                        {layer.sizeMb} MB
                      </span>
                    </div>
                    <div className="text-[11px] font-mono font-bold text-slate-200 truncate mt-1">
                      {layer.id.toUpperCase()}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Layer Deep Technical Inspector Card */}
            <div className="p-4 bg-slate-950/90 border border-slate-800/90 rounded-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full shadow"
                    style={{ backgroundColor: selectedLayer.color }}
                  />
                  <div>
                    <h2 className="text-sm font-mono font-bold text-white tracking-wide">
                      {selectedLayer.name}
                    </h2>
                    <span className="text-[11px] font-mono text-slate-400">
                      Target File: {selectedLayer.fileName}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-700 rounded-lg text-xs font-mono text-emerald-400 font-semibold">
                  <HardDrive className="w-3.5 h-3.5" />
                  <span>{selectedLayer.sizeMb} MB</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-3">
                {selectedLayer.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                {selectedLayer.techDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between p-2 rounded-lg bg-slate-900/60 border border-slate-800/60"
                  >
                    <span className="text-slate-400 text-[11px]">{detail.label}:</span>
                    <span className="text-slate-200 font-medium text-right text-[11px] max-w-[60%]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hardcore Spec Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-2xl flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#3DDC84]/10 text-[#3DDC84] border border-[#3DDC84]/20">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-white">120 FPS</div>
              <div className="text-xs text-slate-400">Choreographer Locked</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Zero dropped frames on high-refresh OLED</div>
            </div>
          </div>

          <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-2xl flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-white">C++ NDK</div>
              <div className="text-xs text-slate-400">Direct Vulkan Pipeline</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Heavy compute isolated from main thread</div>
            </div>
          </div>

          <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-2xl flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-white">-65% APK</div>
              <div className="text-xs text-slate-400">R8 Full Shrinking</div>
              <div className="text-[10px] text-slate-500 mt-0.5">ProGuard dictionary symbol scrambling</div>
            </div>
          </div>

          <div className="p-4 bg-[#080d1a] border border-slate-800 rounded-2xl flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-white">v4 Signing</div>
              <div className="text-xs text-slate-400">Play Integrity Attested</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Hardware-backed Keymaster protection</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
