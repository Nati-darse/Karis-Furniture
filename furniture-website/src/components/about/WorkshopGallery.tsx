'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const workshopImages = [
  {
    src: "/images/int1.jpg",
    alt: "Karis Furniture workshop showing organized tools and workbenches",
    caption: "Our main workshop space where ideas come to life"
  },
  {
    src: "/images/int2.jpg",
    alt: "Close-up of woodworking tools and machinery",
    caption: "Precision tools for perfect craftsmanship"
  },
  {
    src: "/images/int3.jpg",
    alt: "Artisan working on a furniture piece",
    caption: "Hand-finishing techniques that make each piece unique"
  },
  {
    src: "/images/int4.jpg",
    alt: "Wood storage area with various timber types",
    caption: "Sustainably sourced wood selection"
  }
];

export default function WorkshopGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Workshop
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where tradition meets innovation in a space designed for creativity and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshopImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-4">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <p className="text-gray-600 text-center">{image.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}