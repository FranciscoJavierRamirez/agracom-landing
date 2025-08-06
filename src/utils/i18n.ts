// Agracom Internacional S.A. - Internationalization Utilities
// Sistema completo de i18n con archivos JSON y cache

import type { Locale, TranslationKey, Translations } from '../types/global';

// Cache para las traducciones cargadas
const translationCache = new Map<string, TranslationKey>();

/**
 * Carga un archivo de traducción específico
 */
export async function loadTranslation(locale: Locale, namespace: string): Promise<TranslationKey> {
  const cacheKey = `${locale}-${namespace}`;
  
  if (translationCache.has(cacheKey)) {
    return translationCache.get(cacheKey)!;
  }
  
  try {
    const module = await import(`../data/i18n/${locale}/${namespace}.json`);
    const translation = module.default;
    translationCache.set(cacheKey, translation);
    return translation;
  } catch (error) {
    console.warn(`Translation file not found: ${locale}/${namespace}.json`);
    return {};
  }
}

/**
 * Función principal de traducción con namespace
 */
export async function t(key: string, locale: Locale, namespace: string = 'common'): Promise<string> {
  const translations = await loadTranslation(locale, namespace);
  
  // Navegación anidada por dot notation (ej: "navigation.home")
  const keys = key.split('.');
  let result: any = translations;
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      console.warn(`Translation key not found: ${key} in ${locale}/${namespace}`);
      return key; // Retorna la key como fallback
    }
  }
  
  return typeof result === 'string' ? result : key;
}

/**
 * Hook para uso en componentes Astro
 */
export async function createTranslator(locale: Locale) {
  return {
    t: async (key: string, namespace: string = 'common') => 
      await t(key, locale, namespace),
    
    // Helpers específicos para namespaces comunes
    common: async (key: string) => await t(key, locale, 'common'),
    hero: async (key: string) => await t(key, locale, 'hero'),
    products: async (key: string) => await t(key, locale, 'products'),
    forms: async (key: string) => await t(key, locale, 'forms'),
    regions: async (key: string) => await t(key, locale, 'regions'),
    certifications: async (key: string) => await t(key, locale, 'certifications'),
    testimonials: async (key: string) => await t(key, locale, 'testimonials'),
    seo: async (key: string) => await t(key, locale, 'seo'),
  };
}

/**
 * Detecta el idioma del navegador
 */
export function detectBrowserLanguage(): Locale {
  if (typeof window !== 'undefined') {
    const browserLang = window.navigator.language.split('-')[0];
    return browserLang === 'en' ? 'en' : 'es'; // Default a español
  }
  return 'es';
}

/**
 * Utilitario para pluralización (español/inglés)
 */
export function pluralize(count: number, singular: string, plural: string, locale: Locale): string {
  if (locale === 'es') {
    return count === 1 ? singular : plural;
  } else {
    return count === 1 ? singular : plural;
  }
}

/**
 * Formatea números según la región
 */
export function formatNumber(number: number, locale: Locale): string {
  const localeCode = locale === 'es' ? 'es-CL' : 'en-US';
  return new Intl.NumberFormat(localeCode).format(number);
}

/**
 * Formatea fechas según la región
 */
export function formatDate(date: Date, locale: Locale, options?: Intl.DateTimeFormatOptions): string {
  const localeCode = locale === 'es' ? 'es-CL' : 'en-US';
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Intl.DateTimeFormat(localeCode, { ...defaultOptions, ...options }).format(date);
}

/**
 * Obtiene la URL correcta para el idioma actual
 */
export function getLocalizedURL(path: string, locale: Locale): string {
  if (locale === 'es') {
    return path.startsWith('/') ? path : `/${path}`;
  }
  return path.startsWith('/') ? `/en${path}` : `/en/${path}`;
}

/**
 * Extrae el locale de una URL
 */
export function getLocaleFromURL(url: string): Locale {
  const path = new URL(url).pathname;
  if (path.startsWith('/en')) {
    return 'en';
  }
  return 'es';
}

/**
 * Valida si un locale es soportado
 */
export function isValidLocale(locale: string): locale is Locale {
  return locale === 'es' || locale === 'en';
}

/**
 * Obtiene el locale alternativo
 */
export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'es' ? 'en' : 'es';
}

/**
 * Genera URLs hreflang para SEO
 */
export function generateHreflangURLs(currentPath: string, baseURL: string): Record<string, string> {
  return {
    'es-CL': `${baseURL}${currentPath}`,
    'en-US': `${baseURL}/en${currentPath}`,
    'x-default': `${baseURL}${currentPath}`,
  };
}