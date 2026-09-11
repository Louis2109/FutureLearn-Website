import React from 'react';
import { GraduationCap, Briefcase, Compass, Users, Building2, CheckCircle, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

interface VisaSectionProps {
  lang: Language;
  onOpenAdvisor: () => void;
}

export const VisaSection: React.FC<VisaSectionProps> = ({
  lang,
  onOpenAdvisor,
}) => {
  const visaCategories = [
    {
      id: 'student',
      title: { fr: 'Visa Étudiant', en: 'Student Visa' },
      description: {
        fr: 'Admission universitaire, garanties financières, préparation de l’entretien consulaire et suivi minutieux.',
        en: 'University admission, financial guarantees, consular interview preparation and meticulous follow-up.',
      },
      icon: <GraduationCap className="w-5 h-5 text-[#F5B800]" />,
    },
    {
      id: 'work',
      title: { fr: 'Visa Travail', en: 'Work Visa' },
      description: {
        fr: 'Contrats professionnels, conformité des pièces administratives et orientation selon les exigences du pays hôte.',
        en: 'Employment contracts, administrative compliance and guidance according to host country requirements.',
      },
      icon: <Briefcase className="w-5 h-5 text-[#F5B800]" />,
    },
    {
      id: 'tourist',
      title: { fr: 'Visa Touristique', en: 'Tourist Visa' },
      description: {
        fr: 'Itinéraire de voyage, réservations d’hôtels, attestations d’accueil et justification des attaches dans le pays d’origine.',
        en: 'Travel itinerary, hotel reservations, host certificates and justification of home country ties.',
      },
      icon: <Compass className="w-5 h-5 text-[#F5B800]" />,
    },
    {
      id: 'family',
      title: { fr: 'Visa Famille', en: 'Family Visa' },
      description: {
        fr: 'Regroupement familial, visites aux proches et démarches pour séjours de moyenne ou longue durée.',
        en: 'Family reunification, visiting relatives and procedures for medium or long-term family stays.',
      },
      icon: <Users className="w-5 h-5 text-[#F5B800]" />,
    },
    {
      id: 'business',
      title: { fr: 'Visa Business', en: 'Business Visa' },
      description: {
        fr: 'Lettres d’invitation d’entreprises, participation à des congrès, salons professionnels et missions d’affaires.',
        en: 'Corporate invitation letters, congress attendance, trade shows and commercial exploration missions.',
      },
      icon: <Building2 className="w-5 h-5 text-[#F5B800]" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-neutral-50/50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText={lang === 'fr' ? 'ASSISTANCE VISA' : 'VISA ASSISTANCE'}
          title={
            lang === 'fr'
              ? 'Votre dossier préparé avec rigueur et méthode.'
              : 'Your application prepared with rigor and method.'
          }
          subtitle={
            lang === 'fr'
              ? 'Une démarche transparente et structurée. Nous maximisons la solidité de votre dossier sans jamais promettre d’accord automatique.'
              : 'A transparent and structured approach. We maximize application strength without ever claiming guaranteed approvals.'
          }
        />

        {/* 5 Visa Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaCategories.map((visa) => (
            <div
              key={visa.id}
              className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-[#F5B800] flex items-center justify-center mb-4">
                  {visa.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {visa.title[lang]}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {visa.description[lang]}
                </p>
              </div>

              <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-neutral-800">
                <CheckCircle className="w-4 h-4 text-[#F5B800]" />
                <span>
                  {lang === 'fr' ? 'Analyse & préparation' : 'Analysis & preparation'}
                </span>
              </div>
            </div>
          ))}

          {/* 6th Card: Action Card */}
          <div className="p-6 rounded-2xl bg-neutral-900 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5B800] text-neutral-950 text-xs font-extrabold mb-4">
                {lang === 'fr' ? 'Évaluation préalable' : 'Preliminary Evaluation'}
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                {lang === 'fr' ? 'Faites évaluer votre profil' : 'Have your profile evaluated'}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {lang === 'fr'
                  ? 'Un conseiller étudie vos pièces et vos objectifs pour vous orienter vers la procédure la plus adaptée.'
                  : 'An advisor examines your documents and goals to orient you toward the most appropriate procedure.'}
              </p>
            </div>

            <div className="pt-6">
              <Button
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
                onClick={onOpenAdvisor}
                className="font-bold"
              >
                {lang === 'fr' ? 'Parler à un conseiller visa' : 'Consult a visa advisor'}
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
