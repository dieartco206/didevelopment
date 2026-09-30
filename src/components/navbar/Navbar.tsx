import React, { useState } from 'react';
import { 
  Laptop, 
  Smartphone, 
  Layers, 
  Calculator, 
  Briefcase, 
  Tag, 
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
    { id: 'calculator', label: 'Hitung Biaya', icon: Calculator },
    { id: 'portfolio', label: 'Portofolio', icon: Briefcase },
    { id: 'pricing', label: 'Harga', icon: Tag },
    { id: 'workflow', label: 'Alur', icon: Laptop },
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
      'https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20tertarik%20untuk%20konsultasi%20jasa%20pembuatan%20Website%20%2F%20Aplikasi%20Android%20APK.',
      '_blank'
    );
  };

  return (
    <>
      {/* Top Urgent Micro Announcement Bar (Mobile Optimized) */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 text-white py-1 px-3 text-center text-[10px] sm:text-[11px] font-mono font-bold flex items-center justify-center gap-1.5 shadow-xs">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        <span className="truncate">
          PROMO: Free Domain & Garansi 1 Th untuk Web & APK Android
        </span>
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/95 border-b border-blue-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo Brand */}
            <div 
              onClick={() => handleNavClick('hero')}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-200" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono font-black text-base sm:text-lg text-slate-900 tracking-wider">
                    DIDEV<span className="text-blue-600">.STUDIO</span>
                  </span>
                  <span className="hidden xs:inline-block px-1.5 py-0.2 text-[8px] sm:text-[9px] font-mono font-bold bg-blue-100 text-blue-800 rounded">
                    OFFICIAL
                  </span>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 font-medium">
                  WEB & ANDROID APK STUDIO
                </div>
              </div>
            </div>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 font-bold shadow-2xs'
                        : 'text-slate-600 hover:text-blue-600 hover:bg-slate-100/80'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Bar */}
            <div className="flex items-center gap-2">
              {/* Audio Toggle */}
              <button
                onClick={toggleSound}
                title={isMuted ? 'Aktifkan Suara' : 'Matikan Suara'}
                className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-blue-600" />}
              </button>

              {/* Direct WhatsApp CTA (Hidden on tiny screens, icon on mobile) */}
              <button
                onClick={openWhatsApp}
                className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-mono font-bold text-xs rounded-xl transition-all shadow-md shadow-blue-500/25 cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>KONSULTASI WA</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-slate-200 flex flex-col gap-1 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-xs font-mono text-left cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-blue-600" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
              <div className="pt-2 px-2">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-mono font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 active:scale-98 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>KONSULTASI GRATIS VIA WHATSAPP</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};
