import TestimonialGrid from '@/components/testimonials/TestimonialGrid';
import Link from 'next/link'

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Discover why homeowners across the country choose Karis Furniture for their 
            custom furniture needs. Real stories from real clients.
          </p>
        </div>
      </div>

      {/* Testimonials Grid */}
      <TestimonialGrid variant="full" />

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">150+</div>
              <div className="text-gray-600">Happy Families</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">12</div>
              <div className="text-gray-600">States Served</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-amber-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Story?
          </h2>
          <p className="text-amber-100 text-xl mb-8">
            Join our family of satisfied clients and experience the Karis difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 text-lg"
            >
              Start Your Project
            </a>
            <Link
              href="/gallery"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-amber-600 transition-all duration-300 text-lg"
            >
              View Our Gallery
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Testimonials | Karis Furniture',
  description: 'Read real stories from our clients about their experience with Karis Furniture. See how we\'ve transformed homes with custom, handcrafted furniture.',
};