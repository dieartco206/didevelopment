import React from 'react';
import { Smartphone, ShieldCheck, Mail, MapPin, MessageSquare } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Footer: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open('https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20mau%20konsultasi%20pembuatan%20website%20%2F%20APK.', '_blank');
  };

  return (
    <footer className="bg-[#0B1528] border-t border-slate-800 text-slate-400 py-16 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-white font-extrabold text-base tracking-wider">
                DIDEV<span className="text-blue-400">.STUDIO</span>
              </span>
            </div>
            <p className="text-slate-400 font-sans text-xs leading-relaxed max-w-sm mb-4">
              Jasa pembuatan website profesional dan aplikasi Android (APK) kustom bergaransi resmi. 
              Membantu bisnis, UMKM, dan perusahaan mentransformasikan operasional manual menjadi sistem digital yang cepat dan efisien.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Layanan Konsultasi Online Aktif Setiap Hari</span>
            </div>
          </div>

          {/* Col 2: Services List */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-3">
              LAYANAN UTAMA
            </div>
            <ul className="space-y-2 text-slate-400 font-sans">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Website Company Profile & Toko Online
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Aplikasi Android Kasir (POS) Bluetooth
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Aplikasi Absensi GPS & Foto Selfie
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Jasa Konversi Website ke APK Android
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Paket Komplit Web Admin + Android APK
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Guarantees */}
          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-3">
              KONTAK & KONSULTASI
            </div>
            <ul className="space-y-2.5 text-slate-400 font-sans">
              <li 
                onClick={openWhatsApp}
                className="flex items-center gap-2 cursor-pointer hover:text-blue-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-blue-400 shrink-0" />
                <span>WhatsApp: +62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Email: halo@didevelopment.dev</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Indonesia (Layanan Seluruh Wilayah)</span>
              </li>
              <li className="flex items-center gap-2 mt-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Garansi Bebas Bug 1 Tahun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} DIDEV STUDIO. All rights reserved. 100% Source Code Milik Klien.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Dibuat dengan React & Three.js WebGL</span>
            <span>•</span>
            <span className="text-blue-400 font-semibold">Bukan Template AI Murahan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
