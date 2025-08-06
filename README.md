# Agracom Internacional S.A. - Landing Page

Landing page corporativa para Agracom Internacional S.A., exportadores especializados en lupinos premium y cerezas deshidratadas certificadas desde Chile.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/tiny.svg)](https://astro.build)

## 🌟 Características

- **🌍 Multilenguaje:** Soporte completo para español e inglés
- **📱 Mobile-First:** Diseño responsivo optimizado para todos los dispositivos  
- **⚡ Performance:** Optimizado con Astro y Tailwind CSS 4
- **🎨 Design System:** Implementación completa del brandbook v1.5.0
- **♿ Accesibilidad:** WCAG 2.1 AA compliance
- **🔍 SEO:** Meta tags optimizados y Schema.org markup
- **📊 Analytics:** Integración con Google Analytics 4

## 🏗️ Tecnologías

- **Frontend:** [Astro 5.x](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com)
- **Lenguajes:** TypeScript + CSS Custom Properties
- **i18n:** Sistema personalizado con archivos JSON
- **Optimización:** @astrojs/image para imágenes responsivas
- **Analytics:** @astrojs/partytown para Google Analytics

## 🚀 Estructura del Proyecto

```text
agracom-landing/
├── src/
│   ├── components/
│   │   ├── layout/         # Layout, Header, Footer
│   │   ├── ui/             # Componentes UI reutilizables
│   │   ├── sections/       # Secciones de página (Hero, etc.)
│   │   └── forms/          # Formularios y validación
│   ├── pages/
│   │   ├── index.astro     # Página principal (ES)
│   │   └── en/
│   │       └── index.astro # Página principal (EN)
│   ├── styles/
│   │   └── globals.css     # Variables CSS del brandbook
│   ├── data/
│   │   ├── i18n/           # Traducciones JSON por idioma
│   │   └── products/       # Datos de productos
│   ├── utils/              # Funciones utilitarias (i18n, etc.)
│   ├── types/              # Definiciones TypeScript
│   └── assets/             # Imágenes y documentos
├── public/                 # Assets estáticos
└── tailwind.config.mjs     # Configuración Tailwind 4
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando                    | Acción                                           |
| :------------------------- | :----------------------------------------------- |
| `npm install`              | Instala las dependencias                        |
| `npm run dev`              | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run dev:host`         | Servidor de desarrollo accesible en la red      |
| `npm run build`            | Construye el sitio para producción en `./dist/` |
| `npm run preview`          | Previsualiza la build localmente                |
| `npm run lint`             | Ejecuta linting (Prettier + ESLint)             |
| `npm run type-check`       | Verifica tipos de TypeScript                    |

## 🎨 Sistema de Diseño

El proyecto implementa el brandbook v1.5.0 de Agracom con:

### Colores Principales
- **Primary:** `#1565C0` (Azul Confianza)
- **Secondary:** `#2E7D32` (Verde Chile)  
- **Kosher:** `#8B4513` (Marrón Kosher)
- **Halal:** `#2E8B57` (Verde Halal)
- **Accent:** `#FFA000` (Dorado Premium)

### Tipografía
- **Headings:** Poppins (700, 600)
- **Body:** Inter (400, 500, 600)
- **Responsive:** Sistema clamp() para escalado fluido

### Componentes Principales
- **Layout.astro:** Base HTML con SEO y meta tags
- **Header.astro:** Navegación con cambio de idioma
- **Hero.astro:** Sección principal con propuesta de valor
- **ProductCard.astro:** Tarjetas de productos reutilizables
- **Footer.astro:** Footer completo con contactos regionales

## 🌐 Internacionalización

Sistema i18n robusto con:

- **Rutas:** `/` (español), `/en/` (inglés)
- **Traducciones:** Archivos JSON organizados por namespace
- **Detección:** Automática del idioma del navegador
- **SEO:** Hreflang tags para ambos idiomas

### Estructura de Traducciones

```text
src/data/i18n/
├── es/
│   ├── common.json      # Navegación, CTAs, footer
│   ├── hero.json        # Contenido del hero
│   ├── products.json    # Información de productos
│   └── regions.json     # Contenido regional
└── en/
    ├── common.json
    ├── hero.json  
    ├── products.json
    └── regions.json
```

## 📷 Assets Necesarios

Para completar el diseño, necesitas reemplazar estos placeholders:

### Imágenes Principales
- `agracom-hero-lupins.webp` (1200x900px) - Imagen principal del hero
- `agracom-lupins-premium.webp` (800x600px) - Lupinos premium
- `agracom-cherries-santina.webp` (800x600px) - Cerezas Santina

### Logo y Branding  
- `agracom-logo.png` (300x150px) - Logo principal
- `agracom-logo-vertical.png` (150x200px) - Logo vertical

### Certificaciones
- `cert-kosher-orthodox-union.png` (200x200px)
- `cert-halal-centro-islamico.png` (200x200px)  
- `cert-sag-chile.png` (200x200px)

### Documentos PDF
- Fichas técnicas de productos (ES/EN)
- Certificados Kosher, Halal, SAG
- Brochures corporativos por región

## 🎯 Productos

### Lupinos Premium Chilenos
- Calibres 11-17mm disponibles
- Certificación SAG
- 270+ embarques exitosos a 17 países
- Trazabilidad completa por lote

### Cerezas Deshidratadas Santina
- Únicas con certificación Kosher para Pascua y Halal
- Variedad Santina exclusiva
- Sin preservantes artificiales
- Mercados especializados (Costa Este EE.UU., Mediterráneo, Medio Oriente)

## 🌍 Mercados Objetivo

- **Costa Este EE.UU.:** Tiempos de entrega 10-14 días
- **Mediterráneo:** Tiempos de entrega 15-20 días  
- **Medio Oriente:** Tiempos de entrega 18-25 días

Contacto ejecutivo directo:
- **Cristián Rodríguez:** Costa Este EE.UU. y Medio Oriente
- **Pedro Mendive:** Región Mediterránea

## 📊 Performance

Objetivos de rendimiento:
- **LCP:** < 2.5s
- **FID:** < 100ms
- **CLS:** < 0.1
- **Lighthouse Score:** > 90

## 🚀 Despliegue

El sitio está configurado para despliegue en:
- **Vercel** (recomendado)
- **Netlify**
- **Cloudflare Pages**

Variables de entorno necesarias:
```env
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
SITE_URL=https://agracom-internacional.com
```

## 📈 Próximas Fases

### Fase 2 - Confianza y Conversión
- Formularios de cotización avanzados
- Carrusel de testimonios
- Sección de certificaciones expandida
- Galería de planta procesadora

### Fase 3 - Experiencia Avanzada  
- Mapa interactivo de regiones
- Calculadora de shipping
- Portal B2B con login
- Sistema de tracking de órdenes

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

© 2025 Agracom Internacional S.A. Todos los derechos reservados.

---

**Desarrollado con ❤️ en Chile para conectar la calidad chilena con el mundo.**