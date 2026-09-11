/**
 * Utility functions for styling and common helpers
 */

export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function generateWhatsAppLink(params: {
  phone: string;
  fullName: string;
  projectType: string;
  destination?: string;
  message?: string;
  lang?: 'fr' | 'en';
}): string {
  const cleanPhone = params.phone.replace(/[^0-9]/g, '');
  const lang = params.lang || 'fr';

  let text: string;
  if (lang === 'fr') {
    const dest = params.destination ? ` Destination souhaitée : ${params.destination}.` : '';
    text = `Bonjour FutureLearn, je suis ${params.fullName}. Je souhaite être accompagné pour mon projet de ${params.projectType}.${dest}`;
  } else {
    const dest = params.destination ? ` Desired destination: ${params.destination}.` : '';
    text = `Hello FutureLearn, I am ${params.fullName}. I would like support with my ${params.projectType} project.${dest}`;
  }
  
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text.trim())}`;
}
