import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroPromo } from './components/hero/HeroPromo';
import { TechStackMarquee } from './components/marquee/TechStackMarquee';
import { ServicesSection } from './components/services/ServicesSection';
import { ComparisonSection } from './components/comparison/ComparisonSection';
import { PortfolioSection } from './components/portfolio/PortfolioSection';
import { TestimonialsSection } from './components/testimonials/TestimonialsSection';
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
    <div className="min-h-screen w-full overflow-x-hidden bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white font-sans antialiased">
      {/* Top Header Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Agency Sections */}
      <main className="w-full">
        {/* 1. Hero Section: Layered High-Fidelity UI Showcase + Strong Human Copywriting */}
        <HeroPromo onNavigate={handleNavigate} />

        {/* 2. Tech Stack Marquee (Golang, Flutter, React, Vue, TS, PostgreSQL, Docker, Tailwind) */}
        <TechStackMarquee />

        {/* 3. Solusi & Fitur Unggulan: Format Zig-Zag Feature Spotlight (Tanpa Grid Kotak Membosankan) */}
        <ServicesSection />

        {/* 4. Matriks Komparasi Transparan: DiDevelopment vs Freelancer Lepas vs Hire In-House */}
        <ComparisonSection />

        {/* 5. Portofolio Produksi dengan Preview UI Nyata & Filter Kategori */}
        <PortfolioSection />

        {/* 6. Ulasan & Testimoni Klien Bintang 5: Bukti Nyata Kepuasan Pemilik Usaha */}
        <TestimonialsSection />

        {/* 7. Alur Kerja: Horizontal Connected Stepper / Process Roadmap */}
        <WorkflowSection />

        {/* 8. Kalkulator Estimasi Biaya Finansial Interaktif & Sticky Quote */}
        <ProjectCalculator />

        {/* 9. Paket Investasi / Pricing Terstruktur (Biaya Setup + Server & Maintenance Bulanan) */}
        <PricingSection />

        {/* 10. FAQ Accordion 2 Kolom dengan Dukungan WhatsApp Langsung */}
        <FaqSection />

        {/* 11. Closing High-Contrast CTA Banner */}
        <CtaBanner />
      </main>

      {/* Footer Resmi */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
