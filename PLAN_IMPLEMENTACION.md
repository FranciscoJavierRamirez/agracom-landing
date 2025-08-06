# Plan de Implementación - Agracom Internacional S.A.
## Landing Page con Astro, Tailwind 4 y CSS Personalizado

**Versión:** 1.0.0  
**Fecha:** Enero 2025  
**Equipo:** Desarrollo Web Frontend  
**Tecnologías:** Astro 5.x, Tailwind CSS 4.x, TypeScript, i18n

---

## 📋 Resumen Ejecutivo

Este plan implementa la landing page de Agracom Internacional S.A. siguiendo el brandbook v1.5.0 y la estructura definida, con enfoque en:

- **Público objetivo:** Empresas B2B en Costa Este EE.UU., Mediterráneo y Medio Oriente
- **Productos especializados:** Lupinos premium (90% del negocio) y cerezas deshidratadas Santina certificadas
- **Diferenciadores:** Certificaciones religiosas (Kosher/Halal), trazabilidad total, servicio ejecutivo directo
- **Multilenguaje:** Español e Inglés con regionalización

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
Deployment:           Vercel/Netlify
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

### Sistema de Traducciones
```typescript
// src/utils/i18n.ts
export const translations = {
  es: {
    'hero.title': '20+ años exportando lupinos chilenos premium y cerezas deshidratadas certificadas',
    'hero.subtitle': 'Entregas confiables a EE.UU., Mediterráneo y Medio Oriente',
    'cta.inquire': 'Consulte disponibilidad y precios',
    'cta.download': 'Descargar ficha técnica',
    // ... más traducciones
  },
  en: {
    'hero.title': '20+ years exporting premium Chilean lupins and certified dried cherries',
    'hero.subtitle': 'Reliable delivery to the US East Coast, Mediterranean & Middle East',
    'cta.inquire': 'Inquire about availability and pricing',
    'cta.download': 'Download technical sheet',
    // ... más traducciones
  }
};

export function t(key: string, lang: 'es' | 'en'): string {
  return translations[lang][key] || key;
}
```

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

#### Sprint 1.1 - Setup y Configuración (3 días)
- [ ] Configurar Astro + Tailwind 4 + TypeScript
- [ ] Setup estructura de directorios
- [ ] Configurar i18n básico (ES/EN)
- [ ] Implementar variables CSS del brandbook
- [ ] Setup Analytics y tracking

#### Sprint 1.2 - Componentes Base (4 días)
- [ ] `Layout.astro` con SEO básico
- [ ] `Header.astro` con logo y navegación
- [ ] `Hero.astro` con UVP y CTAs principales
- [ ] `ProductCard.astro` para lupinos y cerezas
- [ ] `Footer.astro` con contactos básicos

#### Sprint 1.3 - Página Principal (3 días)
- [ ] Implementar página `/es/index.astro`
- [ ] Implementar página `/en/index.astro`
- [ ] Integrar componentes principales
- [ ] Testing responsive básico
- [ ] Deploy a staging

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