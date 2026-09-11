import { NavLinkItem, Language } from '../types';

export const companyInfo = {
  name: 'FutureLearn',
  slogan: {
    fr: 'Votre avenir, sans frontières.',
    en: 'Your future, without borders.',
  },
  phone: '+237 657 389 075',
  phoneDisplay: '+237 657 389 075',
  whatsappNumber: '237657389075',
  email: 'contact@futurelearn.cm',
  address: {
    fr: 'Lycée Biyem-Assi, Yaoundé, Cameroun',
    en: 'Lycée Biyem-Assi, Yaoundé, Cameroon',
  },
  workingHours: {
    fr: 'Lun - Sam : 08h - 17h',
    en: 'Mon - Sat: 08:00 AM - 05:00 PM',
  },
  socials: [
    { name: 'Facebook', href: 'https://facebook.com', icon: 'Facebook' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'YouTube', href: 'https://youtube.com', icon: 'Youtube' },
    { name: 'TikTok', href: 'https://tiktok.com', icon: 'Share2' },
  ],
};

export const navigationLinks: NavLinkItem[] = [
  {
    label: { fr: 'Accueil', en: 'Home' },
    href: '#accueil',
  },
  {
    label: { fr: 'Services', en: 'Services' },
    href: '#services',
    hasDropdown: true,
  },
  {
    label: { fr: 'Destinations', en: 'Destinations' },
    href: '#destinations',
  },
  {
    label: { fr: 'Contact', en: 'Contact' },
    href: '#contact',
  },
];

export const i18nDictionary = {
  cta: {
    speakAdvisor: {
      fr: 'Parler à un conseiller',
      en: 'Speak to an advisor',
    },
    discoverServices: {
      fr: 'Découvrir nos services',
      en: 'Explore our services',
    },
    discover: {
      fr: 'Découvrir',
      en: 'Discover',
    },
    learnMore: {
      fr: 'En savoir plus',
      en: 'Learn more',
    },
    seeAllServices: {
      fr: 'Voir tous nos services',
      en: 'View all services',
    },
    seeAllDestinations: {
      fr: 'Voir toutes les destinations',
      en: 'View all destinations',
    },
    seeAllTrainings: {
      fr: 'Voir toutes les formations',
      en: 'View all training programs',
    },
    seeAllCourses: {
      fr: 'Découvrir tous nos cours',
      en: 'Explore all courses',
    },
    submit: {
      fr: 'Envoyer ma demande',
      en: 'Submit my request',
    },
    submitting: {
      fr: 'Envoi en cours...',
      en: 'Submitting...',
    },
  },
  badges: {
    opportunities: {
      fr: 'Des opportunités partout dans le monde',
      en: 'Opportunities worldwide',
    },
    buildFuture: {
      fr: 'Construisons votre avenir ensemble',
      en: 'Building your future together',
    },
  },
  stats: {
    accompanied: {
      count: '+500',
      label: {
        fr: 'Personnes accompagnées',
        en: 'People supported',
      },
    },
    destinations: {
      count: '10',
      label: {
        fr: 'Destinations principales',
        en: 'Main destinations',
      },
    },
    satisfaction: {
      count: '95%',
      label: {
        fr: 'Taux de satisfaction',
        en: 'Satisfaction rate',
      },
    },
  },
};
