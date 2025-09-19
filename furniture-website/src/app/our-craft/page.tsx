import MissionStatement from '@/components/about/MissionStatement';
import TeamShowcase from '@/components/about/TeamShowcase';
import CoreValues from '@/components/about/CoreValues';
import WorkshopGallery from '@/components/about/WorkshopGallery';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/workshop-hero.jpg')" }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The Story Behind the Craft
          </h1>
          <p className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto">
            For over a decade, we've been turning visions into heirlooms, 
            one piece of wood at a time.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Journey
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Karis Furniture began in 2010 with a simple belief: furniture should tell a story. 
              What started as a one-man workshop has grown into a team of dedicated craftsmen 
              united by a passion for creating pieces that stand the test of time.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The name "Karis" comes from the Greek word for grace and kindness—values that 
              guide our approach to both our craft and our clients. We believe that beautiful 
              furniture should be accessible, sustainable, and built to become part of your 
              family's story.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Today, we continue to blend traditional woodworking techniques with modern design, 
              creating custom pieces that reflect both our heritage and our vision for the future 
              of sustainable furniture making.
            </p>
            
            <blockquote className="border-l-4 border-amber-600 pl-6 italic text-gray-700 text-xl my-12">
              "We don't just build furniture; we craft the soul of your home. 
              Every piece carries the mark of its maker and the story of its owner."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Components */}
      <MissionStatement />
      <TeamShowcase />
      <CoreValues />
      <WorkshopGallery />

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Something Together?
          </h2>
          <p className="text-amber-100 text-xl mb-8">
            Let's discuss your vision and bring it to life with the care and craftsmanship it deserves.
          </p>
          <button className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-50 transition-all duration-300 text-lg">
            Start Your Project
          </button>
        </div>
      </section>
    </main>
  );
}

export const metadata = {
  title: 'Our Craft | Karis Furniture',
  description: 'Meet the artisans behind Karis Furniture. Learn about our story, values, and commitment to sustainable, handcrafted furniture that lasts generations.',
};