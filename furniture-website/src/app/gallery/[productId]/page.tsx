import { notFound } from 'next/navigation';
import ProductView from '@/components/ProductView';
import { mockProducts } from '@/data/mockProducts';

// This function tells Next.js which product pages to pre-render
export async function generateStaticParams() {
  // For each product in mockData, return { productId: '1' }, { productId: '2' }, etc.
  return mockProducts.map((product) => ({
    productId: product.id, // This MUST match [productId] folder name
  }));
}

// This creates unique SEO metadata for each product page
export async function generateMetadata({ params }: { params: { productId: string } }) {
  // Find the product based on the URL (e.g., finds product for /gallery/1)
  const product = mockProducts.find(p => p.id === params.productId);
  
  if (!product) {
    return {
      title: 'Product Not Found | Karis Furniture',
    };
  }

  // Return unique title/description for each product
  return {
    title: `${product.title} | Karis Furniture`,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: product.images,
    },
  };
}

// Function to fetch a single product (replace with real database call later)
async function getProduct(productId: string) {
  // Simulate a database call with a delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Find the product with matching ID
  return mockProducts.find(product => product.id === productId);
}

// This is the main page component
export default async function ProductPage({ params }: { params: { productId: string } }) {
  // Get the product ID from the URL (e.g., "1" from /gallery/1)
  const product = await getProduct(params.productId);

  // If product doesn't exist, show 404 page
  if (!product) {
    notFound(); // This shows the not-found.tsx page
  }

  // Render the product view with the found product
  return (
    <main>
      <ProductView product={product} allProducts={mockProducts} />
    </main>
  );
}