// Agracom Internacional S.A. - Global TypeScript Types
// Definiciones de tipos para toda la aplicación

// ========================================
// Localization Types
// ========================================

export type Locale = 'es' | 'en';

export type Region = 'us-east' | 'mediterranean' | 'middle-east';

export interface TranslationKey {
  [key: string]: string | TranslationKey;
}

export interface Translations {
  [locale: string]: TranslationKey;
}

// ========================================
// Component Types
// ========================================

export type ComponentVariant = 'default' | 'featured' | 'compact' | 'expanded';

export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: ComponentSize;
  external?: boolean;
  download?: boolean;
  onclick?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
  loading?: 'lazy' | 'eager';
}

// ========================================
// Product Types
// ========================================

export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  category: 'lupins' | 'cherries' | 'raisins';
  image?: string;
  images?: ImageAsset[];
  description: string;
  descriptionEn?: string;
  specifications: string[];
  specificationsEn?: string[];
  certifications: Certification[];
  benefits?: string[];
  benefitsEn?: string[];
  available: boolean;
  featured?: boolean;
  region?: Region;
  regions?: Region[];
  packaging?: {
    options: string[];
    customizable: boolean;
    special?: string;
  };
  nutritionalInfo?: {
    [key: string]: string;
  };
  origin?: string;
  harvestSeason?: string;
  shelfLife?: string;
  price?: {
    currency: string;
    value: number;
    unit: string;
  };
}

export interface Certification {
  id: string;
  name: string;
  nameEn?: string;
  logo?: string;
  icon?: string;
  description?: string;
  descriptionEn?: string;
  verified: boolean;
  type: 'kosher' | 'halal' | 'sag' | 'organic' | 'quality';
  authority?: string;
  authorityEn?: string;
  validUntil?: string;
  certNumber?: string;
  category?: 'religious' | 'governmental' | 'quality' | 'organic';
  color?: string;
  bgColor?: string;
  benefits?: string[];
  benefitsEn?: string[];
  products?: string[];
  regions?: Region[];
  renewalDate?: string;
}

// ========================================
// Form Types
// ========================================

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  productInterest?: 'lupins' | 'cherries' | 'raisins' | 'both' | 'other';
  volume?: '1-10' | '10-50' | '50-100' | '100+';
  timeline?: 'immediate' | 'short' | 'medium' | 'long';
  message: string;
  privacy: boolean;
  
  // Metadata
  formType?: 'contact' | 'quote' | 'inquiry';
  region?: Region;
  product?: string;
  timestamp?: string;
  language?: Locale;
  source?: string;
}

export interface FormFieldValidation {
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'checkbox' | 'radio';
  label: string;
  placeholder?: string;
  validation?: FormFieldValidation;
  options?: { value: string; label: string }[];
  defaultValue?: any;
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

// ========================================
// Testimonial Types
// ========================================

export interface Testimonial {
  id: string;
  region: Region;
  name: string;
  company: string;
  country: string;
  countryEn?: string;
  flag: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  quoteEn?: string;
  product: 'lupins' | 'cherries' | 'raisins' | 'both';
  verified: boolean;
  date: string;
  avatar?: ImageAsset;
  title?: string;
  titleEn?: string;
  industry?: string;
  companySize?: 'small' | 'medium' | 'large' | 'enterprise';
}

// ========================================
// Region Types
// ========================================

export interface RegionData {
  id: Region;
  name: string;
  nameEn: string;
  flag: string;
  icon?: string;
  color: string;
  bgGradient: string;
  description: string;
  descriptionEn: string;
  
  // Market information
  marketSize: string;
  growthRate: string;
  keyPorts: string[];
  keyPortsEn: string[];
  
  // Shipping details
  shipping: {
    transit: string;
    transitUnit: string;
    frequency: string;
    method: string;
    incoterm: string;
    cost?: string;
  };
  
  // Product preferences
  products: {
    lupins: ProductRegionInfo;
    cherries: ProductRegionInfo;
    raisins: ProductRegionInfo;
  };
  
  // Regional executive
  executive: {
    name: string;
    title: string;
    email: string;
    phone: string;
    languages: string[];
    experience: string;
    photo?: ImageAsset;
  };
  
  // Market insights
  insights: Array<{
    title: string;
    value: string;
    desc: string;
    trend?: 'up' | 'down' | 'stable';
  }>;
  
  clients: number;
  established: number;
  featured: boolean;
}

export interface ProductRegionInfo {
  demand: 'low' | 'medium' | 'high' | 'very-high';
  calibers?: string[];
  packaging: string[];
  certifications: string[];
  seasonality: string;
  priceRange?: string;
  marketTrends?: string[];
}

// ========================================
// Navigation Types
// ========================================

export interface NavigationItem {
  key: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
  icon?: string;
  badge?: string;
  description?: string;
}

export interface NavigationSection {
  title: string;
  links: NavigationItem[];
}

// ========================================
// Analytics Types
// ========================================

export interface AnalyticsEvent {
  name: string;
  category: string;
  label?: string;
  value?: number;
  parameters?: Record<string, any>;
}

export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fcp?: number; // First Contentful Paint
}

// ========================================
// API Types
// ========================================

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  statusCode?: number;
  timestamp?: string;
}

export interface PaginatedResponse<T = any> extends APIResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// ========================================
// SEO Types
// ========================================

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonicalURL?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  structuredData?: Record<string, any>;
  robots?: string;
  lang: Locale;
  alternateLanguages?: Array<{
    lang: Locale;
    url: string;
  }>;
}

// ========================================
// Utility Types
// ========================================

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// ========================================
// Error Types
// ========================================

export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp?: string;
  stack?: string;
}

export interface ValidationError extends AppError {
  field?: string;
  value?: any;
  constraint?: string;
}

// ========================================
// Configuration Types
// ========================================

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  logo: string;
  favicon: string;
  defaultLocale: Locale;
  supportedLocales: Locale[];
  defaultRegion?: Region;
  supportedRegions: Region[];
  
  // Contact information
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      country: string;
      postalCode?: string;
    };
  };
  
  // Social media
  social: {
    linkedin?: string;
    email?: string;
  };
  
  // Analytics
  analytics: {
    googleAnalyticsId?: string;
    enablePartytown?: boolean;
    enableDebug?: boolean;
  };
  
  // Features
  features: {
    newsletter?: boolean;
    testimonials?: boolean;
    regions?: boolean;
    certifications?: boolean;
    contactForm?: boolean;
  };
}

// ========================================
// Theme Types
// ========================================

export interface ThemeColors {
  primary: string;
  secondary: string;
  kosher: string;
  halal: string;
  accent: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}

export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
}

export interface ThemeTypography {
  fontFamily: {
    heading: string[];
    body: string[];
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
  };
  lineHeight: {
    none: string;
    tight: string;
    snug: string;
    normal: string;
    relaxed: string;
    loose: string;
  };
}

// ========================================
// Export all types for easy importing
// ========================================

export type {
  // Re-export commonly used types
  Locale as Language,
  Region as MarketRegion,
  Product as ProductData,
  Certification as CertificationData,
  Testimonial as TestimonialData,
  RegionData as MarketData,
  ContactFormData as FormData,
  AnalyticsEvent as TrackingEvent,
  SEOMetadata as PageMetadata,
  SiteConfig as AppConfig
};