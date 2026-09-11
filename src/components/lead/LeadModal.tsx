import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { Language, LeadFormData, ProjectType } from '../../types';
import { Button } from '../ui/Button';
import { generateWhatsAppLink } from '../../lib/utils';
import { companyInfo } from '../../data/company';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialProject?: ProjectType;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialProject = 'etudes',
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phoneOrWhatsApp: '',
    email: '',
    projectType: initialProject,
    destination: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({ ...prev, projectType: initialProject }));
    }
  }, [initialProject]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = lang === 'fr' ? 'Le nom complet est obligatoire.' : 'Full name is required.';
    }

    if (!formData.phoneOrWhatsApp.trim()) {
      newErrors.phoneOrWhatsApp = lang === 'fr' ? 'Le numéro de téléphone/WhatsApp est obligatoire.' : 'Phone / WhatsApp is required.';
    } else if (formData.phoneOrWhatsApp.trim().length < 8) {
      newErrors.phoneOrWhatsApp = lang === 'fr' ? 'Veuillez saisir un numéro valide.' : 'Please enter a valid phone number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang === 'fr' ? 'Adresse email invalide.' : 'Invalid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = lang === 'fr' ? 'Veuillez choisir un type de projet.' : 'Please select a project type.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate/prepare async lead processing
      await new Promise((resolve) => setTimeout(resolve, 800));

      const waLink = generateWhatsAppLink({
        phone: companyInfo.whatsappNumber,
        fullName: formData.fullName,
        projectType: formData.projectType,
        destination: formData.destination,
        message: formData.message,
      });

      setWhatsappUrl(waLink);
      setIsSuccess(true);
    } catch {
      setErrors({ form: lang === 'fr' ? 'Une erreur est survenue. Veuillez réessayer.' : 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phoneOrWhatsApp: '',
      email: '',
      projectType: 'etudes',
      destination: '',
      message: '',
    });
    setErrors({});
    onClose();
  };

  const projectLabels: Record<ProjectType, { fr: string; en: string }> = {
    etudes: { fr: 'Études à l’étranger', en: 'Study Abroad' },
    visa: { fr: 'Assistance Visa', en: 'Visa Assistance' },
    voyage: { fr: 'Voyage', en: 'Travel' },
    billet: { fr: "Billet d'avion", en: 'Flight Ticket' },
    formation: { fr: 'Formation professionnelle', en: 'Professional Training' },
    langues: { fr: 'Cours de langues', en: 'Language Course' },
    'auto-ecole': { fr: 'Auto-école', en: 'Driving School' },
    autre: { fr: 'Autre projet', en: 'Other Project' },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 bg-neutral-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F5B800] flex items-center justify-center text-neutral-950 font-bold">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 id="modal-title" className="text-lg font-bold text-neutral-900 leading-tight">
                {lang === 'fr' ? 'Parler à un conseiller' : 'Speak to an Advisor'}
              </h3>
              <p className="text-xs text-neutral-500">
                {lang === 'fr' ? 'Échange personnalisé & confidentiel' : 'Personalized & confidential guidance'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-6 flex-1">
          {isSuccess ? (
            <div className="py-6 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-[#F5B800] border-2 border-[#F5B800] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-neutral-900">
                  {lang === 'fr' ? 'Votre demande a bien été reçue !' : 'Your request has been received!'}
                </h4>
                <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  {lang === 'fr'
                    ? 'Un conseiller FutureLearn va étudier votre dossier. Pour une réponse immédiate, vous pouvez poursuivre directement sur WhatsApp.'
                    : 'A FutureLearn advisor will review your case. For immediate assistance, you can continue directly on WhatsApp.'}
                </p>
              </div>

              {/* WhatsApp direct button */}
              {whatsappUrl && (
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'fr' ? 'Ouvrir la conversation WhatsApp' : 'Open WhatsApp Conversation'}</span>
                  </a>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-neutral-500 hover:text-neutral-800 underline font-medium cursor-pointer"
                >
                  {lang === 'fr' ? 'Fermer cette fenêtre' : 'Close this window'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  {lang === 'fr' ? 'Nom complet *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === 'fr' ? 'ex. Jean Dupont' : 'e.g. John Doe'}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400"
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  {lang === 'fr' ? 'Téléphone / WhatsApp *' : 'Phone / WhatsApp *'}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={lang === 'fr' ? 'ex. +237 6XX XX XX XX' : 'e.g. +237 6XX XX XX XX'}
                  value={formData.phoneOrWhatsApp}
                  onChange={(e) => setFormData({ ...formData, phoneOrWhatsApp: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400"
                />
                {errors.phoneOrWhatsApp && (
                  <p className="mt-1 text-xs text-red-600 font-medium">{errors.phoneOrWhatsApp}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  {lang === 'fr' ? 'Email (optionnel)' : 'Email (optional)'}
                </label>
                <input
                  type="email"
                  placeholder="nom@exemple.cm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  {lang === 'fr' ? 'Type de projet *' : 'Project Type *'}
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value as ProjectType })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all"
                >
                  {Object.entries(projectLabels).map(([key, val]) => (
                    <option key={key} value={key}>
                      {val[lang]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Destination */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  {lang === 'fr' ? 'Destination souhaitée (optionnel)' : 'Desired Destination (optional)'}
                </label>
                <input
                  type="text"
                  placeholder={lang === 'fr' ? 'ex. Canada, France, Allemagne, Dubaï...' : 'e.g. Canada, France, Germany, Dubai...'}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5">
                  {lang === 'fr' ? 'Précisions sur votre projet (optionnel)' : 'Project details (optional)'}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    lang === 'fr'
                      ? 'Parlez-nous brièvement de votre calendrier ou de vos questions...'
                      : 'Briefly describe your timeline or questions...'
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400 resize-none"
                />
              </div>

              {errors.form && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
                  {errors.form}
                </div>
              )}

              {/* Submit */}
              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  isLoading={isSubmitting}
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  {lang === 'fr' ? 'Envoyer ma demande' : 'Submit my request'}
                </Button>
                <p className="mt-2 text-center text-[11px] text-neutral-500">
                  {lang === 'fr'
                    ? 'Vos informations restent strictement confidentielles.'
                    : 'Your information remains strictly confidential.'}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
