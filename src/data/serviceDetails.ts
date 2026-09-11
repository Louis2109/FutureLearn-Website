import { Language, ProjectType } from '../types';

export interface ServiceOfferingItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  tag?: Record<Language, string>;
  details?: Record<Language, string[]>;
  image?: string;
}

export interface ServiceDetailData {
  id: string;
  slug: string;
  projectType: ProjectType;
  seo: {
    title: Record<Language, string>;
    description: Record<Language, string>;
  };
  hero: {
    badge: Record<Language, string>;
    h1: Record<Language, string>;
    subtitle: Record<Language, string>;
    image: string;
    highlights: Record<Language, string[]>;
  };
  introduction: {
    lead: Record<Language, string>;
    paragraphs: Record<Language, string[]>;
    roleTitle: Record<Language, string>;
    rolePoints: Array<{
      title: Record<Language, string>;
      desc: Record<Language, string>;
    }>;
    disclaimer?: Record<Language, string>;
  };
  offerings: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    items: ServiceOfferingItem[];
  };
  benefits: {
    title: Record<Language, string>;
    items: Array<{
      title: Record<Language, string>;
      desc: Record<Language, string>;
    }>;
  };
  process: {
    title: Record<Language, string>;
    steps: Array<{
      stepNumber: string;
      title: Record<Language, string>;
      desc: Record<Language, string>;
    }>;
  };
  usefulInfo: {
    title: Record<Language, string>;
    intro: Record<Language, string>;
    points: Array<{
      title: Record<Language, string>;
      content: Record<Language, string>;
    }>;
  };
  faq: Array<{
    id: string;
    question: Record<Language, string>;
    answer: Record<Language, string>;
  }>;
  cta: {
    title: Record<Language, string>;
    subtitle: Record<Language, string>;
    primaryBtn: Record<Language, string>;
    secondaryBtn: Record<Language, string>;
  };
}

export const serviceDetailsData: Record<string, ServiceDetailData> = {
  // =========================================================================
  // 01 — ASSISTANCE VISA
  // =========================================================================
  'assistance-visa': {
    id: 'assistance-visa',
    slug: '/services/assistance-visa',
    projectType: 'visa',
    seo: {
      title: {
        fr: 'Assistance Visa Étudiant, Travail, Voyage & Affaires | FutureLearn',
        en: 'Visa Assistance for Study, Work, Travel & Business | FutureLearn',
      },
      description: {
        fr: 'Accompagnement rigoureux et humain pour la préparation de vos dossiers de visa : étudiant, travail, touristique, famille et business. Conseils personnalisés à Yaoundé.',
        en: 'Meticulous and human guidance for your visa applications: student, work, tourist, family and business visas. Personalized advisory in Yaoundé.',
      },
    },
    hero: {
      badge: {
        fr: 'MOBILITÉ INTERNATIONALE · ASSISTANCE VISA',
        en: 'INTERNATIONAL MOBILITY · VISA ASSISTANCE',
      },
      h1: {
        fr: 'Assistance Visa : un accompagnement rigoureux et transparent.',
        en: 'Visa Assistance: Meticulous and Transparent Support.',
      },
      subtitle: {
        fr: 'De l’analyse initiale de votre profil jusqu’au suivi de votre demande consulaire, nous structurons vos démarches avec méthode et clarté.',
        en: 'From initial profile evaluation to tracking your consular file, we structure every procedure with method and clarity.',
      },
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      highlights: {
        fr: [
          'Analyse personnalisée de chaque projet',
          'Vérification méthodique des pièces requises',
          'Préparation structurée aux entretiens consulaires',
          'Transparence totale et respect des règles souveraines',
        ],
        en: [
          'Personalized analysis for every project',
          'Methodical verification of required records',
          'Structured preparation for consular interviews',
          'Complete transparency and respect of sovereign rules',
        ],
      },
    },
    introduction: {
      lead: {
        fr: 'Obtenir un visa est une démarche administrative exigeante qui nécessite clarté, cohérence et rigueur documentaire.',
        en: 'Applying for a visa is a demanding administrative process that requires clarity, consistency and documentary rigor.',
      },
      paragraphs: {
        fr: [
          'Chez FutureLearn, notre mission est de vous faire gagner un temps précieux en éliminant les incertitudes courantes. Nous analysons la faisabilité de votre projet, nous vous aidons à rassembler un dossier complet et conforme, et nous vous préparons avec sérieux aux échanges consulaires.',
          'Nous privilégions une relation de confiance et de totale franchise : nous ne vendons pas d’illusions et nous ne promettons aucun accord automatique, car la décision relève exclusivement de la souveraineté des consulats et ambassades.',
        ],
        en: [
          'At FutureLearn, our mission is to save you precious time by eliminating common errors. We evaluate project feasibility, assist in assembling complete and compliant records, and prepare you thoroughly for consular appointments.',
          'We emphasize trust and absolute integrity: we never sell illusions nor promise automatic approvals, as final decisions rest exclusively with the sovereign discretion of embassies and consulates.',
        ],
      },
      roleTitle: {
        fr: 'Le rôle de FutureLearn à vos côtés',
        en: 'FutureLearn’s Role by Your Side',
      },
      rolePoints: [
        {
          title: { fr: 'Orientation', en: 'Orientation' },
          desc: {
            fr: 'Compréhension approfondie de votre parcours, identification du type de visa pertinent et des critères requis.',
            en: 'Comprehensive review of your background, identifying the appropriate visa category and prerequisites.',
          },
        },
        {
          title: { fr: 'Analyse du projet', en: 'Project Analysis' },
          desc: {
            fr: 'Examen de la cohérence de vos motifs de voyage, garanties financières et liens solides avec votre pays d’origine.',
            en: 'Assessing the consistency of travel purposes, financial guarantees and ties to your home country.',
          },
        },
        {
          title: { fr: 'Préparation documentaire', en: 'Documentary Preparation' },
          desc: {
            fr: 'Constitution minutieuse du dossier : formulaires officiels, attestations, lettres d’explication claires et ordonnées.',
            en: 'Meticulous file assembly: official application forms, certificates, and clear statement letters.',
          },
        },
        {
          title: { fr: 'Accompagnement & simulation', en: 'Guidance & Simulation' },
          desc: {
            fr: 'Prise de rendez-vous sur les plateformes officielles et simulations d’entretien pour vous exprimer sereinement.',
            en: 'Scheduling appointments on official portals and realistic interview simulations to speak with confidence.',
          },
        },
        {
          title: { fr: 'Suivi régulier', en: 'Continuous Follow-Up' },
          desc: {
            fr: 'Veille sur l’état d’avancement de votre demande et accompagnement réactif à chaque étape.',
            en: 'Monitoring processing progress and responsive guidance at every single milestone.',
          },
        },
      ],
      disclaimer: {
        fr: 'Avertissement éthique : FutureLearn est une agence privée de conseil et d’assistance administrative. Nous n’avons aucun pouvoir de délivrance de visa. La décision d’octroi ou de refus appartient exclusivement et sans appel aux autorités consulaires des pays de destination.',
        en: 'Ethical disclaimer: FutureLearn is a private advisory and administrative assistance agency. We have no authority to issue visas. Visa grant or refusal decisions belong solely and sovereignly to the consular authorities of the destination countries.',
      },
    },
    offerings: {
      title: {
        fr: 'Nos domaines d’assistance visa',
        en: 'Our Visa Assistance Categories',
      },
      subtitle: {
        fr: 'Une expertise ciblée selon votre motif de mobilité internationale.',
        en: 'Targeted expertise adapted to your specific international mobility purpose.',
      },
      items: [
        {
          id: 'etudiant',
          title: { fr: 'Visa Étudiant', en: 'Student Visa' },
          tag: { fr: 'Universités & Grandes écoles', en: 'Universities & Colleges' },
          description: {
            fr: 'Accompagnement complet pour vos projets d’études supérieures : vérification des attestations d’admission, montage du dossier financier (garant, prise en charge, caution bancaire), hébergement et préparation de l’entretien de motivation.',
            en: 'Comprehensive support for higher education: verification of admission letters, financial proof (sponsor, bank guarantee), accommodation and motivation interview coaching.',
          },
          details: {
            fr: ['Dossier Campus France / universités', 'Garanties financières & justificatifs de ressources', 'Lettres de motivation académiques', 'Simulation d’entretien consulaire'],
            en: ['Campus France / university files', 'Financial proofs & sponsorship documents', 'Academic statement letters', 'Consular interview simulation'],
          },
        },
        {
          id: 'travail',
          title: { fr: 'Visa Travail & Mobilité', en: 'Work & Professional Visa' },
          tag: { fr: 'Salariés & Professionnels', en: 'Employees & Professionals' },
          description: {
            fr: 'Assistance pour les travailleurs bénéficiant d’un contrat, d’une promesse d’embauche ou d’une opportunité professionnelle à l’international. Structuration des documents d’autorisation de travail.',
            en: 'Support for professionals with job offers, employment contracts or international assignments. Verification of work authorization documents.',
          },
          details: {
            fr: ['Conformité de l’autorisation de travail', 'Justificatifs de compétences professionnelles', 'Traduction assermentée des diplômes', 'Vérification des pièces de l’employeur'],
            en: ['Work authorization compliance', 'Proof of professional credentials', 'Certified translation of diplomas', 'Employer documentation checks'],
          },
        },
        {
          id: 'touristique',
          title: { fr: 'Visa Touristique & Court Séjour', en: 'Tourist & Short-Stay Visa' },
          tag: { fr: 'Voyages & Découvertes', en: 'Travel & Holidays' },
          description: {
            fr: 'Pour vos séjours d’agrément ou découvertes culturelles. Organisation rigoureuse des réservations hôtelières, itinéraires détaillés, assurances voyage et preuves d’attaches socio-économiques.',
            en: 'For leisure or cultural stays. Methodical planning of accommodation vouchers, day-to-day itineraries, travel insurance and proof of return ties.',
          },
          details: {
            fr: ['Planning de voyage cohérent', 'Réservations vérifiables & assurance voyage', 'Attestation d’accueil ou hébergement', 'Preuves d’enracinement dans le pays d’origine'],
            en: ['Consistent travel itinerary', 'Verifiable bookings & travel insurance', 'Host invitation or hotel voucher', 'Proof of strong home country ties'],
          },
        },
        {
          id: 'famille',
          title: { fr: 'Visa Regroupement Familial & Visite', en: 'Family Reunification & Visit Visa' },
          tag: { fr: 'Proches & Conjoints', en: 'Relatives & Spouses' },
          description: {
            fr: 'Accompagnement pour rejoindre vos proches ou leur rendre visite. Vérification minutieuse des liens de parenté, actes d’état civil, attestations de prise en charge et conditions de logement.',
            en: 'Guidance to visit or reunite with family members abroad. Thorough check of civil status records, kinship proofs, sponsorship and accommodation standards.',
          },
          details: {
            fr: ['Actes d’état civil & preuves de filiation', 'Attestation d’accueil validée en mairie/préfecture', 'Ressources de l’hôte garant', 'Conseils pour les formalités de séjour'],
            en: ['Civil records & proof of relationship', 'Official local host certificate', 'Sponsor income & housing verification', 'Formalities and residency advice'],
          },
        },
        {
          id: 'business',
          title: { fr: 'Visa Business & Missions d’Affaires', en: 'Business & Mission Visa' },
          tag: { fr: 'Entreprises & Salons', en: 'Companies & Trade Shows' },
          description: {
            fr: 'Pour entrepreneurs, cadres et délégués devant participer à des salons professionnels, conférences ou négociations commerciales. Préparation des lettres d’invitation et ordres de mission.',
            en: 'For entrepreneurs, managers and delegates attending conferences, trade fairs or negotiations. Preparation of corporate invitations and mission orders.',
          },
          details: {
            fr: ['Lettre d’invitation d’entreprise partenaire', 'Ordre de mission et prise en charge des frais', 'Badges d’accès aux salons professionnels', 'Traitement prioritaire selon les délais'],
            en: ['Partner company invitation letter', 'Official mission order & expense coverage', 'Trade fair badges & event accreditation', 'Priority scheduling handling'],
          },
        },
      ],
    },
    benefits: {
      title: {
        fr: 'Pourquoi confier votre dossier à FutureLearn ?',
        en: 'Why Trust FutureLearn with Your Application?',
      },
      items: [
        {
          title: { fr: 'Diagnostic lucide et objectif', en: 'Honest & Objective Evaluation' },
          desc: {
            fr: 'Nous évaluons vos chances réelles avant d’engager vos frais administratifs.',
            en: 'We assess realistic feasibility before committing consular fees.',
          },
        },
        {
          title: { fr: 'Zéro fausse promesse', en: 'No False Promises' },
          desc: {
            fr: 'Une déontologie claire : respect scrupuleux des lois et clarté sur nos limites d’action.',
            en: 'Strict ethics: total respect for regulations and full honesty regarding our scope.',
          },
        },
        {
          title: { fr: 'Préparation intensive à l’oral', en: 'Intensive Verbal Coaching' },
          desc: {
            fr: 'Des mises en situation réelles pour aborder l’entretien consulaire avec calme et précision.',
            en: 'Realistic scenarios to approach the consular interview with confidence and poise.',
          },
        },
        {
          title: { fr: 'Équipe accessible à Yaoundé', en: 'Accessible Team in Yaoundé' },
          desc: {
            fr: 'Un accueil physique à notre agence du Lycée Biyem-Assi et un support continu par WhatsApp.',
            en: 'Direct consultation at our Biyem-Assi office and continuous WhatsApp support.',
          },
        },
      ],
    },
    process: {
      title: {
        fr: 'Notre démarche en 4 étapes',
        en: 'Our 4-Step Methodology',
      },
      steps: [
        {
          stepNumber: '01',
          title: { fr: 'Entretien exploratoire', en: 'Exploratory Consultation' },
          desc: {
            fr: 'Vous nous exposez votre projet lors d’une consultation privée à l’agence ou par téléphone.',
            en: 'You present your project during a private consultation at our office or via phone.',
          },
        },
        {
          stepNumber: '02',
          title: { fr: 'Audit & collecte des pièces', en: 'Audit & Records Collection' },
          desc: {
            fr: 'Nous dressons la liste exacte des pièces requises et auditons chaque document avec rigueur.',
            en: 'We establish the exact checklist of required records and audit each document thoroughly.',
          },
        },
        {
          stepNumber: '03',
          title: { fr: 'Montage & préparation', en: 'Assembly & Interview Coaching' },
          desc: {
            fr: 'Finalisation des formulaires, rédaction des courriers justificatifs et simulation de rendez-vous.',
            en: 'Finalizing forms, drafting cover letters and conducting mock interview sessions.',
          },
        },
        {
          stepNumber: '04',
          title: { fr: 'Dépôt & suivi', en: 'Submission & Status Tracking' },
          desc: {
            fr: 'Dépôt du dossier au centre agréé (TLS, VFS, Consulat) et veille continue jusqu’à la réponse.',
            en: 'Submission at designated centers (TLS, VFS, Consulates) and active status tracking.',
          },
        },
      ],
    },
    usefulInfo: {
      title: {
        fr: 'Conseils pratiques et informations utiles',
        en: 'Practical Advice & Helpful Information',
      },
      intro: {
        fr: 'Quelques principes fondamentaux pour aborder sereinement votre demande de visa :',
        en: 'Key fundamental principles to approach your visa application calmly:',
      },
      points: [
        {
          title: { fr: 'Anticipez de 3 à 6 mois', en: 'Plan 3 to 6 months ahead' },
          content: {
            fr: 'Les créneaux consulaires et les délais d’instruction varient fortement selon les saisons. Commencez le montage de votre dossier le plus tôt possible.',
            en: 'Consular slots and processing timelines fluctuate with peak seasons. Start preparing your application as early as possible.',
          },
        },
        {
          title: { fr: 'Clarté des flux bancaires', en: 'Clear and consistent bank records' },
          content: {
            fr: 'Les relevés bancaires doivent refléter des mouvements cohérents et réguliers, sans dépôts massifs inexpliqués survenus à la veille du dépôt.',
            en: 'Bank statements must demonstrate consistent and regular operations, avoiding unexplained large deposits made just prior to filing.',
          },
        },
        {
          title: { fr: 'Authenticité absolue des documents', en: 'Absolute document authenticity' },
          content: {
            fr: 'Toute pièce non authentique entraîne un refus systématique et un signalement consulaire irréversible. FutureLearn ne traite que des dossiers strictement véridiques.',
            en: 'Any fraudulent document results in immediate rejection and irreversible consular blacklisting. FutureLearn strictly handles genuine records.',
          },
        },
      ],
    },
    faq: [
      {
        id: 'faq-visa-1',
        question: {
          fr: 'Pouvez-vous garantir l’obtention de mon visa ?',
          en: 'Can you guarantee my visa approval?',
        },
        answer: {
          fr: 'Non. Aucune agence sérieuse ne peut garantir l’obtention d’un visa. Seuls les officiers consulaires du pays de destination ont le pouvoir d’accorder ou de refuser un visa. Notre rôle consiste à maximiser vos chances en vous remettant un dossier impeccable, cohérent et bien argumenté.',
          en: 'No. No reputable agency can guarantee visa approval. Only consular officers possess the legal authority to grant or deny visas. Our role is to maximize your prospects by assembling a flawless, cohesive, and compelling application.',
        },
      },
      {
        id: 'faq-visa-2',
        question: {
          fr: 'Combien de temps avant la date de départ dois-je commencer ?',
          en: 'How far in advance should I start?',
        },
        answer: {
          fr: 'Pour un visa étudiant, nous recommandons de commencer 4 à 6 mois à l’avance. Pour un visa touristique ou de travail, 2 à 3 mois avant la date de départ prévue constituent un délai raisonnable.',
          en: 'For student visas, we recommend starting 4 to 6 months in advance. For tourist or work visas, 2 to 3 months before your expected travel date is a reasonable timeline.',
        },
      },
      {
        id: 'faq-visa-3',
        question: {
          fr: 'Organisez-vous des simulations d’entretien ?',
          en: 'Do you provide mock interview sessions?',
        },
        answer: {
          fr: 'Oui, c’est une part essentielle de notre accompagnement. Nous vous entraînons sur les questions fréquemment posées par les officiers consulaires pour vous apprendre à répondre avec clarté, pertinence et confiance.',
          en: 'Yes, this is an essential part of our guidance. We rehearse questions frequently asked by consular officers so you can respond with clarity, relevance, and poise.',
        },
      },
      {
        id: 'faq-visa-4',
        question: {
          fr: 'Que se passe-t-il si mon dossier a déjà fait l’objet d’un refus par le passé ?',
          en: 'What if I already had a previous refusal?',
        },
        answer: {
          fr: 'Un refus antérieur n’est pas rédhibitoire s’il est analysé avec lucidité. Nous examinons le motif notifié pour comprendre ce qui a manqué, et nous reconstruisons une demande plus solide avec des pièces justificatives nouvelles.',
          en: 'A prior refusal is not definitive if addressed with precision. We analyze the official refusal motive, identify what was lacking, and reconstruct a reinforced application with new supporting proofs.',
        },
      },
    ],
    cta: {
      title: {
        fr: 'Préparez votre visa dans les meilleures conditions.',
        en: 'Prepare Your Visa under Optimal Conditions.',
      },
      subtitle: {
        fr: 'Échangez avec un conseiller FutureLearn pour obtenir un diagnostic clair de votre situation.',
        en: 'Consult a FutureLearn specialist for a clear assessment of your situation.',
      },
      primaryBtn: {
        fr: 'Parler à un conseiller visa',
        en: 'Speak to a Visa Advisor',
      },
      secondaryBtn: {
        fr: 'Faire évaluer mon dossier',
        en: 'Evaluate My File',
      },
    },
  },

  // =========================================================================
  // 02 — BILLETS D'AVION
  // =========================================================================
  'billets-avion': {
    id: 'billets-avion',
    slug: '/services/billets-avion',
    projectType: 'billet',
    seo: {
      title: {
        fr: 'Réservation Billets d’Avion & Accompagnement Voyage | FutureLearn',
        en: 'Flight Booking & Dedicated Travel Guidance | FutureLearn',
      },
      description: {
        fr: 'Recherche, réservation et accompagnement personnalisé pour vos vols internationaux. Conseils formalités, bagages et assistance spéciale premiers voyageurs.',
        en: 'Search, booking and personalized guidance for international flights. Formalities advice, baggage rules and special first-time flyer support.',
      },
    },
    hero: {
      badge: {
        fr: 'VOYAGES SANS STRESS · BILLETS D’AVION',
        en: 'STRESS-FREE TRAVEL · FLIGHT TICKETS',
      },
      h1: {
        fr: 'Billets d’avion : réservez sereinement, voyagez en toute confiance.',
        en: 'Flight Tickets: Book Peacefully, Travel with Confidence.',
      },
      subtitle: {
        fr: 'Au-delà de la réservation, nous vous accompagnons sur le choix des compagnies, les escales, les franchises bagages et les démarches d’embarquement.',
        en: 'Beyond ticketing, we advise on airline choices, layovers, baggage allowances and boarding requirements.',
      },
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
      highlights: {
        fr: [
          'Sélection transparente des meilleurs itinéraires et tarifs',
          'Assistance complète pour les voyageurs novices',
          'Conseils personnalisés sur les escales et correspondances',
          'Accompagnement réactif en cas de modification de vol',
        ],
        en: [
          'Transparent selection of best itineraries and fares',
          'Comprehensive guidance for first-time travelers',
          'Personalized advice on layovers and connections',
          'Responsive assistance in case of schedule changes',
        ],
      },
    },
    introduction: {
      lead: {
        fr: 'Prendre l’avion pour la première fois ou organiser un voyage international avec correspondances peut susciter des inquiétudes légitimes.',
        en: 'Flying for the first time or planning international trips with layovers can be stressful without proper preparation.',
      },
      paragraphs: {
        fr: [
          'Le service Billets d’avion de FutureLearn n’est pas un simple moteur de recherche en ligne impersonnel. Nous sommes physiquement présents à Yaoundé pour vous conseiller sur les meilleures options de vol selon votre budget, vos dates et vos contraintes bagages.',
          'Nous portons une attention toute particulière aux étudiants et aux voyageurs novices qui effectuent leur premier déplacement international : nous vous expliquons comment s’enregistrer, comment naviguer dans les aéroports internationaux de transit et quelles règles respecter.',
        ],
        en: [
          'FutureLearn’s flight service is far from an impersonal automated search engine. Our team is physically present in Yaoundé to advise you on optimal flight combinations according to your budget, departure dates and baggage allowances.',
          'We give special attention to students and first-time international travelers: guiding you through check-in routines, navigating hub transit terminals, and understanding customs requirements.',
        ],
      },
      roleTitle: {
        fr: 'Nos engagements pour votre voyage',
        en: 'Our Commitments for Your Journey',
      },
      rolePoints: [
        {
          title: { fr: 'Recherche & comparaison', en: 'Search & Comparison' },
          desc: {
            fr: 'Étude des plans de vol sur les compagnies régulières fiables (Air France, Brussels Airlines, Ethiopian, Turkish, Royal Air Maroc, etc.).',
            en: 'Scanning reliable scheduled airlines (Air France, Brussels Airlines, Ethiopian, Turkish, RAM, etc.).',
          },
        },
        {
          title: { fr: 'Conseils sur les escales', en: 'Layover Expertise' },
          desc: {
            fr: 'Vérification des temps de correspondance minimaux pour éviter les pertes de correspondance ou les besoins imprévus de visa de transit.',
            en: 'Verifying minimum connection times to prevent missed flights or unexpected transit visa needs.',
          },
        },
        {
          title: { fr: 'Assistance bagages', en: 'Baggage Allowances' },
          desc: {
            fr: 'Information claire sur les franchises en soute (2x23kg, 1x23kg) et en cabine pour éviter les surcoûts à l’aéroport.',
            en: 'Precise clarity on checked piece concepts (2x23kg, 1x23kg) and cabin luggage limits to avoid surprise fees.',
          },
        },
        {
          title: { fr: 'Accompagnement premier départ', en: 'First Flight Coaching' },
          desc: {
            fr: 'Briefing complet avant le départ : heure d’arrivée à Nsimalen ou Douala, enregistrement, passage aux frontières.',
            en: 'Full pre-departure briefing: airport arrival timing in Yaoundé/Douala, check-in, customs clearance.',
          },
        },
      ],
    },
    offerings: {
      title: {
        fr: 'Nos solutions de billetterie aérienne',
        en: 'Our Air Ticketing Solutions',
      },
      subtitle: {
        fr: 'Des formules claires adaptées à chaque profil de voyageur.',
        en: 'Clear arrangements adapted to every travel profile.',
      },
      items: [
        {
          id: 'vols-etudiants',
          title: { fr: 'Vols Étudiants & Rentrée Universitaire', en: 'Student Flights & Campus Arrivals' },
          tag: { fr: 'Tarifs & franchises adaptées', en: 'Special allowances' },
          description: {
            fr: 'Bénéficiez d’itinéraires optimisés pour vos rentrées académiques, souvent avec des franchises bagages avantageuses pour emporter toutes vos affaires d’installation.',
            en: 'Benefit from optimized schedules for your university start dates, often featuring generous baggage limits to transport all your personal belongings.',
          },
          details: {
            fr: ['Franchises 2 bagages privilégiées', 'Flexibilité sur les dates de rentrée', 'Assistance à l’arrivée sur place'],
            en: ['2-piece baggage prioritization', 'Date change flexibility options', 'Guidance on arrival formalities'],
          },
        },
        {
          id: 'vols-famille',
          title: { fr: 'Voyages en Famille & Vacances', en: 'Family Trips & Holidays' },
          tag: { fr: 'Confort & sérénité', en: 'Comfort & peace of mind' },
          description: {
            fr: 'Organisation de réservations synchronisées pour plusieurs passagers, placement côte à côte et gestion des repas spéciaux à bord.',
            en: 'Synchronized group reservations for families, side-by-side seat reservations and special onboard meal bookings.',
          },
          details: {
            fr: ['Réservations groupées sans dispersion', 'Sièges côte à côte', 'Prise en compte des enfants et aînés'],
            en: ['Cohesive group bookings', 'Adjacent seating allocations', 'Dedicated attention for children and seniors'],
          },
        },
        {
          id: 'vols-business',
          title: { fr: 'Vols Professionnels & Missions Express', en: 'Business Flights & Express Missions' },
          tag: { fr: 'Flexibilité & rapidité', en: 'Speed & flexibility' },
          description: {
            fr: 'Billets modifiables, correspondances courtes et émissions en urgence pour vos déplacements d’affaires incontournables.',
            en: 'Flexible ticketing, rapid airport connections and urgent issuances for critical corporate missions.',
          },
          details: {
            fr: ['Émission rapide le jour même', 'Conditions de modification souples', 'Factures d’entreprise conformes'],
            en: ['Same-day rapid issuance', 'Flexible change provisions', 'Standard corporate invoices'],
          },
        },
        {
          id: 'assistance-novice',
          title: { fr: 'Accompagnement Spécial Premiers Voyageurs', en: 'Dedicated First-Timer Support' },
          tag: { fr: 'Zéro anxiété', en: 'Zero stress' },
          description: {
            fr: 'Pour toute personne n’ayant jamais pris l’avion : explication détaillée du billet électronique, de la carte d’embarquement et du trajet dans l’aérogare.',
            en: 'For anyone boarding a flight for the first time: thorough walkthrough of e-tickets, boarding passes and terminal transit.',
          },
          details: {
            fr: ['Explication pas à pas des étapes', 'Simulation de l’enregistrement et sécurité', 'Assistance joignable jusqu’au décollage'],
            en: ['Step-by-step terminal roadmap', 'Security checkpoint walkthrough', 'Reachable support until takeoff'],
          },
        },
      ],
    },
    benefits: {
      title: {
        fr: 'Les avantages du service Billetterie FutureLearn',
        en: 'The FutureLearn Ticketing Advantage',
      },
      items: [
        {
          title: { fr: 'Interlocuteur physique', en: 'Face-to-Face Relationship' },
          desc: {
            fr: 'Un conseiller dédié à Yaoundé disponible en personne ou par appel direct, sans robot téléphonique.',
            en: 'A dedicated advisor in Yaoundé available in person or by direct phone, no automated bots.',
          },
        },
        {
          title: { fr: 'Sécurité de paiement', en: 'Secure Transactions' },
          desc: {
            fr: 'Modalités de paiement locales fiables et sécurisées avec remise immédiate de votre billet électronique.',
            en: 'Reliable and recognized local payment methods with immediate e-ticket delivery.',
          },
        },
        {
          title: { fr: 'Vérification des correspondances', en: 'Transit & Visa Check' },
          desc: {
            fr: 'Contrôle systématique des règles de transit pour vous épargner les mauvaises surprises en escale.',
            en: 'Systematic transit check to prevent unexpected layover transit visa requirements.',
          },
        },
        {
          title: { fr: 'Support en cas d’imprévu', en: 'Irregularity Support' },
          desc: {
            fr: 'Aide à la réorientation et réémission si la compagnie retarde ou annule un vol.',
            en: 'Assistance in rebooking and flight reissue whenever an airline delays or cancels flights.',
          },
        },
      ],
    },
    process: {
      title: {
        fr: 'Comment réserver votre billet en 4 étapes simples',
        en: 'How to Book Your Ticket in 4 Steps',
      },
      steps: [
        {
          stepNumber: '01',
          title: { fr: 'Exprimez vos dates & destination', en: 'Submit Dates & Destination' },
          desc: {
            fr: 'Indiquez vos dates souhaitées, votre ville de départ et votre destination finale.',
            en: 'Provide your dates, preferred departure city and final international destination.',
          },
        },
        {
          stepNumber: '02',
          title: { fr: 'Comparaison des offres', en: 'Offer Comparison' },
          desc: {
            fr: 'Nous vous présentons les meilleures options (prix, escales, franchises bagages).',
            en: 'We present the best options (fares, layovers, baggage allowances).',
          },
        },
        {
          stepNumber: '03',
          title: { fr: 'Validation & émission', en: 'Confirmation & Issuance' },
          desc: {
            fr: 'Vous validez l’itinéraire, effectuez le règlement et recevez votre billet officiel.',
            en: 'You confirm the itinerary, complete payment and receive your official ticket.',
          },
        },
        {
          stepNumber: '04',
          title: { fr: 'Briefing avant le vol', en: 'Pre-Flight Briefing' },
          desc: {
            fr: 'Nous vous transmettons tous les conseils pour vous enregistrer et voyager sereinement.',
            en: 'We brief you on online check-in, baggage limits and boarding logistics.',
          },
        },
      ],
    },
    usefulInfo: {
      title: {
        fr: 'Conseils pour bien préparer votre vol',
        en: 'Guidelines to Prepare Your Flight',
      },
      intro: {
        fr: 'Ce qu’il faut vérifier avant de partir :',
        en: 'What you must check before departure:',
      },
      points: [
        {
          title: { fr: 'Validité du passeport', en: 'Passport validity' },
          content: {
            fr: 'Votre passeport doit obligatoirement avoir au minimum 6 mois de validité après votre date de retour prévue.',
            en: 'Your passport must be valid for at least 6 months beyond your scheduled return date.',
          },
        },
        {
          title: { fr: 'Arrivée à l’aéroport', en: 'Airport arrival timing' },
          content: {
            fr: 'Présentez-vous 3 à 4 heures avant le décollage pour les vols internationaux au départ de Yaoundé-Nsimalen ou Douala.',
            en: 'Arrive 3 to 4 hours before scheduled departure for international flights from Yaoundé or Douala.',
          },
        },
        {
          title: { fr: 'Objets en bagage cabine', en: 'Cabin baggage restrictions' },
          content: {
            fr: 'Les liquides de plus de 100ml et les objets coupants sont formellement interdits en cabine. Gardez toujours vos documents essentiels sur vous.',
            en: 'Liquids over 100ml and sharp objects are strictly prohibited in cabin bags. Keep vital documents on your person.',
          },
        },
      ],
    },
    faq: [
      {
        id: 'faq-vol-1',
        question: {
          fr: 'Comment puis-je réserver un billet d’avion chez FutureLearn ?',
          en: 'How do I book a flight ticket with FutureLearn?',
        },
        answer: {
          fr: 'Il vous suffit de nous contacter par téléphone, WhatsApp ou de vous rendre directement à notre agence avec vos dates de voyage et la copie de votre passeport. Nous comparons les options et émettons votre billet en quelques instants.',
          en: 'Simply contact us by phone, WhatsApp or visit our agency with your travel dates and a passport copy. We compare airline schedules and issue your ticket promptly.',
        },
      },
      {
        id: 'faq-vol-2',
        question: {
          fr: 'Puis-je modifier la date de mon vol après l’achat ?',
          en: 'Can I change my flight date after purchasing?',
        },
        answer: {
          fr: 'Oui, selon les conditions tarifaires de la compagnie aérienne choisie. Nous vous indiquons clairement ces conditions avant l’émission et nous vous assistons pour toute modification ultérieure.',
          en: 'Yes, subject to the airline fare rules. We clearly explain these terms prior to issuance and handle any subsequent modification for you.',
        },
      },
      {
        id: 'faq-vol-3',
        question: {
          fr: 'Proposez-vous des billets avec 2 bagages de 23 kg ?',
          en: 'Do you offer tickets with 2x23kg checked bags?',
        },
        answer: {
          fr: 'Absolument. Pour les étudiants et les départs de longue durée, nous privilégions toujours les compagnies régulières qui proposent une franchise de 2 pièces de 23 kg en soute.',
          en: 'Absolutely. For students and long-term relocations, we always prioritize airlines offering a 2-piece (2x23kg) baggage allowance.',
        },
      },
      {
        id: 'faq-vol-4',
        question: {
          fr: 'Comment m’aidez-vous si c’est mon premier voyage en avion ?',
          en: 'How do you support me if it is my very first flight?',
        },
        answer: {
          fr: 'Nous vous expliquons pas à pas le déroulement du voyage : heure d’arrivée à l’aéroport, enregistrement des bagages, passage de la douane, repérage de la porte d’embarquement et déroulement de l’escale dans le pays de transit.',
          en: 'We break down the entire trip: airport arrival, bag check-in, customs control, boarding gate location and navigating transfer hubs.',
        },
      },
    ],
    cta: {
      title: {
        fr: 'Trouvez le vol idéal pour votre prochaine destination.',
        en: 'Find the Ideal Flight for Your Next Destination.',
      },
      subtitle: {
        fr: 'Indiquez-nous vos dates et laissez nos experts vous dénicher le meilleur itinéraire.',
        en: 'Share your dates and let our ticketing specialists find the best route.',
      },
      primaryBtn: {
        fr: 'Demander un tarif de billet',
        en: 'Request a Flight Fare',
      },
      secondaryBtn: {
        fr: 'Parler à un conseiller voyage',
        en: 'Speak to a Travel Advisor',
      },
    },
  },

  // =========================================================================
  // 03 — FORMATION PROFESSIONNELLE
  // =========================================================================
  'formation-professionnelle': {
    id: 'formation-professionnelle',
    slug: '/services/formation-professionnelle',
    projectType: 'formation',
    seo: {
      title: {
        fr: 'Formations Professionnelles Qualifiantes à Yaoundé | FutureLearn',
        en: 'Practical Vocational Training Programs in Yaoundé | FutureLearn',
      },
      description: {
        fr: 'Développez des compétences pratiques et recherchées : secrétariat, programmation web, infographie, marketing digital, comptabilité et auxiliaire de vie.',
        en: 'Develop high-demand practical skills: office administration, web development, graphic design, digital marketing, accounting and caregiving.',
      },
    },
    hero: {
      badge: {
        fr: 'COMPÉTENCES PRATIQUES · INSERTION RAPIDE',
        en: 'PRACTICAL SKILLS · CAREER READY',
      },
      h1: {
        fr: 'Formations professionnelles : apprenez un métier d’avenir.',
        en: 'Vocational Training: Build Skills for a Brighter Future.',
      },
      subtitle: {
        fr: 'Des cursus concrets, animés par des praticiens et axés sur la maîtrise opérationnelle pour répondre aux exigences réelles des employeurs.',
        en: 'Action-oriented curricula led by practitioners and focused on hands-on mastery to meet the real needs of modern employers.',
      },
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      highlights: {
        fr: [
          'Pédagogie active 80% pratique sur postes de travail équipés',
          'Formateurs issus du monde de l’entreprise',
          'Projets réels et mises en situation concrètes',
          'Attestation de fin de formation qualifiante',
        ],
        en: [
          'Active learning with 80% practical hands-on exercises',
          'Instructors with substantial industry experience',
          'Real-world portfolio projects and scenario simulations',
          'Certificate of vocational training completion',
        ],
      },
    },
    introduction: {
      lead: {
        fr: 'Le marché de l’emploi privilégie les profils directement opérationnels, capables de produire des résultats dès leur prise de poste.',
        en: 'The modern job market favors immediately operational professionals capable of delivering results from day one.',
      },
      paragraphs: {
        fr: [
          'Le pôle Formation professionnelle de FutureLearn conçoit des programmes intensifs et pragmatiques. Nous formons les étudiants, les personnes en reconversion et les professionnels souhaitant acquérir de nouvelles compétences techniques.',
          'Chaque cursus associe apports méthodologiques, ateliers pratiques et réalisation de projets réels pour bâtir un véritable portfolio de compétences valorisable sur le marché camerounais ou à l’international.',
        ],
        en: [
          'FutureLearn’s vocational branch designs intensive, pragmatic curricula. We train students, career changers and active workers seeking to level up technical competencies.',
          'Each program combines methodology, hands-on lab sessions and actual project delivery to help students build a tangible portfolio valuable in Cameroon and internationally.',
        ],
      },
      roleTitle: {
        fr: 'Notre approche pédagogique',
        en: 'Our Pedagogical Approach',
      },
      rolePoints: [
        {
          title: { fr: 'Pratique avant tout', en: 'Practice-First' },
          desc: {
            fr: 'Chaque concept théorique est immédiatement appliqué sur des exercices et des études de cas.',
            en: 'Every theoretical concept is directly validated through exercises and business case studies.',
          },
        },
        {
          title: { fr: 'Accompagnement individualisé', en: 'Individualized Guidance' },
          desc: {
            fr: 'Effectifs maîtrisés en petits groupes pour permettre au formateur de suivre la progression de chaque apprenant.',
            en: 'Small class cohorts allowing instructors to monitor individual student pace and progress.',
          },
        },
        {
          title: { fr: 'Outils modernes', en: 'Modern Tooling' },
          desc: {
            fr: 'Utilisation des logiciels et méthodes couramment adoptés dans les entreprises actuelles.',
            en: 'Utilization of modern software suites and methods widely adopted in industry.',
          },
        },
        {
          title: { fr: 'Orientation professionnelle', en: 'Career Coaching' },
          desc: {
            fr: 'Conseils sur la rédaction de CV, valorisation des réalisations et posture professionnelle.',
            en: 'Resume review, portfolio presentation guidance and professional workplace etiquette.',
          },
        },
      ],
    },
    offerings: {
      title: {
        fr: 'Nos 6 programmes de formation',
        en: 'Our 6 Vocational Training Programs',
      },
      subtitle: {
        fr: 'Choisissez le parcours qui correspond à votre ambition.',
        en: 'Choose the curriculum aligned with your ambitions.',
      },
      items: [
        {
          id: 'secretariat',
          title: { fr: 'Secrétariat bureautique', en: 'Office Administration' },
          tag: { fr: 'Bureautique & Organisation', en: 'Administration & Office' },
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Maîtrise complète de la suite Office (Word, Excel, PowerPoint), rédaction administrative professionnelle, gestion du courrier, accueil physique et téléphonique, archivage et tenue d’agenda.',
            en: 'Comprehensive mastery of office suites (Word, Excel, PowerPoint), business correspondence, scheduling, reception, filing and executive office support.',
          },
          details: {
            fr: ['Traitement de texte & tableaux avancés', 'Courriers professionnels & comptes-rendus', 'Accueil & communication d’entreprise'],
            en: ['Word processing & advanced spreadsheets', 'Corporate writing & meeting minutes', 'Customer reception & executive communication'],
          },
        },
        {
          id: 'programmation-web',
          title: { fr: 'Programmation web', en: 'Web Development' },
          tag: { fr: 'Code & Technologies', en: 'Coding & Tech' },
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Apprentissage des fondamentaux du développement web moderne : HTML5, CSS3, JavaScript, création de sites vitrines réactifs, intégration et mise en ligne.',
            en: 'Mastering foundations of modern web development: HTML5, CSS3, JavaScript, responsive landing pages and web publishing.',
          },
          details: {
            fr: ['Développement front-end moderne', 'Conception de sites adaptés aux mobiles', 'Mise en ligne & gestion d’hébergement'],
            en: ['Modern front-end development', 'Mobile-responsive layout design', 'Domain hosting & web deployment'],
          },
        },
        {
          id: 'infographie',
          title: { fr: 'Infographie & Design graphique', en: 'Graphic Design & Infographics' },
          tag: { fr: 'Création visuelle & Médias', en: 'Visual Arts & Media' },
          image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Création d’identités visuelles percutantes : logos, affiches, flyers, chartes graphiques et visuels pour réseaux sociaux avec les outils majeurs du design (Photoshop, Illustrator).',
            en: 'Designing striking visual identities: logos, posters, flyers, corporate branding guidelines and social media assets using industry-standard tools.',
          },
          details: {
            fr: ['Conception de logos & chartes graphiques', 'Retouche photo & compositions visuelles', 'Préparation des fichiers pour l’impression'],
            en: ['Logo design & visual brand guidelines', 'Photo retouching & visual composition', 'Print-ready file exports & color theory'],
          },
        },
        {
          id: 'marketing-digital',
          title: { fr: 'Marketing digital & Réseaux sociaux', en: 'Digital Marketing & Social Media' },
          tag: { fr: 'Communication & Ventes', en: 'Growth & Media' },
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Élaboration de stratégies de visibilité sur les réseaux sociaux (Facebook, Instagram, LinkedIn, TikTok), gestion de communauté, création de publicités ciblées et analyse des performances.',
            en: 'Developing visibility strategies on social platforms (Meta, Instagram, LinkedIn, TikTok), community management, paid advertising and analytics.',
          },
          details: {
            fr: ['Gestion de communauté & calendrier éditorial', 'Campagnes publicitaires ciblées (Meta Ads)', 'Acquisition de clients & fidélisation'],
            en: ['Community management & content calendars', 'Targeted ad campaigns (Meta Ads)', 'Customer acquisition & retention tactics'],
          },
        },
        {
          id: 'comptabilite',
          title: { fr: 'Comptabilité et gestion', en: 'Accounting & Business Management' },
          tag: { fr: 'Finance & Entreprise', en: 'Finance & Business' },
          image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Enregistrement des opérations courantes, facturation, suivi de trésorerie, gestion de la paie et préparation des déclarations fiscales et sociales élémentaires.',
            en: 'Recording daily business transactions, invoicing, cash flow tracking, payroll management and preparing baseline fiscal and social returns.',
          },
          details: {
            fr: ['Saisie comptable & journaux de caisse', 'Gestion des factures & suivi clients/fournisseurs', 'Bases de la fiscalité d’entreprise'],
            en: ['Bookkeeping & ledger entries', 'Invoicing & account reconciliations', 'Corporate taxation essentials'],
          },
        },
        {
          id: 'auxiliaire-vie',
          title: { fr: 'Auxiliaire de vie & Aide à la personne', en: 'Caregiving & Personal Care' },
          tag: { fr: 'Santé & Social', en: 'Health & Care' },
          image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Accompagnement bienveillant des personnes âgées, personnes dépendantes ou en convalescence : gestes de confort, hygiène, alimentation équilibrée et soutien moral.',
            en: 'Compassionate assistance for the elderly, dependent individuals or convalescents: physical support, hygiene, balanced meals and emotional care.',
          },
          details: {
            fr: ['Gestes de premiers secours & sécurité', 'Assistance aux repas & maintien de l’autonomie', 'Écoute active & psychologie du patient'],
            en: ['First-aid principles & personal safety', 'Meal preparation & mobility support', 'Active listening & empathy skills'],
          },
        },
      ],
    },
    benefits: {
      title: {
        fr: 'Les points forts de notre centre',
        en: 'The Strengths of Our Training Center',
      },
      items: [
        {
          title: { fr: 'Pratique immersive', en: 'Hands-On Immersion' },
          desc: {
            fr: 'Des ordinateurs récents et une connexion internet permanente pour pratiquer chaque jour.',
            en: 'Equipped workstations and steady internet connectivity for daily practical work.',
          },
        },
        {
          title: { fr: 'Horaires adaptés', en: 'Flexible Schedules' },
          desc: {
            fr: 'Sessions en journée, en cours du soir ou le samedi pour concilier études et obligations personnelles.',
            en: 'Daytime, evening and Saturday sessions designed to match personal constraints.',
          },
        },
        {
          title: { fr: 'Attestation reconnue', en: 'Valuable Certificate' },
          desc: {
            fr: 'Délivrance d’une attestation valorisant les compétences pratiques acquises.',
            en: 'Issuance of a certificate showcasing the practical competencies mastered.',
          },
        },
        {
          title: { fr: 'Conseils d’insertion', en: 'Career Launch Support' },
          desc: {
            fr: 'Aide à la mise en valeur des projets réalisés lors d’entretiens d’embauche.',
            en: 'Coaching on pitching lab achievements during employment interviews.',
          },
        },
      ],
    },
    process: {
      title: {
        fr: 'Votre parcours vers la compétence',
        en: 'Your Roadmap to Practical Mastery',
      },
      steps: [
        {
          stepNumber: '01',
          title: { fr: 'Orientation & choix du cursus', en: 'Orientation & Course Choice' },
          desc: {
            fr: 'Échange avec notre équipe pour sélectionner la filière en adéquation avec vos objectifs.',
            en: 'Discussion with our pedagogical advisor to choose the program matching your targets.',
          },
        },
        {
          stepNumber: '02',
          title: { fr: 'Inscription & démarrage', en: 'Registration & Kickoff' },
          desc: {
            fr: 'Validation de votre dossier, remise des supports et début des sessions pratiques.',
            en: 'Finalizing enrollment, receipt of course materials and starting lab sessions.',
          },
        },
        {
          stepNumber: '03',
          title: { fr: 'Ateliers & projets réels', en: 'Workshops & Real Projects' },
          desc: {
            fr: 'Pratique intensive encadrée par votre formateur avec réalisation d’exercices appliqués.',
            en: 'Intensive practice supervised by instructors with concrete deliverables.',
          },
        },
        {
          stepNumber: '04',
          title: { fr: 'Évaluation & attestation', en: 'Evaluation & Certificate' },
          desc: {
            fr: 'Évaluation des compétences acquises et remise de l’attestation de fin de formation.',
            en: 'Competency verification and presentation of your completion certificate.',
          },
        },
      ],
    },
    usefulInfo: {
      title: {
        fr: 'Informations pratiques pour s’inscrire',
        en: 'Practical Enrollment Information',
      },
      intro: {
        fr: 'Modalités d’accès à nos programmes :',
        en: 'Access details for our programs:',
      },
      points: [
        {
          title: { fr: 'Prérequis accessibles', en: 'Accessible prerequisites' },
          content: {
            fr: 'La plupart de nos cursus débutent aux fondamentaux. Aucune expérience préalable n’est exigée hormis la motivation d’apprendre.',
            en: 'Most courses start with foundational modules. No prior technical experience required beyond strong learning motivation.',
          },
        },
        {
          title: { fr: 'Matériel sur place', en: 'On-site equipment' },
          content: {
            fr: 'Notre salle informatique est équipée pour les séances pratiques. Posséder un ordinateur portable personnel est recommandé pour poursuivre le travail chez soi.',
            en: 'Our computer lab is equipped for practical sessions. Owning a personal laptop is recommended for home practice.',
          },
        },
        {
          title: { fr: 'Sessions régulières', en: 'Regular cohort intakes' },
          content: {
            fr: 'De nouvelles vagues d’apprentissage débutent régulièrement tout au long de l’année à notre centre de Yaoundé.',
            en: 'New learning intakes start regularly throughout the year at our Yaoundé training center.',
          },
        },
      ],
    },
    faq: [
      {
        id: 'faq-form-1',
        question: {
          fr: 'Quelles formations professionnelles proposez-vous ?',
          en: 'What vocational programs do you offer?',
        },
        answer: {
          fr: 'Nous proposons 6 filières pratiques : Secrétariat bureautique, Programmation web, Infographie & Design graphique, Marketing digital, Comptabilité et gestion, et Auxiliaire de vie.',
          en: 'We offer 6 practical tracks: Office Administration, Web Development, Graphic Design, Digital Marketing, Accounting & Management, and Caregiving.',
        },
      },
      {
        id: 'faq-form-2',
        question: {
          fr: 'Puis-je suivre une formation tout en travaillant ?',
          en: 'Can I attend while having a job or studying?',
        },
        answer: {
          fr: 'Oui. Nous aménageons des créneaux flexibles (séances du soir ou du samedi) pour permettre aux professionnels et étudiants de concilier travail et formation.',
          en: 'Yes. We provide flexible schedules (evening classes and Saturday sessions) so working professionals and students can easily balance commitments.',
        },
      },
      {
        id: 'faq-form-3',
        question: {
          fr: 'Délivrez-vous une attestation à la fin ?',
          en: 'Do you deliver a certificate at completion?',
        },
        answer: {
          fr: 'Oui. Chaque apprenant ayant validé avec succès les évaluations et projets pratiques reçoit une attestation de fin de formation qualifiante.',
          en: 'Yes. Every learner successfully validating the assessments and project deliverables receives a formal completion certificate.',
        },
      },
      {
        id: 'faq-form-4',
        question: {
          fr: 'Comment obtenir le programme détaillé d’une formation ?',
          en: 'How can I get the detailed syllabus?',
        },
        answer: {
          fr: 'Il vous suffit de cliquer sur « Demander le programme » ou de nous contacter sur WhatsApp. Nous vous transmettrons la fiche détaillée du cursus.',
          en: 'Simply click "Request Syllabus" or message us on WhatsApp. We will promptly share the comprehensive curriculum syllabus.',
        },
      },
    ],
    cta: {
      title: {
        fr: 'Faites décoller votre carrière professionnelle.',
        en: 'Boost Your Professional Career Today.',
      },
      subtitle: {
        fr: 'Inscrivez-vous à la prochaine session et développez des compétences concrètes.',
        en: 'Enroll in the next cohort and develop actionable real-world skills.',
      },
      primaryBtn: {
        fr: 'S’inscrire à une formation',
        en: 'Enroll in a Course',
      },
      secondaryBtn: {
        fr: 'Demander le programme détaillé',
        en: 'Request Detailed Syllabus',
      },
    },
  },

  // =========================================================================
  // 04 — COURS DE LANGUES
  // =========================================================================
  'cours-langues': {
    id: 'cours-langues',
    slug: '/services/cours-langues',
    projectType: 'langues',
    seo: {
      title: {
        fr: 'Cours de Langues Certifiants (Allemand, Anglais, Français, Chinois, Italien) | FutureLearn',
        en: 'Certified Language Courses (German, English, French, Chinese, Italian) | FutureLearn',
      },
      description: {
        fr: 'Préparez vos examens officiels internationaux : Goethe-Zertifikat, IELTS, TOEFL, TCF, TEF, HSK, CILS. Rythme intensif de 10h/semaine avec formateurs certifiés à Yaoundé.',
        en: 'Prepare recognized international exams: Goethe-Zertifikat, IELTS, TOEFL, TCF, TEF, HSK, CILS. Intensive 10h/week schedule with certified instructors in Yaoundé.',
      },
    },
    hero: {
      badge: {
        fr: 'EXAMENS OFFICIELS · 10H / SEMAINE',
        en: 'OFFICIAL CERTIFICATIONS · 10H / WEEK',
      },
      h1: {
        fr: 'Cours de langues : apprenez aujourd’hui, certifiez demain.',
        en: 'Language Courses: Learn Today, Get Certified Tomorrow.',
      },
      subtitle: {
        fr: 'Des formations linguistiques intensives adaptées aux exigences des universités, des ambassades et des opportunités d’emploi international.',
        en: 'Intensive language courses aligned with the standards of universities, embassies, and global employers.',
      },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      highlights: {
        fr: [
          '5 langues enseignées : Allemand, Anglais, Français, Chinois, Italien',
          'Préparation ciblée aux examens officiels internationaux',
          'Rythme intensif structuré de 10 heures par semaine',
          'Entraînement régulier sur des épreuves types et examens blancs',
        ],
        en: [
          '5 languages taught: German, English, French, Chinese, Italian',
          'Targeted preparation for recognized official certifications',
          'Structured intensive pace of 10 hours per week',
          'Regular practice on mock tests and past exam papers',
        ],
      },
    },
    introduction: {
      lead: {
        fr: 'La maîtrise d’une langue étrangère et l’obtention d’un certificat officiel sont les clés de voûte de tout projet d’études ou de mobilité professionnelle.',
        en: 'Mastering a foreign language and holding an official certificate are foundational pillars for international academic or work mobility.',
      },
      paragraphs: {
        fr: [
          'Chez FutureLearn, nos cours de langues ne se limitent pas à de la théorie scolaire. Nous adoptons une méthode communicative et intensive articulée autour des 4 compétences évaluées lors des tests officiels : compréhension orale, compréhension écrite, expression écrite et expression orale.',
          'Notre rythme de 10 heures par semaine garantit une progression rapide et durable. Nos enseignants diplômés connaissent parfaitement la structure des épreuves (Goethe, IELTS, TCF, etc.) et vous accompagnent avec rigueur jusqu’au jour de l’examen.',
        ],
        en: [
          'At FutureLearn, our language courses go well beyond classroom theory. We employ an active communicative approach focusing on the 4 core pillars evaluated in official exams: listening, reading, writing, and speaking.',
          'Our 10 hours per week rhythm ensures fast and enduring progress. Our certified teachers understand exam blueprints (Goethe, IELTS, TCF, etc.) and guide you steadily until test day.',
        ],
      },
      roleTitle: {
        fr: 'Notre méthode d’enseignement',
        en: 'Our Teaching Methodology',
      },
      rolePoints: [
        {
          title: { fr: 'Immersion & pratique orale', en: 'Immersion & Oral Practice' },
          desc: {
            fr: 'Prise de parole quotidienne pour développer la fluidité, l’intonation et dépasser la peur de s’exprimer.',
            en: 'Daily speaking practice to develop fluency, natural pronunciation and overcome inhibition.',
          },
        },
        {
          title: { fr: 'Méthodologie d’examen', en: 'Exam Blueprint Tactics' },
          desc: {
            fr: 'Décryptage des grilles de notation officielles et techniques de gestion du temps pour chaque épreuve.',
            en: 'Deep-dive into official scoring rubrics and time management tactics for each paper.',
          },
        },
        {
          title: { fr: 'Examens blancs périodiques', en: 'Periodic Mock Exams' },
          desc: {
            fr: 'Mises en conditions réelles d’examen pour évaluer votre progression et corriger les faiblesses.',
            en: 'Full-length simulated exams under real test conditions to gauge progress and address gaps.',
          },
        },
        {
          title: { fr: 'Supports pédagogiques fournis', en: 'Provided Course Materials' },
          desc: {
            fr: 'Manuels récents, enregistrements audio, annales d’examens et fiches de révision structurées.',
            en: 'Modern textbooks, audio listening resources, past papers and clear revision sheets.',
          },
        },
      ],
    },
    offerings: {
      title: {
        fr: 'Les 5 langues et leurs certifications',
        en: 'The 5 Languages & Certifications',
      },
      subtitle: {
        fr: 'Toutes nos formules incluent un rythme de 10h / semaine.',
        en: 'All formulas feature our 10h / week intensive rhythm.',
      },
      items: [
        {
          id: 'allemand',
          title: { fr: 'Allemand', en: 'German' },
          tag: { fr: 'Goethe-Zertifikat · ZDaF', en: 'Goethe-Zertifikat · ZDaF' },
          image: 'https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Formation complète du niveau débutant (A1) aux niveaux avancés (B1/B2) requis pour les études universitaires, l’Ausbildung ou les visas de travail en Allemagne. Préparation spécifique au Goethe-Zertifikat et ZDaF.',
            en: 'Complete course from beginner (A1) to advanced (B1/B2) required for German universities, Ausbildung or work visas. Specialized preparation for Goethe-Zertifikat and ZDaF.',
          },
          details: {
            fr: ['Niveaux A1, A2, B1, B2', 'Rythme : 10h / semaine', 'Préparation ciblée Goethe-Institut'],
            en: ['Levels A1, A2, B1, B2', 'Pace: 10h / week', 'Targeted Goethe-Institut prep'],
          },
        },
        {
          id: 'anglais',
          title: { fr: 'Anglais', en: 'English' },
          tag: { fr: 'IELTS · TOEFL · TOEIC', en: 'IELTS · TOEFL · TOEIC' },
          image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Entraînement intensif pour décrocher le score requis aux tests IELTS Academic/General, TOEFL iBT et TOEIC. Indispensable pour le Canada, le Royaume-Uni, les États-Unis et les entreprises internationales.',
            en: 'Intensive coaching to reach required band scores on IELTS Academic/General, TOEFL iBT and TOEIC. Vital for Canada, the UK, the US and multinational employers.',
          },
          details: {
            fr: ['Entraînement aux 4 sections du test', 'Rythme : 10h / semaine', 'Stratégies d’écriture académique'],
            en: ['All 4 test components covered', 'Pace: 10h / week', 'Academic writing strategies'],
          },
        },
        {
          id: 'francais',
          title: { fr: 'Français Langue Étrangère', en: 'French (TCF / TEF)' },
          tag: { fr: 'TCF · TEF (Canada & France)', en: 'TCF · TEF (Canada & France)' },
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Préparation approfondie au TCF Canada, TEF Canada et TCF Tout Public. Optimisation de votre score pour maximiser vos points d’immigration ou vos admissions dans l’enseignement supérieur francophone.',
            en: 'In-depth preparation for TCF Canada, TEF Canada and general TCF tests. Score optimization to maximize immigration points or French university admissions.',
          },
          details: {
            fr: ['TCF Canada / Québec / France', 'Rythme : 10h / semaine', 'Simulations chronométrées'],
            en: ['TCF Canada / Quebec / France', 'Pace: 10h / week', 'Timed mock test drills'],
          },
        },
        {
          id: 'chinois',
          title: { fr: 'Chinois Mandarin', en: 'Mandarin Chinese' },
          tag: { fr: 'HSK (Hanyu Shuiping Kaoshi)', en: 'HSK (Hanyu Shuiping Kaoshi)' },
          image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Initiation et perfectionnement au mandarin : prononciation, pinyin, caractères essentiels et structures de communication. Préparation aux niveaux HSK 1, 2 et 3 pour opportunités d’affaires et bourses en Chine.',
            en: 'Mandarin fundamentals and advancement: pinyin, pronunciation, essential characters and grammar. Preparation for HSK 1, 2 and 3 for business and Chinese scholarship grants.',
          },
          details: {
            fr: ['Pinyin & caractères fondamentaux', 'Rythme : 10h / semaine', 'Préparation aux examens HSK'],
            en: ['Pinyin & foundational characters', 'Pace: 10h / week', 'Official HSK exam preparation'],
          },
        },
        {
          id: 'italien',
          title: { fr: 'Italien', en: 'Italian' },
          tag: { fr: 'CILS (Certificazione di Italiano)', en: 'CILS (Certificazione di Italiano)' },
          image: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Cours progressifs d’italien pour vos projets d’études, de travail ou de voyage en Italie. Préparation méthodique au diplôme officiel CILS reconnu par les universités et le ministère italien des affaires étrangères.',
            en: 'Progressive Italian classes for study, work or travel in Italy. Methodical preparation for the official CILS diploma recognized by Italian universities and ministries.',
          },
          details: {
            fr: ['Niveaux A1 à B2', 'Rythme : 10h / semaine', 'Préparation aux épreuves du CILS'],
            en: ['Levels A1 to B2', 'Pace: 10h / week', 'CILS exam format preparation'],
          },
        },
      ],
    },
    benefits: {
      title: {
        fr: 'Pourquoi apprendre une langue avec FutureLearn ?',
        en: 'Why Study Languages with FutureLearn?',
      },
      items: [
        {
          title: { fr: 'Volume intensif 10h / semaine', en: 'Intensive 10h / Week Volume' },
          desc: {
            fr: 'Le dosage idéal pour progresser rapidement sans espacer les séances au point d’oublier.',
            en: 'The ideal balance to achieve rapid results without losing momentum between sessions.',
          },
        },
        {
          title: { fr: 'Enseignants chevronnés', en: 'Experienced Instructors' },
          desc: {
            fr: 'Des professeurs spécialistes de la préparation aux examens de certification.',
            en: 'Educators specialized in preparing candidates for competitive certification tests.',
          },
        },
        {
          title: { fr: 'Groupes à taille humaine', en: 'Small Class Sizes' },
          desc: {
            fr: 'Maximum 8 à 12 apprenants par classe pour que chacun prenne la parole régulièrement.',
            en: 'A maximum of 8 to 12 students per group ensuring everyone speaks actively.',
          },
        },
        {
          title: { fr: 'Laboratoire de langues', en: 'Audio Lab Facilities' },
          desc: {
            fr: 'Casques audio et exercices d’écoute pour développer une oreille aiguisée.',
            en: 'Audio headsets and listening exercises to hone comprehension skills.',
          },
        },
      ],
    },
    process: {
      title: {
        fr: 'Votre parcours vers la certification',
        en: 'Your Path to Official Certification',
      },
      steps: [
        {
          stepNumber: '01',
          title: { fr: 'Test de niveau initial', en: 'Initial Diagnostic Test' },
          desc: {
            fr: 'Évaluation gratuite de votre niveau de départ pour intégrer le groupe adapté.',
            en: 'Free assessment of your baseline skills to place you in the appropriate cohort.',
          },
        },
        {
          stepNumber: '02',
          title: { fr: 'Immersion & cours intensifs', en: 'Immersion & Intensive Classes' },
          desc: {
            fr: '10 heures de cours par semaine alternant grammaire, vocabulaire et pratique orale.',
            en: '10 weekly class hours alternating grammar, vocabulary, and active conversation.',
          },
        },
        {
          stepNumber: '03',
          title: { fr: 'Simulations d’examens', en: 'Exam Simulations' },
          desc: {
            fr: 'Examens blancs en conditions réelles avec correction détaillée et conseils personnalisés.',
            en: 'Mock exams in real test settings with detailed debriefs and personalized tips.',
          },
        },
        {
          stepNumber: '04',
          title: { fr: 'Passation officielle', en: 'Official Examination' },
          desc: {
            fr: 'Inscription au centre agréé et présentation à l’examen en pleine confiance.',
            en: 'Registration at the authorized exam center and taking the test with confidence.',
          },
        },
      ],
    },
    usefulInfo: {
      title: {
        fr: 'Organisation et calendrier',
        en: 'Organization & Schedules',
      },
      intro: {
        fr: 'Comment se déroulent nos cours de langues :',
        en: 'How our language courses run:',
      },
      points: [
        {
          title: { fr: 'Rythme de 10h par semaine', en: '10 hours weekly schedule' },
          content: {
            fr: 'Réparti sur 4 à 5 séances hebdomadaires (matin ou après-midi) pour garantir une imprégnation constante.',
            en: 'Spread across 4 to 5 weekly sessions (morning or afternoon) to ensure consistent immersion.',
          },
        },
        {
          title: { fr: 'Inscriptions toute l’année', en: 'Year-round admissions' },
          content: {
            fr: 'Des sessions démarrent chaque mois pour les débutants comme pour les niveaux intermédiaires.',
            en: 'New cohorts launch monthly for beginners as well as intermediate learners.',
          },
        },
        {
          title: { fr: 'Aucun frais caché', en: 'Transparent pricing' },
          content: {
            fr: 'Nos tarifs sont communiqués en toute clarté lors de votre entretien d’orientation sans frais imprévus.',
            en: 'All tuition terms are presented transparently during your orientation without hidden costs.',
          },
        },
      ],
    },
    faq: [
      {
        id: 'faq-lang-1',
        question: {
          fr: 'Quels cours de langues enseignez-vous ?',
          en: 'What language courses do you teach?',
        },
        answer: {
          fr: 'Nous enseignons 5 langues avec préparation aux examens officiels : Allemand (Goethe, ZDaF), Anglais (IELTS, TOEFL, TOEIC), Français (TCF, TEF), Chinois (HSK) et Italien (CILS).',
          en: 'We teach 5 languages with certification preparation: German (Goethe, ZDaF), English (IELTS, TOEFL, TOEIC), French (TCF, TEF), Chinese (HSK) and Italian (CILS).',
        },
      },
      {
        id: 'faq-lang-2',
        question: {
          fr: 'Pourquoi un rythme de 10 heures par semaine ?',
          en: 'Why a 10 hours per week schedule?',
        },
        answer: {
          fr: '10 heures par semaine représente le volume pédagogique optimal reconnu pour franchir un niveau du Cadre Européen (A1 vers A2, A2 vers B1) en 8 à 10 semaines tout en conservant une excellente rétention.',
          en: '10 hours per week is the scientifically proven optimal volume to advance one CEFR level (A1 to A2, A2 to B1) within 8 to 10 weeks while maintaining high retention.',
        },
      },
      {
        id: 'faq-lang-3',
        question: {
          fr: 'Faut-il avoir des bases pour commencer ?',
          en: 'Do I need prior knowledge to start?',
        },
        answer: {
          fr: 'Non. Nous ouvrons des groupes à partir du niveau grand débutant (A1). Un test de positionnement préalable permet d’orienter les apprenants ayant déjà des bases vers le groupe adéquat.',
          en: 'No. We welcome absolute beginners (level A1). A preliminary diagnostic placement test directs those with prior knowledge into the appropriate level.',
        },
      },
      {
        id: 'faq-lang-4',
        question: {
          fr: 'Comment s’inscrire à l’examen officiel ?',
          en: 'How do I register for the official exam?',
        },
        answer: {
          fr: 'Nous vous informons du calendrier officiel des centres agréés (Goethe-Institut, British Council, Institut Français) et nous vous accompagnons dans la constitution de votre inscription à l’épreuve.',
          en: 'We inform you of official exam calendars at authorized centers (Goethe-Institut, British Council, Institut Français) and assist you with the booking procedure.',
        },
      },
    ],
    cta: {
      title: {
        fr: 'Maîtrisez une nouvelle langue et ouvrez vos horizons.',
        en: 'Master a New Language and Expand Your Horizons.',
      },
      subtitle: {
        fr: 'Passez un test de niveau gratuit et rejoignez notre prochaine session de 10h/semaine.',
        en: 'Take a free placement diagnostic and join our next 10h/week intake.',
      },
      primaryBtn: {
        fr: 'Tester mon niveau',
        en: 'Test My Level',
      },
      secondaryBtn: {
        fr: 'Parler à un conseiller langues',
        en: 'Speak to a Language Advisor',
      },
    },
  },

  // =========================================================================
  // 05 — AUTO-ÉCOLE
  // =========================================================================
  'auto-ecole': {
    id: 'auto-ecole',
    slug: '/services/auto-ecole',
    projectType: 'auto-ecole',
    seo: {
      title: {
        fr: 'Auto-École Permis A & Permis B à Yaoundé | FutureLearn',
        en: 'Driving School Category A & B Licenses in Yaoundé | FutureLearn',
      },
      description: {
        fr: 'Formation professionnelle au code de la route et à la conduite sécurisée. Permis A (deux-roues) et Permis B (véhicules légers) avec moniteurs patients et véhicules récents.',
        en: 'Professional traffic law and safe driving instruction. Motorcycle Category A and Car Category B licenses with patient certified instructors and modern vehicles.',
      },
    },
    hero: {
      badge: {
        fr: 'SÉCURITÉ ROUTIÈRE · PERMIS A & B',
        en: 'ROAD SAFETY · LICENSES A & B',
      },
      h1: {
        fr: 'Auto-école : prenez la route vers votre indépendance.',
        en: 'Driving School: Take the Road to Your Independence.',
      },
      subtitle: {
        fr: 'Une formation rigoureuse au code et à la conduite, dispensée par des moniteurs agréés dans un cadre bienveillant et sécurisé.',
        en: 'Thorough traffic code and driving instruction delivered by certified trainers in a supportive, secure environment.',
      },
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
      highlights: {
        fr: [
          'Formations Permis A (deux-roues) et Permis B (voitures)',
          'Véhicules récents équipés de double commande',
          'Moniteurs pédagogues, patients et certifiés',
          'Horaires d’entraînement souples adaptés à votre emploi du temps',
        ],
        en: [
          'Category A (motorcycles) and Category B (passenger cars)',
          'Modern vehicles equipped with dual controls',
          'Patient, supportive, certified driving instructors',
          'Flexible practice hours tailored to your availability',
        ],
      },
    },
    introduction: {
      lead: {
        fr: 'Savoir conduire en toute sécurité est une compétence indispensable pour la vie quotidienne, la mobilité professionnelle et l’autonomie.',
        en: 'Knowing how to drive safely is an indispensable skill for daily life, career mobility, and personal autonomy.',
      },
      paragraphs: {
        fr: [
          'L’auto-école FutureLearn met l’accent sur la sécurité routière, la maîtrise technique du véhicule et l’anticipation des comportements sur la route. Nous formons des conducteurs responsables, à l’aise en milieu urbain dense comme sur les axes interurbains.',
          'Que vous souhaitiez conduire une moto (Permis A) ou une voiture particulière (Permis B), notre approche pédagogique progressive vous met en confiance dès la première leçon, sans stress inutile.',
        ],
        en: [
          'FutureLearn Driving School places absolute priority on traffic safety, vehicle technical mastery, and defensive driving reflexes. We train responsible drivers confident in dense urban traffic and highway corridors alike.',
          'Whether you are preparing a motorcycle license (Category A) or a passenger vehicle license (Category B), our gradual pedagogical method instills confidence from the very first lesson.',
        ],
      },
      roleTitle: {
        fr: 'Les piliers de notre enseignement',
        en: 'Pillars of Our Instruction',
      },
      rolePoints: [
        {
          title: { fr: 'Code de la route interactif', en: 'Interactive Traffic Code' },
          desc: {
            fr: 'Apprentissage dynamique des panneaux, priorités et règles de circulation avec séries de tests illustrées.',
            en: 'Dynamic learning of road signs, right-of-way rules and safety laws with illustrated test series.',
          },
        },
        {
          title: { fr: 'Conduite progressive', en: 'Gradual Road Training' },
          desc: {
            fr: 'Démarrage sur zone calme pour maîtriser le volant, les vitesses et les pédales, puis circulation urbaine.',
            en: 'Starting on quiet grounds to master steering, gear shifting and pedals, progressing to city traffic.',
          },
        },
        {
          title: { fr: 'Sécurité & double commande', en: 'Dual Control Safety' },
          desc: {
            fr: 'Tous nos véhicules d’apprentissage sont équipés de pédales de secours pour une sécurité absolue.',
            en: 'All instruction vehicles are fitted with dual pedals ensuring zero-risk instructor intervention.',
          },
        },
        {
          title: { fr: 'Accompagnement à l’examen', en: 'Exam Day Support' },
          desc: {
            fr: 'Présentation officielle à l’examen théorique et pratique avec la présence rassurante de votre moniteur.',
            en: 'Official scheduling and support during theoretical and road exam sessions alongside your instructor.',
          },
        },
      ],
    },
    offerings: {
      title: {
        fr: 'Nos deux formules de permis',
        en: 'Our Two Driving License Programs',
      },
      subtitle: {
        fr: 'Une présentation simple, visuelle et adaptée à vos besoins.',
        en: 'A simple, visual presentation tailored to your needs.',
      },
      items: [
        {
          id: 'permis-a',
          title: { fr: 'Permis A — Deux-roues & Motocyclettes', en: 'Category A — Motorcycles & 2-Wheelers' },
          tag: { fr: 'Motos & Scooters', en: 'Bikes & Scooters' },
          image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'Apprenez à piloter votre moto en toute sérénité. Maîtrise de l’équilibre à basse et haute vitesse, trajectoires dans les virages, freinage d’urgence, port des équipements de protection et règles spécifiques de circulation urbaine.',
            en: 'Learn to ride motorcycles with total confidence. Low and high-speed balance control, cornering lines, emergency braking, protective gear and city traffic awareness.',
          },
          details: {
            fr: ['Équilibre & maniement du guidon', 'Freinage d’urgence & évitement d’obstacles', 'Circulation sécurisée en milieu urbain'],
            en: ['Low-speed balance & maneuvering', 'Emergency braking & obstacle avoidance', 'Defensive road riding in dense traffic'],
          },
        },
        {
          id: 'permis-b',
          title: { fr: 'Permis B — Véhicules Légers & Voitures', en: 'Category B — Passenger Cars' },
          tag: { fr: 'Véhicules légers', en: 'Passenger Vehicles' },
          image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80',
          description: {
            fr: 'La formation de référence pour conduire votre voiture personnelle ou de service. Maîtrise de l’embrayage, démarrages en côte, manœuvres de stationnement (créneau, épi), ronds-points et conduite sur grands axes.',
            en: 'The standard training program to drive private and company passenger cars. Smooth clutch control, hill starts, parking maneuvers (parallel, angle), roundabouts and highway driving.',
          },
          details: {
            fr: ['Véhicules récents à double commande', 'Manœuvres de stationnement complètes', 'Préparation ciblée aux critères d’évaluation'],
            en: ['Modern dual-control vehicles', 'Comprehensive parking maneuver mastery', 'Targeted training for official evaluation criteria'],
          },
        },
      ],
    },
    benefits: {
      title: {
        fr: 'Les avantages de l’auto-école FutureLearn',
        en: 'The FutureLearn Driving School Advantage',
      },
      items: [
        {
          title: { fr: 'Patience & pédagogie', en: 'Patience & Support' },
          desc: {
            fr: 'Nos moniteurs sont formés pour rassurer les élèves stressés et expliquer calmement chaque geste.',
            en: 'Instructors specifically trained to reassure nervous learners with calm, constructive feedback.',
          },
        },
        {
          title: { fr: 'Parc automobile soigné', en: 'Maintained Fleet' },
          desc: {
            fr: 'Des véhicules propres, climatisés et entretenus régulièrement pour un confort maximal.',
            en: 'Clean, air-conditioned, strictly serviced vehicles for comfortable and safe driving.',
          },
        },
        {
          title: { fr: 'Horaires à la carte', en: 'Flexible Timetable' },
          desc: {
            fr: 'Choisissez vos leçons selon vos disponibilités : matinées, fins d’après-midi ou samedis.',
            en: 'Schedule your driving slots around your day: mornings, late afternoons, or Saturdays.',
          },
        },
        {
          title: { fr: 'Taux élevé de réussite', en: 'Strong Pass Rate' },
          desc: {
            fr: 'Un pourcentage important de nos élèves obtiennent leur permis dès leur premier passage.',
            en: 'A high proportion of our learners earn their driving license on their first attempt.',
          },
        },
      ],
    },
    process: {
      title: {
        fr: 'Votre parcours vers l’obtention du permis',
        en: 'Your Roadmap to Getting Licensed',
      },
      steps: [
        {
          stepNumber: '01',
          title: { fr: 'Inscription & livret', en: 'Registration & Logbook' },
          desc: {
            fr: 'Constitution du dossier administratif et remise du livret d’apprentissage du conducteur.',
            en: 'Administrative setup and issuance of your official learner logbook.',
          },
        },
        {
          stepNumber: '02',
          title: { fr: 'Cours de code théorique', en: 'Traffic Code Instruction' },
          desc: {
            fr: 'Séances de code interactives avec questions types pour maîtriser la réglementation.',
            en: 'Interactive traffic rules sessions with test series to master road regulations.',
          },
        },
        {
          stepNumber: '03',
          title: { fr: 'Leçons de conduite au volant', en: 'Behind-the-Wheel Lessons' },
          desc: {
            fr: 'Pratique sur la route en tête-à-tête avec votre moniteur sur véhicule à double commande.',
            en: 'One-on-one road driving with your instructor on a dual-control vehicle.',
          },
        },
        {
          stepNumber: '04',
          title: { fr: 'Examen & délivrance', en: 'Exam & License Grant' },
          desc: {
            fr: 'Passage de l’examen officiel avec notre accompagnement et obtention du permis.',
            en: 'Sitting the official exam with our presence and receiving your driving license.',
          },
        },
      ],
    },
    usefulInfo: {
      title: {
        fr: 'Pièces à fournir et informations utiles',
        en: 'Required Documents & Practical Info',
      },
      intro: {
        fr: 'Pour constituer votre dossier d’inscription :',
        en: 'To prepare your registration file:',
      },
      points: [
        {
          title: { fr: 'Pièces d’identité requises', en: 'Required identification' },
          content: {
            fr: 'Photocopie de votre Carte Nationale d’Identité ou passeport en cours de validité, et photos d’identité récentes.',
            en: 'Copy of valid National ID card or passport, and recent passport-sized photos.',
          },
        },
        {
          title: { fr: 'Âge minimum', en: 'Minimum age requirement' },
          content: {
            fr: '16 ans révolus pour le Permis A (selon cylindrée) et 18 ans pour le Permis B (véhicules légers).',
            en: '16 years of age for Category A (depending on engine capacity) and 18 years for Category B.',
          },
        },
        {
          title: { fr: 'Certificat médical d’aptitude', en: 'Medical fitness certificate' },
          content: {
            fr: 'Un contrôle médical simple de la vue et de l’aptitude physique est requis pour l’inscription officielle.',
            en: 'A standard medical vision and physical fitness evaluation is required for official registration.',
          },
        },
      ],
    },
    faq: [
      {
        id: 'faq-auto-1',
        question: {
          fr: 'Quels permis préparez-vous ?',
          en: 'Which driving licenses do you prepare?',
        },
        answer: {
          fr: 'Nous préparons au Permis A (deux-roues et motocyclettes) et au Permis B (véhicules automobiles légers jusqu’à 3,5 tonnes et 9 places).',
          en: 'We prepare candidates for Category A (motorcycles and 2-wheelers) and Category B (passenger cars up to 3.5 tons and 9 seats).',
        },
      },
      {
        id: 'faq-auto-2',
        question: {
          fr: 'Combien de temps dure la formation ?',
          en: 'How long does the training take?',
        },
        answer: {
          fr: 'La durée dépend de votre disponibilité et de votre rythme d’apprentissage. En moyenne, une formation complète s’étend sur 4 à 8 semaines selon le nombre de séances hebdomadaires.',
          en: 'The duration depends on your availability and learning pace. On average, a complete course spans 4 to 8 weeks depending on weekly session frequency.',
        },
      },
      {
        id: 'faq-auto-3',
        question: {
          fr: 'Les leçons sont-elles individuelles ?',
          en: 'Are road lessons individual?',
        },
        answer: {
          fr: 'Oui, les séances de conduite au volant sont individuelles. Vous êtes seul(e) avec votre moniteur pour une attention maximale et une progression personnalisée.',
          en: 'Yes, behind-the-wheel driving sessions are one-on-one. You are alone with your instructor for maximum pedagogical attention.',
        },
      },
      {
        id: 'faq-auto-4',
        question: {
          fr: 'Que se passe-t-il si je n’ai jamais touché un volant ?',
          en: 'What if I have never touched a steering wheel before?',
        },
        answer: {
          fr: 'C’est le cas de nombreux élèves ! Nos moniteurs commencent par vous familiariser avec le poste de conduite dans un environnement calme et sécurisé, à votre rythme.',
          en: 'That is the case for most learners! Our instructors begin by familiarizing you with the cockpit in a calm and secure setting, entirely at your own pace.',
        },
      },
    ],
    cta: {
      title: {
        fr: 'Obtenez votre permis de conduire en toute sérénité.',
        en: 'Earn Your Driving License with Complete Confidence.',
      },
      subtitle: {
        fr: 'Réservez votre première séance ou demandez des informations auprès de nos moniteurs.',
        en: 'Book your first session or request information from our certified instructors.',
      },
      primaryBtn: {
        fr: 'Réserver ma session de conduite',
        en: 'Book My Driving Session',
      },
      secondaryBtn: {
        fr: 'Discuter avec un moniteur',
        en: 'Chat with an Instructor',
      },
    },
  },
};
