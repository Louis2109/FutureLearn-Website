import React from 'react';
import { Language, Destination } from '../../types';

interface DestinationCardProps {
  destination: Destination;
  lang: Language;
  onClick?: () => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  lang,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col items-center cursor-pointer select-none text-center"
    >
      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-2xs group-hover:shadow-md group-hover:border-neutral-300 transition-all duration-300">
        <img
          src={destination.image}
          alt={destination.name[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />
      </div>
      <span className="mt-2.5 text-sm font-bold text-neutral-800 group-hover:text-neutral-950 transition-colors">
        {destination.name[lang]}
      </span>
    </div>
  );
};
