import React, { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { ApkAnalyzerTool } from './components/tools/ApkAnalyzerTool';
import { GradleBuildSimulator } from './components/tools/GradleBuildSimulator';
import { ArchitectureMatrix } from './components/architecture/ArchitectureMatrix';
import { AndroidMatrix15 } from './components/compatibility/AndroidMatrix15';
import { EngineeringCaseStudies } from './components/portfolio/EngineeringCaseStudies';
import { ApkEstimator } from './components/calculator/ApkEstimator';
import { Footer } from './components/footer/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero-3d');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050811] text-[#E2E8F0] selection:bg-[#3DDC84] selection:text-[#050811] font-mono">
      {/* Top Cyber Navigation Bar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="w-full">
        {/* 1. Hero 3D WebGL Scene & Exploded APK Inspector */}
        <HeroSection onNavigate={handleNavigate} />

        {/* 2. Interactive Reverse Engineering APK & Bytecode Analyzer */}
        <ApkAnalyzerTool />

        {/* 3. Interactive Gradle Build Engine & Terminal Simulator */}
        <GradleBuildSimulator />

        {/* 4. Native Android Architecture Blueprint & 3D Dalvik Vortex */}
        <ArchitectureMatrix />

        {/* 5. Android 15 (API 35) Compatibility Lab & 16KB Page Size Audit */}
        <AndroidMatrix15 />

        {/* 6. Production Case Studies & Hardware Benchmarks */}
        <EngineeringCaseStudies />

        {/* 7. Interactive Project Architecture Estimator & Blueprint Generator */}
        <ApkEstimator />
      </main>

      {/* Footer & ADB Cheatsheet */}
      <Footer />
    </div>
  );
};

export default App;
