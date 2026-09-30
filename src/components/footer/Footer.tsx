import React from 'react';
import { Smartphone, ShieldCheck, Mail, MapPin, MessageSquare } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Footer: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open('https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20mau%20konsultasi%20pembuatan%20website%20%2F%20APK.', '_blank');
  };

  return (
    <footer className="bg-[#081225] border-t border-blue-900/60 text-slate-400 py-10 sm:py-16 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 sm:mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-white font-black text-base sm:text-lg tracking-wider">
                DIDEV<span className="text-blue-400">.STUDIO</span>
              </span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm mb-3">
              Jasa pembuatan website profesional dan aplikasi Android (APK) kustom bergaransi resmi 1 tahun. 
              100% Hak milik source code diserahkan penuh tanpa biaya bulanan.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span>Konsultasi Online Aktif Setiap Hari (08.00 - 22.00 WIB)</span>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-2.5 text-xs">
              LAYANAN UTAMA
            </div>
            <ul className="space-y-1.5 text-slate-400 font-sans text-xs">
              <li className="hover:text-sky-300 transition-colors cursor-pointer">
                Website Toko Online & Landing Page
              </li>
              <li className="hover:text-sky-300 transition-colors cursor-pointer">
                Aplikasi Android Kasir (POS) Bluetooth
              </li>
              <li className="hover:text-sky-300 transition-colors cursor-pointer">
                Aplikasi Absensi GPS & Foto Selfie
              </li>
              <li className="hover:text-sky-300 transition-colors cursor-pointer">
                Paket Komplit Web + Android APK
              </li>
              <li className="hover:text-sky-300 transition-colors cursor-pointer">
                Konversi Website ke APK Android
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Guarantees */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-2.5 text-xs">
              KONTAK RESMI
            </div>
            <ul className="space-y-2 text-slate-400 font-sans text-xs">
              <li 
                onClick={openWhatsApp}
                className="flex items-center gap-2 cursor-pointer text-sky-300 font-semibold hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-sky-400 shrink-0" />
                <span>WhatsApp: +62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Email: halo@didevelopment.dev</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Layanan Klien Seluruh Indonesia</span>
              </li>
              <li className="flex items-center gap-2 mt-1 text-sky-300">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Garansi Bebas Bug 1 Tahun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} DIDEV STUDIO. All rights reserved. 100% Source Code Milik Klien.
          </div>
          <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
            <span>React 19 & Three.js WebGL</span>
            <span>•</span>
            <span>Software House Resmi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
