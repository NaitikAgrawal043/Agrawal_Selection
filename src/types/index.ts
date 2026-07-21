export type CategoryType = 
  | 'All' 
  | 'Men' 
  | 'Women' 
  | 'Kids' 
  | 'Festive' 
  | 'Bridal' 
  | 'Ethnic Wear' 
  | 'Western Wear' 
  | 'Casual Wear' 
  | 'Formal Wear' 
  | 'Wedding Collection' 
  | 'Party Wear' 
  | 'Winter Collection' 
  | 'Accessories';

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  subcategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  galleryImages?: string[];
  tag?: 'New' | 'Bestseller' | 'Trending' | 'Festive Special' | 'Bridal Luxury' | 'Exclusive';
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  fabric: string;
  inStock: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
  purchasedItem?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface BannerOffer {
  id: string;
  title: string;
  subtitle: string;
  discountBadge: string;
  code?: string;
  validUntil: string;
  bgGradient: string;
  ctaText: string;
  active: boolean;
}

export interface OccasionItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  tagline: string;
}

export interface SchoolItem {
  id: string;
  name: string;
  location: string;
  badge?: string;
}

