// Shared state management for DiDev Brand Logo Concepts

export type LogoConcept = 'concept-1' | 'concept-2' | 'concept-3' | 'concept-4';

export interface LogoConceptInfo {
  id: LogoConcept;
  name: string;
  subtitle: string;
  description: string;
  accentColor: string;
  badge: string;
}

export const LOGO_CONCEPTS: LogoConceptInfo[] = [
  {
    id: 'concept-1',
    name: 'The Squircle Fusion',
    subtitle: 'Monogram D + Code Chevron > + Emerald Live Dot',
    description: 'Desain bersih berstandar Apple & Stripe. Menggabungkan huruf kapital D yang tegas dengan terminal chevron kustom dan indikator 100% online.',
    accentColor: '#2563EB',
    badge: 'AKTIF (DEFAULT)'
  },
  {
    id: 'concept-2',
    name: 'The "Di" Typographic Ligature',
    subtitle: 'Monogram "Di" Terpadu + Floating Emerald Spark',
    description: '100% Orisinal & Kustom: Batang kiri D sekaligus berfungsi sebagai huruf "i" dengan titik berlian hijau melayang di atasnya, serta prompt terminal di dalam rongga.',
    accentColor: '#10B981',
    badge: 'PALING ORISINAL'
  },
  {
    id: 'concept-3',
    name: 'The Isometric Dev Prism',
    subtitle: 'Arsitektur Kubus 3D Dimensi Bergradien',
    description: 'Memvisualisasikan rekayasa perangkat lunak multi-dimensi (Web, Android APK, Cloud Backend) dalam fasad kubus isometrik futuristik.',
    accentColor: '#38BDF8',
    badge: 'HIGH TECH'
  },
  {
    id: 'concept-4',
    name: 'The Apex Cyber Shield',
    subtitle: 'Hexagon Perisai Legalitas & Keamanan Data',
    description: 'Bentuk perisai heksagonal tegas dengan siluet D dan panah kecepatan. Menonjolkan legalitas SPK resmi bermaterai, keamanan NDA, dan kehandalan enterprise.',
    accentColor: '#6366F1',
    badge: 'ENTERPRISE & LEGAL'
  }
];

const STORAGE_KEY = 'didev_active_logo_concept';
const EVENT_NAME = 'didev_logo_concept_changed';

export const getActiveLogoConcept = (): LogoConcept => {
  if (typeof window === 'undefined') return 'concept-1';
  const saved = localStorage.getItem(STORAGE_KEY) as LogoConcept | null;
  if (saved && LOGO_CONCEPTS.some(c => c.id === saved)) {
    return saved;
  }
  return 'concept-1';
};

export const setActiveLogoConcept = (concept: LogoConcept): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, concept);
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: concept }));
};

export const subscribeLogoConcept = (callback: (concept: LogoConcept) => void): (() => void) => {
  if (typeof window === 'undefined') return () => {};
  
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<LogoConcept>;
    callback(customEvent.detail || getActiveLogoConcept());
  };

  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
};
