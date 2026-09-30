import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { 
  Terminal, 
  Play, 
  Download, 
  RefreshCw, 
  Sliders, 
  FileCheck
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface BuildTask {
  name: string;
  duration: number;
  log: string;
}

export const GradleBuildSimulator: React.FC = () => {
  const [isBuilding, setIsBuilding] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(-1);
  const [buildLogs, setBuildLogs] = useState<string[]>([
    'Type: ./gradlew assembleRelease --scan',
    'Ready. Select flags and hit EXECUTE BUILD to compile simulated native APK.',
  ]);
  const [isCompleted, setIsCompleted] = useState(false);

  // Gradle options
  const [options, setOptions] = useState({
    r8FullMode: true,
    shrinkResources: true,
    pageAlign16Kb: true,
    v4Signing: true,
    configurationCache: true,
  });

  const terminalEndRef = useRef<HTMLDivElement>(null);

  const tasks: BuildTask[] = [
    { name: ':app:preBuild', duration: 180, log: 'Parsing dependency graph and AGP 8.8 plugins...' },
    { name: ':app:compileReleaseRenderscript', duration: 120, log: 'Skips legacy renderscript (Cleaned up for Vulkan).' },
    { name: ':app:generateReleaseBuildConfig', duration: 240, log: 'Injecting BuildKonfig: VERSION_CODE=4020, DEBUG=false' },
    { name: ':app:kspReleaseKotlin', duration: 420, log: 'Running Kotlin Symbol Processing (KSP) for Room & Hilt...' },
    { name: ':app:compileReleaseKotlin', duration: 520, log: 'Kotlin 2.1 Strong Skipping Compose compiler enabled.' },
    { name: ':app:externalNativeBuildRelease', duration: 600, log: options.pageAlign16Kb ? 'Clang C++20 compiling libvulkan.so with -Wl,-z,max-page-size=16384' : 'Clang C++20 compiling default 4KB page size' },
    { name: ':app:mergeReleaseShaders', duration: 200, log: 'GLSL -> SPIR-V bytecode bytecode compiling.' },
    { name: ':app:minifyReleaseWithR8', duration: 750, log: options.r8FullMode ? 'R8 FULL MODE: Dead code elimination & Dictionary obfuscation (-48% size).' : 'R8 compatibility mode.' },
    { name: ':app:shrinkReleaseResources', duration: 380, log: options.shrinkResources ? 'AAPT2: Stripped 412 unused vector drawables & layout XMLs.' : 'Resource shrinking disabled.' },
    { name: ':app:packageRelease', duration: 340, log: 'Creating uncompressed classes.dex and zip aligning byte boundaries...' },
    { name: ':app:signReleaseBundle', duration: 290, log: options.v4Signing ? 'apksigner: Signed with Keystore RSA-4096 (Schemes v2, v3, v4 generated).' : 'Legacy scheme v1 only.' },
  ];

  const handleStartBuild = () => {
    if (isBuilding) return;
    soundFx.playCompileStep();
    setIsBuilding(true);
    setIsCompleted(false);
    setCurrentTaskIndex(0);
    setBuildLogs([
      `$ ./gradlew assembleRelease --configuration-cache=${options.configurationCache}`,
      'Calculating task graph as configuration cache cannot be reused...',
      'Starting Gradle Daemon (daemon will stop automatically after inactivity)...',
    ]);
  };

  useEffect(() => {
    if (!isBuilding || currentTaskIndex < 0) return;

    if (currentTaskIndex < tasks.length) {
      const current = tasks[currentTaskIndex];
      const timer = setTimeout(() => {
        soundFx.playCompileStep();
        setBuildLogs((prev) => [
          ...prev,
          `> Task ${current.name} UP-TO-DATE`,
          `  ${current.log}`,
        ]);
        setCurrentTaskIndex((prev) => prev + 1);
      }, current.duration);

      return () => clearTimeout(timer);
    } else {
      // Completed!
      const finishTimer = setTimeout(() => {
        setIsBuilding(false);
        setIsCompleted(true);
        soundFx.playSuccess();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#3DDC84', '#00F0FF', '#A855F7', '#FFFFFF'],
        });
        setBuildLogs((prev) => [
          ...prev,
          '',
          'BUILD SUCCESSFUL in 3.9s',
          '84 actionable tasks: 11 executed, 73 up-to-date',
          'Output: app/build/outputs/apk/release/app-release.apk (11.8 MB)',
          'SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
        ]);
      }, 300);

      return () => clearTimeout(finishTimer);
    }
  }, [isBuilding, currentTaskIndex, options]);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [buildLogs]);

  const toggleOption = (key: keyof typeof options) => {
    soundFx.playClick(700, 0.03);
    setOptions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculatedSize = () => {
    let base = 48.0;
    if (options.r8FullMode) base -= 24.2;
    if (options.shrinkResources) base -= 9.4;
    if (options.pageAlign16Kb) base -= 2.6;
    return base.toFixed(1);
  };

  return (
    <section id="gradle-build" className="py-20 bg-[#080d1a] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#3DDC84] uppercase tracking-wider mb-2">
              <Terminal className="w-4 h-4" />
              <span>CI/CD PIPELINE // HEADLESS GRADLE COMPILER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
              INTERACTIVE GRADLE ENGINE TERMINAL
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Uji langsung siklus kompilasi rilis APK dengan optimasi R8, KSP, C++ NDK 16KB linking, 
              dan verifikasi skema tanda tangan v4. Lihat bagaimana ukuran APK menyusut drastis secara real-time.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl font-mono text-xs">
              <span className="text-slate-400">Original APK:</span>
              <span className="text-rose-400 font-bold ml-2 line-through">48.0 MB</span>
            </div>
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl font-mono text-xs">
              <span className="text-emerald-400 font-bold">Optimized APK:</span>
              <span className="text-white font-bold ml-2">{calculatedSize()} MB</span>
              <span className="text-emerald-400 text-[10px] ml-1">
                (-{(((48.0 - parseFloat(calculatedSize())) / 48.0) * 100).toFixed(0)}%)
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Controls & Compiler Switches */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="p-5 bg-slate-950/90 border border-slate-800 rounded-2xl">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold text-slate-200 uppercase">
                <Sliders className="w-4 h-4 text-[#3DDC84]" />
                <span>Compiler Optimization Flags</span>
              </div>

              <div className="space-y-3">
                <label 
                  onClick={() => toggleOption('r8FullMode')}
                  className="flex items-start justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all"
                >
                  <div className="pr-2">
                    <div className="text-xs font-mono font-bold text-white">R8 Full Mode Shrinking</div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5">Aggressive tree-shaking & ProGuard symbol scrambling</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={options.r8FullMode}
                    readOnly
                    className="mt-1 accent-[#3DDC84] w-4 h-4"
                  />
                </label>

                <label 
                  onClick={() => toggleOption('shrinkResources')}
                  className="flex items-start justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all"
                >
                  <div className="pr-2">
                    <div className="text-xs font-mono font-bold text-white">AAPT2 Resource Stripping</div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5">Discards unused drawables, layouts, and string pools</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={options.shrinkResources}
                    readOnly
                    className="mt-1 accent-[#3DDC84] w-4 h-4"
                  />
                </label>

                <label 
                  onClick={() => toggleOption('pageAlign16Kb')}
                  className="flex items-start justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all"
                >
                  <div className="pr-2">
                    <div className="text-xs font-mono font-bold text-white">16KB ELF Page Boundary</div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5">Compliant with Android 15 kernel architecture</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={options.pageAlign16Kb}
                    readOnly
                    className="mt-1 accent-[#3DDC84] w-4 h-4"
                  />
                </label>

                <label 
                  onClick={() => toggleOption('v4Signing')}
                  className="flex items-start justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all"
                >
                  <div className="pr-2">
                    <div className="text-xs font-mono font-bold text-white">APK Signature Scheme v4</div>
                    <div className="text-[11px] text-slate-400 font-sans mt-0.5">Streaming fs-verity signature block (.apk.idsig)</div>
                  </div>
                  <input
                    type="checkbox"
                    checked={options.v4Signing}
                    readOnly
                    className="mt-1 accent-[#3DDC84] w-4 h-4"
                  />
                </label>
              </div>

              {/* Action Button */}
              <div className="mt-5">
                <button
                  disabled={isBuilding}
                  onClick={handleStartBuild}
                  className={`w-full py-3.5 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    isBuilding
                      ? 'bg-slate-800 text-slate-400 cursor-not-allowed'
                      : 'bg-[#3DDC84] hover:bg-[#34c977] text-[#050811] shadow-lg shadow-[#3DDC84]/20 active:scale-98'
                  }`}
                >
                  {isBuilding ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#3DDC84]" />
                      <span>COMPILING GRADLE TASKS...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>EXECUTE GRADLE BUILD</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Build Success Artifact Card */}
            {isCompleted && (
              <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold text-white">app-release.apk</div>
                    <div className="text-[10px] font-mono text-emerald-300">
                      Signed & ZipAligned • {calculatedSize()} MB
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundFx.playClick(900, 0.05);
                    alert(`Simulated Artifact Download:\n\nFile: app-release.apk\nSize: ${calculatedSize()} MB\nSignature: v4 Certified\n16KB Page: Aligned`);
                  }}
                  className="p-2.5 bg-emerald-500 hover:bg-emerald-400 text-[#050811] rounded-xl font-mono text-xs font-bold transition-all shadow cursor-pointer"
                  title="Download Compiled Artifact"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Terminal Window */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="rounded-2xl border border-slate-800 bg-[#040711] overflow-hidden flex flex-col h-[520px] shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-[#0a0f1d] border-b border-slate-800 flex items-center justify-between select-none">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 font-semibold">
                    daemon@didev-runner: ~/workspace/android-core
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                  <span>AGP 8.8.0</span>
                  <span>JDK 21 (Temurin)</span>
                </div>
              </div>

              {/* Progress Bar during build */}
              {isBuilding && (
                <div className="w-full bg-slate-900 h-1 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3DDC84] to-cyan-400 transition-all duration-300"
                    style={{ width: `${((currentTaskIndex + 1) / tasks.length) * 100}%` }}
                  />
                </div>
              )}

              {/* Terminal Logs Viewport */}
              <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-1.5 leading-relaxed">
                {buildLogs.map((log, idx) => {
                  let color = 'text-slate-300';
                  if (log.startsWith('$') || log.startsWith('Type:')) color = 'text-cyan-400 font-semibold';
                  else if (log.includes('> Task')) color = 'text-[#3DDC84] font-bold';
                  else if (log.includes('BUILD SUCCESSFUL')) color = 'text-emerald-400 font-bold bg-emerald-950/40 p-1.5 rounded inline-block';
                  else if (log.includes('Output:')) color = 'text-cyan-300 font-semibold';
                  else if (log.includes('R8 FULL MODE')) color = 'text-purple-300 font-medium';

                  return (
                    <div key={idx} className={`${color} whitespace-pre-wrap break-all`}>
                      {log}
                    </div>
                  );
                })}
                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Bottom Status */}
              <div className="px-4 py-2 bg-[#0a0f1d] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${isBuilding ? 'bg-amber-400 animate-pulse' : 'bg-[#3DDC84]'}`} />
                  <span>{isBuilding ? 'COMPILE IN PROGRESS...' : isCompleted ? 'STATUS: SUCCESS' : 'DAEMON IDLE'}</span>
                </div>
                <span>JVM Memory: 1.2GB / 4.0GB Heap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
