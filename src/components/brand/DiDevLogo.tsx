import React, { useState, useEffect } from 'react';
import { 
  type LogoConcept, 
  getActiveLogoConcept, 
  subscribeLogoConcept 
} from '../../utils/logoState';

interface DiDevMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  concept?: LogoConcept;
}

/**
 * Concept 1: The Squircle Fusion
 * Monogram D + Code Chevron > + Emerald Live Dot
 */
export const Concept1Mark: React.FC<DiDevMarkProps> = ({ size = 40, className = '', ...props }) => (
  <svg 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 select-none ${className}`}
    role="img"
    {...props}
  >
    <defs>
      <linearGradient id="c1-bg-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="c1-cyan-grad" x1="18" y1="16" x2="30" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#00D8FF" />
      </linearGradient>
      <filter id="c1-glow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>
    <rect width="48" height="48" rx="13" fill="url(#c1-bg-grad)" />
    <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="12.25" stroke="white" strokeOpacity="0.22" strokeWidth="1.5" />
    <rect x="11" y="11" width="5" height="26" rx="2.5" fill="white" filter="url(#c1-glow)" />
    <path d="M15 11 H25 C32.732 11 39 16.82 39 24 C39 31.18 32.732 37 25 37 H15" stroke="white" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" filter="url(#c1-glow)" />
    <path d="M19.5 17.5 L26 24 L19.5 30.5" stroke="url(#c1-cyan-grad)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="30.5" cy="24" r="2" fill="#10B981" />
  </svg>
);

/**
 * Concept 2: The "Di" Typographic Ligature (Super Bespoke & Authentic)
 * The spine of D acts as the letter 'i' with floating emerald spark diamond + terminal code prompt
 */
export const Concept2Mark: React.FC<DiDevMarkProps> = ({ size = 40, className = '', ...props }) => (
  <svg 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 select-none ${className}`}
    role="img"
    {...props}
  >
    <defs>
      <linearGradient id="c2-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0B132B" />
        <stop offset="100%" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="c2-blue-grad" x1="12" y1="12" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="60%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="c2-spark-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#34D399" />
        <stop offset="100%" stopColor="#10B981" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="13" fill="url(#c2-bg)" />
    <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="12.25" stroke="#38BDF8" strokeOpacity="0.25" strokeWidth="1.5" />
    {/* Floating emerald diamond (The 'i' dot) */}
    <path d="M15 7.5 L17.5 10 L15 12.5 L12.5 10 Z" fill="url(#c2-spark-grad)" />
    {/* The 'i' stem and 'D' spine */}
    <rect x="12.5" y="15" width="5" height="23" rx="2.5" fill="white" />
    {/* The sweeping 'D' arch */}
    <path d="M16.5 15 H25 C33 15 38.5 20.5 38.5 26.5 C38.5 32.5 33 38 25 38 H16.5" stroke="url(#c2-blue-grad)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Code terminal prompt '> _' inside */}
    <path d="M21.5 23 L25.5 26.5 L21.5 30" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="28" y1="30" x2="32.5" y2="30" stroke="#10B981" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

/**
 * Concept 3: The Isometric Dev Prism
 * 3D isometric faceted cube architecture forming the letter D
 */
export const Concept3Mark: React.FC<DiDevMarkProps> = ({ size = 40, className = '', ...props }) => (
  <svg 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 select-none ${className}`}
    role="img"
    {...props}
  >
    <defs>
      <linearGradient id="c3-top" x1="12" y1="8" x2="36" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#93C5FD" />
        <stop offset="100%" stopColor="#38BDF8" />
      </linearGradient>
      <linearGradient id="c3-left" x1="10" y1="16" x2="24" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="c3-right" x1="24" y1="16" x2="38" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E40AF" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="13" fill="#0F172A" />
    <rect x="0.75" y="0.75" width="46.5" height="46.5" rx="12.25" stroke="#2563EB" strokeOpacity="0.35" strokeWidth="1.5" />
    {/* Left Isometric Pillar */}
    <path d="M12 16 L22 10 L22 34 L12 40 Z" fill="url(#c3-left)" />
    {/* Top Face */}
    <path d="M22 10 L34 16 L26 21 L14 15 Z" fill="url(#c3-top)" />
    {/* Outer Isometric Curve Facet */}
    <path d="M22 10 L35 17 C39 23 38 29 33 34 L22 40 L22 32 L28 28 C31 25 31 23 28 20 L22 16 Z" fill="url(#c3-right)" />
    {/* Center Core Light Node */}
    <circle cx="24" cy="24" r="2.5" fill="#38BDF8" />
    <circle cx="24" cy="24" r="1.2" fill="#10B981" />
  </svg>
);

/**
 * Concept 4: The Apex Cyber Shield
 * Hexagonal legal & security shield with high-velocity D
 */
export const Concept4Mark: React.FC<DiDevMarkProps> = ({ size = 40, className = '', ...props }) => (
  <svg 
    viewBox="0 0 48 48" 
    width={size} 
    height={size} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`shrink-0 select-none ${className}`}
    role="img"
    {...props}
  >
    <defs>
      <linearGradient id="c4-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
      <linearGradient id="c4-cyan" x1="16" y1="16" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#67E8F9" />
        <stop offset="100%" stopColor="#06B6D4" />
      </linearGradient>
    </defs>
    {/* Cyber Hexagon Shield */}
    <path d="M24 3.5 L42 11.5 V26 C42 35.5 34 42.5 24 45.5 C14 42.5 6 35.5 6 26 V11.5 L24 3.5 Z" fill="url(#c4-bg)" />
    <path d="M24 5 L40.5 12.5 V25.5 C40.5 34 33.2 40.8 24 43.8 C14.8 40.8 7.5 34 7.5 25.5 V12.5 L24 5 Z" stroke="white" strokeOpacity="0.3" strokeWidth="1.2" />
    {/* Dynamic D Structure */}
    <path d="M16.5 15.5 H24 C29.5 15.5 33.5 19 33.5 24.5 C33.5 30 29.5 33.5 24 33.5 H16.5 V15.5 Z" stroke="white" strokeWidth="3.6" strokeLinejoin="round" />
    {/* Speed Arrow / Forward Apex */}
    <path d="M20.5 20.5 L26 24.5 L20.5 28.5" stroke="url(#c4-cyan)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="23.5" cy="24.5" r="1.8" fill="#10B981" />
  </svg>
);

/**
 * Universal DiDevMark that responds to active concept or prop override
 */
export const DiDevMark: React.FC<DiDevMarkProps> = ({ 
  size = 40, 
  className = '', 
  concept: propConcept,
  ...props 
}) => {
  const [subscribedConcept, setSubscribedConcept] = useState<LogoConcept>(getActiveLogoConcept);

  useEffect(() => {
    if (propConcept) return;
    return subscribeLogoConcept((newConcept) => {
      setSubscribedConcept(newConcept);
    });
  }, [propConcept]);

  const activeConcept = propConcept || subscribedConcept;

  switch (activeConcept) {
    case 'concept-2':
      return <Concept2Mark size={size} className={className} {...props} />;
    case 'concept-3':
      return <Concept3Mark size={size} className={className} {...props} />;
    case 'concept-4':
      return <Concept4Mark size={size} className={className} {...props} />;
    case 'concept-1':
    default:
      return <Concept1Mark size={size} className={className} {...props} />;
  }
};

interface DiDevLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  concept?: LogoConcept;
  showSubtitle?: boolean;
  showBadge?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Complete Brand Lockup (Mark + Modern Typography)
 */
export const DiDevLogo: React.FC<DiDevLogoProps> = ({
  size = 'md',
  variant = 'light',
  concept,
  showSubtitle = true,
  showBadge = true,
  className = '',
  onClick
}) => {
  const markSize = size === 'sm' ? 32 : size === 'lg' ? 46 : 40;
  
  const titleClass = size === 'sm' 
    ? 'text-base' 
    : size === 'lg' 
    ? 'text-2xl' 
    : 'text-lg sm:text-xl';

  const isDark = variant === 'dark';

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2.5 sm:gap-3 group ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Brand Icon Mark with subtle lift on hover */}
      <div className="group-hover:scale-105 transition-transform duration-200 shrink-0">
        <DiDevMark size={markSize} concept={concept} className="shadow-md shadow-blue-500/25" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-sans font-extrabold ${titleClass} tracking-tight whitespace-nowrap ${isDark ? 'text-white' : 'text-[#0F172A]'}`}>
            DiDev<span className="text-[#2563EB]">.Studio</span>
          </span>
          {showBadge && (
            <span className={`hidden sm:inline-block px-1.5 py-0.2 text-[9px] font-bold rounded whitespace-nowrap shrink-0 ${
              isDark 
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/30' 
                : 'bg-emerald-50 border border-emerald-200 text-emerald-700'
            }`}>
              OFFICIAL
            </span>
          )}
        </div>
        {showSubtitle && (
          <div className={`text-[9px] sm:text-[10px] font-medium tracking-wide uppercase whitespace-nowrap ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Web & Android App Studio
          </div>
        )}
      </div>
    </div>
  );
};
