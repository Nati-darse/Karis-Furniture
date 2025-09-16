'use client';

import Link from 'next/link'
import { Product } from '@/types/Product';
import ProductImageGallery from './ProductImageGallery';
import ProductInfo from './ProductInfo';
import RelatedProducts from './RelatedProducts';

interface ProductViewProps {
  product: Product;
  allProducts: Product[];
}

export default function ProductView({ product, allProducts }: ProductViewProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-amber-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/gallery" className="hover:text-amber-600">Gallery</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.title}</span>
      </nav>

      {/* Main Product Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Image Gallery */}
        <div>
          <ProductImageGallery 
            images={product.images} 
            productTitle={product.title}
          />
        </div>

        {/* Product Info */}
        <div>
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        products={allProducts}
        currentProductId={product.id}
        category={product.category}
      />
    </div>
  );
}