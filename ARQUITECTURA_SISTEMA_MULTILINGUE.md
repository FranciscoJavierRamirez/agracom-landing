# Arquitectura del Sistema Multilingüe - Agracom Internacional

Este documento detalla la arquitectura e implementación del sistema multilingüe en el sitio web de Agracom Internacional, utilizando Astro 5 y Tailwind CSS 3.

## Índice

- [Arquitectura del Sistema Multilingüe - Agracom Internacional](#arquitectura-del-sistema-multilingüe---agracom-internacional)
  - [Índice](#índice)
  - [Visión General](#visión-general)
  - [Estructura de Archivos](#estructura-de-archivos)
  - [Flujo de Datos](#flujo-de-datos)
  - [Componentes Principales](#componentes-principales)
    - [Utilidades de Internacionalización (`i18n.ts`)](#utilidades-de-internacionalización-i18nts)
    - [Selector de Idioma (`LanguageSwitcher.astro`)](#selector-de-idioma-languageswitcherastro)
    - [Uso del Componente](#uso-del-componente)
  - [Cambio de Idioma en Cliente](#cambio-de-idioma-en-cliente)
  - [Integración con Tailwind CSS](#integración-con-tailwind-css)
  - [Buenas Prácticas](#buenas-prácticas)

## Visión General

El sistema multilingüe de Agracom Internacional utiliza un enfoque híbrido:

- **Archivos JSON de traducción**: Almacenan textos en diferentes idiomas
- **Detección de idioma**: Basada en parámetros de URL (`?lang=es` o `?lang=en`)
- **Enlaces directos**: Botones de idioma que redirigen a la página con el parámetro de idioma correspondiente
- **Persistencia**: Almacenamiento de preferencia de idioma en `localStorage`
- **Cambio dinámico**: Actualización de contenido sin recargar la página

Este enfoque permite una experiencia de usuario fluida mientras mantiene la optimización SEO.

## Estructura de Archivos

```
src/
├── data/
│   └── i18n/
│       ├── es/
│       │   ├── common.json      # Textos comunes en español
│       │   ├── forms.json       # Textos de formularios en español
│       │   └── ...
│       └── en/
│           ├── common.json      # Textos comunes en inglés
│           ├── forms.json       # Textos de formularios en inglés
│           └── ...
├── utils/
│   └── i18n.ts                  # Utilidades de internacionalización
├── types/
│   └── global.ts                # Tipos para i18n (Locale, TranslationKey, etc.)
└── components/
    └── layout/
        └── Header.astro         # Componente con selector de idioma
```

## Flujo de Datos

1. **Inicialización**:
   - El sistema carga con el idioma predeterminado (español)
   - Se verifica el parámetro `?lang=` en la URL
   - Se verifica el valor almacenado en `localStorage`

2. **Carga de Traducciones**:
   - Los archivos JSON se importan según el idioma seleccionado
   - Se utiliza un sistema de caché para optimizar el rendimiento

3. **Renderizado**:
   - Los componentes reciben el idioma actual como prop
   - Los textos se muestran según el idioma seleccionado

4. **Cambio de Idioma**:
   - El usuario selecciona un nuevo idioma
   - JavaScript actualiza dinámicamente los textos
   - Se actualiza la URL y el `localStorage`

## Componentes Principales

### Utilidades de Internacionalización (`i18n.ts`)

```typescript
// Carga un archivo de traducción específico
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

// Función principal de traducción
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

// Hook para uso en componentes Astro
export async function createTranslator(locale: Locale) {
  return {
    t: async (key: string, namespace: string = 'common') => 
      await t(key, locale, namespace),
    
    // Helpers específicos para namespaces comunes
    common: async (key: string) => await t(key, locale, 'common'),
    hero: async (key: string) => await t(key, locale, 'hero'),
    // ...
  };
}
```

### Selector de Idioma (`LanguageSwitcher.astro`)

```astro
---
// LanguageSwitcher.astro
// Componente reutilizable para el selector de idioma

interface Props {
  variant?: 'header' | 'footer';
  currentLang: 'es' | 'en';
}

const { variant = 'header', currentLang = 'es' } = Astro.props;

// Determinar las clases según la variante
const containerClasses = variant === 'header'
  ? 'flex items-center bg-neutral-100 rounded-lg p-1 border border-neutral-200'
  : 'flex items-center space-x-2 bg-neutral-800 rounded-lg p-1';

const activeClasses = variant === 'header'
  ? 'px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 bg-primary text-white shadow-sm scale-105'
  : 'px-3 py-1 rounded-md text-sm font-semibold transition-all bg-primary text-white';

const inactiveClasses = variant === 'header'
  ? 'px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200 text-neutral-500 hover:text-neutral-700 hover:bg-white'
  : 'px-3 py-1 rounded-md text-sm font-semibold transition-all text-neutral-400 hover:text-white';
---

<div class={containerClasses}>
  <a 
    href="/?lang=es"
    class={currentLang === 'es' ? activeClasses : inactiveClasses}
    aria-label="Página en español"
  >
    ES
  </a>
  <div class={dividerClasses}>{dividerContent}</div>
  <a 
    href="/?lang=en"
    class={currentLang === 'en' ? activeClasses : inactiveClasses}
    aria-label="Switch to English"
  >
    EN
  </a>
</div>
```

### Uso del Componente

```astro
<!-- En Header.astro -->
<LanguageSwitcher variant="header" currentLang={currentLang} />

<!-- En Footer.astro -->
<LanguageSwitcher variant="footer" currentLang={lang} />
```

## Cambio de Idioma en Cliente

El cambio de idioma se realiza mediante enlaces directos con parámetros URL:

```javascript
// Sistema de cambio de idioma dinámico para Agracom Internacional
(function() {
  'use strict';
  
  let currentLang = 'es';
  
  // Translations object
  const translations = {
    es: {
      navigation: {
        products: 'Productos',
        certifications: 'Certificaciones',
        contact: 'Contacto',
        regions: 'Regiones'
      },
      // ...
    },
    en: {
      navigation: {
        products: 'Products',
        certifications: 'Certifications',
        contact: 'Contact',
        regions: 'Regions'
      },
      // ...
    }
  };
  
  // Function to change language
  function changeLanguage(newLang) {
    if (newLang !== 'es' && newLang !== 'en') return;
    
    currentLang = newLang;
    
    // Update document language
    document.documentElement.lang = newLang;
    
    // Update navigation
    const navItems = document.querySelectorAll('[data-nav-text]');
    navItems.forEach(item => {
      const key = item.getAttribute('data-nav-text');
      if (translations[newLang].navigation[key]) {
        item.textContent = translations[newLang].navigation[key];
      }
    });
    
    // Update hero section
    const heroTitle = document.querySelector('[data-hero-title]');
    const heroSubtitle = document.querySelector('[data-hero-subtitle]');
    const heroDescription = document.querySelector('[data-hero-description]');
    
    if (heroTitle) heroTitle.textContent = translations[newLang].hero.title;
    if (heroSubtitle) heroSubtitle.textContent = translations[newLang].hero.subtitle;
    if (heroDescription) heroDescription.textContent = translations[newLang].hero.description;
    
    // Update products section
    const productsTitle = document.querySelector('[data-products-title]');
    const productsDescription = document.querySelector('[data-products-description]');
    
    if (productsTitle) productsTitle.textContent = translations[newLang].products.title;
    if (productsDescription) productsDescription.textContent = translations[newLang].products.description;
    
    // Update language switcher state
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang-btn');
      if (btnLang === newLang) {
        btn.classList.add('bg-primary', 'text-white', 'shadow-sm', 'scale-105');
        btn.classList.remove('text-neutral-500', 'hover:text-neutral-700', 'hover:bg-white');
      } else {
        btn.classList.remove('bg-primary', 'text-white', 'shadow-sm', 'scale-105');
        btn.classList.add('text-neutral-500', 'hover:text-neutral-700', 'hover:bg-white');
      }
    });
    
    // Update section IDs for navigation
    const productsSection = document.getElementById('productos') || document.getElementById('products');
    if (productsSection) {
      productsSection.id = newLang === 'es' ? 'productos' : 'products';
    }
    
    console.log('Language changed to:', newLang);
  }
  
  // Initialize language from URL parameter or localStorage
  function initializeLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const storedLang = localStorage.getItem('preferred-language');
    
    const initialLang = urlLang || storedLang || 'es';
    
    if (initialLang === 'en') {
      changeLanguage('en');
    }
    
    // Store preference
    localStorage.setItem('preferred-language', initialLang);
  }
  
  // Set up event listeners
  document.addEventListener('DOMContentLoaded', function() {
    initializeLanguage();
    
    // Language switcher buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const newLang = this.getAttribute('data-lang-btn');
        changeLanguage(newLang);
        localStorage.setItem('preferred-language', newLang);
        
        // Update URL without reload
        const url = new URL(window.location);
        url.searchParams.set('lang', newLang);
        window.history.replaceState({}, '', url);
      });
    });
  });
})();
```

## Integración con Tailwind CSS

El sistema multilingüe está totalmente integrado con Tailwind CSS 3:

1. **Clases Condicionales**: Se aplican clases diferentes según el idioma activo
2. **Responsive Design**: Todos los elementos son responsivos en ambos idiomas
3. **Estilos Consistentes**: Se mantiene la coherencia visual independientemente del idioma

Ejemplo de integración:

```astro
<button
  data-lang-btn={lang}
  class={`
    px-3 py-1.5 rounded-md text-xs font-bold transition-all duration-200
    ${currentLang === lang 
      ? 'bg-primary text-white shadow-sm scale-105' 
      : 'text-neutral-500 hover:text-neutral-700 hover:bg-white'}
  `}
  aria-label={lang === 'es' ? 'Página en español' : 'Switch to English'}
>
  {lang.toUpperCase()}
</button>
```

## Buenas Prácticas

1. **Atributos `data-*`**: Uso de atributos personalizados para identificar elementos traducibles
2. **Accesibilidad**: Inclusión de atributos `aria-label` en todos los elementos interactivos
3. **SEO**: Actualización del atributo `lang` del documento y uso de URLs descriptivas con parámetros de idioma
4. **Rendimiento**: Carga asíncrona de traducciones y uso de caché para optimizar el rendimiento
5. **Mantenibilidad**: Organización clara de archivos de traducción por idioma y categoría
6. **Enlaces directos**: Uso de enlaces con parámetros URL para cambiar el idioma de forma sencilla y compatible con SEO

---

Este sistema multilingüe proporciona una experiencia de usuario fluida y eficiente, permitiendo a los visitantes cambiar entre idiomas mediante enlaces directos con parámetros URL, mientras mantiene una estructura SEO optimizada y un rendimiento excelente.
