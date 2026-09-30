import React, { useState } from 'react';
import type { ApkSample } from '../../types';
import { 
  FileCode2, 
  ShieldCheck, 
  Binary, 
  HardDrive, 
  CheckCircle2, 
  AlertTriangle,
  FolderArchive,
  Code2,
  Cpu
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

const SAMPLE_APKS: ApkSample[] = [
  {
    id: 'crypto-vault',
    appName: 'NexusVault Pro',
    packageName: 'dev.didevelopment.nexusvault',
    versionName: '4.2.0-release',
    versionCode: 4020,
    minSdk: 26,
    targetSdk: 35,
    totalSizeMb: 14.8,
    signatureScheme: 'v2, v3, v4 (Keymaster Attested)',
    is16KbAligned: true,
    dexFilesCount: 2,
    methodsCount: 38450,
    permissions: [
      { name: 'android.permission.USE_BIOMETRIC', level: 'Normal', desc: 'Allows biometric hardware authentication (Fingerprint / Face Unlock)' },
      { name: 'android.permission.ACCESS_NETWORK_STATE', level: 'Normal', desc: 'Queries network socket availability before offline queue sync' },
      { name: 'android.permission.POST_NOTIFICATIONS', level: 'Dangerous', desc: 'Requires runtime permission prompt on Android 13+ (API 33)' },
      { name: 'android.permission.SCHEDULE_EXACT_ALARM', level: 'Dangerous', desc: 'Restricted exact timing for cryptographic token invalidation' },
    ],
    breakdown: [
      { name: 'classes.dex', sizeKb: 5800, pct: 39.2, color: '#2563EB' },
      { name: 'lib/arm64-v8a/libcrypto_core.so', sizeKb: 4200, pct: 28.4, color: '#4F46E5' },
      { name: 'res/ & resources.arsc', sizeKb: 2600, pct: 17.6, color: '#0EA5E9' },
      { name: 'assets/cert_roots.dat', sizeKb: 1400, pct: 9.5, color: '#0284C7' },
      { name: 'META-INF/ (Signatures)', sizeKb: 780, pct: 5.3, color: '#1E3A8A' },
    ],
    kotlinEquivalent: `// Kotlin 2.1 Coroutine Worker
@Singleton
class HardwareVaultRepository @Inject constructor(
    private val keyStore: KeyStore,
    private val cryptoDispatcher: CoroutineDispatcher = Dispatchers.Default
) {
    suspend fun decryptPayload(encryptedBytes: ByteArray): Result<ByteArray> = withContext(cryptoDispatcher) {
        runCatching {
            val key = keyStore.getKey(KEY_ALIAS, null) as SecretKey
            val cipher = Cipher.getInstance("AES/GCM/NoPadding")
            cipher.init(Cipher.DECRYPT_MODE, key, GCMParameterSpec(128, IV))
            cipher.doFinal(encryptedBytes)
        }
    }
}`,
    smaliPreview: `.class public final Ldev/didevelopment/nexusvault/HardwareVaultRepository;
.super Ljava/lang/Object;
.source "HardwareVaultRepository.kt"

# direct methods
.method public final decryptPayload([BLkotlin/coroutines/Continuation;)Ljava/lang/Object;
    .registers 6
    .annotation system Ldalvik/annotation/Signature;
        value = { "([B", "Lkotlin/coroutines/Continuation<*>;", ")Ljava/lang/Object;" }
    .end annotation

    iget-object v0, p0, Ldev/didevelopment/nexusvault/HardwareVaultRepository;->cryptoDispatcher:Lkotlinx/coroutines/CoroutineDispatcher;
    new-instance v1, Ldev/didevelopment/nexusvault/HardwareVaultRepository$decrypt$2;
    const/4 v2, 0x0
    invoke-direct {v1, p0, p1, v2}, Ldev/didevelopment/nexusvault/HardwareVaultRepository$decrypt$2;-><init>(Ldev/didevelopment/nexusvault/HardwareVaultRepository;[BLkotlin/coroutines/Continuation;)V
    invoke-static {v0, v1, p2}, Lkotlinx/coroutines/BuildersKt;->withContext(Lkotlin/coroutines/CoroutineContext;Lkotlin/jvm/functions/Function2;Lkotlin/coroutines/Continuation;)Ljava/lang/Object;
    move-result-object p1
    return-object p1
.end method`,
  },
  {
    id: 'vulkan-engine',
    appName: 'AeroRender 3D Engine',
    packageName: 'dev.didevelopment.aerorender',
    versionName: '1.9.4-ndk',
    versionCode: 1940,
    minSdk: 28,
    targetSdk: 35,
    totalSizeMb: 26.4,
    signatureScheme: 'v2, v3, v4',
    is16KbAligned: true,
    dexFilesCount: 1,
    methodsCount: 14200,
    permissions: [
      { name: 'android.permission.HIGH_SAMPLING_RATE_SENSORS', level: 'Normal', desc: 'Allows 200Hz gyroscope polling for zero-latency camera tracking' },
      { name: 'android.permission.WAKE_LOCK', level: 'Normal', desc: 'Prevents CPU throttle during continuous Vulkan render loop' },
    ],
    breakdown: [
      { name: 'lib/arm64-v8a/libaerovulkan.so', sizeKb: 16800, pct: 63.6, color: '#2563EB' },
      { name: 'assets/shaders.spv & models', sizeKb: 5400, pct: 20.5, color: '#0EA5E9' },
      { name: 'classes.dex', sizeKb: 2100, pct: 8.0, color: '#0284C7' },
      { name: 'res/ & resources.arsc', sizeKb: 1500, pct: 5.7, color: '#38BDF8' },
      { name: 'META-INF/', sizeKb: 600, pct: 2.2, color: '#1E3A8A' },
    ],
    kotlinEquivalent: `// JNI Vulkan Surface Lifecycle Bridge
class VulkanSurfaceView(context: Context) : SurfaceView(context), SurfaceHolder.Callback {
    private external fun nativeInitVulkan(surface: Surface, width: Int, height: Int): Long
    private external fun nativeRenderFrame(enginePtr: Long): Int
    private external fun nativeDestroy(enginePtr: Long)
    
    companion object {
        init {
            System.loadLibrary("aerovulkan")
        }
    }
}`,
    smaliPreview: `.class public final Ldev/didevelopment/aerorender/VulkanSurfaceView;
.super Landroid/view/SurfaceView;
.implements Landroid/view/SurfaceHolder$Callback;

# JNI Native Bindings
.method private final native nativeInitVulkan(Landroid/view/Surface;II)J
.end method

.method private final native nativeRenderFrame(J)I
.end method

.method static constructor <clinit>()V
    .registers 1
    const-string v0, "aerovulkan"
    invoke-static {v0}, Ljava/lang/System;->loadLibrary(Ljava/lang/String;)V
    return-void
.end method`,
  },
  {
    id: 'iot-telemetry',
    appName: 'SensorMesh Realtime',
    packageName: 'dev.didevelopment.sensormesh',
    versionName: '2.0.1',
    versionCode: 201,
    minSdk: 24,
    targetSdk: 35,
    totalSizeMb: 9.8,
    signatureScheme: 'v2, v3, v4',
    is16KbAligned: true,
    dexFilesCount: 1,
    methodsCount: 22100,
    permissions: [
      { name: 'android.permission.BLUETOOTH_SCAN', level: 'Dangerous', desc: 'Scan for BLE beacons with neverForLocation attribute' },
      { name: 'android.permission.BLUETOOTH_CONNECT', level: 'Dangerous', desc: 'Connect to industrial IoT sensor hardware' },
      { name: 'android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE', level: 'Normal', desc: 'Continuous background telemetry streaming under Android 14+ FGS policies' },
    ],
    breakdown: [
      { name: 'classes.dex', sizeKb: 4300, pct: 43.9, color: '#2563EB' },
      { name: 'res/ & resources.arsc', sizeKb: 2800, pct: 28.5, color: '#0EA5E9' },
      { name: 'lib/arm64-v8a/libprotobuf_c.so', sizeKb: 1800, pct: 18.4, color: '#4F46E5' },
      { name: 'META-INF/', sizeKb: 500, pct: 5.1, color: '#1E3A8A' },
      { name: 'assets/schemas.proto', sizeKb: 400, pct: 4.1, color: '#0284C7' },
    ],
    kotlinEquivalent: `// Jetpack Compose Telemetry Node
@Composable
fun SensorStreamMonitor(viewModel: SensorViewModel = hiltViewModel()) {
    val packetCount by viewModel.telemetryFlow.collectAsStateWithLifecycle()
    Canvas(modifier = Modifier.fillMaxSize().drawWithCache {
        onDrawBehind {
            drawPath(path = viewModel.renderWaveform(size), color = Color(0xFF2563EB))
        }
    })
}`,
    smaliPreview: `.class public final Ldev/didevelopment/sensormesh/SensorStreamMonitorKt;
.super Ljava/lang/Object;

.method public static final SensorStreamMonitor(Ldev/didevelopment/sensormesh/SensorViewModel;Landroidx/compose/runtime/Composer;I)V
    .registers 6
    const v0, -0x3f2e1a90
    invoke-interface {p1, v0}, Landroidx/compose/runtime/Composer;->startRestartGroup(I)Landroidx/compose/runtime/Composer;
    move-result-object p1
    # Compose recomposition tracking
    invoke-interface {p1}, Landroidx/compose/runtime/Composer;->endRestartGroup()Landroidx/compose/runtime/ScopeUpdateScope;
    return-void
.end method`,
  },
];

export const ApkAnalyzerTool: React.FC = () => {
  const [activeSample, setActiveSample] = useState<ApkSample>(SAMPLE_APKS[0]);
  const [activeTab, setActiveTab] = useState<'bytecode' | 'permissions' | '16kb' | 'keystore'>('bytecode');
  const [customFileLoaded, setCustomFileLoaded] = useState<string | null>(null);

  const handleSelectSample = (sample: ApkSample) => {
    soundFx.playClick(650, 0.04);
    setActiveSample(sample);
    setCustomFileLoaded(null);
  };

  const handleTabChange = (tab: 'bytecode' | 'permissions' | '16kb' | 'keystore') => {
    soundFx.playClick(780, 0.04);
    setActiveTab(tab);
  };

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      soundFx.playCompileStep();
      setCustomFileLoaded(file.name);
      setActiveSample({
        ...SAMPLE_APKS[0],
        appName: file.name.replace('.apk', ''),
        packageName: `com.uploaded.${file.name.toLowerCase().replace(/[^a-z0-9]/g, '')}`,
        totalSizeMb: Number((file.size / (1024 * 1024)).toFixed(2)) || 12.8,
      });
    }
  };

  return (
    <section id="apk-analyzer" className="py-20 bg-[#F1F5F9] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">
              <Binary className="w-4 h-4" />
              <span>INTERACTIVE TOOL // REVERSE ENGINEERING & DEEP PROFILER</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              LIVE APK & BYTECODE INSPECTOR
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl font-sans">
              Bedah struktur biner APK tanpa rahasia. Periksa komposisi DEX, library C++ NDK 16KB alignment, 
              evaluasi izin berbahaya pada manifest, dan bandingkan instruksi Kotlin vs Smali Dalvik opcodes.
            </p>
          </div>

          {/* Sample Switcher & Upload */}
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono text-blue-600 shadow-xs cursor-pointer transition-all">
              <FolderArchive className="w-4 h-4" />
              <span>{customFileLoaded ? 'Uploaded File' : 'Drop Custom APK'}</span>
              <input 
                type="file" 
                accept=".apk,.zip" 
                className="hidden" 
                onChange={handleSimulateUpload} 
              />
            </label>

            {SAMPLE_APKS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleSelectSample(sample)}
                className={`px-3 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeSample.id === sample.id && !customFileLoaded
                    ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-xs'
                }`}
              >
                {sample.appName}
              </button>
            ))}
          </div>
        </div>

        {/* Main Analyzer Workbench Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Metadata & Package Treemap Breakdown */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Package Summary Card */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <FileCode2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-sm text-slate-900">
                      {activeSample.appName}
                    </h3>
                    <div className="text-[11px] font-mono text-slate-500 truncate max-w-[200px]">
                      {activeSample.packageName}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono font-bold text-blue-600">
                    {activeSample.totalSizeMb} MB
                  </span>
                  <div className="text-[10px] font-mono text-slate-400">Total Unpacked</div>
                </div>
              </div>

              {/* Specs Table */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Version:</span>
                  <span className="text-slate-800 font-semibold">{activeSample.versionName} ({activeSample.versionCode})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Min SDK / Target:</span>
                  <span className="text-slate-800 font-semibold">API {activeSample.minSdk} → API {activeSample.targetSdk} (Android 15)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">DEX Files:</span>
                  <span className="text-slate-800 font-semibold">{activeSample.dexFilesCount} ({activeSample.methodsCount.toLocaleString()} methods)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">16KB ELF Aligned:</span>
                  <span className="text-blue-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> PASS
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Signatures:</span>
                  <span className="text-indigo-600 font-semibold">{activeSample.signatureScheme}</span>
                </div>
              </div>
            </div>

            {/* APK Binary Storage Composition (Treemap breakdown) */}
            <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wide">
                  BINARY COMPOSITION
                </span>
                <span className="text-[10px] font-mono text-slate-400">Uncompressed footprint</span>
              </div>

              {/* Stacked Progress Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-slate-100 mb-4 border border-slate-200">
                {activeSample.breakdown.map((item, idx) => (
                  <div
                    key={idx}
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    title={`${item.name}: ${item.pct}%`}
                    className="h-full transition-all duration-300"
                  />
                ))}
              </div>

              {/* Item Legend List */}
              <div className="space-y-2.5">
                {activeSample.breakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2 truncate">
                      <span
                        className="w-2.5 h-2.5 rounded-sm shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-slate-700 truncate text-[11px]">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 text-[11px]">
                      <span className="text-slate-400">{(item.sizeKb / 1024).toFixed(2)} MB</span>
                      <span className="text-slate-900 font-bold">{item.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Deep Tabs */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Tabs Header */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl overflow-x-auto shadow-xs">
              <button
                onClick={() => handleTabChange('bytecode')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'bytecode'
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <Code2 className="w-4 h-4" />
                <span>Bytecode (Kotlin vs Smali)</span>
              </button>

              <button
                onClick={() => handleTabChange('permissions')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'permissions'
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Manifest Permissions ({activeSample.permissions.length})</span>
              </button>

              <button
                onClick={() => handleTabChange('16kb')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === '16kb'
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>16KB Page Size Audit</span>
              </button>

              <button
                onClick={() => handleTabChange('keystore')}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'keystore'
                    ? 'bg-blue-50 text-blue-700 font-bold border border-blue-200'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <HardDrive className="w-4 h-4" />
                <span>Keystore & v4 Signature</span>
              </button>
            </div>

            {/* Tab 1: Bytecode View */}
            {activeTab === 'bytecode' && (
              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2 text-slate-800">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                      Dalvik VM Opcode Disassembly
                    </span>
                    <span className="text-slate-500 hidden sm:inline">• Live Bytecode Translation</span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">Compiled via R8 Optimizer</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Kotlin Source */}
                  <div className="flex flex-col">
                    <div className="text-[11px] font-mono text-blue-700 font-semibold mb-1 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5" /> High-Level Kotlin 2.1
                    </div>
                    <pre className="p-3.5 bg-[#0B1528] border border-slate-800 rounded-xl text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed h-[320px]">
                      {activeSample.kotlinEquivalent}
                    </pre>
                  </div>

                  {/* Smali Disassembled Bytecode */}
                  <div className="flex flex-col">
                    <div className="text-[11px] font-mono text-sky-400 font-semibold mb-1 flex items-center gap-1.5">
                      <Binary className="w-3.5 h-3.5" /> Low-Level Smali / Dalvik Executable
                    </div>
                    <pre className="p-3.5 bg-[#0B1528] border border-slate-800 rounded-xl text-xs font-mono text-sky-300 overflow-x-auto leading-relaxed h-[320px]">
                      {activeSample.smaliPreview}
                    </pre>
                  </div>
                </div>

                <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center gap-3 text-xs font-mono text-blue-900">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    DEX bytecode is stripped of debug line tables (`.line`), local variable tables, and minified using a 2-character dictionary.
                  </span>
                </div>
              </div>
            )}

            {/* Tab 2: Permissions Audit */}
            {activeTab === 'permissions' && (
              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 pb-2">
                  <span className="text-slate-900 font-bold">
                    DECLARED PERMISSION MODEL & RISK MATRIX
                  </span>
                  <span className="text-blue-600 font-semibold">Zero Unnecessary Permissions</span>
                </div>

                <div className="space-y-3">
                  {activeSample.permissions.map((perm, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        {perm.level === 'Dangerous' ? (
                          <div className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 shrink-0">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                        ) : (
                          <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                        )}
                        <div>
                          <div className="font-mono font-bold text-xs text-slate-900">
                            {perm.name}
                          </div>
                          <div className="text-xs text-slate-600 font-sans mt-0.5">
                            {perm.desc}
                          </div>
                        </div>
                      </div>

                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase shrink-0 border ${
                          perm.level === 'Dangerous'
                            ? 'bg-amber-50 text-amber-700 border-amber-200'
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}
                      >
                        {perm.level}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs font-mono text-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    Security Audit: All exported activities have explicit `android:exported="false"` unless registered with strict intent filters.
                  </span>
                </div>
              </div>
            )}

            {/* Tab 3: 16KB Page Size Audit */}
            {activeTab === '16kb' && (
              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 pb-2">
                  <span className="text-slate-900 font-bold">
                    ANDROID 15 16KB PAGE-SIZE ALIGNMENT TEST
                  </span>
                  <span className="text-blue-600 font-bold">STATUS: COMPLIANT</span>
                </div>

                <p className="text-xs text-slate-600 font-sans leading-relaxed">
                  Mulai Android 15 (API 35), perangkat dengan arsitektur memori 16KB page-size mewajibkan semua ELF shared library (`.so`) 
                  dikompilasi dengan max-page-size 16KB (0x4000). APK yang tidak kompatibel akan langsung mengalami 
                  <code className="text-rose-600 bg-rose-50 px-1 py-0.5 rounded ml-1 border border-rose-200">SIGSEGV crash</code> saat dynamic linker memuat library.
                </p>

                <div className="p-4 bg-[#0B1528] border border-slate-800 rounded-xl font-mono text-xs text-slate-200 space-y-1">
                  <div className="text-sky-400">$ aarch64-linux-android-objdump -p lib/arm64-v8a/*.so | grep LOAD</div>
                  <div className="text-slate-400">LOAD off 0x0000000000000000 vaddr 0x0000000000000000 paddr 0x0000000000000000 align 2**14</div>
                  <div className="text-slate-400">LOAD off 0x0000000000004000 vaddr 0x0000000000004000 paddr 0x0000000000004000 align 2**14</div>
                  <div className="text-blue-400 font-bold mt-2">
                    [OK] Alignment verified: 2**14 = 16384 bytes (16 KB Boundary)
                  </div>
                  <div className="text-blue-400 font-bold">
                    [OK] Uncompressed native libraries enabled in AndroidManifest.xml
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="text-slate-400 text-[10px]">COMPILER FLAG</div>
                    <div className="text-blue-700 font-bold mt-0.5">-Wl,-z,max-page-size=16384</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="text-slate-400 text-[10px]">PERFORMANCE GAIN</div>
                    <div className="text-sky-700 font-bold mt-0.5">+8.2% faster app cold startup</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Keystore & Signature Scheme */}
            {activeTab === 'keystore' && (
              <div className="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs font-mono border-b border-slate-200 pb-2">
                  <span className="text-slate-900 font-bold">
                    CRYPTOGRAPHIC SIGNING SCHEMES (v1 - v4)
                  </span>
                  <span className="text-blue-600 font-mono">apksigner verify --verbose</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">Scheme v1 (JAR)</span>
                      <span className="text-blue-600 text-[11px] font-bold">Active</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-sans">
                      Per-entry checksum integrity for legacy Android 6 and older compatibility.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">Scheme v2 (APK Block)</span>
                      <span className="text-blue-600 text-[11px] font-bold">Active</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-sans">
                      Whole-file SHA-256 hash tree protecting against ZIP metadata tampering.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">Scheme v3 (Key Rotation)</span>
                      <span className="text-blue-600 text-[11px] font-bold">Active</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-sans">
                      Cryptographic lineage proof allowing seamless signing key upgrades.
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">Scheme v4 (Streaming)</span>
                      <span className="text-blue-600 text-[11px] font-bold">Active</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 font-sans">
                      ADB Incremental streaming installation with fs-verity kernel verification.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs text-slate-800">
                  <div className="text-slate-500">Signer #1 Certificate Fingerprints:</div>
                  <div className="text-blue-700 text-[11px] truncate mt-1 font-semibold">
                    SHA-256: 4C:91:2E:8F:0A:77:B4:88:9C:12:FA:44:81:6D:77:E1:92:03:FB:CD:45:90:EA:66:31:02:11:9A:FF:33:88:91
                  </div>
                  <div className="text-slate-500 text-[10px] mt-1">
                    Key Algorithm: RSA 4096-bit • Hardware TEE Backed Keystore
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
