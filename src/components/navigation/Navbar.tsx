import React, { useState, useEffect, useRef } from 'react';
import { Phone, ChevronDown, Menu, ArrowRight } from 'lucide-react';
import { Language, ServiceItem } from '../../types';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { MobileMenu } from './MobileMenu';
import { servicesData } from '../../data/services';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAdvisorModal: () => void;
  onSelectService?: (service: ServiceItem) => void;
  onNavigate?: (target: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenAdvisorModal,
  onSelectService,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-3'
            : 'bg-white border-b border-neutral-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('accueil');
              }}
              className="cursor-pointer"
            >
              <Logo lang={lang} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <button
                onClick={() => handleNavClick('accueil')}
                className="px-3.5 py-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950 rounded-full hover:bg-neutral-100/80 transition-colors"
              >
                {lang === 'fr' ? 'Accueil' : 'Home'}
              </button>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="inline-flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950 rounded-full hover:bg-neutral-100/80 transition-colors"
                  aria-expanded={servicesOpen}
                >
                  <span>{lang === 'fr' ? 'Services' : 'Services'}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-neutral-900' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-1.5 w-72 rounded-2xl bg-white border border-neutral-200 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3.5 py-1.5 text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                      {lang === 'fr' ? 'Nos domaines d’expertise' : 'Our areas of expertise'}
                    </div>
                    {servicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setServicesOpen(false);
                          if (onSelectService) {
                            onSelectService(service);
                          } else {
                            handleNavClick('services');
                          }
                        }}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 text-left text-sm font-medium text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <div className="flex flex-col">
                          <span className="font-semibold text-neutral-900 group-hover:text-neutral-950">
                            {service.title[lang]}
                          </span>
                          <span className="text-xs text-neutral-500 line-clamp-1">
                            {service.subtitle[lang]}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-[#F5B800]" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('destinations')}
                className="px-3.5 py-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950 rounded-full hover:bg-neutral-100/80 transition-colors"
              >
                {lang === 'fr' ? 'Destinations' : 'Destinations'}
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="px-3.5 py-2 text-sm font-semibold text-neutral-800 hover:text-neutral-950 rounded-full hover:bg-neutral-100/80 transition-colors"
              >
                {lang === 'fr' ? 'Contact' : 'Contact'}
              </button>
            </nav>

            {/* Right Controls: Lang + CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switcher FR | EN */}
              <div
                className="inline-flex items-center rounded-full p-1 bg-neutral-100 border border-neutral-200"
                role="group"
                aria-label={lang === 'fr' ? 'Sélecteur de langue' : 'Language selector'}
              >
                <button
                  onClick={() => onLanguageChange('fr')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    lang === 'fr'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  aria-pressed={lang === 'fr'}
                  aria-label="Passer en français"
                >
                  FR
                </button>
                <span className="text-neutral-300 text-xs px-1 select-none font-semibold">|</span>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    lang === 'en'
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                  aria-pressed={lang === 'en'}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* Parler à un conseiller CTA */}
              <Button
                variant="primary"
                size="md"
                leftIcon={<Phone className="w-4 h-4 text-neutral-950" />}
                onClick={onOpenAdvisorModal}
                className="font-bold shadow-xs hover:shadow transition-all"
              >
                {lang === 'fr' ? 'Parler à un conseiller' : 'Speak to an advisor'}
              </Button>
            </div>

            {/* Mobile Controls: FR | EN + Hamburger */}
            <div className="flex sm:hidden items-center gap-2">
              <div
                className="inline-flex items-center rounded-full p-0.5 bg-neutral-100 border border-neutral-200"
                role="group"
                aria-label="Sélecteur de langue"
              >
                <button
                  onClick={() => onLanguageChange('fr')}
                  className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                    lang === 'fr' ? 'bg-neutral-900 text-white' : 'text-neutral-600'
                  }`}
                  aria-pressed={lang === 'fr'}
                >
                  FR
                </button>
                <span className="text-neutral-300 text-[10px] px-0.5 select-none">|</span>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                    lang === 'en' ? 'bg-neutral-900 text-white' : 'text-neutral-600'
                  }`}
                  aria-pressed={lang === 'en'}
                >
                  EN
                </button>
              </div>
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label={lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'}
                className="p-2 text-neutral-700 hover:text-neutral-950 rounded-lg hover:bg-neutral-100"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        lang={lang}
        onLanguageChange={onLanguageChange}
        onOpenAdvisorModal={onOpenAdvisorModal}
        onSelectService={(service) => {
          if (onSelectService) onSelectService(service);
        }}
        onNavigate={handleNavClick}
      />
    </>
  );
};
