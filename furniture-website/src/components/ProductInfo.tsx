'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/models';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Category and Title */}
      <div>
        <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">
          {product.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          {product.title}
        </h1>
      </div>

      {/* Price */}
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-amber-800">
          ${product.price.toLocaleString()}
        </span>
        {product.featured && (
          <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
            Featured Piece
          </span>
        )}
      </div>

      {/* Description */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6 border-y border-gray-200">
        {/* Dimensions */}
        {product.dimensions && (
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Dimensions</h3>
            <p className="text-gray-600">
             {' {product.dimensions.width}" W × {product.dimensions.height}" H × {product.dimensions.depth}" D '}
            </p>
          </div>
        )}

        {/* Materials */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Materials & Finish</h3>
          <div className="flex flex-wrap gap-2">
            {product.materials.map((material, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <Link
          href={`/contact?product=${encodeURIComponent(product.title)}`}
          className="flex-1 bg-amber-600 text-white text-center py-4 px-8 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-200 text-lg"
        >
          Request a Quote
        </Link>
        
        <button className="flex-1 border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-full font-semibold hover:border-amber-600 hover:text-amber-700 transition-all duration-300">
          Save to Favorites
        </button>
      </div>

      {/* Additional Info */}
      <div className="pt-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Lead time: 4-6 weeks</span>
        </div>
      </div>
    </div>
  );
}
