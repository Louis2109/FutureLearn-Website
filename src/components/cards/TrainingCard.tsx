import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, FormationProgram } from '../../types';

interface TrainingCardProps {
  formation: FormationProgram;
  lang: Language;
  onClick?: () => void;
}

export const TrainingCard: React.FC<TrainingCardProps> = ({
  formation,
  lang,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:border-neutral-300 hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        <img
          src={formation.image}
          alt={formation.title[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
        {formation.duration && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-neutral-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
            {formation.duration}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between p-4 bg-white">
        <h3 className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors line-clamp-1">
          {formation.title[lang]}
        </h3>
        <span className="p-1.5 rounded-full bg-neutral-50 group-hover:bg-[#F5B800] group-hover:text-neutral-950 text-neutral-600 transition-colors flex-shrink-0 ml-2">
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  );
};
