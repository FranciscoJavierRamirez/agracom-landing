# Certificaciones - Estructura de Datos

Este directorio contiene los datos de certificaciones estructurados en archivos JSON para soporte multiidioma.

## Estructura de Archivos

```
src/data/certifications/
├── README.md           # Este archivo
├── es.json            # Datos en español
└── en.json            # Datos en inglés
```

## Estructura del JSON

Cada archivo JSON contiene la siguiente estructura:

### Sección Principal
```json
{
  "section": {
    "title": "Título principal de la sección",
    "subtitle": "Subtítulo descriptivo",
    "stats": {
      "certificates": "Texto para estadísticas de certificados",
      "compliance": "Texto para cumplimiento",
      "experience": "Texto para años de experiencia"
    },
    "featured_title": "Título para certificaciones destacadas",
    "additional_title": "Título para certificaciones adicionales",
    "cta": {
      "main_title": "Título principal del CTA",
      "main_subtitle": "Subtítulo del CTA principal",
      "request_btn": "Texto del botón de solicitud",
      "call_btn": "Texto del botón de llamada",
      "specific_title": "Título para certificaciones específicas",
      "specific_subtitle": "Subtítulo para certificaciones específicas",
      "contact_btn": "Texto botón consultar",
      "view_btn": "Texto botón ver certificaciones"
    }
  }
}
```

### Categorías
```json
{
  "categories": {
    "religious": "Certificaciones Religiosas",
    "governmental": "Certificaciones Gubernamentales",
    "quality": "Certificaciones de Calidad",
    "organic": "Certificaciones Orgánicas"
  }
}
```

### Productos
```json
{
  "products": {
    "lupins": "Lupinos",
    "cherries": "Cerezas",
    "raisins": "Pasas"
  }
}
```

### Textos Comunes
```json
{
  "common": {
    "verified": "Verificado",
    "benefits": "Beneficios:",
    "products": "Productos:",
    "valid_until": "Válido hasta:",
    "certificate_number": "Número de Certificado:",
    "visit_official": "Visitar sitio oficial",
    "request_certificate": "Solicitar Certificado",
    "request_info": "Consultar información"
  }
}
```

### Certificados
```json
{
  "certificates": [
    {
      "id": "identificador-unico",
      "category": "religious|governmental|quality|organic",
      "name": "Nombre del certificado",
      "authority": "Autoridad certificadora",
      "authority_url": "https://sitio-autoridad.com",
      "logo": "/images/cert-logo.png",
      "icon": "🏆",
      "color": "primary|secondary|accent|success|info",
      "bg_color": "from-color/10 to-color/20",
      "description": "Descripción detallada del certificado",
      "benefits": [
        "Beneficio 1",
        "Beneficio 2",
        "Beneficio 3"
      ],
      "products": ["lupins", "cherries", "raisins"],
      "regions": ["us-east", "mediterranean", "middle-east"],
      "valid_until": "YYYY-MM-DD",
      "cert_number": "NUMERO-CERTIFICADO",
      "featured": true|false,
      "verified": true|false,
      "renewal_date": "YYYY-MM-DD"
    }
  ]
}
```

## Uso en Componentes

### Componente Principal
El componente `Certifications.astro` carga automáticamente los datos según el idioma:

```astro
// Carga automática basada en el idioma
const certificationsDataModule = await import(`../../data/certifications/${lang}.json`);
const certificationsData = certificationsDataModule.default;
```

### Componente de Tarjeta
El componente `CertificationCard.astro` es reutilizable y acepta:

```astro
<CertificationCard
  certificate={cert}
  lang={lang}
  variant="featured|compact"
  products={products}
  common={common}
/>
```

## Agregar Nuevos Certificados

1. **Editar ambos archivos JSON** (`es.json` y `en.json`)
2. **Agregar el nuevo certificado** al array `certificates`
3. **Mantener la misma estructura** en ambos idiomas
4. **Usar ID únicos** para cada certificado
5. **Actualizar categorías** si es necesario

## Ejemplo de Nuevo Certificado

```json
{
  "id": "nuevo-certificado",
  "category": "quality",
  "name": "Nuevo Certificado de Calidad",
  "authority": "Autoridad Certificadora",
  "authority_url": "https://ejemplo.com",
  "logo": "/images/cert-nuevo.png",
  "icon": "⭐",
  "color": "info",
  "bg_color": "from-info/10 to-info/20",
  "description": "Descripción del nuevo certificado...",
  "benefits": [
    "Beneficio importante 1",
    "Beneficio importante 2",
    "Beneficio importante 3"
  ],
  "products": ["lupins"],
  "regions": ["us-east"],
  "valid_until": "2025-12-31",
  "cert_number": "NUEVO-CERT-2024",
  "featured": false,
  "verified": true,
  "renewal_date": "2025-10-01"
}
```

## Ventajas de esta Estructura

✅ **Contenido Dinámico**: Fácil actualización sin tocar código
✅ **Multiidioma**: Soporte completo para español e inglés
✅ **Componentización**: Componente reutilizable de tarjetas
✅ **Mantenibilidad**: Estructura clara y bien documentada
✅ **Escalabilidad**: Fácil agregar nuevos idiomas o certificados
✅ **Consistencia**: Estructura homogénea entre idiomas
