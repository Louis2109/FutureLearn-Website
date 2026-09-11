import React from 'react';
import { ShieldCheck, Calendar, Award, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface AutoEcoleSectionProps {
  lang: Language;
  onOpenAdvisor: () => void;
}

export const AutoEcoleSection: React.FC<AutoEcoleSectionProps> = ({
  lang,
  onOpenAdvisor,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={lang === 'fr' ? 'AUTO-ÉCOLE' : 'DRIVING SCHOOL'}
          title={
            lang === 'fr'
              ? 'Prenez la route vers votre indépendance.'
              : 'Take the road to your independence.'
          }
          subtitle={
            lang === 'fr'
              ? 'Formation au code et à la conduite avec des moniteurs certifiés et pédagogues.'
              : 'Traffic law and driving lessons with certified and patient instructors.'
          }
          linkText={lang === 'fr' ? 'En savoir plus' : 'Learn more'}
          onLinkClick={onOpenAdvisor}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Permis A: Moto */}
          <div className="group flex flex-col sm:flex-row items-center bg-neutral-50/70 border border-neutral-200 rounded-3xl p-6 sm:p-8 hover:border-neutral-300 hover:shadow-lg transition-all duration-300">
            <div className="w-full sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden mb-5 sm:mb-0 sm:mr-6 flex-shrink-0 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
                alt="Permis A Moto"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 text-left">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#F5B800] text-neutral-950 font-extrabold text-xs mb-2">
                  Permis A
                </div>
                <h3 className="text-xl font-extrabold text-neutral-900 mb-2">
                  {lang === 'fr' ? 'Conduite deux-roues' : 'Motorcycle License'}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {lang === 'fr'
                    ? 'Conduisez vos deux-roues en toute sécurité. Maîtrise des trajectoires, équilibre et règles de circulation en milieu urbain.'
                    : 'Ride motorcycles with total confidence. Lane control, balance and urban traffic navigation.'}
                </p>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  onClick={onOpenAdvisor}
                  className="font-bold"
                >
                  {lang === 'fr' ? 'Réserver ma session' : 'Book a session'}
                </Button>
              </div>
            </div>
          </div>

          {/* Permis B: Voiture */}
          <div className="group flex flex-col sm:flex-row items-center bg-neutral-50/70 border border-neutral-200 rounded-3xl p-6 sm:p-8 hover:border-neutral-300 hover:shadow-lg transition-all duration-300">
            <div className="w-full sm:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden mb-5 sm:mb-0 sm:mr-6 flex-shrink-0 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
                alt="Permis B Voiture"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between flex-1 text-left">
              <div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#F5B800] text-neutral-950 font-extrabold text-xs mb-2">
                  Permis B
                </div>
                <h3 className="text-xl font-extrabold text-neutral-900 mb-2">
                  {lang === 'fr' ? 'Véhicules légers' : 'Car License (Category B)'}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {lang === 'fr'
                    ? 'Apprenez à conduire et obtenez votre permis dans un cadre professionnel avec simulateur et véhicules récents bien entretenus.'
                    : 'Learn to drive and earn your license in a professional setting with practice and modern, well-maintained vehicles.'}
                </p>
              </div>
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  onClick={onOpenAdvisor}
                  className="font-bold"
                >
                  {lang === 'fr' ? 'Réserver ma session' : 'Book a session'}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees row */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-neutral-100 shadow-2xs">
            <div className="p-2 rounded-xl bg-neutral-100 text-[#F5B800]">
              <ShieldCheck className="w-5 h-5 text-neutral-950" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-neutral-900">
                {lang === 'fr' ? 'Sécurité & conformité' : 'Safety & Compliance'}
              </div>
              <div className="text-neutral-500">
                {lang === 'fr' ? 'Véhicules à double commande' : 'Dual-control vehicles'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-neutral-100 shadow-2xs">
            <div className="p-2 rounded-xl bg-neutral-100 text-[#F5B800]">
              <Calendar className="w-5 h-5 text-neutral-950" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-neutral-900">
                {lang === 'fr' ? 'Créneaux flexibles' : 'Flexible Schedules'}
              </div>
              <div className="text-neutral-500">
                {lang === 'fr' ? 'Matin, après-midi et week-ends' : 'Morning, afternoon & weekends'}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-neutral-100 shadow-2xs">
            <div className="p-2 rounded-xl bg-neutral-100 text-[#F5B800]">
              <Award className="w-5 h-5 text-neutral-950" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-neutral-900">
                {lang === 'fr' ? 'Pédagogie bienveillante' : 'Supportive Teaching'}
              </div>
              <div className="text-neutral-500">
                {lang === 'fr' ? 'Taux élevé de réussite à l’examen' : 'High exam pass rate'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
