export interface ContactSubmission {
  id: string
  name: string
  email: string
  phone?: string
  interest: string
  project_description: string
  budget: string
  timeline: string
  status: 'new' | 'contacted' | 'quoted' | 'closed'
  created_at: string
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // or number, depending on your use case
  image: File | null;
  date: string;
}

export interface Testimonial {
  id: number;
  clientName: string;
  product: string;
  response: string;
  image: File | null;
  date: string;
}