import { ProcessStepItem, PillarItem } from '../types';

export const processStepsData: ProcessStepItem[] = [
  {
    number: '01',
    title: {
      fr: 'Vous nous contactez',
      en: 'You contact us',
    },
    description: {
      fr: 'Via WhatsApp, téléphone ou formulaire en ligne en quelques clics.',
      en: 'Via WhatsApp, phone, or online contact form in a few clicks.',
    },
    iconName: 'Phone',
  },
  {
    number: '02',
    title: {
      fr: 'Nous analysons votre projet',
      en: 'We analyze your project',
    },
    description: {
      fr: 'Un conseiller étudie votre besoin et vous propose une solution adaptée.',
      en: 'An advisor reviews your situation and proposes a tailored solution.',
    },
    iconName: 'FileSearch',
  },
  {
    number: '03',
    title: {
      fr: 'Nous vous accompagnons',
      en: 'We accompany you',
    },
    description: {
      fr: 'Démarches, conseils, préparation et suivi rigoureux jusqu’à l’aboutissement.',
      en: 'Procedures, guidance, preparation, and rigorous follow-up to fruition.',
    },
    iconName: 'Users',
  },
  {
    number: '04',
    title: {
      fr: 'Vous atteignez votre objectif',
      en: 'You achieve your goal',
    },
    description: {
      fr: 'Études, voyage, formation, visa ou permis en toute sérénité.',
      en: 'Studies, travel, training, visa, or driving license with peace of mind.',
    },
    iconName: 'Flag',
  },
];

export const pillarsData: PillarItem[] = [
  {
    id: 'pillar-1',
    title: {
      fr: 'Accompagnement personnalisé',
      en: 'Personalized Support',
    },
    description: {
      fr: 'Chaque parcours est unique : nous construisons un plan d’action adapté à vos objectifs.',
      en: 'Every journey is unique: we design an action plan tailored to your exact goals.',
    },
    iconName: 'UserCheck',
  },
  {
    id: 'pillar-2',
    title: {
      fr: 'Expertise reconnue',
      en: 'Recognized Expertise',
    },
    description: {
      fr: 'Une maîtrise approfondie des procédures administratives, académiques et consulaires.',
      en: 'In-depth mastery of administrative, academic, and consular procedures.',
    },
    iconName: 'ShieldCheck',
  },
  {
    id: 'pillar-3',
    title: {
      fr: 'Solutions complètes',
      en: 'End-to-End Solutions',
    },
    description: {
      fr: 'De l’orientation initiale jusqu’à l’installation ou la certification finale.',
      en: 'From initial orientation to final arrival, settlement, or certification.',
    },
    iconName: 'Layers',
  },
  {
    id: 'pillar-4',
    title: {
      fr: 'Réseau international',
      en: 'International Network',
    },
    description: {
      fr: 'Des opportunités et des partenaires actifs dans plus de 10 pays à travers le monde.',
      en: 'Opportunities and active partners in more than 10 countries worldwide.',
    },
    iconName: 'Globe',
  },
  {
    id: 'pillar-5',
    title: {
      fr: 'Satisfaction client',
      en: 'Client Satisfaction',
    },
    description: {
      fr: 'Un engagement d’écoute, de transparence et d’exigence au service de votre réussite.',
      en: 'A commitment to active listening, transparency, and high quality for your success.',
    },
    iconName: 'Star',
  },
];
