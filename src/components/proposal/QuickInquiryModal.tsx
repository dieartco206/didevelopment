import React, { useState } from 'react';
import { 
  X, 
  MessageSquare, 
  Mail, 
  Copy, 
  Check, 
  FileText, 
  ShieldCheck, 
  Clock, 
  CheckCircle2 
} from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultSystemType?: string;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ 
  isOpen, 
  onClose,
  defaultSystemType = 'Web Kasir POS & Bluetooth'
}) => {
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [systemType, setSystemType] = useState(defaultSystemType);
  const [budgetRange, setBudgetRange] = useState('Rp 3.000.000 - Rp 7.000.000 (Paket Bisnis)');
  const [projectBrief, setProjectBrief] = useState('');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const systemOptions = [
    'Web Kasir POS & Bluetooth Thermal',
    'Android Mobile APK & Presensi GPS',
    'Portal Web & Sistem Tracking Logistik',
    'Website Toko Online / E-Commerce',
    'Sistem ERP / Custom Enterprise',
    'Modernisasi Sistem Lama / Integrasi API'
  ];

  const budgetOptions = [
    'Fleksibel / Belum Ditentukan',
    'Rp 1.500.000 - Rp 3.000.000 (Paket Starter)',
    'Rp 3.000.000 - Rp 7.000.000 (Paket Bisnis)',
    'Di atas Rp 7.500.000 (Custom Enterprise)'
  ];

  const generateBriefText = () => {
    return [
      `*PENGAJUAN KEBUTUHAN SISTEM & PERMINTAAN PROPOSAL - DIDEV STUDIO*`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `• *Nama PIC*: ${clientName || 'Calon Klien'}`,
      companyName ? `• *Perusahaan / Usaha*: ${companyName}` : '',
      `• *Kontak*: ${contactNumber || '-'}`,
      `• *Kategori Sistem*: ${systemType}`,
      `• *Estimasi Budget*: ${budgetRange}`,
      projectBrief ? `• *Catatan Alur / Fitur*: ${projectBrief}` : '',
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Mohon dibantu review kebutuhan dan estimasi proposalnya. Terima kasih DiDev Studio!`
    ].filter(Boolean).join('\n');
  };

  const validateForm = () => {
    if (!clientName.trim()) {
      setErrorMessage('Mohon cantumkan nama PIC / nama Anda.');
      return false;
    }
    if (!contactNumber.trim()) {
      setErrorMessage('Mohon cantumkan nomor WhatsApp atau Email Anda.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleSendWhatsApp = () => {
    if (!validateForm()) return;
    soundFx.playSuccess();
    const text = encodeURIComponent(generateBriefText());
    window.open(`https://wa.me/6289673757701?text=${text}`, '_blank');
    onClose();
  };

  const handleSendEmail = () => {
    if (!validateForm()) return;
    soundFx.playSuccess();
    const subject = encodeURIComponent(`Permintaan Proposal Sistem: ${systemType} - ${companyName || clientName}`);
    const body = encodeURIComponent(generateBriefText());
    window.open(`mailto:adieabay@gmail.com?subject=${subject}&body=${body}`, '_blank');
    onClose();
  };

  const handleCopy = () => {
    soundFx.playClick(900, 0.04);
    navigator.clipboard.writeText(generateBriefText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        
        {/* Modal Header */}
        <div className="px-5 py-4 sm:px-7 sm:py-5 bg-gradient-to-r from-blue-50 via-slate-50 to-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-500/25 shrink-0">
              <FileText className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h3 id="inquiry-modal-title" className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">
                Minta Proposal & Konsultasi Spesifikasi
              </h3>
              <p className="text-xs text-slate-500">
                Respon cepat &lt; 2 jam di jam kerja • Gratis tanpa kewajiban beli
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              soundFx.playClick(700, 0.03);
              onClose();
            }}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-200/80 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer shrink-0"
            aria-label="Tutup formulir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-4 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" />
              {errorMessage}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Lengkap / PIC Usaha <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Contoh: Bpk. Hendro Wijaya"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nama Perusahaan / Bisnis (Opsional)
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Contoh: Kopi Nadi Group / PT ..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Nomor WhatsApp atau Email Resmi <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              placeholder="0812xxxxxxxx atau hendro@kopinadi.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-xs sm:text-sm outline-none transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Jenis Sistem yang Dibutuhkan
              </label>
              <select
                value={systemType}
                onChange={(e) => setSystemType(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-xs sm:text-sm outline-none transition-all cursor-pointer"
              >
                {systemOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Perkiraan Alokasi Anggaran
              </label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-xs sm:text-sm outline-none transition-all cursor-pointer"
              >
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Catatan Alur Bisnis / Masalah Saat Ini
            </label>
            <textarea
              rows={3}
              value={projectBrief}
              onChange={(e) => setProjectBrief(e.target.value)}
              placeholder="Ceritakan kendala Anda (contoh: Saat ini pencatatan manual sering selisih kas, ingin aplikasi kasir Android connect printer bluetooth dan dashboard web owner)..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/20 text-slate-800 text-xs sm:text-sm outline-none transition-all resize-none"
            />
          </div>

          {/* Value Badges */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Hak Milik Source Code
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              Respon Cepat Jam Kerja
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Garansi Resmi 1 Tahun
            </span>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-5 py-4 sm:px-7 sm:py-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <button
            onClick={handleCopy}
            type="button"
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Rangkuman Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Rangkuman</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleSendEmail}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-[#2563EB] font-bold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Email</span>
            </button>

            <button
              onClick={handleSendWhatsApp}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 active:scale-98 cursor-pointer whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Kirim WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
