import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroPromo } from './components/hero/HeroPromo';
import { TechStackMarquee } from './components/marquee/TechStackMarquee';
import { ServicesSection } from './components/services/ServicesSection';
import { ImpactSection } from './components/impact/ImpactSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { WorkflowSection } from './components/workflow/WorkflowSection';
import { ProjectCalculator } from './components/calculator/ProjectCalculator';
import { PricingSection } from './components/pricing/PricingSection';
import { FaqSection } from './components/faq/FaqSection';
import { CtaBanner } from './components/cta/CtaBanner';
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
    <div className="min-h-screen bg-[#F8FAFC] text-[#2B2F38] selection:bg-[#256BE0] selection:text-white font-sans">
      {/* Top Header Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Agency Sections */}
      <main className="w-full">
        {/* 1. Hero Section with 3D Laptop & Smartphone Showcase */}
        <HeroPromo onNavigate={handleNavigate} />

        {/* 2. Visual Tech Stack & Engineering Marquee */}
        <TechStackMarquee />

        {/* 3. Tipe Layanan Pengembangan */}
        <ServicesSection />

        {/* 4. Komitmen Layanan & Standar Rekayasa */}
        <ImpactSection />

        {/* 5. Kumpulan Proyek & Portofolio */}
        <PortfolioSection />

        {/* 6. Alur Kerja 5 Tahap */}
        <WorkflowSection />

        {/* 7. Simulasi Estimasi Biaya (Kalkulator) */}
        <ProjectCalculator />

        {/* 8. Paket Investasi Sistem */}
        <PricingSection />

        {/* 9. Pertanyaan yang Sering Diajukan (FAQ Accordion ala Sekawan Media) */}
        <FaqSection />

        {/* 10. Efisiensi Bisnis Mulai dari Sini (Banner CTA) */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
