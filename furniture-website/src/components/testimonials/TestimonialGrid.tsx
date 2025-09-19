'use client';

import { useState } from 'react';
import { testimonials } from '@/types/testimonial';
import TestimonialCard from './TestimonialCard';

interface TestimonialGridProps {
  variant?: 'homepage' | 'full';
}

export default function TestimonialGrid({ variant = 'full' }: TestimonialGridProps) {
  const [filter, setFilter] = useState('all');
  
  const filteredTestimonials = variant === 'homepage' 
    ? testimonials.filter(t => t.featured).slice(0, 3)
    : filter === 'all' 
      ? testimonials 
      : testimonials.filter(t => t.location.includes(filter));

  const locations = Array.from(new Set(testimonials.map(t => {
    const state = t.location.split(', ')[1];
    return state || t.location;
  })));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {variant === 'homepage' ? 'Client Stories' : 'What Our Clients Say'}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {variant === 'homepage' 
            ? 'Discover why homeowners trust us with their most important spaces'
            : 'Real stories from real clients about their Karis Furniture experience'
          }
        </p>
      </div>

      {/* Filter (only on full page) */}
      {variant === 'full' && (
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              filter === 'all'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Locations
          </button>
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setFilter(location)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === location
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className={`grid gap-8 ${
        variant === 'homepage' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {filteredTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            variant={testimonial.featured ? 'featured' : 'default'}
          />
        ))}
      </div>

      {/* Results count for full page */}
      {variant === 'full' && (
        <div className="text-center mt-8 text-gray-600">
          Showing {filteredTestimonials.length} of {testimonials.length} testimonials
          {filter !== 'all' && ` from ${filter}`}
        </div>
      )}

      {/* CTA for homepage */}
      {variant === 'homepage' && filteredTestimonials.length > 0 && (
        <div className="text-center mt-12">
          <a
            href="/testimonials"
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-lg"
          >
            Read all testimonials
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}