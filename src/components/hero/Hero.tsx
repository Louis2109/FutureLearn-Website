import React from 'react';
import { Phone, ArrowRight, GraduationCap, Plane, Briefcase, FileCheck2, Globe, Car, Users } from 'lucide-react';
import { Language } from '../../types';
import { Button } from '../ui/Button';
import { i18nDictionary } from '../../data/company';

interface HeroProps {
  lang: Language;
  onOpenAdvisor: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onOpenAdvisor,
  onExploreServices,
}) => {
  const opportunities = [
    { label: { fr: 'Études', en: 'Studies' }, icon: <GraduationCap className="w-3.5 h-3.5" /> },
    { label: { fr: 'Voyage', en: 'Travel' }, icon: <Plane className="w-3.5 h-3.5" /> },
    { label: { fr: 'Formation', en: 'Training' }, icon: <Briefcase className="w-3.5 h-3.5" /> },
    { label: { fr: 'Visa', en: 'Visa' }, icon: <FileCheck2 className="w-3.5 h-3.5" /> },
    { label: { fr: 'Langues', en: 'Languages' }, icon: <Globe className="w-3.5 h-3.5" /> },
    { label: { fr: 'Auto-école', en: 'Driving' }, icon: <Car className="w-3.5 h-3.5" /> },
  ];

  return (
    <section id="accueil" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100/90 border border-neutral-200/80 text-[11px] sm:text-xs font-bold tracking-wider text-neutral-800 uppercase mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
              <span>
                {lang === 'fr'
                  ? 'ÉTUDES · VOYAGE · FORMATION · MOBILITÉ'
                  : 'STUDIES · TRAVEL · TRAINING · MOBILITY'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-neutral-950 tracking-tight leading-[1.12]">
              {lang === 'fr' ? (
                <>
                  Votre projet sans frontières, avec{' '}
                  <span className="relative inline-block text-neutral-950">
                    <span className="relative z-10">Future</span>
                    <span className="text-[#F5B800] relative z-10">Learn</span>
                    <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#F5B800]/25 rounded-md -z-0" />
                  </span>
                  .
                </>
              ) : (
                <>
                  Your project without borders, with{' '}
                  <span className="relative inline-block text-neutral-950">
                    <span className="relative z-10">Future</span>
                    <span className="text-[#F5B800] relative z-10">Learn</span>
                    <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#F5B800]/25 rounded-md -z-0" />
                  </span>
                  .
                </>
              )}
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              {lang === 'fr'
                ? "Nous vous accompagnons dans vos projets d'études, de voyage, de formation, d'assistance visa, de langues et d'auto-école. Des opportunités réelles. Un accompagnement humain."
                : 'We accompany you in your study, travel, vocational training, visa assistance, language courses and driving school projects. Genuine opportunities. Dedicated human support.'}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Phone className="w-4 h-4 text-neutral-950" />}
                onClick={onOpenAdvisor}
                className="font-bold shadow-md hover:shadow-lg transition-all"
              >
                {i18nDictionary.cta.speakAdvisor[lang]}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4 text-neutral-700" />}
                onClick={onExploreServices}
              >
                {i18nDictionary.cta.discoverServices[lang]}
              </Button>
            </div>

            {/* Stats Row */}
            <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-neutral-950">
                  {i18nDictionary.stats.accompanied.count}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">
                  {i18nDictionary.stats.accompanied.label[lang]}
                </div>
              </div>
              <div className="border-l border-neutral-200 pl-4">
                <div className="text-2xl sm:text-3xl font-black text-neutral-950">
                  {i18nDictionary.stats.destinations.count}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">
                  {i18nDictionary.stats.destinations.label[lang]}
                </div>
              </div>
              <div className="border-l border-neutral-200 pl-4">
                <div className="text-2xl sm:text-3xl font-black text-neutral-950">
                  {i18nDictionary.stats.satisfaction.count}
                </div>
                <div className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">
                  {i18nDictionary.stats.satisfaction.label[lang]}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic African student/traveler holding passport at airport */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Main Photo Card */}
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                alt="Jeune étudiante et voyageuse accompagnée par FutureLearn"
                className="w-full aspect-[4/5] object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Top Card: Opportunities List */}
              <div className="absolute top-4 right-4 max-w-[210px] bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-neutral-200/80 text-left">
                <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-neutral-900 mb-2">
                  <Plane className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>
                    {lang === 'fr'
                      ? 'Opportunités dans le monde'
                      : 'Opportunities Worldwide'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {opportunities.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 text-[10px] font-semibold text-neutral-700 bg-neutral-100/90 px-2 py-1 rounded-md"
                    >
                      <span className="text-[#F5B800]">{item.icon}</span>
                      <span>{item.label[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Bottom Card: Team/Future Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-neutral-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-900 text-[#F5B800] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-neutral-900">
                    {lang === 'fr'
                      ? 'Construisons votre avenir ensemble'
                      : 'Building your future together'}
                  </div>
                  <div className="text-[11px] text-neutral-500">
                    {lang === 'fr'
                      ? 'Conseillers dédiés à Yaoundé & en ligne'
                      : 'Dedicated advisors in Yaoundé & online'}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
