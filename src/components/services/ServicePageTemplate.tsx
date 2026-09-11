import React, { useState } from 'react';
import {
  ChevronRight,
  CheckCircle2,
  Phone,
  MessageCircle,
  HelpCircle,
  AlertCircle,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Globe2,
} from 'lucide-react';
import { Language, ProjectType } from '../../types';
import { ServiceDetailData, ServiceOfferingItem } from '../../data/serviceDetails';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
import { companyInfo } from '../../data/company';
import { destinationsData } from '../../data/destinations';

interface ServicePageTemplateProps {
  data: ServiceDetailData;
  lang: Language;
  onOpenAdvisor: (projectType: ProjectType) => void;
  onNavigateHome: () => void;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  data,
  lang,
  onOpenAdvisor,
  onNavigateHome,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour FutureLearn, je vous contacte au sujet du service : ${data.hero.h1[lang]}. J'aimerais avoir plus d'informations et échanger avec un conseiller.`
  );
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="bg-white text-neutral-900">
      {/* =========================================================================
          01 — BREADCRUMB & HERO
          ========================================================================= */}
      <section className="relative pt-6 pb-16 lg:pb-20 border-b border-neutral-100 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B800]/5 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6 sm:mb-8">
            <button
              onClick={onNavigateHome}
              className="hover:text-neutral-900 transition-colors cursor-pointer"
            >
              {lang === 'fr' ? 'Accueil' : 'Home'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-neutral-400">{lang === 'fr' ? 'Services' : 'Services'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-semibold text-neutral-800 line-clamp-1">
              {data.seo.title[lang].split('|')[0].trim()}
            </span>
          </nav>

          {/* Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Subtitle, Highlights, CTAs */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B800]/15 border border-[#F5B800]/30 text-xs font-bold text-neutral-950 w-fit mb-4">
                <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
                <span>{data.hero.badge[lang]}</span>
              </div>

              {/* Semantic H1 */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15] mb-5">
                {data.hero.h1[lang]}
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
                {data.hero.subtitle[lang]}
              </p>

              {/* Highlights checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {data.hero.highlights[lang].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#F5B800] mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-medium text-neutral-800 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Phone className="w-4 h-4 text-neutral-950" />}
                  onClick={() => onOpenAdvisor(data.projectType)}
                  className="font-bold shadow-sm"
                >
                  {data.cta.primaryBtn[lang]}
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onOpenAdvisor(data.projectType)}
                  className="font-semibold text-neutral-900 hover:text-neutral-950"
                >
                  {data.cta.secondaryBtn[lang]}
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp direct</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-md aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={data.hero.image}
                  alt={data.hero.h1[lang]}
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />

                {/* Floating pill badge on image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 text-[#F5B800] flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-neutral-900">FutureLearn Yaoundé</div>
                      <div className="text-[11px] text-neutral-500">Lycée Biyem-Assi</div>
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenAdvisor(data.projectType)}
                    className="text-xs font-bold text-neutral-900 hover:text-[#B8860B] flex items-center gap-1 cursor-pointer"
                  >
                    <span>{lang === 'fr' ? 'Nous contacter' : 'Contact us'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02 — INTRODUCTION & FUTURELEARN'S ROLE
          ========================================================================= */}
      <section className="py-16 bg-neutral-50/70 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-4">
              {lang === 'fr' ? 'Notre mission et notre accompagnement' : 'Our Mission & Support'}
            </h2>
            <p className="text-lg font-medium text-neutral-800 mb-3">
              {data.introduction.lead[lang]}
            </p>
            {data.introduction.paragraphs[lang].map((p, idx) => (
              <p key={idx} className="text-base text-neutral-600 leading-relaxed mb-3">
                {p}
              </p>
            ))}

            {/* Disclaimer if present (especially for Visa) */}
            {data.introduction.disclaimer && (
              <div className="mt-5 p-4 rounded-2xl bg-neutral-100 border border-neutral-300/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-neutral-700 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                  {data.introduction.disclaimer[lang]}
                </p>
              </div>
            )}
          </div>

          {/* Role Pillars Grid */}
          <div className="mt-8">
            <h3 className="text-sm font-bold tracking-wider text-neutral-400 uppercase mb-6">
              {data.introduction.roleTitle[lang]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.introduction.rolePoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs hover:border-neutral-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-[#F5B800]/20 text-neutral-950 font-extrabold flex items-center justify-center text-xs mb-3">
                      {`0${idx + 1}`}
                    </div>
                    <h4 className="text-base font-bold text-neutral-900 mb-2">
                      {point.title[lang]}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {point.desc[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          03 — DETAILED OFFERINGS & PROGRAMS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badgeText={lang === 'fr' ? 'NOS PROGRAMMES & SOLUTIONS' : 'PROGRAMS & SOLUTIONS'}
            title={data.offerings.title[lang]}
            subtitle={data.offerings.subtitle[lang]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.offerings.items.map((offering: ServiceOfferingItem) => (
              <div
                key={offering.id}
                className="group p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {offering.image && (
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-5 border border-neutral-100">
                      <img
                        src={offering.image}
                        alt={offering.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {offering.tag && (
                    <div className="inline-block px-2.5 py-1 rounded-md bg-[#F5B800]/15 text-[#B8860B] text-xs font-bold mb-3">
                      {offering.tag[lang]}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-950">
                    {offering.title[lang]}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {offering.description[lang]}
                  </p>

                  {offering.details && offering.details[lang] && (
                    <ul className="space-y-2 mb-6 pt-2 border-t border-neutral-100 text-xs text-neutral-700">
                      {offering.details[lang].map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5B800] mt-1.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    rightIcon={<ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />}
                    onClick={() => onOpenAdvisor(data.projectType)}
                    className="text-xs font-semibold"
                  >
                    {lang === 'fr' ? 'Demander des informations' : 'Request information'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Special Supporting Block: Flight Destinations for 'billets-avion' */}
          {data.id === 'billets-avion' && (
            <div className="mt-16 p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {lang === 'fr' ? 'Destinations couramment desservies' : 'Popular Destinations Served'}
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    {lang === 'fr'
                      ? 'Tarifs négociés au départ de Douala et Yaoundé vers les grands hubs mondiaux.'
                      : 'Negotiated fares departing from Douala & Yaoundé to global international hubs.'}
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => onOpenAdvisor('billet')}
                  className="font-bold flex-shrink-0"
                >
                  {lang === 'fr' ? 'Obtenir un devis pour ma destination' : 'Get fare for my route'}
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {destinationsData.map((dest) => (
                  <div
                    key={dest.id}
                    className="p-3 rounded-xl bg-white border border-neutral-200 text-center flex flex-col items-center justify-center gap-1 hover:border-neutral-300 transition-colors"
                  >
                    <Globe2 className="w-4 h-4 text-[#F5B800]" />
                    <span className="text-xs font-bold text-neutral-800">{dest.name[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Supporting Block: 10h/week info for 'cours-langues' */}
          {data.id === 'cours-langues' && (
            <div className="mt-16 p-8 rounded-3xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F5B800] text-xs font-bold mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Rythme intensif structuré</span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                  10 heures par semaine : la méthode FutureLearn
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Conçu spécialement pour ceux qui préparent un départ à l’étranger (études, travail, immigration). Les cours sont dispensés en petits groupes de 8 à 12 personnes avec entraînements hebdomadaires aux épreuves officielles.
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={() => onOpenAdvisor('langues')}
                className="font-bold flex-shrink-0"
              >
                {lang === 'fr' ? 'Tester mon niveau gratuitement' : 'Free placement test'}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          04 — BENEFITS & WHY FUTURELEARN
          ========================================================================= */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badgeText={lang === 'fr' ? 'NOTRE ENGAGEMENT' : 'OUR COMMITMENT'}
            title={data.benefits.title[lang]}
            subtitle={
              lang === 'fr'
                ? 'Une relation fondée sur la franchise, la proximité et la recherche constante d’excellence.'
                : 'A relationship built on frankness, proximity and a constant pursuit of excellence.'
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.items.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 text-[#F5B800] flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 mb-2">
                    {benefit.title[lang]}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {benefit.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          05 — PROCESS IN 4 STEPS
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badgeText={lang === 'fr' ? 'MÉTHODOLOGIE' : 'METHODOLOGY'}
            title={data.process.title[lang]}
            subtitle={
              lang === 'fr'
                ? 'Des étapes séquencées pour assurer la rigueur et le succès de votre démarche.'
                : 'Sequenced milestones to ensure rigor and success in every procedure.'
            }
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.steps.map((st) => (
              <div
                key={st.stepNumber}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between relative"
              >
                <div>
                  <span className="text-2xl font-black text-[#F5B800] tracking-tight block mb-3">
                    {st.stepNumber}
                  </span>
                  <h4 className="text-base font-bold text-neutral-900 mb-2">
                    {st.title[lang]}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {st.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          06 — USEFUL INFORMATION & PRACTICAL TIPS
          ========================================================================= */}
      <section className="py-16 bg-neutral-50/80 border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-xs">
            <h3 className="text-2xl font-extrabold text-neutral-900 mb-3">
              {data.usefulInfo.title[lang]}
            </h3>
            <p className="text-neutral-600 text-sm mb-8">
              {data.usefulInfo.intro[lang]}
            </p>

            <div className="space-y-6">
              {data.usefulInfo.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-4 pb-6 border-b border-neutral-100 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-[#F5B800]/20 text-[#B8860B] font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-neutral-900 mb-1">
                      {pt.title[lang]}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {pt.content[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          07 — SERVICE-SPECIFIC FAQ ACCORDION
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badgeText="FAQ"
            title={lang === 'fr' ? 'Questions fréquentes' : 'Frequently Asked Questions'}
            subtitle={
              lang === 'fr'
                ? 'Les réponses directes et claires aux questions que vous nous posez le plus souvent.'
                : 'Direct and clear answers to our most frequently received inquiries.'
            }
            align="center"
          />

          <div className="mt-8 space-y-3">
            {data.faq.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-neutral-900 hover:text-neutral-950 transition-colors"
                  >
                    <span className="text-base sm:text-lg pr-4">{item.question[lang]}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-neutral-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-neutral-900' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {item.answer[lang]}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          08 — CONVERSION CTA & ADVISOR CONTACT CARD
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: CTA */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B800]/20 text-[#F5B800] text-xs font-bold w-fit mb-4">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{lang === 'fr' ? 'CONSEIL GRATUIT' : 'FREE ADVISORY'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                {data.cta.title[lang]}
              </h2>
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                {data.cta.subtitle[lang]}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Phone className="w-4 h-4 text-neutral-950" />}
                  onClick={() => onOpenAdvisor(data.projectType)}
                  className="font-bold shadow-lg"
                >
                  {data.cta.primaryBtn[lang]}
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>{lang === 'fr' ? 'Écrire sur WhatsApp' : 'Message on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Physical Agency Contact Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-800 border border-neutral-700 shadow-xl">
                <h3 className="text-base font-bold text-white mb-1">
                  {lang === 'fr' ? 'Agence FutureLearn Yaoundé' : 'FutureLearn Yaoundé Agency'}
                </h3>
                <p className="text-xs text-neutral-400 mb-6">
                  {lang === 'fr' ? 'Venez échanger avec nos conseillers' : 'Meet our advisors in person'}
                </p>

                <div className="space-y-4 text-sm text-neutral-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#F5B800] mt-0.5 flex-shrink-0" />
                    <span>{companyInfo.address[lang]}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#F5B800] mt-0.5 flex-shrink-0" />
                    <a
                      href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                      className="hover:text-white font-semibold"
                    >
                      {companyInfo.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#F5B800] mt-0.5 flex-shrink-0" />
                    <span>{companyInfo.workingHours[lang]}</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-neutral-700 flex items-center justify-between">
                  <span className="text-xs text-neutral-400">
                    {lang === 'fr' ? 'Sans rendez-vous préalable' : 'Walk-ins welcome'}
                  </span>
                  <button
                    onClick={() => onOpenAdvisor(data.projectType)}
                    className="text-xs font-bold text-[#F5B800] hover:underline cursor-pointer"
                  >
                    {lang === 'fr' ? 'Prendre rendez-vous' : 'Book a meeting'} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
