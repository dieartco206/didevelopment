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

export interface ProposalInquiry {
  clientName: string;
  companyName: string;
  contactNumber: string;
  systemType: string;
  budgetRange: string;
  projectBrief: string;
}
