'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden pt-20" > {/* Added pt-20 for fixed header */}
      {/* BACKGROUND LAYER - Main workshop image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/comb1.webp" // URL encoded path for "int 6.jpg"
          alt="Karis Furniture Workshop - Master craftsmen creating heirloom quality furniture"
          fill
          style={{ objectFit: 'cover' }}
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* MIDDLE LAYER - Texture overlay */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '25%']) }} 
        className="absolute inset-0 z-1"
      >
        {/* <Image
          src="/images/int 8.jpg" // URL encoded path for "int 8.jpg"
          alt="Wood texture and grain detail"
          fill
          style={{ objectFit: 'cover', mixBlendMode: 'soft-light', opacity: 0.7 }}
          priority
          quality={85}
          sizes="100vw"
        /> */}
      </motion.div>

      {/* TEXT CONTENT LAYER */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ['0%', '10%']),
          opacity,
        }}
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
        >
          Crafted with
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block text-amber-300 mt-2"
          >
            Passion & Precision
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-white/90 drop-shadow-md font-light"
        >
          Karis Furniture: Where timeless design meets heirloom quality craftsmanship for your home.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#ea580c',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-amber-600 text-white font-semibold text-lg py-4 px-12 rounded-full shadow-2xl transition-all duration-300 hover:shadow-amber-500/25"
          >
            Explore Our Gallery
            <span className="ml-2">→</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/80 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}