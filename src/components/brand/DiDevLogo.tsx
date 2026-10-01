import React from 'react';

interface DiDevMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

/**
 * DiDevMark: Official Vector Logomark for DiDevelopment Studio
 * Geometric fusion of:
 * 1. Capital letter 'D' (DiDevelopment / DiDev)
 * 2. Developer terminal chevron '>' (Custom Software & Coding)
 * 3. Emerald live-status pulse (100% Online, Reliable, Production-Grade)
 */
export const DiDevMark: React.FC<DiDevMarkProps> = ({ 
  size = 40, 
  className = '', 
  ...props 
}) => {
  return (
    <svg 
      viewBox="0 0 48 48" 
      width={size} 
      height={size} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="DiDev Studio Logo Mark"
      role="img"
      {...props}
    >
      <defs>
        {/* Core Royal Cobalt Gradient */}
        <linearGradient id="didev-bg-grad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>

        {/* Electric Cyan Neon Gradient for Inner Chevron */}
        <linearGradient id="didev-cyan-grad" x1="18" y1="16" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#00D8FF" />
        </linearGradient>

        {/* Soft Ambient Depth */}
        <filter id="didev-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Squircle Tile Base */}
      <rect 
        width="48" 
        height="48" 
        rx="13" 
        fill="url(#didev-bg-grad)" 
      />
      
      {/* Precision Inner Specular Edge */}
      <rect 
        x="0.75" 
        y="0.75" 
        width="46.5" 
        height="46.5" 
        rx="12.25" 
        stroke="white" 
        strokeOpacity="0.22" 
        strokeWidth="1.5" 
      />

      {/* 1. Left Vertical Pillar / Spine of 'D' */}
      <rect 
        x="11" 
        y="11" 
        width="5" 
        height="26" 
        rx="2.5" 
        fill="white" 
        filter="url(#didev-glow)"
      />

      {/* 2. Outer Loop of 'D' (Precision Tech Arc) */}
      <path 
        d="M15 11 H25 C32.732 11 39 16.82 39 24 C39 31.18 32.732 37 25 37 H15" 
        stroke="white" 
        strokeWidth="4.8" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        filter="url(#didev-glow)"
      />

      {/* 3. Inner Code Chevron '>' (Developer Signature) */}
      <path 
        d="M19.5 17.5 L26 24 L19.5 30.5" 
        stroke="url(#didev-cyan-grad)" 
        strokeWidth="3.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* 4. Emerald Live/Production Spark (System Active & Verified) */}
      <circle 
        cx="30.5" 
        cy="24" 
        r="2" 
        fill="#10B981" 
      />
    </svg>
  );
};

interface DiDevLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
  showBadge?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * DiDevLogo: Complete Brand Lockup (Mark + Modern Typography)
 */
export const DiDevLogo: React.FC<DiDevLogoProps> = ({
  size = 'md',
  variant = 'light',
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
        <DiDevMark size={markSize} className="shadow-md shadow-blue-500/25" />
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
