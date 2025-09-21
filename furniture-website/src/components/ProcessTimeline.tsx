'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {  processSteps } from '@/types/process';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          The Karis <span className="text-amber-600">Process</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          From initial concept to final installation, every piece undergoes our meticulous 
          six-step process ensuring unparalleled quality and craftsmanship.
        </motion.p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-6 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.button
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveStep(step.id)}
              className={`text-center p-4 rounded-2xl transition-all duration-300 ${
                activeStep === step.id
                  ? 'bg-amber-600 text-white shadow-2xl transform scale-105'
                  : 'bg-white text-gray-700 shadow-lg hover:shadow-xl hover:bg-amber-50'
              }`}
            >
              <div className="text-3xl mb-3">{step.icon}</div>
              <h3 className="font-semibold text-sm mb-2">Step {step.id}</h3>
              <p className="text-xs font-medium">{step.title}</p>
            </motion.button>
          ))}
        </div>

        {/* Active Step Content */}
        <AnimatePresence mode="wait">
          {processSteps.map((step) => (
            activeStep === step.id && (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-12 items-start"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div>
                      <span className="text-sm text-amber-600 font-semibold">STEP {step.id}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h3>
                      {step.duration && (
                        <p className="text-gray-600">Duration: {step.duration}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {step.description}
                  </p>

                  {step.highlights && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">What to expect:</h4>
                      <ul className="space-y-2">
                        {step.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-center gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden space-y-12">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >
            {/* Step Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <div>
                <span className="text-sm text-amber-600 font-semibold">STEP {step.id}</span>
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                {step.duration && (
                  <p className="text-sm text-gray-600">Duration: {step.duration}</p>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src={step.image}
                alt={step.imageAlt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>

              {step.highlights && (
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Highlights:</h4>
                  <ul className="space-y-2">
                    {step.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center mt-20"
      >
        <div className="bg-amber-50 rounded-2xl p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
           {" Experience the Karis difference. Let's create something beautiful together."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-700 transition-all duration-300">
              Begin Your Consultation
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-amber-600 hover:text-amber-700 transition-all duration-300">
              View Our Gallery
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}