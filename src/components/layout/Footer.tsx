import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Globe2,
  Share2,
} from 'lucide-react';
import { Language, ServiceItem } from '../../types';
import { Logo } from '../ui/Logo';
import { companyInfo } from '../../data/company';
import { servicesData } from '../../data/services';

interface FooterProps {
  lang: Language;
  onSelectService?: (service: ServiceItem) => void;
  onNavigate?: (target: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onSelectService,
  onNavigate,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (target: string) => {
    if (onNavigate) {
      onNavigate(target);
    } else {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white border-t border-neutral-200 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-neutral-200">
          {/* Col 1: Brand & Slogan */}
          <div className="flex flex-col space-y-4">
            <Logo lang={lang} />
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              {lang === 'fr'
                ? 'Accompagnement expert et humain pour vos projets de mobilité internationale, d’études, de voyages et de formations qualifiantes.'
                : 'Expert guidance for your international mobility, academic studies, travel, and practical career development.'}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {companyInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-[#F5B800] hover:text-neutral-950 text-neutral-600 flex items-center justify-center transition-colors"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              {lang === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              <li>
                <button
                  onClick={() => handleNav('accueil')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {lang === 'fr' ? 'Accueil' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {lang === 'fr' ? 'Services' : 'Services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('destinations')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {lang === 'fr' ? 'Destinations' : 'Destinations'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-neutral-950 transition-colors"
                >
                  {lang === 'fr' ? 'Contact' : 'Contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              {lang === 'fr' ? 'Nos services' : 'Our Services'}
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-600">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => {
                      if (onSelectService) onSelectService(svc);
                    }}
                    className="hover:text-neutral-950 transition-colors text-left"
                  >
                    {svc.title[lang]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-4">
              {lang === 'fr' ? 'Contact' : 'Contact Us'}
            </h4>
            <ul className="space-y-3 text-sm text-neutral-600">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F5B800] mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`}
                  className="hover:text-neutral-950 font-semibold"
                >
                  {companyInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#F5B800] mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-neutral-950 break-all"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5B800] mt-0.5 flex-shrink-0" />
                <span>{companyInfo.address[lang]}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F5B800] mt-0.5 flex-shrink-0" />
                <span>{companyInfo.workingHours[lang]}</span>
              </li>
            </ul>

            {/* Opportunities card hint */}
            <div className="mt-4 p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center gap-2 text-xs text-neutral-700">
              <Globe2 className="w-4 h-4 text-[#F5B800] flex-shrink-0" />
              <span>
                {lang === 'fr'
                  ? 'Des opportunités dans le monde entier'
                  : 'Opportunities all around the world'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 FutureLearn. {lang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-800 transition-colors cursor-pointer">
              {lang === 'fr' ? 'Confidentialité' : 'Privacy'}
            </span>
            <span className="hover:text-neutral-800 transition-colors cursor-pointer">
              {lang === 'fr' ? 'Mentions légales' : 'Legal Notice'}
            </span>
            <span className="hover:text-neutral-800 transition-colors cursor-pointer">
              {lang === 'fr' ? 'Plan du site' : 'Sitemap'}
            </span>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="w-9 h-9 rounded-full bg-[#F5B800] hover:bg-[#E0A800] text-neutral-950 flex items-center justify-center shadow-xs transition-transform hover:-translate-y-0.5 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
