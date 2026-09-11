import { Language, ProjectType } from '../types';

export interface TranslationDictionary {
  nav: {
    home: Record<Language, string>;
    services: Record<Language, string>;
    servicesSubtitle: Record<Language, string>;
    destinations: Record<Language, string>;
    contact: Record<Language, string>;
    openMenu: Record<Language, string>;
    closeMenu: Record<Language, string>;
    languageLabel: Record<Language, string>;
  };
  cta: {
    speakAdvisor: Record<Language, string>;
    discoverServices: Record<Language, string>;
    learnMore: Record<Language, string>;
    requestQuote: Record<Language, string>;
    sendWhatsApp: Record<Language, string>;
    contactUs: Record<Language, string>;
    viewAllDestinations: Record<Language, string>;
    backToHome: Record<Language, string>;
  };
  leadModal: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    fullNameLabel: Record<Language, string>;
    fullNamePlaceholder: Record<Language, string>;
    phoneLabel: Record<Language, string>;
    phonePlaceholder: Record<Language, string>;
    emailLabel: Record<Language, string>;
    emailPlaceholder: Record<Language, string>;
    projectTypeLabel: Record<Language, string>;
    projectTypePlaceholder: Record<Language, string>;
    destinationLabel: Record<Language, string>;
    destinationPlaceholder: Record<Language, string>;
    messageLabel: Record<Language, string>;
    messagePlaceholder: Record<Language, string>;
    confidentiality: Record<Language, string>;
    submitBtn: Record<Language, string>;
    submittingBtn: Record<Language, string>;
    successTitle: Record<Language, string>;
    successDesc: Record<Language, string>;
    whatsappContinuationBtn: Record<Language, string>;
    closeBtn: Record<Language, string>;
    retryBtn: Record<Language, string>;
    errors: {
      fullNameRequired: Record<Language, string>;
      phoneRequired: Record<Language, string>;
      phoneInvalid: Record<Language, string>;
      emailInvalid: Record<Language, string>;
      projectRequired: Record<Language, string>;
      serverError: Record<Language, string>;
    };
  };
  projects: Record<ProjectType, Record<Language, string>>;
  destinations: Record<string, Record<Language, string>>;
}

export const translations: TranslationDictionary = {
  nav: {
    home: { fr: 'Accueil', en: 'Home' },
    services: { fr: 'Services', en: 'Services' },
    servicesSubtitle: { fr: 'Nos domaines d’expertise', en: 'Our areas of expertise' },
    destinations: { fr: 'Destinations', en: 'Destinations' },
    contact: { fr: 'Contact', en: 'Contact' },
    openMenu: { fr: 'Ouvrir le menu', en: 'Open menu' },
    closeMenu: { fr: 'Fermer le menu', en: 'Close menu' },
    languageLabel: { fr: 'Langue', en: 'Language' },
  },
  cta: {
    speakAdvisor: { fr: 'Parler à un conseiller', en: 'Speak to an advisor' },
    discoverServices: { fr: 'Découvrir nos services', en: 'Explore our services' },
    learnMore: { fr: 'En savoir plus', en: 'Learn more' },
    requestQuote: { fr: 'Demander un devis', en: 'Request a quote' },
    sendWhatsApp: { fr: 'Écrire sur WhatsApp', en: 'Message on WhatsApp' },
    contactUs: { fr: 'Nous contacter', en: 'Contact us' },
    viewAllDestinations: { fr: 'Voir toutes les destinations', en: 'View all destinations' },
    backToHome: { fr: 'Retour à l’accueil', en: 'Back to home' },
  },
  leadModal: {
    title: { fr: 'Parler à un conseiller', en: 'Speak to an Advisor' },
    subtitle: {
      fr: 'Échange personnalisé, gratuit et confidentiel à Yaoundé ou à distance',
      en: 'Personalized, free and confidential guidance in Yaoundé or remotely',
    },
    fullNameLabel: { fr: 'Nom complet *', en: 'Full Name *' },
    fullNamePlaceholder: { fr: 'ex. Emmanuel Nkoa', en: 'e.g. John Doe' },
    phoneLabel: { fr: 'Téléphone / WhatsApp *', en: 'Phone / WhatsApp *' },
    phonePlaceholder: { fr: 'ex. +237 6XX XX XX XX', en: 'e.g. +237 6XX XX XX XX' },
    emailLabel: { fr: 'Email (optionnel)', en: 'Email (optional)' },
    emailPlaceholder: { fr: 'nom@exemple.cm', en: 'name@example.com' },
    projectTypeLabel: { fr: 'Type de projet *', en: 'Project Type *' },
    projectTypePlaceholder: { fr: 'Sélectionner votre projet', en: 'Select your project' },
    destinationLabel: { fr: 'Destination souhaitée', en: 'Desired Destination' },
    destinationPlaceholder: {
      fr: 'Sélectionner une destination',
      en: 'Select a destination',
    },
    messageLabel: {
      fr: 'Précisions sur votre projet (optionnel)',
      en: 'Project details (optional)',
    },
    messagePlaceholder: {
      fr: 'Parlez-nous brièvement de votre calendrier, vos diplômes ou vos questions...',
      en: 'Briefly describe your timeline, qualifications or specific questions...',
    },
    confidentiality: {
      fr: 'Vos coordonnées restent strictement confidentielles et ne seront jamais partagées.',
      en: 'Your contact details remain strictly confidential and will never be shared.',
    },
    submitBtn: { fr: 'Envoyer ma demande', en: 'Submit my request' },
    submittingBtn: { fr: 'Transmission en cours...', en: 'Submitting...' },
    successTitle: {
      fr: 'Votre demande a bien été transmise !',
      en: 'Your request has been successfully submitted!',
    },
    successDesc: {
      fr: 'Un conseiller FutureLearn va analyser votre profil et vous recontacter sous 24h ouvrées. Pour échanger immédiatement, poursuivez sur WhatsApp.',
      en: 'A FutureLearn advisor will review your profile and contact you within 24 business hours. For immediate assistance, continue on WhatsApp.',
    },
    whatsappContinuationBtn: {
      fr: 'Poursuivre immédiatement sur WhatsApp',
      en: 'Continue immediately on WhatsApp',
    },
    closeBtn: { fr: 'Fermer cette fenêtre', en: 'Close this window' },
    retryBtn: { fr: 'Réessayer', en: 'Try again' },
    errors: {
      fullNameRequired: {
        fr: 'Le nom complet est obligatoire (au moins 2 caractères).',
        en: 'Full name is required (at least 2 characters).',
      },
      phoneRequired: {
        fr: 'Le numéro de téléphone / WhatsApp est obligatoire.',
        en: 'Phone / WhatsApp number is required.',
      },
      phoneInvalid: {
        fr: 'Veuillez saisir un numéro de téléphone valide (au moins 8 chiffres).',
        en: 'Please enter a valid phone number (at least 8 digits).',
      },
      emailInvalid: {
        fr: 'Veuillez saisir une adresse email valide (ex. nom@domaine.com).',
        en: 'Please enter a valid email address (e.g. name@domain.com).',
      },
      projectRequired: {
        fr: 'Veuillez sélectionner un type de projet.',
        en: 'Please select a project type.',
      },
      serverError: {
        fr: 'Une erreur temporaire est survenue lors de l’envoi. Vous pouvez nous joindre directement par WhatsApp.',
        en: 'A temporary error occurred while sending. You can reach us directly via WhatsApp.',
      },
    },
  },
  projects: {
    etudes: { fr: 'Études', en: 'Study Abroad' },
    visa: { fr: 'Visa', en: 'Visa' },
    voyage: { fr: 'Voyage', en: 'Travel' },
    billet: { fr: "Billet d'avion", en: 'Flight Ticket' },
    formation: { fr: 'Formation professionnelle', en: 'Vocational Training' },
    langues: { fr: 'Cours de langues', en: 'Language Courses' },
    'auto-ecole': { fr: 'Auto-école', en: 'Driving School' },
    autre: { fr: 'Autre', en: 'Other' },
  },
  destinations: {
    france: { fr: 'France', en: 'France' },
    canada: { fr: 'Canada', en: 'Canada' },
    allemagne: { fr: 'Allemagne', en: 'Germany' },
    dubai: { fr: 'Dubai', en: 'Dubai' },
    belgique: { fr: 'Belgique', en: 'Belgium' },
    italie: { fr: 'Italie', en: 'Italy' },
    royaume_uni: { fr: 'Royaume-Uni', en: 'United Kingdom' },
    etats_unis: { fr: 'États-Unis', en: 'United States' },
    chine: { fr: 'Chine', en: 'China' },
    espagne: { fr: 'Espagne', en: 'Spain' },
    autre: { fr: 'Autre', en: 'Other' },
  },
};

export const destinationList: { id: string; name: Record<Language, string> }[] = [
  { id: 'france', name: { fr: 'France', en: 'France' } },
  { id: 'canada', name: { fr: 'Canada', en: 'Canada' } },
  { id: 'allemagne', name: { fr: 'Allemagne', en: 'Germany' } },
  { id: 'dubai', name: { fr: 'Dubai', en: 'Dubai' } },
  { id: 'belgique', name: { fr: 'Belgique', en: 'Belgium' } },
  { id: 'italie', name: { fr: 'Italie', en: 'Italy' } },
  { id: 'royaume_uni', name: { fr: 'Royaume-Uni', en: 'United Kingdom' } },
  { id: 'etats_unis', name: { fr: 'États-Unis', en: 'United States' } },
  { id: 'chine', name: { fr: 'Chine', en: 'China' } },
  { id: 'espagne', name: { fr: 'Espagne', en: 'Spain' } },
  { id: 'autre', name: { fr: 'Autre', en: 'Other' } },
];
