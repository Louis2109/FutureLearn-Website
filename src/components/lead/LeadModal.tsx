import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  Phone,
  MessageSquare,
  AlertCircle,
  Loader2,
  Calendar,
} from 'lucide-react';
import { Language, LeadFormData, ProjectType } from '../../types';
import { Button } from '../ui/Button';
import { generateWhatsAppLink } from '../../lib/utils';
import { companyInfo } from '../../data/company';
import { translations, destinationList } from '../../data/translations';

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
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [leadTimestamp, setLeadTimestamp] = useState('');

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync initial project when prop changes
  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({ ...prev, projectType: initialProject }));
    }
  }, [initialProject]);

  // Focus management & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    // Focus first input
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const t = translations.leadModal;

  // Single field validation helper
  const validateField = (field: keyof LeadFormData, value: string | undefined): string => {
    switch (field) {
      case 'fullName':
        if (!value || value.trim().length < 2) {
          return t.errors.fullNameRequired[lang];
        }
        return '';
      case 'phoneOrWhatsApp': {
        if (!value || value.trim().length === 0) {
          return t.errors.phoneRequired[lang];
        }
        const digitsOnly = value.replace(/[^0-9]/g, '');
        if (digitsOnly.length < 8) {
          return t.errors.phoneInvalid[lang];
        }
        return '';
      }
      case 'email':
        if (value && value.trim().length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return t.errors.emailInvalid[lang];
        }
        return '';
      case 'projectType':
        if (!value) {
          return t.errors.projectRequired[lang];
        }
        return '';
      default:
        return '';
    }
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const fieldsToValidate: (keyof LeadFormData)[] = ['fullName', 'phoneOrWhatsApp', 'email', 'projectType'];

    for (const field of fieldsToValidate) {
      const errorMsg = validateField(field, formData[field]);
      if (errorMsg) {
        newErrors[field] = errorMsg;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof LeadFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field: keyof LeadFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
    if (serverError) setServerError(null);
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent accidental multiple submissions
    if (isSubmitting) return;

    // Mark all as touched
    setTouched({
      fullName: true,
      phoneOrWhatsApp: true,
      email: true,
      projectType: true,
      destination: true,
      message: true,
    });

    if (!validateForm()) return;

    setIsSubmitting(true);
    setServerError(null);

    const projectDisplayLabel =
      translations.projects[formData.projectType]?.[lang] || formData.projectType;

    const destinationDisplayLabel = formData.destination
      ? destinationList.find((d) => d.id === formData.destination)?.name[lang] || formData.destination
      : undefined;

    try {
      // Server-side lead processing endpoint
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phoneOrWhatsApp: formData.phoneOrWhatsApp.trim(),
          email: formData.email?.trim() || undefined,
          projectType: projectDisplayLabel,
          destination: destinationDisplayLabel,
          message: formData.message?.trim() || undefined,
          lang,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Server processing error');
      }

      // Generate structured WhatsApp continuation message matching Prompt 04:
      // "Bonjour FutureLearn, je suis [Nom]. Je souhaite être accompagné pour mon projet de [Projet]. Destination souhaitée : [Destination]."
      const waLink = generateWhatsAppLink({
        phone: companyInfo.whatsappNumber,
        fullName: formData.fullName.trim(),
        projectType: projectDisplayLabel,
        destination: destinationDisplayLabel,
        lang,
      });

      setWhatsappUrl(waLink);
      setLeadTimestamp(
        new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
      setIsSuccess(true);
    } catch (err) {
      console.error('Lead submission error:', err);
      // Even if server is temporarily unreachable, prepare the direct WhatsApp continuation fallback
      const waFallback = generateWhatsAppLink({
        phone: companyInfo.whatsappNumber,
        fullName: formData.fullName.trim(),
        projectType: projectDisplayLabel,
        destination: destinationDisplayLabel,
        lang,
      });
      setWhatsappUrl(waFallback);
      setServerError(t.errors.serverError[lang]);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setServerError(null);
    setFormData({
      fullName: '',
      phoneOrWhatsApp: '',
      email: '',
      projectType: 'etudes',
      destination: '',
      message: '',
    });
    setErrors({});
    setTouched({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-3xl border border-neutral-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 bg-neutral-50/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#F5B800] flex items-center justify-center text-neutral-950 font-bold shadow-xs">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 id="lead-modal-title" className="text-lg font-bold text-neutral-900 leading-tight">
                {t.title[lang]}
              </h3>
              <p className="text-xs text-neutral-500 line-clamp-1">
                {t.subtitle[lang]}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t.closeBtn[lang]}
            className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5B800]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto px-6 py-6 flex-1">
          {isSuccess ? (
            /* SUCCESS STATE */
            <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-[#F5B800] border-2 border-[#F5B800] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Enregistré à {leadTimestamp}</span>
                </span>
                <h4 className="text-xl font-extrabold text-neutral-900">
                  {t.successTitle[lang]}
                </h4>
                <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  {t.successDesc[lang]}
                </p>
              </div>

              {/* WhatsApp continuation button with structured pre-filled message */}
              {whatsappUrl && (
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>{t.whatsappContinuationBtn[lang]}</span>
                  </a>
                </div>
              )}

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="text-xs text-neutral-500 hover:text-neutral-900 underline font-medium cursor-pointer"
                >
                  {t.closeBtn[lang]}
                </button>
              </div>
            </div>
          ) : (
            /* FORM STATE */
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Server / Network Error Banner */}
              {serverError && (
                <div
                  role="alert"
                  className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-neutral-800 flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-neutral-900">{serverError}</p>
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline mt-2"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>{t.whatsappContinuationBtn[lang]}</span>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Nom complet * */}
              <div>
                <label
                  htmlFor="lead-fullname"
                  className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                >
                  {t.fullNameLabel[lang]}
                </label>
                <input
                  ref={firstInputRef}
                  id="lead-fullname"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder={t.fullNamePlaceholder[lang]}
                  value={formData.fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  onBlur={() => handleBlur('fullName')}
                  aria-invalid={Boolean(touched.fullName && errors.fullName)}
                  aria-describedby={touched.fullName && errors.fullName ? 'fullname-error' : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400 disabled:opacity-60 disabled:cursor-not-allowed ${
                    touched.fullName && errors.fullName
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-neutral-300'
                  }`}
                />
                {touched.fullName && errors.fullName && (
                  <p id="fullname-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Téléphone / WhatsApp * */}
              <div>
                <label
                  htmlFor="lead-phone"
                  className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                >
                  {t.phoneLabel[lang]}
                </label>
                <input
                  id="lead-phone"
                  type="tel"
                  required
                  disabled={isSubmitting}
                  placeholder={t.phonePlaceholder[lang]}
                  value={formData.phoneOrWhatsApp}
                  onChange={(e) => handleChange('phoneOrWhatsApp', e.target.value)}
                  onBlur={() => handleBlur('phoneOrWhatsApp')}
                  aria-invalid={Boolean(touched.phoneOrWhatsApp && errors.phoneOrWhatsApp)}
                  aria-describedby={
                    touched.phoneOrWhatsApp && errors.phoneOrWhatsApp ? 'phone-error' : undefined
                  }
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400 disabled:opacity-60 disabled:cursor-not-allowed ${
                    touched.phoneOrWhatsApp && errors.phoneOrWhatsApp
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-neutral-300'
                  }`}
                />
                {touched.phoneOrWhatsApp && errors.phoneOrWhatsApp && (
                  <p id="phone-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.phoneOrWhatsApp}
                  </p>
                )}
              </div>

              {/* Email (optionnel) */}
              <div>
                <label
                  htmlFor="lead-email"
                  className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                >
                  {t.emailLabel[lang]}
                </label>
                <input
                  id="lead-email"
                  type="email"
                  disabled={isSubmitting}
                  placeholder={t.emailPlaceholder[lang]}
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  aria-invalid={Boolean(touched.email && errors.email)}
                  aria-describedby={touched.email && errors.email ? 'email-error' : undefined}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400 disabled:opacity-60 disabled:cursor-not-allowed ${
                    touched.email && errors.email
                      ? 'border-red-500 bg-red-50/20'
                      : 'border-neutral-300'
                  }`}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Grid: Type de projet * & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {/* Type de projet * */}
                <div>
                  <label
                    htmlFor="lead-project"
                    className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                  >
                    {t.projectTypeLabel[lang]}
                  </label>
                  <select
                    id="lead-project"
                    required
                    disabled={isSubmitting}
                    value={formData.projectType}
                    onChange={(e) => handleChange('projectType', e.target.value as ProjectType)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {Object.entries(translations.projects).map(([key, val]) => (
                      <option key={key} value={key}>
                        {val[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Destination */}
                <div>
                  <label
                    htmlFor="lead-destination"
                    className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                  >
                    {t.destinationLabel[lang]}
                  </label>
                  <select
                    id="lead-destination"
                    disabled={isSubmitting}
                    value={formData.destination || ''}
                    onChange={(e) => handleChange('destination', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 bg-white focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {t.destinationPlaceholder[lang]}
                    </option>
                    {destinationList.map((dest) => (
                      <option key={dest.id} value={dest.id}>
                        {dest.name[lang]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message (optionnel) */}
              <div>
                <label
                  htmlFor="lead-message"
                  className="block text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1.5"
                >
                  {t.messageLabel[lang]}
                </label>
                <textarea
                  id="lead-message"
                  rows={3}
                  disabled={isSubmitting}
                  placeholder={t.messagePlaceholder[lang]}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#F5B800] focus:border-transparent transition-all placeholder:text-neutral-400 resize-none disabled:opacity-60 disabled:cursor-not-allowed"
                />
              </div>

              {/* Confidentiality notice */}
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                {t.confidentiality[lang]}
              </p>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  isLoading={isSubmitting}
                  rightIcon={
                    isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )
                  }
                  className="font-bold shadow-sm hover:shadow"
                >
                  {isSubmitting ? t.submittingBtn[lang] : t.submitBtn[lang]}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
