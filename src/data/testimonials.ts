import { Testimonial } from '../types';

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: {
      fr: 'FutureLearn m’a accompagnée dans mon projet d’études au Canada. Un service professionnel et à l’écoute du début jusqu’au départ.',
      en: 'FutureLearn supported me through my study project in Canada. Professional and attentive service from start to departure.',
    },
    name: 'Alicia M.',
    role: {
      fr: 'Étudiante au Canada',
      en: 'Student in Canada',
    },
    service: {
      fr: 'Assistance visa & études',
      en: 'Visa & Study Assistance',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '2',
    quote: {
      fr: 'Service rapide et efficace. J’ai obtenu mon visa touristique sereinement grâce à leurs conseils avisés. Merci à toute l’équipe !',
      en: 'Fast and efficient service. I obtained my tourist visa smoothly thanks to their sound advice. Thanks to the whole team!',
    },
    name: 'Jean P.',
    role: {
      fr: 'Voyageur d’affaires',
      en: 'Business Traveler',
    },
    service: {
      fr: 'Visa touristique',
      en: 'Tourist Visa',
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '3',
    quote: {
      fr: 'Les cours intensifs d’anglais m’ont permis d’obtenir le score nécessaire au test IELTS en 2 mois seulement. Je recommande vivement.',
      en: 'The intensive English courses allowed me to achieve the required IELTS score in just 2 months. Highly recommended.',
    },
    name: 'Nadia K.',
    role: {
      fr: 'Diplômée en finance',
      en: 'Finance Graduate',
    },
    service: {
      fr: 'Formation langues & IELTS',
      en: 'Language Training & IELTS',
    },
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];
