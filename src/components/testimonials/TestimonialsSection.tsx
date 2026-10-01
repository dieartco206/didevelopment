import React from 'react';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  TrendingUp, 
  Building2, 
  Smartphone, 
  Laptop, 
  GraduationCap, 
  ArrowRight 
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  category: string;
  categoryIcon: React.ElementType;
  metricHighlight: string;
  quote: string;
  rating: number;
  initials: string;
  avatarBg: string;
  badge: string;
}

export const TestimonialsSection: React.FC = () => {
  const openWhatsApp = () => {
    soundFx.playSuccess();
    window.open(
      'https://wa.me/6289673757701?text=Halo%20DiDev%20Studio%2C%20saya%20melihat%20ulasan%20dan%20testimoni%20klien%20di%20website.%20Boleh%20konsultasi%20pembuatan%20sistem%20serupa%20untuk%20usaha%20saya%3F',
      '_blank'
    );
  };

  const testimonials: Testimonial[] = [
    {
      id: 'kopi-nadi',
      name: 'Hendro Wijaya',
      role: 'Owner & Founder',
      company: 'Kopi Nadi Group',
      location: 'Surabaya & Sidoarjo',
      category: 'Sistem Kasir Web & POS Multi-Cabang',
      categoryIcon: Laptop,
      metricHighlight: 'Selisih Kasir Turun Jadi Rp 0',
      quote:
        'Dulu tiap tutup shift kasir selalu ada selisih stok cup dan uang kas minus 200–300 ribu. Setelah dipasangi sistem kasir web DiDev yang nyambung ke printer thermal bluetooth dan barcode scanner, semua transaksi otomatis sinkron ke cloud. Saya bisa pantau omset real-time tiap cabang dari HP kapan saja.',
      rating: 5,
      initials: 'HW',
      avatarBg: 'bg-amber-600',
      badge: '✓ 3 Cabang Outlet Aktif',
    },
    {
      id: 'pt-lintas',
      name: 'Ir. Bambang Sugiarto',
      role: 'Direktur Operasional',
      company: 'PT Lintas Borneo Logistik',
      location: 'Balikpapan & Banjarmasin',
      category: 'Aplikasi Android APK Kurir & Absensi GPS',
      categoryIcon: Smartphone,
      metricHighlight: '45 Kurir Tertib Anti-Fake GPS',
      quote:
        'Aplikasi Android dari DiDev sangat tangguh di lapangan. Fitur anti-fake GPS dan validasi kamera bukti serah terima (POD) bikin kurir tidak bisa curang absen atau palsukan kiriman. Di daerah minim sinyal, mode offline SQLite-nya tetap jalan normal dan otomatis sinkron saat dapat sinyal.',
      rating: 5,
      initials: 'BS',
      avatarBg: 'bg-blue-600',
      badge: '✓ Armada 45 Kendaraan',
    },
    {
      id: 'smk-bina',
      name: 'Dra. Hj. Nurul Hidayah, M.Pd',
      role: 'Kepala Sekolah',
      company: 'SMK Bina Mandiri Mandiri',
      location: 'Jawa Timur',
      category: 'Aplikasi Android CBT Ujian Sekolah',
      categoryIcon: GraduationCap,
      metricHighlight: 'Ujian 1.150 Siswa Tanpa Server Down',
      quote:
        'Tahun lalu kami trauma ujian online karena server sewaan sering down saat ratusan siswa login barengan. Tim DiDev membuatkan aplikasi CBT Android dengan kiosk mode terkunci sehingga siswa tidak bisa buka Google atau split screen. Ujian 1.150 siswa bersamaan berjalan sangat lancar dan nilai langsung terekap ke Excel.',
      rating: 5,
      initials: 'NH',
      avatarBg: 'bg-emerald-600',
      badge: '✓ Lisensi Sekolah Resmi',
    },
    {
      id: 'lumina-fashion',
      name: 'Agatha Pricilla',
      role: 'Creative & Brand Director',
      company: 'Lumina Fashion House',
      location: 'Jakarta Barat',
      category: 'Website Company Profile & WhatsApp Gateway',
      categoryIcon: Building2,
      metricHighlight: 'Loading 0.4 Detik + Bot Resi WA Otomatis',
      quote:
        'Website katalog kami loading-nya super cepat di bawah 0.5 detik (skor Google PageSpeed 98). Yang paling kami suka itu integrasi bot WhatsApp-nya: pembeli bayar via QRIS, sistem otomatis kirim konfirmasi dan nomor resi pengiriman ke WA pelanggan tanpa admin kami ketik manual malam-malam.',
      rating: 5,
      initials: 'AP',
      avatarBg: 'bg-indigo-600',
      badge: '✓ E-Commerce & WA Gateway',
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Subtle Dot Grid Texture on White */}
      <div className="absolute inset-0 artistic-dot-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
            <span>BUKTI KEPUASAN KLIEN NYATA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight font-sans">
            Apa Kata Pemilik Usaha yang Menggunakan Sistem Kami?
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            Bukan sekadar janji manis fitur, tapi bukti nyata efisiensi kerja, pencegahan kebocoran uang kasir, dan kelancaran operasional di lapangan.
          </p>

          {/* Social Proof Key Stats Strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-base sm:text-xl font-extrabold text-[#0F172A] font-mono leading-none">4.9 / 5.0</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1 font-medium">Kepuasan Klien Resmi</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-base sm:text-xl font-extrabold text-[#2563EB] font-mono leading-none mt-1">100+ Proyek</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2 font-medium">Web & APK Selesai</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-base sm:text-xl font-extrabold text-emerald-600 font-mono leading-none mt-1">99.8%</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2 font-medium">Tingkat Retensi Mitra</div>
            </div>

            <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="text-base sm:text-xl font-extrabold text-indigo-600 font-mono leading-none mt-1">1 Tahun Penuh</div>
              <div className="text-[10px] sm:text-[11px] text-slate-500 mt-1.5 sm:mt-2 font-medium">Garansi Bebas Bug</div>
            </div>
          </div>
        </div>

        {/* Testimonials 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((item) => {
            const Icon = item.categoryIcon;
            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#F8FAFC] border-2 border-slate-200 hover:border-[#2563EB] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between relative overflow-hidden"
              >
                {/* Decorative Giant Quote Mark */}
                <div className="absolute top-4 right-5 text-slate-200/80 pointer-events-none group-hover:text-blue-100 transition-colors">
                  <Quote className="w-16 h-16 opacity-40" />
                </div>

                <div>
                  {/* Category Pill & Verification Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5 relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#2563EB] shadow-2xs whitespace-nowrap shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                      <span>{item.category}</span>
                    </span>

                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-200 whitespace-nowrap shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-3 relative z-10">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-700 ml-1.5 font-mono">5.0</span>
                  </div>

                  {/* Highlight Metric Banner */}
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-bold text-xs sm:text-sm flex items-center gap-2 mb-4 relative z-10">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hasil Nyata: <strong>{item.metricHighlight}</strong></span>
                  </div>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed italic mb-6 font-normal relative z-10">
                    "{item.quote}"
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div className="pt-4 border-t border-slate-200 flex items-center gap-3.5 relative z-10">
                  {/* Avatar Initials with Gradient */}
                  <div className={`w-11 h-11 rounded-xl ${item.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0`}>
                    {item.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="font-extrabold text-[#0F172A] text-sm sm:text-base leading-snug truncate">
                      {item.name}
                    </div>
                    <div className="text-xs text-slate-500 font-medium truncate">
                      {item.role}, <strong className="text-slate-700 font-semibold">{item.company}</strong>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      📍 {item.location}
                    </div>
                  </div>

                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border-2 border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">
              Ingin Bisnis Anda Berjalan Otomatis & Terkendali Seperti Mereka?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Diskusikan alur usaha Anda sekarang. Tim kami siap merancang solusi website dan aplikasi Android terbaik yang pas dengan SOP Anda.
            </p>
          </div>

          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/25 transition-all cursor-pointer shrink-0 hover:scale-102"
          >
            <span>Konsultasi Gratis via WhatsApp</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
