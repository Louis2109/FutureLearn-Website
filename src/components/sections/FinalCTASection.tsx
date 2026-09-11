import React from 'react';
import { Phone, GraduationCap, Plane, Briefcase, FileCheck2, Globe, Car } from 'lucide-react';
import { Language } from '../../types';
import { Button } from '../ui/Button';

interface FinalCTASectionProps {
  lang: Language;
  onOpenAdvisor: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  lang,
  onOpenAdvisor,
}) => {
  const domains = [
    { label: { fr: 'Études', en: 'Studies' }, icon: <GraduationCap className="w-4 h-4" /> },
    { label: { fr: 'Voyage', en: 'Travel' }, icon: <Plane className="w-4 h-4" /> },
    { label: { fr: 'Formation', en: 'Training' }, icon: <Briefcase className="w-4 h-4" /> },
    { label: { fr: 'Visa', en: 'Visa' }, icon: <FileCheck2 className="w-4 h-4" /> },
    { label: { fr: 'Langues', en: 'Languages' }, icon: <Globe className="w-4 h-4" /> },
    { label: { fr: 'Auto-école', en: 'Driving' }, icon: <Car className="w-4 h-4" /> },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-neutral-950 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 sm:p-12 lg:p-14">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-xs font-bold text-[#F5B800] uppercase mb-4 tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
              <span>{lang === 'fr' ? 'PASSEZ À L’ACTION' : 'TAKE ACTION'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {lang === 'fr'
                ? 'Votre projet commence par une conversation.'
                : 'Your project starts with a conversation.'}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              {lang === 'fr'
                ? 'Parlez-nous de votre projet et découvrez comment FutureLearn peut vous accompagner vers la réussite de votre mobilité internationale.'
                : 'Tell us about your plans and discover how FutureLearn can support you toward successful international mobility.'}
            </p>

            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Phone className="w-4 h-4 text-neutral-950" />}
                onClick={onOpenAdvisor}
                className="font-extrabold text-base shadow-lg hover:shadow-xl"
              >
                {lang === 'fr' ? 'Parler à un conseiller' : 'Speak to an advisor'}
              </Button>
            </div>
          </div>

          {/* Right Column: Visual and domain pills list */}
          <div className="lg:col-span-5 relative flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-full sm:w-1/2 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-neutral-700 shadow-xl bg-neutral-800 flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80"
                alt="Voyageur international FutureLearn"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            {/* Domains vertical badge list */}
            <div className="w-full sm:w-1/2 flex flex-col gap-2.5">
              {domains.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-neutral-800/90 border border-neutral-700/80 hover:border-[#F5B800] transition-colors"
                >
                  <span className="p-1.5 rounded-lg bg-neutral-900 text-[#F5B800]">
                    {item.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-100">
                    {item.label[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
