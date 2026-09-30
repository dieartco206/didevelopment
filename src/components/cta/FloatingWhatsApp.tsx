import React from 'react';
import { MessageSquare } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20tertarik%20untuk%20konsultasi%20jasa%20pembuatan%20Website%20atau%20Aplikasi%20Android%20APK.',
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="group flex items-center gap-2.5 px-4 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-full shadow-2xl shadow-blue-500/40 border-2 border-white transition-all cursor-pointer hover:scale-105"
        title="Chat via WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 text-white fill-current" />
        <span className="font-mono font-bold text-xs hidden sm:inline tracking-wider">
          CHAT WHATSAPP
        </span>
      </button>
    </div>
  );
};
