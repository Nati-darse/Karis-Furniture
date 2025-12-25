'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Mock data for featured projects
const featuredProjects = [
  {
    id: 1,
    title: "The Table",
    category: "Dining",
    imageUrl: "/images/int1.jpg",
  },
  {
    id: 2,
    title: "Modern Scandinavian Chair",
    category: "Seating",
    imageUrl: "/images/int2.jpg",
  },
  {
    id: 3,
    title: "Artisanal Cabinetry",
    category: "Storage",
    imageUrl: "/images/int3.jpg",
  },
];

// Custom animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Staggers the animation of each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 bg-[#fff7ed]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#431407]">
            Signature <span className="text-orange-600">Creations</span>
          </h2>
          <p className="text-xl text-[#78350f] max-w-3xl mx-auto">
            A glimpse into our portfolio of bespoke pieces, where every curve, joint, and finish tells a story of dedication.
          </p>
        </motion.div>

        {/* Asymmetrical Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Project 1 - Large */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-8 group cursor-pointer"
          >
            <Link href="/gallery">
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={featuredProjects[0].imageUrl}
                  alt={featuredProjects[0].title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                  <div className="p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-orange-300 font-semibold">{featuredProjects[0].category}</p>
                    <h3 className="text-3xl font-bold text-white">{featuredProjects[0].title}</h3>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Project 2 & 3 - Stacked on the right */}
          <motion.div variants={itemVariants} className="md:col-span-4 flex flex-col gap-6">
            {/* Project 2 */}
            <motion.div variants={itemVariants} className="group cursor-pointer flex-1">
              <Link href="/gallery">
                <div className="relative h-60 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={featuredProjects[1].imageUrl}
                    alt={featuredProjects[1].title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                    <div className="p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-orange-300 font-semibold text-sm">{featuredProjects[1].category}</p>
                      <h3 className="text-xl font-bold text-white">{featuredProjects[1].title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={itemVariants} className="group cursor-pointer flex-1">
              <Link href="/gallery">
                <div className="relative h-60 overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={featuredProjects[2].imageUrl}
                    alt={featuredProjects[2].title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end">
                    <div className="p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-orange-300 font-semibold text-sm">{featuredProjects[2].category}</p>
                      <h3 className="text-xl font-bold text-white">{featuredProjects[2].title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-300 group"
          >
            View Full Gallery
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
