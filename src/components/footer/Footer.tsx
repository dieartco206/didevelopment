import React from 'react';
import { Smartphone, ShieldCheck, Mail, MapPin, MessageSquare } from 'lucide-react';
import { soundFx } from '../../utils/audio';

export const Footer: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open('https://wa.me/6281234567890?text=Halo%20DiDev%20Studio%2C%20saya%20mau%20konsultasi%20pembuatan%20website%20atau%20aplikasi%20Android.', '_blank');
  };

  const scrollTo = (id: string) => {
    soundFx.playClick(750, 0.04);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080E1A] text-slate-400 py-14 sm:py-20 text-xs font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 sm:mb-16">
          
          {/* Col 1: Brand & Profile (5 cols) */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#2563EB] flex items-center justify-center text-white shadow-md">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">
                DiDev<span className="text-[#2563EB]">.Studio</span>
              </span>
            </div>
            
            <p className="text-slate-400 font-normal text-xs sm:text-sm leading-relaxed max-w-sm mb-5">
              Agensi rekayasa perangkat lunak spesialis pembuatan Website Operasional dan Aplikasi Mobile Android (APK) kustom. Layanan sistem terkelola penuh (fully managed) dengan cloud server cepat, backup otomatis, dan pemeliharaan rutin.
            </p>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Layanan Konsultasi Online Aktif Setiap Hari (08.00 - 22.00 WIB)</span>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-white font-bold uppercase tracking-wider mb-4 text-xs">
              NAVIGASI CEPAT
            </div>
            <ul className="space-y-2.5 text-slate-400 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Beranda Utama
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Solusi Kasir & Mobile
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Studi Kasus Portofolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('workflow')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Alur Pengerjaan 5 Tahap
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('calculator')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Kalkulator Estimasi Biaya
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors cursor-pointer text-left">
                  Paket Investasi Sistem
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Hubungi Kami Resmi (4 cols) */}
          <div className="md:col-span-4">
            <div className="text-white font-bold uppercase tracking-wider mb-4 text-xs">
              KONTAK & KANTOR RESMI
            </div>
            <ul className="space-y-3 text-slate-300 text-xs sm:text-sm">
              <li 
                onClick={openWhatsApp}
                className="flex items-center gap-2.5 cursor-pointer text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-current shrink-0" />
                <span>WhatsApp: +62 812-3456-7890 (Respon Cepat)</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Email: halo@didevelopment.dev</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Layanan Klien: Seluruh Kota di Indonesia</span>
              </li>
              <li className="flex items-center gap-2.5 pt-2 text-slate-300 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>Cloud Server Terkelola, Backup Otomatis & Pemeliharaan Rutin</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} DiDev Studio. All rights reserved. Fully Managed Digital Platform & Cloud Infrastructure.
          </div>
          <div className="flex items-center gap-3 text-slate-400 font-medium">
            <span>React.js • Golang • Flutter • Android Native</span>
            <span>•</span>
            <span className="text-emerald-400">Software House Resmi</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
