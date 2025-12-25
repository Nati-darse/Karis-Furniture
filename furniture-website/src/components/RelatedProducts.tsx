'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/models';
import { motion } from 'framer-motion';

interface RelatedProductsProps {
  products: Product[];
  currentProductId: string;
  category: string;
}

export default function RelatedProducts({ products, currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        You might also like
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/gallery/${product.id}`} className="block">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-4">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-amber-600 mt-1">{product.category}</p>
                <p className="text-lg font-bold text-amber-800 mt-2">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold"
          >
            View all {category} pieces
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </section>
  );
}
