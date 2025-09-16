import ProductGrid from '@/components/ProductGrid';
import { mockProducts, categories } from '@/data/mockProducts';

// In a real app, this would fetch from your database/API
async function getProducts() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mockProducts;
}

export default async function GalleryPage() {
  const products = await getProducts();

  return (
    <main>
      <ProductGrid products={products} categories={categories} />
    </main>
  );
}

// For SEO - add this to generate metadata for the page
export const metadata = {
  title: 'Gallery | Karis Furniture',
  description: 'Browse our collection of handcrafted mid-century modern furniture. Custom pieces for indoor and outdoor living.',
};