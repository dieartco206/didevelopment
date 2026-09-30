import React from 'react';
import { Smartphone, ShieldCheck, Mail, MapPin, MessageSquare } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Footer: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open('https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20mau%20konsultasi%20pembuatan%20website%20atau%20aplikasi%20Android.', '_blank');
  };

  return (
    <footer className="bg-[#0B1E3F] text-slate-400 py-12 sm:py-16 text-xs font-sans border-t border-blue-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 sm:mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#256BE0] flex items-center justify-center text-white shadow-sm">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">
                DiDev<span className="text-[#256BE0]">.Studio</span>
              </span>
            </div>
            <p className="text-slate-300 font-normal text-xs leading-relaxed max-w-sm mb-4">
              Jasa pembuatan aplikasi berbasis web dan aplikasi mobile Android (APK) kustom berstandar profesional. 
              100% Hak milik source code diserahkan penuh tanpa biaya sewa bulanan dan bergaransi resmi 1 tahun.
            </p>
            <div className="flex items-center gap-2 text-xs text-blue-200">
              <span className="w-2 h-2 rounded-full bg-[#256BE0] animate-pulse" />
              <span>Konsultasi Online Aktif Setiap Hari (08.00 - 22.00 WIB)</span>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-3 text-xs">
              LAYANAN UTAMA
            </div>
            <ul className="space-y-2 text-slate-300 text-xs font-normal">
              <li className="hover:text-white transition-colors cursor-pointer">
                Aplikasi Berbasis Web Kustom
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Aplikasi Android Kasir POS Bluetooth
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Sistem Absensi Selfie & Geofencing GPS
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Ekosistem Terintegrasi Web + Android
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Konversi Website ke File APK Android
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Guarantees */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-3 text-xs">
              HUBUNGI KAMI
            </div>
            <ul className="space-y-2.5 text-slate-300 text-xs font-normal">
              <li 
                onClick={openWhatsApp}
                className="flex items-center gap-2 cursor-pointer text-blue-300 font-medium hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#256BE0] shrink-0" />
                <span>WhatsApp: +62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Email: halo@didevelopment.dev</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Melayani Klien Seluruh Indonesia</span>
              </li>
              <li className="flex items-center gap-2 pt-1 text-blue-200 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#256BE0] shrink-0" />
                <span>Garansi Resmi Bebas Bug 1 Tahun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} DiDev Studio. Hak Cipta Dilindungi. 100% Source Code Milik Klien.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Standar Rekayasa Web & Android</span>
            <span>•</span>
            <span>Software House Resmi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
