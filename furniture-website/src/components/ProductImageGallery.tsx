// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// interface ProductImageGalleryProps {
//   images: string[];
//   productTitle: string;
// }

// export default function ProductImageGallery({ images, productTitle }: ProductImageGalleryProps) {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   return (
//     <div className="space-y-4">
//       {/* Main Image */}
//       <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selectedImageIndex}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="h-full w-full"
//           >
//             <Image
//               src={images[selectedImageIndex]}
//               alt={`${productTitle} - Image ${selectedImageIndex + 1}`}
//               fill
//               style={{ objectFit: 'cover' }}
//               className="cursor-zoom-in"
//               sizes="(max-width: 768px) 100vw, 50vw"
//               priority={selectedImageIndex === 0}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Thumbnail Strip */}
//       {images.length > 1 && (
//         <div className="flex gap-3 overflow-x-auto py-2">
//           {images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedImageIndex(index)}
//               className={`relative aspect-square h-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
//                 selectedImageIndex === index
//                   ? 'border-amber-600 ring-2 ring-amber-200'
//                   : 'border-gray-200 hover:border-gray-300'
//               }`}
//             >
//               <Image
//                 src={image}
//                 alt={`Thumbnail ${index + 1}`}
//                 fill
//                 style={{ objectFit: 'cover' }}
//                 sizes="80px"
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductImageGalleryProps {
  images: string[];
  productTitle: string;
}

export default function ProductImageGallery({ images, productTitle }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Clamp index if images change (prevents out-of-range access)
  useEffect(() => {
    if (images.length === 0) {
      setSelectedImageIndex(0);
      return;
    }
    if (selectedImageIndex >= images.length) {
      setSelectedImageIndex(0);
    }
  }, [images, selectedImageIndex]);

  // Guard for empty images
  if (!images || images.length === 0) {
    return (
      <div className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center text-sm text-gray-500">
        No image available
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            // use the image src as key for more stable transitions
            key={images[selectedImageIndex]}
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
              key={image + index}
              type="button"
              onClick={() => setSelectedImageIndex(index)}
              aria-pressed={selectedImageIndex === index}
              aria-label={`View ${productTitle} image ${index + 1}`}
              className={`relative aspect-square h-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                selectedImageIndex === index
                  ? 'border-amber-600 ring-2 ring-amber-200'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Image
                src={image}
                alt={`${productTitle} thumbnail ${index + 1}`}
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