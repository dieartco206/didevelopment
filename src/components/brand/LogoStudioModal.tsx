import React from 'react';
import { X, CheckCircle2, Sparkles, Shield, Box, Code2 } from 'lucide-react';
import { 
  LOGO_CONCEPTS, 
  type LogoConcept, 
  getActiveLogoConcept, 
  setActiveLogoConcept 
} from '../../utils/logoState';
import { DiDevMark } from './DiDevLogo';
import { soundFx } from '../../utils/audio';

interface LogoStudioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoStudioModal: React.FC<LogoStudioModalProps> = ({ isOpen, onClose }) => {
  const [activeConcept, setActiveConcept] = React.useState<LogoConcept>(getActiveLogoConcept());

  if (!isOpen) return null;

  const handleSelect = (id: LogoConcept) => {
    soundFx.playSuccess();
    setActiveConcept(id);
    setActiveLogoConcept(id);
  };

  const getConceptIcon = (id: LogoConcept) => {
    switch (id) {
      case 'concept-2': return Sparkles;
      case 'concept-3': return Box;
      case 'concept-4': return Shield;
      default: return Code2;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 sm:py-6 bg-gradient-to-r from-blue-50 via-indigo-50/50 to-white border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center shadow-md shadow-blue-500/25">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">
                  Studio Eksplorasi Logo DiDev
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#2563EB] text-[10px] font-black uppercase">
                  4 PILIHAN ORISINAL
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Semua konsep 100% dibuat khusus secara mandiri (bukan template/clipart). Pilih konsep favorit Anda untuk diterapkan langsung!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick(600, 0.03);
              onClose();
            }}
            className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: 4 Grid Cards */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {LOGO_CONCEPTS.map((concept) => {
              const isSelected = activeConcept === concept.id;
              const MetaIcon = getConceptIcon(concept.id);

              return (
                <div
                  key={concept.id}
                  onClick={() => handleSelect(concept.id)}
                  className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer border-2 ${
                    isSelected
                      ? 'bg-blue-50/40 border-[#2563EB] shadow-xl shadow-blue-500/10 ring-4 ring-blue-500/15'
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  {/* Top Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-extrabold uppercase tracking-wider">
                      <MetaIcon className="w-3 h-3 text-[#2563EB]" />
                      <span>{concept.badge}</span>
                    </span>

                    {isSelected && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>SEDANG AKTIF</span>
                      </span>
                    )}
                  </div>

                  {/* Dual Preview Box (Light + Dark side by side) */}
                  <div className="grid grid-cols-2 gap-3 mb-5 p-3.5 rounded-xl bg-slate-100/80 border border-slate-200/80">
                    {/* Light Preview */}
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-slate-200/80 shadow-2xs">
                      <DiDevMark size={48} concept={concept.id} className="shadow-md" />
                      <span className="text-[9px] font-bold text-slate-400 mt-2 uppercase tracking-wider">Light Mode</span>
                    </div>

                    {/* Dark Preview */}
                    <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#080E1A] border border-slate-800 shadow-2xs">
                      <DiDevMark size={48} concept={concept.id} className="shadow-md shadow-blue-500/20" />
                      <span className="text-[9px] font-bold text-slate-500 mt-2 uppercase tracking-wider">Dark Mode</span>
                    </div>
                  </div>

                  {/* Text Details */}
                  <div>
                    <h4 className="text-base font-extrabold text-[#0F172A] tracking-tight">
                      {concept.name}
                    </h4>
                    <div className="text-[11px] font-bold text-[#2563EB] mt-0.5">
                      {concept.subtitle}
                    </div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {concept.description}
                    </p>
                  </div>

                  {/* Action Button */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/25'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Logo Ini Sedang Digunakan</span>
                        </>
                      ) : (
                        <span>Pilih & Terapkan Konsep Ini</span>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            💡 <strong className="text-slate-700">Tips:</strong> Logo yang Anda pilih akan langsung tersimpan dan aktif di Navbar, Footer, serta kartu komparasi.
          </div>
          <button
            onClick={() => {
              soundFx.playClick(600, 0.03);
              onClose();
            }}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-lg text-xs transition-all cursor-pointer whitespace-nowrap"
          >
            Selesai Memilih
          </button>
        </div>

      </div>
    </div>
  );
};
