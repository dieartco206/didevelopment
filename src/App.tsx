import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroPromo } from './components/hero/HeroPromo';
import { TechStackMarquee } from './components/marquee/TechStackMarquee';
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
    <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A] selection:bg-blue-600 selection:text-white font-sans">
      {/* Top Header Navigation with Announcement Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Agency Sections */}
      <main className="w-full">
        {/* 1. Hero Section with 3D Laptop & Smartphone Showcase */}
        <HeroPromo onNavigate={handleNavigate} />

        {/* 2. Visual Tech Stack & Engineering Marquee */}
        <TechStackMarquee />

        {/* 3. Core Services with Visual Device Mockups */}
        <ServicesSection />

        {/* 4. Interactive Project Cost & Timeline Calculator (Executive Blue Card) */}
        <ProjectCalculator />

        {/* 5. Client Portfolio & Real Case Studies with UI Simulation */}
        <PortfolioSection />

        {/* 6. Transparent Pricing Packages with Royal Blue Flagship Card */}
        <PricingSection />

        {/* 7. Professional 5-Step High-Tech Workflow */}
        <WorkflowSection />

        {/* 8. Frequently Asked Questions (FAQ) */}
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
