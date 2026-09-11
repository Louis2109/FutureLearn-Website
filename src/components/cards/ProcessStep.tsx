import React from 'react';
import { Phone, FileSearch, Users, Flag, ArrowRight } from 'lucide-react';
import { Language, ProcessStepItem } from '../../types';

interface ProcessStepProps {
  step: ProcessStepItem;
  index: number;
  totalSteps: number;
  lang: Language;
}

const getStepIcon = (name: string) => {
  switch (name) {
    case 'Phone':
      return <Phone className="w-5 h-5 text-neutral-950" />;
    case 'FileSearch':
      return <FileSearch className="w-5 h-5 text-neutral-950" />;
    case 'Users':
      return <Users className="w-5 h-5 text-neutral-950" />;
    case 'Flag':
      return <Flag className="w-5 h-5 text-neutral-950" />;
    default:
      return <Phone className="w-5 h-5 text-neutral-950" />;
  }
};

export const ProcessStep: React.FC<ProcessStepProps> = ({
  step,
  index,
  totalSteps,
  lang,
}) => {
  const isLast = index === totalSteps - 1;

  return (
    <div className="relative flex flex-col items-center md:items-start text-center md:text-left flex-1">
      {/* Top indicator: Yellow circle with number + icon */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F5B800] text-neutral-950 font-extrabold text-base shadow-sm">
          {step.number}
        </div>
        <div className="p-2 rounded-lg bg-neutral-100 hidden sm:flex items-center justify-center">
          {getStepIcon(step.iconName)}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-base font-bold text-neutral-900 mb-2">
        {step.title[lang]}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xs">
        {step.description[lang]}
      </p>

      {/* Connecting desktop arrow */}
      {!isLast && (
        <div className="hidden lg:block absolute top-6 -right-6 text-neutral-300 transform -translate-y-1/2">
          <ArrowRight className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};
