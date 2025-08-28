'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function IntroText() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-amber-50 to-white px-4 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMTUgMTVoMzB2MzBIMTV6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-amber-100 rounded-full px-4 py-2 mb-6">
            <span className="text-amber-700 font-medium text-sm uppercase tracking-wider">Established 2010</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-[#431407] leading-tight">
            We don't just build furniture
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="block font-semibold text-amber-600 mt-4"
            >
              We craft the soul of your home
            </motion.span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left"
        >
          <div className="space-y-4">
            <p className="text-lg text-[#78350f] leading-relaxed">
              For over a decade, Karis Furniture has been the trusted artisan for those who value uniqueness, 
              sustainability, and the timeless story told by solid wood.
            </p>
            <p className="text-lg text-[#78350f] leading-relaxed">
              Each piece is meticulously crafted using traditional joinery techniques and sustainably 
              sourced hardwoods, ensuring your furniture becomes a family heirloom.
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-[#78350f] leading-relaxed">
              Our master craftsmen blend time-honored techniques with contemporary design, creating 
              pieces that feel both timeless and perfectly suited for modern living.
            </p>
            <p className="text-lg text-[#78350f] leading-relaxed">
              From initial consultation to final installation, we work closely with you to bring 
              your vision to life with unparalleled attention to detail.
            </p>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-12 space-x-4"
        >
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-2 h-2 bg-amber-300 rounded-full opacity-60"></div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}