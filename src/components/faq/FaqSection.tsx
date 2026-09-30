import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    q: 'Apakah source code aplikasi akan diserahkan dan menjadi milik saya?',
    a: 'Ya, 100% mutlak! Seluruh source code proyek, file desain, database, dan file master APK diserahkan kepada Anda setelah pelunasan. Anda bebas mengembangkannya di kemudian hari tanpa keterikatan royalti.',
  },
  {
    q: 'Apakah file APK Android bisa langsung diinstall di HP tanpa masuk Play Store?',
    a: 'Bisa sekali! Kami sediakan file installer master (.apk) yang bisa Anda kirimkan lewat WhatsApp atau link download website. Pengguna cukup mengklik file tersebut dan aplikasi langsung terpasang di HP Android mereka.',
  },
  {
    q: 'Apakah tim DiDev bisa membantu upload aplikasi ke Google Play Store?',
    a: 'Tentu saja! Kami bantu persiapan file bundle (.aab), pembuatan icon HD, screenshot banner aplikasi, dan konfigurasi Google Play Console hingga aplikasi lolos review dan terbit di Google Play Store.',
  },
  {
    q: 'Bagaimana jika ada error atau kendala teknis setelah aplikasi selesai?',
    a: 'Semua proyek kami lindungi dengan Garansi Bebas Bug Resmi selama 1 Tahun. Jika ditemukan kesalahan fungsi atau sistem bermasalah, tim kami akan memperbaikinya tanpa dipungut biaya tambahan.',
  },
  {
    q: 'Berapa lama estimasi waktu pengerjaan proyek?',
    a: 'Waktu pengerjaan berkisar antara 5 hingga 7 hari kerja untuk Website Bisnis, 10 hingga 14 hari untuk Aplikasi Android APK, dan 14 hingga 21 hari untuk Paket Komplit Web + APK. Kami juga menyediakan opsi pengerjaan Express.',
  },
  {
    q: 'Bagaimana mekanisme pembayaran proyek?',
    a: 'Sistem pembayaran aman dan bertahap: Uang muka (DP) 50% saat kesepakatan fitur dan mulai pengerjaan, dan sisa pelunasan 50% dibayarkan setelah aplikasi selesai diuji coba dan siap diserahterimakan.',
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
    <section id="faq" className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-mono text-blue-700 shadow-2xs mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>TANYA JAWAB UMUM (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            PERTANYAAN YANG SERING DIAJUKAN
          </h2>
          <p className="mt-3 text-sm text-slate-600 font-sans">
            Berikut adalah beberapa hal yang sering ditanyakan oleh calon klien kami sebelum memulai kerja sama.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3 mb-10">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <span className="font-sans font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-sans font-bold text-base text-slate-900">
              Punya pertanyaan lain yang belum terjawab?
            </h4>
            <p className="text-xs text-slate-600 font-sans mt-0.5">
              Hubungi tim kami langsung lewat WhatsApp untuk konsultasi bebas biaya.
            </p>
          </div>
          <button
            onClick={openWhatsAppFaq}
            className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-mono text-xs font-bold flex items-center gap-2 shadow-md shadow-blue-500/20 active:scale-98 transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>TANYA KAMI DI WHATSAPP</span>
          </button>
        </div>
      </div>
    </section>
  );
};
