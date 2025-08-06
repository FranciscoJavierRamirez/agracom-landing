**Propuesta Final Actualizada de la Landing Page Funcional para Agracom Internacional S.A.**

Esta propuesta actualizada de la landing page funcional para Agracom se alinea perfectamente con el brandbook definitivo (v1.5.0), enfocada en su realidad como exportador boutique especializado en lupinos premium (90%+ del negocio, calibres 11-17mm) y cerezas deshidratadas Santina certificadas. Pensada para **empresas B2B en la Costa Este de EE.UU., Mediterráneo y Medio Oriente**, en **Español e Inglés**, e implementada en **Astro**. Se prioriza honestidad, simplicidad y diferenciadores reales (certificaciones religiosas, trazabilidad, servicio ejecutivo directo con Cristián Rodríguez y Pedro Mendive). Incluyo rationale y mejores prácticas con citas actualizadas a fuentes vigentes en 2025.

---
## 1. Objetivos clave de la landing page
* **Captar leads B2B** (empresas compradoras) de las regiones objetivo mediante “Inquire about availability and pricing” y descarga de fichas técnicas.
* **Mostrar el portafolio de productos** (lupinos y cerezas deshidratadas Santina) con imágenes auténticas de alta calidad y claridad de valor (especialización, trazabilidad y regiones servidas).
* **Generar confianza** con certificaciones verificadas (SAG, Kosher, Halal, NO-GMO), testimonios, presencia regional y claridad logística.
* **Soportar dos idiomas** sin comprometer consistencia ni SEO.
* **Segmentar / personalizar** sutilmente por región (Costa Este EE.UU., Mediterráneo, Medio Oriente) para adaptar mensajes y contactos.
(Este enfoque se alinea con principios de landing pages B2B de conversión alta: claridad en propuesta, CTAs contundentes y segmentación de audiencia)
.

---
## 2. Público objetivo y consideraciones regionales
* **Costa Este de EE.UU.:** Compradores B2B valoran claridad, datos precisos (volúmenes, tiempos de entrega como 10-14 días) y pruebas sociales. Se recomiendan cifras exactas para credibilidad
.
* **Mediterráneo:** Mercados con tradición y exigencia de calidad; comunicar origen y frescura con imágenes auténticas de agro-origen.
* **Medio Oriente:** Alta sensibilidad a la confianza y seguridad; exhibir certificaciones claramente (Halal, Kosher) y adaptar símbolos / lenguaje culturalmente
.
Todos toman decisiones calculadas, por lo que la landing debe combinar emoción (origen chileno, especialización) con lógica (especificaciones, logística, contacto directo)
.

---
## 3. Arquitectura de la página (orden de secciones)
1. **Header fijo / sticky**
   * Logo Agracom con tagline "Lupinos y Cerezas Premium desde Chile".
   * `LanguageSwitcher` (ES / EN)
.
   * `RegionSelector` (geolocalización + opción manual: East Coast US / Mediterranean / Middle East).
2. **Hero / Propuesta de valor**
   * Títulos contundentes en ES/EN.
   * Subtítulo con regiones servidas y USPs reales (ej. "270+ embarques a 17 países").
   * Imagen hero auténtica de alta resolución (lupinos en calibres o cerezas Santina)
.
   * CTA principal “Consulte disponibilidad y precios” / “Inquire about availability and pricing”.
   * CTA secundaria “Descargar ficha técnica” / “Download Technical Sheet”.
   * Badge rápido de certificaciones verificadas (Kosher · Halal · SAG · Trazabilidad)
.
3. **Resumen de productos**
   * Filtros simples: Lupinos / Cerezas (sin segmentación natural/tiernizado para reflejar especialización boutique).
   * `ProductCard`: foto auténtica, nombre, descriptor breve (ej. calibres 11-17mm para lupinos), botones “Cotizar” y “Ficha técnica”
.
   * Microcopy de beneficios (p. ej. trazabilidad por lote, certificaciones religiosas para cerezas).
4. **Valor diferencial / ¿Por qué Agracom?**
   * Pilares: Origen chileno, Certificaciones especializadas, Especialización profunda, Logística optimizada, Servicio ejecutivo directo.
   * Métricas clave reales (p. ej. “270+ embarques a 17 países”, “Entrega a East Coast: 10-14 días”)
.
5. **Segmentación por región**
   * `AudienceTabs` con bloques para East Coast US, Mediterráneo y Medio Oriente.
     * East Coast US: tiempos reales, contacto local, testimonio.
     * Mediterráneo: adaptación de empaques, certificaciones.
     * Medio Oriente: Halal/Kosher, seguridad de supply chain
.
6. **Confianza / Credenciales**
   * `CertificationBadge` (Kosher Orthodox Union, Halal Centro Islámico de Chile, SAG, NO-GMO) con tooltip explicativo
.
   * Testimonios breves (en `TestimonialCarousel`).
   * “Cómo trabajamos”: flujo orden → procesamiento → envío, con fotos reales.
7. **Galería de planta de procesamiento**
   * Título: “Nuestra Planta en Acción” / “Our Processing Plant in Action”.
   * `ProcessingPlantGallery` (carrusel/grid de fotos: selección, inspección, empaquetado de lupinos/cerezas).
   * Pies de foto bilingües explicando cada etapa.
8. **Sección de certificaciones**
   * Título: “Certificaciones y Estándares” / “Certifications & Standards”.
   * `CertificationSection` con badges y descripciones cortas en ES/EN (solo verificadas: SAG, Kosher, Halal, NO-GMO).
9. **Logística & Cobertura**
   * `RegionMap` interactivo con zonas y tiempos de tránsito estimados reales.
   * Contacto dinámico según región (incluyendo ejecutivos Cristián/Pedro en `ContactCard`).
10. **Formulario “Inquire about Availability”**
    * Campos: Empresa, Región, Producto (Lupinos/Cerezas), Volumen, Email, Teléfono, Comentarios.
    * Auto-detección de región.
    * Indicador de privacidad y seguridad
.
11. **Recursos descargables**
    * PDF bilingüe: ficha de productos, especificaciones, logística (en `ResourceDownload`).
    * Opción “Solicita muestra”.
12. **Footer**
    * Enlaces institucionales, `LanguageSwitcher`, suscripción ligera.
    * Contacto por región y horario (con `ContactCard`)
.

---
## 4. Componentes Astro sugeridos
```bash
src/components/
  Layout.astro
  LanguageSwitcher.astro
  RegionSelector.astro
  Hero.astro
  ProductFilter.astro
  ProductCard.astro
  AudienceTabs.astro
  CertificationBadge.astro
  ProcessingPlantGallery.astro
  CertificationSection.astro
  RegionMap.astro
  QuoteForm.astro
  ResourceDownload.astro
  TestimonialCarousel.astro
  ContactCard.astro
  StickyCTA.astro
  Footer.astro
```

---
## 5. Estrategia multilenguaje (i18n) y navegación
* Prefijos `/es`, `/en` o `/:lang/` en Astro, misma estructura para ambos idiomas

.
* Detectar idioma del navegador y ofrecer switch claro
.
* Traducir texto, unidades y microcopy según región (“Consulte disponibilidad y precios” vs “Inquire about availability and pricing”).

---
## 6. Consideraciones visuales y de contenido
* **Fotografía auténtica:** Lupinos en calibres, cerezas Santina en campo, empaque y certificados enmarcados; incluir ejecutivos Cristián/Pedro. Evitar stock o productos no exportados
.
* **Claridad y valor:** Cifras precisas (“270+ embarques a 17 países”, “Certificaciones Kosher/Halal para cerezas”)
.
* **Jerarquía visual:** Hero → productos → confianza → CTA
.
* **Mobile-first:** Optimización para celular (responsive)
.

---
## 7. Implementación técnica en Astro
* **Imágenes optimizadas:** `@astrojs/image` o `srcset` + lazy loading
.
* **Hidratación parcial:** `client:idle` / `client:visible` en componentes interactivos.
* **i18n:** JSON de strings + helper para props.
* **Tracking:** Eventos CTAs, UTM capture, A/B testing de hero copy
.
* **Accesibilidad:** Alt texts, labels, contraste, navegación teclado.

---
## 8. Conversiones y métricas sugeridas
* Tasa de conversión “Inquire about Availability”.
* Descargas de ficha técnica.
* Tiempo en página por región.
* Abandono del formulario.
* CTR de CTAs vs scroll depth
.

---
## 9. Ejemplo breve de copia
**Hero:**
* ES: “20+ años exportando lupinos chilenos premium y cerezas deshidratadas certificadas. Entregas confiables a EE.UU., Mediterráneo y Medio Oriente.”
* EN: “20+ years exporting premium Chilean lupins and certified dried cherries. Reliable delivery to the US East Coast, Mediterranean & Middle East.”
**CTA:** “Consulte disponibilidad y precios” / “Inquire about availability and pricing”
**Trust line:** “Certificaciones: Kosher · Halal · SAG · Trazabilidad completa en cada lote.” / “Certifications: Kosher · Halal · SAG · Full batch traceability.”

---
## 10. Flujo MVP de lanzamiento
1. Hero con UVP y formulario corto.
2. Showcase de 2 productos principales (lupinos y cerezas).
3. Badges de confianza + regiones.
4. Galería de planta + sección de certificaciones.
5. Formulario “Inquire about Availability”.
6. Footer multilenguaje.
(Así se lanza rápido y luego se añaden secciones profundas: casos de estudio, portal B2B, etc.)

.

---
## 11. Siguientes pasos recomendados
1. Definir contenido bilingüe e i18n.
2. Preparar fotografía y assets siguiendo guidelines
.
3. Construir sistema de componentes en Astro.
4. Integrar formularios con CRM y tracking.
5. Test regional y optimización continua

.

---