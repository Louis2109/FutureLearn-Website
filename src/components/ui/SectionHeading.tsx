import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  linkText?: string;
  linkHref?: string;
  onLinkClick?: () => void;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  linkText,
  linkHref,
  onLinkClick,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={cn(
        'mb-10 sm:mb-12',
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-4',
        className
      )}
    >
      <div className={align === 'center' ? 'flex flex-col items-center' : 'max-w-2xl'}>
        {badgeText && (
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#B8860B] uppercase mb-2.5">
            <span className="w-2 h-2 rounded-xs bg-[#F5B800] inline-block" />
            <span>{badgeText}</span>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-neutral-600 text-base sm:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {linkText && (
        <div className="flex-shrink-0 pt-2 md:pt-0">
          <a
            href={linkHref || '#'}
            onClick={(e) => {
              if (onLinkClick) {
                e.preventDefault();
                onLinkClick();
              }
            }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-[#B8860B] transition-colors group cursor-pointer"
          >
            <span>{linkText}</span>
            <ArrowRight className="w-4 h-4 text-[#F5B800] transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      )}
    </div>
  );
};
