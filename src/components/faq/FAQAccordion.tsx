import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem, Language } from '../../types';

interface FAQAccordionProps {
  items: FAQItem[];
  lang: Language;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, lang }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className="py-4 sm:py-5">
            <button
              id={`faq-btn-${item.id}`}
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between text-left gap-4 font-bold text-base sm:text-lg text-neutral-900 hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800] rounded-lg transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
            >
              <span>{item.question[lang]}</span>
              <span className="flex-shrink-0 p-1 rounded-full bg-neutral-100 text-neutral-800 transition-colors">
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </span>
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-btn-${item.id}`}
                className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed pr-8 animate-in fade-in duration-200"
              >
                {item.answer[lang]}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
