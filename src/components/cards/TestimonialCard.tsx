import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Language, Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  lang: Language;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  lang,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-neutral-200 p-6 shadow-2xs hover:shadow-md transition-all duration-300 justify-between">
      <div>
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#F5B800] text-[#F5B800]" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-neutral-700 text-sm sm:text-base italic leading-relaxed mb-6">
          « {testimonial.quote[lang]} »
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-11 h-11 rounded-full object-cover border border-neutral-200 flex-shrink-0"
        />
        <div className="flex flex-col">
          <span className="text-sm font-bold text-neutral-900">{testimonial.name}</span>
          <span className="text-xs text-neutral-500 font-medium">
            {testimonial.role[lang]}
          </span>
        </div>
      </div>
    </div>
  );
};
