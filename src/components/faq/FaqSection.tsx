import React, { useState } from 'react';
import { Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    q: 'Apakah seluruh source code diserahkan 100% jadi hak milik kami?',
    a: 'Ya, mutlak 100%! Seluruh source code aplikasi web, file database, aset desain, dan file master installer APK (.apk) diserahkan penuh tanpa biaya sewa, royalti tahunan, atau sistem sewa yang mengikat.',
  },
  {
    q: 'Berapa lama estimasi pengerjaan aplikasi web dan mobile?',
    a: 'Untuk Website Toko / Landing Page umumnya selesai dalam 5-7 hari kerja. Aplikasi Android APK siap pakai berkisar 10-14 hari kerja. Sedangkan paket komplit Web + Mobile berkisar 14-21 hari kerja sesuai kompleksitas fitur yang Anda minta.',
  },
  {
    q: 'Bagaimana jika di kemudian hari ditemukan error atau bug?',
    a: 'Semua proyek kami bergaransi resmi 1 tahun penuh. Jika ada kendala teknis, fungsi error, atau bug yang tidak sesuai dengan kesepakatan awal, tim engineer kami perbaiki secara gratis dan cepat.',
  },
  {
    q: 'Bagaimana cara instalasi aplikasi Android APK ke smartphone karyawan?',
    a: 'Sangat mudah. Kami sediakan file master APK release (.apk) yang bisa dibagikan langsung melalui WhatsApp atau link download website. Karyawan tinggal klik untuk menginstal di HP tanpa harus menunggu proses approve jika dipakai internal.',
  },
  {
    q: 'Apakah dibantu jika perusahaan ingin rilis ke Google Play Store resmi?',
    a: 'Tentu saja! Kami siapkan bundle (.aab), ikon resolusi tinggi, screenshot display, hingga membantu proses konfigurasi di akun Google Play Console perusahaan Anda sampai aplikasi disetujui Google.',
  },
  {
    q: 'Bagaimana skema pembayaran dan termin proyek di DiDev Studio?',
    a: 'Skema sangat transparan: DP 50% di awal saat kick-off dan kesepakatan spesifikasi sistem, kemudian sisa pelunasan 50% dibayarkan setelah aplikasi selesai diuji coba bersama dan siap diserahterimakan.',
  },
  {
    q: 'Sistem lama perusahaan kami ingin diperbarui, apakah bisa?',
    a: 'Bisa sekali. Kami melayani jasa modernisasi teknologi dan integrasi sistem untuk memigrasikan database lama ke arsitektur cloud baru agar data riwayat transaksi Anda tetap aman dan performa aplikasi melonjak tajam.',
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
    window.open('https://wa.me/6281234567890?text=Halo%20DiDev%20Studio%2C%20saya%20ada%20pertanyaan%20seputar%20pembuatan%20website%20dan%20aplikasi%20Android.', '_blank');
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
          
          {/* Sisi Kiri: Headline Ramah + Kotak Bantuan Langsung */}
          <div className="lg:w-[38%] flex flex-col justify-start">
            <div className="inline-block text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
              TANYA JAWAB UMUM (FAQ)
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-sans leading-tight">
              Ada Pertanyaan Sebelum Memulai?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed font-normal">
              Kami memahami bahwa setiap bisnis memiliki alur dan pertimbangan tersendiri. Di sini kami merangkum jawaban atas hal-hal yang paling sering ditanyakan calon klien kami.
            </p>

            {/* Kotak Bantuan Langsung WhatsApp */}
            <div className="mt-8 p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    Butuh Diskusi Teknis Khusus?
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">Engineer kami siap menjawab via WA</span>
                </div>
              </div>
              <p className="text-xs text-[#475569] mb-4 leading-relaxed">
                Tanyakan langsung estimasi biaya, kecocokan fitur dengan alur usaha Anda, atau jadwal ketersediaan pengerjaan.
              </p>
              <button
                onClick={openWhatsAppFaq}
                className="w-full py-3 px-4 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Tanya Engineer via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sisi Kanan: Accordion Bersih */}
          <div className="lg:w-[60%] border-t border-slate-200 lg:border-t-0 space-y-3">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-2xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer group hover:bg-slate-50/50"
                  >
                    <span className={`text-base font-bold font-sans leading-snug transition-colors ${
                      isOpen ? 'text-[#2563EB]' : 'text-[#0F172A] group-hover:text-[#2563EB]'
                    }`}>
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-[#0F172A] shrink-0 mt-0.5 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#475569] font-sans leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
