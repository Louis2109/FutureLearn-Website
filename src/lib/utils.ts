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
}): string {
  const cleanPhone = params.phone.replace(/[^0-9]/g, '');
  const destinationText = params.destination ? ` | Destination : ${params.destination}` : '';
  const userMsgText = params.message ? ` | Précisions : ${params.message}` : '';
  const text = `Bonjour FutureLearn, je suis ${params.fullName}. Je souhaite être accompagné(e) pour mon projet de ${params.projectType}${destinationText}.${userMsgText}`;
  
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
