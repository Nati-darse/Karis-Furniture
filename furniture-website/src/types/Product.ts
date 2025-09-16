export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;
  images: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  materials: string[];
  featured?: boolean;
}

export interface ProductFilters {
  category: string;
  searchQuery: string;
}