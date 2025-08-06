// Agracom Internacional S.A. - TypeScript Type Definitions
// Global types used across the application

export type Locale = 'es' | 'en';

export type Region = 'us-east' | 'mediterranean' | 'middle-east';

export interface TranslationKey {
  [key: string]: string | TranslationKey;
}

export interface Translations {
  [locale: string]: TranslationKey;
}

// Product Types
export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  specifications: string[];
  certifications: Certification[];
  region?: Region;
  category: 'lupins' | 'cherries';
  available: boolean;
}

// Certification Types
export interface Certification {
  id: string;
  name: string;
  logo: string;
  description: string;
  verified: boolean;
  type: 'kosher' | 'halal' | 'sag' | 'organic' | 'other';
  tooltip?: string;
}

// Contact Types
export interface Contact {
  executive: string;
  email: string;
  phone: string;
  region: Region;
  hours?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  region: Region;
  avatar?: string;
  verified: boolean;
}

// Form Types
export interface QuoteFormData {
  company: string;
  region: Region;
  product: string;
  volume: string;
  email: string;
  phone: string;
  comments?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  region?: Region;
  message: string;
}

// Navigation Types
export interface NavigationItem {
  key: string;
  href: string;
  external?: boolean;
}

// SEO Types
export interface SEOProps {
  title: string;
  description?: string;
  canonicalURL?: string;
  image?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Component Props Types
export interface BaseComponentProps {
  class?: string;
  'data-testid'?: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'accent';
  external?: boolean;
  onClick?: () => void;
}

// Analytics Types
export interface AnalyticsEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  region?: Region;
  locale?: Locale;
}

// Image Types
export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
  loading?: 'eager' | 'lazy';
}

// Gallery Types
export interface GalleryImage extends ImageAsset {
  stage?: string;
  category?: string;
}

// Region Data Types
export interface RegionData {
  id: Region;
  title: string;
  description: string;
  deliveryTime: string;
  contact: Contact;
  features: string[];
  coordinates?: [number, number];
}

// Newsletter Types
export interface NewsletterSubscription {
  email: string;
  region?: Region;
  interests?: string[];
  locale: Locale;
}

// Resource Types
export interface DownloadableResource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'pdf' | 'doc' | 'xls' | 'image';
  size?: string;
  locale: Locale;
  category?: 'technical-sheet' | 'certification' | 'brochure' | 'manual';
}

// Error Types
export interface APIError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, any>;
}

// Success Response Types
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: APIError;
  message?: string;
}

// Component Variants
export type ComponentSize = 'sm' | 'md' | 'lg' | 'xl';
export type ComponentVariant = 'default' | 'featured' | 'compact' | 'expanded';
export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'link';

// Layout Types
export interface LayoutProps {
  title: string;
  description?: string;
  lang: Locale;
  region?: Region;
  canonicalURL?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Theme Types
export interface ThemeConfig {
  colors: Record<string, string>;
  fonts: Record<string, string>;
  spacing: Record<string, string>;
  breakpoints: Record<string, string>;
}