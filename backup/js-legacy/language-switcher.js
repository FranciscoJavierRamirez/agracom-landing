// Sistema de cambio de idioma dinámico para Agracom Internacional
(function() {
  'use strict';
  
  console.log('Language switcher script loaded');
  
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
      hero: {
        title: 'Lupinos Premium y Cerezas Certificadas',
        subtitle: 'Desde Chile al Mundo',
        description: 'Exportadores especializados en lupinos premium calibres 11-17mm y cerezas deshidratadas Santina con certificaciones Kosher y Halal. 20+ años de experiencia.'
      },
      products: {
        title: 'Nuestros Productos Especializados',
        description: 'Especialistas boutique en lupinos premium y cerezas deshidratadas certificadas, con 20+ años de experiencia exportando a mercados exigentes.'
      },
      cta: {
        inquire: 'Consultar disponibilidad'
      }
    },
    en: {
      navigation: {
        products: 'Products',
        certifications: 'Certifications',
        contact: 'Contact',
        regions: 'Regions'
      },
      hero: {
        title: 'Premium Lupins and Certified Cherries',
        subtitle: 'From Chile to the World',
        description: 'Specialized exporters of premium lupins 11-17mm caliber and Santina dried cherries with Kosher and Halal certifications. 20+ years of experience.'
      },
      products: {
        title: 'Our Specialized Products',
        description: 'Boutique specialists in premium lupins and certified dried cherries, with 20+ years of experience exporting to demanding markets.'
      },
      cta: {
        inquire: 'Inquire about availability'
      }
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
    
    // Siempre aplicar el idioma inicial, sea cual sea
    changeLanguage(initialLang);
    
    
    // Store preference
    localStorage.setItem('preferred-language', initialLang);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initializeLanguage();
      
      // Set up language switcher buttons
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
  } else {
    // DOM already loaded
    initializeLanguage();
    
    // Set up language switcher buttons
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
  }
})();
