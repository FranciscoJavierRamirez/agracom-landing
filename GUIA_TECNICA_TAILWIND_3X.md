# Guía Técnica - Tailwind CSS 3.x para Agracom

**Versión:** 1.0.0  
**Fecha:** Enero 2025  
**Stack:** Astro 5.x + Tailwind CSS 3.4.0 + TypeScript

---

## 🎯 **Especificaciones del Proyecto**

### **Stack Tecnológico Confirmado**
- **Astro:** 5.12.8
- **Tailwind CSS:** 3.4.0 (NO v4.x)
- **TypeScript:** Tipado estricto
- **PostCSS:** Integrado con Astro

### **⚠️ IMPORTANTE: Solo Tailwind 3.x**
**Este proyecto usa EXCLUSIVAMENTE Tailwind CSS 3.x. NO usar sintaxis de Tailwind 4.x.**

---

## 📋 **Sintaxis Tailwind 3.x - Referencia Completa**

### **✅ Opacity Classes (Correcto en v3.x)**

#### **Background Opacity:**
```css
/* ✅ CORRECTO en Tailwind 3.x */
bg-primary bg-opacity-10        /* Background azul con 10% opacidad */
bg-success bg-opacity-20        /* Background verde con 20% opacidad */
bg-error bg-opacity-10          /* Background rojo con 10% opacidad */
bg-white bg-opacity-90          /* Background blanco con 90% opacidad */

/* ❌ INCORRECTO (Tailwind 4.x syntax) */
bg-primary/10                   /* NO FUNCIONA en v3.x */
bg-success/20                   /* NO FUNCIONA en v3.x */
```

#### **Border Opacity:**
```css
/* ✅ CORRECTO en Tailwind 3.x */
border-primary border-opacity-50     /* Border azul con 50% opacidad */
border-success border-opacity-20     /* Border verde con 20% opacidad */
border-error border-opacity-30       /* Border rojo con 30% opacidad */

/* ❌ INCORRECTO (Tailwind 4.x syntax) */
border-primary/50               /* NO FUNCIONA en v3.x */
border-success/20               /* NO FUNCIONA en v3.x */
```

#### **Ring Opacity:**
```css
/* ✅ CORRECTO en Tailwind 3.x */
focus:ring-2 focus:ring-primary focus:ring-opacity-20    /* Ring azul con opacidad */
focus:ring-2 focus:ring-error focus:ring-opacity-30      /* Ring rojo con opacidad */

/* ❌ INCORRECTO (Tailwind 4.x syntax) */
focus:ring-primary/20           /* NO FUNCIONA en v3.x */
focus:ring-error/30             /* NO FUNCIONA en v3.x */
```

#### **Text Opacity:**
```css
/* ✅ CORRECTO en Tailwind 3.x */
text-neutral-700 text-opacity-90       /* Texto gris con 90% opacidad */
text-white text-opacity-80              /* Texto blanco con 80% opacidad */

/* ❌ INCORRECTO (Tailwind 4.x syntax) */
text-neutral-700/90             /* NO FUNCIONA en v3.x */
text-white/80                   /* NO FUNCIONA en v3.x */
```

### **✅ Resize Classes**
```css
/* ✅ CORRECTO en Tailwind 3.x */
resize-y                        /* Resize vertical únicamente */
resize-x                        /* Resize horizontal únicamente */
resize                          /* Resize en ambas direcciones */
resize-none                     /* Sin resize */

/* ❌ INCORRECTO (Tailwind 4.x syntax) */
resize-vertical                 /* NO EXISTE en v3.x */
resize-horizontal               /* NO EXISTE en v3.x */
```

### **✅ Space Classes**
```css
/* ✅ CORRECTO en Tailwind 3.x */
space-y-4                       /* Espacio vertical entre elementos */
space-x-3                       /* Espacio horizontal entre elementos */
gap-4                          /* Gap en grid/flexbox */

/* Estas son iguales en ambas versiones */
```

---

## 🎨 **Sistema de Colores del Brandbook**

### **Variables CSS Customizadas**
```css
:root {
  /* Colores principales del brandbook */
  --color-primary: #1565C0;        /* Azul Confianza */
  --color-secondary: #2E7D32;      /* Verde Chile */
  --color-kosher: #8B4513;         /* Marrón Kosher */
  --color-halal: #2E8B57;          /* Verde Halal */
  --color-accent: #FFA000;         /* Dorado Premium */
  
  /* Neutrales */
  --color-neutral-50: #fafafa;
  --color-neutral-100: #f5f5f5;
  --color-neutral-200: #e5e5e5;
  --color-neutral-300: #d4d4d4;
  --color-neutral-400: #a3a3a3;
  --color-neutral-500: #737373;
  --color-neutral-600: #525252;
  --color-neutral-700: #404040;
  --color-neutral-800: #262626;
  --color-neutral-900: #171717;
  
  /* Estados */
  --color-success: #4CAF50;
  --color-error: #F44336;
  --color-warning: #FFA000;
  --color-info: #0288D1;
}
```

### **Uso de Colores en Clases**
```css
/* Colores principales */
bg-primary text-white               /* Fondo azul, texto blanco */
bg-secondary text-white             /* Fondo verde, texto blanco */
bg-accent text-neutral-900          /* Fondo dorado, texto oscuro */

/* Estados con opacidad (sintaxis 3.x) */
bg-success bg-opacity-10 text-success border-success border-opacity-20
bg-error bg-opacity-10 text-error border-error border-opacity-20
bg-warning bg-opacity-10 text-warning border-warning border-opacity-20
```

---

## 🧩 **Componentes CSS Estandarizados**

### **Layout Components**
```css
@layer components {
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  .section {
    @apply py-16 lg:py-24;
  }
  
  .hero-container {
    @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen;
  }
  
  .product-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
  }
}
```

### **Button Components**
```css
@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2;
    font-family: var(--font-heading);
  }
  
  .btn-primary {
    @apply bg-primary text-white hover:bg-blue-600 focus:ring-primary focus:ring-opacity-50;
    box-shadow: var(--shadow-sm);
  }
  
  .btn-primary:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  .btn-secondary {
    @apply bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary focus:ring-opacity-50;
  }
  
  .btn-accent {
    @apply bg-accent text-neutral-900 hover:bg-yellow-500 focus:ring-accent focus:ring-opacity-50;
    box-shadow: var(--shadow-sm);
  }
}
```

### **Form Components**
```css
@layer components {
  .form-label {
    @apply block text-sm font-semibold text-neutral-700 mb-2;
  }

  .form-input {
    @apply w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:ring-opacity-20 focus:border-primary transition-colors bg-white text-neutral-900 placeholder-neutral-500;
  }

  .form-select {
    @apply w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:ring-opacity-20 focus:border-primary transition-colors bg-white text-neutral-900;
  }

  .form-textarea {
    @apply w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:ring-opacity-20 focus:border-primary transition-colors bg-white text-neutral-900 placeholder-neutral-500 resize-y;
  }

  .form-input--error {
    @apply border-error focus:ring-error focus:ring-opacity-20 focus:border-error;
  }

  .form-error {
    @apply mt-1 text-sm text-error;
  }
}
```

### **Alert Components**
```css
@layer components {
  .alert {
    @apply flex items-center p-4 rounded-lg border;
  }

  .alert-success {
    @apply bg-success bg-opacity-10 text-success border-success border-opacity-20;
  }

  .alert-error {
    @apply bg-error bg-opacity-10 text-error border-error border-opacity-20;
  }

  .alert-warning {
    @apply bg-warning bg-opacity-10 text-warning border-warning border-opacity-20;
  }

  .alert-info {
    @apply bg-info bg-opacity-10 text-info border-info border-opacity-20;
  }
}
```

### **Certification Badges**
```css
@layer components {
  .certification-badge {
    @apply inline-flex items-center px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide;
  }

  .certification-badge--kosher {
    background-color: var(--color-kosher);
    color: white;
  }

  .certification-badge--halal {
    background-color: var(--color-halal);
    color: white;
  }

  .certification-badge--sag {
    background-color: var(--color-info);
    color: white;
  }
}
```

---

## 📱 **Responsive Design Patterns**

### **Breakpoints Tailwind 3.x**
```css
/* sm: 640px y superior */
sm:text-lg sm:px-6

/* md: 768px y superior */
md:grid-cols-2 md:text-xl

/* lg: 1024px y superior */
lg:grid-cols-3 lg:text-2xl

/* xl: 1280px y superior */
xl:grid-cols-4 xl:text-3xl

/* 2xl: 1536px y superior */
2xl:grid-cols-5 2xl:text-4xl
```

### **Patterns Comunes del Proyecto**
```css
/* Grid responsivo para productos */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6

/* Texto responsivo */
text-sm md:text-base lg:text-lg

/* Padding responsivo */
px-4 sm:px-6 lg:px-8

/* Espaciado vertical */
py-8 md:py-12 lg:py-16

/* Flex responsivo */
flex flex-col sm:flex-row gap-4
```

---

## 🎯 **Utilities Específicos del Proyecto**

### **Typography Classes**
```css
.text-h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.1;
  font-weight: 700;
  font-family: var(--font-heading);
}

.text-h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  line-height: 1.2;
  font-weight: 600;
  font-family: var(--font-heading);
}

.text-h3 {
  font-size: clamp(1.25rem, 3vw, 2rem);
  line-height: 1.3;
  font-weight: 600;
  font-family: var(--font-heading);
}
```

### **Spacing Utilities**
```css
/* Basados en las variables CSS del brandbook */
.space-xs { padding: var(--space-xs); }    /* 4px */
.space-sm { padding: var(--space-sm); }    /* 8px */
.space-md { padding: var(--space-md); }    /* 24px */
.space-lg { padding: var(--space-lg); }    /* 32px */
.space-xl { padding: var(--space-xl); }    /* 48px */
```

---

## 🔧 **Configuración tailwind.config.mjs**

### **Configuración Actual del Proyecto**
```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1565C0',
        secondary: '#2E7D32',
        kosher: '#8B4513',
        halal: '#2E8B57',
        accent: '#FFA000',
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FFA000',
        info: '#0288D1',
      },
      fontFamily: {
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': 'clamp(2rem, 5vw, 3.5rem)',
        'h2': 'clamp(1.5rem, 4vw, 2.5rem)',
        'h3': 'clamp(1.25rem, 3vw, 2rem)',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '24px',
        'lg': '32px',
        'xl': '48px',
      },
      boxShadow: {
        'sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}
```

---

## ✅ **Checklist de Desarrollo**

### **Antes de Escribir CSS:**
- [ ] ✅ Verificar que solo uso sintaxis Tailwind 3.x
- [ ] ✅ Usar `bg-opacity-*` en lugar de `/` para opacidad
- [ ] ✅ Usar `resize-y` en lugar de `resize-vertical`
- [ ] ✅ Usar colores del brandbook (variables CSS)
- [ ] ✅ Aplicar responsive design mobile-first

### **Para Nuevos Componentes:**
- [ ] ✅ Definir en `@layer components`
- [ ] ✅ Usar variables CSS del brandbook
- [ ] ✅ Incluir estados `:hover`, `:focus`, `:active`
- [ ] ✅ Agregar clases responsive
- [ ] ✅ Incluir accessibility (focus outlines)

### **Testing de CSS:**
- [ ] ✅ Verificar compilación sin errores PostCSS
- [ ] ✅ Probar en diferentes breakpoints
- [ ] ✅ Validar colores contra brandbook
- [ ] ✅ Confirmar accessibility (contraste, focus)

---

## 🐛 **Troubleshooting Común**

### **Error: "class does not exist"**
```bash
# ❌ Error típico
CSSSyntaxError: focus:ring-primary/20 class does not exist

# ✅ Solución
focus:ring-primary focus:ring-opacity-20
```

### **Error: "Expected ) but found"**
```css
/* ❌ Problema con sintaxis mezclada */
@apply bg-primary/10 text-white;

/* ✅ Solución */
@apply bg-primary bg-opacity-10 text-white;
```

### **Error: "@import must precede"**
```css
/* ❌ Orden incorrecto */
@tailwind base;
@import url('...');

/* ✅ Orden correcto */
@import url('...');
@tailwind base;
```

---

## 📚 **Referencias y Recursos**

### **Documentación Oficial**
- [Tailwind CSS 3.x Docs](https://tailwindcss.com/docs)
- [Opacity Utilities v3.x](https://tailwindcss.com/docs/background-color#changing-the-opacity)
- [Astro + Tailwind Integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/)

### **Herramientas de Desarrollo**
- **VS Code Extension:** Tailwind CSS IntelliSense
- **PostCSS:** Integrado con Astro automáticamente
- **Purge CSS:** Habilitado en producción

### **Documentos del Proyecto**
- **ESTADO_ACTUAL_PROYECTO.md** - Estado general
- **Brandbook_SitioWeb_2025_v3_OK.md** - Especificaciones diseño
- **SOLUCION_TAILWIND_CSS_SINTAXIS.md** - Soluciones problemas

---

## 🎉 **Resumen para Desarrolladores**

### **✅ LO QUE SÍ USAR:**
- `bg-primary bg-opacity-20` ✅
- `focus:ring-primary focus:ring-opacity-30` ✅
- `border-success border-opacity-20` ✅
- `resize-y` ✅
- Variables CSS del brandbook ✅

### **❌ LO QUE NO USAR:**
- `bg-primary/20` ❌
- `focus:ring-primary/30` ❌
- `border-success/20` ❌
- `resize-vertical` ❌
- Colores hardcodeados ❌

### **🎯 Objetivo:**
**CSS consistente, mantenible y 100% compatible con Tailwind 3.x para el proyecto Agracom.**

---

**Última actualización:** Enero 2025  
**Versión Tailwind:** 3.4.0 únicamente
