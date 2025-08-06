# Plan de Implementación - Agracom Internacional S.A.
## Landing Page con Astro, Tailwind y CSS Personalizado

**Versión:** 1.1.0  
**Fecha:** Enero 2025  
**Equipo:** Desarrollo Web Frontend  
**Tecnologías:** Astro 5.x, Tailwind CSS 3.x, TypeScript, i18n  
**Estado:** 🟢 **FASE 1 COMPLETADA** - MVP Funcional

---

## 📋 Resumen Ejecutivo

Este plan implementa la landing page de Agracom Internacional S.A. siguiendo el brandbook v1.5.0 y la estructura definida, con enfoque en:

- **Público objetivo:** Empresas B2B en Costa Este EE.UU., Mediterráneo y Medio Oriente
- **Productos especializados:** Lupinos premium (90% del negocio) y cerezas deshidratadas Santina certificadas
- **Diferenciadores:** Certificaciones religiosas (Kosher/Halal), trazabilidad total, servicio ejecutivo directo
- **Multilenguaje:** Español e Inglés con regionalización

---

## 🚀 Estado Actual del Proyecto

### ✅ **LOGROS COMPLETADOS (Enero 2025)**

#### **🏗️ Infraestructura Técnica**
- ✅ **Astro 5.12.8** configurado y funcionando
- ✅ **Tailwind CSS 3.4.0** integrado (revertido desde v4 por compatibilidad)
- ✅ **TypeScript** completo con tipos para componentes
- ✅ **Sistema i18n robusto** con JSON files y utility functions
- ✅ **Variables CSS del brandbook** implementadas centralizadamente
- ✅ **Estructura de directorios** completa y organizada

#### **🧩 Componentes Implementados (Fase 1)**
- ✅ **Layout.astro** - Base HTML con SEO completo, Schema.org, hreflang
- ✅ **Header.astro** - Navegación con logo, language switcher y región
- ✅ **Hero.astro** - UVP con CTAs, estadísticas y badges de certificación
- ✅ **ProductCard.astro** - Cards responsivos para lupinos y cerezas
- ✅ **Footer.astro** - Contactos regionales, links y información corporativa
- ✅ **ContactForm.astro** - Formulario avanzado con validación y regionalización
- ✅ **Testimonials.astro** - Carrusel de testimonios con filtro regional
- ✅ **Certifications.astro** - Sección expandida de certificaciones y QA
- ✅ **Regions.astro** - Información específica por mercados objetivo
- ✅ **Analytics.astro** - Componente de Google Analytics 4 con Partytown

#### **🌐 Sistema de Internacionalización**
- ✅ **Rutas bilingües** `/es` y `/en` funcionando
- ✅ **JSON files organizados** por namespace (common, hero, products, forms, regions)
- ✅ **TypeScript utility** para traducciones con cache y dot notation
- ✅ **Contenido regionalizado** para Costa Este EE.UU., Mediterráneo y Medio Oriente

#### **🎨 Sistema de Diseño**
- ✅ **Paleta de colores del brandbook** implementada con CSS variables
- ✅ **Tipografías Poppins e Inter** configuradas y funcionando
- ✅ **Componentes responsive** mobile-first validados
- ✅ **Clases Tailwind personalizadas** (`.btn`, `.form-input`, `.alert`)
- ✅ **Animaciones y micro-interactions** implementadas

#### **📊 Performance y SEO**
- ✅ **Servidor de desarrollo** funcionando sin errores
- ✅ **Imágenes placeholder** SVG para desarrollo
- ✅ **Meta tags completos** para ambos idiomas
- ✅ **Sitemap y robots.txt** configurados
- ✅ **Service Worker básico** para PWA futuro

### 🔄 **PRÓXIMOS PASOS**

#### **Inmediatos (Esta Semana)**
- 📷 **Reemplazar placeholder images** con fotografías auténticas de productos
- 📝 **Completar contenido final** en ambos idiomas (ES/EN)
- 🧪 **Testing exhaustivo** en dispositivos reales
- 🚀 **Deploy a staging** para revisión stakeholders

#### **Fase 2 (Siguientes 2 Semanas)**
- 🏆 **Componentes de confianza** avanzados
- 📋 **Formularios de conversión** optimizados
- 🗺️ **Mapa interactivo** de regiones
- 📈 **A/B testing** setup

---

## 🎯 Objetivos de la Implementación

### Objetivos Principales
1. **Captar leads B2B** mediante formularios de cotización optimizados
2. **Mostrar portafolio especializado** con imágenes auténticas y datos precisos
3. **Generar confianza** con certificaciones verificadas y testimonios
4. **Soporte multilenguaje** (ES/EN) con personalización regional
5. **Performance óptimo** mobile-first con hidratación parcial

### Métricas de Éxito
- Tasa de conversión formulario "Inquire about Availability" > 3%
- Descargas de fichas técnicas > 5%
- Tiempo en página > 2 minutos
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico
```
Frontend Framework:    Astro 5.x
Styling:              Tailwind CSS 4.x + CSS Custom Properties
Language:             TypeScript
Internationalization: Astro i18n
Image Optimization:   @astrojs/image
Analytics:            Google Analytics 4
Repository:           GitHub
Deployment:           Cloudflare
```

### Estructura de Directorios
```
agracom-landing/
├── src/
│   ├── components/          # Componentes Astro reutilizables
│   │   ├── layout/         # Layout, Header, Footer
│   │   ├── ui/             # Componentes UI básicos
│   │   ├── sections/       # Secciones de página
│   │   └── forms/          # Formularios y validación
│   ├── pages/              # Rutas y páginas
│   │   ├── es/            # Páginas en español
│   │   └── en/            # Páginas en inglés
│   ├── styles/             # CSS personalizado
│   │   ├── globals.css    # Variables CSS y reset
│   │   ├── components.css # Estilos de componentes
│   │   └── utilities.css  # Utilidades personalizadas
│   ├── assets/             # Imágenes, iconos, documentos
│   ├── data/              # Datos estáticos (productos, certificaciones)
│   ├── utils/             # Funciones utilitarias
│   └── types/             # Definiciones TypeScript
├── public/                 # Assets estáticos
└── tailwind.config.mjs     # Configuración Tailwind 4
```

---

## 🎨 Sistema de Diseño - Implementación CSS

### Variables CSS Personalizadas
```css
/* src/styles/globals.css */
:root {
  /* Colores principales del brandbook */
  --color-primary: #1565C0;        /* Azul Confianza */
  --color-secondary: #2E7D32;      /* Verde Chile */
  --color-kosher: #8B4513;         /* Marrón Kosher */
  --color-halal: #2E8B57;          /* Verde Halal */
  --color-accent: #FFA000;         /* Dorado Premium */
  --color-neutral-900: #212121;    /* Gris Oscuro */
  --color-neutral-100: #FAFAFA;    /* Blanco Claro */
  
  /* Estados y feedback */
  --color-success: #4CAF50;
  --color-error: #F44336;
  --color-warning: #FFA000;
  --color-info: #0288D1;
  
  /* Tipografía */
  --font-heading: 'Poppins', 'Montserrat', sans-serif;
  --font-body: 'Inter', 'Open Sans', sans-serif;
  --fs-h1: clamp(2rem, 5vw, 3rem);
  --fs-h2: clamp(1.5rem, 4vw, 2.5rem);
  --fs-body: 1rem;
  --lh-body: 1.6;
  
  /* Espaciado */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 24px;
  --space-lg: 32px;
  --space-xl: 48px;
  
  /* Animaciones */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

### Configuración Tailwind 4
```js
// tailwind.config.mjs
import { defineConfig } from '@tailwindcss/vite'

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        kosher: 'var(--color-kosher)',
        halal: 'var(--color-halal)',
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
      },
      animation: {
        'fade-in': 'fadeIn var(--duration-normal) var(--ease-out)',
        'slide-up': 'slideUp var(--duration-normal) var(--ease-out)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
})
```

---

## 🧩 Componentes Astro - Especificación Detallada

### 1. Layout y Navegación

#### `Layout.astro`
```typescript
interface Props {
  title: string;
  description?: string;
  lang: 'es' | 'en';
  region?: 'us-east' | 'mediterranean' | 'middle-east';
  canonicalURL?: string;
}
```
**Responsabilidades:**
- HTML base con meta tags SEO
- Importación de fonts (Google Fonts)
- Integración Google Analytics
- Schema.org markup para empresa

#### `Header.astro`
```typescript
interface Props {
  currentLang: 'es' | 'en';
  currentRegion?: string;
  transparent?: boolean;
}
```
**Funcionalidades:**
- Logo responsivo con tagline
- LanguageSwitcher integrado
- RegionSelector con geolocalización
- Navegación sticky con scroll behavior

#### `LanguageSwitcher.astro`
```typescript
interface Props {
  options: Array<{code: 'es' | 'en', label: string, flag: string}>;
  currentLang: 'es' | 'en';
  onChange?: (lang: string) => void;
}
```
**Características:**
- Detección automática idioma navegador
- Persistencia en localStorage
- Animaciones suaves de transición

### 2. Secciones Principales

#### `Hero.astro`
```typescript
interface Props {
  title: string;
  subtitle: string;
  bgImage: string;
  primaryCTA: {text: string, href: string};
  secondaryCTA: {text: string, href: string};
  certificationBadges: boolean;
  region?: string;
}
```
**Implementación:**
- Background image optimizado (WebP/AVIF)
- CTAs con tracking events
- Badges de certificación dinámicos
- Responsive typography con clamp()

#### `ProductCard.astro`
```typescript
interface Props {
  product: {
    id: string;
    name: string;
    image: string;
    description: string;
    specifications: string[];
    certifications: string[];
    region?: string;
  };
  variant?: 'default' | 'featured';
  showActions?: boolean;
}
```
**Características:**
- Lazy loading de imágenes
- Hover effects con CSS transforms
- CTA contextual por región
- Badge de certificaciones específicas

#### `QuoteForm.astro`
```typescript
interface Props {
  lang: 'es' | 'en';
  region?: string;
  productId?: string;
  onSubmit?: (data: FormData) => void;
}
```
**Validación y UX:**
- Validación client-side + server-side
- Auto-completado inteligente
- Indicadores de seguridad/privacidad
- Estados de loading y success

### 3. Componentes de Confianza

#### `CertificationBadge.astro`
```typescript
interface Props {
  certification: {
    id: string;
    name: string;
    logo: string;
    description: string;
    verified: boolean;
    tooltip?: string;
  };
  size?: 'sm' | 'md' | 'lg';
  showTooltip?: boolean;
}
```
**Estilos específicos:**
- Colores diferenciados (Kosher: --color-kosher, Halal: --color-halal)
- Animaciones hover sutil
- Tooltips accesibles con ARIA

#### `TestimonialCarousel.astro`
```typescript
interface Props {
  testimonials: Array<{
    quote: string;
    author: string;
    company: string;
    region: string;
    avatar?: string;
  }>;
  autoPlay?: boolean;
  showControls?: boolean;
}
```
**Funcionalidades:**
- Carrusel accesible con keyboard navigation
- Auto-play pausable
- Filtro por región opcional

### 4. Componentes Interactivos

#### `RegionMap.astro`
```typescript
interface Props {
  regions: Array<{
    id: string;
    name: string;
    coordinates: [number, number];
    deliveryTime: string;
    contact: {name: string, email: string};
  }>;
  interactive?: boolean;
}
```
**Implementación:**
- SVG map con zonas clickeable
- Tooltips dinámicos con información de entrega
- Responsive behavior para móvil

#### `ProcessingPlantGallery.astro`
```typescript
interface Props {
  images: Array<{
    src: string;
    alt: string;
    caption: string;
    stage: string;
  }>;
  columns?: number;
  lightbox?: boolean;
}
```
**Características:**
- Grid responsivo con CSS Grid
- Lightbox accesible (opcional)
- Lazy loading progresivo
- Captions bilingües

---

## 🌐 Internacionalización (i18n)

### Estructura de Rutas
```
/es/                 # Español (ruta por defecto)
/en/                 # Inglés
/es/productos/       # Productos en español
/en/products/        # Productos en inglés
/es/contacto/        # Contacto en español
/en/contact/         # Contacto en inglés
```

### Sistema de Traducciones con Archivos JSON

#### Estructura de Archivos i18n
```
src/
├── data/
│   ├── i18n/
│   │   ├── es/
│   │   │   ├── common.json        # Elementos comunes (nav, footer, CTAs)
│   │   │   ├── hero.json          # Sección hero
│   │   │   ├── products.json      # Productos y especificaciones
│   │   │   ├── certifications.json # Certificaciones y badges
│   │   │   ├── testimonials.json  # Testimonios por región
│   │   │   ├── forms.json         # Labels y mensajes de formularios
│   │   │   ├── regions.json       # Contenido específico por región
│   │   │   └── seo.json           # Meta tags y SEO
│   │   └── en/
│   │       ├── common.json
│   │       ├── hero.json
│   │       ├── products.json
│   │       ├── certifications.json
│   │       ├── testimonials.json
│   │       ├── forms.json
│   │       ├── regions.json
│   │       └── seo.json
│   └── products/
│       ├── lupins.json            # Datos productos lupinos
│       └── cherries.json          # Datos productos cerezas
```

#### Ejemplos de Archivos JSON

**src/data/i18n/es/common.json**
```json
{
  "navigation": {
    "home": "Inicio",
    "products": "Productos",
    "certifications": "Certificaciones",
    "contact": "Contacto"
  },
  "cta": {
    "inquire": "Consulte disponibilidad y precios",
    "download": "Descargar ficha técnica",
    "contact": "Contactar ahora",
    "quote": "Solicitar cotización"
  },
  "footer": {
    "tagline": "Lupinos y Cerezas Premium desde Chile",
    "copyright": "© 2025 Agracom Internacional S.A. Todos los derechos reservados.",
    "contact_title": "Contacto",
    "follow_us": "Síguenos"
  },
  "regions": {
    "us_east": "Costa Este EE.UU.",
    "mediterranean": "Mediterráneo",
    "middle_east": "Medio Oriente"
  }
}
```

**src/data/i18n/es/hero.json**
```json
{
  "title": "20+ años exportando lupinos chilenos premium y cerezas deshidratadas certificadas",
  "subtitle": "Entregas confiables a EE.UU., Mediterráneo y Medio Oriente",
  "description": "Especialistas boutique en lupinos calibres 11-17mm con certificaciones Kosher, Halal y trazabilidad completa. Contacto directo con ejecutivos.",
  "stats": {
    "shipments": "270+ embarques exitosos",
    "countries": "17 países",
    "experience": "20+ años de experiencia"
  },
  "trust_badges": "Certificaciones: Kosher · Halal · SAG · Trazabilidad completa"
}
```

**src/data/i18n/es/products.json**
```json
{
  "categories": {
    "lupins": "Lupinos",
    "cherries": "Cerezas Deshidratadas"
  },
  "lupins": {
    "title": "Lupinos Premium Chilenos",
    "description": "Lupinos dulces calibres 11-17mm, procesados y seleccionados con los más altos estándares de calidad.",
    "specifications": [
      "Calibres 11-17mm disponibles",
      "Humedad: 12-14%",
      "Proteína: 36-42%",
      "Certificación SAG",
      "Trazabilidad por lote"
    ],
    "benefits": [
      "270+ embarques exitosos",
      "Disponible todo el año",
      "Empaque personalizado",
      "Tiempos de entrega confiables"
    ]
  },
  "cherries": {
    "title": "Cerezas Deshidratadas Santina",
    "description": "Únicas cerezas deshidratadas con certificación Kosher para Pascua y Halal en Chile.",
    "specifications": [
      "Variedad Santina exclusiva",
      "Humedad: 18-22%",
      "Sin preservantes artificiales",
      "Certificación Kosher Orthodox Union",
      "Certificación Halal Centro Islámico"
    ],
    "benefits": [
      "Únicas con doble certificación religiosa",
      "Disponibilidad estacional",
      "Ideal para mercados especializados",
      "Empaque según requerimientos"
    ]
  }
}
```

**src/data/i18n/es/regions.json**
```json
{
  "us_east": {
    "title": "Costa Este de Estados Unidos",
    "description": "Servicio especializado para el mercado estadounidense con tiempos de entrega optimizados.",
    "delivery_time": "10-14 días",
    "contact": {
      "executive": "Cristián Rodríguez",
      "email": "cristian@agracom.cl",
      "phone": "+56 9 1234 5678"
    },
    "features": [
      "Documentación FDA completa",
      "Logística puerto a puerto",
      "Seguimiento en tiempo real",
      "Soporte técnico local"
    ]
  },
  "mediterranean": {
    "title": "Región Mediterránea",
    "description": "Adaptación específica para los exigentes mercados mediterráneos con tradición en calidad.",
    "delivery_time": "15-20 días",
    "contact": {
      "executive": "Pedro Mendive",
      "email": "pedro@agracom.cl", 
      "phone": "+56 9 8765 4321"
    },
    "features": [
      "Certificaciones UE",
      "Empaques tradicionales",
      "Adaptación cultural",
      "Precios competitivos"
    ]
  },
  "middle_east": {
    "title": "Medio Oriente",
    "description": "Especialización en certificaciones religiosas para mercados Halal y Kosher exigentes.",
    "delivery_time": "18-25 días",
    "contact": {
      "executive": "Cristián Rodríguez",
      "email": "cristian@agracom.cl",
      "phone": "+56 9 1234 5678"
    },
    "features": [
      "Certificación Halal verificada",
      "Certificación Kosher Orthodox",
      "Documentación religiosa",
      "Cadena de suministro segura"
    ]
  }
}
```

#### Sistema TypeScript para i18n

**src/utils/i18n.ts**
```typescript
// Tipos para las traducciones
export type Locale = 'es' | 'en';

export interface TranslationKey {
  [key: string]: string | TranslationKey;
}

export interface Translations {
  [locale: string]: TranslationKey;
}

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
```

#### Uso en Componentes Astro

**Ejemplo: Hero.astro**
```astro
---
import { createTranslator } from '../utils/i18n';

export interface Props {
  lang: 'es' | 'en';
  region?: string;
}

const { lang, region } = Astro.props;
const { hero, common, regions } = await createTranslator(lang);

// Cargar contenido específico
const title = await hero('title');
const subtitle = await hero('subtitle');
const ctaInquire = await common('cta.inquire');
const ctaDownload = await common('cta.download');

// Contenido regional si aplica
const regionData = region ? await regions(region) : null;
---

<section class="hero-section">
  <div class="hero-content">
    <h1 class="hero-title">{title}</h1>
    <p class="hero-subtitle">{subtitle}</p>
    
    <div class="hero-actions">
      <a href={`/${lang}/contact`} class="btn-primary">
        {ctaInquire}
      </a>
      <a href={`/${lang}/resources`} class="btn-secondary">
        {ctaDownload}
      </a>
    </div>
  </div>
</section>
```

#### Ventajas de este Sistema JSON:

1. **Separación clara:** Cada namespace en su propio archivo
2. **Mantenibilidad:** Fácil edición sin tocar código
3. **Escalabilidad:** Agregar idiomas solo requiere nuevas carpetas
4. **Performance:** Carga lazy de traducciones por namespace
5. **Tipado:** TypeScript para autocomplete y validación
6. **Flexibilidad:** Soporte para anidación y dot notation
7. **Cache:** Sistema de cache para evitar recargas

### Configuración Astro i18n
```js
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
```

---

## 📱 Responsive Design y Accesibilidad

### Breakpoints Tailwind Personalizados
```js
// En tailwind.config.mjs
screens: {
  'xs': '320px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Guidelines de Accesibilidad
- **Contraste:** Mínimo 4.5:1 según WCAG 2.1 AA
- **Focus:** Outline visible con --color-accent
- **ARIA:** Labels descriptivos en formularios e interactivos
- **Keyboard:** Navegación completa sin mouse
- **Alt text:** Descriptivo para todas las imágenes

### Implementación CSS Responsive
```css
/* Componentes adaptativos */
.hero-container {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-md;
  min-height: clamp(400px, 60vh, 800px);
}

.product-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md;
}

/* Typography responsiva */
.heading-primary {
  font-size: var(--fs-h1);
  line-height: 1.1;
  @apply font-heading font-bold text-neutral-900;
}
```

---

## ⚡ Performance y Optimización

### Estrategias de Hidratación Astro
```astro
<!-- Hidratación condicional -->
<LanguageSwitcher client:load />
<ProductFilter client:idle />
<TestimonialCarousel client:visible />
<QuoteForm client:idle />
<RegionMap client:visible />
```

### Optimización de Imágenes
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/lupinos-hero.jpg';
---

<Image
  src={heroImage}
  alt="Lupinos chilenos premium calibre 11-17mm"
  width={1200}
  height={600}
  format="webp"
  loading="eager"
  class="w-full h-auto object-cover"
/>
```

### Bundle Splitting y Lazy Loading
```js
// astro.config.mjs
export default defineConfig({
  build: {
    split: true,
    inlineStylesheets: 'auto'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro/client'],
            'forms': ['./src/components/forms/']
          }
        }
      }
    }
  }
});
```

---

## 📊 Analytics y Tracking

### Google Analytics 4 Setup
```astro
---
// src/components/Analytics.astro
export interface Props {
  gtagId: string;
}
const { gtagId } = Astro.props;
---

<script type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}></script>
<script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{gtagId}');
</script>
```

### Event Tracking Personalizado
```typescript
// src/utils/analytics.ts
export function trackCTAClick(ctaType: string, region?: string) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      event_label: ctaType,
      custom_parameter_region: region || 'unknown'
    });
  }
}

export function trackFormSubmission(formType: string, success: boolean) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'form_submit', {
      event_category: 'conversion',
      event_label: formType,
      success: success
    });
  }
}
```

---

## 🚀 Plan de Implementación por Fases

### **FASE 1: MVP Foundation (Semanas 1-2)**
**Objetivo:** Landing funcional con elementos esenciales

#### Sprint 1.1 - Setup y Configuración (3 días) ✅ **COMPLETADO**
- [x] Configurar Astro 5.x + Tailwind 3.x + TypeScript *(Ajustado para compatibilidad)*
- [x] Setup estructura de directorios completa
- [x] Configurar i18n con JSON files y TypeScript utility
- [x] Implementar variables CSS del brandbook con tokens
- [x] Setup Analytics y tracking con Partytown

#### Sprint 1.2 - Componentes Base (4 días) ✅ **COMPLETADO**
- [x] `Layout.astro` con SEO completo, meta tags, Schema.org
- [x] `Header.astro` con logo, navegación y language switcher
- [x] `Hero.astro` con UVP, CTAs principales y estadísticas
- [x] `ProductCard.astro` para lupinos y cerezas con certificaciones
- [x] `Footer.astro` con contactos regionales y links

#### Sprint 1.3 - Página Principal (3 días) ✅ **COMPLETADO**
- [x] Implementar página `/es/index.astro` con todos los componentes
- [x] Implementar página `/en/index.astro` con traducciones
- [x] Integrar componentes principales con i18n
- [x] Testing responsive completo mobile-first
- [x] Servidor de desarrollo funcionando sin errores

**Entregables Fase 1:**
- ✅ Landing page bilingüe funcional
- ✅ 2 ProductCards (lupinos + cerezas)
- ✅ Hero con CTAs trackeable
- ✅ Responsive mobile-first
- ✅ SEO básico implementado

### **FASE 2: Confianza y Conversión (Semanas 3-4)**
**Objetivo:** Elementos de confianza y formularios de conversión

#### Sprint 2.1 - Componentes de Confianza (4 días)
- [ ] `CertificationBadge.astro` con estilos específicos
- [ ] `CertificationSection.astro` para mostrar credenciales
- [ ] `TestimonialCarousel.astro` con testimonios verificados
- [ ] `ContactCard.astro` regional (Cristián/Pedro)

#### Sprint 2.2 - Formularios y Conversión (4 días)
- [ ] `QuoteForm.astro` con validación completa
- [ ] `ResourceDownload.astro` para fichas técnicas
- [ ] `StickyCTA.astro` para conversión móvil
- [ ] Integración con CRM/email

#### Sprint 2.3 - Regionalización (2 días)
- [ ] `RegionSelector.astro` con geolocalización
- [ ] `AudienceTabs.astro` para segmentación
- [ ] Personalización de contenido por región
- [ ] Testing de flujos de conversión

**Entregables Fase 2:**
- ✅ Sistema de certificaciones implementado
- ✅ Formulario de cotización funcional
- ✅ Testimonios con carrusel accesible
- ✅ Segmentación por región
- ✅ Tracking de conversiones

### **FASE 3: Experiencia Avanzada (Mes 2)**
**Objetivo:** Funcionalidades avanzadas y optimización

#### Sprint 3.1 - Galería y Multimedia (1 semana)
- [ ] `ProcessingPlantGallery.astro` con lightbox
- [ ] Optimización avanzada de imágenes
- [ ] Videos testimoniales (opcional)
- [ ] Galería de productos expandida

#### Sprint 3.2 - Interactividad (1 semana)
- [ ] `RegionMap.astro` interactivo
- [ ] `ProductFilter.astro` avanzado
- [ ] Búsqueda de productos
- [ ] Comparador de productos

#### Sprint 3.3 - SEO y Performance (1 semana)
- [ ] Schema.org markup completo
- [ ] Sitemap XML automático
- [ ] Optimización Core Web Vitals
- [ ] A/B testing de hero copy

#### Sprint 3.4 - Refinamiento (1 semana)
- [ ] Pulir animaciones y micro-interactions
- [ ] Optimizar bundle size
- [ ] Testing de carga completo
- [ ] Documentación final

**Entregables Fase 3:**
- ✅ Galería de planta procesadora
- ✅ Mapa interactivo de regiones
- ✅ SEO técnico optimizado
- ✅ Performance score > 90
- ✅ A/B testing implementado

### **FASE 4: Escalabilidad (Mes 3+)**
**Objetivo:** Funcionalidades basadas en métricas reales

#### Funcionalidades Candidatas (priorizar por métricas)
- [ ] Portal B2B con login
- [ ] Sistema de tracking de órdenes
- [ ] Chat en vivo regional
- [ ] Calculadora de shipping
- [ ] Blog de mercado (insights lupinos/cerezas)
- [ ] Newsletter segmentada por región
- [ ] Programa de partners/distribuidores

---

## 🔧 Setup Inicial y Dependencias

### Instalación de Dependencias
```bash
# Dependencias principales
npm install @astrojs/tailwind @tailwindcss/vite tailwindcss
npm install @astrojs/image @astrojs/sitemap @astrojs/robots-txt
npm install @astrojs/partytown # Para Analytics
npm install astro-i18next i18next # Para i18n

# Dependencias de desarrollo
npm install -D @types/node typescript
npm install -D prettier prettier-plugin-astro
npm install -D @tailwindcss/forms @tailwindcss/typography

# Utilidades adicionales
npm install clsx # Para conditional classes
npm install zod # Para validación de formularios
npm install date-fns # Para fechas localizadas
```

### Configuración Astro Completa
```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://agracom-internacional.com',
  integrations: [
    tailwind({
      config: { path: './tailwind.config.mjs' }
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
      cacheDir: './.cache/image',
      logLevel: 'info'
    }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-CL',
          en: 'en-US'
        }
      }
    }),
    robotsTxt(),
    partytown({
      config: {
        forward: ['gtag']
      }
    })
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    css: {
      transformer: 'lightningcss'
    }
  }
});
```

---

## 🧪 Testing y QA

### Checklist de Testing
#### Funcionalidad
- [ ] Formulario de cotización envía correctamente
- [ ] Cambio de idioma preserva estado
- [ ] Selector de región actualiza contenido
- [ ] Descargas de recursos funcionan
- [ ] Links de contacto abren correctamente

#### Responsive Design
- [ ] Mobile (320px - 767px)
- [ ] Tablet (768px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Landscape orientation
- [ ] Touch interactions

#### Performance
- [ ] Lighthouse score > 90
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Image optimization verificada

#### Accesibilidad
- [ ] Screen reader navigation
- [ ] Keyboard-only navigation
- [ ] Color contrast validation
- [ ] Focus indicators
- [ ] ARIA labels

#### SEO
- [ ] Meta tags en ambos idiomas
- [ ] Schema.org markup
- [ ] Sitemap XML generado
- [ ] robots.txt configurado
- [ ] Canonical URLs correctas

### Herramientas de Testing
```bash
# Performance testing
npm run build
npm run preview
# Usar Lighthouse CI o Speedcurve

# Accessibility testing
npx axe-cli http://localhost:3000

# HTML validation
npx html-validate dist/**/*.html

# Bundle analysis
npx astro build --config astro.config.bundle-analyzer.mjs
```

---

## 📈 Métricas y KPIs

### Métricas Técnicas
- **Performance:** Core Web Vitals score > 90
- **SEO:** Lighthouse SEO score > 95
- **Accessibility:** Lighthouse A11y score > 95
- **Bundle size:** Total JS < 100KB gzipped
- **Image optimization:** 90%+ WebP/AVIF adoption

### Métricas de Negocio
- **Conversión:** Formulario "Inquire" > 3%
- **Engagement:** Tiempo en página > 2min
- **Descarga recursos:** Fichas técnicas > 5%
- **Abandono formulario:** < 60%
- **Retorno usuario:** > 25% en 30 días

### Dashboard de Tracking
```typescript
// Eventos GA4 personalizados
const trackingEvents = {
  // Engagement
  'hero_cta_click': 'Hero CTA clicked',
  'product_view': 'Product card viewed',
  'certification_view': 'Certification badge clicked',
  
  // Conversion
  'quote_form_start': 'Quote form started',
  'quote_form_complete': 'Quote form submitted',
  'resource_download': 'Technical sheet downloaded',
  
  // Navigation
  'language_change': 'Language switched',
  'region_change': 'Region selected',
  'testimonial_view': 'Testimonial viewed'
};
```

---

## 🔄 Workflow de Desarrollo

### Git Strategy
```
main                    # Producción
├── develop            # Staging
├── feature/hero       # Nuevas funcionalidades
├── feature/i18n       # Internacionalización
├── hotfix/form-bug    # Correcciones urgentes
└── release/v1.0       # Preparación release
```

### Commands de Desarrollo
```bash
# Desarrollo local
npm run dev              # Astro dev server
npm run dev:host         # Dev server accesible en red local

# Building
npm run build            # Build para producción
npm run preview          # Preview del build
npm run build:analyze    # Análisis de bundle

# Quality Assurance
npm run lint            # ESLint + Prettier
npm run type-check      # TypeScript validation
npm run test:a11y       # Accessibility testing
npm run test:perf       # Performance testing

# Deployment
npm run deploy:staging  # Deploy a staging
npm run deploy:prod     # Deploy a producción
```

### CI/CD Pipeline
```yaml
# .github/workflows/main.yml
name: Build and Deploy
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
      - run: npm run test:a11y

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - run: npm run deploy:prod
```

---

## 📋 Checklist Final de Entrega

### Pre-Launch
- [ ] **Contenido:** Todos los textos revisados en ES/EN
- [ ] **Imágenes:** Fotografías auténticas optimizadas
- [ ] **Formularios:** Testing completo de envío y validación
- [ ] **Analytics:** GA4 configurado y eventos trackeable
- [ ] **SEO:** Meta tags, sitemap, robots.txt
- [ ] **Performance:** Core Web Vitals validated
- [ ] **Accesibilidad:** WCAG 2.1 AA compliance
- [ ] **Responsive:** Testing en dispositivos reales
- [ ] **i18n:** Ambos idiomas completamente funcionales

### Post-Launch
- [ ] **Monitoring:** Setup alertas performance
- [ ] **Analytics:** Dashboard métricas configurado
- [ ] **Backup:** Respaldos automatizados
- [ ] **SSL:** Certificado HTTPS activo
- [ ] **CDN:** Configuración optimizada
- [ ] **Documentation:** Manual de actualización
- [ ] **Training:** Capacitación equipo interno
- [ ] **A/B Testing:** Experimentos configurados

---

## 📞 Contactos y Recursos

### Equipo de Proyecto
- **Product Owner:** [Definir]
- **Tech Lead:** [Desarrollador Frontend]
- **Designer:** [Responsable UI/UX]
- **Content:** [Responsable contenidos bilingües]

### Recursos Externos
- **Brandbook:** `Brandbook_SitioWeb_2025_v3_OK.md`
- **Estructura:** `EstructuraSitioWeb_v2_OK.md`
- **Design System:** Figma Library (por crear)
- **Assets:** Fotografías auténticas (por proporcionar)

### Referencias Técnicas
- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS 4.0](https://tailwindcss.com/docs)
- [Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Documento vivo - Actualizar según progreso del proyecto**  
**Última actualización:** Enero 2025  
**Próxima revisión:** Cada sprint