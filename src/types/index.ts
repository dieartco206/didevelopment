export type ViewMode3D = 'exploded' | 'chassis' | 'circuit' | 'wireframe';

export interface ApkLayerInfo {
  id: string;
  name: string;
  category: 'manifest' | 'dex' | 'native' | 'res' | 'meta';
  fileName: string;
  sizeMb: number;
  description: string;
  color: string;
  techDetails: {
    label: string;
    value: string;
  }[];
}

export interface ApkSample {
  id: string;
  appName: string;
  packageName: string;
  versionName: string;
  versionCode: number;
  minSdk: number;
  targetSdk: number;
  totalSizeMb: number;
  signatureScheme: string;
  is16KbAligned: boolean;
  dexFilesCount: number;
  methodsCount: number;
  permissions: {
    name: string;
    level: 'Normal' | 'Dangerous' | 'Signature';
    desc: string;
  }[];
  breakdown: {
    name: string;
    sizeKb: number;
    pct: number;
    color: string;
  }[];
  smaliPreview: string;
  kotlinEquivalent: string;
}

export interface AndroidApiFeature {
  apiLevel: number;
  codename: string;
  version: string;
  releaseYear: number;
  keyChanges: string[];
  securityRules: string;
  ndkRequirement: string;
  isCurrentTarget: boolean;
}

export interface ProjectService {
  id: string;
  title: string;
  tagline: string;
  category: 'web' | 'android' | 'combo' | 'maintenance';
  priceStarting: string;
  description: string;
  features: string[];
  deliverables: string[];
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Web App' | 'Android APK' | 'Full Ecosystem (Web + APK)';
  client: string;
  thumbnail: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  results: string;
  isPopular?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  timeline: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
