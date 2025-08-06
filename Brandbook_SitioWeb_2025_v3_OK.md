### Brandbook Actualizado para Agracom Internacional S.A.

Este brandbook actualizado (versión v1.5.0, fecha: Agosto 05, 2025) integra todas las iteraciones previas, fortalezas técnicas y mejoras críticas basadas en la realidad corporativa de Agracom: una empresa boutique pequeña-mediana, ultra-especializada en lupinos premium (90%+ del negocio) y cerezas deshidratadas Santina certificadas, con un perfil discreto y enfoque B2B nicho. El diseño prioriza honestidad, simplicidad y diferenciadores reales (certificaciones religiosas, calibres precisos, servicio ejecutivo directo con Cristián Rodríguez y Pedro Mendive).

Como guía para **diseñadores**: Enfatiza consistencia visual (paleta diferenciada, fotografía auténtica, isotipo simple) y generación de contenidos (textos bilingües concisos, enfocados en USPs reales; evitar genéricos). Usa Figma para prototipos, asegurando mobile-first y accesibilidad.

Para **desarrolladores Astro**: Mantén la modularidad con componentes reutilizables, i18n (ES/EN con prefijos /es /en), hidratación parcial (client:visible para interactivos), optimización de imágenes (@astrojs/image, lazy loading), y accesibilidad (ARIA, keyboard nav). Integra tracking (Google Analytics para CTAs) y SEO (keywords como "Chilean lupins exporters Kosher Halal"). Prioriza MVP con fases para lanzamiento rápido.

El brandbook asegura escalabilidad para el sitio web, capturando leads B2B en Costa Este EE.UU., Mediterráneo y Medio Oriente mediante confianza y personalización regional.

---

#### 1. Estrategia y Gobernanza
##### 1.1 Propósito, Visión y Valores
- **Propósito**: Conectar la especialización chilena en lupinos premium y cerezas certificadas con mercados globales exigentes, garantizando trazabilidad, certificaciones religiosas y servicio personalizado.
- **Visión**: Ser el exportador boutique de confianza para clientes B2B en nichos selectos de la Costa Este de EE.UU., Mediterráneo y Medio Oriente, enfocados en calidad especializada y relaciones directas.
- **Valores** (Pilares de Marca):
  | Pilar | Descripción |
  |-------|-------------|
  | Certificaciones Especializadas (Kosher, Halal, NO-GMO) | Enfocadas en cerezas (Kosher Orthodox Union, Halal Centro Islámico de Chile, NO-GMO); SAG para todos los productos. |
  | Trazabilidad Total | Información clara de cada lote: origen, procesamiento, empaque y logística, con códigos QR para transparencia. |
  | Especialización Profunda (Expertos en lupinos) | 90%+ del negocio en lupinos premium con calibres 11-17mm y 270+ embarques exitosos a 17 países. |
  | Origen Confiable | Productos chilenos sustentables, limpios y de alta calidad agrícola del valle central. |
  | Servicio Ejecutivo Directo (Cristián y Pedro) | Enfoque B2B con contacto personalizado, cumplimiento logístico y relaciones a largo plazo. |
  | Sostenibilidad | Compromiso con prácticas ecológicas, reducción de huella de carbono y apoyo a productores locales.

**Guía para Contenidos**: Textos deben resaltar USPs reales (ej. "20+ años exportando lupinos"); bilingües, con microcopy clara para regiones (ej. tiempos de entrega a East Coast: 10-14 días). Evitar exageraciones; usar datos verificados.

##### 1.2 Arquitectura de Marca
- **Marca Principal**: AGRACOM INTERNACIONAL.
- **Tagline**: "Lupinos y Cerezas Premium desde Chile".
- **Personalidad de Marca**: Profesional y honesta (seriedad logística), cálida (origen agrícola), precisa (técnica y traceable). Posicionamiento como "especialista boutique", no gigante diversificado.

**Guía para Diseñador/Desarrollador**: Simplificar: Sin sub-marcas. Isotipo: Grano de lupino estilizado + hoja. Implementar tagline en Hero.astro y Navbar.

##### 1.3 Gobernanza y Versionado
- **Equipo Responsable**: Diseño, Marketing, Desarrollo Web, Sostenibilidad y Ejecutivos (Cristián Rodríguez, Pedro Mendive).
- **Proceso de Actualización**: Pull Requests en repositorio design-system; revisión por stakeholders B2B para honestidad.
- **Versionado**: SemVer (ej. v1.5.0); changelog con foco en alineación con realidad corporativa.

#### 2. Identidad Visual
##### 2.1 Logo
- **Variantes**: Color (principal), monocromo (gris oscuro sobre claro, blanco sobre oscuro).
- **Isotipo**: Grano de lupino estilizado + hoja; tipografía sans-serif moderna pero no tech.
- **Zona de Seguridad**: 1x altura de la “A” alrededor.
- **Usos Prohibidos**: Distorsiones, sombras, sobre fondos sin contraste.

**Guía para Contenidos**: Incluir tagline opcional en hero y footer.

##### 2.2 Paleta de Colores
Actualizada para diferenciación (azul confianza vs. verde de competidores) y resaltar certificaciones.

| Token CSS | Color | Uso |
|-----------|-------|-----|
| --color-primary | #1565C0 (Azul Confianza) | Elementos principales, headers, CTAs. |
| --color-secondary | #2E7D32 (Verde Chile) | Fondos suaves, acentos naturales. |
| --color-kosher | #8B4513 (Marrón Kosher) | Badges y acentos para certificaciones Kosher. |
| --color-halal | #2E8B57 (Verde Halal) | Badges y acentos para certificaciones Halal. |
| --color-accent | #FFA000 (Dorado Premium) | Detalles premium, etiquetas. |
| --color-neutral-900 | #212121 (Gris Oscuro) | Texto principal. |
| --color-neutral-100 | #FAFAFA (Blanco Claro) | Fondos. |

```css
:root {
  --color-primary: #1565C0;
  --color-secondary: #2E7D32;
  --color-kosher: #8B4513;
  --color-halal: #2E8B57;
  --color-accent: #FFA000;
  --color-neutral-900: #212121;
  --color-neutral-100: #FAFAFA;
}
```

**Guía para Diseñador**: Aplicar --color-kosher/halal en CertificationBadge.astro para resaltar.

##### 2.3 Tipografía
| Jerarquía | Fuente | Peso | Tamaño Móvil | Tamaño Escritorio |
|-----------|--------|------|--------------|-------------------|
| H1 | Poppins / Montserrat | 700 | 2rem | 3rem |
| H2 | Poppins / Montserrat | 600 | 1.5rem | 2.5rem |
| Body | Inter / Open Sans | 400 | 1rem | 1.125rem |
| Button/CTA | Poppins | 600 | 1rem | 1rem |

```css
:root {
  --font-heading: 'Poppins', 'Montserrat', sans-serif;
  --font-body: 'Inter', 'Open Sans', sans-serif;
  --fs-h1: clamp(2rem, 5vw, 3rem);
  --fs-body: 1rem;
  --lh-body: 1.6;
}
```

**Guía para Contenidos**: Soporte multilenguaje; usar bold para USPs como calibres.

#### 3. Espaciado, Grid y Elementos Gráficos
- **Grid**: 12 columnas, gutter 24px (escritorio), 16px (móvil).
- **Escala de Espaciado**:
```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 24px;
  --space-lg: 32px;
}
```
- **Elementos Gráficos**: Íconos lineales minimalistas (grano lupino, certificados); curvas suaves para trazabilidad.

**Guía para Desarrollador**: Usar grid en Layout.astro para responsive.

#### 4. Tono y Voz
| Tono | Aplicación |
|------|------------|
| Profesional | Fichas técnicas, cotizaciones. |
| Clara y Concisa | Títulos, beneficios (ej. calibres). |
| Natural y Confiable | Mensajes de origen, procesos. |
| Multicultural y Neutro | Adaptado a regiones; soporte ES/EN. |

**Guía para Contenidos**: Honestidad: "Especialistas boutique" en textos.

#### 5. Fotografía y Estilo Visual
- **Estilo General**: Auténtico, no stock; colores naturales; enfoque en etapas reales.
- **Imprescindibles**:
  1. Lupinos en calibres (macro).
  2. Cerezas deshidratadas Santina.
  3. Proceso de selección/calibrado.
  4. Certificados Kosher/Halal enmarcados.
  5. Fotos de Cristián Rodríguez y Pedro Mendive.
- **Evitar**: Productos no vendidos, genéricos, exceso lifestyle.
- **Formatos**: WebP/JPEG optimizados, ratio 3:2.

**Guía para Diseñador/Desarrollador**: Usar en ProcessingPlantGallery.astro y ProductCard; alt text descriptivos.

#### 6. Sistemas de Color de Estado y Motion
- **Estados**:
```css
:root {
  --color-success: #4CAF50;
  --color-error: #F44336;
  --color-warning: #FFA000;
  --color-info: #0288D1;
}
```
- **Motion**: 150ms ease-in (micro), 300ms ease-out (medio) para opacity/transform.

**Guía para Desarrollador**: Aplicar en QuoteForm.astro para feedback.

#### 7. Guía de Accesibilidad y Estrategias Digitales
- **Accesibilidad**: Contraste 4.5:1; alt text; focus outline (--color-accent); ARIA en tabs/forms; keyboard nav.
- **Estrategias**: SEO (keywords: "Chilean lupins Kosher", "dried cherries Halal exporters"); i18n con JSON; tracking CTAs; mobile-first.

**Guía para Desarrollador**: Hidratación: client:idle para tabs; A/B testing en Hero copy.

#### 8. Componentes Clave (Design System para Astro)
Todos los 17 componentes incluidos, con props para i18n, regionalización y accesibilidad. Cada README: Descripción, tipos, ejemplo, accesibilidad. Limitar ProductCard a 2 productos en MVP.

- **Layout.astro**: lang, region (estructura base, responsive).
- **LanguageSwitcher.astro**: options(['es', 'en']), currentLang, onChange (detección navegador).
- **RegionSelector.astro**: regions(['East Coast US', 'Mediterranean', 'Middle East']), currentRegion, onSelect (geolocalización).
- **Hero.astro**: title, subtitle, bgImage, primaryCTA ("Consulte disponibilidad"), secondaryCTA (hero con USPs reales).
- **ProductFilter.astro**: filters({type: ['Lupinos', 'Cerezas']}), onFilterChange (filtros simples para MVP).
- **ProductCard.astro**: image, title, description (calibres/USPs), actions ("Cotizar", "Ficha") – limitar a lupinos/cerezas.
- **AudienceTabs.astro**: items (tabs regionales con métricas reales), selectedKey, onChange.
- **CertificationBadge.astro**: logo, name, desc, tooltip, verified (badges con colores específicos).
- **ProcessingPlantGallery.astro**: images[{src, alt}], columns (galería proceso real).
- **CertificationSection.astro**: certifications[{logo, name, desc}] (solo verificadas).
- **RegionMap.astro**: geoData, highlights (mapa con tiempos reales).
- **QuoteForm.astro**: schema (empresa, región, producto, volumen, email, teléfono), onSubmit (integrado CRM).
- **ResourceDownload.astro**: resourceUrl, title, lang (PDF fichas reales).
- **TestimonialCarousel.astro**: testimonials[{quote, author, region}], autoPlay (testimonios verificados).
- **ContactCard.astro**: region, email, phone, hours, executive (Cristián/Pedro).
- **StickyCTA.astro**: text ("Consulte precios"), link, variant (sticky para conversión).
- **Footer.astro**: links, socials, langSwitcher (contactos directos).

**Priorización para MVP (Fase 1)**: Layout, Hero, ProductCard (2), QuoteForm, ContactCard, Footer. Fase 2: LanguageSwitcher, CertificationBadge, RegionSelector, TestimonialCarousel. Fase 3: Resto.

**Guía para Desarrollador**: Usar JSON para i18n; props para datos reales (ej. calibres en ProductCard).

#### 9. Activos, Aplicaciones y Mensajes Clave
- **Activos**: Figma library (logos, paleta, íconos); Brand Kit.zip con plantillas (emails, fichas PDF).
- **Aplicaciones**: Sitio web Astro (multilingüe); emails B2B; LinkedIn discreto; packaging con códigos QR.
- **Mensajes Clave (ES/EN)**:
  | Contexto | Español | Inglés |
  |----------|---------|--------|
  | Hero Principal | "20+ años exportando lupinos chilenos premium y cerezas deshidratadas certificadas" | "20+ years exporting premium Chilean lupins and certified dried cherries" |
  | USP Lupinos | "270+ embarques exitosos a 17 países. Calibres 11-17mm." | "270+ successful shipments to 17 countries. Sizes 11-17mm." |
  | USP Cerezas | "Únicas con certificación Kosher para Pascua y Halal" | "Unique with Kosher for Passover and Halal certification" |
  | Trust Signal | "Exportador activo SAG. Contacto directo con ejecutivos." | "Active SAG exporter. Direct executive contact." |
  | CTA Principal | "Consulte disponibilidad y precios" | "Inquire about availability and pricing" |

**Guía para Contenidos**: Usar en Hero y QuoteForm; bilingües, con datos reales para SEO.

#### 10. Dos & Don’ts Visuales
| ✅ Correcto | ❌ Incorrecto |
|-------------|---------------|
| Paleta diferenciada con acentos certificados. | Verdes dominantes como competidores. |
| Fotos auténticas de productos reales. | Stock o productos no exportados. |
| Mensajes honestos sobre escala boutique. | Tono de "líder gigante". |

#### 11. No es Agracom si...
- Se ve diversificado o inflado.
- No destaca certificaciones religiosas y calibres.
- Falta contacto personal o trazabilidad.
- No refleja especialización boutique.
- Contenidos no son honestos y verificados.

#### 12. Versionado y Roadmap
- **Branches**: main (stable), develop, feature/*.
- **Releases**: SemVer con changelog.
- **Roadmap Realista**:
  - Sprint 1 (Semanas 1-2): Landing estática ES; 2 ProductCards; QuoteForm básico; Contacto claro.
  - Sprint 2 (Semanas 3-4): EN; Certificaciones; WhatsApp; Analytics.
  - Sprint 3 (Mes 2): SEO; Testimoniales; Galería; A/B.
  - Sprint 4 (Mes 3+): Avanzados por métricas.

