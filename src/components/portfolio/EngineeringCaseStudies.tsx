import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowUpRight
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  clientIndustry: string;
  metrics: { label: string; value: string }[];
  problem: string;
  engineeringSolution: string[];
  techStack: string[];
  badgeColor: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'vulkan-engine',
    title: 'HyperSpeed 4K Vulkan Frame Pacing Engine',
    category: 'Graphics & NDK',
    clientIndustry: 'Computer Vision & Media Streaming',
    badgeColor: '#2563EB',
    metrics: [
      { label: 'Frame Pacing', value: '120 FPS Locked' },
      { label: 'Janky Frames', value: '0.00%' },
      { label: 'APK Footprint', value: '16.4 MB (-68%)' },
      { label: 'Battery Saver', value: '+35% Efficiency' },
    ],
    problem: 'Aplikasi streaming video sebelumnya berbasis WebView dan SurfaceView usang yang memicu thermal throttling parah dan frame drops hingga 24% pada perangkat mid-range.',
    engineeringSolution: [
      'Migrasi total pipeline rendering ke Vulkan 1.3 C++20 via Android NDK r27.',
      'Implementasi Choreographer VSYNC callback direct JNI untuk penyesuaian frame pacing.',
      'Split ABI packaging (arm64-v8a terisolasi), memangkas 35MB blob yang tidak diperlukan.',
      'Shader SPIR-V pre-compilation saat build time menggunakan Glslc.',
    ],
    techStack: ['Android NDK', 'C++20', 'Vulkan 1.3', 'Choreographer', 'CMake'],
  },
  {
    id: 'banking-vault',
    title: 'Tier-1 Banking Keymaster StrongBox APK',
    category: 'Security & Keystore',
    clientIndustry: 'Fintech & Payment Gateway',
    badgeColor: '#1D4ED8',
    metrics: [
      { label: 'Play Integrity', value: 'STRONG_INTEGRITY' },
      { label: 'Tamper Detection', value: '100% Intercept' },
      { label: 'Decompilation', value: 'Unreadable R8' },
      { label: 'Audit Score', value: 'OWASP MASVS L2' },
    ],
    problem: 'Klien menghadapi risiko tinggi kloning APK, injeksi Frida hooks, dan reverse engineering pada endpoint rahasia sistem transaksi finansial.',
    engineeringSolution: [
      'Penyimpanan cryptographic private key di Hardware TEE & StrongBox Keymaster.',
      'Proteksi runtime anti-tampering mendeteksi debugger, emulator spoofing, dan ptrace injection.',
      'R8 Obfuscation dengan kamus karakter unik Unicode non-alfabetik yang menghancurkan struktur decompiler Jadx.',
      'v4 APK Signature Scheme dengan verifikasi integritas fs-verity kernel level.',
    ],
    techStack: ['Jetpack Security', 'StrongBox TEE', 'R8 ProGuard', 'v4 Signing', 'Play Integrity'],
  },
  {
    id: 'audio-synth',
    title: 'Sub-5ms Ultra-Low Latency Audio Workstation',
    category: 'Realtime Audio NDK',
    clientIndustry: 'Music Production & Hardware Controllers',
    badgeColor: '#0284C7',
    metrics: [
      { label: 'Roundtrip Latency', value: '4.2 ms' },
      { label: 'Buffer Underruns', value: '0 Glitches' },
      { label: 'CPU Utilization', value: '11% on Octa-Core' },
      { label: 'Sample Rate', value: '96kHz / 24-bit' },
    ],
    problem: 'Sistem Android Java AudioTrack memiliki delay 45-80ms yang tidak dapat diterima untuk monitoring instrumen musik profesional.',
    engineeringSolution: [
      'Integrasi Google Oboe library dengan eksploitasi jalur eksklusif AAudio low-latency path.',
      'Lock-free single-producer single-consumer circular ring buffers di memori C++ native.',
      'Pengaturan Linux RT scheduling (`SCHED_FIFO`) pada audio pump callback thread.',
    ],
    techStack: ['Google Oboe', 'AAudio', 'ARM NEON SIMD', 'JNI DirectBuffer'],
  },
  {
    id: 'offline-gis',
    title: 'Offline-First Mission Critical GIS Mapping APK',
    category: 'Data & Systems',
    clientIndustry: 'Mining & Emergency Response',
    badgeColor: '#4F46E5',
    metrics: [
      { label: 'Vector Nodes', value: '500,000+ Nodes' },
      { label: 'Offline Sync', value: 'Zero Data Loss' },
      { label: 'Protobuf Delta', value: '12KB / sync' },
      { label: 'Cold Boot', value: '380 ms' },
    ],
    problem: 'Petugas lapangan beroperasi di remote area tanpa koneksi internet dengan database spasial puluhan gigabyte yang lambat dimuat.',
    engineeringSolution: [
      'Room 2.7 dengan SQLite Spatialite extension untuk geofencing query sub-milidetik.',
      'Rendering peta vektor offline berbasis MapLibre Native C++ engine.',
      'Protokol pertukaran delta menggunakan Protocol Buffers biner terkompresi Brotli saat mendapatkan sinyal 2G sejenak.',
    ],
    techStack: ['Room SQLite', 'Protocol Buffers', 'MapLibre Native', 'WorkManager'],
  },
];

export const EngineeringCaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  const handleSelect = (item: CaseStudy) => {
    soundFx.playClick(750, 0.04);
    setSelectedCase(item);
  };

  return (
    <section id="case-studies" className="py-20 bg-[#F1F5F9] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>PRODUCTION BENCHMARKS // PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            ENGINEERING CASE STUDIES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl font-sans">
            Bukan studi kasus fiktif atau landing page mockup. Ini adalah bukti rekayasa perangkat lunak Android
            tingkat tinggi yang menyelesaikan masalah nyata performa, memori, dan keamanan biner.
          </p>
        </div>

        {/* Case Study Grid Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {CASE_STUDIES.map((item) => {
            const isSelected = selectedCase.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 border-blue-600 shadow-md shadow-blue-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded font-bold"
                    style={{ backgroundColor: `${item.badgeColor}15`, color: item.badgeColor }}
                  >
                    {item.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </div>
                <h3 className="font-sans font-bold text-sm text-slate-900 line-clamp-2 mt-1">
                  {item.title}
                </h3>
                <div className="text-[11px] font-mono text-slate-500 mt-2 truncate">
                  {item.clientIndustry}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Case Deep Dive Card */}
        <div className="p-6 sm:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: selectedCase.badgeColor }}
                />
                <span className="text-xs font-mono font-semibold text-slate-500">
                  {selectedCase.category} • {selectedCase.clientIndustry}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900">
                {selectedCase.title}
              </h3>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2">
              {selectedCase.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics 4-Box */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {selectedCase.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-slate-500 mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          {/* Problem vs Engineering Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Problem */}
            <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200">
              <div className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wide mb-2">
                TANTANGAN TEKNIS AWAL:
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-sans leading-relaxed">
                {selectedCase.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
              <div className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wide mb-3">
                REKAYASA ARSITEKTUR KAMI:
              </div>
              <div className="space-y-2">
                {selectedCase.engineeringSolution.map((sol, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-800 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
