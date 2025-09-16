'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <Link href={`/gallery/${product.id}`}>
        <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
          
          {product.featured && (
            <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <span className="text-sm text-amber-600 font-medium uppercase tracking-wide">
            {product.category}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
            {product.title}
          </h3>
          <p className="text-gray-600 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center pt-2">
            <span className="text-2xl font-bold text-amber-800">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">
              View Details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}