import ProcessTimeline from '@/components/ProcessTimeline';

export default function ProcessPage() {
  return (
    <main className="bg-gradient-to-b from-amber-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Craftsmanship Process
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the meticulous journey each piece undertakes—from raw, sustainable materials 
            to heirloom-quality furniture that tells your story for generations.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <ProcessTimeline />

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600">Sustainably Sourced</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const metadata = {
  title: 'Our Process | Karis Furniture',
  description: 'Discover our meticulous 6-step process for creating heirloom-quality custom furniture. From consultation to installation, we ensure perfection at every stage.',
};