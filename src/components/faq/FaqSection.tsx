import React, { useState } from 'react';
import { Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_LIST: FaqItem[] = [
  {
    q: 'Apakah seluruh source code diserahkan 100% jadi hak milik klien?',
    a: 'Ya, mutlak! Seluruh source code aplikasi web, database, aset desain, dan master installer APK (.apk) diserahkan penuh ke Anda tanpa biaya sewa, royalti tahunan, atau keterikatan sepihak.',
  },
  {
    q: 'Teknologi apa yang dipakai untuk membangun aplikasi web dan Android?',
    a: 'Untuk web, kami menggunakan React, Next.js, dan RESTful API modern yang sangat responsif di semua resolusi layar. Untuk mobile, kami membangun aplikasi native/hybrid Android yang ringan, cepat, dan teruji stabil.',
  },
  {
    q: 'Bisa install file APK langsung di smartphone tanpa masuk Google Play Store?',
    a: 'Bisa sekali. Kami menyediakan file master APK release (.apk) yang bisa langsung dibagikan melalui WhatsApp atau link download internal. Pengguna tinggal klik untuk memasang di HP.',
  },
  {
    q: 'Apakah dibantu jika perusahaan ingin rilis ke Google Play Store resmi?',
    a: 'Tentu. Tim kami menyiapkan bundle (.aab), icon HD, screenshot display, hingga membantu konfigurasi Google Play Console sampai aplikasi berhasil diverifikasi dan terbit publik.',
  },
  {
    q: 'Apakah ada masa garansi dan pemeliharaan setelah aplikasi selesai?',
    a: 'Ya. Setiap proyek disertai masa garansi resmi 1 tahun. Kami memberikan jaminan perbaikan bug gratis dan pendampingan teknis agar implementasi di operasional Anda berjalan lancar.',
  },
  {
    q: 'Berapa lama estimasi pengerjaan aplikasi web dan mobile?',
    a: 'Website responsif umumnya memakan waktu 5-7 hari kerja. Aplikasi Android APK berkisar 10-14 hari kerja. Sedangkan paket komplit ekosistem terintegrasi (Web + APK) berkisar 14-21 hari kerja sesuai kompleksitas fitur.',
  },
  {
    q: 'Sistem lama perusahaan kami ingin diperbarui, apakah bisa?',
    a: 'Bisa. Kami melayani jasa modernisasi teknologi dan integrasi sistem untuk menghubungkan database lama ke arsitektur cloud baru agar data operasional Anda tetap aman dan selaras.',
  },
  {
    q: 'Bagaimana cara memulai konsultasi dan mendapatkan penawaran?',
    a: 'Cukup klik tombol Dapatkan Penawaran atau hubungi kami melalui WhatsApp. Tim kami akan menganalisis kebutuhan Anda, menyusun rekomendasi alur, serta memberikan estimasi biaya transparan.',
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
    window.open('https://wa.me/6281234567890?text=Halo%20DiDev%2C%20saya%20ingin%20konsultasi%20pembuatan%20website%20dan%20aplikasi%20Android%20untuk%20bisnis%20saya.', '_blank');
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 lg:gap-16">
          {/* Left Intro (Sekawan Media Style: 38%) */}
          <div className="lg:w-[38%] flex flex-col justify-start">
            <div className="inline-block text-xs font-bold text-[#256BE0] uppercase tracking-wider mb-2">
              TANYA JAWAB UMUM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102E61] tracking-tight font-sans leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#48505E] leading-relaxed font-normal">
              Ingin mendigitalkan proses bisnis dengan sistem yang dibuat khusus? Temukan jawaban seputar hak cipta kode, tahapan pengembangan, integrasi hardware, dan garansi resmi kami.
            </p>

            <div className="mt-6 sm:mt-8 p-5 rounded-xl bg-[#F4F8FE] border border-[#D6E4FB]">
              <h4 className="text-sm font-bold text-[#102E61] mb-1">
                Punya pertanyaan spesifik lainnya?
              </h4>
              <p className="text-xs text-[#48505E] mb-4">
                Konsultasikan langsung dengan tim konsultan IT kami secara gratis tanpa ikatan.
              </p>
              <button
                onClick={openWhatsAppFaq}
                className="w-full py-2.5 px-4 bg-[#256BE0] hover:bg-[#1D58BD] text-white rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Accordion List (Sekawan Media Style: 60% with border-b) */}
          <div className="lg:w-[60%] border-t border-slate-200 lg:border-t-0">
            {FAQ_LIST.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-[#D0D3D9] py-5 sm:py-6 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <span className={`text-base sm:text-lg font-semibold font-sans leading-snug transition-colors ${
                      isOpen ? 'text-[#256BE0]' : 'text-[#2B2F38] group-hover:text-[#256BE0]'
                    }`}>
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[#2B2F38] shrink-0 mt-0.5 group-hover:bg-blue-50 group-hover:text-[#256BE0] transition-colors">
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8 text-sm text-[#48505E] font-sans leading-relaxed">
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
