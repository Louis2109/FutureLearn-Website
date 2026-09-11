import React from 'react';
import { UserCheck, ShieldCheck, Layers, Globe, Star, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { pillarsData } from '../../data/process';
import { Button } from '../ui/Button';

interface PillarsSectionProps {
  lang: Language;
  onOpenAdvisor: () => void;
}

const getPillarIcon = (name: string) => {
  switch (name) {
    case 'UserCheck':
      return <UserCheck className="w-6 h-6 text-[#F5B800]" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-6 h-6 text-[#F5B800]" />;
    case 'Layers':
      return <Layers className="w-6 h-6 text-[#F5B800]" />;
    case 'Globe':
      return <Globe className="w-6 h-6 text-[#F5B800]" />;
    case 'Star':
      return <Star className="w-6 h-6 text-[#F5B800]" />;
    default:
      return <UserCheck className="w-6 h-6 text-[#F5B800]" />;
  }
};

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  lang,
  onOpenAdvisor,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-neutral-50/60 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#B8860B] uppercase mb-3">
              <span className="w-2 h-2 rounded-xs bg-[#F5B800] inline-block" />
              <span>{lang === 'fr' ? 'POURQUOI FUTURELEARN ?' : 'WHY FUTURELEARN ?'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight leading-tight">
              {lang === 'fr'
                ? 'Plus qu’un service, un véritable partenaire.'
                : 'More than a service, a genuine partner.'}
            </h2>
            <p className="mt-4 text-base text-neutral-600 leading-relaxed">
              {lang === 'fr'
                ? 'Nous mettons notre expertise au service de vos ambitions, avec un accompagnement personnalisé et des solutions fiables.'
                : 'We bring our expertise to your ambitions, with personalized support and reliable solutions.'}
            </p>
            <div className="mt-6">
              <Button
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4 text-neutral-950" />}
                onClick={onOpenAdvisor}
                className="font-bold shadow-xs hover:shadow"
              >
                {lang === 'fr' ? 'En savoir plus' : 'Learn more'}
              </Button>
            </div>
          </div>

          {/* Right 5 Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
              {pillarsData.map((pillar) => (
                <div
                  key={pillar.id}
                  className="flex flex-col items-center text-center p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 text-[#F5B800] flex items-center justify-center mb-3.5 shadow-xs">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                    {pillar.title[lang]}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
