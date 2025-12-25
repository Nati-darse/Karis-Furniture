'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, ProductFilters } from '@/types/models';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  categories: string[];
}

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [filters, setFilters] = useState<ProductFilters>({
    category: 'All',
    searchQuery: ''
  });

  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = filters.category === 'All' || product.category === filters.category;
      const matchesSearch = product.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, filters]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Gallery
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Browse our collection of handcrafted furniture pieces, each telling a unique story of craftsmanship and design.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="mb-12 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search furniture..."
                value={filters.searchQuery}
                onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <select
            value={filters.category}
            onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
            className="px-6 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-600">
          Showing {visibleProducts.length} of {filteredProducts.length} products
        </p>
      </div>

      {/* Products Grid */}
      <AnimatePresence>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </AnimatePresence>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center mt-16">
          <motion.button
            onClick={loadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300 shadow-lg hover:shadow-amber-200"
          >
            Load More Products
          </motion.button>
        </div>
      )}

      {/* No results message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          <button
            onClick={() => setFilters({ category: 'All', searchQuery: '' })}
            className="mt-4 text-amber-600 hover:text-amber-700 font-semibold"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
