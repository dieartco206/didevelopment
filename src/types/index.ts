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

export interface GradleBuildStep {
  task: string;
  description: string;
  durationMs: number;
  status: 'pending' | 'running' | 'done';
  logs: string[];
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
