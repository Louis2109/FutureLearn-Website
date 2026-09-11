import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronRight, X } from 'lucide-react';
import { Language, ServiceItem } from '../../types';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { servicesData } from '../../data/services';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenAdvisorModal: () => void;
  onSelectService: (service: ServiceItem) => void;
  onNavigate: (target: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  lang,
  onLanguageChange,
  onOpenAdvisorModal,
  onSelectService,
  onNavigate,
}) => {
  const [servicesExpanded, setServicesExpanded] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white/95 backdrop-blur-md animate-in fade-in duration-200">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
        <Logo lang={lang} />
        <button
          onClick={onClose}
          aria-label="Fermer le menu"
          className="p-2 text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Menu Body */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {/* Nav Links */}
        <nav className="space-y-2">
          <button
            onClick={() => {
              onNavigate('accueil');
              onClose();
            }}
            className="w-full text-left py-2.5 px-3 rounded-lg text-lg font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            {lang === 'fr' ? 'Accueil' : 'Home'}
          </button>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-lg font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              <span>{lang === 'fr' ? 'Services' : 'Services'}</span>
              <ChevronDown
                className={`w-5 h-5 text-neutral-500 transition-transform ${
                  servicesExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {servicesExpanded && (
              <div className="pl-4 pr-2 py-2 space-y-1.5 border-l-2 border-[#F5B800] ml-3 mt-1">
                {servicesData.map((svc) => (
                  <button
                    key={svc.id}
                    onClick={() => {
                      onSelectService(svc);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between text-left py-2 px-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 rounded-md transition-colors"
                  >
                    <span>{svc.title[lang]}</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => {
              onNavigate('destinations');
              onClose();
            }}
            className="w-full text-left py-2.5 px-3 rounded-lg text-lg font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            {lang === 'fr' ? 'Destinations' : 'Destinations'}
          </button>

          <button
            onClick={() => {
              onNavigate('contact');
              onClose();
            }}
            className="w-full text-left py-2.5 px-3 rounded-lg text-lg font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors"
          >
            {lang === 'fr' ? 'Contact' : 'Contact'}
          </button>
        </nav>

        {/* Language switch */}
        <div className="pt-4 border-t border-neutral-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-neutral-500">
              {lang === 'fr' ? 'Langue' : 'Language'}
            </span>
            <div className="inline-flex rounded-full p-1 bg-neutral-100 border border-neutral-200">
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  lang === 'fr'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                  lang === 'en'
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            leftIcon={<Phone className="w-4 h-4" />}
            onClick={() => {
              onClose();
              onOpenAdvisorModal();
            }}
          >
            {lang === 'fr' ? 'Parler à un conseiller' : 'Speak to an advisor'}
          </Button>
        </div>
      </div>
    </div>
  );
};
