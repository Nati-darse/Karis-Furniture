import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    title: 'Walnut River Table',
    category: 'Dining',
    description: 'Handcrafted epoxy river table with live edge walnut. A stunning centerpiece for any dining room.',
    price: 4200,
    images: ['/images/int 6.jpg', '/images/int 2.jpg'],
    dimensions: { width: 96, height: 32, depth: 42 },
    materials: ['Walnut', 'Epoxy Resin'],
    featured: true
  },
  {
    id: '2',
    title: 'Mid-Century Lounge Chair',
    category: 'Seating',
    description: 'Elegant oak lounge chair with tapered legs and leather upholstery. Perfect for reading nooks.',
    price: 850,
    images: ['/images/int 2.jpg'],
    dimensions: { width: 28, height: 32, depth: 30 },
    materials: ['Oak', 'Leather'],
    featured: true
  },
  {
    id: '3',
    title: 'Modern Bookshelf',
    category: 'Storage',
    description: 'Floor-to-ceiling custom built walnut bookshelf with adjustable shelves.',
    price: 2200,
    images: ['/images/int 9.jpg'],
    dimensions: { width: 72, height: 84, depth: 14 },
    materials: ['Walnut', 'Steel'],
    featured: false
  },
  {
    id: '4',
    title: 'Outdoor Teak Bench',
    category: 'Outdoor',
    description: 'Weather-resistant teak bench perfect for gardens and patios. Ages beautifully.',
    price: 650,
    images: ['/images/int 6.jpg'],
    dimensions: { width: 48, height: 18, depth: 18 },
    materials: ['Teak'],
    featured: false
  },
  {
    id: '5',
    title: 'Scandinavian Dining Table',
    category: 'Dining',
    description: 'Minimalist beechwood dining table with clean lines and sturdy construction.',
    price: 1800,
    images: ['/images/int 2.jpg'],
    dimensions: { width: 72, height: 30, depth: 36 },
    materials: ['Beech'],
    featured: true
  },
  {
    id: '6',
    title: 'Artisanal Coffee Table',
    category: 'Living',
    description: 'Unique coffee table with mixed materials - wood and forged iron base.',
    price: 950,
    images: ['/images/int 9.jpg'],
    dimensions: { width: 48, height: 18, depth: 30 },
    materials: ['Oak', 'Forged Iron'],
    featured: false
  }
];

export const categories = [
  'All',
  'Dining',
  'Seating',
  'Storage',
  'Outdoor',
  'Living',
  'Bedroom'
];