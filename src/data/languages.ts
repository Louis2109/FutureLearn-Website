import { LanguageCourse } from '../types';

export const languagesData: LanguageCourse[] = [
  {
    id: 'allemand',
    language: { fr: 'Allemand', en: 'German' },
    flag: '🇩🇪',
    certifications: ['Goethe-Zertifikat', 'ZDaF'],
    hoursPerWeek: '10h / semaine',
    description: {
      fr: 'Préparation ciblée aux certifications officielles pour études et travail en Allemagne.',
      en: 'Targeted preparation for official certifications for studies and work in Germany.',
    },
  },
  {
    id: 'anglais',
    language: { fr: 'Anglais', en: 'English' },
    flag: '🇬🇧',
    certifications: ['IELTS', 'TOEFL', 'TOEIC'],
    hoursPerWeek: '10h / semaine',
    description: {
      fr: 'Entraînement intensif aux 4 compétences (écoute, lecture, écriture, expression orale).',
      en: 'Intensive training in all 4 skills (listening, reading, writing, speaking).',
    },
  },
  {
    id: 'francais',
    language: { fr: 'Français', en: 'French' },
    flag: '🇫🇷',
    certifications: ['TCF', 'TEF'],
    hoursPerWeek: '10h / semaine',
    description: {
      fr: 'Tests de connaissance du français requis pour l’immigration au Canada et études en France.',
      en: 'French proficiency tests required for Canadian immigration and French universities.',
    },
  },
  {
    id: 'chinois',
    language: { fr: 'Chinois', en: 'Chinese' },
    flag: '🇨🇳',
    certifications: ['HSK'],
    hoursPerWeek: '10h / semaine',
    description: {
      fr: 'Apprentissage du mandarin standard (pinyin, caractères, conversation courante et affaires).',
      en: 'Standard Mandarin learning (pinyin, characters, daily and business conversation).',
    },
  },
  {
    id: 'italien',
    language: { fr: 'Italien', en: 'Italian' },
    flag: '🇮🇹',
    certifications: ['CILS'],
    hoursPerWeek: '10h / semaine',
    description: {
      fr: 'Maîtrise de la langue italienne pour vos projets universitaires et professionnels en Italie.',
      en: 'Italian language proficiency for university and professional projects in Italy.',
    },
  },
];
