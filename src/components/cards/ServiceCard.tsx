import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language, ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  lang: Language;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  lang,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col bg-white rounded-2xl border border-neutral-200/90 overflow-hidden hover:border-neutral-300 hover:shadow-lg transition-all duration-300 cursor-pointer text-left"
    >
      {/* Image container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        <img
          src={service.image}
          alt={service.title[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        
        {/* Optional Badge */}
        {service.badge && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-neutral-900 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
            {service.badge[lang]}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between">
        <div>
          <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors">
            {service.title[lang]}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed line-clamp-3">
            {service.description[lang]}
          </p>
        </div>

        {/* CTA link */}
        <div className="pt-5 mt-auto flex items-center gap-1.5 text-sm font-semibold text-neutral-900 group-hover:text-[#B8860B] transition-colors">
          <span>{lang === 'fr' ? 'Découvrir' : 'Discover'}</span>
          <ArrowRight className="w-4 h-4 text-[#F5B800] transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};
