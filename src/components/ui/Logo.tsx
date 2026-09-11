import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LogoProps {
  className?: string;
  showSlogan?: boolean;
  inverted?: boolean;
  lang?: 'fr' | 'en';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showSlogan = true,
  inverted = false,
  lang = 'fr',
}) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-[#F5B800] shadow-sm flex-shrink-0">
        <GraduationCap className="w-6 h-6 text-[#F5B800]" />
        {/* Yellow brand curve accent */}
        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#F5B800] rounded-full border-2 border-white" />
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`font-extrabold text-xl tracking-tight leading-none ${inverted ? 'text-white' : 'text-neutral-900'}`}>
          Future<span className="text-[#F5B800]">Learn</span>
        </span>
        {showSlogan && (
          <span className={`text-[10px] font-medium tracking-wide mt-0.5 ${inverted ? 'text-neutral-400' : 'text-neutral-500'}`}>
            {lang === 'fr' ? 'Votre avenir, sans frontières' : 'Your future, without borders'}
          </span>
        )}
      </div>
    </div>
  );
};
