import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroPromo } from './components/hero/HeroPromo';
import { ServicesSection } from './components/services/ServicesSection';
import { ProjectCalculator } from './components/calculator/ProjectCalculator';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { PricingSection } from './components/pricing/PricingSection';
import { WorkflowSection } from './components/workflow/WorkflowSection';
import { FaqSection } from './components/faq/FaqSection';
import { Footer } from './components/footer/Footer';
import { FloatingWhatsApp } from './components/cta/FloatingWhatsApp';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-blue-600 selection:text-white font-sans">
      {/* Top Header Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Agency Sections */}
      <main className="w-full">
        {/* 1. Hero Section with 3D Laptop & Smartphone Showcase */}
        <HeroPromo onNavigate={handleNavigate} />

        {/* 2. Core Services (Web, Android APK, Combo, Web-to-APK) */}
        <ServicesSection />

        {/* 3. Interactive Project Cost & Timeline Calculator */}
        <ProjectCalculator />

        {/* 4. Client Portfolio & Real Case Studies */}
        <PortfolioSection />

        {/* 5. Transparent Pricing Packages */}
        <PricingSection />

        {/* 6. Professional 5-Step Workflow */}
        <WorkflowSection />

        {/* 7. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
