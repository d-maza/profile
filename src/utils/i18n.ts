import i18nEs from '../data/i18n/es.json';
import i18nEn from '../data/i18n/en.json';

export const translations = {
  es: i18nEs,
  en: i18nEn,
};

export type Language = 'es' | 'en';

export function detectBrowserLanguage(): Language {
  if (typeof navigator !== 'undefined') {
    const browserLang = navigator.language.toLowerCase();
    // Si el navegador está en español, retorna 'es', si no 'en'
    return browserLang.startsWith('es') ? 'es' : 'en';
  }
  return 'en';
}

export function getCurrentLanguage(): Language {
  if (typeof window !== 'undefined') {
    // Primero intenta obtener el idioma guardado en localStorage
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang) {
      return savedLang;
    }
    // Si no hay idioma guardado, usa el del navegador
    return detectBrowserLanguage();
  }
  return 'en';
}

export function getTranslation(lang: Language) {
  return translations[lang] || translations.en;
}

export function setupLanguageListener(callback: (lang: Language) => void) {
  if (typeof window !== 'undefined') {
    window.addEventListener('languageChanged', (event: any) => {
      callback(event.detail.lang);
    });
  }
}
