# Imágenes para Agracom Internacional S.A.

## Imágenes Necesarias para Reemplazar

### Hero Section
- **agracom-hero-lupinos.webp** (1200x900px)
  - Imagen principal del hero
  - Lupinos premium calibres 11-17mm en primer plano
  - Fondo de campo chileno o planta procesadora
  - Formato: WebP optimizado, JPG como fallback

### Productos
- **agracom-lupinos-premium.webp** (800x600px)
  - Lupinos calibrados en diferentes tamaños (11-17mm)
  - Preferiblemente con medidor o calibrador visible
  - Fondo limpio, profesional

- **agracom-cerezas-santina.webp** (800x600px)
  - Cerezas deshidratadas Santina
  - Mostrar textura y calidad
  - Incluir empaque o certificados si es posible

### Logo y Branding
- **agracom-logo.png** (300x150px, transparente)
  - Logo principal con isotipo de lupino + hoja
  - Versión horizontal para header
  - Fondo transparente PNG

- **agracom-logo-vertical.png** (150x200px, transparente)
  - Versión vertical para footer o aplicaciones móviles
  - Fondo transparente PNG

### Certificaciones
- **cert-kosher-orthodox-union.png** (200x200px)
  - Logo oficial Orthodox Union (OU)
  - Fondo transparente

- **cert-halal-centro-islamico.png** (200x200px)
  - Logo Centro Islámico de Chile
  - Fondo transparente

- **cert-sag-chile.png** (200x200px)
  - Logo SAG Chile
  - Fondo transparente

### Ejecutivos (Fotos profesionales)
- **cristian-rodriguez.webp** (400x400px)
  - Foto profesional de Cristián Rodríguez
  - Formato cuadrado, fondo neutral

- **pedro-mendive.webp** (400x400px)
  - Foto profesional de Pedro Mendive
  - Formato cuadrado, fondo neutral

### Planta Procesadora (Para galería futura)
- **planta-seleccion-lupinos.webp** (800x600px)
- **planta-calibrado-lupinos.webp** (800x600px)
- **planta-empaque-productos.webp** (800x600px)
- **planta-control-calidad.webp** (800x600px)

### Open Graph y SEO
- **agracom-og-image.jpg** (1200x630px)
  - Imagen para redes sociales y SEO
  - Incluir logo, productos principales y tagline
  - Texto legible en tamaño pequeño

### Favicons
- **favicon.svg** (SVG vectorial)
- **favicon-32x32.png** (32x32px)
- **favicon-16x16.png** (16x16px)
- **apple-touch-icon.png** (180x180px)

## Especificaciones Técnicas

### Formatos Preferidos
1. **WebP** - Para todas las imágenes web (mejor compresión)
2. **PNG** - Para logos con transparencia
3. **SVG** - Para iconos y gráficos vectoriales
4. **JPG** - Como fallback para navegadores antiguos

### Optimización
- Compresión máxima manteniendo calidad visual
- Responsive images con múltiples tamaños
- Lazy loading para imágenes below-the-fold
- Alt text descriptivo en español e inglés

### Naming Convention
- Prefijo `agracom-` para todas las imágenes de la marca
- Descripción clara en inglés
- Sin espacios, usar guiones (kebab-case)
- Incluir dimensiones si es relevante

Ejemplo: `agracom-lupins-premium-800x600.webp`

## Integración en Astro

Las imágenes se integrarán usando el componente `<Image>` de Astro para optimización automática:

```astro
---
import { Image } from 'astro:assets';
import lupinsHero from '../assets/images/agracom-hero-lupinos.webp';
---

<Image
  src={lupinsHero}
  alt="Lupinos chilenos premium calibre 11-17mm"
  width={1200}
  height={900}
  format="webp"
  loading="eager"
  class="w-full h-auto object-cover rounded-2xl"
/>
```