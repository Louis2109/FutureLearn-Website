export type Language = 'fr' | 'en';

export type ServiceType = 
  | 'visa' 
  | 'flight' 
  | 'training' 
  | 'language' 
  | 'driving';

export type ProjectType =
  | 'etudes'
  | 'visa'
  | 'voyage'
  | 'billet'
  | 'formation'
  | 'langues'
  | 'auto-ecole'
  | 'autre';

export interface ServiceItem {
  id: ServiceType;
  title: Record<Language, string>;
  slug: string;
  subtitle: Record<Language, string>;
  description: Record<Language, string>;
  details: Record<Language, string[]>;
  image: string;
  badge?: Record<Language, string>;
}

export interface Destination {
  id: string;
  name: Record<Language, string>;
  image: string;
  popular?: boolean;
}

export interface FormationProgram {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  duration?: string;
  level?: string;
}

export interface LanguageCourse {
  id: string;
  language: Record<Language, string>;
  flag: string;
  certifications: string[];
  hoursPerWeek: string;
  description: Record<Language, string>;
}

export interface DrivingProgram {
  id: 'permis-a' | 'permis-b';
  title: Record<Language, string>;
  vehicle: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: Record<Language, string>;
  name: string;
  role: Record<Language, string>;
  service: Record<Language, string>;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: Record<Language, string>;
  answer: Record<Language, string>;
  category?: string;
}

export interface LeadFormData {
  fullName: string;
  phoneOrWhatsApp: string;
  email?: string;
  projectType: ProjectType;
  destination?: string;
  message?: string;
}
