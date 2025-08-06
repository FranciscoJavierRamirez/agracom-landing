# Documentos para Agracom Internacional S.A.

## Documentos PDF Necesarios

### Fichas Técnicas de Productos

#### Lupinos Premium
- **agracom-ficha-tecnica-lupinos-es.pdf**
  - Especificaciones técnicas completas
  - Información nutricional
  - Métodos de procesamiento
  - Certificaciones y estándares
  - Condiciones de almacenamiento
  - Información de empaque disponible

- **agracom-technical-sheet-lupins-en.pdf**
  - Versión en inglés de la ficha técnica
  - Misma información que la versión en español
  - Adaptada a mercados internacionales

#### Cerezas Santina Deshidratadas
- **agracom-ficha-tecnica-cerezas-es.pdf**
  - Especificaciones de variedad Santina
  - Proceso de deshidratación
  - Certificaciones religiosas (Kosher/Halal)
  - Análisis nutricional
  - Disponibilidad estacional

- **agracom-technical-sheet-cherries-en.pdf**
  - Versión en inglés
  - Enfoque en certificaciones religiosas
  - Información para mercados Kosher y Halal

### Certificaciones

#### Certificados Kosher
- **agracom-certificado-kosher-orthodox-union.pdf**
  - Certificado Orthodox Union para cerezas
  - Válido para Pascua (Passover)
  - Renovación anual

#### Certificados Halal
- **agracom-certificado-halal-centro-islamico.pdf**
  - Certificado Centro Islámico de Chile
  - Válido para cerezas deshidratadas
  - Reconocimiento internacional

#### Certificados SAG
- **agracom-certificado-sag-exportador.pdf**
  - Certificado de exportador autorizado SAG
  - Válido para lupinos y cerezas
  - Renovación periódica

### Brochures Corporativos

#### Brochure Principal
- **agracom-brochure-corporativo-es.pdf**
  - Presentación completa de la empresa
  - Historia y experiencia (20+ años)
  - Productos y servicios
  - Mercados atendidos
  - Información de contacto por región

- **agracom-corporate-brochure-en.pdf**
  - Versión en inglés
  - Adaptado para mercados internacionales
  - Énfasis en certificaciones y calidad

#### Brochures por Región
- **agracom-brochure-costa-este-eeuu.pdf**
  - Información específica para Costa Este EE.UU.
  - Tiempos de entrega: 10-14 días
  - Contacto: Cristián Rodríguez
  - Documentación FDA

- **agracom-brochure-mediterraneo.pdf**
  - Información para región Mediterránea
  - Tiempos de entrega: 15-20 días
  - Contacto: Pedro Mendive
  - Certificaciones UE

- **agracom-brochure-medio-oriente.pdf**
  - Información para Medio Oriente
  - Énfasis en certificaciones religiosas
  - Tiempos de entrega: 18-25 días
  - Seguridad de cadena de suministro

### Análisis y Reportes

#### Análisis de Laboratorio
- **agracom-analisis-lupinos-laboratorio.pdf**
  - Análisis físico-químico
  - Análisis microbiológico
  - Análisis de metales pesados
  - Análisis de pesticidas
  - Certificación de laboratorio acreditado

- **agracom-analisis-cerezas-laboratorio.pdf**
  - Análisis específicos para cerezas
  - Parámetros de calidad
  - Certificación religiosa de ingredientes

#### Casos de Estudio
- **agracom-casos-exito-exportacion.pdf**
  - Casos exitosos de exportación
  - Testimonios de clientes
  - Métricas de satisfacción
  - Fotos de embarques

### Documentos Logísticos

#### Información de Empaque
- **agracom-opciones-empaque-exportacion.pdf**
  - Opciones de empaque disponibles
  - Personalización según mercado
  - Códigos QR para trazabilidad
  - Etiquetado multiidioma

#### Términos Comerciales
- **agracom-terminos-comerciales.pdf**
  - Condiciones de venta
  - Términos de pago
  - Política de calidad
  - Garantías y reclamos

### Lista de Precios (Confidencial)
- **agracom-lista-precios-confidencial.pdf**
  - Precios por volumen
  - Descuentos por temporada
  - Términos especiales por región
  - Válido por período específico

## Especificaciones de Documentos

### Formato y Diseño
- **Formato:** PDF/A para archivo a largo plazo
- **Tamaño:** A4 (210x297mm)
- **Fuentes:** Poppins para títulos, Inter para texto
- **Colores:** Paleta del brandbook (Azul #1565C0, Verde #2E7D32)
- **Logo:** Incluir en header de cada página
- **Pie de página:** Información de contacto y número de página

### Contenido Multiidioma
- Versiones completas en español e inglés
- Adaptación cultural para cada mercado
- Unidades de medida según región (métrico/imperial)
- Monedas locales cuando sea relevante

### Metadatos PDF
- Título descriptivo
- Autor: Agracom Internacional S.A.
- Palabras clave: lupinos, cerezas, exportación, Chile, certificaciones
- Fecha de creación y modificación

### Integración Web
Los documentos se integrarán con componente de descarga:

```astro
<ResourceDownload
  title="Ficha Técnica Lupinos Premium"
  description="Especificaciones completas y certificaciones"
  url="/documents/agracom-ficha-tecnica-lupinos-es.pdf"
  type="pdf"
  size="2.1 MB"
  locale="es"
  category="technical-sheet"
/>
```

### Control de Acceso
- Documentos públicos: Fichas técnicas, brochures
- Documentos con registro: Lista de precios, casos de estudio
- Documentos confidenciales: Contratos, análisis detallados

### Actualización
- Revisión trimestral de contenido
- Actualización anual de certificaciones
- Versionado con fecha en metadatos
- Notificación automática de nuevas versiones