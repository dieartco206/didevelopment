import React, { useState } from 'react';
import { BytecodeRing3D } from '../3d/BytecodeRing3D';
import { 
  Smartphone, 
  Workflow, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Zap, 
  Layers,
  Code2
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ArchLayer {
  id: string;
  name: string;
  subtitle: string;
  icon: typeof Smartphone;
  color: string;
  badge: string;
  features: string[];
  techStack: string[];
  codeSnippet: string;
  performanceBenefit: string;
}

const ARCH_LAYERS: ArchLayer[] = [
  {
    id: 'ui',
    name: 'Declarative UI Layer',
    subtitle: 'Jetpack Compose & Material 3 Dynamic Engine',
    icon: Smartphone,
    color: '#2563EB',
    badge: '120Hz VSYNC Locked',
    features: [
      'Strong Skipping Mode enabled via Kotlin 2.1 compiler',
      'Zero layout passes with drawWithCache and graphicsLayer hardware backing',
      'True Edge-to-Edge with WindowInsetsCompat and predictive back animations',
      'Elimination of XML inflations, zero view hierarchy bloat',
    ],
    techStack: ['Jetpack Compose 1.8', 'Material 3', 'Compose Compiler 2.1', 'Coil 3 (KMP)'],
    performanceBenefit: 'Recompositions dropped by 88% compared to traditional view layouts.',
    codeSnippet: `@Composable
fun FinancialChartNode(
    dataPoints: ImmutableList<Float>,
    modifier: Modifier = Modifier
) {
    Canvas(
        modifier = modifier
            .fillMaxWidth()
            .height(240.dp)
            .graphicsLayer { compositingStrategy = CompositingStrategy.Offscreen }
            .drawWithCache {
                val chartPath = generateSmoothSpline(dataPoints, size)
                onDrawBehind {
                    drawPath(path = chartPath, brush = ChartGradient)
                }
            }
    )
}`,
  },
  {
    id: 'domain',
    name: 'Domain & Concurrency Layer',
    subtitle: 'Coroutines Flow & Structured Clean Architecture',
    icon: Workflow,
    color: '#0EA5E9',
    badge: 'Non-Blocking IO',
    features: [
      'StateFlow and SharedFlow for cold/hot reactive state pipelines',
      'Thread pool containment with Dispatchers.IO and Dispatchers.Default',
      'Deterministic cancellation with SupervisorJob and CoroutineScope lifecycle',
      'Immutable Result pattern for complete zero-exception crash prevention',
    ],
    techStack: ['KotlinX Coroutines 1.9', 'StateFlow', 'Dagger Hilt 2.52', 'Clean Arch'],
    performanceBenefit: 'Main thread CPU load remains under 4% even during heavy batch operations.',
    codeSnippet: `@Singleton
class SyncCryptographicLedgerUseCase @Inject constructor(
    private val repository: LedgerRepository,
    private val ioDispatcher: CoroutineDispatcher = Dispatchers.IO
) {
    operator fun invoke(): Flow<SyncState> = flow {
        emit(SyncState.Initiating)
        repository.fetchRemoteBatches()
            .flowOn(ioDispatcher)
            .map { batches -> processBatchIntegrity(batches) }
            .collect { validated -> emit(SyncState.Completed(validated)) }
    }.catch { error ->
        emit(SyncState.Error(error.toDomainFailure()))
    }
}`,
  },
  {
    id: 'data',
    name: 'Data & Persistence Layer',
    subtitle: 'Offline-First Room SQLite & Zero-Copy Protocol Buffers',
    icon: Database,
    color: '#4F46E5',
    badge: 'Microsecond Queries',
    features: [
      'Room 2.7 with native SQLite driver and compile-time SQL verification',
      'Protocol Buffers (Protobuf) instead of heavy JSON serialization',
      'OkHttp 5 HTTP/3 QUIC connection pooling with automatic backoff',
      'EncryptedSharedPreferences backed by Android Keystore hardware TEE',
    ],
    techStack: ['Room 2.7', 'Protobuf 4.28', 'OkHttp 5 QUIC', 'DataStore'],
    performanceBenefit: 'Deserialization 14x faster and payload sizes 60% smaller than JSON.',
    codeSnippet: `@Dao
interface TelemetryRecordDao {
    @Query("SELECT * FROM telemetry WHERE timestamp >= :sinceEpoch ORDER BY timestamp DESC LIMIT 500")
    fun observeRecentRecords(sinceEpoch: Long): Flow<List<TelemetryEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertBatch(records: List<TelemetryEntity>)
}`,
  },
  {
    id: 'ndk',
    name: 'C++ NDK & Hardware Core',
    subtitle: 'Vulkan 1.3 & SIMD Vectorized Compute Bridge',
    icon: Cpu,
    color: '#1D4ED8',
    badge: '16KB Page Aligned',
    features: [
      'Clang C++20 cross-compilation for arm64-v8a architectures',
      'Vulkan 1.3 low-overhead graphics pipeline bypassing legacy OpenGL ES overhead',
      'Strict 16KB max-page-size ELF binary alignment for Android 15 compatibility',
      'Direct byte buffer JNI interop with zero memory copying between Java/C++',
    ],
    techStack: ['Android NDK r27', 'C++20', 'Vulkan 1.3', 'ARM NEON SIMD', 'CMake 3.28'],
    performanceBenefit: 'Raw SIMD processing speeds up heavy compute by 420% vs JVM bytecode.',
    codeSnippet: `// C++20 Hardware Accelerated JNI Bridge
extern "C" JNIEXPORT jint JNICALL
Java_dev_didevelopment_engine_VulkanEngine_renderFrame(
    JNIEnv* env, jobject thiz, jlong engineHandle
) {
    auto* engine = reinterpret_cast<VulkanCore*>(engineHandle);
    if (!engine) return -1;
    return engine->recordAndSubmitCommandBuffer();
}`,
  },
];

export const ArchitectureMatrix: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<ArchLayer>(ARCH_LAYERS[0]);

  const handleSelect = (layer: ArchLayer) => {
    soundFx.playClick(800, 0.04);
    setSelectedLayer(layer);
  };

  return (
    <section id="architecture" className="py-20 bg-[#F1F5F9] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider mb-2">
            <Layers className="w-4 h-4" />
            <span>CORE BLUEPRINT // 100% NATIVE PERFORMANCE MATRICES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            MODERN ANDROID ENGINEERING ARCHITECTURE
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl font-sans">
            Arsitektur software kelas enterprise yang dibangun untuk stabilitas puluhan juta pengguna. 
            Mulai dari deklaratif UI murni, pipeline async tanpa memory leak, hingga akselerasi hardware via C++ NDK.
          </p>
        </div>

        {/* Layer Selection Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {ARCH_LAYERS.map((layer) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer.id === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => handleSelect(layer)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 border-blue-600 shadow-md shadow-blue-500/10'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="p-2 rounded-xl"
                    style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                    {layer.badge}
                  </span>
                </div>
                <div className="text-sm font-mono font-bold text-slate-900 truncate">
                  {layer.name}
                </div>
                <div className="text-xs text-slate-500 font-sans truncate mt-0.5">
                  {layer.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Layer Deep Dive Workbench */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 bg-white border border-slate-200 rounded-3xl shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="w-3.5 h-3.5 rounded-full"
                  style={{ backgroundColor: selectedLayer.color }}
                />
                <div>
                  <h3 className="text-xl font-bold font-sans text-slate-900">
                    {selectedLayer.name}
                  </h3>
                  <div className="text-xs font-mono text-slate-500">
                    {selectedLayer.subtitle}
                  </div>
                </div>
              </div>

              {/* Performance Impact Box */}
              <div className="p-3.5 bg-blue-50 border border-blue-200 rounded-xl mb-5 flex items-start gap-3">
                <Zap className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs font-mono text-blue-900">
                  <span className="font-bold">IMPACT: </span>
                  {selectedLayer.performanceBenefit}
                </div>
              </div>

              {/* Feature Points */}
              <div className="space-y-2.5 mb-6">
                {selectedLayer.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-sans text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
                PRODUCTION TECH ARSENAL:
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedLayer.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Code & 3D Opcode Preview */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Code Snippet Card */}
            <div className="rounded-2xl border border-slate-800 bg-[#0B1528] overflow-hidden flex flex-col shadow-xl">
              <div className="px-4 py-2.5 bg-[#132238] border-b border-slate-700 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-200">
                  <Code2 className="w-4 h-4 text-sky-400" />
                  <span>Production Implementation Spec</span>
                </div>
                <span className="text-[10px] text-slate-400">100% Typed • Zero Stubs</span>
              </div>
              <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed bg-[#0B1528] h-[260px]">
                {selectedLayer.codeSnippet}
              </pre>
            </div>

            {/* Mini 3D Execution Ring Card */}
            <div className="h-[180px] bg-white border border-slate-200 rounded-2xl relative overflow-hidden flex items-center justify-between px-6 shadow-sm">
              <div className="z-10 max-w-[280px]">
                <div className="text-xs font-mono font-bold text-slate-900">
                  3D Dalvik Runtime Vortex
                </div>
                <div className="text-[11px] text-slate-600 font-sans mt-1">
                  Visualisasi simpul eksekusi bytecode register-based ART VM yang berjalan mulus tanpa runtime reflection.
                </div>
              </div>
              <div className="w-[180px] h-[180px] relative shrink-0">
                <BytecodeRing3D />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
