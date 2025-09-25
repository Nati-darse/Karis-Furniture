export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  materials: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
    unit: string;
  };
  images: string[];
  featured: boolean;
  created_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  interest: string;
  project_description: string;
  budget: string;
  timeline: string;
  status: 'new' | 'contacted' | 'quoted' | 'closed';
  created_at: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  project: string;
  rating: number;
  comment: string;
  image_url: string;
  featured: boolean;
  approved: boolean;
  created_at: string;
}