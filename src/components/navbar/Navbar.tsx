import React, { useState } from 'react';
import { 
  Smartphone, 
  Terminal, 
  Layers, 
  FileCode2, 
  Volume2, 
  VolumeX, 
  Activity, 
  ShieldCheck,
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
    { id: 'hero-3d', label: '3D Teardown', icon: Layers },
    { id: 'apk-analyzer', label: 'APK Inspector', icon: FileCode2 },
    { id: 'gradle-build', label: 'Gradle Terminal', icon: Terminal },
    { id: 'architecture', label: 'Native Architecture', icon: Smartphone },
    { id: 'android-matrix', label: 'Android 15 Lab', icon: Activity },
    { id: 'case-studies', label: 'Case Studies', icon: ShieldCheck },
  ];

  const handleNavClick = (id: string) => {
    soundFx.playClick(750, 0.04);
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#050811]/90 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div 
            onClick={() => handleNavClick('hero-3d')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3DDC84] to-[#073042] p-0.5 shadow-lg shadow-[#3DDC84]/20 group-hover:scale-105 transition-transform duration-200">
              <div className="w-full h-full bg-[#080d1a] rounded-[10px] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[#3DDC84] group-hover:rotate-12 transition-transform duration-200" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-extrabold text-lg text-white tracking-wider">
                  DIDEV<span className="text-[#3DDC84]">.ANDROID</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-[#3DDC84]/15 text-[#3DDC84] border border-[#3DDC84]/30 rounded">
                  HARDCORE NATIVE
                </span>
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                APK & COMPOSE CRAFT • ZERO AI SLOP
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
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-[#3DDC84] border border-[#3DDC84]/40 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#3DDC84]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#3DDC84] hover:border-[#3DDC84]/40 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-[#3DDC84]" />}
            </button>

            {/* Quick Estimate CTA */}
            <button
              onClick={() => handleNavClick('estimator')}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 bg-[#3DDC84] hover:bg-[#32c473] active:scale-95 text-[#050811] font-mono font-bold text-xs rounded-lg transition-all shadow-md shadow-[#3DDC84]/20 cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>BUILD SPEC</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-800/80 flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-mono text-left ${
                    isActive
                      ? 'bg-slate-800 text-[#3DDC84] font-bold'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('estimator')}
              className="mt-2 w-full py-2.5 bg-[#3DDC84] text-[#050811] font-mono font-bold text-xs rounded-lg flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              <span>CALCULATE PROJECT SPEC</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
