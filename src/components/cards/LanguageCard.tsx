import React from 'react';
import { Clock } from 'lucide-react';
import { Language, LanguageCourse } from '../../types';

interface LanguageCardProps {
  course: LanguageCourse;
  lang: Language;
  onClick?: () => void;
}

export const LanguageCard: React.FC<LanguageCardProps> = ({
  course,
  lang,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col bg-white rounded-2xl border border-neutral-200 p-5 hover:border-neutral-300 hover:shadow-md transition-all duration-300 cursor-pointer text-left justify-between"
    >
      <div>
        {/* Flag + Language Title */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl select-none" role="img" aria-label={course.language[lang]}>
            {course.flag}
          </span>
          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">
            {course.language[lang]}
          </h3>
        </div>

        {/* Certifications badges */}
        <div className="text-xs text-neutral-600 mb-4 min-h-[32px] line-clamp-2 font-medium">
          {course.certifications.join(', ')}
        </div>
      </div>

      {/* Schedule footer */}
      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 text-xs text-neutral-700">
          <Clock className="w-3.5 h-3.5 text-[#F5B800]" />
          <span className="font-bold text-neutral-900">10h</span>
          <span>/ {lang === 'fr' ? 'semaine' : 'week'}</span>
        </div>
        <span className="text-xs font-semibold text-[#B8860B] opacity-0 group-hover:opacity-100 transition-opacity">
          {lang === 'fr' ? 'S’inscrire →' : 'Enroll →'}
        </span>
      </div>
    </div>
  );
};
