import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  Calculator, 
  Briefcase, 
  HelpCircle, 
  MessageSquare,
  Volume2, 
  VolumeX, 
  Menu, 
  X
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const muted = soundFx.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundFx.playClick(1000, 0.05);
    }
  };

  const navItems = [
    { id: 'services', label: 'Layanan', icon: Layers },
    { id: 'impact', label: 'Keunggulan', icon: Laptop },
    { id: 'portfolio', label: 'Portofolio', icon: Briefcase },
    { id: 'workflow', label: 'Alur Kerja', icon: Laptop },
    { id: 'calculator', label: 'Hitung Biaya', icon: Calculator },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const handleNavClick = (id: string) => {
    soundFx.playClick(750, 0.04);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20tertarik%20konsultasi%20jasa%20pembuatan%20Website%20dan%20Aplikasi%20Android%20APK%20untuk%20bisnis%20saya.',
      '_blank'
    );
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Brand (Corporate Clean ala Sekawan Media) */}
            <div 
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#256BE0] text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-sans font-extrabold text-lg sm:text-xl text-[#102E61] tracking-tight">
                    DiDev<span className="text-[#256BE0]">.Studio</span>
                  </span>
                </div>
                <div className="text-[10px] font-medium text-slate-500 tracking-wide uppercase">
                  Web & Mobile App Developer
                </div>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#256BE0] bg-blue-50/80 font-semibold'
                        : 'text-[#48505E] hover:text-[#256BE0] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Bar */}
            <div className="flex items-center gap-2.5">
              {/* Audio Toggle */}
              <button
                onClick={toggleSound}
                title={isMuted ? 'Aktifkan Suara' : 'Matikan Suara'}
                className="p-2.5 rounded-lg bg-slate-100/80 hover:bg-slate-200 text-slate-500 hover:text-[#256BE0] transition-colors cursor-pointer"
                aria-label="Toggle audio effects"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-[#256BE0]" />}
              </button>

              {/* Direct WhatsApp CTA Button (Sekawan Media Style: 'Dapatkan Penawaran') */}
              <button
                onClick={openWhatsApp}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 bg-[#256BE0] hover:bg-[#1D58BD] active:scale-98 text-white font-sans font-semibold text-xs sm:text-sm rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <span>Dapatkan Penawaran</span>
                <MessageSquare className="w-4 h-4" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg bg-slate-100 text-[#102E61] hover:bg-slate-200 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-slate-200 flex flex-col gap-1 bg-white/98 rounded-b-xl shadow-lg">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-sans text-left cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-blue-50/80 text-[#256BE0] font-semibold'
                        : 'text-[#48505E] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-slate-400">→</span>
                  </button>
                );
              })}
              <div className="pt-2 px-3">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 bg-[#256BE0] hover:bg-[#1D58BD] text-white font-sans font-semibold text-sm rounded-lg flex items-center justify-center gap-2 shadow-sm active:scale-98 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Dapatkan Penawaran (WhatsApp)</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
