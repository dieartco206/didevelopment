import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    q: 'Apakah source code diserahkan 100% jadi hak milik saya?',
    a: 'Ya, mutlak! Seluruh source code, file desain, database, dan master APK diserahkan penuh ke Anda tanpa biaya sewa atau royalti lanjutan.',
  },
  {
    q: 'Bisa install APK langsung di HP tanpa masuk Google Play Store?',
    a: 'Bisa banget. Kami sediakan file installer (.apk) yang siap dikirim lewat WhatsApp atau website. Sekali klik langsung terpasang di HP.',
  },
  {
    q: 'Apakah dibantu jika ingin upload ke Google Play Store?',
    a: 'Ya, tentu! Kami siapkan bundle (.aab), icon HD, screenshot banner, dan konfigurasi Google Play Console sampai disetujui Google.',
  },
  {
    q: 'Bagaimana jika ada error atau bug setelah aplikasi selesai?',
    a: 'Semua proyek bergaransi resmi 1 Tahun. Jika ada kendala teknis atau bug, tim kami perbaiki gratis dan cepat.',
  },
  {
    q: 'Berapa lama estimasi pengerjaan proyek?',
    a: 'Website: 5-7 hari kerja. Aplikasi APK: 10-14 hari kerja. Paket Komplit (Web+APK): 14-21 hari kerja. Tersedia jalur Express jika butuh cepat.',
  },
  {
    q: 'Bagaimana skema pembayaran proyek?',
    a: 'DP 50% di awal saat kick-off dan kesepakatan fitur. Pelunasan 50% sisanya dibayarkan setelah aplikasi lolos uji coba dan siap diserahterimakan.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    soundFx.playClick(650, 0.03);
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const openWhatsAppFaq = () => {
    soundFx.playSuccess();
    window.open('https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20ada%20pertanyaan%20seputar%20jasa%20pembuatan%20website%20dan%20APK%20Android.', '_blank');
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-mesh-hero border-b border-blue-200/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-blue-200 rounded-full text-xs font-mono font-bold text-blue-700 shadow-2xs mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>TANYA JAWAB UMUM (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-sans">
            PERTANYAAN SERING DIAJUKAN
          </h2>
          <p className="mt-1.5 text-xs sm:text-base text-slate-600 font-sans font-medium">
            Hal penting seputar hak cipta code, garansi, dan teknis instalasi:
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl border-2 border-blue-200/80 bg-white overflow-hidden shadow-xs transition-all duration-200 hover:border-blue-400"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-blue-50/50 transition-colors"
                >
                  <span className="font-sans font-bold text-xs sm:text-base text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed border-t border-slate-100 pt-3 font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-blue-50/90 border-2 border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900">
              Ada pertanyaan khusus terkait bisnis Anda?
            </h4>
            <p className="text-xs text-slate-600 font-sans mt-0.5">
              Konsultasikan langsung dengan tim engineer kami via WhatsApp.
            </p>
          </div>
          <button
            onClick={openWhatsAppFaq}
            className="w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>KONSULTASI VIA WA</span>
          </button>
        </div>
      </div>
    </section>
  );
};
