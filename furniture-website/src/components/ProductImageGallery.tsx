'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductImageGalleryProps {
  images: string[];
  productTitle: string;
}

export default function ProductImageGallery({ images, productTitle }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            <Image
              src={images[selectedImageIndex]}
              alt={`${productTitle} - Image ${selectedImageIndex + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              className="cursor-zoom-in"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={selectedImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto py-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative aspect-square h-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                selectedImageIndex === index
                  ? 'border-amber-600 ring-2 ring-amber-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}