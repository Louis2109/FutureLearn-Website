import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'visa',
    slug: '/services/assistance-visa',
    title: {
      fr: 'Assistance visa',
      en: 'Visa Assistance',
    },
    subtitle: {
      fr: 'Orientation, constitution de dossier et suivi rigoureux',
      en: 'Guidance, application preparation and thorough follow-up',
    },
    description: {
      fr: 'Visa étudiant, travail, touristique, famille, business.',
      en: 'Student, work, tourist, family, and business visas.',
    },
    details: {
      fr: [
        'Visa étudiant pour universités et grandes écoles',
        'Visa travail & mobilité professionnelle',
        'Visa touristique & séjours de courte durée',
        'Visa regroupement familial',
        'Visa business & missions professionnelles',
      ],
      en: [
        'Student visa for universities and colleges',
        'Work visa & professional mobility',
        'Tourist visa & short-term stays',
        'Family reunification visa',
        'Business visa & corporate trips',
      ],
    },
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    badge: {
      fr: 'Mobilité internationale',
      en: 'International Mobility',
    },
  },
  {
    id: 'flight',
    slug: '/services/billets-avion',
    title: {
      fr: "Billets d'avion",
      en: 'Flight Tickets',
    },
    subtitle: {
      fr: 'Recherche, réservation et accompagnement voyage',
      en: 'Search, booking and travel guidance',
    },
    description: {
      fr: 'Recherche, réservation et accompagnement personnalisé.',
      en: 'Search, reservations, and personalized travel support.',
    },
    details: {
      fr: [
        'Comparaison et sélection des meilleurs tarifs',
        'Réservation rapide et sécurisée',
        'Assistance pour bagages et escales',
        'Assistance personnalisée pour premiers voyageurs',
        'Gestion des modifications et réémissions',
      ],
      en: [
        'Comparison and selection of best fares',
        'Fast and secure booking',
        'Baggage and layover assistance',
        'Dedicated support for first-time travelers',
        'Change and reissue management',
      ],
    },
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    badge: {
      fr: 'Voyage serein',
      en: 'Seamless Travel',
    },
  },
  {
    id: 'training',
    slug: '/services/formation-professionnelle',
    title: {
      fr: 'Formation professionnelle',
      en: 'Professional Training',
    },
    subtitle: {
      fr: 'Des compétences pratiques pour votre avenir professionnel',
      en: 'Practical skills for your professional future',
    },
    description: {
      fr: 'Des compétences pratiques pour votre avenir.',
      en: 'Practical skills for your future.',
    },
    details: {
      fr: [
        'Secrétariat bureautique & assistance de direction',
        'Programmation web & technologies modernes',
        'Infographie & design graphique professionnel',
        'Marketing digital & stratégie de contenu',
        'Comptabilité et gestion pratique d’entreprise',
        'Auxiliaire de vie & aide à la personne',
      ],
      en: [
        'Office administration & executive assistance',
        'Web development & modern technologies',
        'Graphic design & visual communication',
        'Digital marketing & content strategy',
        'Accounting & practical business management',
        'Caregiving & personal support services',
      ],
    },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    badge: {
      fr: 'Insertion rapide',
      en: 'Career Ready',
    },
  },
  {
    id: 'language',
    slug: '/services/cours-langues',
    title: {
      fr: 'Cours de langues',
      en: 'Language Courses',
    },
    subtitle: {
      fr: 'Apprenez et certifiez vos compétences linguistiques',
      en: 'Learn and certify your language proficiency',
    },
    description: {
      fr: 'Apprenez et certifiez vos compétences linguistiques.',
      en: 'Learn and certify your language skills.',
    },
    details: {
      fr: [
        'Allemand — Préparation Goethe-Zertifikat, ZDaF',
        'Anglais — Préparation IELTS, TOEFL, TOEIC',
        'Français — Préparation TCF, TEF',
        'Chinois — Préparation HSK',
        'Italien — Préparation CILS',
        'Rythme intensif : 10h / semaine avec formateurs qualifiés',
      ],
      en: [
        'German — Goethe-Zertifikat, ZDaF prep',
        'English — IELTS, TOEFL, TOEIC prep',
        'French — TCF, TEF prep',
        'Chinese — HSK prep',
        'Italian — CILS prep',
        'Intensive schedule: 10h / week with certified instructors',
      ],
    },
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    badge: {
      fr: '10h / semaine',
      en: '10h / week',
    },
  },
  {
    id: 'driving',
    slug: '/services/auto-ecole',
    title: {
      fr: 'Auto-école',
      en: 'Driving School',
    },
    subtitle: {
      fr: 'Permis A et B dans un cadre professionnel et sécurisé',
      en: 'Category A and B licenses in a professional setting',
    },
    description: {
      fr: 'Permis A et B dans un cadre professionnel.',
      en: 'Category A and B driving licences in a professional setting.',
    },
    details: {
      fr: [
        'Permis A : Conduisez vos deux-roues en toute sécurité',
        'Permis B : Apprentissage complet et passage d’examen serein',
        'Moniteurs patients et véhicules récents bien entretenus',
        'Horaires flexibles adaptés aux étudiants et professionnels',
      ],
      en: [
        'Category A: Ride motorcycles with safety and confidence',
        'Category B: Complete car training with high pass rate',
        'Patient instructors and modern well-maintained vehicles',
        'Flexible schedules suited for students and workers',
      ],
    },
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    badge: {
      fr: 'Permis A & B',
      en: 'Licenses A & B',
    },
  },
];
