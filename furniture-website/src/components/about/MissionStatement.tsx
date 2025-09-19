'use client';

import { motion } from 'framer-motion';

export default function MissionStatement() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Mission
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              "To create <span className="text-amber-600 font-semibold">timeless furniture</span> that 
              bridges generations, using <span className="text-amber-600 font-semibold">sustainable practices</span> and 
              <span className="text-amber-600 font-semibold"> master craftsmanship</span> to transform 
              houses into homes filled with stories and soul."
            </p>
            
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Heritage</h3>
                <p className="text-gray-600">Preserving traditional woodworking techniques for future generations</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
                <p className="text-gray-600">Commitment to eco-friendly materials and responsible practices</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-semibold text-gray-900 mb-2">Passion</h3>
                <p className="text-gray-600">Every piece crafted with love and attention to detail</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}