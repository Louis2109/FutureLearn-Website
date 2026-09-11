import React, { useState } from 'react';
import { ArrowRight, Plane, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language, ProjectType, ServiceItem } from './types';

// Navigation & Layout
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/layout/Footer';

// Core UI Components
import { Button } from './components/ui/Button';
import { SectionHeading } from './components/ui/SectionHeading';
import { ServiceCard } from './components/cards/ServiceCard';
import { DestinationCard } from './components/cards/DestinationCard';
import { TrainingCard } from './components/cards/TrainingCard';
import { LanguageCard } from './components/cards/LanguageCard';
import { TestimonialCard } from './components/cards/TestimonialCard';
import { ProcessStep } from './components/cards/ProcessStep';
import { FAQAccordion } from './components/faq/FAQAccordion';
import { LeadModal } from './components/lead/LeadModal';

// Dedicated Sections
import { Hero } from './components/hero/Hero';
import { PillarsSection } from './components/sections/PillarsSection';
import { VisaSection } from './components/sections/VisaSection';
import { AutoEcoleSection } from './components/sections/AutoEcoleSection';
import { FinalCTASection } from './components/sections/FinalCTASection';

// Business Data
import { servicesData } from './data/services';
import { destinationsData } from './data/destinations';
import { formationsData } from './data/formations';
import { languagesData } from './data/languages';
import { testimonialsData } from './data/testimonials';
import { faqData } from './data/faq';
import { processStepsData } from './data/process';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType>('etudes');

  const handleOpenAdvisor = (project: ProjectType = 'etudes') => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    const projectMap: Record<string, ProjectType> = {
      visa: 'visa',
      flight: 'billet',
      training: 'formation',
      language: 'langues',
      driving: 'auto-ecole',
    };
    handleOpenAdvisor(projectMap[service.id] || 'autre');
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 selection:bg-[#F5B800] selection:text-neutral-950 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* =========================================================================
          01 — NAVBAR
          ========================================================================= */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenAdvisorModal={() => handleOpenAdvisor('etudes')}
        onSelectService={handleSelectService}
        onNavigate={handleScrollTo}
      />

      <main className="flex-1">
        {/* =========================================================================
            02 — HERO
            ========================================================================= */}
        <Hero
          lang={lang}
          onOpenAdvisor={() => handleOpenAdvisor('etudes')}
          onExploreServices={() => handleScrollTo('services')}
        />

        {/* =========================================================================
            03 — NOS SERVICES
            ========================================================================= */}
        <section id="services" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badgeText={lang === 'fr' ? 'NOS SERVICES' : 'OUR SERVICES'}
              title={
                lang === 'fr'
                  ? 'Des solutions adaptées à chaque étape de votre projet.'
                  : 'Tailored solutions for every stage of your project.'
              }
              subtitle={
                lang === 'fr'
                  ? 'FutureLearn vous accompagne avec rigueur, écoute et professionnalisme pour concrétiser vos ambitions.'
                  : 'FutureLearn supports you with rigor, attentive listening and professionalism to make your ambitions a reality.'
              }
              linkText={lang === 'fr' ? 'Voir tous nos services' : 'View all services'}
              onLinkClick={() => handleOpenAdvisor('autre')}
            />

            {/* 5 Primary Service Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {servicesData.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  lang={lang}
                  onClick={() => handleSelectService(service)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            04 — POURQUOI FUTURELEARN
            ========================================================================= */}
        <PillarsSection
          lang={lang}
          onOpenAdvisor={() => handleOpenAdvisor('autre')}
        />

        {/* =========================================================================
            05 — PROCESSUS
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badgeText={lang === 'fr' ? 'COMMENT ÇA MARCHE ?' : 'HOW IT WORKS'}
              title={
                lang === 'fr'
                  ? 'Un processus simple et efficace.'
                  : 'A simple and effective process.'
              }
              subtitle={
                lang === 'fr'
                  ? 'Une méthodologie claire en 4 étapes pour sécuriser chaque démarche de votre parcours.'
                  : 'A clear 4-step methodology to secure every stage of your journey.'
              }
            />

            <div className="p-8 sm:p-12 rounded-3xl bg-neutral-50/80 border border-neutral-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                {processStepsData.map((step, idx) => (
                  <ProcessStep
                    key={step.number}
                    step={step}
                    index={idx}
                    totalSteps={processStepsData.length}
                    lang={lang}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            06 — ASSISTANCE VISA
            ========================================================================= */}
        <VisaSection
          lang={lang}
          onOpenAdvisor={() => handleOpenAdvisor('visa')}
        />

        {/* =========================================================================
            07 — BILLETS D'AVION + DESTINATIONS
            ========================================================================= */}
        <section id="destinations" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro flight banner */}
            <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 text-[#F5B800] flex items-center justify-center flex-shrink-0">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">
                    {lang === 'fr' ? "Recherche & Réservation de Billets d'avion" : 'Flight Ticket Search & Booking'}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-0.5">
                    {lang === 'fr'
                      ? 'Tarifs compétitifs, accompagnement sur les formalités et assistance complète pour les premiers voyageurs.'
                      : 'Competitive fares, guidance on formalities, and full assistance for first-time travelers.'}
                  </p>
                </div>
              </div>
              <Button
                variant="primary"
                size="md"
                onClick={() => handleOpenAdvisor('billet')}
                className="font-bold flex-shrink-0"
              >
                {lang === 'fr' ? "Réserver un vol" : 'Book a flight'}
              </Button>
            </div>

            {/* Destinations Heading */}
            <SectionHeading
              badgeText={lang === 'fr' ? 'DESTINATIONS' : 'DESTINATIONS'}
              title={
                lang === 'fr'
                  ? 'Explorez le monde avec FutureLearn.'
                  : 'Explore the world with FutureLearn.'
              }
              subtitle={
                lang === 'fr'
                  ? 'Nos destinations les plus demandées pour les études, le travail et le séjour touristique.'
                  : 'Our most requested destinations for study, career and tourism.'
              }
              linkText={lang === 'fr' ? 'Voir toutes les destinations' : 'View all destinations'}
              onLinkClick={() => handleOpenAdvisor('voyage')}
            />

            {/* 10 Destinations Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
              {destinationsData.map((dest) => (
                <DestinationCard
                  key={dest.id}
                  destination={dest}
                  lang={lang}
                  onClick={() => handleOpenAdvisor('voyage')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            08 — FORMATIONS PROFESSIONNELLES
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-neutral-50/60 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badgeText={lang === 'fr' ? 'FORMATIONS PROFESSIONNELLES' : 'VOCATIONAL TRAINING'}
              title={
                lang === 'fr'
                  ? 'Développez des compétences pour un meilleur avenir.'
                  : 'Build practical skills for a brighter future.'
              }
              subtitle={
                lang === 'fr'
                  ? 'Des cursus certifiants, pratiques et directement connectés aux exigences du marché de l’emploi.'
                  : 'Practical, accredited programs directly aligned with job market requirements.'
              }
              linkText={lang === 'fr' ? 'Voir toutes les formations' : 'View all trainings'}
              onLinkClick={() => handleOpenAdvisor('formation')}
            />

            {/* 6 Formations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {formationsData.map((formation) => (
                <TrainingCard
                  key={formation.id}
                  formation={formation}
                  lang={lang}
                  onClick={() => handleOpenAdvisor('formation')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            09 — COURS DE LANGUES
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badgeText={lang === 'fr' ? 'COURS DE LANGUES' : 'LANGUAGE COURSES'}
              title={
                lang === 'fr'
                  ? 'Apprenez aujourd’hui. Allez plus loin demain.'
                  : 'Learn today. Go further tomorrow.'
              }
              subtitle={
                lang === 'fr'
                  ? 'Préparez et certifiez vos compétences linguistiques aux examens officiels internationaux.'
                  : 'Prepare and certify your language proficiency for recognized international exams.'
              }
              linkText={lang === 'fr' ? 'Découvrir tous nos cours' : 'Explore all courses'}
              onLinkClick={() => handleOpenAdvisor('langues')}
            />

            {/* 5 Languages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {languagesData.map((course) => (
                <LanguageCard
                  key={course.id}
                  course={course}
                  lang={lang}
                  onClick={() => handleOpenAdvisor('langues')}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            10 — AUTO-ÉCOLE
            ========================================================================= */}
        <AutoEcoleSection
          lang={lang}
          onOpenAdvisor={() => handleOpenAdvisor('auto-ecole')}
        />

        {/* =========================================================================
            11 — TÉMOIGNAGES
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-neutral-50/60 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#B8860B] uppercase mb-2">
                  <span className="w-2 h-2 rounded-xs bg-[#F5B800] inline-block" />
                  <span>{lang === 'fr' ? 'TÉMOIGNAGES' : 'TESTIMONIALS'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
                  {lang === 'fr' ? 'Ils nous font confiance.' : 'They trust us.'}
                </h2>
              </div>

              {/* Navigation arrows hint */}
              <div className="flex items-center gap-2">
                <button
                  aria-label="Témoignage précédent"
                  className="p-2 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  aria-label="Témoignage suivant"
                  className="p-2 rounded-full border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialsData.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            12 — FAQ
            ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badgeText="FAQ"
              title={lang === 'fr' ? 'Questions fréquentes.' : 'Frequently Asked Questions.'}
              subtitle={
                lang === 'fr'
                  ? 'Trouvez rapidement les réponses aux interrogations les plus courantes sur nos services.'
                  : 'Quickly find answers to the most common questions about our services.'
              }
              align="center"
            />

            <div className="mt-8">
              <FAQAccordion items={faqData} lang={lang} />
            </div>
          </div>
        </section>

        {/* =========================================================================
            13 — FINAL CTA
            ========================================================================= */}
        <FinalCTASection
          lang={lang}
          onOpenAdvisor={() => handleOpenAdvisor('etudes')}
        />
      </main>

      {/* =========================================================================
          14 — FOOTER
          ========================================================================= */}
      <Footer
        lang={lang}
        onSelectService={handleSelectService}
        onNavigate={handleScrollTo}
      />

      {/* Lead Generation Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        initialProject={selectedProject}
      />
    </div>
  );
}
