import { FormationProgram } from '../types';

export const formationsData: FormationProgram[] = [
  {
    id: 'secretariat',
    title: {
      fr: 'Secrétariat bureautique',
      en: 'Office Administration',
    },
    description: {
      fr: 'Maîtrise des outils bureautiques, accueil, gestion du courrier et organisation administrative.',
      en: 'Mastery of office productivity tools, reception, correspondence and administrative organization.',
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    duration: '3 - 6 mois',
  },
  {
    id: 'webdev',
    title: {
      fr: 'Programmation web',
      en: 'Web Development',
    },
    description: {
      fr: 'Développement de sites et applications modernes (HTML/CSS, JavaScript, React, bases de données).',
      en: 'Development of modern web applications and websites (HTML/CSS, JavaScript, React, databases).',
    },
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    duration: '6 - 9 mois',
  },
  {
    id: 'infographie',
    title: {
      fr: 'Infographie',
      en: 'Graphic Design',
    },
    description: {
      fr: 'Création d’identités visuelles, supports de communication print et digitaux (Photoshop, Illustrator).',
      en: 'Creation of visual identities, print and digital communication media (Photoshop, Illustrator).',
    },
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    duration: '4 - 6 mois',
  },
  {
    id: 'marketing-digital',
    title: {
      fr: 'Marketing digital',
      en: 'Digital Marketing',
    },
    description: {
      fr: 'Stratégie sur les réseaux sociaux, gestion de campagnes publicitaires, SEO et analyse de performance.',
      en: 'Social media strategy, online ad management, SEO and performance analytics.',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    duration: '3 - 6 mois',
  },
  {
    id: 'comptabilite',
    title: {
      fr: 'Comptabilité et gestion',
      en: 'Accounting & Management',
    },
    description: {
      fr: 'Gestion de trésorerie, facturation, déclarations fiscales et tenue des comptes d’entreprise.',
      en: 'Cash flow management, invoicing, tax filings and business account keeping.',
    },
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    duration: '6 mois',
  },
  {
    id: 'auxiliaire-de-vie',
    title: {
      fr: 'Auxiliaire de vie',
      en: 'Caregiving & Support',
    },
    description: {
      fr: 'Accompagnement humain des personnes âgées, personnes dépendantes ou en situation de handicap.',
      en: 'Compassionate assistance for the elderly, dependent individuals or people with disabilities.',
    },
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
    duration: '6 mois',
  },
];
